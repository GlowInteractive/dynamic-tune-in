window.TuneIn = (function(e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var i = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function(e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function(e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function(e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function(t) {
              return e[t]
            }.bind(null, i)
          )
      return n
    }),
    (r.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default
            }
          : function() {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ''),
    r((r.s = 0))
  )
})([
  function(e, t, r) {
    'use strict'
    function n(e) {
      return (n =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function(e) {
              return typeof e
            }
          : function(e) {
              return e &&
                'function' == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? 'symbol'
                : typeof e
            })(e)
    }
    r.r(t)
    var i = {
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
      parseStr: function(e) {
        return Date.parse(new Date(this.addYear(e)))
      },
      addYear: function(e) {
        return ''.concat(e, ', ').concat(new Date().getFullYear(), ' 00:00:00')
      },
      isBetween: function(e, t) {
        return (
          this.todayMs >= this.parseStr(e) && this.todayMs <= this.parseStr(t)
        )
      },
      isBefore: function(e) {
        return this.todayMs < this.parseStr(e)
      },
      isAfter: function(e) {
        return this.todayMs > this.parseStr(e)
      },
      create: function(e) {
        var t = e.premiereDate,
          r = e.today,
          i = void 0 === r ? new Date() : r
        ;(this.today = 'object' === n(i) ? i : new Date(this.addYear(i))),
          (this.premiereDate = new Date(this.addYear(t)))
      }
    }
    t.default = {
      tuneIn: !1,
      fallback: !1,
      getElSelector: function() {
        return this.tuneIn || this.fallback
      },
      createShowFn: function(e) {
        var t = this
        return function(r) {
          e && (t.tuneIn = r)
        }
      },
      createShowObj: function(e) {
        return { show: this.createShowFn(e) }
      },
      create: function(e) {
        var t = e.premiereDate,
          r = e.today,
          n = e.fallback
        ;(this.fallback = n), i.create({ premiereDate: t, today: r })
      },
      between: function(e, t) {
        return this.createShowObj(i.isBetween(e, t))
      },
      after: function(e) {
        return this.createShowObj(i.isAfter(e))
      },
      afterPremiere: function() {
        return this.createShowObj(i.isAfterPremiere)
      },
      dayOfPremiere: function() {
        return this.createShowObj(i.isPremiere)
      }
    }
  }
]).default
