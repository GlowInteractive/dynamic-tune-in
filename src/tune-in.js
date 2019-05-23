import dti from './dti.js'

export default {
  tuneIn: false,
  fallback: false,
  getElSelector() {
    return this.tuneIn || this.fallback
  },
  createShowFn(show) {
    return str => {
      if (show) {
        this.tuneIn = str
      }
    }
  },
  createShowObj(show) {
    return {
      show: this.createShowFn(show)
    }
  },
  create({ premiereDate, today, fallback }) {
    this.fallback = fallback
    dti.create({ premiereDate, today })
  },
  getToday() {
    return dti.today
  },
  updateToday(today) {
    dti.setToday(today)
  },
  between(d1, d2) {
    return this.createShowObj(dti.isBetween(d1, d2))
  },
  after(d) {
    return this.createShowObj(dti.isAfter(d))
  },
  afterPremiere() {
    return this.createShowObj(dti.isAfterPremiere)
  },
  dayOfPremiere() {
    return this.createShowObj(dti.isPremiere)
  }
}
