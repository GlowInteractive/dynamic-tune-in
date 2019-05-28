!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.TuneIn=e():t.TuneIn=e()}(this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.r(e);var o={get todayMs(){return Date.parse(this.today)},get premiereMs(){return Date.parse(this.premiereDate)},get todayStr(){return this.today.toDateString()},get premiereStr(){return this.premiereDate.toDateString()},get isPremiere(){return this.todayStr===this.premiereStr},get isBeforePremiere(){return this.todayMs<this.premiereMs},get isAfterPremiere(){return this.todayMs>this.premiereMs},parseStr:function(t){return Date.parse(new Date(this.addYear(t)))},addYear:function(t){return"".concat(t,", ").concat((new Date).getFullYear()," 00:00:00")},isBetween:function(t,e){return this.todayMs>=this.parseStr(t)&&this.todayMs<=this.parseStr(e)},isBefore:function(t){return this.todayMs<this.parseStr(t)},isAfter:function(t){return this.todayMs>this.parseStr(t)},create:function(t){var e=t.premiereDate,r=t.today,n=void 0===r?new Date:r;this.setToday(n),this.premiereDate=new Date(this.addYear(e))},setToday:function(t){this.today="object"===n(t)?t:new Date(this.addYear(t))}};e.default={tuneIn:!1,fallback:!1,dates:[],createShowFn:function(t,e){var r=this;return function(){t()?r.tuneIn=e:r.tuneIn=r.fallback}},addDate:function(t,e){this.dates.push({test:this.createShowFn(t,e)})},create:function(t){var e=t.premiereDate,r=t.today,n=t.fallback;this.fallback=n,o.create({premiereDate:e,today:r})},getToday:function(){return o.today},updateToday:function(t){o.setToday(t)},between:function(t,e){var r=this;return{show:function(n){r.addDate(function(){return o.isBetween(t,e)},n)}}},after:function(t){var e=this;return{show:function(r){return e.addDate(function(){return o.isAfter(t)},r)}}},afterPremiere:function(){var t=this;return{show:function(e){return t.addDate(function(){return o.isAfterPremiere},e)}}},dayOfPremiere:function(){var t=this;return{show:function(e){t.addDate(function(){return o.isPremiere},e)}}},getElSelector:function(){return this.recalculate(),this.tuneIn||this.fallback},recalculate:function(){this.dates.forEach(function(t){return t.test()})}}}]).default});