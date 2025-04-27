import { r as e, R as T } from './vendor-BEztx3UH.js';
import { l as w, R as p } from './react-router-BqYFP2zy.js';
import { c as F } from './@remix-run-BIrGyY9Z.js';
/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const U = '6';
try {
  window.__reactRouterVersion = U;
} catch {}
const E = 'startTransition',
  u = T[E];
function _(t) {
  let { basename: R, children: S, future: s, window: h } = t,
    i = e.useRef();
  i.current == null && (i.current = F({ window: h, v5Compat: !0 }));
  let r = i.current,
    [o, n] = e.useState({ action: r.action, location: r.location }),
    { v7_startTransition: a } = s || {},
    c = e.useCallback(
      (l) => {
        a && u ? u(() => n(l)) : n(l);
      },
      [n, a]
    );
  return (
    e.useLayoutEffect(() => r.listen(c), [r, c]),
    e.useEffect(() => w(s), [s]),
    e.createElement(p, {
      basename: R,
      children: S,
      location: o.location,
      navigationType: o.action,
      navigator: r,
      future: s,
    })
  );
}
var m;
(function (t) {
  (t.UseScrollRestoration = 'useScrollRestoration'),
    (t.UseSubmit = 'useSubmit'),
    (t.UseSubmitFetcher = 'useSubmitFetcher'),
    (t.UseFetcher = 'useFetcher'),
    (t.useViewTransitionState = 'useViewTransitionState');
})(m || (m = {}));
var f;
(function (t) {
  (t.UseFetcher = 'useFetcher'),
    (t.UseFetchers = 'useFetchers'),
    (t.UseScrollRestoration = 'useScrollRestoration');
})(f || (f = {}));
export { _ as B };
