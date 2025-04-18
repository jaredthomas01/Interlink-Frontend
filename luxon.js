/* eslint-disable */
var luxon = (function (e) {
    'use strict';
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    function o(e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    }
    function u() {
      return (u =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n,
              r = arguments[t];
            for (n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }).apply(this, arguments);
    }
    function i(e, t) {
      (e.prototype = Object.create(t.prototype)),
        s((e.prototype.constructor = e), t);
    }
    function a(e) {
      return (a = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function s(e, t) {
      return (s =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function c(e, t, n) {
      return (c = (function () {
        if (
          'undefined' != typeof Reflect &&
          Reflect.construct &&
          !Reflect.construct.sham
        ) {
          if ('function' == typeof Proxy) return 1;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              1
            );
          } catch (e) {
            return;
          }
        }
      })()
        ? Reflect.construct
        : function (e, t, n) {
            var r = [null];
            r.push.apply(r, t);
            r = new (Function.bind.apply(e, r))();
            return n && s(r, n.prototype), r;
          }).apply(null, arguments);
    }
    function t(e) {
      var n = 'function' == typeof Map ? new Map() : void 0;
      return (t = function (e) {
        if (
          null === e ||
          -1 === Function.toString.call(e).indexOf('[native code]')
        )
          return e;
        if ('function' != typeof e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        if (void 0 !== n) {
          if (n.has(e)) return n.get(e);
          n.set(e, t);
        }
        function t() {
          return c(e, arguments, a(this).constructor);
        }
        return (
          (t.prototype = Object.create(e.prototype, {
            constructor: {
              value: t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
          s(t, e)
        );
      })(e);
    }
    function l(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function k(e, t) {
      var n =
        ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (n) return (n = n.call(e)).next.bind(n);
      if (
        Array.isArray(e) ||
        (n = (function (e, t) {
          if (e) {
            if ('string' == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return 'Map' ===
              (n = 'Object' === n && e.constructor ? e.constructor.name : n) ||
              'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? l(e, t)
              : void 0;
          }
        })(e)) ||
        (t && e && 'number' == typeof e.length)
      ) {
        n && (e = n);
        var r = 0;
        return function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var n = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return i(t, e), t;
      })(t(Error)),
      f = (function (t) {
        function e(e) {
          return t.call(this, 'Invalid DateTime: ' + e.toMessage()) || this;
        }
        return i(e, t), e;
      })(n),
      d = (function (t) {
        function e(e) {
          return t.call(this, 'Invalid Interval: ' + e.toMessage()) || this;
        }
        return i(e, t), e;
      })(n),
      h = (function (t) {
        function e(e) {
          return t.call(this, 'Invalid Duration: ' + e.toMessage()) || this;
        }
        return i(e, t), e;
      })(n),
      S = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return i(t, e), t;
      })(n),
      y = (function (t) {
        function e(e) {
          return t.call(this, 'Invalid unit ' + e) || this;
        }
        return i(e, t), e;
      })(n),
      v = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return i(t, e), t;
      })(n),
      m = (function (e) {
        function t() {
          return e.call(this, 'Zone is an abstract class') || this;
        }
        return i(t, e), t;
      })(n),
      p = 'numeric',
      g = 'short',
      w = 'long',
      T = { year: p, month: p, day: p },
      b = { year: p, month: g, day: p },
      O = { year: p, month: g, day: p, weekday: g },
      M = { year: p, month: w, day: p },
      N = { year: p, month: w, day: p, weekday: w },
      D = { hour: p, minute: p },
      E = { hour: p, minute: p, second: p },
      V = { hour: p, minute: p, second: p, timeZoneName: g },
      I = { hour: p, minute: p, second: p, timeZoneName: w },
      x = { hour: p, minute: p, hourCycle: 'h23' },
      C = { hour: p, minute: p, second: p, hourCycle: 'h23' },
      Z = { hour: p, minute: p, second: p, hourCycle: 'h23', timeZoneName: g },
      F = { hour: p, minute: p, second: p, hourCycle: 'h23', timeZoneName: w },
      L = { year: p, month: p, day: p, hour: p, minute: p },
      A = { year: p, month: p, day: p, hour: p, minute: p, second: p },
      z = { year: p, month: g, day: p, hour: p, minute: p },
      j = { year: p, month: g, day: p, hour: p, minute: p, second: p },
      q = { year: p, month: g, day: p, weekday: g, hour: p, minute: p },
      _ = { year: p, month: w, day: p, hour: p, minute: p, timeZoneName: g },
      U = {
        year: p,
        month: w,
        day: p,
        hour: p,
        minute: p,
        second: p,
        timeZoneName: g,
      },
      R = {
        year: p,
        month: w,
        day: p,
        weekday: w,
        hour: p,
        minute: p,
        timeZoneName: w,
      },
      H = {
        year: p,
        month: w,
        day: p,
        weekday: w,
        hour: p,
        minute: p,
        second: p,
        timeZoneName: w,
      };
    function P(e) {
      return void 0 === e;
    }
    function W(e) {
      return 'number' == typeof e;
    }
    function J(e) {
      return 'number' == typeof e && e % 1 == 0;
    }
    function Y() {
      try {
        return 'undefined' != typeof Intl && !!Intl.RelativeTimeFormat;
      } catch (e) {
        return !1;
      }
    }
    function G(e, n, r) {
      if (0 !== e.length)
        return e.reduce(function (e, t) {
          t = [n(t), t];
          return e && r(e[0], t[0]) === e[0] ? e : t;
        }, null)[1];
    }
    function $(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function B(e, t, n) {
      return J(e) && t <= e && e <= n;
    }
    function Q(e, t) {
      void 0 === t && (t = 2);
      var n = e < 0 ? '-' : '',
        e = n ? -1 * e : e,
        e =
          e.toString().length < t ? ('0'.repeat(t) + e).slice(-t) : e.toString();
      return n + e;
    }
    function K(e) {
      if (!P(e) && null !== e && '' !== e) return parseInt(e, 10);
    }
    function X(e) {
      if (!P(e) && null !== e && '' !== e) {
        e = 1e3 * parseFloat('0.' + e);
        return Math.floor(e);
      }
    }
    function ee(e, t, n) {
      void 0 === n && (n = !1);
      t = Math.pow(10, t);
      return (n ? Math.trunc : Math.round)(e * t) / t;
    }
    function te(e) {
      return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
    }
    function ne(e) {
      return te(e) ? 366 : 365;
    }
    function re(e, t) {
      var n,
        r,
        r = (n = t - 1) - (r = 12) * Math.floor(n / r) + 1;
      return 2 == r
        ? te(e + (t - r) / 12)
          ? 29
          : 28
        : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][r - 1];
    }
    function ie(e) {
      var t = Date.UTC(
        e.year,
        e.month - 1,
        e.day,
        e.hour,
        e.minute,
        e.second,
        e.millisecond
      );
      return (
        e.year < 100 &&
          0 <= e.year &&
          (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
        +t
      );
    }
    function oe(e) {
      var t =
          (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
        e = e - 1,
        e =
          (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
      return 4 == t || 3 == e ? 53 : 52;
    }
    function ae(e) {
      return 99 < e ? e : 60 < e ? 1900 + e : 2e3 + e;
    }
    function ue(e, t, n, r) {
      void 0 === r && (r = null);
      var i = new Date(e),
        e = {
          hourCycle: 'h23',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        };
      r && (e.timeZone = r);
      (e = u({ timeZoneName: t }, e)),
        (i = new Intl.DateTimeFormat(n, e).formatToParts(i).find(function (e) {
          return 'timezonename' === e.type.toLowerCase();
        }));
      return i ? i.value : null;
    }
    function se(e, t) {
      e = parseInt(e, 10);
      Number.isNaN(e) && (e = 0);
      t = parseInt(t, 10) || 0;
      return 60 * e + (e < 0 || Object.is(e, -0) ? -t : t);
    }
    function ce(e) {
      var t = Number(e);
      if ('boolean' == typeof e || '' === e || Number.isNaN(t))
        throw new v('Invalid unit value ' + e);
      return t;
    }
    function le(e, t) {
      var n,
        r,
        i = {};
      for (n in e) !$(e, n) || (null != (r = e[n]) && (i[t(n)] = ce(r)));
      return i;
    }
    function fe(e, t) {
      var n = Math.trunc(Math.abs(e / 60)),
        r = Math.trunc(Math.abs(e % 60)),
        i = 0 <= e ? '+' : '-';
      switch (t) {
        case 'short':
          return i + Q(n, 2) + ':' + Q(r, 2);
        case 'narrow':
          return i + n + (0 < r ? ':' + r : '');
        case 'techie':
          return i + Q(n, 2) + Q(r, 2);
        default:
          throw new RangeError(
            'Value format ' + t + ' is out of range for property format'
          );
      }
    }
    function de(e) {
      return (
        (n = e),
        ['hour', 'minute', 'second', 'millisecond'].reduce(function (e, t) {
          return (e[t] = n[t]), e;
        }, {})
      );
      var n;
    }
    var he = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/,
      me = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      ye = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      ve = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
    function pe(e) {
      switch (e) {
        case 'narrow':
          return [].concat(ve);
        case 'short':
          return [].concat(ye);
        case 'long':
          return [].concat(me);
        case 'numeric':
          return ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        case '2-digit':
          return [
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
          ];
        default:
          return null;
      }
    }
    var ge = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      we = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      ke = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    function Se(e) {
      switch (e) {
        case 'narrow':
          return [].concat(ke);
        case 'short':
          return [].concat(we);
        case 'long':
          return [].concat(ge);
        case 'numeric':
          return ['1', '2', '3', '4', '5', '6', '7'];
        default:
          return null;
      }
    }
    var Te = ['AM', 'PM'],
      be = ['Before Christ', 'Anno Domini'],
      Oe = ['BC', 'AD'],
      Me = ['B', 'A'];
    function Ne(e) {
      switch (e) {
        case 'narrow':
          return [].concat(Me);
        case 'short':
          return [].concat(Oe);
        case 'long':
          return [].concat(be);
        default:
          return null;
      }
    }
    function De(e, t) {
      for (var n = '', r = k(e); !(i = r()).done; ) {
        var i = i.value;
        i.literal ? (n += i.val) : (n += t(i.val));
      }
      return n;
    }
    var Ee = {
        D: T,
        DD: b,
        DDD: M,
        DDDD: N,
        t: D,
        tt: E,
        ttt: V,
        tttt: I,
        T: x,
        TT: C,
        TTT: Z,
        TTTT: F,
        f: L,
        ff: z,
        fff: _,
        ffff: R,
        F: A,
        FF: j,
        FFF: U,
        FFFF: H,
      },
      Ve = (function () {
        function h(e, t) {
          (this.opts = t), (this.loc = e), (this.systemLoc = null);
        }
        (h.create = function (e, t) {
          return new h(e, (t = void 0 === t ? {} : t));
        }),
          (h.parseFormat = function (e) {
            for (var t = null, n = '', r = !1, i = [], o = 0; o < e.length; o++) {
              var a = e.charAt(o);
              "'" === a
                ? (0 < n.length && i.push({ literal: r, val: n }),
                  (t = null),
                  (n = ''),
                  (r = !r))
                : r || a === t
                ? (n += a)
                : (0 < n.length && i.push({ literal: !1, val: n }), (t = n = a));
            }
            return 0 < n.length && i.push({ literal: r, val: n }), i;
          }),
          (h.macroTokenToFormatOpts = function (e) {
            return Ee[e];
          });
        var e = h.prototype;
        return (
          (e.formatWithSystemDefault = function (e, t) {
            return (
              null === this.systemLoc &&
                (this.systemLoc = this.loc.redefaultToSystem()),
              this.systemLoc.dtFormatter(e, u({}, this.opts, t)).format()
            );
          }),
          (e.formatDateTime = function (e, t) {
            return this.loc
              .dtFormatter(e, u({}, this.opts, (t = void 0 === t ? {} : t)))
              .format();
          }),
          (e.formatDateTimeParts = function (e, t) {
            return this.loc
              .dtFormatter(e, u({}, this.opts, (t = void 0 === t ? {} : t)))
              .formatToParts();
          }),
          (e.resolvedOptions = function (e, t) {
            return this.loc
              .dtFormatter(e, u({}, this.opts, (t = void 0 === t ? {} : t)))
              .resolvedOptions();
          }),
          (e.num = function (e, t) {
            if ((void 0 === t && (t = 0), this.opts.forceSimple)) return Q(e, t);
            var n = u({}, this.opts);
            return 0 < t && (n.padTo = t), this.loc.numberFormatter(n).format(e);
          }),
          (e.formatDateTimeFromString = function (r, e) {
            function i(e, t) {
              return l.loc.extract(r, e, t);
            }
            function o(e) {
              return r.isOffsetFixed && 0 === r.offset && e.allowZ
                ? 'Z'
                : r.isValid
                ? r.zone.formatOffset(r.ts, e.format)
                : '';
            }
            function a() {
              return f
                ? Te[r.hour < 12 ? 0 : 1]
                : i({ hour: 'numeric', hourCycle: 'h12' }, 'dayperiod');
            }
            function u(e, t) {
              return f
                ? ((n = r), pe(e)[n.month - 1])
                : i(t ? { month: e } : { month: e, day: 'numeric' }, 'month');
              var n;
            }
            function s(e, t) {
              return f
                ? ((n = r), Se(e)[n.weekday - 1])
                : i(
                    t
                      ? { weekday: e }
                      : { weekday: e, month: 'long', day: 'numeric' },
                    'weekday'
                  );
              var n;
            }
            function c(e) {
              return f
                ? ((t = r), Ne(e)[t.year < 0 ? 0 : 1])
                : i({ era: e }, 'era');
              var t;
            }
            var l = this,
              f = 'en' === this.loc.listingMode(),
              d =
                this.loc.outputCalendar && 'gregory' !== this.loc.outputCalendar;
            return De(h.parseFormat(e), function (e) {
              switch (e) {
                case 'S':
                  return l.num(r.millisecond);
                case 'u':
                case 'SSS':
                  return l.num(r.millisecond, 3);
                case 's':
                  return l.num(r.second);
                case 'ss':
                  return l.num(r.second, 2);
                case 'm':
                  return l.num(r.minute);
                case 'mm':
                  return l.num(r.minute, 2);
                case 'h':
                  return l.num(r.hour % 12 == 0 ? 12 : r.hour % 12);
                case 'hh':
                  return l.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);
                case 'H':
                  return l.num(r.hour);
                case 'HH':
                  return l.num(r.hour, 2);
                case 'Z':
                  return o({ format: 'narrow', allowZ: l.opts.allowZ });
                case 'ZZ':
                  return o({ format: 'short', allowZ: l.opts.allowZ });
                case 'ZZZ':
                  return o({ format: 'techie', allowZ: l.opts.allowZ });
                case 'ZZZZ':
                  return r.zone.offsetName(r.ts, {
                    format: 'short',
                    locale: l.loc.locale,
                  });
                case 'ZZZZZ':
                  return r.zone.offsetName(r.ts, {
                    format: 'long',
                    locale: l.loc.locale,
                  });
                case 'z':
                  return r.zoneName;
                case 'a':
                  return a();
                case 'd':
                  return d ? i({ day: 'numeric' }, 'day') : l.num(r.day);
                case 'dd':
                  return d ? i({ day: '2-digit' }, 'day') : l.num(r.day, 2);
                case 'c':
                  return l.num(r.weekday);
                case 'ccc':
                  return s('short', !0);
                case 'cccc':
                  return s('long', !0);
                case 'ccccc':
                  return s('narrow', !0);
                case 'E':
                  return l.num(r.weekday);
                case 'EEE':
                  return s('short', !1);
                case 'EEEE':
                  return s('long', !1);
                case 'EEEEE':
                  return s('narrow', !1);
                case 'L':
                  return d
                    ? i({ month: 'numeric', day: 'numeric' }, 'month')
                    : l.num(r.month);
                case 'LL':
                  return d
                    ? i({ month: '2-digit', day: 'numeric' }, 'month')
                    : l.num(r.month, 2);
                case 'LLL':
                  return u('short', !0);
                case 'LLLL':
                  return u('long', !0);
                case 'LLLLL':
                  return u('narrow', !0);
                case 'M':
                  return d ? i({ month: 'numeric' }, 'month') : l.num(r.month);
                case 'MM':
                  return d ? i({ month: '2-digit' }, 'month') : l.num(r.month, 2);
                case 'MMM':
                  return u('short', !1);
                case 'MMMM':
                  return u('long', !1);
                case 'MMMMM':
                  return u('narrow', !1);
                case 'y':
                  return d ? i({ year: 'numeric' }, 'year') : l.num(r.year);
                case 'yy':
                  return d
                    ? i({ year: '2-digit' }, 'year')
                    : l.num(r.year.toString().slice(-2), 2);
                case 'yyyy':
                  return d ? i({ year: 'numeric' }, 'year') : l.num(r.year, 4);
                case 'yyyyyy':
                  return d ? i({ year: 'numeric' }, 'year') : l.num(r.year, 6);
                case 'G':
                  return c('short');
                case 'GG':
                  return c('long');
                case 'GGGGG':
                  return c('narrow');
                case 'kk':
                  return l.num(r.weekYear.toString().slice(-2), 2);
                case 'kkkk':
                  return l.num(r.weekYear, 4);
                case 'W':
                  return l.num(r.weekNumber);
                case 'WW':
                  return l.num(r.weekNumber, 2);
                case 'o':
                  return l.num(r.ordinal);
                case 'ooo':
                  return l.num(r.ordinal, 3);
                case 'q':
                  return l.num(r.quarter);
                case 'qq':
                  return l.num(r.quarter, 2);
                case 'X':
                  return l.num(Math.floor(r.ts / 1e3));
                case 'x':
                  return l.num(r.ts);
                default:
                  return (n = h.macroTokenToFormatOpts((t = e)))
                    ? l.formatWithSystemDefault(r, n)
                    : t;
              }
              var t, n;
            });
          }),
          (e.formatDurationFromString = function (e, t) {
            function n(e) {
              switch (e[0]) {
                case 'S':
                  return 'millisecond';
                case 's':
                  return 'second';
                case 'm':
                  return 'minute';
                case 'h':
                  return 'hour';
                case 'd':
                  return 'day';
                case 'M':
                  return 'month';
                case 'y':
                  return 'year';
                default:
                  return null;
              }
            }
            var r,
              i = this,
              o = h.parseFormat(t),
              t = o.reduce(function (e, t) {
                var n = t.literal,
                  t = t.val;
                return n ? e : e.concat(t);
              }, []),
              t = e.shiftTo.apply(
                e,
                t.map(n).filter(function (e) {
                  return e;
                })
              );
            return De(
              o,
              ((r = t),
              function (e) {
                var t = n(e);
                return t ? i.num(r.get(t), e.length) : e;
              })
            );
          }),
          h
        );
      })(),
      Ie = (function () {
        function e(e, t) {
          (this.reason = e), (this.explanation = t);
        }
        return (
          (e.prototype.toMessage = function () {
            return this.explanation
              ? this.reason + ': ' + this.explanation
              : this.reason;
          }),
          e
        );
      })(),
      xe = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.offsetName = function (e, t) {
            throw new m();
          }),
          (t.formatOffset = function (e, t) {
            throw new m();
          }),
          (t.offset = function (e) {
            throw new m();
          }),
          (t.equals = function (e) {
            throw new m();
          }),
          o(e, [
            {
              key: 'type',
              get: function () {
                throw new m();
              },
            },
            {
              key: 'name',
              get: function () {
                throw new m();
              },
            },
            {
              key: 'isUniversal',
              get: function () {
                throw new m();
              },
            },
            {
              key: 'isValid',
              get: function () {
                throw new m();
              },
            },
          ]),
          e
        );
      })(),
      Ce = null,
      Ze = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        i(t, e);
        var n = t.prototype;
        return (
          (n.offsetName = function (e, t) {
            return ue(e, t.format, t.locale);
          }),
          (n.formatOffset = function (e, t) {
            return fe(this.offset(e), t);
          }),
          (n.offset = function (e) {
            return -new Date(e).getTimezoneOffset();
          }),
          (n.equals = function (e) {
            return 'system' === e.type;
          }),
          o(
            t,
            [
              {
                key: 'type',
                get: function () {
                  return 'system';
                },
              },
              {
                key: 'name',
                get: function () {
                  return new Intl.DateTimeFormat().resolvedOptions().timeZone;
                },
              },
              {
                key: 'isUniversal',
                get: function () {
                  return !1;
                },
              },
              {
                key: 'isValid',
                get: function () {
                  return !0;
                },
              },
            ],
            [
              {
                key: 'instance',
                get: function () {
                  return (Ce = null === Ce ? new t() : Ce);
                },
              },
            ]
          ),
          t
        );
      })(xe),
      Fe = RegExp('^' + he.source + '$'),
      Le = {};
    var Ae = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
    var ze = {},
      je = (function (n) {
        function r(e) {
          var t = n.call(this) || this;
          return (t.zoneName = e), (t.valid = r.isValidZone(e)), t;
        }
        i(r, n),
          (r.create = function (e) {
            return ze[e] || (ze[e] = new r(e)), ze[e];
          }),
          (r.resetCache = function () {
            (ze = {}), (Le = {});
          }),
          (r.isValidSpecifier = function (e) {
            return !(!e || !e.match(Fe));
          }),
          (r.isValidZone = function (e) {
            try {
              return (
                new Intl.DateTimeFormat('en-US', { timeZone: e }).format(), !0
              );
            } catch (e) {
              return !1;
            }
          }),
          (r.parseGMTOffset = function (e) {
            if (e) {
              e = e.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
              if (e) return -60 * parseInt(e[1]);
            }
            return null;
          });
        var e = r.prototype;
        return (
          (e.offsetName = function (e, t) {
            return ue(e, t.format, t.locale, this.name);
          }),
          (e.formatOffset = function (e, t) {
            return fe(this.offset(e), t);
          }),
          (e.offset = function (e) {
            var t = new Date(e);
            if (isNaN(t)) return NaN;
            var n,
              r,
              e =
                ((r = this.name),
                Le[r] ||
                  (Le[r] = new Intl.DateTimeFormat('en-US', {
                    hourCycle: 'h23',
                    timeZone: r,
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })),
                Le[r]),
              n = e.formatToParts
                ? (function (e, t) {
                    for (
                      var n = e.formatToParts(t), r = [], i = 0;
                      i < n.length;
                      i++
                    ) {
                      var o = n[i],
                        a = o.type,
                        o = o.value,
                        a = Ae[a];
                      P(a) || (r[a] = parseInt(o, 10));
                    }
                    return r;
                  })(e, t)
                : ((r = t),
                  (n = (i = e).format(r).replace(/\u200E/g, '')),
                  (r = (i = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(
                    n
                  ))[1]),
                  (n = i[2]),
                  [i[3], r, n, i[4], i[5], i[6]]),
              i = +t,
              t = i % 1e3;
            return (
              (ie({
                year: n[0],
                month: n[1],
                day: n[2],
                hour: n[3],
                minute: n[4],
                second: n[5],
                millisecond: 0,
              }) -
                (i -= 0 <= t ? t : 1e3 + t)) /
              6e4
            );
          }),
          (e.equals = function (e) {
            return 'iana' === e.type && e.name === this.name;
          }),
          o(r, [
            {
              key: 'type',
              get: function () {
                return 'iana';
              },
            },
            {
              key: 'name',
              get: function () {
                return this.zoneName;
              },
            },
            {
              key: 'isUniversal',
              get: function () {
                return !1;
              },
            },
            {
              key: 'isValid',
              get: function () {
                return this.valid;
              },
            },
          ]),
          r
        );
      })(xe),
      qe = null,
      _e = (function (n) {
        function t(e) {
          var t = n.call(this) || this;
          return (t.fixed = e), t;
        }
        i(t, n),
          (t.instance = function (e) {
            return 0 === e ? t.utcInstance : new t(e);
          }),
          (t.parseSpecifier = function (e) {
            if (e) {
              e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
              if (e) return new t(se(e[1], e[2]));
            }
            return null;
          });
        var e = t.prototype;
        return (
          (e.offsetName = function () {
            return this.name;
          }),
          (e.formatOffset = function (e, t) {
            return fe(this.fixed, t);
          }),
          (e.offset = function () {
            return this.fixed;
          }),
          (e.equals = function (e) {
            return 'fixed' === e.type && e.fixed === this.fixed;
          }),
          o(
            t,
            [
              {
                key: 'type',
                get: function () {
                  return 'fixed';
                },
              },
              {
                key: 'name',
                get: function () {
                  return 0 === this.fixed
                    ? 'UTC'
                    : 'UTC' + fe(this.fixed, 'narrow');
                },
              },
              {
                key: 'isUniversal',
                get: function () {
                  return !0;
                },
              },
              {
                key: 'isValid',
                get: function () {
                  return !0;
                },
              },
            ],
            [
              {
                key: 'utcInstance',
                get: function () {
                  return (qe = null === qe ? new t(0) : qe);
                },
              },
            ]
          ),
          t
        );
      })(xe),
      Ue = (function (n) {
        function e(e) {
          var t = n.call(this) || this;
          return (t.zoneName = e), t;
        }
        i(e, n);
        var t = e.prototype;
        return (
          (t.offsetName = function () {
            return null;
          }),
          (t.formatOffset = function () {
            return '';
          }),
          (t.offset = function () {
            return NaN;
          }),
          (t.equals = function () {
            return !1;
          }),
          o(e, [
            {
              key: 'type',
              get: function () {
                return 'invalid';
              },
            },
            {
              key: 'name',
              get: function () {
                return this.zoneName;
              },
            },
            {
              key: 'isUniversal',
              get: function () {
                return !1;
              },
            },
            {
              key: 'isValid',
              get: function () {
                return !1;
              },
            },
          ]),
          e
        );
      })(xe);
    function Re(e, t) {
      if (P(e) || null === e) return t;
      if (e instanceof xe) return e;
      if ('string' != typeof e)
        return W(e)
          ? _e.instance(e)
          : 'object' == typeof e && e.offset && 'number' == typeof e.offset
          ? e
          : new Ue(e);
      var n = e.toLowerCase();
      return 'local' === n || 'system' === n
        ? t
        : 'utc' === n || 'gmt' === n
        ? _e.utcInstance
        : null != (t = je.parseGMTOffset(e))
        ? _e.instance(t)
        : je.isValidSpecifier(n)
        ? je.create(e)
        : _e.parseSpecifier(n) || new Ue(e);
    }
    var He,
      Pe = function () {
        return Date.now();
      },
      We = 'system',
      Je = null,
      Ye = null,
      Ge = null,
      $e = (function () {
        function e() {}
        return (
          (e.resetCaches = function () {
            ut.resetCache(), je.resetCache();
          }),
          o(e, null, [
            {
              key: 'now',
              get: function () {
                return Pe;
              },
              set: function (e) {
                Pe = e;
              },
            },
            {
              key: 'defaultZone',
              get: function () {
                return Re(We, Ze.instance);
              },
              set: function (e) {
                We = e;
              },
            },
            {
              key: 'defaultLocale',
              get: function () {
                return Je;
              },
              set: function (e) {
                Je = e;
              },
            },
            {
              key: 'defaultNumberingSystem',
              get: function () {
                return Ye;
              },
              set: function (e) {
                Ye = e;
              },
            },
            {
              key: 'defaultOutputCalendar',
              get: function () {
                return Ge;
              },
              set: function (e) {
                Ge = e;
              },
            },
            {
              key: 'throwOnInvalid',
              get: function () {
                return He;
              },
              set: function (e) {
                He = e;
              },
            },
          ]),
          e
        );
      })(),
      Be = ['base'],
      Qe = {};
    function Ke(e, t) {
      void 0 === t && (t = {});
      var n = JSON.stringify([e, t]),
        r = Qe[n];
      return r || ((r = new Intl.DateTimeFormat(e, t)), (Qe[n] = r)), r;
    }
    var Xe = {};
    var et = {};
    function tt(e, t) {
      var n = (t = void 0 === t ? {} : t);
      n.base;
      var r = (function (e, t) {
          if (null == e) return {};
          for (var n, r = {}, i = Object.keys(e), o = 0; o < i.length; o++)
            (n = i[o]), 0 <= t.indexOf(n) || (r[n] = e[n]);
          return r;
        })(n, Be),
        n = JSON.stringify([e, r]),
        r = et[n];
      return r || ((r = new Intl.RelativeTimeFormat(e, t)), (et[n] = r)), r;
    }
    var nt = null;
    function rt(e, t, n, r, i) {
      n = e.listingMode(n);
      return 'error' === n ? null : ('en' === n ? r : i)(t);
    }
    var it = (function () {
        function e(e, t, n) {
          (this.padTo = n.padTo || 0),
            (this.floor = n.floor || !1),
            t ||
              ((t = { useGrouping: !1 }),
              0 < n.padTo && (t.minimumIntegerDigits = n.padTo),
              (this.inf = (function (e, t) {
                void 0 === t && (t = {});
                var n = JSON.stringify([e, t]),
                  r = Xe[n];
                return r || ((r = new Intl.NumberFormat(e, t)), (Xe[n] = r)), r;
              })(e, t)));
        }
        return (
          (e.prototype.format = function (e) {
            if (this.inf) {
              var t = this.floor ? Math.floor(e) : e;
              return this.inf.format(t);
            }
            return Q(this.floor ? Math.floor(e) : ee(e, 3), this.padTo);
          }),
          e
        );
      })(),
      ot = (function () {
        function e(e, t, n) {
          var r, i, o;
          (this.opts = n),
            e.zone.isUniversal
              ? ((o = (e.offset / 60) * -1),
                (o = je.isValidZone(
                  (i = 0 <= o ? 'Etc/GMT+' + o : 'Etc/GMT' + o)
                )),
                0 !== e.offset && o
                  ? ((r = i), (this.dt = e))
                  : ((r = 'UTC'),
                    n.timeZoneName
                      ? (this.dt = e)
                      : (this.dt =
                          0 === e.offset
                            ? e
                            : tr.fromMillis(e.ts + 60 * e.offset * 1e3))))
              : 'system' === e.zone.type
              ? (this.dt = e)
              : (r = (this.dt = e).zone.name);
          e = u({}, this.opts);
          r && (e.timeZone = r), (this.dtf = Ke(t, e));
        }
        var t = e.prototype;
        return (
          (t.format = function () {
            return this.dtf.format(this.dt.toJSDate());
          }),
          (t.formatToParts = function () {
            return this.dtf.formatToParts(this.dt.toJSDate());
          }),
          (t.resolvedOptions = function () {
            return this.dtf.resolvedOptions();
          }),
          e
        );
      })(),
      at = (function () {
        function e(e, t, n) {
          (this.opts = u({ style: 'long' }, n)),
            !t && Y() && (this.rtf = tt(e, n));
        }
        var t = e.prototype;
        return (
          (t.format = function (e, t) {
            return this.rtf
              ? this.rtf.format(e, t)
              : (function (e, t, n, r) {
                  void 0 === n && (n = 'always'), void 0 === r && (r = !1);
                  var i = {
                      years: ['year', 'yr.'],
                      quarters: ['quarter', 'qtr.'],
                      months: ['month', 'mo.'],
                      weeks: ['week', 'wk.'],
                      days: ['day', 'day', 'days'],
                      hours: ['hour', 'hr.'],
                      minutes: ['minute', 'min.'],
                      seconds: ['second', 'sec.'],
                    },
                    o = -1 === ['hours', 'minutes', 'seconds'].indexOf(e);
                  if ('auto' === n && o) {
                    var a = 'days' === e;
                    switch (t) {
                      case 1:
                        return a ? 'tomorrow' : 'next ' + i[e][0];
                      case -1:
                        return a ? 'yesterday' : 'last ' + i[e][0];
                      case 0:
                        return a ? 'today' : 'this ' + i[e][0];
                    }
                  }
                  var u = Object.is(t, -0) || t < 0,
                    o = 1 === (n = Math.abs(t)),
                    t = i[e],
                    o = r ? (!o && t[2]) || t[1] : o ? i[e][0] : e;
                  return u ? n + ' ' + o + ' ago' : 'in ' + n + ' ' + o;
                })(t, e, this.opts.numeric, 'long' !== this.opts.style);
          }),
          (t.formatToParts = function (e, t) {
            return this.rtf ? this.rtf.formatToParts(e, t) : [];
          }),
          e
        );
      })(),
      ut = (function () {
        function i(e, t, n, r) {
          var i = (function (e) {
              var t = e.indexOf('-u-');
              if (-1 === t) return [e];
              t = e.substring(0, t);
              try {
                n = Ke(e).resolvedOptions();
              } catch (e) {
                n = Ke(t).resolvedOptions();
              }
              var n = n;
              return [t, n.numberingSystem, n.calendar];
            })(e),
            o = i[0],
            e = i[1],
            i = i[2];
          (this.locale = o),
            (this.numberingSystem = t || e || null),
            (this.outputCalendar = n || i || null),
            (this.intl =
              ((e = this.locale),
              (n = this.numberingSystem),
              ((i = this.outputCalendar) || n) &&
                ((e += '-u'), i && (e += '-ca-' + i), n && (e += '-nu-' + n)),
              e)),
            (this.weekdaysCache = { format: {}, standalone: {} }),
            (this.monthsCache = { format: {}, standalone: {} }),
            (this.meridiemCache = null),
            (this.eraCache = {}),
            (this.specifiedLocale = r),
            (this.fastNumbersCached = null);
        }
        (i.fromOpts = function (e) {
          return i.create(
            e.locale,
            e.numberingSystem,
            e.outputCalendar,
            e.defaultToEN
          );
        }),
          (i.create = function (e, t, n, r) {
            void 0 === r && (r = !1);
            e = e || $e.defaultLocale;
            return new i(
              e || (r ? 'en-US' : (nt = nt || 'en-US')),
              t || $e.defaultNumberingSystem,
              n || $e.defaultOutputCalendar,
              e
            );
          }),
          (i.resetCache = function () {
            (nt = null), (Qe = {}), (Xe = {}), (et = {});
          }),
          (i.fromObject = function (e) {
            var t = void 0 === e ? {} : e,
              n = t.locale,
              e = t.numberingSystem,
              t = t.outputCalendar;
            return i.create(n, e, t);
          });
        var e = i.prototype;
        return (
          (e.listingMode = function (e) {
            var t = this.isEnglish(),
              n = !(
                (null !== this.numberingSystem &&
                  'latn' !== this.numberingSystem) ||
                (null !== this.outputCalendar &&
                  'gregory' !== this.outputCalendar)
              );
            return t && n ? 'en' : 'intl';
          }),
          (e.clone = function (e) {
            return e && 0 !== Object.getOwnPropertyNames(e).length
              ? i.create(
                  e.locale || this.specifiedLocale,
                  e.numberingSystem || this.numberingSystem,
                  e.outputCalendar || this.outputCalendar,
                  e.defaultToEN || !1
                )
              : this;
          }),
          (e.redefaultToEN = function (e) {
            return this.clone(
              u({}, (e = void 0 === e ? {} : e), { defaultToEN: !0 })
            );
          }),
          (e.redefaultToSystem = function (e) {
            return this.clone(
              u({}, (e = void 0 === e ? {} : e), { defaultToEN: !1 })
            );
          }),
          (e.months = function (n, r, e) {
            var i = this;
            return (
              void 0 === r && (r = !1),
              rt(this, n, (e = void 0 === e ? !0 : e), pe, function () {
                var t = r ? { month: n, day: 'numeric' } : { month: n },
                  e = r ? 'format' : 'standalone';
                return (
                  i.monthsCache[e][n] ||
                    (i.monthsCache[e][n] = (function (e) {
                      for (var t = [], n = 1; n <= 12; n++) {
                        var r = tr.utc(2016, n, 1);
                        t.push(e(r));
                      }
                      return t;
                    })(function (e) {
                      return i.extract(e, t, 'month');
                    })),
                  i.monthsCache[e][n]
                );
              })
            );
          }),
          (e.weekdays = function (n, r, e) {
            var i = this;
            return (
              void 0 === r && (r = !1),
              rt(this, n, (e = void 0 === e ? !0 : e), Se, function () {
                var t = r
                    ? {
                        weekday: n,
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    : { weekday: n },
                  e = r ? 'format' : 'standalone';
                return (
                  i.weekdaysCache[e][n] ||
                    (i.weekdaysCache[e][n] = (function (e) {
                      for (var t = [], n = 1; n <= 7; n++) {
                        var r = tr.utc(2016, 11, 13 + n);
                        t.push(e(r));
                      }
                      return t;
                    })(function (e) {
                      return i.extract(e, t, 'weekday');
                    })),
                  i.weekdaysCache[e][n]
                );
              })
            );
          }),
          (e.meridiems = function (e) {
            var n = this;
            return rt(
              this,
              void 0,
              (e = void 0 === e ? !0 : e),
              function () {
                return Te;
              },
              function () {
                var t;
                return (
                  n.meridiemCache ||
                    ((t = { hour: 'numeric', hourCycle: 'h12' }),
                    (n.meridiemCache = [
                      tr.utc(2016, 11, 13, 9),
                      tr.utc(2016, 11, 13, 19),
                    ].map(function (e) {
                      return n.extract(e, t, 'dayperiod');
                    }))),
                  n.meridiemCache
                );
              }
            );
          }),
          (e.eras = function (e, t) {
            var n = this;
            return rt(this, e, (t = void 0 === t ? !0 : t), Ne, function () {
              var t = { era: e };
              return (
                n.eraCache[e] ||
                  (n.eraCache[e] = [tr.utc(-40, 1, 1), tr.utc(2017, 1, 1)].map(
                    function (e) {
                      return n.extract(e, t, 'era');
                    }
                  )),
                n.eraCache[e]
              );
            });
          }),
          (e.extract = function (e, t, n) {
            t = this.dtFormatter(e, t)
              .formatToParts()
              .find(function (e) {
                return e.type.toLowerCase() === n;
              });
            return t ? t.value : null;
          }),
          (e.numberFormatter = function (e) {
            return new it(
              this.intl,
              (e = void 0 === e ? {} : e).forceSimple || this.fastNumbers,
              e
            );
          }),
          (e.dtFormatter = function (e, t) {
            return new ot(e, this.intl, (t = void 0 === t ? {} : t));
          }),
          (e.relFormatter = function (e) {
            return (
              void 0 === e && (e = {}), new at(this.intl, this.isEnglish(), e)
            );
          }),
          (e.isEnglish = function () {
            return (
              'en' === this.locale ||
              'en-us' === this.locale.toLowerCase() ||
              new Intl.DateTimeFormat(this.intl)
                .resolvedOptions()
                .locale.startsWith('en-us')
            );
          }),
          (e.equals = function (e) {
            return (
              this.locale === e.locale &&
              this.numberingSystem === e.numberingSystem &&
              this.outputCalendar === e.outputCalendar
            );
          }),
          o(i, [
            {
              key: 'fastNumbers',
              get: function () {
                var e;
                return (
                  null == this.fastNumbersCached &&
                    (this.fastNumbersCached =
                      (!(e = this).numberingSystem ||
                        'latn' === e.numberingSystem) &&
                      ('latn' === e.numberingSystem ||
                        !e.locale ||
                        e.locale.startsWith('en') ||
                        'latn' ===
                          new Intl.DateTimeFormat(e.intl).resolvedOptions()
                            .numberingSystem)),
                  this.fastNumbersCached
                );
              },
            },
          ]),
          i
        );
      })();
    function st() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t.reduce(function (e, t) {
        return e + t.source;
      }, '');
      return RegExp('^' + r + '$');
    }
    function ct() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (o) {
        return t
          .reduce(
            function (e, t) {
              var n = e[0],
                r = e[1],
                i = e[2],
                e = t(o, i),
                t = e[0],
                i = e[1],
                e = e[2];
              return [u({}, n, t), r || i, e];
            },
            [{}, null, 1]
          )
          .slice(0, 2);
      };
    }
    function lt(e) {
      if (null == e) return [null, null];
      for (
        var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      for (var i = 0, o = n; i < o.length; i++) {
        var a = o[i],
          u = a[0],
          a = a[1],
          u = u.exec(e);
        if (u) return a(u);
      }
      return [null, null];
    }
    function ft() {
      for (var e = arguments.length, i = new Array(e), t = 0; t < e; t++)
        i[t] = arguments[t];
      return function (e, t) {
        for (var n = {}, r = 0; r < i.length; r++) n[i[r]] = K(e[t + r]);
        return [n, null, t + r];
      };
    }
    var dt = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
      ht = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
      n = RegExp('' + ht.source + dt.source + '?'),
      g = RegExp('(?:T' + n.source + ')?'),
      p = ft('weekYear', 'weekNumber', 'weekDay'),
      w = ft('year', 'ordinal'),
      dt = RegExp(ht.source + ' ?(?:' + dt.source + '|(' + he.source + '))?'),
      he = RegExp('(?: ' + dt.source + ')?');
    function mt(e, t, n) {
      t = e[t];
      return P(t) ? n : K(t);
    }
    function yt(e, t) {
      return [
        { year: mt(e, t), month: mt(e, t + 1, 1), day: mt(e, t + 2, 1) },
        null,
        t + 3,
      ];
    }
    function vt(e, t) {
      return [
        {
          hours: mt(e, t, 0),
          minutes: mt(e, t + 1, 0),
          seconds: mt(e, t + 2, 0),
          milliseconds: X(e[t + 3]),
        },
        null,
        t + 4,
      ];
    }
    function pt(e, t) {
      var n = !e[t] && !e[t + 1],
        e = se(e[t + 1], e[t + 2]);
      return [{}, n ? null : _e.instance(e), t + 3];
    }
    function gt(e, t) {
      return [{}, e[t] ? je.create(e[t]) : null, t + 1];
    }
    var wt = RegExp('^T?' + ht.source + '$'),
      kt =
        /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
    function St(e) {
      var t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        o = e[4],
        a = e[5],
        u = e[6],
        s = e[7],
        c = e[8],
        l = '-' === t[0],
        e = s && '-' === s[0],
        t = function (e, t) {
          return (
            void 0 === t && (t = !1), void 0 !== e && (t || (e && l)) ? -e : e
          );
        };
      return [
        {
          years: t(K(n)),
          months: t(K(r)),
          weeks: t(K(i)),
          days: t(K(o)),
          hours: t(K(a)),
          minutes: t(K(u)),
          seconds: t(K(s), '-0' === s),
          milliseconds: t(X(c), e),
        },
      ];
    }
    var Tt = {
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480,
    };
    function bt(e, t, n, r, i, o, a) {
      o = {
        year: 2 === t.length ? ae(K(t)) : K(t),
        month: ye.indexOf(n) + 1,
        day: K(r),
        hour: K(i),
        minute: K(o),
      };
      return (
        a && (o.second = K(a)),
        e && (o.weekday = 3 < e.length ? ge.indexOf(e) + 1 : we.indexOf(e) + 1),
        o
      );
    }
    var Ot =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
    function Mt(e) {
      var t = e[1],
        n = e[2],
        r = e[3],
        i = e[4],
        o = e[5],
        a = e[6],
        u = e[7],
        s = e[8],
        c = e[9],
        l = e[10],
        e = e[11],
        u = bt(t, i, r, n, o, a, u),
        e = s ? Tt[s] : c ? 0 : se(l, e);
      return [u, new _e(e)];
    }
    var Nt =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
      Dt =
        /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
      Et =
        /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
    function Vt(e) {
      var t = e[1],
        n = e[2],
        r = e[3];
      return [bt(t, e[4], r, n, e[5], e[6], e[7]), _e.utcInstance];
    }
    function It(e) {
      var t = e[1],
        n = e[2],
        r = e[3],
        i = e[4],
        o = e[5],
        a = e[6];
      return [bt(t, e[7], n, r, i, o, a), _e.utcInstance];
    }
    var xt = st(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, g),
      Ct = st(/(\d{4})-?W(\d\d)(?:-?(\d))?/, g),
      Zt = st(/(\d{4})-?(\d{3})/, g),
      Ft = st(n),
      Lt = ct(yt, vt, pt),
      At = ct(p, vt, pt),
      zt = ct(w, vt, pt),
      jt = ct(vt, pt);
    var qt = ct(vt);
    var _t = st(/(\d{4})-(\d\d)-(\d\d)/, he),
      Ut = st(dt),
      Rt = ct(yt, vt, pt, gt),
      Ht = ct(vt, pt, gt);
    var w = {
        weeks: {
          days: 7,
          hours: 168,
          minutes: 10080,
          seconds: 604800,
          milliseconds: 6048e5,
        },
        days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
        hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
        minutes: { seconds: 60, milliseconds: 6e4 },
        seconds: { milliseconds: 1e3 },
      },
      Pt = u(
        {
          years: {
            quarters: 4,
            months: 12,
            weeks: 52,
            days: 365,
            hours: 8760,
            minutes: 525600,
            seconds: 31536e3,
            milliseconds: 31536e6,
          },
          quarters: {
            months: 3,
            weeks: 13,
            days: 91,
            hours: 2184,
            minutes: 131040,
            seconds: 7862400,
            milliseconds: 78624e5,
          },
          months: {
            weeks: 4,
            days: 30,
            hours: 720,
            minutes: 43200,
            seconds: 2592e3,
            milliseconds: 2592e6,
          },
        },
        w
      ),
      he = 365.2425,
      dt = 30.436875,
      Wt = u(
        {
          years: {
            quarters: 4,
            months: 12,
            weeks: he / 7,
            days: he,
            hours: 24 * he,
            minutes: 525949.2,
            seconds: 525949.2 * 60,
            milliseconds: 525949.2 * 60 * 1e3,
          },
          quarters: {
            months: 3,
            weeks: he / 28,
            days: he / 4,
            hours: (24 * he) / 4,
            minutes: 131487.3,
            seconds: (525949.2 * 60) / 4,
            milliseconds: 7889237999.999999,
          },
          months: {
            weeks: dt / 7,
            days: dt,
            hours: 24 * dt,
            minutes: 43829.1,
            seconds: 2629746,
            milliseconds: 2629746e3,
          },
        },
        w
      ),
      Jt = [
        'years',
        'quarters',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
        'milliseconds',
      ],
      Yt = Jt.slice(0).reverse();
    function Gt(e, t, n) {
      e = {
        values: (n = void 0 === n ? !1 : n)
          ? t.values
          : u({}, e.values, t.values || {}),
        loc: e.loc.clone(t.loc),
        conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
      };
      return new Bt(e);
    }
    function $t(e, t, n, r, i) {
      var o = e[i][n],
        a = t[n] / o,
        a =
          !(Math.sign(a) === Math.sign(r[i])) && 0 !== r[i] && Math.abs(a) <= 1
            ? (e = a) < 0
              ? Math.floor(e)
              : Math.ceil(e)
            : Math.trunc(a);
      (r[i] += a), (t[n] -= a * o);
    }
    var Bt = (function () {
      function m(e) {
        var t = 'longterm' === e.conversionAccuracy || !1;
        (this.values = e.values),
          (this.loc = e.loc || ut.create()),
          (this.conversionAccuracy = t ? 'longterm' : 'casual'),
          (this.invalid = e.invalid || null),
          (this.matrix = t ? Wt : Pt),
          (this.isLuxonDuration = !0);
      }
      (m.fromMillis = function (e, t) {
        return m.fromObject({ milliseconds: e }, t);
      }),
        (m.fromObject = function (e, t) {
          if ((void 0 === t && (t = {}), null == e || 'object' != typeof e))
            throw new v(
              'Duration.fromObject: argument expected to be an object, got ' +
                (null === e ? 'null' : typeof e)
            );
          return new m({
            values: le(e, m.normalizeUnit),
            loc: ut.fromObject(t),
            conversionAccuracy: t.conversionAccuracy,
          });
        }),
        (m.fromISO = function (e, t) {
          var n = lt(e, [kt, St])[0];
          return n
            ? m.fromObject(n, t)
            : m.invalid(
                'unparsable',
                'the input "' + e + '" can\'t be parsed as ISO 8601'
              );
        }),
        (m.fromISOTime = function (e, t) {
          var n = lt(e, [wt, qt])[0];
          return n
            ? m.fromObject(n, t)
            : m.invalid(
                'unparsable',
                'the input "' + e + '" can\'t be parsed as ISO 8601'
              );
        }),
        (m.invalid = function (e, t) {
          if ((void 0 === t && (t = null), !e))
            throw new v('need to specify a reason the Duration is invalid');
          var n = e instanceof Ie ? e : new Ie(e, t);
          if ($e.throwOnInvalid) throw new h(n);
          return new m({ invalid: n });
        }),
        (m.normalizeUnit = function (e) {
          var t = {
            year: 'years',
            years: 'years',
            quarter: 'quarters',
            quarters: 'quarters',
            month: 'months',
            months: 'months',
            week: 'weeks',
            weeks: 'weeks',
            day: 'days',
            days: 'days',
            hour: 'hours',
            hours: 'hours',
            minute: 'minutes',
            minutes: 'minutes',
            second: 'seconds',
            seconds: 'seconds',
            millisecond: 'milliseconds',
            milliseconds: 'milliseconds',
          }[e && e.toLowerCase()];
          if (!t) throw new y(e);
          return t;
        }),
        (m.isDuration = function (e) {
          return (e && e.isLuxonDuration) || !1;
        });
      var e = m.prototype;
      return (
        (e.toFormat = function (e, t) {
          t = u({}, (t = void 0 === t ? {} : t), {
            floor: !1 !== t.round && !1 !== t.floor,
          });
          return this.isValid
            ? Ve.create(this.loc, t).formatDurationFromString(this, e)
            : 'Invalid Duration';
        }),
        (e.toObject = function () {
          return this.isValid ? u({}, this.values) : {};
        }),
        (e.toISO = function () {
          if (!this.isValid) return null;
          var e = 'P';
          return (
            0 !== this.years && (e += this.years + 'Y'),
            (0 === this.months && 0 === this.quarters) ||
              (e += this.months + 3 * this.quarters + 'M'),
            0 !== this.weeks && (e += this.weeks + 'W'),
            0 !== this.days && (e += this.days + 'D'),
            (0 === this.hours &&
              0 === this.minutes &&
              0 === this.seconds &&
              0 === this.milliseconds) ||
              (e += 'T'),
            0 !== this.hours && (e += this.hours + 'H'),
            0 !== this.minutes && (e += this.minutes + 'M'),
            (0 === this.seconds && 0 === this.milliseconds) ||
              (e += ee(this.seconds + this.milliseconds / 1e3, 3) + 'S'),
            'P' === e && (e += 'T0S'),
            e
          );
        }),
        (e.toISOTime = function (e) {
          if ((void 0 === e && (e = {}), !this.isValid)) return null;
          var t = this.toMillis();
          if (t < 0 || 864e5 <= t) return null;
          e = u(
            {
              suppressMilliseconds: !1,
              suppressSeconds: !1,
              includePrefix: !1,
              format: 'extended',
            },
            e
          );
          var n = this.shiftTo('hours', 'minutes', 'seconds', 'milliseconds'),
            t = 'basic' === e.format ? 'hhmm' : 'hh:mm';
          (e.suppressSeconds && 0 === n.seconds && 0 === n.milliseconds) ||
            ((t += 'basic' === e.format ? 'ss' : ':ss'),
            (e.suppressMilliseconds && 0 === n.milliseconds) || (t += '.SSS'));
          t = n.toFormat(t);
          return (t = e.includePrefix ? 'T' + t : t);
        }),
        (e.toJSON = function () {
          return this.toISO();
        }),
        (e.toString = function () {
          return this.toISO();
        }),
        (e.toMillis = function () {
          return this.as('milliseconds');
        }),
        (e.valueOf = function () {
          return this.toMillis();
        }),
        (e.plus = function (e) {
          if (!this.isValid) return this;
          for (var t = Qt(e), n = {}, r = k(Jt); !(i = r()).done; ) {
            var i = i.value;
            ($(t.values, i) || $(this.values, i)) &&
              (n[i] = t.get(i) + this.get(i));
          }
          return Gt(this, { values: n }, !0);
        }),
        (e.minus = function (e) {
          if (!this.isValid) return this;
          e = Qt(e);
          return this.plus(e.negate());
        }),
        (e.mapUnits = function (e) {
          if (!this.isValid) return this;
          for (
            var t = {}, n = 0, r = Object.keys(this.values);
            n < r.length;
            n++
          ) {
            var i = r[n];
            t[i] = ce(e(this.values[i], i));
          }
          return Gt(this, { values: t }, !0);
        }),
        (e.get = function (e) {
          return this[m.normalizeUnit(e)];
        }),
        (e.set = function (e) {
          return this.isValid
            ? Gt(this, { values: u({}, this.values, le(e, m.normalizeUnit)) })
            : this;
        }),
        (e.reconfigure = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.locale,
            e = t.numberingSystem,
            t = t.conversionAccuracy,
            e = { loc: this.loc.clone({ locale: n, numberingSystem: e }) };
          return t && (e.conversionAccuracy = t), Gt(this, e);
        }),
        (e.as = function (e) {
          return this.isValid ? this.shiftTo(e).get(e) : NaN;
        }),
        (e.normalize = function () {
          if (!this.isValid) return this;
          var n,
            r,
            e = this.toObject();
          return (
            (n = this.matrix),
            (r = e),
            Yt.reduce(function (e, t) {
              return P(r[t]) ? e : (e && $t(n, r, e, r, t), t);
            }, null),
            Gt(this, { values: e }, !0)
          );
        }),
        (e.shiftTo = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (!this.isValid) return this;
          if (0 === t.length) return this;
          for (
            var r,
              t = t.map(function (e) {
                return m.normalizeUnit(e);
              }),
              i = {},
              o = {},
              a = this.toObject(),
              u = k(Jt);
            !(h = u()).done;
  
          ) {
            var s = h.value;
            if (0 <= t.indexOf(s)) {
              var c,
                l = s,
                f = 0;
              for (c in o) (f += this.matrix[c][s] * o[c]), (o[c] = 0);
              W(a[s]) && (f += a[s]);
              var d,
                h = Math.trunc(f);
              for (d in ((i[s] = h), (o[s] = f - h), a))
                Jt.indexOf(d) > Jt.indexOf(s) && $t(this.matrix, a, d, i, s);
            } else W(a[s]) && (o[s] = a[s]);
          }
          for (r in o)
            0 !== o[r] && (i[l] += r === l ? o[r] : o[r] / this.matrix[l][r]);
          return Gt(this, { values: i }, !0).normalize();
        }),
        (e.negate = function () {
          if (!this.isValid) return this;
          for (
            var e = {}, t = 0, n = Object.keys(this.values);
            t < n.length;
            t++
          ) {
            var r = n[t];
            e[r] = -this.values[r];
          }
          return Gt(this, { values: e }, !0);
        }),
        (e.equals = function (e) {
          if (!this.isValid || !e.isValid) return !1;
          if (!this.loc.equals(e.loc)) return !1;
          for (var t, n, r = k(Jt); !(i = r()).done; ) {
            var i = i.value;
            if (
              ((t = this.values[i]),
              (n = e.values[i]),
              !(void 0 === t || 0 === t ? void 0 === n || 0 === n : t === n))
            )
              return !1;
          }
          return !0;
        }),
        o(m, [
          {
            key: 'locale',
            get: function () {
              return this.isValid ? this.loc.locale : null;
            },
          },
          {
            key: 'numberingSystem',
            get: function () {
              return this.isValid ? this.loc.numberingSystem : null;
            },
          },
          {
            key: 'years',
            get: function () {
              return this.isValid ? this.values.years || 0 : NaN;
            },
          },
          {
            key: 'quarters',
            get: function () {
              return this.isValid ? this.values.quarters || 0 : NaN;
            },
          },
          {
            key: 'months',
            get: function () {
              return this.isValid ? this.values.months || 0 : NaN;
            },
          },
          {
            key: 'weeks',
            get: function () {
              return this.isValid ? this.values.weeks || 0 : NaN;
            },
          },
          {
            key: 'days',
            get: function () {
              return this.isValid ? this.values.days || 0 : NaN;
            },
          },
          {
            key: 'hours',
            get: function () {
              return this.isValid ? this.values.hours || 0 : NaN;
            },
          },
          {
            key: 'minutes',
            get: function () {
              return this.isValid ? this.values.minutes || 0 : NaN;
            },
          },
          {
            key: 'seconds',
            get: function () {
              return this.isValid ? this.values.seconds || 0 : NaN;
            },
          },
          {
            key: 'milliseconds',
            get: function () {
              return this.isValid ? this.values.milliseconds || 0 : NaN;
            },
          },
          {
            key: 'isValid',
            get: function () {
              return null === this.invalid;
            },
          },
          {
            key: 'invalidReason',
            get: function () {
              return this.invalid ? this.invalid.reason : null;
            },
          },
          {
            key: 'invalidExplanation',
            get: function () {
              return this.invalid ? this.invalid.explanation : null;
            },
          },
        ]),
        m
      );
    })();
    function Qt(e) {
      if (W(e)) return Bt.fromMillis(e);
      if (Bt.isDuration(e)) return e;
      if ('object' == typeof e) return Bt.fromObject(e);
      throw new v('Unknown duration argument ' + e + ' of type ' + typeof e);
    }
    var Kt = 'Invalid Interval';
    var Xt = (function () {
        function c(e) {
          (this.s = e.start),
            (this.e = e.end),
            (this.invalid = e.invalid || null),
            (this.isLuxonInterval = !0);
        }
        (c.invalid = function (e, t) {
          if ((void 0 === t && (t = null), !e))
            throw new v('need to specify a reason the Interval is invalid');
          var n = e instanceof Ie ? e : new Ie(e, t);
          if ($e.throwOnInvalid) throw new d(n);
          return new c({ invalid: n });
        }),
          (c.fromDateTimes = function (e, t) {
            var n = nr(e),
              r = nr(t),
              e =
                ((e = r),
                (t = n) && t.isValid
                  ? e && e.isValid
                    ? e < t
                      ? Xt.invalid(
                          'end before start',
                          'The end of an interval must be after its start, but you had start=' +
                            t.toISO() +
                            ' and end=' +
                            e.toISO()
                        )
                      : null
                    : Xt.invalid('missing or invalid end')
                  : Xt.invalid('missing or invalid start'));
            return null == e ? new c({ start: n, end: r }) : e;
          }),
          (c.after = function (e, t) {
            (t = Qt(t)), (e = nr(e));
            return c.fromDateTimes(e, e.plus(t));
          }),
          (c.before = function (e, t) {
            (t = Qt(t)), (e = nr(e));
            return c.fromDateTimes(e.minus(t), e);
          }),
          (c.fromISO = function (e, t) {
            var n,
              r,
              i,
              o = (e || '').split('/', 2),
              a = o[0],
              u = o[1];
            if (a && u) {
              try {
                s = (n = tr.fromISO(a, t)).isValid;
              } catch (u) {
                s = !1;
              }
              try {
                i = (r = tr.fromISO(u, t)).isValid;
              } catch (u) {
                i = !1;
              }
              if (s && i) return c.fromDateTimes(n, r);
              if (s) {
                var s = Bt.fromISO(u, t);
                if (s.isValid) return c.after(n, s);
              } else if (i) {
                t = Bt.fromISO(a, t);
                if (t.isValid) return c.before(r, t);
              }
            }
            return c.invalid(
              'unparsable',
              'the input "' + e + '" can\'t be parsed as ISO 8601'
            );
          }),
          (c.isInterval = function (e) {
            return (e && e.isLuxonInterval) || !1;
          });
        var e = c.prototype;
        return (
          (e.length = function (e) {
            return (
              void 0 === e && (e = 'milliseconds'),
              this.isValid ? this.toDuration.apply(this, [e]).get(e) : NaN
            );
          }),
          (e.count = function (e) {
            if (!this.isValid) return NaN;
            var t = this.start.startOf((e = void 0 === e ? 'milliseconds' : e)),
              n = this.end.startOf(e);
            return Math.floor(n.diff(t, e).get(e)) + 1;
          }),
          (e.hasSame = function (e) {
            return (
              !!this.isValid &&
              (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
            );
          }),
          (e.isEmpty = function () {
            return this.s.valueOf() === this.e.valueOf();
          }),
          (e.isAfter = function (e) {
            return !!this.isValid && this.s > e;
          }),
          (e.isBefore = function (e) {
            return !!this.isValid && this.e <= e;
          }),
          (e.contains = function (e) {
            return !!this.isValid && this.s <= e && this.e > e;
          }),
          (e.set = function (e) {
            var t = void 0 === e ? {} : e,
              e = t.start,
              t = t.end;
            return this.isValid
              ? c.fromDateTimes(e || this.s, t || this.e)
              : this;
          }),
          (e.splitAt = function () {
            var t = this;
            if (!this.isValid) return [];
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            for (
              var i = n
                  .map(nr)
                  .filter(function (e) {
                    return t.contains(e);
                  })
                  .sort(),
                o = [],
                a = this.s,
                u = 0;
              a < this.e;
  
            ) {
              var s = i[u] || this.e,
                s = +s > +this.e ? this.e : s;
              o.push(c.fromDateTimes(a, s)), (a = s), (u += 1);
            }
            return o;
          }),
          (e.splitBy = function (e) {
            var t = Qt(e);
            if (!this.isValid || !t.isValid || 0 === t.as('milliseconds'))
              return [];
            for (var n = this.s, r = 1, i = []; n < this.e; ) {
              var o = this.start.plus(
                  t.mapUnits(function (e) {
                    return e * r;
                  })
                ),
                o = +o > +this.e ? this.e : o;
              i.push(c.fromDateTimes(n, o)), (n = o), (r += 1);
            }
            return i;
          }),
          (e.divideEqually = function (e) {
            return this.isValid
              ? this.splitBy(this.length() / e).slice(0, e)
              : [];
          }),
          (e.overlaps = function (e) {
            return this.e > e.s && this.s < e.e;
          }),
          (e.abutsStart = function (e) {
            return !!this.isValid && +this.e == +e.s;
          }),
          (e.abutsEnd = function (e) {
            return !!this.isValid && +e.e == +this.s;
          }),
          (e.engulfs = function (e) {
            return !!this.isValid && this.s <= e.s && this.e >= e.e;
          }),
          (e.equals = function (e) {
            return (
              !(!this.isValid || !e.isValid) &&
              this.s.equals(e.s) &&
              this.e.equals(e.e)
            );
          }),
          (e.intersection = function (e) {
            if (!this.isValid) return this;
            var t = (this.s > e.s ? this : e).s,
              e = (this.e < e.e ? this : e).e;
            return e <= t ? null : c.fromDateTimes(t, e);
          }),
          (e.union = function (e) {
            if (!this.isValid) return this;
            var t = (this.s < e.s ? this : e).s,
              e = (this.e > e.e ? this : e).e;
            return c.fromDateTimes(t, e);
          }),
          (c.merge = function (e) {
            var t = e
                .sort(function (e, t) {
                  return e.s - t.s;
                })
                .reduce(
                  function (e, t) {
                    var n = e[0],
                      e = e[1];
                    return e
                      ? e.overlaps(t) || e.abutsStart(t)
                        ? [n, e.union(t)]
                        : [n.concat([e]), t]
                      : [n, t];
                  },
                  [[], null]
                ),
              e = t[0],
              t = t[1];
            return t && e.push(t), e;
          }),
          (c.xor = function (e) {
            for (
              var t = null,
                n = 0,
                r = [],
                i = e.map(function (e) {
                  return [
                    { time: e.s, type: 's' },
                    { time: e.e, type: 'e' },
                  ];
                }),
                o = k(
                  (e = Array.prototype).concat.apply(e, i).sort(function (e, t) {
                    return e.time - t.time;
                  })
                );
              !(a = o()).done;
  
            )
              var a = a.value,
                t =
                  1 === (n += 's' === a.type ? 1 : -1)
                    ? a.time
                    : (t && +t != +a.time && r.push(c.fromDateTimes(t, a.time)),
                      null);
            return c.merge(r);
          }),
          (e.difference = function () {
            for (
              var t = this, e = arguments.length, n = new Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r];
            return c
              .xor([this].concat(n))
              .map(function (e) {
                return t.intersection(e);
              })
              .filter(function (e) {
                return e && !e.isEmpty();
              });
          }),
          (e.toString = function () {
            return this.isValid
              ? '[' + this.s.toISO() + ' – ' + this.e.toISO() + ')'
              : Kt;
          }),
          (e.toISO = function (e) {
            return this.isValid ? this.s.toISO(e) + '/' + this.e.toISO(e) : Kt;
          }),
          (e.toISODate = function () {
            return this.isValid
              ? this.s.toISODate() + '/' + this.e.toISODate()
              : Kt;
          }),
          (e.toISOTime = function (e) {
            return this.isValid
              ? this.s.toISOTime(e) + '/' + this.e.toISOTime(e)
              : Kt;
          }),
          (e.toFormat = function (e, t) {
            (t = (void 0 === t ? {} : t).separator),
              (t = void 0 === t ? ' – ' : t);
            return this.isValid
              ? '' + this.s.toFormat(e) + t + this.e.toFormat(e)
              : Kt;
          }),
          (e.toDuration = function (e, t) {
            return this.isValid
              ? this.e.diff(this.s, e, t)
              : Bt.invalid(this.invalidReason);
          }),
          (e.mapEndpoints = function (e) {
            return c.fromDateTimes(e(this.s), e(this.e));
          }),
          o(c, [
            {
              key: 'start',
              get: function () {
                return this.isValid ? this.s : null;
              },
            },
            {
              key: 'end',
              get: function () {
                return this.isValid ? this.e : null;
              },
            },
            {
              key: 'isValid',
              get: function () {
                return null === this.invalidReason;
              },
            },
            {
              key: 'invalidReason',
              get: function () {
                return this.invalid ? this.invalid.reason : null;
              },
            },
            {
              key: 'invalidExplanation',
              get: function () {
                return this.invalid ? this.invalid.explanation : null;
              },
            },
          ]),
          c
        );
      })(),
      en = (function () {
        function e() {}
        return (
          (e.hasDST = function (e) {
            void 0 === e && (e = $e.defaultZone);
            var t = tr.now().setZone(e).set({ month: 12 });
            return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
          }),
          (e.isValidIANAZone = function (e) {
            return je.isValidSpecifier(e) && je.isValidZone(e);
          }),
          (e.normalizeZone = function (e) {
            return Re(e, $e.defaultZone);
          }),
          (e.months = function (e, t) {
            void 0 === e && (e = 'long');
            var n = void 0 === t ? {} : t,
              r = n.locale,
              i = n.numberingSystem,
              t = n.locObj,
              t = void 0 === t ? null : t,
              n = n.outputCalendar;
            return (
              t ||
              ut.create(
                void 0 === r ? null : r,
                void 0 === i ? null : i,
                void 0 === n ? 'gregory' : n
              )
            ).months(e);
          }),
          (e.monthsFormat = function (e, t) {
            void 0 === e && (e = 'long');
            var n = void 0 === t ? {} : t,
              r = n.locale,
              i = n.numberingSystem,
              t = n.locObj,
              t = void 0 === t ? null : t,
              n = n.outputCalendar;
            return (
              t ||
              ut.create(
                void 0 === r ? null : r,
                void 0 === i ? null : i,
                void 0 === n ? 'gregory' : n
              )
            ).months(e, !0);
          }),
          (e.weekdays = function (e, t) {
            void 0 === e && (e = 'long');
            var n = void 0 === t ? {} : t,
              r = n.locale,
              t = n.numberingSystem,
              n = n.locObj;
            return (
              (void 0 === n ? null : n) ||
              ut.create(void 0 === r ? null : r, void 0 === t ? null : t, null)
            ).weekdays(e);
          }),
          (e.weekdaysFormat = function (e, t) {
            void 0 === e && (e = 'long');
            var n = void 0 === t ? {} : t,
              r = n.locale,
              t = n.numberingSystem,
              n = n.locObj;
            return (
              (void 0 === n ? null : n) ||
              ut.create(void 0 === r ? null : r, void 0 === t ? null : t, null)
            ).weekdays(e, !0);
          }),
          (e.meridiems = function (e) {
            e = (void 0 === e ? {} : e).locale;
            return ut.create(void 0 === e ? null : e).meridiems();
          }),
          (e.eras = function (e, t) {
            void 0 === e && (e = 'short');
            t = (void 0 === t ? {} : t).locale;
            return ut.create(void 0 === t ? null : t, null, 'gregory').eras(e);
          }),
          (e.features = function () {
            return { relative: Y() };
          }),
          e
        );
      })();
    function tn(e, t) {
      function n(e) {
        return e.toUTC(0, { keepLocalTime: !0 }).startOf('day').valueOf();
      }
      e = n(t) - n(e);
      return Math.floor(Bt.fromMillis(e).as('days'));
    }
    function nn(e, t, n, r) {
      var i = (function (e, t, n) {
          for (
            var r = {},
              i = 0,
              o = [
                [
                  'years',
                  function (e, t) {
                    return t.year - e.year;
                  },
                ],
                [
                  'quarters',
                  function (e, t) {
                    return t.quarter - e.quarter;
                  },
                ],
                [
                  'months',
                  function (e, t) {
                    return t.month - e.month + 12 * (t.year - e.year);
                  },
                ],
                [
                  'weeks',
                  function (e, t) {
                    t = tn(e, t);
                    return (t - (t % 7)) / 7;
                  },
                ],
                ['days', tn],
              ];
            i < o.length;
            i++
          ) {
            var a,
              u,
              s = o[i],
              c = s[0],
              l = s[1];
            0 <= n.indexOf(c) &&
              ((a = c),
              (s = l(e, t)),
              t < (u = e.plus((((l = {})[c] = s), l)))
                ? ((e = e.plus((((l = {})[c] = s - 1), l))), --s)
                : (e = u),
              (r[c] = s));
          }
          return [e, r, u, a];
        })(e, t, n),
        o = i[0],
        a = i[1],
        u = i[2],
        e = i[3],
        i = t - o,
        n = n.filter(function (e) {
          return 0 <= ['hours', 'minutes', 'seconds', 'milliseconds'].indexOf(e);
        });
      0 === n.length &&
        (u = u < t ? o.plus((((t = {})[e] = 1), t)) : u) !== o &&
        (a[e] = (a[e] || 0) + i / (u - o));
      a = Bt.fromObject(a, r);
      return 0 < n.length
        ? (r = Bt.fromMillis(i, r)).shiftTo.apply(r, n).plus(a)
        : a;
    }
    var rn = {
        arab: '[٠-٩]',
        arabext: '[۰-۹]',
        bali: '[᭐-᭙]',
        beng: '[০-৯]',
        deva: '[०-९]',
        fullwide: '[０-９]',
        gujr: '[૦-૯]',
        hanidec: '[〇|一|二|三|四|五|六|七|八|九]',
        khmr: '[០-៩]',
        knda: '[೦-೯]',
        laoo: '[໐-໙]',
        limb: '[᥆-᥏]',
        mlym: '[൦-൯]',
        mong: '[᠐-᠙]',
        mymr: '[၀-၉]',
        orya: '[୦-୯]',
        tamldec: '[௦-௯]',
        telu: '[౦-౯]',
        thai: '[๐-๙]',
        tibt: '[༠-༩]',
        latn: '\\d',
      },
      on = {
        arab: [1632, 1641],
        arabext: [1776, 1785],
        bali: [6992, 7001],
        beng: [2534, 2543],
        deva: [2406, 2415],
        fullwide: [65296, 65303],
        gujr: [2790, 2799],
        khmr: [6112, 6121],
        knda: [3302, 3311],
        laoo: [3792, 3801],
        limb: [6470, 6479],
        mlym: [3430, 3439],
        mong: [6160, 6169],
        mymr: [4160, 4169],
        orya: [2918, 2927],
        tamldec: [3046, 3055],
        telu: [3174, 3183],
        thai: [3664, 3673],
        tibt: [3872, 3881],
      },
      an = rn.hanidec.replace(/[\[|\]]/g, '').split('');
    function un(e, t) {
      e = e.numberingSystem;
      return void 0 === t && (t = ''), new RegExp('' + rn[e || 'latn'] + t);
    }
    var sn = 'missing Intl.DateTimeFormat.formatToParts support';
    function cn(e, t) {
      return (
        void 0 === t &&
          (t = function (e) {
            return e;
          }),
        {
          regex: e,
          deser: function (e) {
            e = e[0];
            return t(
              (function (e) {
                var t = parseInt(e, 10);
                if (isNaN(t)) {
                  for (var t = '', n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (-1 !== e[n].search(rn.hanidec)) t += an.indexOf(e[n]);
                    else
                      for (var i in on) {
                        var o = on[i],
                          i = o[0],
                          o = o[1];
                        i <= r && r <= o && (t += r - i);
                      }
                  }
                  return parseInt(t, 10);
                }
                return t;
              })(e)
            );
          },
        }
      );
    }
    var ln = '( |' + String.fromCharCode(160) + ')',
      fn = new RegExp(ln, 'g');
    function dn(e) {
      return e.replace(/\./g, '\\.?').replace(fn, ln);
    }
    function hn(e) {
      return e.replace(/\./g, '').replace(fn, ' ').toLowerCase();
    }
    function mn(n, r) {
      return null === n
        ? null
        : {
            regex: RegExp(n.map(dn).join('|')),
            deser: function (e) {
              var t = e[0];
              return (
                n.findIndex(function (e) {
                  return hn(t) === hn(e);
                }) + r
              );
            },
          };
    }
    function yn(e, t) {
      return {
        regex: e,
        deser: function (e) {
          return se(e[1], e[2]);
        },
        groups: t,
      };
    }
    function vn(e) {
      return {
        regex: e,
        deser: function (e) {
          return e[0];
        },
      };
    }
    function pn(t, n) {
      function r(e) {
        return {
          regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')),
          deser: function (e) {
            return e[0];
          },
          literal: !0,
        };
      }
      var i = un(n),
        o = un(n, '{2}'),
        a = un(n, '{3}'),
        u = un(n, '{4}'),
        s = un(n, '{6}'),
        c = un(n, '{1,2}'),
        l = un(n, '{1,3}'),
        f = un(n, '{1,6}'),
        d = un(n, '{1,9}'),
        h = un(n, '{2,4}'),
        m = un(n, '{4,6}'),
        e = (function (e) {
          if (t.literal) return r(e);
          switch (e.val) {
            case 'G':
              return mn(n.eras('short', !1), 0);
            case 'GG':
              return mn(n.eras('long', !1), 0);
            case 'y':
              return cn(f);
            case 'yy':
              return cn(h, ae);
            case 'yyyy':
              return cn(u);
            case 'yyyyy':
              return cn(m);
            case 'yyyyyy':
              return cn(s);
            case 'M':
              return cn(c);
            case 'MM':
              return cn(o);
            case 'MMM':
              return mn(n.months('short', !0, !1), 1);
            case 'MMMM':
              return mn(n.months('long', !0, !1), 1);
            case 'L':
              return cn(c);
            case 'LL':
              return cn(o);
            case 'LLL':
              return mn(n.months('short', !1, !1), 1);
            case 'LLLL':
              return mn(n.months('long', !1, !1), 1);
            case 'd':
              return cn(c);
            case 'dd':
              return cn(o);
            case 'o':
              return cn(l);
            case 'ooo':
              return cn(a);
            case 'HH':
              return cn(o);
            case 'H':
              return cn(c);
            case 'hh':
              return cn(o);
            case 'h':
              return cn(c);
            case 'mm':
              return cn(o);
            case 'm':
            case 'q':
              return cn(c);
            case 'qq':
              return cn(o);
            case 's':
              return cn(c);
            case 'ss':
              return cn(o);
            case 'S':
              return cn(l);
            case 'SSS':
              return cn(a);
            case 'u':
              return vn(d);
            case 'a':
              return mn(n.meridiems(), 0);
            case 'kkkk':
              return cn(u);
            case 'kk':
              return cn(h, ae);
            case 'W':
              return cn(c);
            case 'WW':
              return cn(o);
            case 'E':
            case 'c':
              return cn(i);
            case 'EEE':
              return mn(n.weekdays('short', !1, !1), 1);
            case 'EEEE':
              return mn(n.weekdays('long', !1, !1), 1);
            case 'ccc':
              return mn(n.weekdays('short', !0, !1), 1);
            case 'cccc':
              return mn(n.weekdays('long', !0, !1), 1);
            case 'Z':
            case 'ZZ':
              return yn(
                new RegExp('([+-]' + c.source + ')(?::(' + o.source + '))?'),
                2
              );
            case 'ZZZ':
              return yn(
                new RegExp('([+-]' + c.source + ')(' + o.source + ')?'),
                2
              );
            case 'z':
              return vn(/[a-z_+-/]{1,256}?/i);
            default:
              return r(e);
          }
        })(t) || { invalidReason: sn };
      return (e.token = t), e;
    }
    var gn = {
      year: { '2-digit': 'yy', numeric: 'yyyyy' },
      month: { numeric: 'M', '2-digit': 'MM', short: 'MMM', long: 'MMMM' },
      day: { numeric: 'd', '2-digit': 'dd' },
      weekday: { short: 'EEE', long: 'EEEE' },
      dayperiod: 'a',
      dayPeriod: 'a',
      hour: { numeric: 'h', '2-digit': 'hh' },
      minute: { numeric: 'm', '2-digit': 'mm' },
      second: { numeric: 's', '2-digit': 'ss' },
    };
    var wn = null;
    function kn(e, t) {
      if (e.literal) return e;
      var i = Ve.macroTokenToFormatOpts(e.val);
      if (!i) return e;
      t = Ve.create(t, i)
        .formatDateTimeParts((wn = wn || tr.fromMillis(1555555555555)))
        .map(function (e) {
          return (
            (n = i),
            (r = (t = e).type),
            (t = e.value),
            'literal' === r
              ? { literal: !0, val: t }
              : ((n = n[r]),
                (r = 'object' == typeof (r = gn[r]) ? r[n] : r)
                  ? { literal: !1, val: r }
                  : void 0)
          );
          var t, n, r;
        });
      return t.includes(void 0) ? e : t;
    }
    function Sn(t, e, n) {
      var r,
        i =
          ((c = Ve.parseFormat(n)),
          (r = t),
          (s = Array.prototype).concat.apply(
            s,
            c.map(function (e) {
              return kn(e, r);
            })
          )),
        o = i.map(function (e) {
          return pn(e, t);
        }),
        n = o.find(function (e) {
          return e.invalidReason;
        });
      if (n) return { input: e, tokens: i, invalidReason: n.invalidReason };
      var a,
        u,
        s,
        c = [
          '^' +
            (s = o)
              .map(function (e) {
                return e.regex;
              })
              .reduce(function (e, t) {
                return e + '(' + t.source + ')';
              }, '') +
            '$',
          s,
        ],
        n = c[1],
        o = RegExp(c[0], 'i'),
        s = (function (e, t, n) {
          var r = e.match(t);
          if (r) {
            var i,
              o,
              a,
              u = {},
              s = 1;
            for (i in n)
              $(n, i) &&
                ((a = (o = n[i]).groups ? o.groups + 1 : 1),
                !o.literal &&
                  o.token &&
                  (u[o.token.val[0]] = o.deser(r.slice(s, s + a))),
                (s += a));
            return [r, u];
          }
          return [r, {}];
        })(e, o, n),
        c = s[0],
        n = s[1],
        s = n
          ? ((u = P((a = n).Z) ? (P(a.z) ? null : je.create(a.z)) : new _e(a.Z)),
            P(a.q) || (a.M = 3 * (a.q - 1) + 1),
            P(a.h) ||
              (a.h < 12 && 1 === a.a
                ? (a.h += 12)
                : 12 === a.h && 0 === a.a && (a.h = 0)),
            0 === a.G && a.y && (a.y = -a.y),
            P(a.u) || (a.S = X(a.u)),
            [
              Object.keys(a).reduce(function (e, t) {
                var n = (function (e) {
                  switch (e) {
                    case 'S':
                      return 'millisecond';
                    case 's':
                      return 'second';
                    case 'm':
                      return 'minute';
                    case 'h':
                    case 'H':
                      return 'hour';
                    case 'd':
                      return 'day';
                    case 'o':
                      return 'ordinal';
                    case 'L':
                    case 'M':
                      return 'month';
                    case 'y':
                      return 'year';
                    case 'E':
                    case 'c':
                      return 'weekday';
                    case 'W':
                      return 'weekNumber';
                    case 'k':
                      return 'weekYear';
                    case 'q':
                      return 'quarter';
                    default:
                      return null;
                  }
                })(t);
                return n && (e[n] = a[t]), e;
              }, {}),
              u,
            ])
          : [null, null],
        u = s[0],
        s = s[1];
      if ($(n, 'a') && $(n, 'H'))
        throw new S("Can't include meridiem when specifying 24-hour format");
      return {
        input: e,
        tokens: i,
        regex: o,
        rawMatches: c,
        matches: n,
        result: u,
        zone: s,
      };
    }
    var Tn = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
      bn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    function On(e, t) {
      return new Ie(
        'unit out of range',
        'you specified ' +
          t +
          ' (of type ' +
          typeof t +
          ') as a ' +
          e +
          ', which is invalid'
      );
    }
    function Mn(e, t, n) {
      n = new Date(Date.UTC(e, t - 1, n)).getUTCDay();
      return 0 === n ? 7 : n;
    }
    function Nn(e, t, n) {
      return n + (te(e) ? bn : Tn)[t - 1];
    }
    function Dn(e, t) {
      var n = te(e) ? bn : Tn,
        e = n.findIndex(function (e) {
          return e < t;
        });
      return { month: e + 1, day: t - n[e] };
    }
    function En(e) {
      var t,
        n = e.year,
        r = e.month,
        i = e.day,
        o = Nn(n, r, i),
        i = Mn(n, r, i),
        o = Math.floor((o - i + 10) / 7);
      return (
        o < 1
          ? (o = oe((t = n - 1)))
          : o > oe(n)
          ? ((t = n + 1), (o = 1))
          : (t = n),
        u({ weekYear: t, weekNumber: o, weekday: i }, de(e))
      );
    }
    function Vn(e) {
      var t,
        n = e.weekYear,
        r = e.weekNumber,
        i = e.weekday,
        o = Mn(n, 1, 4),
        a = ne(n),
        o = 7 * r + i - o - 3;
      o < 1
        ? (o += ne((t = n - 1)))
        : a < o
        ? ((t = n + 1), (o -= ne(n)))
        : (t = n);
      o = Dn(t, o);
      return u({ year: t, month: o.month, day: o.day }, de(e));
    }
    function In(e) {
      var t = e.year;
      return u({ year: t, ordinal: Nn(t, e.month, e.day) }, de(e));
    }
    function xn(e) {
      var t = e.year,
        n = Dn(t, e.ordinal);
      return u({ year: t, month: n.month, day: n.day }, de(e));
    }
    function Cn(e) {
      var t = J(e.year),
        n = B(e.month, 1, 12),
        r = B(e.day, 1, re(e.year, e.month));
      return t
        ? n
          ? !r && On('day', e.day)
          : On('month', e.month)
        : On('year', e.year);
    }
    function Zn(e) {
      var t = e.hour,
        n = e.minute,
        r = e.second,
        i = e.millisecond,
        o = B(t, 0, 23) || (24 === t && 0 === n && 0 === r && 0 === i),
        a = B(n, 0, 59),
        u = B(r, 0, 59),
        e = B(i, 0, 999);
      return o
        ? a
          ? u
            ? !e && On('millisecond', i)
            : On('second', r)
          : On('minute', n)
        : On('hour', t);
    }
    var Fn = 'Invalid DateTime';
    function Ln(e) {
      return new Ie(
        'unsupported zone',
        'the zone "' + e.name + '" is not supported'
      );
    }
    function An(e) {
      return null === e.weekData && (e.weekData = En(e.c)), e.weekData;
    }
    function zn(e, t) {
      e = {
        ts: e.ts,
        zone: e.zone,
        c: e.c,
        o: e.o,
        loc: e.loc,
        invalid: e.invalid,
      };
      return new tr(u({}, e, t, { old: e }));
    }
    function jn(e, t, n) {
      var r = e - 60 * t * 1e3,
        i = n.offset(r);
      if (t === i) return [r, t];
      t = n.offset((r -= 60 * (i - t) * 1e3));
      return i === t ? [r, i] : [e - 60 * Math.min(i, t) * 1e3, Math.max(i, t)];
    }
    function qn(e, t) {
      e += 60 * t * 1e3;
      e = new Date(e);
      return {
        year: e.getUTCFullYear(),
        month: e.getUTCMonth() + 1,
        day: e.getUTCDate(),
        hour: e.getUTCHours(),
        minute: e.getUTCMinutes(),
        second: e.getUTCSeconds(),
        millisecond: e.getUTCMilliseconds(),
      };
    }
    function _n(e, t, n) {
      return jn(ie(e), t, n);
    }
    function Un(e, t) {
      var n = e.o,
        r = e.c.year + Math.trunc(t.years),
        i = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
        i = u({}, e.c, {
          year: r,
          month: i,
          day:
            Math.min(e.c.day, re(r, i)) +
            Math.trunc(t.days) +
            7 * Math.trunc(t.weeks),
        }),
        t = Bt.fromObject({
          years: t.years - Math.trunc(t.years),
          quarters: t.quarters - Math.trunc(t.quarters),
          months: t.months - Math.trunc(t.months),
          weeks: t.weeks - Math.trunc(t.weeks),
          days: t.days - Math.trunc(t.days),
          hours: t.hours,
          minutes: t.minutes,
          seconds: t.seconds,
          milliseconds: t.milliseconds,
        }).as('milliseconds'),
        i = jn(ie(i), n, e.zone),
        n = i[0],
        i = i[1];
      return 0 !== t && (i = e.zone.offset((n += t))), { ts: n, o: i };
    }
    function Rn(e, t, n, r, i) {
      var o = n.setZone,
        a = n.zone;
      if (e && 0 !== Object.keys(e).length) {
        t = tr.fromObject(e, u({}, n, { zone: t || a, setZone: void 0 }));
        return o ? t : t.setZone(a);
      }
      return tr.invalid(
        new Ie('unparsable', 'the input "' + i + '" can\'t be parsed as ' + r)
      );
    }
    function Hn(e, t, n) {
      return (
        void 0 === n && (n = !0),
        e.isValid
          ? Ve.create(ut.create('en-US'), {
              allowZ: n,
              forceSimple: !0,
            }).formatDateTimeFromString(e, t)
          : null
      );
    }
    function Pn(e, t) {
      var n = t.suppressSeconds,
        r = t.suppressMilliseconds,
        i = t.includeOffset,
        o = t.includePrefix,
        a = void 0 !== o && o,
        u = t.includeZone,
        s = void 0 !== u && u,
        o = t.spaceZone,
        u = t.format,
        t = void 0 === u ? 'extended' : u,
        u = 'basic' === t ? 'HHmm' : 'HH:mm';
      (void 0 !== n && n && 0 === e.second && 0 === e.millisecond) ||
        ((u += 'basic' === t ? 'ss' : ':ss'),
        (void 0 !== r && r && 0 === e.millisecond) || (u += '.SSS')),
        (s || i) && void 0 !== o && o && (u += ' '),
        s ? (u += 'z') : i && (u += 'basic' === t ? 'ZZZ' : 'ZZ');
      u = Hn(e, u);
      return (u = a ? 'T' + u : u);
    }
    var Wn = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
      Jn = {
        weekNumber: 1,
        weekday: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      },
      Yn = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
      Gn = ['year', 'month', 'day', 'hour', 'minute', 'second', 'millisecond'],
      $n = [
        'weekYear',
        'weekNumber',
        'weekday',
        'hour',
        'minute',
        'second',
        'millisecond',
      ],
      Bn = ['year', 'ordinal', 'hour', 'minute', 'second', 'millisecond'];
    function Qn(e) {
      var t = {
        year: 'year',
        years: 'year',
        month: 'month',
        months: 'month',
        day: 'day',
        days: 'day',
        hour: 'hour',
        hours: 'hour',
        minute: 'minute',
        minutes: 'minute',
        quarter: 'quarter',
        quarters: 'quarter',
        second: 'second',
        seconds: 'second',
        millisecond: 'millisecond',
        milliseconds: 'millisecond',
        weekday: 'weekday',
        weekdays: 'weekday',
        weeknumber: 'weekNumber',
        weeksnumber: 'weekNumber',
        weeknumbers: 'weekNumber',
        weekyear: 'weekYear',
        weekyears: 'weekYear',
        ordinal: 'ordinal',
      }[e.toLowerCase()];
      if (!t) throw new y(e);
      return t;
    }
    function Kn(e, t) {
      var n = Re(t.zone, $e.defaultZone),
        r = ut.fromObject(t),
        t = $e.now();
      if (P(e.year)) u = t;
      else {
        for (var i = k(Gn); !(o = i()).done; ) {
          var o = o.value;
          P(e[o]) && (e[o] = Wn[o]);
        }
        var a = Cn(e) || Zn(e);
        if (a) return tr.invalid(a);
        var a = _n(e, n.offset(t), n),
          u = a[0],
          a = a[1];
      }
      return new tr({ ts: u, zone: n, loc: r, o: a });
    }
    function Xn(t, n, r) {
      function e(e, t) {
        return (
          (e = ee(e, o || r.calendary ? 0 : 2, !0)),
          n.loc.clone(r).relFormatter(r).format(e, t)
        );
      }
      function i(e) {
        return r.calendary
          ? n.hasSame(t, e)
            ? 0
            : n.startOf(e).diff(t.startOf(e), e).get(e)
          : n.diff(t, e).get(e);
      }
      var o = !!P(r.round) || r.round;
      if (r.unit) return e(i(r.unit), r.unit);
      for (var a = k(r.units); !(s = a()).done; ) {
        var u = s.value,
          s = i(u);
        if (1 <= Math.abs(s)) return e(s, u);
      }
      return e(n < t ? -0 : 0, r.units[r.units.length - 1]);
    }
    function er(e) {
      var t = {},
        e =
          0 < e.length && 'object' == typeof e[e.length - 1]
            ? ((t = e[e.length - 1]), Array.from(e).slice(0, e.length - 1))
            : Array.from(e);
      return [t, e];
    }
    var tr = (function () {
      function w(e) {
        var t = e.zone || $e.defaultZone,
          n =
            e.invalid ||
            (Number.isNaN(e.ts) ? new Ie('invalid input') : null) ||
            (t.isValid ? null : Ln(t));
        this.ts = P(e.ts) ? $e.now() : e.ts;
        var r,
          i = null,
          o = null;
        n ||
          (o =
            e.old && e.old.ts === this.ts && e.old.zone.equals(t)
              ? ((i = (r = [e.old.c, e.old.o])[0]), r[1])
              : ((r = t.offset(this.ts)),
                (i = qn(this.ts, r)),
                (i = (n = Number.isNaN(i.year) ? new Ie('invalid input') : null)
                  ? null
                  : i),
                n ? null : r)),
          (this._zone = t),
          (this.loc = e.loc || ut.create()),
          (this.invalid = n),
          (this.weekData = null),
          (this.c = i),
          (this.o = o),
          (this.isLuxonDateTime = !0);
      }
      (w.now = function () {
        return new w({});
      }),
        (w.local = function () {
          var e = er(arguments),
            t = e[0],
            e = e[1];
          return Kn(
            {
              year: e[0],
              month: e[1],
              day: e[2],
              hour: e[3],
              minute: e[4],
              second: e[5],
              millisecond: e[6],
            },
            t
          );
        }),
        (w.utc = function () {
          var e = er(arguments),
            t = e[0],
            n = e[1],
            r = n[0],
            i = n[1],
            o = n[2],
            a = n[3],
            u = n[4],
            e = n[5],
            n = n[6];
          return (
            (t.zone = _e.utcInstance),
            Kn(
              {
                year: r,
                month: i,
                day: o,
                hour: a,
                minute: u,
                second: e,
                millisecond: n,
              },
              t
            )
          );
        }),
        (w.fromJSDate = function (e, t) {
          void 0 === t && (t = {});
          var n =
            '[object Date]' === Object.prototype.toString.call(e)
              ? e.valueOf()
              : NaN;
          if (Number.isNaN(n)) return w.invalid('invalid input');
          e = Re(t.zone, $e.defaultZone);
          return e.isValid
            ? new w({ ts: n, zone: e, loc: ut.fromObject(t) })
            : w.invalid(Ln(e));
        }),
        (w.fromMillis = function (e, t) {
          if ((void 0 === t && (t = {}), W(e)))
            return e < -864e13 || 864e13 < e
              ? w.invalid('Timestamp out of range')
              : new w({
                  ts: e,
                  zone: Re(t.zone, $e.defaultZone),
                  loc: ut.fromObject(t),
                });
          throw new v(
            'fromMillis requires a numerical input, but received a ' +
              typeof e +
              ' with value ' +
              e
          );
        }),
        (w.fromSeconds = function (e, t) {
          if ((void 0 === t && (t = {}), W(e)))
            return new w({
              ts: 1e3 * e,
              zone: Re(t.zone, $e.defaultZone),
              loc: ut.fromObject(t),
            });
          throw new v('fromSeconds requires a numerical input');
        }),
        (w.fromObject = function (e, t) {
          e = e || {};
          var n = Re((t = void 0 === t ? {} : t).zone, $e.defaultZone);
          if (!n.isValid) return w.invalid(Ln(n));
          var r = $e.now(),
            i = n.offset(r),
            o = le(e, Qn),
            a = !P(o.ordinal),
            u = !P(o.year),
            s = !P(o.month) || !P(o.day),
            c = u || s,
            u = o.weekYear || o.weekNumber,
            t = ut.fromObject(t);
          if ((c || a) && u)
            throw new S(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
            );
          if (s && a) throw new S("Can't mix ordinal dates with month/day");
          var l,
            u = u || (o.weekday && !c),
            f = qn(r, i);
          u
            ? ((p = $n), (l = Jn), (f = En(f)))
            : a
            ? ((p = Bn), (l = Yn), (f = In(f)))
            : ((p = Gn), (l = Wn));
          for (var d = !1, h = k(p); !(m = h()).done; ) {
            var m = m.value;
            P(o[m]) ? (o[m] = (d ? l : f)[m]) : (d = !0);
          }
          var y,
            v,
            p,
            g,
            y =
              (u
                ? ((r = J((v = o).weekYear)),
                  (p = B(v.weekNumber, 1, oe(v.weekYear))),
                  (g = B(v.weekday, 1, 7)),
                  r
                    ? p
                      ? !g && On('weekday', v.weekday)
                      : On('week', v.week)
                    : On('weekYear', v.weekYear))
                : a
                ? ((g = J((y = o).year)),
                  (v = B(y.ordinal, 1, ne(y.year))),
                  g ? !v && On('ordinal', y.ordinal) : On('year', y.year))
                : Cn(o)) || Zn(o);
          if (y) return w.invalid(y);
          (i = _n(u ? Vn(o) : a ? xn(o) : o, i, n)),
            (t = new w({ ts: i[0], zone: n, o: i[1], loc: t }));
          return o.weekday && c && e.weekday !== t.weekday
            ? w.invalid(
                'mismatched weekday',
                "you can't specify both a weekday of " +
                  o.weekday +
                  ' and a date of ' +
                  t.toISO()
              )
            : t;
        }),
        (w.fromISO = function (e, t) {
          void 0 === t && (t = {});
          var n = lt(e, [xt, Lt], [Ct, At], [Zt, zt], [Ft, jt]);
          return Rn(n[0], n[1], t, 'ISO 8601', e);
        }),
        (w.fromRFC2822 = function (e, t) {
          void 0 === t && (t = {});
          var n = lt(
            e
              .replace(/\([^)]*\)|[\n\t]/g, ' ')
              .replace(/(\s\s+)/g, ' ')
              .trim(),
            [Ot, Mt]
          );
          return Rn(n[0], n[1], t, 'RFC 2822', e);
        }),
        (w.fromHTTP = function (e, t) {
          void 0 === t && (t = {});
          e = lt(e, [Nt, Vt], [Dt, Vt], [Et, It]);
          return Rn(e[0], e[1], t, 'HTTP', t);
        }),
        (w.fromFormat = function (e, t, n) {
          if ((void 0 === n && (n = {}), P(e) || P(t)))
            throw new v('fromFormat requires an input string and a format');
          var r = n,
            i = r.locale,
            o = r.numberingSystem,
            r = ut.fromOpts({
              locale: void 0 === i ? null : i,
              numberingSystem: void 0 === o ? null : o,
              defaultToEN: !0,
            }),
            o = [(i = Sn(r, e, (i = t))).result, i.zone, i.invalidReason],
            r = o[0],
            i = o[1],
            o = o[2];
          return o ? w.invalid(o) : Rn(r, i, n, 'format ' + t, e);
        }),
        (w.fromString = function (e, t, n) {
          return w.fromFormat(e, t, (n = void 0 === n ? {} : n));
        }),
        (w.fromSQL = function (e, t) {
          void 0 === t && (t = {});
          var n = lt(e, [_t, Rt], [Ut, Ht]);
          return Rn(n[0], n[1], t, 'SQL', e);
        }),
        (w.invalid = function (e, t) {
          if ((void 0 === t && (t = null), !e))
            throw new v('need to specify a reason the DateTime is invalid');
          var n = e instanceof Ie ? e : new Ie(e, t);
          if ($e.throwOnInvalid) throw new f(n);
          return new w({ invalid: n });
        }),
        (w.isDateTime = function (e) {
          return (e && e.isLuxonDateTime) || !1;
        });
      var e = w.prototype;
      return (
        (e.get = function (e) {
          return this[e];
        }),
        (e.resolvedLocaleOptions = function (e) {
          e = Ve.create(
            this.loc.clone((e = void 0 === e ? {} : e)),
            e
          ).resolvedOptions(this);
          return {
            locale: e.locale,
            numberingSystem: e.numberingSystem,
            outputCalendar: e.calendar,
          };
        }),
        (e.toUTC = function (e, t) {
          return (
            void 0 === t && (t = {}),
            this.setZone(_e.instance((e = void 0 === e ? 0 : e)), t)
          );
        }),
        (e.toLocal = function () {
          return this.setZone($e.defaultZone);
        }),
        (e.setZone = function (e, t) {
          var n = void 0 === t ? {} : t,
            r = n.keepLocalTime,
            t = void 0 !== r && r,
            r = n.keepCalendarTime,
            n = void 0 !== r && r;
          if ((e = Re(e, $e.defaultZone)).equals(this.zone)) return this;
          if (e.isValid) {
            r = this.ts;
            return (
              (t || n) &&
                ((n = e.offset(this.ts)), (r = _n(this.toObject(), n, e)[0])),
              zn(this, { ts: r, zone: e })
            );
          }
          return w.invalid(Ln(e));
        }),
        (e.reconfigure = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.locale,
            e = t.numberingSystem,
            t = t.outputCalendar,
            t = this.loc.clone({
              locale: n,
              numberingSystem: e,
              outputCalendar: t,
            });
          return zn(this, { loc: t });
        }),
        (e.setLocale = function (e) {
          return this.reconfigure({ locale: e });
        }),
        (e.set = function (e) {
          if (!this.isValid) return this;
          var t = le(e, Qn),
            n = !P(t.weekYear) || !P(t.weekNumber) || !P(t.weekday),
            r = !P(t.ordinal),
            i = !P(t.year),
            o = !P(t.month) || !P(t.day),
            e = t.weekYear || t.weekNumber;
          if ((i || o || r) && e)
            throw new S(
              "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
            );
          if (o && r) throw new S("Can't mix ordinal dates with month/day");
          n
            ? (a = Vn(u({}, En(this.c), t)))
            : P(t.ordinal)
            ? ((a = u({}, this.toObject(), t)),
              P(t.day) && (a.day = Math.min(re(a.year, a.month), a.day)))
            : (a = xn(u({}, In(this.c), t)));
          var a = _n(a, this.o, this.zone);
          return zn(this, { ts: a[0], o: a[1] });
        }),
        (e.plus = function (e) {
          return this.isValid ? zn(this, Un(this, Qt(e))) : this;
        }),
        (e.minus = function (e) {
          return this.isValid ? zn(this, Un(this, Qt(e).negate())) : this;
        }),
        (e.startOf = function (e) {
          if (!this.isValid) return this;
          var t = {},
            e = Bt.normalizeUnit(e);
          switch (e) {
            case 'years':
              t.month = 1;
            case 'quarters':
            case 'months':
              t.day = 1;
            case 'weeks':
            case 'days':
              t.hour = 0;
            case 'hours':
              t.minute = 0;
            case 'minutes':
              t.second = 0;
            case 'seconds':
              t.millisecond = 0;
          }
          return (
            'weeks' === e && (t.weekday = 1),
            'quarters' === e &&
              ((e = Math.ceil(this.month / 3)), (t.month = 3 * (e - 1) + 1)),
            this.set(t)
          );
        }),
        (e.endOf = function (e) {
          var t;
          return this.isValid
            ? this.plus((((t = {})[e] = 1), t))
                .startOf(e)
                .minus(1)
            : this;
        }),
        (e.toFormat = function (e, t) {
          return (
            void 0 === t && (t = {}),
            this.isValid
              ? Ve.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(
                  this,
                  e
                )
              : Fn
          );
        }),
        (e.toLocaleString = function (e, t) {
          return (
            void 0 === e && (e = T),
            void 0 === t && (t = {}),
            this.isValid
              ? Ve.create(this.loc.clone(t), e).formatDateTime(this)
              : Fn
          );
        }),
        (e.toLocaleParts = function (e) {
          return (
            void 0 === e && (e = {}),
            this.isValid
              ? Ve.create(this.loc.clone(e), e).formatDateTimeParts(this)
              : []
          );
        }),
        (e.toISO = function (e) {
          return (
            void 0 === e && (e = {}),
            this.isValid ? this.toISODate(e) + 'T' + this.toISOTime(e) : null
          );
        }),
        (e.toISODate = function (e) {
          (e = (void 0 === e ? {} : e).format),
            (e =
              'basic' === (void 0 === e ? 'extended' : e)
                ? 'yyyyMMdd'
                : 'yyyy-MM-dd');
          return Hn(this, (e = 9999 < this.year ? '+' + e : e));
        }),
        (e.toISOWeekDate = function () {
          return Hn(this, "kkkk-'W'WW-c");
        }),
        (e.toISOTime = function (e) {
          var t = void 0 === e ? {} : e,
            n = t.suppressMilliseconds,
            r = t.suppressSeconds,
            i = t.includeOffset,
            e = t.includePrefix,
            t = t.format;
          return Pn(this, {
            suppressSeconds: void 0 !== r && r,
            suppressMilliseconds: void 0 !== n && n,
            includeOffset: void 0 === i || i,
            includePrefix: void 0 !== e && e,
            format: void 0 === t ? 'extended' : t,
          });
        }),
        (e.toRFC2822 = function () {
          return Hn(this, 'EEE, dd LLL yyyy HH:mm:ss ZZZ', !1);
        }),
        (e.toHTTP = function () {
          return Hn(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
        }),
        (e.toSQLDate = function () {
          return Hn(this, 'yyyy-MM-dd');
        }),
        (e.toSQLTime = function (e) {
          var t = void 0 === e ? {} : e,
            e = t.includeOffset,
            t = t.includeZone;
          return Pn(this, {
            includeOffset: void 0 === e || e,
            includeZone: void 0 !== t && t,
            spaceZone: !0,
          });
        }),
        (e.toSQL = function (e) {
          return (
            void 0 === e && (e = {}),
            this.isValid ? this.toSQLDate() + ' ' + this.toSQLTime(e) : null
          );
        }),
        (e.toString = function () {
          return this.isValid ? this.toISO() : Fn;
        }),
        (e.valueOf = function () {
          return this.toMillis();
        }),
        (e.toMillis = function () {
          return this.isValid ? this.ts : NaN;
        }),
        (e.toSeconds = function () {
          return this.isValid ? this.ts / 1e3 : NaN;
        }),
        (e.toJSON = function () {
          return this.toISO();
        }),
        (e.toBSON = function () {
          return this.toJSDate();
        }),
        (e.toObject = function (e) {
          if ((void 0 === e && (e = {}), !this.isValid)) return {};
          var t = u({}, this.c);
          return (
            e.includeConfig &&
              ((t.outputCalendar = this.outputCalendar),
              (t.numberingSystem = this.loc.numberingSystem),
              (t.locale = this.loc.locale)),
            t
          );
        }),
        (e.toJSDate = function () {
          return new Date(this.isValid ? this.ts : NaN);
        }),
        (e.diff = function (e, t, n) {
          if (
            (void 0 === t && (t = 'milliseconds'),
            void 0 === n && (n = {}),
            !this.isValid || !e.isValid)
          )
            return Bt.invalid('created by diffing an invalid DateTime');
          var r = u(
              { locale: this.locale, numberingSystem: this.numberingSystem },
              n
            ),
            t = ((n = t), (Array.isArray(n) ? n : [n]).map(Bt.normalizeUnit)),
            n = e.valueOf() > this.valueOf(),
            r = nn(n ? this : e, n ? e : this, t, r);
          return n ? r.negate() : r;
        }),
        (e.diffNow = function (e, t) {
          return (
            void 0 === e && (e = 'milliseconds'),
            void 0 === t && (t = {}),
            this.diff(w.now(), e, t)
          );
        }),
        (e.until = function (e) {
          return this.isValid ? Xt.fromDateTimes(this, e) : this;
        }),
        (e.hasSame = function (e, t) {
          if (!this.isValid) return !1;
          var n = e.valueOf(),
            e = this.setZone(e.zone, { keepLocalTime: !0 });
          return e.startOf(t) <= n && n <= e.endOf(t);
        }),
        (e.equals = function (e) {
          return (
            this.isValid &&
            e.isValid &&
            this.valueOf() === e.valueOf() &&
            this.zone.equals(e.zone) &&
            this.loc.equals(e.loc)
          );
        }),
        (e.toRelative = function (e) {
          if (!this.isValid) return null;
          var t =
              (e = void 0 === e ? {} : e).base ||
              w.fromObject({}, { zone: this.zone }),
            n = e.padding ? (this < t ? -e.padding : e.padding) : 0,
            r = ['years', 'months', 'days', 'hours', 'minutes', 'seconds'],
            i = e.unit;
          return (
            Array.isArray(e.unit) && ((r = e.unit), (i = void 0)),
            Xn(
              t,
              this.plus(n),
              u({}, e, { numeric: 'always', units: r, unit: i })
            )
          );
        }),
        (e.toRelativeCalendar = function (e) {
          return (
            void 0 === e && (e = {}),
            this.isValid
              ? Xn(
                  e.base || w.fromObject({}, { zone: this.zone }),
                  this,
                  u({}, e, {
                    numeric: 'auto',
                    units: ['years', 'months', 'days'],
                    calendary: !0,
                  })
                )
              : null
          );
        }),
        (w.min = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (!t.every(w.isDateTime))
            throw new v('min requires all arguments be DateTimes');
          return G(
            t,
            function (e) {
              return e.valueOf();
            },
            Math.min
          );
        }),
        (w.max = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (!t.every(w.isDateTime))
            throw new v('max requires all arguments be DateTimes');
          return G(
            t,
            function (e) {
              return e.valueOf();
            },
            Math.max
          );
        }),
        (w.fromFormatExplain = function (e, t, n) {
          var r = (n = void 0 === n ? {} : n),
            n = r.locale,
            r = r.numberingSystem;
          return Sn(
            ut.fromOpts({
              locale: void 0 === n ? null : n,
              numberingSystem: void 0 === r ? null : r,
              defaultToEN: !0,
            }),
            e,
            t
          );
        }),
        (w.fromStringExplain = function (e, t, n) {
          return w.fromFormatExplain(e, t, (n = void 0 === n ? {} : n));
        }),
        o(
          w,
          [
            {
              key: 'isValid',
              get: function () {
                return null === this.invalid;
              },
            },
            {
              key: 'invalidReason',
              get: function () {
                return this.invalid ? this.invalid.reason : null;
              },
            },
            {
              key: 'invalidExplanation',
              get: function () {
                return this.invalid ? this.invalid.explanation : null;
              },
            },
            {
              key: 'locale',
              get: function () {
                return this.isValid ? this.loc.locale : null;
              },
            },
            {
              key: 'numberingSystem',
              get: function () {
                return this.isValid ? this.loc.numberingSystem : null;
              },
            },
            {
              key: 'outputCalendar',
              get: function () {
                return this.isValid ? this.loc.outputCalendar : null;
              },
            },
            {
              key: 'zone',
              get: function () {
                return this._zone;
              },
            },
            {
              key: 'zoneName',
              get: function () {
                return this.isValid ? this.zone.name : null;
              },
            },
            {
              key: 'year',
              get: function () {
                return this.isValid ? this.c.year : NaN;
              },
            },
            {
              key: 'quarter',
              get: function () {
                return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
              },
            },
            {
              key: 'month',
              get: function () {
                return this.isValid ? this.c.month : NaN;
              },
            },
            {
              key: 'day',
              get: function () {
                return this.isValid ? this.c.day : NaN;
              },
            },
            {
              key: 'hour',
              get: function () {
                return this.isValid ? this.c.hour : NaN;
              },
            },
            {
              key: 'minute',
              get: function () {
                return this.isValid ? this.c.minute : NaN;
              },
            },
            {
              key: 'second',
              get: function () {
                return this.isValid ? this.c.second : NaN;
              },
            },
            {
              key: 'millisecond',
              get: function () {
                return this.isValid ? this.c.millisecond : NaN;
              },
            },
            {
              key: 'weekYear',
              get: function () {
                return this.isValid ? An(this).weekYear : NaN;
              },
            },
            {
              key: 'weekNumber',
              get: function () {
                return this.isValid ? An(this).weekNumber : NaN;
              },
            },
            {
              key: 'weekday',
              get: function () {
                return this.isValid ? An(this).weekday : NaN;
              },
            },
            {
              key: 'ordinal',
              get: function () {
                return this.isValid ? In(this.c).ordinal : NaN;
              },
            },
            {
              key: 'monthShort',
              get: function () {
                return this.isValid
                  ? en.months('short', { locObj: this.loc })[this.month - 1]
                  : null;
              },
            },
            {
              key: 'monthLong',
              get: function () {
                return this.isValid
                  ? en.months('long', { locObj: this.loc })[this.month - 1]
                  : null;
              },
            },
            {
              key: 'weekdayShort',
              get: function () {
                return this.isValid
                  ? en.weekdays('short', { locObj: this.loc })[this.weekday - 1]
                  : null;
              },
            },
            {
              key: 'weekdayLong',
              get: function () {
                return this.isValid
                  ? en.weekdays('long', { locObj: this.loc })[this.weekday - 1]
                  : null;
              },
            },
            {
              key: 'offset',
              get: function () {
                return this.isValid ? +this.o : NaN;
              },
            },
            {
              key: 'offsetNameShort',
              get: function () {
                return this.isValid
                  ? this.zone.offsetName(this.ts, {
                      format: 'short',
                      locale: this.locale,
                    })
                  : null;
              },
            },
            {
              key: 'offsetNameLong',
              get: function () {
                return this.isValid
                  ? this.zone.offsetName(this.ts, {
                      format: 'long',
                      locale: this.locale,
                    })
                  : null;
              },
            },
            {
              key: 'isOffsetFixed',
              get: function () {
                return this.isValid ? this.zone.isUniversal : null;
              },
            },
            {
              key: 'isInDST',
              get: function () {
                return (
                  !this.isOffsetFixed &&
                  (this.offset > this.set({ month: 1 }).offset ||
                    this.offset > this.set({ month: 5 }).offset)
                );
              },
            },
            {
              key: 'isInLeapYear',
              get: function () {
                return te(this.year);
              },
            },
            {
              key: 'daysInMonth',
              get: function () {
                return re(this.year, this.month);
              },
            },
            {
              key: 'daysInYear',
              get: function () {
                return this.isValid ? ne(this.year) : NaN;
              },
            },
            {
              key: 'weeksInWeekYear',
              get: function () {
                return this.isValid ? oe(this.weekYear) : NaN;
              },
            },
          ],
          [
            {
              key: 'DATE_SHORT',
              get: function () {
                return T;
              },
            },
            {
              key: 'DATE_MED',
              get: function () {
                return b;
              },
            },
            {
              key: 'DATE_MED_WITH_WEEKDAY',
              get: function () {
                return O;
              },
            },
            {
              key: 'DATE_FULL',
              get: function () {
                return M;
              },
            },
            {
              key: 'DATE_HUGE',
              get: function () {
                return N;
              },
            },
            {
              key: 'TIME_SIMPLE',
              get: function () {
                return D;
              },
            },
            {
              key: 'TIME_WITH_SECONDS',
              get: function () {
                return E;
              },
            },
            {
              key: 'TIME_WITH_SHORT_OFFSET',
              get: function () {
                return V;
              },
            },
            {
              key: 'TIME_WITH_LONG_OFFSET',
              get: function () {
                return I;
              },
            },
            {
              key: 'TIME_24_SIMPLE',
              get: function () {
                return x;
              },
            },
            {
              key: 'TIME_24_WITH_SECONDS',
              get: function () {
                return C;
              },
            },
            {
              key: 'TIME_24_WITH_SHORT_OFFSET',
              get: function () {
                return Z;
              },
            },
            {
              key: 'TIME_24_WITH_LONG_OFFSET',
              get: function () {
                return F;
              },
            },
            {
              key: 'DATETIME_SHORT',
              get: function () {
                return L;
              },
            },
            {
              key: 'DATETIME_SHORT_WITH_SECONDS',
              get: function () {
                return A;
              },
            },
            {
              key: 'DATETIME_MED',
              get: function () {
                return z;
              },
            },
            {
              key: 'DATETIME_MED_WITH_SECONDS',
              get: function () {
                return j;
              },
            },
            {
              key: 'DATETIME_MED_WITH_WEEKDAY',
              get: function () {
                return q;
              },
            },
            {
              key: 'DATETIME_FULL',
              get: function () {
                return _;
              },
            },
            {
              key: 'DATETIME_FULL_WITH_SECONDS',
              get: function () {
                return U;
              },
            },
            {
              key: 'DATETIME_HUGE',
              get: function () {
                return R;
              },
            },
            {
              key: 'DATETIME_HUGE_WITH_SECONDS',
              get: function () {
                return H;
              },
            },
          ]
        ),
        w
      );
    })();
    function nr(e) {
      if (tr.isDateTime(e)) return e;
      if (e && e.valueOf && W(e.valueOf())) return tr.fromJSDate(e);
      if (e && 'object' == typeof e) return tr.fromObject(e);
      throw new v('Unknown datetime argument: ' + e + ', of type ' + typeof e);
    }
    return (
      (e.DateTime = tr),
      (e.Duration = Bt),
      (e.FixedOffsetZone = _e),
      (e.IANAZone = je),
      (e.Info = en),
      (e.Interval = Xt),
      (e.InvalidZone = Ue),
      (e.Settings = $e),
      (e.SystemZone = Ze),
      (e.VERSION = '2.0.0'),
      (e.Zone = xe),
      Object.defineProperty(e, '__esModule', { value: !0 }),
      e
    );
  })({});
  
  const dateField = document.querySelector('.date');
  const getTime = () => {
    const { DateTime } = luxon;
    const time = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    dateField.innerHTML = time;
  };
  
  getTime();
  