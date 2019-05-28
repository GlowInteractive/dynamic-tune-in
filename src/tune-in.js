import dti from './date-helper.js'

export default {
  tuneIn: false,
  fallback: false,
  dates: [],
  createShowFn(isInDateRange, str) {
    return () => {
      if (isInDateRange()) {
        this.tuneIn = str
      } else {
        this.tuneIn = this.fallback
      }
    }
  },
  addDate(fn, str) {
    this.dates.push({ test: this.createShowFn(fn, str) })
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
    return {
      show: str => {
        this.addDate(() => dti.isBetween(d1, d2), str)
      }
    }
  },
  after(d) {
    return {
      show: str => {
        return this.addDate(() => dti.isAfter(d), str)
      }
    }
  },
  afterPremiere() {
    return {
      show: str => this.addDate(() => dti.isAfterPremiere, str)
    }
  },
  dayOfPremiere() {
    return {
      show: str => {
        this.addDate(() => dti.isPremiere, str)
      }
    }
  },
  getElSelector() {
    this.recalculate()
    return this.tuneIn || this.fallback
  },
  getCurrent() {
    return this.tuneIn || this.fallback
  },
  recalculate() {
    this.dates.forEach(date => date.test())
  }
}
