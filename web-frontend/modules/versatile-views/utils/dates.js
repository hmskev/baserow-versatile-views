import moment from '@baserow/modules/core/moment'

/**
 * Date helpers shared by the Calendar and Timeline views.
 *
 * Baserow date fields come in two shapes: date only ("2026-08-06") and date with
 * time, which is stored in UTC and displayed in the field's timezone. Reading and
 * writing has to respect that or records land on the wrong day for anyone east or
 * west of UTC.
 */

/**
 * The timezone a field's values should be read and displayed in.
 */
export function fieldTimezone(field) {
  if (!field?.date_include_time) {
    return null
  }
  return field.date_force_timezone || moment.tz.guess()
}

/**
 * Reads a row's value for a date field as a moment in the field's timezone.
 *
 * Returns null when the record has no date, which callers treat as "not placeable"
 * rather than as an error.
 */
export function readDate(row, field) {
  if (!field) {
    return null
  }

  const value = row[`field_${field.id}`]
  if (value === null || value === undefined || value === '') {
    return null
  }

  const timezone = fieldTimezone(field)
  const parsed = timezone ? moment.utc(value).tz(timezone) : moment.utc(value)

  return parsed.isValid() ? parsed : null
}

/**
 * Formats a moment for writing back to a date field.
 *
 * A date-only field must not receive a time component, and a date-time field must be
 * sent in UTC, which is how Baserow stores it.
 */
export function writeDate(value, field) {
  if (value === null) {
    return null
  }

  if (!field.date_include_time) {
    return value.format('YYYY-MM-DD')
  }

  return value.clone().utc().format()
}

/**
 * Moves a moment onto a different calendar day, keeping its time of day.
 *
 * Dragging a record to another day should not silently reset a meeting from 14:00 to
 * midnight, so only the date part changes.
 */
export function moveToDay(original, targetDay) {
  return original
    .clone()
    .year(targetDay.year())
    .month(targetDay.month())
    .date(targetDay.date())
}

/**
 * Every day shown in a month grid, including the leading and trailing days from the
 * neighbouring months that fill the first and last week.
 *
 * @param monthAnchor  Any moment inside the month to build.
 * @param weekStart    0 for Sunday, 1 for Monday.
 */
export function monthGridDays(monthAnchor, weekStart = 1) {
  const firstOfMonth = monthAnchor.clone().startOf('month')
  const lastOfMonth = monthAnchor.clone().endOf('month')

  const start = firstOfMonth.clone()
  while (start.day() !== weekStart) {
    start.subtract(1, 'day')
  }

  const end = lastOfMonth.clone()
  const weekEnd = (weekStart + 6) % 7
  while (end.day() !== weekEnd) {
    end.add(1, 'day')
  }

  const days = []
  const cursor = start.clone()
  while (cursor.isSameOrBefore(end, 'day')) {
    days.push(cursor.clone())
    cursor.add(1, 'day')
  }

  return days
}

/**
 * Splits a flat list of days into weeks of seven.
 */
export function chunkIntoWeeks(days) {
  const weeks = []
  for (let index = 0; index < days.length; index += 7) {
    weeks.push(days.slice(index, index + 7))
  }
  return weeks
}

/**
 * A stable key for a day, used to bucket records and to key template loops.
 */
export function dayKey(value) {
  return value.format('YYYY-MM-DD')
}
