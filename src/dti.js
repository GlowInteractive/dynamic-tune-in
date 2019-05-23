export default {
  get todayMs() {
    return Date.parse(this.today)
  },
  get premiereMs() {
    return Date.parse(this.premiereDate)
  },
  get todayStr() {
    return this.today.toDateString()
  },
  get premiereStr() {
    return this.premiereDate.toDateString()
  },
  get isPremiere() {
    return this.todayStr === this.premiereStr
  },
  get isBeforePremiere() {
    return this.todayMs < this.premiereMs
  },
  get isAfterPremiere() {
    return this.todayMs > this.premiereMs
  },
  parseStr(d) {
    return Date.parse(new Date(this.addYear(d)))
  },
  addYear(dateString) {
    return `${dateString}, ${new Date().getFullYear()} 00:00:00`
  },
  isBetween(d1, d2) {
    return (
      this.todayMs >= this.parseStr(d1) && this.todayMs <= this.parseStr(d2)
    )
  },
  isBefore(d) {
    return this.todayMs < this.parseStr(d)
  },
  isAfter(d) {
    return this.todayMs > this.parseStr(d)
  },
  create({ premiereDate, today = new Date() }) {
    this.setToday(today)
    this.premiereDate = new Date(this.addYear(premiereDate))
  },
  setToday(today) {
    this.today =
      typeof today === 'object' ? today : new Date(this.addYear(today))
  }
}
