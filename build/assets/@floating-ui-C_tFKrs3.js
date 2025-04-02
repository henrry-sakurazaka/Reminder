import { r as m, a as zt, R as Yt } from './vendor-BEztx3UH.js';
function ft() {
  return typeof window < 'u';
}
function Z(t) {
  return Ft(t) ? (t.nodeName || '').toLowerCase() : '#document';
}
function B(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function H(t) {
  var e;
  return (e = (Ft(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function Ft(t) {
  return ft() ? t instanceof Node || t instanceof B(t).Node : !1;
}
function M(t) {
  return ft() ? t instanceof Element || t instanceof B(t).Element : !1;
}
function _(t) {
  return ft() ? t instanceof HTMLElement || t instanceof B(t).HTMLElement : !1;
}
function Ct(t) {
  return !ft() || typeof ShadowRoot > 'u'
    ? !1
    : t instanceof ShadowRoot || t instanceof B(t).ShadowRoot;
}
function tt(t) {
  const { overflow: e, overflowX: o, overflowY: n, display: r } = I(t);
  return (
    /auto|scroll|overlay|hidden|clip/.test(e + n + o) &&
    !['inline', 'contents'].includes(r)
  );
}
function Xt(t) {
  return ['table', 'td', 'th'].includes(Z(t));
}
function at(t) {
  return [':popover-open', ':modal'].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function xt(t) {
  const e = yt(),
    o = M(t) ? I(t) : t;
  return (
    ['transform', 'translate', 'scale', 'rotate', 'perspective'].some((n) =>
      o[n] ? o[n] !== 'none' : !1
    ) ||
    (o.containerType ? o.containerType !== 'normal' : !1) ||
    (!e && (o.backdropFilter ? o.backdropFilter !== 'none' : !1)) ||
    (!e && (o.filter ? o.filter !== 'none' : !1)) ||
    ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(
      (n) => (o.willChange || '').includes(n)
    ) ||
    ['paint', 'layout', 'strict', 'content'].some((n) =>
      (o.contain || '').includes(n)
    )
  );
}
function qt(t) {
  let e = z(t);
  for (; _(e) && !U(e); ) {
    if (xt(e)) return e;
    if (at(e)) return null;
    e = z(e);
  }
  return null;
}
function yt() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none');
}
function U(t) {
  return ['html', 'body', '#document'].includes(Z(t));
}
function I(t) {
  return B(t).getComputedStyle(t);
}
function ut(t) {
  return M(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function z(t) {
  if (Z(t) === 'html') return t;
  const e = t.assignedSlot || t.parentNode || (Ct(t) && t.host) || H(t);
  return Ct(e) ? e.host : e;
}
function Mt(t) {
  const e = z(t);
  return U(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : _(e) && tt(e)
      ? e
      : Mt(e);
}
function G(t, e, o) {
  var n;
  e === void 0 && (e = []), o === void 0 && (o = !0);
  const r = Mt(t),
    i = r === ((n = t.ownerDocument) == null ? void 0 : n.body),
    s = B(r);
  if (i) {
    const c = ht(s);
    return e.concat(
      s,
      s.visualViewport || [],
      tt(r) ? r : [],
      c && o ? G(c) : []
    );
  }
  return e.concat(r, G(r, [], o));
}
function ht(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
const K = Math.min,
  Y = Math.max,
  rt = Math.round,
  nt = Math.floor,
  V = (t) => ({ x: t, y: t }),
  Ut = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Kt = { start: 'end', end: 'start' };
function Qt(t, e, o) {
  return Y(t, K(e, o));
}
function dt(t, e) {
  return typeof t == 'function' ? t(e) : t;
}
function Q(t) {
  return t.split('-')[0];
}
function et(t) {
  return t.split('-')[1];
}
function Zt(t) {
  return t === 'x' ? 'y' : 'x';
}
function vt(t) {
  return t === 'y' ? 'height' : 'width';
}
function J(t) {
  return ['top', 'bottom'].includes(Q(t)) ? 'y' : 'x';
}
function Rt(t) {
  return Zt(J(t));
}
function Gt(t, e, o) {
  o === void 0 && (o = !1);
  const n = et(t),
    r = Rt(t),
    i = vt(r);
  let s =
    r === 'x'
      ? n === (o ? 'end' : 'start')
        ? 'right'
        : 'left'
      : n === 'start'
        ? 'bottom'
        : 'top';
  return e.reference[i] > e.floating[i] && (s = it(s)), [s, it(s)];
}
function Jt(t) {
  const e = it(t);
  return [pt(t), e, pt(e)];
}
function pt(t) {
  return t.replace(/start|end/g, (e) => Kt[e]);
}
function te(t, e, o) {
  const n = ['left', 'right'],
    r = ['right', 'left'],
    i = ['top', 'bottom'],
    s = ['bottom', 'top'];
  switch (t) {
    case 'top':
    case 'bottom':
      return o ? (e ? r : n) : e ? n : r;
    case 'left':
    case 'right':
      return e ? i : s;
    default:
      return [];
  }
}
function ee(t, e, o, n) {
  const r = et(t);
  let i = te(Q(t), o === 'start', n);
  return (
    r && ((i = i.map((s) => s + '-' + r)), e && (i = i.concat(i.map(pt)))), i
  );
}
function it(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Ut[e]);
}
function ne(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function kt(t) {
  return typeof t != 'number'
    ? ne(t)
    : { top: t, right: t, bottom: t, left: t };
}
function st(t) {
  const { x: e, y: o, width: n, height: r } = t;
  return {
    width: n,
    height: r,
    top: o,
    left: e,
    right: e + n,
    bottom: o + r,
    x: e,
    y: o,
  };
}
function Ot(t, e, o) {
  let { reference: n, floating: r } = t;
  const i = J(e),
    s = Rt(e),
    c = vt(s),
    l = Q(e),
    a = i === 'y',
    u = n.x + n.width / 2 - r.width / 2,
    d = n.y + n.height / 2 - r.height / 2,
    g = n[c] / 2 - r[c] / 2;
  let f;
  switch (l) {
    case 'top':
      f = { x: u, y: n.y - r.height };
      break;
    case 'bottom':
      f = { x: u, y: n.y + n.height };
      break;
    case 'right':
      f = { x: n.x + n.width, y: d };
      break;
    case 'left':
      f = { x: n.x - r.width, y: d };
      break;
    default:
      f = { x: n.x, y: n.y };
  }
  switch (et(e)) {
    case 'start':
      f[s] -= g * (o && a ? -1 : 1);
      break;
    case 'end':
      f[s] += g * (o && a ? -1 : 1);
      break;
  }
  return f;
}
const oe = async (t, e, o) => {
  const {
      placement: n = 'bottom',
      strategy: r = 'absolute',
      middleware: i = [],
      platform: s,
    } = o,
    c = i.filter(Boolean),
    l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let a = await s.getElementRects({ reference: t, floating: e, strategy: r }),
    { x: u, y: d } = Ot(a, n, l),
    g = n,
    f = {},
    h = 0;
  for (let w = 0; w < c.length; w++) {
    const { name: y, fn: x } = c[w],
      {
        x: b,
        y: p,
        data: v,
        reset: R,
      } = await x({
        x: u,
        y: d,
        initialPlacement: n,
        placement: g,
        strategy: r,
        middlewareData: f,
        rects: a,
        platform: s,
        elements: { reference: t, floating: e },
      });
    (u = b ?? u),
      (d = p ?? d),
      (f = { ...f, [y]: { ...f[y], ...v } }),
      R &&
        h <= 50 &&
        (h++,
        typeof R == 'object' &&
          (R.placement && (g = R.placement),
          R.rects &&
            (a =
              R.rects === !0
                ? await s.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: r,
                  })
                : R.rects),
          ({ x: u, y: d } = Ot(a, g, l))),
        (w = -1));
  }
  return { x: u, y: d, placement: g, strategy: r, middlewareData: f };
};
async function re(t, e) {
  var o;
  e === void 0 && (e = {});
  const { x: n, y: r, platform: i, rects: s, elements: c, strategy: l } = t,
    {
      boundary: a = 'clippingAncestors',
      rootBoundary: u = 'viewport',
      elementContext: d = 'floating',
      altBoundary: g = !1,
      padding: f = 0,
    } = dt(e, t),
    h = kt(f),
    y = c[g ? (d === 'floating' ? 'reference' : 'floating') : d],
    x = st(
      await i.getClippingRect({
        element:
          (o = await (i.isElement == null ? void 0 : i.isElement(y))) == null ||
          o
            ? y
            : y.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(c.floating))),
        boundary: a,
        rootBoundary: u,
        strategy: l,
      })
    ),
    b =
      d === 'floating'
        ? { x: n, y: r, width: s.floating.width, height: s.floating.height }
        : s.reference,
    p = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(c.floating)),
    v = (await (i.isElement == null ? void 0 : i.isElement(p)))
      ? (await (i.getScale == null ? void 0 : i.getScale(p))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    R = st(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: b,
            offsetParent: p,
            strategy: l,
          })
        : b
    );
  return {
    top: (x.top - R.top + h.top) / v.y,
    bottom: (R.bottom - x.bottom + h.bottom) / v.y,
    left: (x.left - R.left + h.left) / v.x,
    right: (R.right - x.right + h.right) / v.x,
  };
}
const ie = (t) => ({
    name: 'arrow',
    options: t,
    async fn(e) {
      const {
          x: o,
          y: n,
          placement: r,
          rects: i,
          platform: s,
          elements: c,
          middlewareData: l,
        } = e,
        { element: a, padding: u = 0 } = dt(t, e) || {};
      if (a == null) return {};
      const d = kt(u),
        g = { x: o, y: n },
        f = Rt(r),
        h = vt(f),
        w = await s.getDimensions(a),
        y = f === 'y',
        x = y ? 'top' : 'left',
        b = y ? 'bottom' : 'right',
        p = y ? 'clientHeight' : 'clientWidth',
        v = i.reference[h] + i.reference[f] - g[f] - i.floating[h],
        R = g[f] - i.reference[f],
        A = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a));
      let E = A ? A[p] : 0;
      (!E || !(await (s.isElement == null ? void 0 : s.isElement(A)))) &&
        (E = c.floating[p] || i.floating[h]);
      const S = v / 2 - R / 2,
        W = E / 2 - w[h] / 2 - 1,
        F = K(d[x], W),
        $ = K(d[b], W),
        L = F,
        k = E - w[h] - $,
        O = E / 2 - w[h] / 2 + S,
        N = Qt(L, O, k),
        P =
          !l.arrow &&
          et(r) != null &&
          O !== N &&
          i.reference[h] / 2 - (O < L ? F : $) - w[h] / 2 < 0,
        T = P ? (O < L ? O - L : O - k) : 0;
      return {
        [f]: g[f] + T,
        data: {
          [f]: N,
          centerOffset: O - N - T,
          ...(P && { alignmentOffset: T }),
        },
        reset: P,
      };
    },
  }),
  se = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: 'flip',
        options: t,
        async fn(e) {
          var o, n;
          const {
              placement: r,
              middlewareData: i,
              rects: s,
              initialPlacement: c,
              platform: l,
              elements: a,
            } = e,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: g,
              fallbackStrategy: f = 'bestFit',
              fallbackAxisSideDirection: h = 'none',
              flipAlignment: w = !0,
              ...y
            } = dt(t, e);
          if ((o = i.arrow) != null && o.alignmentOffset) return {};
          const x = Q(r),
            b = J(c),
            p = Q(c) === c,
            v = await (l.isRTL == null ? void 0 : l.isRTL(a.floating)),
            R = g || (p || !w ? [it(c)] : Jt(c)),
            A = h !== 'none';
          !g && A && R.push(...ee(c, w, h, v));
          const E = [c, ...R],
            S = await re(e, y),
            W = [];
          let F = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((u && W.push(S[x]), d)) {
            const O = Gt(r, s, v);
            W.push(S[O[0]], S[O[1]]);
          }
          if (
            ((F = [...F, { placement: r, overflows: W }]),
            !W.every((O) => O <= 0))
          ) {
            var $, L;
            const O = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
              N = E[O];
            if (N)
              return {
                data: { index: O, overflows: F },
                reset: { placement: N },
              };
            let P =
              (L = F.filter((T) => T.overflows[0] <= 0).sort(
                (T, C) => T.overflows[1] - C.overflows[1]
              )[0]) == null
                ? void 0
                : L.placement;
            if (!P)
              switch (f) {
                case 'bestFit': {
                  var k;
                  const T =
                    (k = F.filter((C) => {
                      if (A) {
                        const D = J(C.placement);
                        return D === b || D === 'y';
                      }
                      return !0;
                    })
                      .map((C) => [
                        C.placement,
                        C.overflows
                          .filter((D) => D > 0)
                          .reduce((D, j) => D + j, 0),
                      ])
                      .sort((C, D) => C[1] - D[1])[0]) == null
                      ? void 0
                      : k[0];
                  T && (P = T);
                  break;
                }
                case 'initialPlacement':
                  P = c;
                  break;
              }
            if (r !== P) return { reset: { placement: P } };
          }
          return {};
        },
      }
    );
  };
async function ce(t, e) {
  const { placement: o, platform: n, elements: r } = t,
    i = await (n.isRTL == null ? void 0 : n.isRTL(r.floating)),
    s = Q(o),
    c = et(o),
    l = J(o) === 'y',
    a = ['left', 'top'].includes(s) ? -1 : 1,
    u = i && l ? -1 : 1,
    d = dt(e, t);
  let {
    mainAxis: g,
    crossAxis: f,
    alignmentAxis: h,
  } = typeof d == 'number'
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    c && typeof h == 'number' && (f = c === 'end' ? h * -1 : h),
    l ? { x: f * u, y: g * a } : { x: g * a, y: f * u }
  );
}
const le = function (t) {
  return (
    t === void 0 && (t = 0),
    {
      name: 'offset',
      options: t,
      async fn(e) {
        var o, n;
        const { x: r, y: i, placement: s, middlewareData: c } = e,
          l = await ce(e, t);
        return s === ((o = c.offset) == null ? void 0 : o.placement) &&
          (n = c.arrow) != null &&
          n.alignmentOffset
          ? {}
          : { x: r + l.x, y: i + l.y, data: { ...l, placement: s } };
      },
    }
  );
};
function Bt(t) {
  const e = I(t);
  let o = parseFloat(e.width) || 0,
    n = parseFloat(e.height) || 0;
  const r = _(t),
    i = r ? t.offsetWidth : o,
    s = r ? t.offsetHeight : n,
    c = rt(o) !== i || rt(n) !== s;
  return c && ((o = i), (n = s)), { width: o, height: n, $: c };
}
function bt(t) {
  return M(t) ? t : t.contextElement;
}
function q(t) {
  const e = bt(t);
  if (!_(e)) return V(1);
  const o = e.getBoundingClientRect(),
    { width: n, height: r, $: i } = Bt(e);
  let s = (i ? rt(o.width) : o.width) / n,
    c = (i ? rt(o.height) : o.height) / r;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: s, y: c }
  );
}
const fe = V(0);
function Wt(t) {
  const e = B(t);
  return !yt() || !e.visualViewport
    ? fe
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function ae(t, e, o) {
  return e === void 0 && (e = !1), !o || (e && o !== B(t)) ? !1 : e;
}
function X(t, e, o, n) {
  e === void 0 && (e = !1), o === void 0 && (o = !1);
  const r = t.getBoundingClientRect(),
    i = bt(t);
  let s = V(1);
  e && (n ? M(n) && (s = q(n)) : (s = q(t)));
  const c = ae(i, o, n) ? Wt(i) : V(0);
  let l = (r.left + c.x) / s.x,
    a = (r.top + c.y) / s.y,
    u = r.width / s.x,
    d = r.height / s.y;
  if (i) {
    const g = B(i),
      f = n && M(n) ? B(n) : n;
    let h = g,
      w = ht(h);
    for (; w && n && f !== h; ) {
      const y = q(w),
        x = w.getBoundingClientRect(),
        b = I(w),
        p = x.left + (w.clientLeft + parseFloat(b.paddingLeft)) * y.x,
        v = x.top + (w.clientTop + parseFloat(b.paddingTop)) * y.y;
      (l *= y.x),
        (a *= y.y),
        (u *= y.x),
        (d *= y.y),
        (l += p),
        (a += v),
        (h = B(w)),
        (w = ht(h));
    }
  }
  return st({ width: u, height: d, x: l, y: a });
}
function Et(t, e) {
  const o = ut(t).scrollLeft;
  return e ? e.left + o : X(H(t)).left + o;
}
function $t(t, e, o) {
  o === void 0 && (o = !1);
  const n = t.getBoundingClientRect(),
    r = n.left + e.scrollLeft - (o ? 0 : Et(t, n)),
    i = n.top + e.scrollTop;
  return { x: r, y: i };
}
function ue(t) {
  let { elements: e, rect: o, offsetParent: n, strategy: r } = t;
  const i = r === 'fixed',
    s = H(n),
    c = e ? at(e.floating) : !1;
  if (n === s || (c && i)) return o;
  let l = { scrollLeft: 0, scrollTop: 0 },
    a = V(1);
  const u = V(0),
    d = _(n);
  if ((d || (!d && !i)) && ((Z(n) !== 'body' || tt(s)) && (l = ut(n)), _(n))) {
    const f = X(n);
    (a = q(n)), (u.x = f.x + n.clientLeft), (u.y = f.y + n.clientTop);
  }
  const g = s && !d && !i ? $t(s, l, !0) : V(0);
  return {
    width: o.width * a.x,
    height: o.height * a.y,
    x: o.x * a.x - l.scrollLeft * a.x + u.x + g.x,
    y: o.y * a.y - l.scrollTop * a.y + u.y + g.y,
  };
}
function de(t) {
  return Array.from(t.getClientRects());
}
function me(t) {
  const e = H(t),
    o = ut(t),
    n = t.ownerDocument.body,
    r = Y(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = Y(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -o.scrollLeft + Et(t);
  const c = -o.scrollTop;
  return (
    I(n).direction === 'rtl' && (s += Y(e.clientWidth, n.clientWidth) - r),
    { width: r, height: i, x: s, y: c }
  );
}
function ge(t, e) {
  const o = B(t),
    n = H(t),
    r = o.visualViewport;
  let i = n.clientWidth,
    s = n.clientHeight,
    c = 0,
    l = 0;
  if (r) {
    (i = r.width), (s = r.height);
    const a = yt();
    (!a || (a && e === 'fixed')) && ((c = r.offsetLeft), (l = r.offsetTop));
  }
  return { width: i, height: s, x: c, y: l };
}
function he(t, e) {
  const o = X(t, !0, e === 'fixed'),
    n = o.top + t.clientTop,
    r = o.left + t.clientLeft,
    i = _(t) ? q(t) : V(1),
    s = t.clientWidth * i.x,
    c = t.clientHeight * i.y,
    l = r * i.x,
    a = n * i.y;
  return { width: s, height: c, x: l, y: a };
}
function At(t, e, o) {
  let n;
  if (e === 'viewport') n = ge(t, o);
  else if (e === 'document') n = me(H(t));
  else if (M(e)) n = he(e, o);
  else {
    const r = Wt(t);
    n = { x: e.x - r.x, y: e.y - r.y, width: e.width, height: e.height };
  }
  return st(n);
}
function It(t, e) {
  const o = z(t);
  return o === e || !M(o) || U(o) ? !1 : I(o).position === 'fixed' || It(o, e);
}
function pe(t, e) {
  const o = e.get(t);
  if (o) return o;
  let n = G(t, [], !1).filter((c) => M(c) && Z(c) !== 'body'),
    r = null;
  const i = I(t).position === 'fixed';
  let s = i ? z(t) : t;
  for (; M(s) && !U(s); ) {
    const c = I(s),
      l = xt(s);
    !l && c.position === 'fixed' && (r = null),
      (
        i
          ? !l && !r
          : (!l &&
              c.position === 'static' &&
              !!r &&
              ['absolute', 'fixed'].includes(r.position)) ||
            (tt(s) && !l && It(t, s))
      )
        ? (n = n.filter((u) => u !== s))
        : (r = c),
      (s = z(s));
  }
  return e.set(t, n), n;
}
function we(t) {
  let { element: e, boundary: o, rootBoundary: n, strategy: r } = t;
  const s = [
      ...(o === 'clippingAncestors'
        ? at(e)
          ? []
          : pe(e, this._c)
        : [].concat(o)),
      n,
    ],
    c = s[0],
    l = s.reduce(
      (a, u) => {
        const d = At(e, u, r);
        return (
          (a.top = Y(d.top, a.top)),
          (a.right = K(d.right, a.right)),
          (a.bottom = K(d.bottom, a.bottom)),
          (a.left = Y(d.left, a.left)),
          a
        );
      },
      At(e, c, r)
    );
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function xe(t) {
  const { width: e, height: o } = Bt(t);
  return { width: e, height: o };
}
function ye(t, e, o) {
  const n = _(e),
    r = H(e),
    i = o === 'fixed',
    s = X(t, !0, i, e);
  let c = { scrollLeft: 0, scrollTop: 0 };
  const l = V(0);
  if (n || (!n && !i))
    if (((Z(e) !== 'body' || tt(r)) && (c = ut(e)), n)) {
      const g = X(e, !0, i, e);
      (l.x = g.x + e.clientLeft), (l.y = g.y + e.clientTop);
    } else r && (l.x = Et(r));
  const a = r && !n && !i ? $t(r, c) : V(0),
    u = s.left + c.scrollLeft - l.x - a.x,
    d = s.top + c.scrollTop - l.y - a.y;
  return { x: u, y: d, width: s.width, height: s.height };
}
function mt(t) {
  return I(t).position === 'static';
}
function Pt(t, e) {
  if (!_(t) || I(t).position === 'fixed') return null;
  if (e) return e(t);
  let o = t.offsetParent;
  return H(t) === o && (o = o.ownerDocument.body), o;
}
function Nt(t, e) {
  const o = B(t);
  if (at(t)) return o;
  if (!_(t)) {
    let r = z(t);
    for (; r && !U(r); ) {
      if (M(r) && !mt(r)) return r;
      r = z(r);
    }
    return o;
  }
  let n = Pt(t, e);
  for (; n && Xt(n) && mt(n); ) n = Pt(n, e);
  return n && U(n) && mt(n) && !xt(n) ? o : n || qt(t) || o;
}
const ve = async function (t) {
  const e = this.getOffsetParent || Nt,
    o = this.getDimensions,
    n = await o(t.floating);
  return {
    reference: ye(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function Re(t) {
  return I(t).direction === 'rtl';
}
const be = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ue,
  getDocumentElement: H,
  getClippingRect: we,
  getOffsetParent: Nt,
  getElementRects: ve,
  getClientRects: de,
  getDimensions: xe,
  getScale: q,
  isElement: M,
  isRTL: Re,
};
function Vt(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
function Ee(t, e) {
  let o = null,
    n;
  const r = H(t);
  function i() {
    var c;
    clearTimeout(n), (c = o) == null || c.disconnect(), (o = null);
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), i();
    const a = t.getBoundingClientRect(),
      { left: u, top: d, width: g, height: f } = a;
    if ((c || e(), !g || !f)) return;
    const h = nt(d),
      w = nt(r.clientWidth - (u + g)),
      y = nt(r.clientHeight - (d + f)),
      x = nt(u),
      p = {
        rootMargin: -h + 'px ' + -w + 'px ' + -y + 'px ' + -x + 'px',
        threshold: Y(0, K(1, l)) || 1,
      };
    let v = !0;
    function R(A) {
      const E = A[0].intersectionRatio;
      if (E !== l) {
        if (!v) return s();
        E
          ? s(!1, E)
          : (n = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      E === 1 && !Vt(a, t.getBoundingClientRect()) && s(), (v = !1);
    }
    try {
      o = new IntersectionObserver(R, { ...p, root: r.ownerDocument });
    } catch {
      o = new IntersectionObserver(R, p);
    }
    o.observe(t);
  }
  return s(!0), i;
}
function He(t, e, o, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == 'function',
      layoutShift: c = typeof IntersectionObserver == 'function',
      animationFrame: l = !1,
    } = n,
    a = bt(t),
    u = r || i ? [...(a ? G(a) : []), ...G(e)] : [];
  u.forEach((x) => {
    r && x.addEventListener('scroll', o, { passive: !0 }),
      i && x.addEventListener('resize', o);
  });
  const d = a && c ? Ee(a, o) : null;
  let g = -1,
    f = null;
  s &&
    ((f = new ResizeObserver((x) => {
      let [b] = x;
      b &&
        b.target === a &&
        f &&
        (f.unobserve(e),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var p;
          (p = f) == null || p.observe(e);
        }))),
        o();
    })),
    a && !l && f.observe(a),
    f.observe(e));
  let h,
    w = l ? X(t) : null;
  l && y();
  function y() {
    const x = X(t);
    w && !Vt(w, x) && o(), (w = x), (h = requestAnimationFrame(y));
  }
  return (
    o(),
    () => {
      var x;
      u.forEach((b) => {
        r && b.removeEventListener('scroll', o),
          i && b.removeEventListener('resize', o);
      }),
        d == null || d(),
        (x = f) == null || x.disconnect(),
        (f = null),
        l && cancelAnimationFrame(h);
    }
  );
}
const Ce = le,
  Oe = se,
  St = ie,
  Ae = (t, e, o) => {
    const n = new Map(),
      r = { platform: be, ...o },
      i = { ...r.platform, _c: n };
    return oe(t, e, { ...r, platform: i });
  };
var ot = typeof document < 'u' ? m.useLayoutEffect : m.useEffect;
function ct(t, e) {
  if (t === e) return !0;
  if (typeof t != typeof e) return !1;
  if (typeof t == 'function' && t.toString() === e.toString()) return !0;
  let o, n, r;
  if (t && e && typeof t == 'object') {
    if (Array.isArray(t)) {
      if (((o = t.length), o !== e.length)) return !1;
      for (n = o; n-- !== 0; ) if (!ct(t[n], e[n])) return !1;
      return !0;
    }
    if (((r = Object.keys(t)), (o = r.length), o !== Object.keys(e).length))
      return !1;
    for (n = o; n-- !== 0; ) if (!{}.hasOwnProperty.call(e, r[n])) return !1;
    for (n = o; n-- !== 0; ) {
      const i = r[n];
      if (!(i === '_owner' && t.$$typeof) && !ct(t[i], e[i])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function _t(t) {
  return typeof window > 'u'
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Lt(t, e) {
  const o = _t(t);
  return Math.round(e * o) / o;
}
function gt(t) {
  const e = m.useRef(t);
  return (
    ot(() => {
      e.current = t;
    }),
    e
  );
}
function Pe(t) {
  t === void 0 && (t = {});
  const {
      placement: e = 'bottom',
      strategy: o = 'absolute',
      middleware: n = [],
      platform: r,
      elements: { reference: i, floating: s } = {},
      transform: c = !0,
      whileElementsMounted: l,
      open: a,
    } = t,
    [u, d] = m.useState({
      x: 0,
      y: 0,
      strategy: o,
      placement: e,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, f] = m.useState(n);
  ct(g, n) || f(n);
  const [h, w] = m.useState(null),
    [y, x] = m.useState(null),
    b = m.useCallback((C) => {
      C !== A.current && ((A.current = C), w(C));
    }, []),
    p = m.useCallback((C) => {
      C !== E.current && ((E.current = C), x(C));
    }, []),
    v = i || h,
    R = s || y,
    A = m.useRef(null),
    E = m.useRef(null),
    S = m.useRef(u),
    W = l != null,
    F = gt(l),
    $ = gt(r),
    L = gt(a),
    k = m.useCallback(() => {
      if (!A.current || !E.current) return;
      const C = { placement: e, strategy: o, middleware: g };
      $.current && (C.platform = $.current),
        Ae(A.current, E.current, C).then((D) => {
          const j = { ...D, isPositioned: L.current !== !1 };
          O.current &&
            !ct(S.current, j) &&
            ((S.current = j),
            zt.flushSync(() => {
              d(j);
            }));
        });
    }, [g, e, o, $, L]);
  ot(() => {
    a === !1 &&
      S.current.isPositioned &&
      ((S.current.isPositioned = !1), d((C) => ({ ...C, isPositioned: !1 })));
  }, [a]);
  const O = m.useRef(!1);
  ot(
    () => (
      (O.current = !0),
      () => {
        O.current = !1;
      }
    ),
    []
  ),
    ot(() => {
      if ((v && (A.current = v), R && (E.current = R), v && R)) {
        if (F.current) return F.current(v, R, k);
        k();
      }
    }, [v, R, k, F, W]);
  const N = m.useMemo(
      () => ({ reference: A, floating: E, setReference: b, setFloating: p }),
      [b, p]
    ),
    P = m.useMemo(() => ({ reference: v, floating: R }), [v, R]),
    T = m.useMemo(() => {
      const C = { position: o, left: 0, top: 0 };
      if (!P.floating) return C;
      const D = Lt(P.floating, u.x),
        j = Lt(P.floating, u.y);
      return c
        ? {
            ...C,
            transform: 'translate(' + D + 'px, ' + j + 'px)',
            ...(_t(P.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: o, left: D, top: j };
    }, [o, c, P.floating, u.x, u.y]);
  return m.useMemo(
    () => ({ ...u, update: k, refs: N, elements: P, floatingStyles: T }),
    [u, k, N, P, T]
  );
}
const Se = (t) => {
    function e(o) {
      return {}.hasOwnProperty.call(o, 'current');
    }
    return {
      name: 'arrow',
      options: t,
      fn(o) {
        const { element: n, padding: r } = typeof t == 'function' ? t(o) : t;
        return n && e(n)
          ? n.current != null
            ? St({ element: n.current, padding: r }).fn(o)
            : {}
          : n
            ? St({ element: n, padding: r }).fn(o)
            : {};
      },
    };
  },
  je = (t, e) => ({ ...Ce(t), options: [t, e] }),
  ze = (t, e) => ({ ...Oe(t), options: [t, e] }),
  Ye = (t, e) => ({ ...Se(t), options: [t, e] }),
  Ht = { ...Yt },
  Le = Ht.useInsertionEffect,
  Te = Le || ((t) => t());
function De(t) {
  const e = m.useRef(() => {});
  return (
    Te(() => {
      e.current = t;
    }),
    m.useCallback(function () {
      for (var o = arguments.length, n = new Array(o), r = 0; r < o; r++)
        n[r] = arguments[r];
      return e.current == null ? void 0 : e.current(...n);
    }, [])
  );
}
var lt = typeof document < 'u' ? m.useLayoutEffect : m.useEffect;
function wt() {
  return (
    (wt = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o)
              Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
          }
          return t;
        }),
    wt.apply(this, arguments)
  );
}
let Tt = !1,
  Fe = 0;
const Dt = () => 'floating-ui-' + Math.random().toString(36).slice(2, 6) + Fe++;
function Me() {
  const [t, e] = m.useState(() => (Tt ? Dt() : void 0));
  return (
    lt(() => {
      t == null && e(Dt());
    }, []),
    m.useEffect(() => {
      Tt = !0;
    }, []),
    t
  );
}
const ke = Ht.useId,
  jt = ke || Me,
  Xe = m.forwardRef(function (e, o) {
    const {
        context: {
          placement: n,
          elements: { floating: r },
          middlewareData: { arrow: i, shift: s },
        },
        width: c = 14,
        height: l = 7,
        tipRadius: a = 0,
        strokeWidth: u = 0,
        staticOffset: d,
        stroke: g,
        d: f,
        style: { transform: h, ...w } = {},
        ...y
      } = e,
      x = jt(),
      [b, p] = m.useState(!1);
    if (
      (lt(() => {
        if (!r) return;
        I(r).direction === 'rtl' && p(!0);
      }, [r]),
      !r)
    )
      return null;
    const [v, R] = n.split('-'),
      A = v === 'top' || v === 'bottom';
    let E = d;
    ((A && s != null && s.x) || (!A && s != null && s.y)) && (E = null);
    const S = u * 2,
      W = S / 2,
      F = (c / 2) * (a / -8 + 1),
      $ = ((l / 2) * a) / 4,
      L = !!f,
      k = E && R === 'end' ? 'bottom' : 'top';
    let O = E && R === 'end' ? 'right' : 'left';
    E && b && (O = R === 'end' ? 'left' : 'right');
    const N = (i == null ? void 0 : i.x) != null ? E || i.x : '',
      P = (i == null ? void 0 : i.y) != null ? E || i.y : '',
      T =
        f ||
        'M0,0' +
          (' H' + c) +
          (' L' + (c - F) + ',' + (l - $)) +
          (' Q' + c / 2 + ',' + l + ' ' + F + ',' + (l - $)) +
          ' Z',
      C = {
        top: L ? 'rotate(180deg)' : '',
        left: L ? 'rotate(90deg)' : 'rotate(-90deg)',
        bottom: L ? '' : 'rotate(180deg)',
        right: L ? 'rotate(-90deg)' : 'rotate(90deg)',
      }[v];
    return m.createElement(
      'svg',
      wt({}, y, {
        'aria-hidden': !0,
        ref: o,
        width: L ? c : c + S,
        height: c,
        viewBox: '0 0 ' + c + ' ' + (l > c ? l : c),
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          [O]: N,
          [k]: P,
          [v]: A || L ? '100%' : 'calc(100% - ' + S / 2 + 'px)',
          transform: [C, h].filter((D) => !!D).join(' '),
          ...w,
        },
      }),
      S > 0 &&
        m.createElement('path', {
          clipPath: 'url(#' + x + ')',
          fill: 'none',
          stroke: g,
          strokeWidth: S + (f ? 0 : 1),
          d: T,
        }),
      m.createElement('path', { stroke: S && !f ? y.fill : 'none', d: T }),
      m.createElement(
        'clipPath',
        { id: x },
        m.createElement('rect', {
          x: -W,
          y: W * (L ? -1 : 1),
          width: c + S,
          height: c,
        })
      )
    );
  });
function Be() {
  const t = new Map();
  return {
    emit(e, o) {
      var n;
      (n = t.get(e)) == null || n.forEach((r) => r(o));
    },
    on(e, o) {
      t.set(e, [...(t.get(e) || []), o]);
    },
    off(e, o) {
      var n;
      t.set(
        e,
        ((n = t.get(e)) == null ? void 0 : n.filter((r) => r !== o)) || []
      );
    },
  };
}
const We = m.createContext(null),
  $e = m.createContext(null),
  Ie = () => {
    var t;
    return ((t = m.useContext(We)) == null ? void 0 : t.id) || null;
  },
  Ne = () => m.useContext($e);
function Ve(t) {
  const { open: e = !1, onOpenChange: o, elements: n } = t,
    r = jt(),
    i = m.useRef({}),
    [s] = m.useState(() => Be()),
    c = Ie() != null,
    [l, a] = m.useState(n.reference),
    u = De((f, h, w) => {
      (i.current.openEvent = f ? h : void 0),
        s.emit('openchange', { open: f, event: h, reason: w, nested: c }),
        o == null || o(f, h, w);
    }),
    d = m.useMemo(() => ({ setPositionReference: a }), []),
    g = m.useMemo(
      () => ({
        reference: l || n.reference || null,
        floating: n.floating || null,
        domReference: n.reference,
      }),
      [l, n.reference, n.floating]
    );
  return m.useMemo(
    () => ({
      dataRef: i,
      open: e,
      onOpenChange: u,
      elements: g,
      events: s,
      floatingId: r,
      refs: d,
    }),
    [e, u, g, s, r, d]
  );
}
function qe(t) {
  t === void 0 && (t = {});
  const { nodeId: e } = t,
    o = Ve({
      ...t,
      elements: { reference: null, floating: null, ...t.elements },
    }),
    n = t.rootContext || o,
    r = n.elements,
    [i, s] = m.useState(null),
    [c, l] = m.useState(null),
    u = (r == null ? void 0 : r.domReference) || i,
    d = m.useRef(null),
    g = Ne();
  lt(() => {
    u && (d.current = u);
  }, [u]);
  const f = Pe({ ...t, elements: { ...r, ...(c && { reference: c }) } }),
    h = m.useCallback(
      (p) => {
        const v = M(p)
          ? {
              getBoundingClientRect: () => p.getBoundingClientRect(),
              contextElement: p,
            }
          : p;
        l(v), f.refs.setReference(v);
      },
      [f.refs]
    ),
    w = m.useCallback(
      (p) => {
        (M(p) || p === null) && ((d.current = p), s(p)),
          (M(f.refs.reference.current) ||
            f.refs.reference.current === null ||
            (p !== null && !M(p))) &&
            f.refs.setReference(p);
      },
      [f.refs]
    ),
    y = m.useMemo(
      () => ({
        ...f.refs,
        setReference: w,
        setPositionReference: h,
        domReference: d,
      }),
      [f.refs, w, h]
    ),
    x = m.useMemo(() => ({ ...f.elements, domReference: u }), [f.elements, u]),
    b = m.useMemo(
      () => ({ ...f, ...n, refs: y, elements: x, nodeId: e }),
      [f, y, x, e, n]
    );
  return (
    lt(() => {
      n.dataRef.current.floatingContext = b;
      const p = g == null ? void 0 : g.nodesRef.current.find((v) => v.id === e);
      p && (p.context = b);
    }),
    m.useMemo(() => ({ ...f, context: b, refs: y, elements: x }), [f, y, x, b])
  );
}
export { Xe as F, Ye as a, He as b, ze as f, je as o, qe as u };
