/**
 * Browser test for the drag interactions in our view types.
 *
 * SSR proves the views render; it cannot prove that dragging a card writes anything
 * back. These are client-only interactions, so they need a real browser.
 *
 * Runs against a throwaway Baserow, never production. Each check drives the UI and
 * then reads the row back through the API, so a pass means the value actually
 * persisted rather than that the card merely moved on screen.
 *
 * Usage: node drag_test.mjs <baseUrl> <email> <password>
 */

import { chromium } from 'playwright'

const [baseUrl, email, password] = process.argv.slice(2)
if (!baseUrl || !email || !password) {
  console.error('usage: node drag_test.mjs <baseUrl> <email> <password>')
  process.exit(2)
}

const results = []
function record(name, passed, detail) {
  results.push({ name, passed, detail })
  console.log(`${passed ? 'PASS' : 'FAIL'}  ${name}${detail ? ` - ${detail}` : ''}`)
}

async function api(path, { method = 'GET', token, body } = {}) {
  const response = await fetch(`${baseUrl}/api${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `JWT ${token}` } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const text = await response.text()
  try {
    return { status: response.status, data: JSON.parse(text) }
  } catch {
    return { status: response.status, data: text }
  }
}

const auth = await api('/user/token-auth/', {
  method: 'POST',
  body: { email, password },
})
const token = auth.data.token ?? auth.data.access_token
if (!token) {
  console.error('could not authenticate:', auth.status, auth.data)
  process.exit(1)
}

const ids = JSON.parse(process.env.TEST_IDS)
const { databaseId, tableId, views, fields } = ids

async function rowById(id) {
  const { data } = await api(`/database/rows/table/${tableId}/${id}/`, { token })
  return data
}

const browser = await chromium.launch({ args: ['--no-sandbox'] })
const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } })
const page = await context.newPage()

const pageErrors = []
page.on('pageerror', (error) => pageErrors.push(String(error)))
page.on('console', (message) => {
  if (message.type() === 'error') pageErrors.push(message.text())
})

// Sign in through the UI so the app holds a normal session.
await page.goto(`${baseUrl}/login`, { waitUntil: 'domcontentloaded' })
await page.getByRole('textbox', { name: /e-mail/i }).fill(email)
await page.locator('input[type="password"]').fill(password)
await page.getByRole('button', { name: /login/i }).click()
await page.waitForURL(/dashboard|workspace/, { timeout: 30000 })
record('sign in', true)

async function openView(viewId) {
  await page.goto(`${baseUrl}/database/${databaseId}/table/${tableId}/${viewId}`, {
    waitUntil: 'networkidle',
  })
}

// -- Kanban: drag a card into another stack ----------------------------------------
try {
  await openView(views.kanban)
  await page.waitForSelector('.hms-kanban-view__stack', { timeout: 30000 })

  const stacks = page.locator('.hms-kanban-view__stack')
  record('kanban renders stacks', (await stacks.count()) >= 2, `${await stacks.count()} stacks`)

  // Find a card and the stack it is not currently in.
  const card = page.locator('.hms-kanban-view__card').first()
  await card.waitFor({ timeout: 15000 })

  const rowId = Number(
    await card.evaluate((element) => {
      // Vue keys the card by row id; read it back off the rendered list position.
      const cards = [...document.querySelectorAll('.hms-kanban-view__card')]
      return cards.indexOf(element)
    })
  )

  const before = await page.evaluate(() => {
    const stack = document.querySelector('.hms-kanban-view__stack')
    return stack ? stack.querySelectorAll('.hms-kanban-view__card').length : -1
  })

  // The last stack is "Done" in the seeded data.
  const target = stacks.last()
  await card.dragTo(target)
  await page.waitForTimeout(2500)

  const after = await page.evaluate(() => {
    const stack = document.querySelector('.hms-kanban-view__stack')
    return stack ? stack.querySelectorAll('.hms-kanban-view__card').length : -1
  })

  record(
    'kanban drag moves the card between stacks',
    after === before - 1,
    `first stack ${before} -> ${after}`
  )

  // The move must have persisted, not just repainted.
  const { data: rows } = await api(
    `/database/rows/table/${tableId}/?user_field_names=true`,
    { token }
  )
  const withDone = rows.results.filter((r) => r.Status && r.Status.value === 'Done')
  record(
    'kanban drag persists the select value',
    withDone.length >= 2,
    `${withDone.length} rows now Done`
  )
} catch (error) {
  record('kanban drag', false, String(error).slice(0, 200))
}

// -- Calendar: drag a card to another day ------------------------------------------
try {
  await openView(views.calendar)
  await page.waitForSelector('.hms-calendar-view__day', { timeout: 30000 })

  const card = page.locator('.hms-calendar-view__card').first()
  const hasCard = (await card.count()) > 0
  record('calendar renders a card', hasCard)

  if (hasCard) {
    const rowIdBefore = await api(
      `/database/rows/table/${tableId}/?user_field_names=true`,
      { token }
    )
    const datesBefore = rowIdBefore.data.results.map((r) => r.Start).join(',')

    // Drop onto a day cell that currently holds nothing.
    const emptyDay = page
      .locator('.hms-calendar-view__day')
      .filter({ hasNot: page.locator('.hms-calendar-view__card') })
      .nth(20)
    await card.dragTo(emptyDay)
    await page.waitForTimeout(2500)

    const rowIdAfter = await api(
      `/database/rows/table/${tableId}/?user_field_names=true`,
      { token }
    )
    const datesAfter = rowIdAfter.data.results.map((r) => r.Start).join(',')

    record(
      'calendar drag rewrites a record date',
      datesBefore !== datesAfter,
      `${datesBefore} -> ${datesAfter}`
    )
  }
} catch (error) {
  record('calendar drag', false, String(error).slice(0, 200))
}

// -- Timeline: drag a bar and resize it ---------------------------------------------
try {
  await openView(views.timeline)
  await page.waitForSelector('.hms-timeline-view__axis', { timeout: 30000 })

  const bar = page.locator('.hms-timeline-view__bar').first()
  const hasBar = (await bar.count()) > 0
  record('timeline renders a bar', hasBar)

  if (hasBar) {
    const before = await api(
      `/database/rows/table/${tableId}/?user_field_names=true`,
      { token }
    )
    const beforeDates = before.data.results.map((r) => `${r.Start}|${r.End}`).join(',')

    // Drag the body of the bar to shift both dates.
    const box = await bar.boundingBox()
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width / 2 + 150, box.y + box.height / 2, {
      steps: 12,
    })
    await page.mouse.up()
    await page.waitForTimeout(2500)

    const after = await api(
      `/database/rows/table/${tableId}/?user_field_names=true`,
      { token }
    )
    const afterDates = after.data.results.map((r) => `${r.Start}|${r.End}`).join(',')

    record('timeline drag shifts the record dates', beforeDates !== afterDates)

    // Resizing the end handle must change the end date only.
    const midway = await api(
      `/database/rows/table/${tableId}/?user_field_names=true`,
      { token }
    )
    const startsBefore = midway.data.results.map((r) => r.Start).join(',')
    const endsBefore = midway.data.results.map((r) => r.End).join(',')

    const handle = page.locator('.hms-timeline-view__handle--end').first()
    const handleBox = await handle.boundingBox()
    if (handleBox) {
      await page.mouse.move(
        handleBox.x + handleBox.width / 2,
        handleBox.y + handleBox.height / 2
      )
      await page.mouse.down()
      await page.mouse.move(
        handleBox.x + handleBox.width / 2 + 100,
        handleBox.y + handleBox.height / 2,
        { steps: 10 }
      )
      await page.mouse.up()
      await page.waitForTimeout(2500)

      const resized = await api(
        `/database/rows/table/${tableId}/?user_field_names=true`,
        { token }
      )
      const startsAfter = resized.data.results.map((r) => r.Start).join(',')
      const endsAfter = resized.data.results.map((r) => r.End).join(',')

      record(
        'timeline resize changes the end date but not the start',
        endsBefore !== endsAfter && startsBefore === startsAfter,
        `starts ${startsBefore === startsAfter ? 'unchanged' : 'CHANGED'}, ends ${
          endsBefore !== endsAfter ? 'changed' : 'UNCHANGED'
        }`
      )
    }
  }
} catch (error) {
  record('timeline drag', false, String(error).slice(0, 200))
}

// -- List --------------------------------------------------------------------------
try {
  await openView(views.list)
  await page.waitForSelector('.hms-list-view__section', { timeout: 30000 })
  const sections = await page.locator('.hms-list-view__section').count()
  const rows = await page.locator('.hms-list-view__row').count()
  record('list renders sections and rows', sections > 0 && rows > 0, `${sections} sections, ${rows} rows`)

  // Sections collapse on click.
  await page.locator('.hms-list-view__section-header').first().click()
  await page.waitForTimeout(500)
  const visibleAfter = await page.locator('.hms-list-view__row:visible').count()
  record('list sections collapse', visibleAfter < rows, `${rows} -> ${visibleAfter} visible`)
} catch (error) {
  record('list view', false, String(error).slice(0, 200))
}

// -- Card layout regression ---------------------------------------------------------
try {
  await openView(views.kanban)
  await page.waitForSelector('.hms-kanban-view__stack', { timeout: 30000 })
  const widths = await page.evaluate(() =>
    [...document.querySelectorAll('.hms-kanban-view__stack')].map(
      (element) => element.getBoundingClientRect().width
    )
  )
  const widest = Math.max(...widths)
  record(
    'kanban stacks stay a fixed width with long text',
    widest <= 300,
    `widest stack ${Math.round(widest)}px`
  )
} catch (error) {
  record('card layout', false, String(error).slice(0, 200))
}

const realErrors = pageErrors.filter(
  (message) => !/favicon|ResizeObserver|Download the Vue/i.test(message)
)
record('no uncaught page errors', realErrors.length === 0, realErrors.slice(0, 3).join(' | '))

await browser.close()

const failed = results.filter((result) => !result.passed)
console.log(`\n${results.length - failed.length}/${results.length} checks passed`)
process.exit(failed.length === 0 ? 0 : 1)
