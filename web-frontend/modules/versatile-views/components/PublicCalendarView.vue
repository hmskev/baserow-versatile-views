<template>
  <section class="public-calendar" aria-label="Calendar">
    <div class="public-calendar__toolbar">
      <button type="button" class="public-calendar__nav" @click="moveMonth(-1)" aria-label="Previous month">‹</button>
      <h2 class="public-calendar__month">{{ monthLabel }}</h2>
      <button type="button" class="public-calendar__nav" @click="moveMonth(1)" aria-label="Next month">›</button>
      <button type="button" class="public-calendar__today" @click="goToday">Today</button>
    </div>

    <div class="public-calendar__weekdays" aria-hidden="true">
      <div v-for="weekday in weekdays" :key="weekday" class="public-calendar__weekday">{{ weekday }}</div>
    </div>

    <div class="public-calendar__grid">
      <div
        v-for="day in days"
        :key="day.key"
        class="public-calendar__day"
        :class="{ 'public-calendar__day--outside': !day.inMonth, 'public-calendar__day--today': day.isToday }"
      >
        <div class="public-calendar__day-number">{{ day.number }}</div>
        <div class="public-calendar__events">
          <article v-for="item in eventsByDay[day.key] || []" :key="`${day.key}-${item.id}`" class="public-calendar__event">
            <strong>{{ item.label || item.title || item.id }}</strong>
            <span v-if="item.start && item.start.indexOf('T') !== -1">{{ timeLabel(item.start) }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const pad = (value) => String(value).padStart(2, '0')
const dateKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`

export default {
  name: 'PublicCalendarView',
  props: {
    items: { type: Array, default: () => [] },
  },
  data() {
    const today = new Date()
    return { anchor: new Date(today.getFullYear(), today.getMonth(), 1) }
  },
  computed: {
    weekdays() {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    monthLabel() {
      return this.anchor.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
    },
    days() {
      const first = new Date(this.anchor.getFullYear(), this.anchor.getMonth(), 1)
      const mondayOffset = (first.getDay() + 6) % 7
      const start = new Date(first)
      start.setDate(first.getDate() - mondayOffset)
      return Array.from({ length: 42 }, (_, index) => {
        const date = new Date(start)
        date.setDate(start.getDate() + index)
        const today = new Date()
        return {
          key: dateKey(date),
          number: date.getDate(),
          inMonth: date.getMonth() === this.anchor.getMonth(),
          isToday: dateKey(date) === dateKey(today),
        }
      })
    },
    eventsByDay() {
      return this.items.reduce((grouped, item) => {
        const start = this.parseDate(item.start || item.date)
        if (!start) return grouped
        const key = dateKey(start)
        if (!grouped[key]) grouped[key] = []
        grouped[key].push(item)
        return grouped
      }, {})
    },
  },
  methods: {
    parseDate(value) {
      if (!value) return null
      const parsed = new Date(value)
      return Number.isNaN(parsed.getTime()) ? null : parsed
    },
    timeLabel(value) {
      const date = this.parseDate(value)
      return date ? date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }) : ''
    },
    moveMonth(amount) {
      this.anchor = new Date(this.anchor.getFullYear(), this.anchor.getMonth() + amount, 1)
    },
    goToday() {
      const today = new Date()
      this.anchor = new Date(today.getFullYear(), today.getMonth(), 1)
    },
  },
}
</script>

<style scoped>
.public-calendar { height: 100%; min-width: 680px; padding: 12px; box-sizing: border-box; color: #172b4d; }
.public-calendar__toolbar { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.public-calendar__month { flex: 1; margin: 0; text-align: center; font-size: 18px; font-weight: 600; }
.public-calendar__nav, .public-calendar__today { border: 1px solid #dfe1e6; border-radius: 5px; background: white; color: #344563; cursor: pointer; }
.public-calendar__nav { width: 32px; height: 32px; font-size: 22px; line-height: 20px; }
.public-calendar__today { padding: 7px 12px; font-size: 13px; }
.public-calendar__weekdays, .public-calendar__grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); }
.public-calendar__weekday { padding: 8px; color: #6b778c; font-size: 11px; font-weight: 600; text-transform: uppercase; }
.public-calendar__day { min-height: 112px; border: 1px solid #dfe1e6; border-right: 0; border-bottom: 0; background: white; padding: 7px; overflow: hidden; }
.public-calendar__day:nth-child(7n) { border-right: 1px solid #dfe1e6; }
.public-calendar__day:nth-last-child(-n + 7) { border-bottom: 1px solid #dfe1e6; }
.public-calendar__day--outside { background: #f7f8fa; color: #97a0af; }
.public-calendar__day--today { box-shadow: inset 0 3px 0 #579dff; }
.public-calendar__day-number { font-size: 12px; font-weight: 600; margin-bottom: 6px; }
.public-calendar__events { display: grid; gap: 4px; }
.public-calendar__event { display: grid; gap: 2px; padding: 5px 6px; border-left: 3px solid #579dff; border-radius: 3px; background: #deebff; color: #172b4d; font-size: 11px; overflow: hidden; }
.public-calendar__event strong { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.public-calendar__event span { color: #5e6c84; font-size: 10px; }
</style>
