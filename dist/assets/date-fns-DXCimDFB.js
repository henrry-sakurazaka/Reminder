var Ee = Object.defineProperty;
var He = (r, t, e) =>
  t in r
    ? Ee(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (r[t] = e);
var i = (r, t, e) => He(r, typeof t != 'symbol' ? t + '' : t, e);
function qe(r) {
  return (
    r instanceof Date ||
    (typeof r == 'object' &&
      Object.prototype.toString.call(r) === '[object Date]')
  );
}
function u(r) {
  const t = Object.prototype.toString.call(r);
  return r instanceof Date || (typeof r == 'object' && t === '[object Date]')
    ? new r.constructor(+r)
    : typeof r == 'number' ||
        t === '[object Number]' ||
        typeof r == 'string' ||
        t === '[object String]'
      ? new Date(r)
      : new Date(NaN);
}
function Fe(r) {
  if (!qe(r) && typeof r != 'number') return !1;
  const t = u(r);
  return !isNaN(Number(t));
}
const Ce = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds',
    },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes',
    },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  Ie = (r, t, e) => {
    let n;
    const a = Ce[r];
    return (
      typeof a == 'string'
        ? (n = a)
        : t === 1
          ? (n = a.one)
          : (n = a.other.replace('{{count}}', t.toString())),
      e != null && e.addSuffix
        ? e.comparison && e.comparison > 0
          ? 'in ' + n
          : n + ' ago'
        : n
    );
  };
function K(r) {
  return (t = {}) => {
    const e = t.width ? String(t.width) : r.defaultWidth;
    return r.formats[e] || r.formats[r.defaultWidth];
  };
}
const Le = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  Qe = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  Re = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  Xe = {
    date: K({ formats: Le, defaultWidth: 'full' }),
    time: K({ formats: Qe, defaultWidth: 'full' }),
    dateTime: K({ formats: Re, defaultWidth: 'full' }),
  },
  Be = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  Ge = (r, t, e, n) => Be[r];
function X(r) {
  return (t, e) => {
    const n = e != null && e.context ? String(e.context) : 'standalone';
    let a;
    if (n === 'formatting' && r.formattingValues) {
      const o = r.defaultFormattingWidth || r.defaultWidth,
        c = e != null && e.width ? String(e.width) : o;
      a = r.formattingValues[c] || r.formattingValues[o];
    } else {
      const o = r.defaultWidth,
        c = e != null && e.width ? String(e.width) : r.defaultWidth;
      a = r.values[c] || r.values[o];
    }
    const s = r.argumentCallback ? r.argumentCallback(t) : t;
    return a[s];
  };
}
const Ae = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  $e = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  je = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
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
    wide: [
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
  },
  Ve = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  Ue = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  ze = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  Ze = (r, t) => {
    const e = Number(r),
      n = e % 100;
    if (n > 20 || n < 10)
      switch (n % 10) {
        case 1:
          return e + 'st';
        case 2:
          return e + 'nd';
        case 3:
          return e + 'rd';
      }
    return e + 'th';
  },
  Je = {
    ordinalNumber: Ze,
    era: X({ values: Ae, defaultWidth: 'wide' }),
    quarter: X({
      values: $e,
      defaultWidth: 'wide',
      argumentCallback: (r) => r - 1,
    }),
    month: X({ values: je, defaultWidth: 'wide' }),
    day: X({ values: Ve, defaultWidth: 'wide' }),
    dayPeriod: X({
      values: Ue,
      defaultWidth: 'wide',
      formattingValues: ze,
      defaultFormattingWidth: 'wide',
    }),
  };
function B(r) {
  return (t, e = {}) => {
    const n = e.width,
      a = (n && r.matchPatterns[n]) || r.matchPatterns[r.defaultMatchWidth],
      s = t.match(a);
    if (!s) return null;
    const o = s[0],
      c = (n && r.parsePatterns[n]) || r.parsePatterns[r.defaultParseWidth],
      d = Array.isArray(c) ? Se(c, (T) => T.test(o)) : Ke(c, (T) => T.test(o));
    let h;
    ((h = r.valueCallback ? r.valueCallback(d) : d),
      (h = e.valueCallback ? e.valueCallback(h) : h));
    const M = t.slice(o.length);
    return { value: h, rest: M };
  };
}
function Ke(r, t) {
  for (const e in r)
    if (Object.prototype.hasOwnProperty.call(r, e) && t(r[e])) return e;
}
function Se(r, t) {
  for (let e = 0; e < r.length; e++) if (t(r[e])) return e;
}
function et(r) {
  return (t, e = {}) => {
    const n = t.match(r.matchPattern);
    if (!n) return null;
    const a = n[0],
      s = t.match(r.parsePattern);
    if (!s) return null;
    let o = r.valueCallback ? r.valueCallback(s[0]) : s[0];
    o = e.valueCallback ? e.valueCallback(o) : o;
    const c = t.slice(a.length);
    return { value: o, rest: c };
  };
}
const tt = /^(\d+)(th|st|nd|rd)?/i,
  nt = /\d+/i,
  rt = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  at = { any: [/^b/i, /^(a|c)/i] },
  st = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  ot = { any: [/1/i, /2/i, /3/i, /4/i] },
  it = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  ut = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  ct = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  dt = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  lt = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  ft = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  ht = {
    ordinalNumber: et({
      matchPattern: tt,
      parsePattern: nt,
      valueCallback: (r) => parseInt(r, 10),
    }),
    era: B({
      matchPatterns: rt,
      defaultMatchWidth: 'wide',
      parsePatterns: at,
      defaultParseWidth: 'any',
    }),
    quarter: B({
      matchPatterns: st,
      defaultMatchWidth: 'wide',
      parsePatterns: ot,
      defaultParseWidth: 'any',
      valueCallback: (r) => r + 1,
    }),
    month: B({
      matchPatterns: it,
      defaultMatchWidth: 'wide',
      parsePatterns: ut,
      defaultParseWidth: 'any',
    }),
    day: B({
      matchPatterns: ct,
      defaultMatchWidth: 'wide',
      parsePatterns: dt,
      defaultParseWidth: 'any',
    }),
    dayPeriod: B({
      matchPatterns: lt,
      defaultMatchWidth: 'any',
      parsePatterns: ft,
      defaultParseWidth: 'any',
    }),
  },
  be = {
    code: 'en-US',
    formatDistance: Ie,
    formatLong: Xe,
    formatRelative: Ge,
    localize: Je,
    match: ht,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };
let mt = {};
function q() {
  return mt;
}
const xe = 6048e5,
  wt = 864e5,
  U = 6e4,
  z = 36e5,
  gt = 1e3;
function $(r) {
  const t = u(r);
  return (t.setHours(0, 0, 0, 0), t);
}
function j(r) {
  const t = u(r),
    e = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
  return (e.setUTCFullYear(t.getFullYear()), +r - +e);
}
function yt(r, t) {
  const e = $(r),
    n = $(t),
    a = +e - j(e),
    s = +n - j(n);
  return Math.round((a - s) / wt);
}
function w(r, t) {
  return r instanceof Date ? new r.constructor(t) : new Date(t);
}
function bt(r) {
  const t = u(r),
    e = w(r, 0);
  return (e.setFullYear(t.getFullYear(), 0, 1), e.setHours(0, 0, 0, 0), e);
}
function xt(r) {
  const t = u(r);
  return yt(t, bt(t)) + 1;
}
function E(r, t) {
  var c, d, h, M;
  const e = q(),
    n =
      (t == null ? void 0 : t.weekStartsOn) ??
      ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.weekStartsOn) ??
      e.weekStartsOn ??
      ((M = (h = e.locale) == null ? void 0 : h.options) == null
        ? void 0
        : M.weekStartsOn) ??
      0,
    a = u(r),
    s = a.getDay(),
    o = (s < n ? 7 : 0) + s - n;
  return (a.setDate(a.getDate() - o), a.setHours(0, 0, 0, 0), a);
}
function I(r) {
  return E(r, { weekStartsOn: 1 });
}
function De(r) {
  const t = u(r),
    e = t.getFullYear(),
    n = w(r, 0);
  (n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0));
  const a = I(n),
    s = w(r, 0);
  (s.setFullYear(e, 0, 4), s.setHours(0, 0, 0, 0));
  const o = I(s);
  return t.getTime() >= a.getTime()
    ? e + 1
    : t.getTime() >= o.getTime()
      ? e
      : e - 1;
}
function Dt(r) {
  const t = De(r),
    e = w(r, 0);
  return (e.setFullYear(t, 0, 4), e.setHours(0, 0, 0, 0), I(e));
}
function Me(r) {
  const t = u(r),
    e = +I(t) - +Dt(t);
  return Math.round(e / xe) + 1;
}
function ne(r, t) {
  var M, T, O, P;
  const e = u(r),
    n = e.getFullYear(),
    a = q(),
    s =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((T = (M = t == null ? void 0 : t.locale) == null ? void 0 : M.options) ==
      null
        ? void 0
        : T.firstWeekContainsDate) ??
      a.firstWeekContainsDate ??
      ((P = (O = a.locale) == null ? void 0 : O.options) == null
        ? void 0
        : P.firstWeekContainsDate) ??
      1,
    o = w(r, 0);
  (o.setFullYear(n + 1, 0, s), o.setHours(0, 0, 0, 0));
  const c = E(o, t),
    d = w(r, 0);
  (d.setFullYear(n, 0, s), d.setHours(0, 0, 0, 0));
  const h = E(d, t);
  return e.getTime() >= c.getTime()
    ? n + 1
    : e.getTime() >= h.getTime()
      ? n
      : n - 1;
}
function Mt(r, t) {
  var c, d, h, M;
  const e = q(),
    n =
      (t == null ? void 0 : t.firstWeekContainsDate) ??
      ((d = (c = t == null ? void 0 : t.locale) == null ? void 0 : c.options) ==
      null
        ? void 0
        : d.firstWeekContainsDate) ??
      e.firstWeekContainsDate ??
      ((M = (h = e.locale) == null ? void 0 : h.options) == null
        ? void 0
        : M.firstWeekContainsDate) ??
      1,
    a = ne(r, t),
    s = w(r, 0);
  return (s.setFullYear(a, 0, n), s.setHours(0, 0, 0, 0), E(s, t));
}
function pe(r, t) {
  const e = u(r),
    n = +E(e, t) - +Mt(e, t);
  return Math.round(n / xe) + 1;
}
function m(r, t) {
  const e = r < 0 ? '-' : '',
    n = Math.abs(r).toString().padStart(t, '0');
  return e + n;
}
const v = {
    y(r, t) {
      const e = r.getFullYear(),
        n = e > 0 ? e : 1 - e;
      return m(t === 'yy' ? n % 100 : n, t.length);
    },
    M(r, t) {
      const e = r.getMonth();
      return t === 'M' ? String(e + 1) : m(e + 1, 2);
    },
    d(r, t) {
      return m(r.getDate(), t.length);
    },
    a(r, t) {
      const e = r.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return e.toUpperCase();
        case 'aaa':
          return e;
        case 'aaaaa':
          return e[0];
        case 'aaaa':
        default:
          return e === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h(r, t) {
      return m(r.getHours() % 12 || 12, t.length);
    },
    H(r, t) {
      return m(r.getHours(), t.length);
    },
    m(r, t) {
      return m(r.getMinutes(), t.length);
    },
    s(r, t) {
      return m(r.getSeconds(), t.length);
    },
    S(r, t) {
      const e = t.length,
        n = r.getMilliseconds(),
        a = Math.trunc(n * Math.pow(10, e - 3));
      return m(a, t.length);
    },
  },
  C = {
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  fe = {
    G: function (r, t, e) {
      const n = r.getFullYear() > 0 ? 1 : 0;
      switch (t) {
        case 'G':
        case 'GG':
        case 'GGG':
          return e.era(n, { width: 'abbreviated' });
        case 'GGGGG':
          return e.era(n, { width: 'narrow' });
        case 'GGGG':
        default:
          return e.era(n, { width: 'wide' });
      }
    },
    y: function (r, t, e) {
      if (t === 'yo') {
        const n = r.getFullYear(),
          a = n > 0 ? n : 1 - n;
        return e.ordinalNumber(a, { unit: 'year' });
      }
      return v.y(r, t);
    },
    Y: function (r, t, e, n) {
      const a = ne(r, n),
        s = a > 0 ? a : 1 - a;
      if (t === 'YY') {
        const o = s % 100;
        return m(o, 2);
      }
      return t === 'Yo' ? e.ordinalNumber(s, { unit: 'year' }) : m(s, t.length);
    },
    R: function (r, t) {
      const e = De(r);
      return m(e, t.length);
    },
    u: function (r, t) {
      const e = r.getFullYear();
      return m(e, t.length);
    },
    Q: function (r, t, e) {
      const n = Math.ceil((r.getMonth() + 1) / 3);
      switch (t) {
        case 'Q':
          return String(n);
        case 'QQ':
          return m(n, 2);
        case 'Qo':
          return e.ordinalNumber(n, { unit: 'quarter' });
        case 'QQQ':
          return e.quarter(n, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return e.quarter(n, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return e.quarter(n, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (r, t, e) {
      const n = Math.ceil((r.getMonth() + 1) / 3);
      switch (t) {
        case 'q':
          return String(n);
        case 'qq':
          return m(n, 2);
        case 'qo':
          return e.ordinalNumber(n, { unit: 'quarter' });
        case 'qqq':
          return e.quarter(n, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return e.quarter(n, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return e.quarter(n, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (r, t, e) {
      const n = r.getMonth();
      switch (t) {
        case 'M':
        case 'MM':
          return v.M(r, t);
        case 'Mo':
          return e.ordinalNumber(n + 1, { unit: 'month' });
        case 'MMM':
          return e.month(n, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return e.month(n, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return e.month(n, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (r, t, e) {
      const n = r.getMonth();
      switch (t) {
        case 'L':
          return String(n + 1);
        case 'LL':
          return m(n + 1, 2);
        case 'Lo':
          return e.ordinalNumber(n + 1, { unit: 'month' });
        case 'LLL':
          return e.month(n, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return e.month(n, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return e.month(n, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (r, t, e, n) {
      const a = pe(r, n);
      return t === 'wo' ? e.ordinalNumber(a, { unit: 'week' }) : m(a, t.length);
    },
    I: function (r, t, e) {
      const n = Me(r);
      return t === 'Io' ? e.ordinalNumber(n, { unit: 'week' }) : m(n, t.length);
    },
    d: function (r, t, e) {
      return t === 'do'
        ? e.ordinalNumber(r.getDate(), { unit: 'date' })
        : v.d(r, t);
    },
    D: function (r, t, e) {
      const n = xt(r);
      return t === 'Do'
        ? e.ordinalNumber(n, { unit: 'dayOfYear' })
        : m(n, t.length);
    },
    E: function (r, t, e) {
      const n = r.getDay();
      switch (t) {
        case 'E':
        case 'EE':
        case 'EEE':
          return e.day(n, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return e.day(n, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return e.day(n, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return e.day(n, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (r, t, e, n) {
      const a = r.getDay(),
        s = (a - n.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'e':
          return String(s);
        case 'ee':
          return m(s, 2);
        case 'eo':
          return e.ordinalNumber(s, { unit: 'day' });
        case 'eee':
          return e.day(a, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return e.day(a, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return e.day(a, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return e.day(a, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (r, t, e, n) {
      const a = r.getDay(),
        s = (a - n.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case 'c':
          return String(s);
        case 'cc':
          return m(s, t.length);
        case 'co':
          return e.ordinalNumber(s, { unit: 'day' });
        case 'ccc':
          return e.day(a, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return e.day(a, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return e.day(a, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return e.day(a, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (r, t, e) {
      const n = r.getDay(),
        a = n === 0 ? 7 : n;
      switch (t) {
        case 'i':
          return String(a);
        case 'ii':
          return m(a, t.length);
        case 'io':
          return e.ordinalNumber(a, { unit: 'day' });
        case 'iii':
          return e.day(n, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return e.day(n, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return e.day(n, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return e.day(n, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (r, t, e) {
      const a = r.getHours() / 12 >= 1 ? 'pm' : 'am';
      switch (t) {
        case 'a':
        case 'aa':
          return e.dayPeriod(a, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'aaa':
          return e
            .dayPeriod(a, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'aaaaa':
          return e.dayPeriod(a, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return e.dayPeriod(a, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (r, t, e) {
      const n = r.getHours();
      let a;
      switch (
        (n === 12
          ? (a = C.noon)
          : n === 0
            ? (a = C.midnight)
            : (a = n / 12 >= 1 ? 'pm' : 'am'),
        t)
      ) {
        case 'b':
        case 'bb':
          return e.dayPeriod(a, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'bbb':
          return e
            .dayPeriod(a, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'bbbbb':
          return e.dayPeriod(a, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return e.dayPeriod(a, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (r, t, e) {
      const n = r.getHours();
      let a;
      switch (
        (n >= 17
          ? (a = C.evening)
          : n >= 12
            ? (a = C.afternoon)
            : n >= 4
              ? (a = C.morning)
              : (a = C.night),
        t)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return e.dayPeriod(a, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'BBBBB':
          return e.dayPeriod(a, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return e.dayPeriod(a, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (r, t, e) {
      if (t === 'ho') {
        let n = r.getHours() % 12;
        return (n === 0 && (n = 12), e.ordinalNumber(n, { unit: 'hour' }));
      }
      return v.h(r, t);
    },
    H: function (r, t, e) {
      return t === 'Ho'
        ? e.ordinalNumber(r.getHours(), { unit: 'hour' })
        : v.H(r, t);
    },
    K: function (r, t, e) {
      const n = r.getHours() % 12;
      return t === 'Ko' ? e.ordinalNumber(n, { unit: 'hour' }) : m(n, t.length);
    },
    k: function (r, t, e) {
      let n = r.getHours();
      return (
        n === 0 && (n = 24),
        t === 'ko' ? e.ordinalNumber(n, { unit: 'hour' }) : m(n, t.length)
      );
    },
    m: function (r, t, e) {
      return t === 'mo'
        ? e.ordinalNumber(r.getMinutes(), { unit: 'minute' })
        : v.m(r, t);
    },
    s: function (r, t, e) {
      return t === 'so'
        ? e.ordinalNumber(r.getSeconds(), { unit: 'second' })
        : v.s(r, t);
    },
    S: function (r, t) {
      return v.S(r, t);
    },
    X: function (r, t, e) {
      const n = r.getTimezoneOffset();
      if (n === 0) return 'Z';
      switch (t) {
        case 'X':
          return me(n);
        case 'XXXX':
        case 'XX':
          return H(n);
        case 'XXXXX':
        case 'XXX':
        default:
          return H(n, ':');
      }
    },
    x: function (r, t, e) {
      const n = r.getTimezoneOffset();
      switch (t) {
        case 'x':
          return me(n);
        case 'xxxx':
        case 'xx':
          return H(n);
        case 'xxxxx':
        case 'xxx':
        default:
          return H(n, ':');
      }
    },
    O: function (r, t, e) {
      const n = r.getTimezoneOffset();
      switch (t) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + he(n, ':');
        case 'OOOO':
        default:
          return 'GMT' + H(n, ':');
      }
    },
    z: function (r, t, e) {
      const n = r.getTimezoneOffset();
      switch (t) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + he(n, ':');
        case 'zzzz':
        default:
          return 'GMT' + H(n, ':');
      }
    },
    t: function (r, t, e) {
      const n = Math.trunc(r.getTime() / 1e3);
      return m(n, t.length);
    },
    T: function (r, t, e) {
      const n = r.getTime();
      return m(n, t.length);
    },
  };
function he(r, t = '') {
  const e = r > 0 ? '-' : '+',
    n = Math.abs(r),
    a = Math.trunc(n / 60),
    s = n % 60;
  return s === 0 ? e + String(a) : e + String(a) + t + m(s, 2);
}
function me(r, t) {
  return r % 60 === 0 ? (r > 0 ? '-' : '+') + m(Math.abs(r) / 60, 2) : H(r, t);
}
function H(r, t = '') {
  const e = r > 0 ? '-' : '+',
    n = Math.abs(r),
    a = m(Math.trunc(n / 60), 2),
    s = m(n % 60, 2);
  return e + a + t + s;
}
const we = (r, t) => {
    switch (r) {
      case 'P':
        return t.date({ width: 'short' });
      case 'PP':
        return t.date({ width: 'medium' });
      case 'PPP':
        return t.date({ width: 'long' });
      case 'PPPP':
      default:
        return t.date({ width: 'full' });
    }
  },
  Te = (r, t) => {
    switch (r) {
      case 'p':
        return t.time({ width: 'short' });
      case 'pp':
        return t.time({ width: 'medium' });
      case 'ppp':
        return t.time({ width: 'long' });
      case 'pppp':
      default:
        return t.time({ width: 'full' });
    }
  },
  pt = (r, t) => {
    const e = r.match(/(P+)(p+)?/) || [],
      n = e[1],
      a = e[2];
    if (!a) return we(r, t);
    let s;
    switch (n) {
      case 'P':
        s = t.dateTime({ width: 'short' });
        break;
      case 'PP':
        s = t.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        s = t.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        s = t.dateTime({ width: 'full' });
        break;
    }
    return s.replace('{{date}}', we(n, t)).replace('{{time}}', Te(a, t));
  },
  ee = { p: Te, P: pt },
  Tt = /^D+$/,
  kt = /^Y+$/,
  Pt = ['D', 'DD', 'YY', 'YYYY'];
function ke(r) {
  return Tt.test(r);
}
function Pe(r) {
  return kt.test(r);
}
function te(r, t, e) {
  const n = Ot(r, t, e);
  if ((console.warn(n), Pt.includes(r))) throw new RangeError(n);
}
function Ot(r, t, e) {
  const n = r[0] === 'Y' ? 'years' : 'days of the month';
  return `Use \`${r.toLowerCase()}\` instead of \`${r}\` (in \`${t}\`) for formatting ${n} to the input \`${e}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Yt = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  _t = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Nt = /^'([^]*?)'?$/,
  Wt = /''/g,
  vt = /[a-zA-Z]/;
function Zn(r, t, e) {
  var M, T, O, P, W, L, Q, R;
  const n = q(),
    a = (e == null ? void 0 : e.locale) ?? n.locale ?? be,
    s =
      (e == null ? void 0 : e.firstWeekContainsDate) ??
      ((T = (M = e == null ? void 0 : e.locale) == null ? void 0 : M.options) ==
      null
        ? void 0
        : T.firstWeekContainsDate) ??
      n.firstWeekContainsDate ??
      ((P = (O = n.locale) == null ? void 0 : O.options) == null
        ? void 0
        : P.firstWeekContainsDate) ??
      1,
    o =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((L = (W = e == null ? void 0 : e.locale) == null ? void 0 : W.options) ==
      null
        ? void 0
        : L.weekStartsOn) ??
      n.weekStartsOn ??
      ((R = (Q = n.locale) == null ? void 0 : Q.options) == null
        ? void 0
        : R.weekStartsOn) ??
      0,
    c = u(r);
  if (!Fe(c)) throw new RangeError('Invalid time value');
  let d = t
    .match(_t)
    .map((k) => {
      const p = k[0];
      if (p === 'p' || p === 'P') {
        const F = ee[p];
        return F(k, a.formatLong);
      }
      return k;
    })
    .join('')
    .match(Yt)
    .map((k) => {
      if (k === "''") return { isToken: !1, value: "'" };
      const p = k[0];
      if (p === "'") return { isToken: !1, value: Et(k) };
      if (fe[p]) return { isToken: !0, value: k };
      if (p.match(vt))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            p +
            '`'
        );
      return { isToken: !1, value: k };
    });
  a.localize.preprocessor && (d = a.localize.preprocessor(c, d));
  const h = { firstWeekContainsDate: s, weekStartsOn: o, locale: a };
  return d
    .map((k) => {
      if (!k.isToken) return k.value;
      const p = k.value;
      ((!(e != null && e.useAdditionalWeekYearTokens) && Pe(p)) ||
        (!(e != null && e.useAdditionalDayOfYearTokens) && ke(p))) &&
        te(p, t, String(r));
      const F = fe[p[0]];
      return F(c, p, a.localize, h);
    })
    .join('');
}
function Et(r) {
  const t = r.match(Nt);
  return t ? t[1].replace(Wt, "'") : r;
}
function re(r, t) {
  const e = +u(r);
  return w(r, e + t);
}
function Jn(r, t) {
  return re(r, t * U);
}
function Kn(r, t) {
  return re(r, t * z);
}
function Z(r, t) {
  const e = u(r);
  return isNaN(t) ? w(r, NaN) : (t && e.setDate(e.getDate() + t), e);
}
function Ht(r, t) {
  const e = t * 7;
  return Z(r, e);
}
function ae(r, t) {
  const e = u(r);
  if (isNaN(t)) return w(r, NaN);
  if (!t) return e;
  const n = e.getDate(),
    a = w(r, e.getTime());
  a.setMonth(e.getMonth() + t + 1, 0);
  const s = a.getDate();
  return n >= s ? a : (e.setFullYear(a.getFullYear(), a.getMonth(), n), e);
}
function qt(r, t) {
  const e = t * 3;
  return ae(r, e);
}
function Ft(r, t) {
  return ae(r, t * 12);
}
function Sn(r, t) {
  return Z(r, -1);
}
function er(r, t) {
  return Ht(r, -1);
}
function tr(r, t) {
  return ae(r, -t);
}
function nr(r, t) {
  return qt(r, -1);
}
function rr(r, t) {
  return Ft(r, -t);
}
function ar(r) {
  return u(r).getSeconds();
}
function sr(r) {
  return u(r).getMinutes();
}
function or(r) {
  return u(r).getHours();
}
function ir(r) {
  return u(r).getDay();
}
function ur(r) {
  return u(r).getDate();
}
function cr(r) {
  return u(r).getMonth();
}
function ge(r) {
  const t = u(r);
  return Math.trunc(t.getMonth() / 3) + 1;
}
function dr(r) {
  return u(r).getFullYear();
}
function lr(r) {
  return u(r).getTime();
}
function fr(r, t) {
  const e = u(r);
  return (e.setSeconds(t), e);
}
function hr(r, t) {
  const e = u(r);
  return (e.setMinutes(t), e);
}
function mr(r, t) {
  const e = u(r);
  return (e.setHours(t), e);
}
function Ct(r) {
  const t = u(r),
    e = t.getFullYear(),
    n = t.getMonth(),
    a = w(r, 0);
  return (a.setFullYear(e, n + 1, 0), a.setHours(0, 0, 0, 0), a.getDate());
}
function Oe(r, t) {
  const e = u(r),
    n = e.getFullYear(),
    a = e.getDate(),
    s = w(r, 0);
  (s.setFullYear(n, t, 15), s.setHours(0, 0, 0, 0));
  const o = Ct(s);
  return (e.setMonth(t, Math.min(a, o)), e);
}
function wr(r, t) {
  const e = u(r),
    n = Math.trunc(e.getMonth() / 3) + 1,
    a = t - n;
  return Oe(e, e.getMonth() + a * 3);
}
function gr(r, t) {
  const e = u(r);
  return isNaN(+e) ? w(r, NaN) : (e.setFullYear(t), e);
}
function yr(r) {
  let t;
  return (
    r.forEach((e) => {
      const n = u(e);
      (!t || t > n || isNaN(+n)) && (t = n);
    }),
    t || new Date(NaN)
  );
}
function br(r) {
  let t;
  return (
    r.forEach(function (e) {
      const n = u(e);
      (t === void 0 || t < n || isNaN(Number(n))) && (t = n);
    }),
    t || new Date(NaN)
  );
}
function xr(r, t) {
  const e = u(r),
    n = u(t),
    a = e.getFullYear() - n.getFullYear(),
    s = e.getMonth() - n.getMonth();
  return a * 12 + s;
}
function Dr(r, t) {
  const e = u(r),
    n = u(t);
  return e.getFullYear() - n.getFullYear();
}
function Mr(r, t) {
  const e = u(r),
    n = u(t),
    a = e.getFullYear() - n.getFullYear(),
    s = ge(e) - ge(n);
  return a * 4 + s;
}
function pr(r) {
  const t = u(r);
  return (t.setDate(1), t.setHours(0, 0, 0, 0), t);
}
function ye(r) {
  const t = u(r),
    e = t.getMonth(),
    n = e - (e % 3);
  return (t.setMonth(n, 1), t.setHours(0, 0, 0, 0), t);
}
function Tr(r) {
  const t = u(r);
  return (t.setHours(23, 59, 59, 999), t);
}
function kr(r, t) {
  var c, d;
  const e = q(),
    n =
      e.weekStartsOn ??
      ((d = (c = e.locale) == null ? void 0 : c.options) == null
        ? void 0
        : d.weekStartsOn) ??
      0,
    a = u(r),
    s = a.getDay(),
    o = (s < n ? -7 : 0) + 6 - (s - n);
  return (a.setDate(a.getDate() + o), a.setHours(23, 59, 59, 999), a);
}
function Pr(r) {
  const t = u(r),
    e = t.getMonth();
  return (
    t.setFullYear(t.getFullYear(), e + 1, 0),
    t.setHours(23, 59, 59, 999),
    t
  );
}
function Or(r) {
  const t = u(r),
    e = t.getFullYear();
  return (t.setFullYear(e + 1, 0, 0), t.setHours(23, 59, 59, 999), t);
}
function Yr(r, t) {
  const e = u(r),
    n = u(t);
  return +e == +n;
}
function _r(r, t) {
  const e = $(r),
    n = $(t);
  return +e == +n;
}
function Nr(r, t) {
  const e = u(r),
    n = u(t);
  return e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth();
}
function Wr(r, t) {
  const e = u(r),
    n = u(t);
  return e.getFullYear() === n.getFullYear();
}
function vr(r, t) {
  const e = ye(r),
    n = ye(t);
  return +e == +n;
}
function Er(r, t) {
  const e = u(r),
    n = u(t);
  return e.getTime() > n.getTime();
}
function Hr(r, t) {
  const e = u(r),
    n = u(t);
  return +e < +n;
}
function qr(r, t) {
  const e = +u(r),
    [n, a] = [+u(t.start), +u(t.end)].sort((s, o) => s - o);
  return e >= n && e <= a;
}
function It() {
  return Object.assign({}, q());
}
function Lt(r, t) {
  const e = t instanceof Date ? w(t, 0) : new t(0);
  return (
    e.setFullYear(r.getFullYear(), r.getMonth(), r.getDate()),
    e.setHours(
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    ),
    e
  );
}
const Qt = 10;
class Ye {
  constructor() {
    i(this, 'subPriority', 0);
  }
  validate(t, e) {
    return !0;
  }
}
class Rt extends Ye {
  constructor(t, e, n, a, s) {
    (super(),
      (this.value = t),
      (this.validateValue = e),
      (this.setValue = n),
      (this.priority = a),
      s && (this.subPriority = s));
  }
  validate(t, e) {
    return this.validateValue(t, this.value, e);
  }
  set(t, e, n) {
    return this.setValue(t, e, this.value, n);
  }
}
class Xt extends Ye {
  constructor() {
    super(...arguments);
    i(this, 'priority', Qt);
    i(this, 'subPriority', -1);
  }
  set(e, n) {
    return n.timestampIsSet ? e : w(e, Lt(e, Date));
  }
}
class f {
  run(t, e, n, a) {
    const s = this.parse(t, e, n, a);
    return s
      ? {
          setter: new Rt(
            s.value,
            this.validate,
            this.set,
            this.priority,
            this.subPriority
          ),
          rest: s.rest,
        }
      : null;
  }
  validate(t, e, n) {
    return !0;
  }
}
class Bt extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 140);
    i(this, 'incompatibleTokens', ['R', 'u', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'G':
      case 'GG':
      case 'GGG':
        return (
          a.era(e, { width: 'abbreviated' }) || a.era(e, { width: 'narrow' })
        );
      case 'GGGGG':
        return a.era(e, { width: 'narrow' });
      case 'GGGG':
      default:
        return (
          a.era(e, { width: 'wide' }) ||
          a.era(e, { width: 'abbreviated' }) ||
          a.era(e, { width: 'narrow' })
        );
    }
  }
  set(e, n, a) {
    return ((n.era = a), e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e);
  }
}
const x = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  _ = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function D(r, t) {
  return r && { value: t(r.value), rest: r.rest };
}
function g(r, t) {
  const e = t.match(r);
  return e ? { value: parseInt(e[0], 10), rest: t.slice(e[0].length) } : null;
}
function N(r, t) {
  const e = t.match(r);
  if (!e) return null;
  if (e[0] === 'Z') return { value: 0, rest: t.slice(1) };
  const n = e[1] === '+' ? 1 : -1,
    a = e[2] ? parseInt(e[2], 10) : 0,
    s = e[3] ? parseInt(e[3], 10) : 0,
    o = e[5] ? parseInt(e[5], 10) : 0;
  return { value: n * (a * z + s * U + o * gt), rest: t.slice(e[0].length) };
}
function _e(r) {
  return g(x.anyDigitsSigned, r);
}
function b(r, t) {
  switch (r) {
    case 1:
      return g(x.singleDigit, t);
    case 2:
      return g(x.twoDigits, t);
    case 3:
      return g(x.threeDigits, t);
    case 4:
      return g(x.fourDigits, t);
    default:
      return g(new RegExp('^\\d{1,' + r + '}'), t);
  }
}
function V(r, t) {
  switch (r) {
    case 1:
      return g(x.singleDigitSigned, t);
    case 2:
      return g(x.twoDigitsSigned, t);
    case 3:
      return g(x.threeDigitsSigned, t);
    case 4:
      return g(x.fourDigitsSigned, t);
    default:
      return g(new RegExp('^-?\\d{1,' + r + '}'), t);
  }
}
function se(r) {
  switch (r) {
    case 'morning':
      return 4;
    case 'evening':
      return 17;
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function Ne(r, t) {
  const e = t > 0,
    n = e ? t : 1 - t;
  let a;
  if (n <= 50) a = r || 100;
  else {
    const s = n + 50,
      o = Math.trunc(s / 100) * 100,
      c = r >= s % 100;
    a = r + o - (c ? 100 : 0);
  }
  return e ? a : 1 - a;
}
function We(r) {
  return r % 400 === 0 || (r % 4 === 0 && r % 100 !== 0);
}
class Gt extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 130);
    i(this, 'incompatibleTokens', [
      'Y',
      'R',
      'u',
      'w',
      'I',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    const s = (o) => ({ year: o, isTwoDigitYear: n === 'yy' });
    switch (n) {
      case 'y':
        return D(b(4, e), s);
      case 'yo':
        return D(a.ordinalNumber(e, { unit: 'year' }), s);
      default:
        return D(b(n.length, e), s);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, a) {
    const s = e.getFullYear();
    if (a.isTwoDigitYear) {
      const c = Ne(a.year, s);
      return (e.setFullYear(c, 0, 1), e.setHours(0, 0, 0, 0), e);
    }
    const o = !('era' in n) || n.era === 1 ? a.year : 1 - a.year;
    return (e.setFullYear(o, 0, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class At extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 130);
    i(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'Q',
      'q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'i',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    const s = (o) => ({ year: o, isTwoDigitYear: n === 'YY' });
    switch (n) {
      case 'Y':
        return D(b(4, e), s);
      case 'Yo':
        return D(a.ordinalNumber(e, { unit: 'year' }), s);
      default:
        return D(b(n.length, e), s);
    }
  }
  validate(e, n) {
    return n.isTwoDigitYear || n.year > 0;
  }
  set(e, n, a, s) {
    const o = ne(e, s);
    if (a.isTwoDigitYear) {
      const d = Ne(a.year, o);
      return (
        e.setFullYear(d, 0, s.firstWeekContainsDate),
        e.setHours(0, 0, 0, 0),
        E(e, s)
      );
    }
    const c = !('era' in n) || n.era === 1 ? a.year : 1 - a.year;
    return (
      e.setFullYear(c, 0, s.firstWeekContainsDate),
      e.setHours(0, 0, 0, 0),
      E(e, s)
    );
  }
}
class $t extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 130);
    i(this, 'incompatibleTokens', [
      'G',
      'y',
      'Y',
      'u',
      'Q',
      'q',
      'M',
      'L',
      'w',
      'd',
      'D',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n) {
    return V(n === 'R' ? 4 : n.length, e);
  }
  set(e, n, a) {
    const s = w(e, 0);
    return (s.setFullYear(a, 0, 4), s.setHours(0, 0, 0, 0), I(s));
  }
}
class jt extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 130);
    i(this, 'incompatibleTokens', [
      'G',
      'y',
      'Y',
      'R',
      'w',
      'I',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n) {
    return V(n === 'u' ? 4 : n.length, e);
  }
  set(e, n, a) {
    return (e.setFullYear(a, 0, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class Vt extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 120);
    i(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'M',
      'L',
      'w',
      'I',
      'd',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case 'Q':
      case 'QQ':
        return b(n.length, e);
      case 'Qo':
        return a.ordinalNumber(e, { unit: 'quarter' });
      case 'QQQ':
        return (
          a.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.quarter(e, { width: 'narrow', context: 'formatting' })
        );
      case 'QQQQQ':
        return a.quarter(e, { width: 'narrow', context: 'formatting' });
      case 'QQQQ':
      default:
        return (
          a.quarter(e, { width: 'wide', context: 'formatting' }) ||
          a.quarter(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.quarter(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, a) {
    return (e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class Ut extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 120);
    i(this, 'incompatibleTokens', [
      'Y',
      'R',
      'Q',
      'M',
      'L',
      'w',
      'I',
      'd',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case 'q':
      case 'qq':
        return b(n.length, e);
      case 'qo':
        return a.ordinalNumber(e, { unit: 'quarter' });
      case 'qqq':
        return (
          a.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.quarter(e, { width: 'narrow', context: 'standalone' })
        );
      case 'qqqqq':
        return a.quarter(e, { width: 'narrow', context: 'standalone' });
      case 'qqqq':
      default:
        return (
          a.quarter(e, { width: 'wide', context: 'standalone' }) ||
          a.quarter(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.quarter(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 4;
  }
  set(e, n, a) {
    return (e.setMonth((a - 1) * 3, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class zt extends f {
  constructor() {
    super(...arguments);
    i(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'L',
      'w',
      'I',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
    i(this, 'priority', 110);
  }
  parse(e, n, a) {
    const s = (o) => o - 1;
    switch (n) {
      case 'M':
        return D(g(x.month, e), s);
      case 'MM':
        return D(b(2, e), s);
      case 'Mo':
        return D(a.ordinalNumber(e, { unit: 'month' }), s);
      case 'MMM':
        return (
          a.month(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.month(e, { width: 'narrow', context: 'formatting' })
        );
      case 'MMMMM':
        return a.month(e, { width: 'narrow', context: 'formatting' });
      case 'MMMM':
      default:
        return (
          a.month(e, { width: 'wide', context: 'formatting' }) ||
          a.month(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.month(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, a) {
    return (e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e);
  }
}
class Zt extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 110);
    i(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'M',
      'w',
      'I',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    const s = (o) => o - 1;
    switch (n) {
      case 'L':
        return D(g(x.month, e), s);
      case 'LL':
        return D(b(2, e), s);
      case 'Lo':
        return D(a.ordinalNumber(e, { unit: 'month' }), s);
      case 'LLL':
        return (
          a.month(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.month(e, { width: 'narrow', context: 'standalone' })
        );
      case 'LLLLL':
        return a.month(e, { width: 'narrow', context: 'standalone' });
      case 'LLLL':
      default:
        return (
          a.month(e, { width: 'wide', context: 'standalone' }) ||
          a.month(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.month(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, a) {
    return (e.setMonth(a, 1), e.setHours(0, 0, 0, 0), e);
  }
}
function Jt(r, t, e) {
  const n = u(r),
    a = pe(n, e) - t;
  return (n.setDate(n.getDate() - a * 7), n);
}
class Kt extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 100);
    i(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'i',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case 'w':
        return g(x.week, e);
      case 'wo':
        return a.ordinalNumber(e, { unit: 'week' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, a, s) {
    return E(Jt(e, a, s), s);
  }
}
function St(r, t) {
  const e = u(r),
    n = Me(e) - t;
  return (e.setDate(e.getDate() - n * 7), e);
}
class en extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 100);
    i(this, 'incompatibleTokens', [
      'y',
      'Y',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'w',
      'd',
      'D',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case 'I':
        return g(x.week, e);
      case 'Io':
        return a.ordinalNumber(e, { unit: 'week' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 53;
  }
  set(e, n, a) {
    return I(St(e, a));
  }
}
const tn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  nn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
class rn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 90);
    i(this, 'subPriority', 1);
    i(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'w',
      'I',
      'D',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case 'd':
        return g(x.date, e);
      case 'do':
        return a.ordinalNumber(e, { unit: 'date' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    const a = e.getFullYear(),
      s = We(a),
      o = e.getMonth();
    return s ? n >= 1 && n <= nn[o] : n >= 1 && n <= tn[o];
  }
  set(e, n, a) {
    return (e.setDate(a), e.setHours(0, 0, 0, 0), e);
  }
}
class an extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 90);
    i(this, 'subpriority', 1);
    i(this, 'incompatibleTokens', [
      'Y',
      'R',
      'q',
      'Q',
      'M',
      'L',
      'w',
      'I',
      'd',
      'E',
      'i',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    switch (n) {
      case 'D':
      case 'DD':
        return g(x.dayOfYear, e);
      case 'Do':
        return a.ordinalNumber(e, { unit: 'date' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    const a = e.getFullYear();
    return We(a) ? n >= 1 && n <= 366 : n >= 1 && n <= 365;
  }
  set(e, n, a) {
    return (e.setMonth(0, a), e.setHours(0, 0, 0, 0), e);
  }
}
function oe(r, t, e) {
  var T, O, P, W;
  const n = q(),
    a =
      (e == null ? void 0 : e.weekStartsOn) ??
      ((O = (T = e == null ? void 0 : e.locale) == null ? void 0 : T.options) ==
      null
        ? void 0
        : O.weekStartsOn) ??
      n.weekStartsOn ??
      ((W = (P = n.locale) == null ? void 0 : P.options) == null
        ? void 0
        : W.weekStartsOn) ??
      0,
    s = u(r),
    o = s.getDay(),
    d = ((t % 7) + 7) % 7,
    h = 7 - a,
    M = t < 0 || t > 6 ? t - ((o + h) % 7) : ((d + h) % 7) - ((o + h) % 7);
  return Z(s, M);
}
class sn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 90);
    i(this, 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'E':
      case 'EE':
      case 'EEE':
        return (
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'EEEEE':
        return a.day(e, { width: 'narrow', context: 'formatting' });
      case 'EEEEEE':
        return (
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'EEEE':
      default:
        return (
          a.day(e, { width: 'wide', context: 'formatting' }) ||
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, a, s) {
    return ((e = oe(e, a, s)), e.setHours(0, 0, 0, 0), e);
  }
}
class on extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 90);
    i(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'E',
      'i',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a, s) {
    const o = (c) => {
      const d = Math.floor((c - 1) / 7) * 7;
      return ((c + s.weekStartsOn + 6) % 7) + d;
    };
    switch (n) {
      case 'e':
      case 'ee':
        return D(b(n.length, e), o);
      case 'eo':
        return D(a.ordinalNumber(e, { unit: 'day' }), o);
      case 'eee':
        return (
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'eeeee':
        return a.day(e, { width: 'narrow', context: 'formatting' });
      case 'eeeeee':
        return (
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
      case 'eeee':
      default:
        return (
          a.day(e, { width: 'wide', context: 'formatting' }) ||
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.day(e, { width: 'short', context: 'formatting' }) ||
          a.day(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, a, s) {
    return ((e = oe(e, a, s)), e.setHours(0, 0, 0, 0), e);
  }
}
class un extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 90);
    i(this, 'incompatibleTokens', [
      'y',
      'R',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'I',
      'd',
      'D',
      'E',
      'i',
      'e',
      't',
      'T',
    ]);
  }
  parse(e, n, a, s) {
    const o = (c) => {
      const d = Math.floor((c - 1) / 7) * 7;
      return ((c + s.weekStartsOn + 6) % 7) + d;
    };
    switch (n) {
      case 'c':
      case 'cc':
        return D(b(n.length, e), o);
      case 'co':
        return D(a.ordinalNumber(e, { unit: 'day' }), o);
      case 'ccc':
        return (
          a.day(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.day(e, { width: 'short', context: 'standalone' }) ||
          a.day(e, { width: 'narrow', context: 'standalone' })
        );
      case 'ccccc':
        return a.day(e, { width: 'narrow', context: 'standalone' });
      case 'cccccc':
        return (
          a.day(e, { width: 'short', context: 'standalone' }) ||
          a.day(e, { width: 'narrow', context: 'standalone' })
        );
      case 'cccc':
      default:
        return (
          a.day(e, { width: 'wide', context: 'standalone' }) ||
          a.day(e, { width: 'abbreviated', context: 'standalone' }) ||
          a.day(e, { width: 'short', context: 'standalone' }) ||
          a.day(e, { width: 'narrow', context: 'standalone' })
        );
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 6;
  }
  set(e, n, a, s) {
    return ((e = oe(e, a, s)), e.setHours(0, 0, 0, 0), e);
  }
}
function cn(r) {
  let e = u(r).getDay();
  return (e === 0 && (e = 7), e);
}
function dn(r, t) {
  const e = u(r),
    n = cn(e),
    a = t - n;
  return Z(e, a);
}
class ln extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 90);
    i(this, 'incompatibleTokens', [
      'y',
      'Y',
      'u',
      'q',
      'Q',
      'M',
      'L',
      'w',
      'd',
      'D',
      'E',
      'e',
      'c',
      't',
      'T',
    ]);
  }
  parse(e, n, a) {
    const s = (o) => (o === 0 ? 7 : o);
    switch (n) {
      case 'i':
      case 'ii':
        return b(n.length, e);
      case 'io':
        return a.ordinalNumber(e, { unit: 'day' });
      case 'iii':
        return D(
          a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
            a.day(e, { width: 'short', context: 'formatting' }) ||
            a.day(e, { width: 'narrow', context: 'formatting' }),
          s
        );
      case 'iiiii':
        return D(a.day(e, { width: 'narrow', context: 'formatting' }), s);
      case 'iiiiii':
        return D(
          a.day(e, { width: 'short', context: 'formatting' }) ||
            a.day(e, { width: 'narrow', context: 'formatting' }),
          s
        );
      case 'iiii':
      default:
        return D(
          a.day(e, { width: 'wide', context: 'formatting' }) ||
            a.day(e, { width: 'abbreviated', context: 'formatting' }) ||
            a.day(e, { width: 'short', context: 'formatting' }) ||
            a.day(e, { width: 'narrow', context: 'formatting' }),
          s
        );
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 7;
  }
  set(e, n, a) {
    return ((e = dn(e, a)), e.setHours(0, 0, 0, 0), e);
  }
}
class fn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 80);
    i(this, 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'a':
      case 'aa':
      case 'aaa':
        return (
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'aaaaa':
        return a.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'aaaa':
      default:
        return (
          a.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, n, a) {
    return (e.setHours(se(a), 0, 0, 0), e);
  }
}
class hn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 80);
    i(this, 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'b':
      case 'bb':
      case 'bbb':
        return (
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'bbbbb':
        return a.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'bbbb':
      default:
        return (
          a.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, n, a) {
    return (e.setHours(se(a), 0, 0, 0), e);
  }
}
class mn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 80);
    i(this, 'incompatibleTokens', ['a', 'b', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'B':
      case 'BB':
      case 'BBB':
        return (
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
      case 'BBBBB':
        return a.dayPeriod(e, { width: 'narrow', context: 'formatting' });
      case 'BBBB':
      default:
        return (
          a.dayPeriod(e, { width: 'wide', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'abbreviated', context: 'formatting' }) ||
          a.dayPeriod(e, { width: 'narrow', context: 'formatting' })
        );
    }
  }
  set(e, n, a) {
    return (e.setHours(se(a), 0, 0, 0), e);
  }
}
class wn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 70);
    i(this, 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'h':
        return g(x.hour12h, e);
      case 'ho':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 12;
  }
  set(e, n, a) {
    const s = e.getHours() >= 12;
    return (
      s && a < 12
        ? e.setHours(a + 12, 0, 0, 0)
        : !s && a === 12
          ? e.setHours(0, 0, 0, 0)
          : e.setHours(a, 0, 0, 0),
      e
    );
  }
}
class gn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 70);
    i(this, 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'H':
        return g(x.hour23h, e);
      case 'Ho':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 23;
  }
  set(e, n, a) {
    return (e.setHours(a, 0, 0, 0), e);
  }
}
class yn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 70);
    i(this, 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'K':
        return g(x.hour11h, e);
      case 'Ko':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 11;
  }
  set(e, n, a) {
    return (
      e.getHours() >= 12 && a < 12
        ? e.setHours(a + 12, 0, 0, 0)
        : e.setHours(a, 0, 0, 0),
      e
    );
  }
}
class bn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 70);
    i(this, 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'k':
        return g(x.hour24h, e);
      case 'ko':
        return a.ordinalNumber(e, { unit: 'hour' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 1 && n <= 24;
  }
  set(e, n, a) {
    const s = a <= 24 ? a % 24 : a;
    return (e.setHours(s, 0, 0, 0), e);
  }
}
class xn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 60);
    i(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 'm':
        return g(x.minute, e);
      case 'mo':
        return a.ordinalNumber(e, { unit: 'minute' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, a) {
    return (e.setMinutes(a, 0, 0), e);
  }
}
class Dn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 50);
    i(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, n, a) {
    switch (n) {
      case 's':
        return g(x.second, e);
      case 'so':
        return a.ordinalNumber(e, { unit: 'second' });
      default:
        return b(n.length, e);
    }
  }
  validate(e, n) {
    return n >= 0 && n <= 59;
  }
  set(e, n, a) {
    return (e.setSeconds(a, 0), e);
  }
}
class Mn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 30);
    i(this, 'incompatibleTokens', ['t', 'T']);
  }
  parse(e, n) {
    const a = (s) => Math.trunc(s * Math.pow(10, -n.length + 3));
    return D(b(n.length, e), a);
  }
  set(e, n, a) {
    return (e.setMilliseconds(a), e);
  }
}
class pn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 10);
    i(this, 'incompatibleTokens', ['t', 'T', 'x']);
  }
  parse(e, n) {
    switch (n) {
      case 'X':
        return N(_.basicOptionalMinutes, e);
      case 'XX':
        return N(_.basic, e);
      case 'XXXX':
        return N(_.basicOptionalSeconds, e);
      case 'XXXXX':
        return N(_.extendedOptionalSeconds, e);
      case 'XXX':
      default:
        return N(_.extended, e);
    }
  }
  set(e, n, a) {
    return n.timestampIsSet ? e : w(e, e.getTime() - j(e) - a);
  }
}
class Tn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 10);
    i(this, 'incompatibleTokens', ['t', 'T', 'X']);
  }
  parse(e, n) {
    switch (n) {
      case 'x':
        return N(_.basicOptionalMinutes, e);
      case 'xx':
        return N(_.basic, e);
      case 'xxxx':
        return N(_.basicOptionalSeconds, e);
      case 'xxxxx':
        return N(_.extendedOptionalSeconds, e);
      case 'xxx':
      default:
        return N(_.extended, e);
    }
  }
  set(e, n, a) {
    return n.timestampIsSet ? e : w(e, e.getTime() - j(e) - a);
  }
}
class kn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 40);
    i(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return _e(e);
  }
  set(e, n, a) {
    return [w(e, a * 1e3), { timestampIsSet: !0 }];
  }
}
class Pn extends f {
  constructor() {
    super(...arguments);
    i(this, 'priority', 20);
    i(this, 'incompatibleTokens', '*');
  }
  parse(e) {
    return _e(e);
  }
  set(e, n, a) {
    return [w(e, a), { timestampIsSet: !0 }];
  }
}
const On = {
    G: new Bt(),
    y: new Gt(),
    Y: new At(),
    R: new $t(),
    u: new jt(),
    Q: new Vt(),
    q: new Ut(),
    M: new zt(),
    L: new Zt(),
    w: new Kt(),
    I: new en(),
    d: new rn(),
    D: new an(),
    E: new sn(),
    e: new on(),
    c: new un(),
    i: new ln(),
    a: new fn(),
    b: new hn(),
    B: new mn(),
    h: new wn(),
    H: new gn(),
    K: new yn(),
    k: new bn(),
    m: new xn(),
    s: new Dn(),
    S: new Mn(),
    X: new pn(),
    x: new Tn(),
    t: new kn(),
    T: new Pn(),
  },
  Yn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  _n = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Nn = /^'([^]*?)'?$/,
  Wn = /''/g,
  vn = /\S/,
  En = /[a-zA-Z]/;
function Fr(r, t, e, n) {
  var L, Q, R, k, p, F, ie, ue;
  const a = It(),
    s = (n == null ? void 0 : n.locale) ?? a.locale ?? be,
    o =
      (n == null ? void 0 : n.firstWeekContainsDate) ??
      ((Q = (L = n == null ? void 0 : n.locale) == null ? void 0 : L.options) ==
      null
        ? void 0
        : Q.firstWeekContainsDate) ??
      a.firstWeekContainsDate ??
      ((k = (R = a.locale) == null ? void 0 : R.options) == null
        ? void 0
        : k.firstWeekContainsDate) ??
      1,
    c =
      (n == null ? void 0 : n.weekStartsOn) ??
      ((F = (p = n == null ? void 0 : n.locale) == null ? void 0 : p.options) ==
      null
        ? void 0
        : F.weekStartsOn) ??
      a.weekStartsOn ??
      ((ue = (ie = a.locale) == null ? void 0 : ie.options) == null
        ? void 0
        : ue.weekStartsOn) ??
      0;
  if (t === '') return r === '' ? u(e) : w(e, NaN);
  const d = { firstWeekContainsDate: o, weekStartsOn: c, locale: s },
    h = [new Xt()],
    M = t
      .match(_n)
      .map((l) => {
        const y = l[0];
        if (y in ee) {
          const Y = ee[y];
          return Y(l, s.formatLong);
        }
        return l;
      })
      .join('')
      .match(Yn),
    T = [];
  for (let l of M) {
    (!(n != null && n.useAdditionalWeekYearTokens) && Pe(l) && te(l, t, r),
      !(n != null && n.useAdditionalDayOfYearTokens) && ke(l) && te(l, t, r));
    const y = l[0],
      Y = On[y];
    if (Y) {
      const { incompatibleTokens: ce } = Y;
      if (Array.isArray(ce)) {
        const de = T.find((le) => ce.includes(le.token) || le.token === y);
        if (de)
          throw new RangeError(
            `The format string mustn't contain \`${de.fullToken}\` and \`${l}\` at the same time`
          );
      } else if (Y.incompatibleTokens === '*' && T.length > 0)
        throw new RangeError(
          `The format string mustn't contain \`${l}\` and any other token at the same time`
        );
      T.push({ token: y, fullToken: l });
      const J = Y.run(r, l, s.match, d);
      if (!J) return w(e, NaN);
      (h.push(J.setter), (r = J.rest));
    } else {
      if (y.match(En))
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
            y +
            '`'
        );
      if (
        (l === "''" ? (l = "'") : y === "'" && (l = Hn(l)), r.indexOf(l) === 0)
      )
        r = r.slice(l.length);
      else return w(e, NaN);
    }
  }
  if (r.length > 0 && vn.test(r)) return w(e, NaN);
  const O = h
    .map((l) => l.priority)
    .sort((l, y) => y - l)
    .filter((l, y, Y) => Y.indexOf(l) === y)
    .map((l) =>
      h
        .filter((y) => y.priority === l)
        .sort((y, Y) => Y.subPriority - y.subPriority)
    )
    .map((l) => l[0]);
  let P = u(e);
  if (isNaN(P.getTime())) return w(e, NaN);
  const W = {};
  for (const l of O) {
    if (!l.validate(P, d)) return w(e, NaN);
    const y = l.set(P, W, d);
    Array.isArray(y) ? ((P = y[0]), Object.assign(W, y[1])) : (P = y);
  }
  return w(e, P);
}
function Hn(r) {
  return r.match(Nn)[1].replace(Wn, "'");
}
function Cr(r, t) {
  const n = In(r);
  let a;
  if (n.date) {
    const d = Ln(n.date, 2);
    a = Qn(d.restDateString, d.year);
  }
  if (!a || isNaN(a.getTime())) return new Date(NaN);
  const s = a.getTime();
  let o = 0,
    c;
  if (n.time && ((o = Rn(n.time)), isNaN(o))) return new Date(NaN);
  if (n.timezone) {
    if (((c = Xn(n.timezone)), isNaN(c))) return new Date(NaN);
  } else {
    const d = new Date(s + o),
      h = new Date(0);
    return (
      h.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()),
      h.setHours(
        d.getUTCHours(),
        d.getUTCMinutes(),
        d.getUTCSeconds(),
        d.getUTCMilliseconds()
      ),
      h
    );
  }
  return new Date(s + o + c);
}
const A = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  qn = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Fn =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Cn = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function In(r) {
  const t = {},
    e = r.split(A.dateTimeDelimiter);
  let n;
  if (e.length > 2) return t;
  if (
    (/:/.test(e[0])
      ? (n = e[0])
      : ((t.date = e[0]),
        (n = e[1]),
        A.timeZoneDelimiter.test(t.date) &&
          ((t.date = r.split(A.timeZoneDelimiter)[0]),
          (n = r.substr(t.date.length, r.length)))),
    n)
  ) {
    const a = A.timezone.exec(n);
    a ? ((t.time = n.replace(a[1], '')), (t.timezone = a[1])) : (t.time = n);
  }
  return t;
}
function Ln(r, t) {
  const e = new RegExp(
      '^(?:(\\d{4}|[+-]\\d{' +
        (4 + t) +
        '})|(\\d{2}|[+-]\\d{' +
        (2 + t) +
        '})$)'
    ),
    n = r.match(e);
  if (!n) return { year: NaN, restDateString: '' };
  const a = n[1] ? parseInt(n[1]) : null,
    s = n[2] ? parseInt(n[2]) : null;
  return {
    year: s === null ? a : s * 100,
    restDateString: r.slice((n[1] || n[2]).length),
  };
}
function Qn(r, t) {
  if (t === null) return new Date(NaN);
  const e = r.match(qn);
  if (!e) return new Date(NaN);
  const n = !!e[4],
    a = G(e[1]),
    s = G(e[2]) - 1,
    o = G(e[3]),
    c = G(e[4]),
    d = G(e[5]) - 1;
  if (n) return jn(t, c, d) ? Bn(t, c, d) : new Date(NaN);
  {
    const h = new Date(0);
    return !An(t, s, o) || !$n(t, a)
      ? new Date(NaN)
      : (h.setUTCFullYear(t, s, Math.max(a, o)), h);
  }
}
function G(r) {
  return r ? parseInt(r) : 1;
}
function Rn(r) {
  const t = r.match(Fn);
  if (!t) return NaN;
  const e = S(t[1]),
    n = S(t[2]),
    a = S(t[3]);
  return Vn(e, n, a) ? e * z + n * U + a * 1e3 : NaN;
}
function S(r) {
  return (r && parseFloat(r.replace(',', '.'))) || 0;
}
function Xn(r) {
  if (r === 'Z') return 0;
  const t = r.match(Cn);
  if (!t) return 0;
  const e = t[1] === '+' ? -1 : 1,
    n = parseInt(t[2]),
    a = (t[3] && parseInt(t[3])) || 0;
  return Un(n, a) ? e * (n * z + a * U) : NaN;
}
function Bn(r, t, e) {
  const n = new Date(0);
  n.setUTCFullYear(r, 0, 4);
  const a = n.getUTCDay() || 7,
    s = (t - 1) * 7 + e + 1 - a;
  return (n.setUTCDate(n.getUTCDate() + s), n);
}
const Gn = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ve(r) {
  return r % 400 === 0 || (r % 4 === 0 && r % 100 !== 0);
}
function An(r, t, e) {
  return t >= 0 && t <= 11 && e >= 1 && e <= (Gn[t] || (ve(r) ? 29 : 28));
}
function $n(r, t) {
  return t >= 1 && t <= (ve(r) ? 366 : 365);
}
function jn(r, t, e) {
  return t >= 1 && t <= 53 && e >= 0 && e <= 6;
}
function Vn(r, t, e) {
  return r === 24
    ? t === 0 && e === 0
    : e >= 0 && e < 60 && t >= 0 && t < 60 && r >= 0 && r < 25;
}
function Un(r, t) {
  return t >= 0 && t <= 59;
}
function Ir(r, t) {
  return re(r, t * 1e3);
}
function Lr(r, t) {
  let e = u(r);
  return isNaN(+e)
    ? w(r, NaN)
    : (t.year != null && e.setFullYear(t.year),
      t.month != null && (e = Oe(e, t.month)),
      t.date != null && e.setDate(t.date),
      t.hours != null && e.setHours(t.hours),
      t.minutes != null && e.setMinutes(t.minutes),
      t.seconds != null && e.setSeconds(t.seconds),
      t.milliseconds != null && e.setMilliseconds(t.milliseconds),
      e);
}
export {
  lr as $,
  qe as A,
  Lr as B,
  er as C,
  Sn as D,
  Yr as E,
  Cr as F,
  u as G,
  qr as H,
  vr as I,
  E as J,
  pr as K,
  Pr as L,
  ye as M,
  mr as N,
  hr as O,
  fr as P,
  Kn as Q,
  Ir as R,
  Wr as S,
  bt as T,
  Or as U,
  yt as V,
  yr as W,
  br as X,
  xr as Y,
  Mr as Z,
  Dr as _,
  wr as a,
  Fr as a0,
  ee as a1,
  kr as a2,
  Me as a3,
  ir as a4,
  ur as a5,
  Z as b,
  cr as c,
  ge as d,
  Ht as e,
  ae as f,
  dr as g,
  tr as h,
  _r as i,
  nr as j,
  qt as k,
  Zn as l,
  or as m,
  sr as n,
  ar as o,
  Jn as p,
  gr as q,
  Ft as r,
  Oe as s,
  rr as t,
  Hr as u,
  Er as v,
  Nr as w,
  Fe as x,
  $ as y,
  Tr as z,
};
