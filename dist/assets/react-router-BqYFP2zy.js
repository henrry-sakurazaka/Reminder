import { r as a } from './vendor-BEztx3UH.js';
import {
  i as v,
  A as F,
  p as O,
  s as z,
  m as J,
  j as U,
  g as W,
  r as V,
  a as A,
} from './@remix-run-BIrGyY9Z.js';
/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function b() {
  return (
    (b = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    b.apply(this, arguments)
  );
}
const L = a.createContext(null),
  $ = a.createContext(null),
  R = a.createContext(null),
  P = a.createContext(null),
  y = a.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  _ = a.createContext(null);
function B() {
  return a.useContext(P) != null;
}
function j() {
  return (B() || v(!1), a.useContext(P).location);
}
function D(e) {
  a.useContext(R).static || a.useLayoutEffect(e);
}
function se() {
  let { isDataRoute: e } = a.useContext(y);
  return e ? ne() : q();
}
function q() {
  B() || v(!1);
  let e = a.useContext(L),
    { basename: t, future: r, navigator: n } = a.useContext(R),
    { matches: l } = a.useContext(y),
    { pathname: d } = j(),
    i = JSON.stringify(W(l, r.v7_relativeSplatPath)),
    u = a.useRef(!1);
  return (
    D(() => {
      u.current = !0;
    }),
    a.useCallback(
      function (c, s) {
        if ((s === void 0 && (s = {}), !u.current)) return;
        if (typeof c == 'number') {
          n.go(c);
          return;
        }
        let o = V(c, JSON.parse(i), d, s.relative === 'path');
        (e == null &&
          t !== '/' &&
          (o.pathname = o.pathname === '/' ? t : U([t, o.pathname])),
          (s.replace ? n.replace : n.push)(o, s.state, s));
      },
      [t, n, i, d, e]
    )
  );
}
function G(e, t) {
  return K(e, t);
}
function K(e, t, r, n) {
  B() || v(!1);
  let { navigator: l, static: d } = a.useContext(R),
    { matches: i } = a.useContext(y),
    u = i[i.length - 1],
    g = u ? u.params : {};
  u && u.pathname;
  let c = u ? u.pathnameBase : '/';
  u && u.route;
  let s = j(),
    o;
  if (t) {
    var p;
    let f = typeof t == 'string' ? O(t) : t;
    (c === '/' || ((p = f.pathname) != null && p.startsWith(c)) || v(!1),
      (o = f));
  } else o = s;
  let h = o.pathname || '/',
    m = h;
  if (c !== '/') {
    let f = c.replace(/^\//, '').split('/');
    m = '/' + h.replace(/^\//, '').split('/').slice(f.length).join('/');
  }
  let x = J(e, { pathname: m }),
    C = Z(
      x &&
        x.map((f) =>
          Object.assign({}, f, {
            params: Object.assign({}, g, f.params),
            pathname: U([
              c,
              l.encodeLocation
                ? l.encodeLocation(f.pathname).pathname
                : f.pathname,
            ]),
            pathnameBase:
              f.pathnameBase === '/'
                ? c
                : U([
                    c,
                    l.encodeLocation
                      ? l.encodeLocation(f.pathnameBase).pathname
                      : f.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      n
    );
  return t && C
    ? a.createElement(
        P.Provider,
        {
          value: {
            location: b(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              o
            ),
            navigationType: F.Pop,
          },
        },
        C
      )
    : C;
}
function Q() {
  let e = re(),
    t = A(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    l = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return a.createElement(
    a.Fragment,
    null,
    a.createElement('h2', null, 'Unexpected Application Error!'),
    a.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    r ? a.createElement('pre', { style: l }, r) : null,
    null
  );
}
const S = a.createElement(Q, null);
class X extends a.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ||
      (r.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : r.error,
          location: r.location,
          revalidation: t.revalidation || r.revalidation,
        };
  }
  componentDidCatch(t, r) {
    console.error(
      'React Router caught the following error during render',
      t,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? a.createElement(
          y.Provider,
          { value: this.props.routeContext },
          a.createElement(_.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Y(e) {
  let { routeContext: t, match: r, children: n } = e,
    l = a.useContext(L);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = r.route.id),
    a.createElement(y.Provider, { value: t }, n)
  );
}
function Z(e, t, r, n) {
  var l;
  if (
    (t === void 0 && (t = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    e == null)
  ) {
    var d;
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (
      (d = n) != null &&
      d.v7_partialHydration &&
      t.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      e = r.matches;
    else return null;
  }
  let i = e,
    u = (l = r) == null ? void 0 : l.errors;
  if (u != null) {
    let s = i.findIndex(
      (o) => o.route.id && (u == null ? void 0 : u[o.route.id]) !== void 0
    );
    (s >= 0 || v(!1), (i = i.slice(0, Math.min(i.length, s + 1))));
  }
  let g = !1,
    c = -1;
  if (r && n && n.v7_partialHydration)
    for (let s = 0; s < i.length; s++) {
      let o = i[s];
      if (
        ((o.route.HydrateFallback || o.route.hydrateFallbackElement) && (c = s),
        o.route.id)
      ) {
        let { loaderData: p, errors: h } = r,
          m =
            o.route.loader &&
            p[o.route.id] === void 0 &&
            (!h || h[o.route.id] === void 0);
        if (o.route.lazy || m) {
          ((g = !0), c >= 0 ? (i = i.slice(0, c + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((s, o, p) => {
    let h,
      m = !1,
      x = null,
      C = null;
    r &&
      ((h = u && o.route.id ? u[o.route.id] : void 0),
      (x = o.route.errorElement || S),
      g &&
        (c < 0 && p === 0
          ? (ae('route-fallback'), (m = !0), (C = null))
          : c === p &&
            ((m = !0), (C = o.route.hydrateFallbackElement || null))));
    let f = t.concat(i.slice(0, p + 1)),
      N = () => {
        let E;
        return (
          h
            ? (E = x)
            : m
              ? (E = C)
              : o.route.Component
                ? (E = a.createElement(o.route.Component, null))
                : o.route.element
                  ? (E = o.route.element)
                  : (E = s),
          a.createElement(Y, {
            match: o,
            routeContext: { outlet: s, matches: f, isDataRoute: r != null },
            children: E,
          })
        );
      };
    return r && (o.route.ErrorBoundary || o.route.errorElement || p === 0)
      ? a.createElement(X, {
          location: r.location,
          revalidation: r.revalidation,
          component: x,
          error: h,
          children: N(),
          routeContext: { outlet: null, matches: f, isDataRoute: !0 },
        })
      : N();
  }, null);
}
var M = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    );
  })(M || {}),
  T = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(T || {});
function H(e) {
  let t = a.useContext(L);
  return (t || v(!1), t);
}
function ee(e) {
  let t = a.useContext($);
  return (t || v(!1), t);
}
function te(e) {
  let t = a.useContext(y);
  return (t || v(!1), t);
}
function w(e) {
  let t = te(),
    r = t.matches[t.matches.length - 1];
  return (r.route.id || v(!1), r.route.id);
}
function re() {
  var e;
  let t = a.useContext(_),
    r = ee(),
    n = w();
  return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[n];
}
function ne() {
  let { router: e } = H(M.UseNavigateStable),
    t = w(T.UseNavigateStable),
    r = a.useRef(!1);
  return (
    D(() => {
      r.current = !0;
    }),
    a.useCallback(
      function (l, d) {
        (d === void 0 && (d = {}),
          r.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(l, b({ fromRouteId: t }, d))));
      },
      [e, t]
    )
  );
}
const k = {};
function ae(e, t, r) {
  k[e] || (k[e] = !0);
}
function ue(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function oe(e) {
  v(!1);
}
function ce(e) {
  let {
    basename: t = '/',
    children: r = null,
    location: n,
    navigationType: l = F.Pop,
    navigator: d,
    static: i = !1,
    future: u,
  } = e;
  B() && v(!1);
  let g = t.replace(/^\/*/, '/'),
    c = a.useMemo(
      () => ({
        basename: g,
        navigator: d,
        static: i,
        future: b({ v7_relativeSplatPath: !1 }, u),
      }),
      [g, u, d, i]
    );
  typeof n == 'string' && (n = O(n));
  let {
      pathname: s = '/',
      search: o = '',
      hash: p = '',
      state: h = null,
      key: m = 'default',
    } = n,
    x = a.useMemo(() => {
      let C = z(s, g);
      return C == null
        ? null
        : {
            location: { pathname: C, search: o, hash: p, state: h, key: m },
            navigationType: l,
          };
    }, [g, s, o, p, h, m, l]);
  return x == null
    ? null
    : a.createElement(
        R.Provider,
        { value: c },
        a.createElement(P.Provider, { children: r, value: x })
      );
}
function de(e) {
  let { children: t, location: r } = e;
  return G(I(t), r);
}
new Promise(() => {});
function I(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    a.Children.forEach(e, (n, l) => {
      if (!a.isValidElement(n)) return;
      let d = [...t, l];
      if (n.type === a.Fragment) {
        r.push.apply(r, I(n.props.children, d));
        return;
      }
      (n.type !== oe && v(!1), !n.props.index || !n.props.children || v(!1));
      let i = {
        id: n.props.id || d.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      (n.props.children && (i.children = I(n.props.children, d)), r.push(i));
    }),
    r
  );
}
export { ce as R, de as a, oe as b, ue as l, se as u };
