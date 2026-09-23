import {
  g as on,
  p as kh,
  B as B_,
} from './vite-plugin-node-polyfills-CYF0W5wK.js';
import { _ as Ta } from './tslib-BGVaTf34.js';
import { o as q_ } from './idb-BXWtuYvb.js';
var Fc = {};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dh = { NODE_ADMIN: !1, SDK_VERSION: '${JSCORE_VERSION}' };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const D = function (n, e) {
    if (!n) throw Xn(e);
  },
  Xn = function (n) {
    return new Error(
      'Firebase Database (' + Dh.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + n
    );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oh = function (n) {
    const e = [];
    let t = 0;
    for (let i = 0; i < n.length; i++) {
      let s = n.charCodeAt(i);
      s < 128
        ? (e[t++] = s)
        : s < 2048
          ? ((e[t++] = (s >> 6) | 192), (e[t++] = (s & 63) | 128))
          : (s & 64512) === 55296 &&
              i + 1 < n.length &&
              (n.charCodeAt(i + 1) & 64512) === 56320
            ? ((s = 65536 + ((s & 1023) << 10) + (n.charCodeAt(++i) & 1023)),
              (e[t++] = (s >> 18) | 240),
              (e[t++] = ((s >> 12) & 63) | 128),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128))
            : ((e[t++] = (s >> 12) | 224),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128));
    }
    return e;
  },
  W_ = function (n) {
    const e = [];
    let t = 0,
      i = 0;
    for (; t < n.length; ) {
      const s = n[t++];
      if (s < 128) e[i++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const r = n[t++];
        e[i++] = String.fromCharCode(((s & 31) << 6) | (r & 63));
      } else if (s > 239 && s < 365) {
        const r = n[t++],
          a = n[t++],
          l = n[t++],
          c =
            (((s & 7) << 18) | ((r & 63) << 12) | ((a & 63) << 6) | (l & 63)) -
            65536;
        ((e[i++] = String.fromCharCode(55296 + (c >> 10))),
          (e[i++] = String.fromCharCode(56320 + (c & 1023))));
      } else {
        const r = n[t++],
          a = n[t++];
        e[i++] = String.fromCharCode(
          ((s & 15) << 12) | ((r & 63) << 6) | (a & 63)
        );
      }
    }
    return e.join('');
  },
  Ia = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + '+/=';
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + '-_.';
    },
    HAS_NATIVE_SUPPORT: typeof atob == 'function',
    encodeByteArray(n, e) {
      if (!Array.isArray(n))
        throw Error('encodeByteArray takes an array as a parameter');
      this.init_();
      const t = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        i = [];
      for (let s = 0; s < n.length; s += 3) {
        const r = n[s],
          a = s + 1 < n.length,
          l = a ? n[s + 1] : 0,
          c = s + 2 < n.length,
          h = c ? n[s + 2] : 0,
          f = r >> 2,
          _ = ((r & 3) << 4) | (l >> 4);
        let g = ((l & 15) << 2) | (h >> 6),
          R = h & 63;
        (c || ((R = 64), a || (g = 64)), i.push(t[f], t[_], t[g], t[R]));
      }
      return i.join('');
    },
    encodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(n)
        : this.encodeByteArray(Oh(n), e);
    },
    decodeString(n, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(n)
        : W_(this.decodeStringToByteArray(n, e));
    },
    decodeStringToByteArray(n, e) {
      this.init_();
      const t = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        i = [];
      for (let s = 0; s < n.length; ) {
        const r = t[n.charAt(s++)],
          l = s < n.length ? t[n.charAt(s)] : 0;
        ++s;
        const h = s < n.length ? t[n.charAt(s)] : 64;
        ++s;
        const _ = s < n.length ? t[n.charAt(s)] : 64;
        if ((++s, r == null || l == null || h == null || _ == null))
          throw new j_();
        const g = (r << 2) | (l >> 4);
        if ((i.push(g), h !== 64)) {
          const R = ((l << 4) & 240) | (h >> 2);
          if ((i.push(R), _ !== 64)) {
            const P = ((h << 6) & 192) | _;
            i.push(P);
          }
        }
      }
      return i;
    },
    init_() {
      if (!this.byteToCharMap_) {
        ((this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {}));
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          ((this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n)));
      }
    },
  };
class j_ extends Error {
  constructor() {
    (super(...arguments), (this.name = 'DecodeBase64StringError'));
  }
}
const Vh = function (n) {
    const e = Oh(n);
    return Ia.encodeByteArray(e, !0);
  },
  nr = function (n) {
    return Vh(n).replace(/\./g, '');
  },
  ir = function (n) {
    try {
      return Ia.decodeString(n, !0);
    } catch (e) {
      console.error('base64Decode failed: ', e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $_(n) {
  return Mh(void 0, n);
}
function Mh(n, e) {
  if (!(e instanceof Object)) return e;
  switch (e.constructor) {
    case Date:
      const t = e;
      return new Date(t.getTime());
    case Object:
      n === void 0 && (n = {});
      break;
    case Array:
      n = [];
      break;
    default:
      return e;
  }
  for (const t in e) !e.hasOwnProperty(t) || !H_(t) || (n[t] = Mh(n[t], e[t]));
  return n;
}
function H_(n) {
  return n !== '__proto__';
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function G_() {
  if (typeof self < 'u') return self;
  if (typeof window < 'u') return window;
  if (typeof on < 'u') return on;
  throw new Error('Unable to locate global object.');
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const z_ = () => G_().__FIREBASE_DEFAULTS__,
  K_ = () => {
    if (typeof kh > 'u' || typeof Fc > 'u') return;
    const n = Fc.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  Q_ = () => {
    if (typeof document > 'u') return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = n && ir(n[1]);
    return e && JSON.parse(e);
  },
  Sr = () => {
    try {
      return z_() || K_() || Q_();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  Lh = (n) => {
    var e, t;
    return (t =
      (e = Sr()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || t === void 0
      ? void 0
      : t[n];
  },
  Y_ = (n) => {
    const e = Lh(n);
    if (!e) return;
    const t = e.lastIndexOf(':');
    if (t <= 0 || t + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const i = parseInt(e.substring(t + 1), 10);
    return e[0] === '[' ? [e.substring(1, t - 1), i] : [e.substring(0, t), i];
  },
  xh = () => {
    var n;
    return (n = Sr()) === null || n === void 0 ? void 0 : n.config;
  },
  Fh = (n) => {
    var e;
    return (e = Sr()) === null || e === void 0 ? void 0 : e[`_${n}`];
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wa {
  constructor() {
    ((this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, t) => {
        ((this.resolve = e), (this.reject = t));
      })));
  }
  wrapCallback(e) {
    return (t, i) => {
      (t ? this.reject(t) : this.resolve(i),
        typeof e == 'function' &&
          (this.promise.catch(() => {}), e.length === 1 ? e(t) : e(t, i)));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function X_(n, e) {
  if (n.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const t = { alg: 'none', type: 'JWT' },
    i = e || 'demo-project',
    s = n.iat || 0,
    r = n.sub || n.user_id;
  if (!r)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const a = Object.assign(
    {
      iss: `https://securetoken.google.com/${i}`,
      aud: i,
      iat: s,
      exp: s + 3600,
      auth_time: s,
      sub: r,
      user_id: r,
      firebase: { sign_in_provider: 'custom', identities: {} },
    },
    n
  );
  return [nr(JSON.stringify(t)), nr(JSON.stringify(a)), ''].join('.');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Me() {
  return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
    ? navigator.userAgent
    : '';
}
function Aa() {
  return (
    typeof window < 'u' &&
    !!(window.cordova || window.phonegap || window.PhoneGap) &&
    /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())
  );
}
function J_() {
  var n;
  const e = (n = Sr()) === null || n === void 0 ? void 0 : n.forceEnvironment;
  if (e === 'node') return !0;
  if (e === 'browser') return !1;
  try {
    return Object.prototype.toString.call(on.process) === '[object process]';
  } catch {
    return !1;
  }
}
function Z_() {
  return typeof navigator < 'u' && navigator.userAgent === 'Cloudflare-Workers';
}
function em() {
  const n =
    typeof chrome == 'object'
      ? chrome.runtime
      : typeof browser == 'object'
        ? browser.runtime
        : void 0;
  return typeof n == 'object' && n.id !== void 0;
}
function Uh() {
  return typeof navigator == 'object' && navigator.product === 'ReactNative';
}
function tm() {
  const n = Me();
  return n.indexOf('MSIE ') >= 0 || n.indexOf('Trident/') >= 0;
}
function nm() {
  return Dh.NODE_ADMIN === !0;
}
function im() {
  return (
    !J_() &&
    !!navigator.userAgent &&
    navigator.userAgent.includes('Safari') &&
    !navigator.userAgent.includes('Chrome')
  );
}
function sm() {
  try {
    return typeof indexedDB == 'object';
  } catch {
    return !1;
  }
}
function rm() {
  return new Promise((n, e) => {
    try {
      let t = !0;
      const i = 'validate-browser-context-for-indexeddb-analytics-module',
        s = self.indexedDB.open(i);
      ((s.onsuccess = () => {
        (s.result.close(), t || self.indexedDB.deleteDatabase(i), n(!0));
      }),
        (s.onupgradeneeded = () => {
          t = !1;
        }),
        (s.onerror = () => {
          var r;
          e(
            ((r = s.error) === null || r === void 0 ? void 0 : r.message) || ''
          );
        }));
    } catch (t) {
      e(t);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const om = 'FirebaseError';
class At extends Error {
  constructor(e, t, i) {
    (super(t),
      (this.code = e),
      (this.customData = i),
      (this.name = om),
      Object.setPrototypeOf(this, At.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, is.prototype.create));
  }
}
class is {
  constructor(e, t, i) {
    ((this.service = e), (this.serviceName = t), (this.errors = i));
  }
  create(e, ...t) {
    const i = t[0] || {},
      s = `${this.service}/${e}`,
      r = this.errors[e],
      a = r ? am(r, i) : 'Error',
      l = `${this.serviceName}: ${a} (${s}).`;
    return new At(s, l, i);
  }
}
function am(n, e) {
  return n.replace(lm, (t, i) => {
    const s = e[i];
    return s != null ? String(s) : `<${i}?>`;
  });
}
const lm = /\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $i(n) {
  return JSON.parse(n);
}
function Te(n) {
  return JSON.stringify(n);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bh = function (n) {
    let e = {},
      t = {},
      i = {},
      s = '';
    try {
      const r = n.split('.');
      ((e = $i(ir(r[0]) || '')),
        (t = $i(ir(r[1]) || '')),
        (s = r[2]),
        (i = t.d || {}),
        delete t.d);
    } catch {}
    return { header: e, claims: t, data: i, signature: s };
  },
  cm = function (n) {
    const e = Bh(n),
      t = e.claims;
    return !!t && typeof t == 'object' && t.hasOwnProperty('iat');
  },
  um = function (n) {
    const e = Bh(n).claims;
    return typeof e == 'object' && e.admin === !0;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Rt(n, e) {
  return Object.prototype.hasOwnProperty.call(n, e);
}
function Bn(n, e) {
  if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
}
function Fo(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
function sr(n, e, t) {
  const i = {};
  for (const s in n)
    Object.prototype.hasOwnProperty.call(n, s) &&
      (i[s] = e.call(t, n[s], s, n));
  return i;
}
function rr(n, e) {
  if (n === e) return !0;
  const t = Object.keys(n),
    i = Object.keys(e);
  for (const s of t) {
    if (!i.includes(s)) return !1;
    const r = n[s],
      a = e[s];
    if (Uc(r) && Uc(a)) {
      if (!rr(r, a)) return !1;
    } else if (r !== a) return !1;
  }
  for (const s of i) if (!t.includes(s)) return !1;
  return !0;
}
function Uc(n) {
  return n !== null && typeof n == 'object';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Jn(n) {
  const e = [];
  for (const [t, i] of Object.entries(n))
    Array.isArray(i)
      ? i.forEach((s) => {
          e.push(encodeURIComponent(t) + '=' + encodeURIComponent(s));
        })
      : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(i));
  return e.length ? '&' + e.join('&') : '';
}
function bi(n) {
  const e = {};
  return (
    n
      .replace(/^\?/, '')
      .split('&')
      .forEach((i) => {
        if (i) {
          const [s, r] = i.split('=');
          e[decodeURIComponent(s)] = decodeURIComponent(r);
        }
      }),
    e
  );
}
function Ni(n) {
  const e = n.indexOf('?');
  if (!e) return '';
  const t = n.indexOf('#', e);
  return n.substring(e, t > 0 ? t : void 0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hm {
  constructor() {
    ((this.chain_ = []),
      (this.buf_ = []),
      (this.W_ = []),
      (this.pad_ = []),
      (this.inbuf_ = 0),
      (this.total_ = 0),
      (this.blockSize = 512 / 8),
      (this.pad_[0] = 128));
    for (let e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
    this.reset();
  }
  reset() {
    ((this.chain_[0] = 1732584193),
      (this.chain_[1] = 4023233417),
      (this.chain_[2] = 2562383102),
      (this.chain_[3] = 271733878),
      (this.chain_[4] = 3285377520),
      (this.inbuf_ = 0),
      (this.total_ = 0));
  }
  compress_(e, t) {
    t || (t = 0);
    const i = this.W_;
    if (typeof e == 'string')
      for (let _ = 0; _ < 16; _++)
        ((i[_] =
          (e.charCodeAt(t) << 24) |
          (e.charCodeAt(t + 1) << 16) |
          (e.charCodeAt(t + 2) << 8) |
          e.charCodeAt(t + 3)),
          (t += 4));
    else
      for (let _ = 0; _ < 16; _++)
        ((i[_] = (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]),
          (t += 4));
    for (let _ = 16; _ < 80; _++) {
      const g = i[_ - 3] ^ i[_ - 8] ^ i[_ - 14] ^ i[_ - 16];
      i[_] = ((g << 1) | (g >>> 31)) & 4294967295;
    }
    let s = this.chain_[0],
      r = this.chain_[1],
      a = this.chain_[2],
      l = this.chain_[3],
      c = this.chain_[4],
      h,
      f;
    for (let _ = 0; _ < 80; _++) {
      _ < 40
        ? _ < 20
          ? ((h = l ^ (r & (a ^ l))), (f = 1518500249))
          : ((h = r ^ a ^ l), (f = 1859775393))
        : _ < 60
          ? ((h = (r & a) | (l & (r | a))), (f = 2400959708))
          : ((h = r ^ a ^ l), (f = 3395469782));
      const g = (((s << 5) | (s >>> 27)) + h + c + f + i[_]) & 4294967295;
      ((c = l),
        (l = a),
        (a = ((r << 30) | (r >>> 2)) & 4294967295),
        (r = s),
        (s = g));
    }
    ((this.chain_[0] = (this.chain_[0] + s) & 4294967295),
      (this.chain_[1] = (this.chain_[1] + r) & 4294967295),
      (this.chain_[2] = (this.chain_[2] + a) & 4294967295),
      (this.chain_[3] = (this.chain_[3] + l) & 4294967295),
      (this.chain_[4] = (this.chain_[4] + c) & 4294967295));
  }
  update(e, t) {
    if (e == null) return;
    t === void 0 && (t = e.length);
    const i = t - this.blockSize;
    let s = 0;
    const r = this.buf_;
    let a = this.inbuf_;
    for (; s < t; ) {
      if (a === 0)
        for (; s <= i; ) (this.compress_(e, s), (s += this.blockSize));
      if (typeof e == 'string') {
        for (; s < t; )
          if (((r[a] = e.charCodeAt(s)), ++a, ++s, a === this.blockSize)) {
            (this.compress_(r), (a = 0));
            break;
          }
      } else
        for (; s < t; )
          if (((r[a] = e[s]), ++a, ++s, a === this.blockSize)) {
            (this.compress_(r), (a = 0));
            break;
          }
    }
    ((this.inbuf_ = a), (this.total_ += t));
  }
  digest() {
    const e = [];
    let t = this.total_ * 8;
    this.inbuf_ < 56
      ? this.update(this.pad_, 56 - this.inbuf_)
      : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
    for (let s = this.blockSize - 1; s >= 56; s--)
      ((this.buf_[s] = t & 255), (t /= 256));
    this.compress_(this.buf_);
    let i = 0;
    for (let s = 0; s < 5; s++)
      for (let r = 24; r >= 0; r -= 8)
        ((e[i] = (this.chain_[s] >> r) & 255), ++i);
    return e;
  }
}
function dm(n, e) {
  const t = new fm(n, e);
  return t.subscribe.bind(t);
}
class fm {
  constructor(e, t) {
    ((this.observers = []),
      (this.unsubscribes = []),
      (this.observerCount = 0),
      (this.task = Promise.resolve()),
      (this.finalized = !1),
      (this.onNoObservers = t),
      this.task
        .then(() => {
          e(this);
        })
        .catch((i) => {
          this.error(i);
        }));
  }
  next(e) {
    this.forEachObserver((t) => {
      t.next(e);
    });
  }
  error(e) {
    (this.forEachObserver((t) => {
      t.error(e);
    }),
      this.close(e));
  }
  complete() {
    (this.forEachObserver((e) => {
      e.complete();
    }),
      this.close());
  }
  subscribe(e, t, i) {
    let s;
    if (e === void 0 && t === void 0 && i === void 0)
      throw new Error('Missing Observer.');
    (pm(e, ['next', 'error', 'complete'])
      ? (s = e)
      : (s = { next: e, error: t, complete: i }),
      s.next === void 0 && (s.next = wo),
      s.error === void 0 && (s.error = wo),
      s.complete === void 0 && (s.complete = wo));
    const r = this.unsubscribeOne.bind(this, this.observers.length);
    return (
      this.finalized &&
        this.task.then(() => {
          try {
            this.finalError ? s.error(this.finalError) : s.complete();
          } catch {}
        }),
      this.observers.push(s),
      r
    );
  }
  unsubscribeOne(e) {
    this.observers === void 0 ||
      this.observers[e] === void 0 ||
      (delete this.observers[e],
      (this.observerCount -= 1),
      this.observerCount === 0 &&
        this.onNoObservers !== void 0 &&
        this.onNoObservers(this));
  }
  forEachObserver(e) {
    if (!this.finalized)
      for (let t = 0; t < this.observers.length; t++) this.sendOne(t, e);
  }
  sendOne(e, t) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[e] !== void 0)
        try {
          t(this.observers[e]);
        } catch (i) {
          typeof console < 'u' && console.error && console.error(i);
        }
    });
  }
  close(e) {
    this.finalized ||
      ((this.finalized = !0),
      e !== void 0 && (this.finalError = e),
      this.task.then(() => {
        ((this.observers = void 0), (this.onNoObservers = void 0));
      }));
  }
}
function pm(n, e) {
  if (typeof n != 'object' || n === null) return !1;
  for (const t of e) if (t in n && typeof n[t] == 'function') return !0;
  return !1;
}
function wo() {}
function _m(n, e) {
  return `${n} failed: ${e} argument `;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mm = function (n) {
    const e = [];
    let t = 0;
    for (let i = 0; i < n.length; i++) {
      let s = n.charCodeAt(i);
      if (s >= 55296 && s <= 56319) {
        const r = s - 55296;
        (i++, D(i < n.length, 'Surrogate pair missing trail surrogate.'));
        const a = n.charCodeAt(i) - 56320;
        s = 65536 + (r << 10) + a;
      }
      s < 128
        ? (e[t++] = s)
        : s < 2048
          ? ((e[t++] = (s >> 6) | 192), (e[t++] = (s & 63) | 128))
          : s < 65536
            ? ((e[t++] = (s >> 12) | 224),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128))
            : ((e[t++] = (s >> 18) | 240),
              (e[t++] = ((s >> 12) & 63) | 128),
              (e[t++] = ((s >> 6) & 63) | 128),
              (e[t++] = (s & 63) | 128));
    }
    return e;
  },
  Pr = function (n) {
    let e = 0;
    for (let t = 0; t < n.length; t++) {
      const i = n.charCodeAt(t);
      i < 128
        ? e++
        : i < 2048
          ? (e += 2)
          : i >= 55296 && i <= 56319
            ? ((e += 4), t++)
            : (e += 3);
    }
    return e;
  };
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function he(n) {
  return n && n._delegate ? n._delegate : n;
}
class qt {
  constructor(e, t, i) {
    ((this.name = e),
      (this.instanceFactory = t),
      (this.type = i),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = 'LAZY'),
      (this.onInstanceCreated = null));
  }
  setInstantiationMode(e) {
    return ((this.instantiationMode = e), this);
  }
  setMultipleInstances(e) {
    return ((this.multipleInstances = e), this);
  }
  setServiceProps(e) {
    return ((this.serviceProps = e), this);
  }
  setInstanceCreatedCallback(e) {
    return ((this.onInstanceCreated = e), this);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const en = '[DEFAULT]';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gm {
  constructor(e, t) {
    ((this.name = e),
      (this.container = t),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map()));
  }
  get(e) {
    const t = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(t)) {
      const i = new wa();
      if (
        (this.instancesDeferred.set(t, i),
        this.isInitialized(t) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: t });
          s && i.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(t).promise;
  }
  getImmediate(e) {
    var t;
    const i = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      s =
        (t = e == null ? void 0 : e.optional) !== null && t !== void 0 ? t : !1;
    if (this.isInitialized(i) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: i });
      } catch (r) {
        if (s) return null;
        throw r;
      }
    else {
      if (s) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if (vm(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: en });
        } catch {}
      for (const [t, i] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(t);
        try {
          const r = this.getOrInitializeService({ instanceIdentifier: s });
          i.resolve(r);
        } catch {}
      }
    }
  }
  clearInstance(e = en) {
    (this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e));
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((t) => 'INTERNAL' in t).map((t) => t.INTERNAL.delete()),
      ...e.filter((t) => '_delete' in t).map((t) => t._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = en) {
    return this.instances.has(e);
  }
  getOptions(e = en) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: t = {} } = e,
      i = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(i))
      throw Error(`${this.name}(${i}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: i,
      options: t,
    });
    for (const [r, a] of this.instancesDeferred.entries()) {
      const l = this.normalizeInstanceIdentifier(r);
      i === l && a.resolve(s);
    }
    return s;
  }
  onInit(e, t) {
    var i;
    const s = this.normalizeInstanceIdentifier(t),
      r =
        (i = this.onInitCallbacks.get(s)) !== null && i !== void 0
          ? i
          : new Set();
    (r.add(e), this.onInitCallbacks.set(s, r));
    const a = this.instances.get(s);
    return (
      a && e(a, s),
      () => {
        r.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, t) {
    const i = this.onInitCallbacks.get(t);
    if (i)
      for (const s of i)
        try {
          s(e, t);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
    let i = this.instances.get(e);
    if (
      !i &&
      this.component &&
      ((i = this.component.instanceFactory(this.container, {
        instanceIdentifier: ym(e),
        options: t,
      })),
      this.instances.set(e, i),
      this.instancesOptions.set(e, t),
      this.invokeOnInitCallbacks(i, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, i);
      } catch {}
    return i || null;
  }
  normalizeInstanceIdentifier(e = en) {
    return this.component ? (this.component.multipleInstances ? e : en) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== 'EXPLICIT';
  }
}
function ym(n) {
  return n === en ? void 0 : n;
}
function vm(n) {
  return n.instantiationMode === 'EAGER';
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Em {
  constructor(e) {
    ((this.name = e), (this.providers = new Map()));
  }
  addComponent(e) {
    const t = this.getProvider(e.name);
    if (t.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    t.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    (this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e));
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const t = new gm(e, this);
    return (this.providers.set(e, t), t);
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var W;
(function (n) {
  ((n[(n.DEBUG = 0)] = 'DEBUG'),
    (n[(n.VERBOSE = 1)] = 'VERBOSE'),
    (n[(n.INFO = 2)] = 'INFO'),
    (n[(n.WARN = 3)] = 'WARN'),
    (n[(n.ERROR = 4)] = 'ERROR'),
    (n[(n.SILENT = 5)] = 'SILENT'));
})(W || (W = {}));
const Tm = {
    debug: W.DEBUG,
    verbose: W.VERBOSE,
    info: W.INFO,
    warn: W.WARN,
    error: W.ERROR,
    silent: W.SILENT,
  },
  Im = W.INFO,
  wm = {
    [W.DEBUG]: 'log',
    [W.VERBOSE]: 'log',
    [W.INFO]: 'info',
    [W.WARN]: 'warn',
    [W.ERROR]: 'error',
  },
  Am = (n, e, ...t) => {
    if (e < n.logLevel) return;
    const i = new Date().toISOString(),
      s = wm[e];
    if (s) console[s](`[${i}]  ${n.name}:`, ...t);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class br {
  constructor(e) {
    ((this.name = e),
      (this._logLevel = Im),
      (this._logHandler = Am),
      (this._userLogHandler = null));
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in W))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == 'string' ? Tm[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != 'function')
      throw new TypeError('Value assigned to `logHandler` must be a function');
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    (this._userLogHandler && this._userLogHandler(this, W.DEBUG, ...e),
      this._logHandler(this, W.DEBUG, ...e));
  }
  log(...e) {
    (this._userLogHandler && this._userLogHandler(this, W.VERBOSE, ...e),
      this._logHandler(this, W.VERBOSE, ...e));
  }
  info(...e) {
    (this._userLogHandler && this._userLogHandler(this, W.INFO, ...e),
      this._logHandler(this, W.INFO, ...e));
  }
  warn(...e) {
    (this._userLogHandler && this._userLogHandler(this, W.WARN, ...e),
      this._logHandler(this, W.WARN, ...e));
  }
  error(...e) {
    (this._userLogHandler && this._userLogHandler(this, W.ERROR, ...e),
      this._logHandler(this, W.ERROR, ...e));
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rm {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((t) => {
        if (Cm(t)) {
          const i = t.getImmediate();
          return `${i.library}/${i.version}`;
        } else return null;
      })
      .filter((t) => t)
      .join(' ');
  }
}
function Cm(n) {
  const e = n.getComponent();
  return (e == null ? void 0 : e.type) === 'VERSION';
}
const Uo = '@firebase/app',
  Bc = '0.10.13';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Et = new br('@firebase/app'),
  Sm = '@firebase/app-compat',
  Pm = '@firebase/analytics-compat',
  bm = '@firebase/analytics',
  Nm = '@firebase/app-check-compat',
  km = '@firebase/app-check',
  Dm = '@firebase/auth',
  Om = '@firebase/auth-compat',
  Vm = '@firebase/database',
  Mm = '@firebase/data-connect',
  Lm = '@firebase/database-compat',
  xm = '@firebase/functions',
  Fm = '@firebase/functions-compat',
  Um = '@firebase/installations',
  Bm = '@firebase/installations-compat',
  qm = '@firebase/messaging',
  Wm = '@firebase/messaging-compat',
  jm = '@firebase/performance',
  $m = '@firebase/performance-compat',
  Hm = '@firebase/remote-config',
  Gm = '@firebase/remote-config-compat',
  zm = '@firebase/storage',
  Km = '@firebase/storage-compat',
  Qm = '@firebase/firestore',
  Ym = '@firebase/vertexai-preview',
  Xm = '@firebase/firestore-compat',
  Jm = 'firebase',
  Zm = '10.14.1';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Bo = '[DEFAULT]',
  eg = {
    [Uo]: 'fire-core',
    [Sm]: 'fire-core-compat',
    [bm]: 'fire-analytics',
    [Pm]: 'fire-analytics-compat',
    [km]: 'fire-app-check',
    [Nm]: 'fire-app-check-compat',
    [Dm]: 'fire-auth',
    [Om]: 'fire-auth-compat',
    [Vm]: 'fire-rtdb',
    [Mm]: 'fire-data-connect',
    [Lm]: 'fire-rtdb-compat',
    [xm]: 'fire-fn',
    [Fm]: 'fire-fn-compat',
    [Um]: 'fire-iid',
    [Bm]: 'fire-iid-compat',
    [qm]: 'fire-fcm',
    [Wm]: 'fire-fcm-compat',
    [jm]: 'fire-perf',
    [$m]: 'fire-perf-compat',
    [Hm]: 'fire-rc',
    [Gm]: 'fire-rc-compat',
    [zm]: 'fire-gcs',
    [Km]: 'fire-gcs-compat',
    [Qm]: 'fire-fst',
    [Xm]: 'fire-fst-compat',
    [Ym]: 'fire-vertex',
    'fire-js': 'fire-js',
    [Jm]: 'fire-js-all',
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Hi = new Map(),
  tg = new Map(),
  qo = new Map();
function qc(n, e) {
  try {
    n.container.addComponent(e);
  } catch (t) {
    Et.debug(
      `Component ${e.name} failed to register with FirebaseApp ${n.name}`,
      t
    );
  }
}
function an(n) {
  const e = n.name;
  if (qo.has(e))
    return (
      Et.debug(`There were multiple attempts to register component ${e}.`),
      !1
    );
  qo.set(e, n);
  for (const t of Hi.values()) qc(t, n);
  for (const t of tg.values()) qc(t, n);
  return !0;
}
function Ra(n, e) {
  const t = n.container.getProvider('heartbeat').getImmediate({ optional: !0 });
  return (t && t.triggerHeartbeat(), n.container.getProvider(e));
}
function tt(n) {
  return n.settings !== void 0;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ng = {
    'no-app':
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    'bad-app-name': "Illegal App name: '{$appName}'",
    'duplicate-app':
      "Firebase App named '{$appName}' already exists with different options or config",
    'app-deleted': "Firebase App named '{$appName}' already deleted",
    'server-app-deleted': 'Firebase Server App has been deleted',
    'no-options':
      'Need to provide options, when not being deployed to hosting via source.',
    'invalid-app-argument':
      'firebase.{$appName}() takes either no argument or a Firebase App instance.',
    'invalid-log-argument':
      'First argument to `onLog` must be null or a function.',
    'idb-open':
      'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-get':
      'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-set':
      'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    'idb-delete':
      'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    'finalization-registry-not-supported':
      'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    'invalid-server-app-environment':
      'FirebaseServerApp is not for use in browser environments.',
  },
  xt = new is('app', 'Firebase', ng);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ig {
  constructor(e, t, i) {
    ((this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, t)),
      (this._name = t.name),
      (this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled),
      (this._container = i),
      this.container.addComponent(new qt('app', () => this, 'PUBLIC')));
  }
  get automaticDataCollectionEnabled() {
    return (this.checkDestroyed(), this._automaticDataCollectionEnabled);
  }
  set automaticDataCollectionEnabled(e) {
    (this.checkDestroyed(), (this._automaticDataCollectionEnabled = e));
  }
  get name() {
    return (this.checkDestroyed(), this._name);
  }
  get options() {
    return (this.checkDestroyed(), this._options);
  }
  get config() {
    return (this.checkDestroyed(), this._config);
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw xt.create('app-deleted', { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const gn = Zm;
function sg(n, e = {}) {
  let t = n;
  typeof e != 'object' && (e = { name: e });
  const i = Object.assign({ name: Bo, automaticDataCollectionEnabled: !1 }, e),
    s = i.name;
  if (typeof s != 'string' || !s)
    throw xt.create('bad-app-name', { appName: String(s) });
  if ((t || (t = xh()), !t)) throw xt.create('no-options');
  const r = Hi.get(s);
  if (r) {
    if (rr(t, r.options) && rr(i, r.config)) return r;
    throw xt.create('duplicate-app', { appName: s });
  }
  const a = new Em(s);
  for (const c of qo.values()) a.addComponent(c);
  const l = new ig(t, i, a);
  return (Hi.set(s, l), l);
}
function qh(n = Bo) {
  const e = Hi.get(n);
  if (!e && n === Bo && xh()) return sg();
  if (!e) throw xt.create('no-app', { appName: n });
  return e;
}
function hR() {
  return Array.from(Hi.values());
}
function it(n, e, t) {
  var i;
  let s = (i = eg[n]) !== null && i !== void 0 ? i : n;
  t && (s += `-${t}`);
  const r = s.match(/\s|\//),
    a = e.match(/\s|\//);
  if (r || a) {
    const l = [`Unable to register library "${s}" with version "${e}":`];
    (r &&
      l.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`
      ),
      r && a && l.push('and'),
      a &&
        l.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Et.warn(l.join(' ')));
    return;
  }
  an(new qt(`${s}-version`, () => ({ library: s, version: e }), 'VERSION'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const rg = 'firebase-heartbeat-database',
  og = 1,
  Gi = 'firebase-heartbeat-store';
let Ao = null;
function Wh() {
  return (
    Ao ||
      (Ao = q_(rg, og, {
        upgrade: (n, e) => {
          switch (e) {
            case 0:
              try {
                n.createObjectStore(Gi);
              } catch (t) {
                console.warn(t);
              }
          }
        },
      }).catch((n) => {
        throw xt.create('idb-open', { originalErrorMessage: n.message });
      })),
    Ao
  );
}
async function ag(n) {
  try {
    const t = (await Wh()).transaction(Gi),
      i = await t.objectStore(Gi).get(jh(n));
    return (await t.done, i);
  } catch (e) {
    if (e instanceof At) Et.warn(e.message);
    else {
      const t = xt.create('idb-get', {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      Et.warn(t.message);
    }
  }
}
async function Wc(n, e) {
  try {
    const i = (await Wh()).transaction(Gi, 'readwrite');
    (await i.objectStore(Gi).put(e, jh(n)), await i.done);
  } catch (t) {
    if (t instanceof At) Et.warn(t.message);
    else {
      const i = xt.create('idb-set', {
        originalErrorMessage: t == null ? void 0 : t.message,
      });
      Et.warn(i.message);
    }
  }
}
function jh(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lg = 1024,
  cg = 30 * 24 * 60 * 60 * 1e3;
class ug {
  constructor(e) {
    ((this.container = e), (this._heartbeatsCache = null));
    const t = this.container.getProvider('app').getImmediate();
    ((this._storage = new dg(t)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((i) => ((this._heartbeatsCache = i), i))));
  }
  async triggerHeartbeat() {
    var e, t;
    try {
      const s = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        r = jc();
      return (((e = this._heartbeatsCache) === null || e === void 0
        ? void 0
        : e.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null)) ||
        this._heartbeatsCache.lastSentHeartbeatDate === r ||
        this._heartbeatsCache.heartbeats.some((a) => a.date === r)
        ? void 0
        : (this._heartbeatsCache.heartbeats.push({ date: r, agent: s }),
          (this._heartbeatsCache.heartbeats =
            this._heartbeatsCache.heartbeats.filter((a) => {
              const l = new Date(a.date).valueOf();
              return Date.now() - l <= cg;
            })),
          this._storage.overwrite(this._heartbeatsCache));
    } catch (i) {
      Et.warn(i);
    }
  }
  async getHeartbeatsHeader() {
    var e;
    try {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null ||
          this._heartbeatsCache.heartbeats.length === 0)
      )
        return '';
      const t = jc(),
        { heartbeatsToSend: i, unsentEntries: s } = hg(
          this._heartbeatsCache.heartbeats
        ),
        r = nr(JSON.stringify({ version: 2, heartbeats: i }));
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        s.length > 0
          ? ((this._heartbeatsCache.heartbeats = s),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        r
      );
    } catch (t) {
      return (Et.warn(t), '');
    }
  }
}
function jc() {
  return new Date().toISOString().substring(0, 10);
}
function hg(n, e = lg) {
  const t = [];
  let i = n.slice();
  for (const s of n) {
    const r = t.find((a) => a.agent === s.agent);
    if (r) {
      if ((r.dates.push(s.date), $c(t) > e)) {
        r.dates.pop();
        break;
      }
    } else if ((t.push({ agent: s.agent, dates: [s.date] }), $c(t) > e)) {
      t.pop();
      break;
    }
    i = i.slice(1);
  }
  return { heartbeatsToSend: t, unsentEntries: i };
}
class dg {
  constructor(e) {
    ((this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()));
  }
  async runIndexedDBEnvironmentCheck() {
    return sm()
      ? rm()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const t = await ag(this.app);
      return t != null && t.heartbeats ? t : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Wc(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : s.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var t;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return Wc(this.app, {
        lastSentHeartbeatDate:
          (t = e.lastSentHeartbeatDate) !== null && t !== void 0
            ? t
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function $c(n) {
  return nr(JSON.stringify({ version: 2, heartbeats: n })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function fg(n) {
  (an(new qt('platform-logger', (e) => new Rm(e), 'PRIVATE')),
    an(new qt('heartbeat', (e) => new ug(e), 'PRIVATE')),
    it(Uo, Bc, n),
    it(Uo, Bc, 'esm2017'),
    it('fire-js', ''));
}
fg('');
var pg = 'firebase',
  _g = '10.14.1';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ it(pg, _g, 'app');
function $h() {
  return {
    'dependent-sdk-initialized-before-auth':
      'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
  };
}
const mg = $h,
  Hh = new is('auth', 'Firebase', $h());
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const or = new br('@firebase/auth');
function gg(n, ...e) {
  or.logLevel <= W.WARN && or.warn(`Auth (${gn}): ${n}`, ...e);
}
function zs(n, ...e) {
  or.logLevel <= W.ERROR && or.error(`Auth (${gn}): ${n}`, ...e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Je(n, ...e) {
  throw Ca(n, ...e);
}
function st(n, ...e) {
  return Ca(n, ...e);
}
function Gh(n, e, t) {
  const i = Object.assign(Object.assign({}, mg()), { [e]: t });
  return new is('auth', 'Firebase', i).create(e, { appName: n.name });
}
function gt(n) {
  return Gh(
    n,
    'operation-not-supported-in-this-environment',
    'Operations that alter the current user are not supported in conjunction with FirebaseServerApp'
  );
}
function Ca(n, ...e) {
  if (typeof n != 'string') {
    const t = e[0],
      i = [...e.slice(1)];
    return (i[0] && (i[0].appName = n.name), n._errorFactory.create(t, ...i));
  }
  return Hh.create(n, ...e);
}
function x(n, e, ...t) {
  if (!n) throw Ca(e, ...t);
}
function ft(n) {
  const e = 'INTERNAL ASSERTION FAILED: ' + n;
  throw (zs(e), new Error(e));
}
function Tt(n, e) {
  n || ft(e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wo() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.href)) ||
    ''
  );
}
function yg() {
  return Hc() === 'http:' || Hc() === 'https:';
}
function Hc() {
  var n;
  return (
    (typeof self < 'u' &&
      ((n = self.location) === null || n === void 0 ? void 0 : n.protocol)) ||
    null
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vg() {
  return typeof navigator < 'u' &&
    navigator &&
    'onLine' in navigator &&
    typeof navigator.onLine == 'boolean' &&
    (yg() || em() || 'connection' in navigator)
    ? navigator.onLine
    : !0;
}
function Eg() {
  if (typeof navigator > 'u') return null;
  const n = navigator;
  return (n.languages && n.languages[0]) || n.language || null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ss {
  constructor(e, t) {
    ((this.shortDelay = e),
      (this.longDelay = t),
      Tt(t > e, 'Short delay should be less than long delay!'),
      (this.isMobile = Aa() || Uh()));
  }
  get() {
    return vg()
      ? this.isMobile
        ? this.longDelay
        : this.shortDelay
      : Math.min(5e3, this.shortDelay);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Sa(n, e) {
  Tt(n.emulator, 'Emulator should always be set here');
  const { url: t } = n.emulator;
  return e ? `${t}${e.startsWith('/') ? e.slice(1) : e}` : t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zh {
  static initialize(e, t, i) {
    ((this.fetchImpl = e),
      t && (this.headersImpl = t),
      i && (this.responseImpl = i));
  }
  static fetch() {
    if (this.fetchImpl) return this.fetchImpl;
    if (typeof self < 'u' && 'fetch' in self) return self.fetch;
    if (typeof globalThis < 'u' && globalThis.fetch) return globalThis.fetch;
    if (typeof fetch < 'u') return fetch;
    ft(
      'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static headers() {
    if (this.headersImpl) return this.headersImpl;
    if (typeof self < 'u' && 'Headers' in self) return self.Headers;
    if (typeof globalThis < 'u' && globalThis.Headers)
      return globalThis.Headers;
    if (typeof Headers < 'u') return Headers;
    ft(
      'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
  static response() {
    if (this.responseImpl) return this.responseImpl;
    if (typeof self < 'u' && 'Response' in self) return self.Response;
    if (typeof globalThis < 'u' && globalThis.Response)
      return globalThis.Response;
    if (typeof Response < 'u') return Response;
    ft(
      'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Tg = {
  CREDENTIAL_MISMATCH: 'custom-token-mismatch',
  MISSING_CUSTOM_TOKEN: 'internal-error',
  INVALID_IDENTIFIER: 'invalid-email',
  MISSING_CONTINUE_URI: 'internal-error',
  INVALID_PASSWORD: 'wrong-password',
  MISSING_PASSWORD: 'missing-password',
  INVALID_LOGIN_CREDENTIALS: 'invalid-credential',
  EMAIL_EXISTS: 'email-already-in-use',
  PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
  INVALID_IDP_RESPONSE: 'invalid-credential',
  INVALID_PENDING_TOKEN: 'invalid-credential',
  FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
  MISSING_REQ_TYPE: 'internal-error',
  EMAIL_NOT_FOUND: 'user-not-found',
  RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
  EXPIRED_OOB_CODE: 'expired-action-code',
  INVALID_OOB_CODE: 'invalid-action-code',
  MISSING_OOB_CODE: 'internal-error',
  CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
  INVALID_ID_TOKEN: 'invalid-user-token',
  TOKEN_EXPIRED: 'user-token-expired',
  USER_NOT_FOUND: 'user-token-expired',
  TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
  PASSWORD_DOES_NOT_MEET_REQUIREMENTS: 'password-does-not-meet-requirements',
  INVALID_CODE: 'invalid-verification-code',
  INVALID_SESSION_INFO: 'invalid-verification-id',
  INVALID_TEMPORARY_PROOF: 'invalid-credential',
  MISSING_SESSION_INFO: 'missing-verification-id',
  SESSION_EXPIRED: 'code-expired',
  MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
  UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
  INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
  ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
  INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
  MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
  MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
  MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
  SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
  SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
  BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  RECAPTCHA_NOT_ENABLED: 'recaptcha-not-enabled',
  MISSING_RECAPTCHA_TOKEN: 'missing-recaptcha-token',
  INVALID_RECAPTCHA_TOKEN: 'invalid-recaptcha-token',
  INVALID_RECAPTCHA_ACTION: 'invalid-recaptcha-action',
  MISSING_CLIENT_TYPE: 'missing-client-type',
  MISSING_RECAPTCHA_VERSION: 'missing-recaptcha-version',
  INVALID_RECAPTCHA_VERSION: 'invalid-recaptcha-version',
  INVALID_REQ_TYPE: 'invalid-req-type',
};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ig = new ss(3e4, 6e4);
function Gt(n, e) {
  return n.tenantId && !e.tenantId
    ? Object.assign(Object.assign({}, e), { tenantId: n.tenantId })
    : e;
}
async function Ct(n, e, t, i, s = {}) {
  return Kh(n, s, async () => {
    let r = {},
      a = {};
    i && (e === 'GET' ? (a = i) : (r = { body: JSON.stringify(i) }));
    const l = Jn(Object.assign({ key: n.config.apiKey }, a)).slice(1),
      c = await n._getAdditionalHeaders();
    ((c['Content-Type'] = 'application/json'),
      n.languageCode && (c['X-Firebase-Locale'] = n.languageCode));
    const h = Object.assign({ method: e, headers: c }, r);
    return (
      Z_() || (h.referrerPolicy = 'no-referrer'),
      zh.fetch()(Qh(n, n.config.apiHost, t, l), h)
    );
  });
}
async function Kh(n, e, t) {
  n._canInitEmulator = !1;
  const i = Object.assign(Object.assign({}, Tg), e);
  try {
    const s = new Ag(n),
      r = await Promise.race([t(), s.promise]);
    s.clearNetworkTimeout();
    const a = await r.json();
    if ('needConfirmation' in a)
      throw Bs(n, 'account-exists-with-different-credential', a);
    if (r.ok && !('errorMessage' in a)) return a;
    {
      const l = r.ok ? a.errorMessage : a.error.message,
        [c, h] = l.split(' : ');
      if (c === 'FEDERATED_USER_ID_ALREADY_LINKED')
        throw Bs(n, 'credential-already-in-use', a);
      if (c === 'EMAIL_EXISTS') throw Bs(n, 'email-already-in-use', a);
      if (c === 'USER_DISABLED') throw Bs(n, 'user-disabled', a);
      const f = i[c] || c.toLowerCase().replace(/[_\s]+/g, '-');
      if (h) throw Gh(n, f, h);
      Je(n, f);
    }
  } catch (s) {
    if (s instanceof At) throw s;
    Je(n, 'network-request-failed', { message: String(s) });
  }
}
async function rs(n, e, t, i, s = {}) {
  const r = await Ct(n, e, t, i, s);
  return (
    'mfaPendingCredential' in r &&
      Je(n, 'multi-factor-auth-required', { _serverResponse: r }),
    r
  );
}
function Qh(n, e, t, i) {
  const s = `${e}${t}?${i}`;
  return n.config.emulator ? Sa(n.config, s) : `${n.config.apiScheme}://${s}`;
}
function wg(n) {
  switch (n) {
    case 'ENFORCE':
      return 'ENFORCE';
    case 'AUDIT':
      return 'AUDIT';
    case 'OFF':
      return 'OFF';
    default:
      return 'ENFORCEMENT_STATE_UNSPECIFIED';
  }
}
class Ag {
  constructor(e) {
    ((this.auth = e),
      (this.timer = null),
      (this.promise = new Promise((t, i) => {
        this.timer = setTimeout(
          () => i(st(this.auth, 'network-request-failed')),
          Ig.get()
        );
      })));
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
}
function Bs(n, e, t) {
  const i = { appName: n.name };
  (t.email && (i.email = t.email),
    t.phoneNumber && (i.phoneNumber = t.phoneNumber));
  const s = st(n, e, i);
  return ((s.customData._tokenResponse = t), s);
}
function Gc(n) {
  return n !== void 0 && n.enterprise !== void 0;
}
class Rg {
  constructor(e) {
    if (
      ((this.siteKey = ''),
      (this.recaptchaEnforcementState = []),
      e.recaptchaKey === void 0)
    )
      throw new Error('recaptchaKey undefined');
    ((this.siteKey = e.recaptchaKey.split('/')[3]),
      (this.recaptchaEnforcementState = e.recaptchaEnforcementState));
  }
  getProviderEnforcementState(e) {
    if (
      !this.recaptchaEnforcementState ||
      this.recaptchaEnforcementState.length === 0
    )
      return null;
    for (const t of this.recaptchaEnforcementState)
      if (t.provider && t.provider === e) return wg(t.enforcementState);
    return null;
  }
  isProviderEnabled(e) {
    return (
      this.getProviderEnforcementState(e) === 'ENFORCE' ||
      this.getProviderEnforcementState(e) === 'AUDIT'
    );
  }
}
async function Cg(n, e) {
  return Ct(n, 'GET', '/v2/recaptchaConfig', Gt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Sg(n, e) {
  return Ct(n, 'POST', '/v1/accounts:delete', e);
}
async function Yh(n, e) {
  return Ct(n, 'POST', '/v1/accounts:lookup', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Mi(n) {
  if (n)
    try {
      const e = new Date(Number(n));
      if (!isNaN(e.getTime())) return e.toUTCString();
    } catch {}
}
async function Pg(n, e = !1) {
  const t = he(n),
    i = await t.getIdToken(e),
    s = Pa(i);
  x(s && s.exp && s.auth_time && s.iat, t.auth, 'internal-error');
  const r = typeof s.firebase == 'object' ? s.firebase : void 0,
    a = r == null ? void 0 : r.sign_in_provider;
  return {
    claims: s,
    token: i,
    authTime: Mi(Ro(s.auth_time)),
    issuedAtTime: Mi(Ro(s.iat)),
    expirationTime: Mi(Ro(s.exp)),
    signInProvider: a || null,
    signInSecondFactor: (r == null ? void 0 : r.sign_in_second_factor) || null,
  };
}
function Ro(n) {
  return Number(n) * 1e3;
}
function Pa(n) {
  const [e, t, i] = n.split('.');
  if (e === void 0 || t === void 0 || i === void 0)
    return (zs('JWT malformed, contained fewer than 3 sections'), null);
  try {
    const s = ir(t);
    return s
      ? JSON.parse(s)
      : (zs('Failed to decode base64 JWT payload'), null);
  } catch (s) {
    return (
      zs(
        'Caught error parsing JWT payload as JSON',
        s == null ? void 0 : s.toString()
      ),
      null
    );
  }
}
function zc(n) {
  const e = Pa(n);
  return (
    x(e, 'internal-error'),
    x(typeof e.exp < 'u', 'internal-error'),
    x(typeof e.iat < 'u', 'internal-error'),
    Number(e.exp) - Number(e.iat)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function qn(n, e, t = !1) {
  if (t) return e;
  try {
    return await e;
  } catch (i) {
    throw (
      i instanceof At &&
        bg(i) &&
        n.auth.currentUser === n &&
        (await n.auth.signOut()),
      i
    );
  }
}
function bg({ code: n }) {
  return n === 'auth/user-disabled' || n === 'auth/user-token-expired';
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ng {
  constructor(e) {
    ((this.user = e),
      (this.isRunning = !1),
      (this.timerId = null),
      (this.errorBackoff = 3e4));
  }
  _start() {
    this.isRunning || ((this.isRunning = !0), this.schedule());
  }
  _stop() {
    this.isRunning &&
      ((this.isRunning = !1),
      this.timerId !== null && clearTimeout(this.timerId));
  }
  getInterval(e) {
    var t;
    if (e) {
      const i = this.errorBackoff;
      return ((this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), i);
    } else {
      this.errorBackoff = 3e4;
      const s =
        ((t = this.user.stsTokenManager.expirationTime) !== null && t !== void 0
          ? t
          : 0) -
        Date.now() -
        3e5;
      return Math.max(0, s);
    }
  }
  schedule(e = !1) {
    if (!this.isRunning) return;
    const t = this.getInterval(e);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, t);
  }
  async iteration() {
    try {
      await this.user.getIdToken(!0);
    } catch (e) {
      (e == null ? void 0 : e.code) === 'auth/network-request-failed' &&
        this.schedule(!0);
      return;
    }
    this.schedule();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jo {
  constructor(e, t) {
    ((this.createdAt = e), (this.lastLoginAt = t), this._initializeTime());
  }
  _initializeTime() {
    ((this.lastSignInTime = Mi(this.lastLoginAt)),
      (this.creationTime = Mi(this.createdAt)));
  }
  _copy(e) {
    ((this.createdAt = e.createdAt),
      (this.lastLoginAt = e.lastLoginAt),
      this._initializeTime());
  }
  toJSON() {
    return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ar(n) {
  var e;
  const t = n.auth,
    i = await n.getIdToken(),
    s = await qn(n, Yh(t, { idToken: i }));
  x(s == null ? void 0 : s.users.length, t, 'internal-error');
  const r = s.users[0];
  n._notifyReloadListener(r);
  const a =
      !((e = r.providerUserInfo) === null || e === void 0) && e.length
        ? Xh(r.providerUserInfo)
        : [],
    l = Dg(n.providerData, a),
    c = n.isAnonymous,
    h = !(n.email && r.passwordHash) && !(l != null && l.length),
    f = c ? h : !1,
    _ = {
      uid: r.localId,
      displayName: r.displayName || null,
      photoURL: r.photoUrl || null,
      email: r.email || null,
      emailVerified: r.emailVerified || !1,
      phoneNumber: r.phoneNumber || null,
      tenantId: r.tenantId || null,
      providerData: l,
      metadata: new jo(r.createdAt, r.lastLoginAt),
      isAnonymous: f,
    };
  Object.assign(n, _);
}
async function kg(n) {
  const e = he(n);
  (await ar(e),
    await e.auth._persistUserIfCurrent(e),
    e.auth._notifyListenersIfCurrent(e));
}
function Dg(n, e) {
  return [
    ...n.filter((i) => !e.some((s) => s.providerId === i.providerId)),
    ...e,
  ];
}
function Xh(n) {
  return n.map((e) => {
    var { providerId: t } = e,
      i = Ta(e, ['providerId']);
    return {
      providerId: t,
      uid: i.rawId || '',
      displayName: i.displayName || null,
      email: i.email || null,
      phoneNumber: i.phoneNumber || null,
      photoURL: i.photoUrl || null,
    };
  });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Og(n, e) {
  const t = await Kh(n, {}, async () => {
    const i = Jn({ grant_type: 'refresh_token', refresh_token: e }).slice(1),
      { tokenApiHost: s, apiKey: r } = n.config,
      a = Qh(n, s, '/v1/token', `key=${r}`),
      l = await n._getAdditionalHeaders();
    return (
      (l['Content-Type'] = 'application/x-www-form-urlencoded'),
      zh.fetch()(a, { method: 'POST', headers: l, body: i })
    );
  });
  return {
    accessToken: t.access_token,
    expiresIn: t.expires_in,
    refreshToken: t.refresh_token,
  };
}
async function Vg(n, e) {
  return Ct(n, 'POST', '/v2/accounts:revokeToken', Gt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vn {
  constructor() {
    ((this.refreshToken = null),
      (this.accessToken = null),
      (this.expirationTime = null));
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(e) {
    (x(e.idToken, 'internal-error'),
      x(typeof e.idToken < 'u', 'internal-error'),
      x(typeof e.refreshToken < 'u', 'internal-error'));
    const t =
      'expiresIn' in e && typeof e.expiresIn < 'u'
        ? Number(e.expiresIn)
        : zc(e.idToken);
    this.updateTokensAndExpiration(e.idToken, e.refreshToken, t);
  }
  updateFromIdToken(e) {
    x(e.length !== 0, 'internal-error');
    const t = zc(e);
    this.updateTokensAndExpiration(e, null, t);
  }
  async getToken(e, t = !1) {
    return !t && this.accessToken && !this.isExpired
      ? this.accessToken
      : (x(this.refreshToken, e, 'user-token-expired'),
        this.refreshToken
          ? (await this.refresh(e, this.refreshToken), this.accessToken)
          : null);
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(e, t) {
    const { accessToken: i, refreshToken: s, expiresIn: r } = await Og(e, t);
    this.updateTokensAndExpiration(i, s, Number(r));
  }
  updateTokensAndExpiration(e, t, i) {
    ((this.refreshToken = t || null),
      (this.accessToken = e || null),
      (this.expirationTime = Date.now() + i * 1e3));
  }
  static fromJSON(e, t) {
    const { refreshToken: i, accessToken: s, expirationTime: r } = t,
      a = new Vn();
    return (
      i &&
        (x(typeof i == 'string', 'internal-error', { appName: e }),
        (a.refreshToken = i)),
      s &&
        (x(typeof s == 'string', 'internal-error', { appName: e }),
        (a.accessToken = s)),
      r &&
        (x(typeof r == 'number', 'internal-error', { appName: e }),
        (a.expirationTime = r)),
      a
    );
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime,
    };
  }
  _assign(e) {
    ((this.accessToken = e.accessToken),
      (this.refreshToken = e.refreshToken),
      (this.expirationTime = e.expirationTime));
  }
  _clone() {
    return Object.assign(new Vn(), this.toJSON());
  }
  _performRefresh() {
    return ft('not implemented');
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kt(n, e) {
  x(typeof n == 'string' || typeof n > 'u', 'internal-error', { appName: e });
}
class pt {
  constructor(e) {
    var { uid: t, auth: i, stsTokenManager: s } = e,
      r = Ta(e, ['uid', 'auth', 'stsTokenManager']);
    ((this.providerId = 'firebase'),
      (this.proactiveRefresh = new Ng(this)),
      (this.reloadUserInfo = null),
      (this.reloadListener = null),
      (this.uid = t),
      (this.auth = i),
      (this.stsTokenManager = s),
      (this.accessToken = s.accessToken),
      (this.displayName = r.displayName || null),
      (this.email = r.email || null),
      (this.emailVerified = r.emailVerified || !1),
      (this.phoneNumber = r.phoneNumber || null),
      (this.photoURL = r.photoURL || null),
      (this.isAnonymous = r.isAnonymous || !1),
      (this.tenantId = r.tenantId || null),
      (this.providerData = r.providerData ? [...r.providerData] : []),
      (this.metadata = new jo(r.createdAt || void 0, r.lastLoginAt || void 0)));
  }
  async getIdToken(e) {
    const t = await qn(this, this.stsTokenManager.getToken(this.auth, e));
    return (
      x(t, this.auth, 'internal-error'),
      this.accessToken !== t &&
        ((this.accessToken = t),
        await this.auth._persistUserIfCurrent(this),
        this.auth._notifyListenersIfCurrent(this)),
      t
    );
  }
  getIdTokenResult(e) {
    return Pg(this, e);
  }
  reload() {
    return kg(this);
  }
  _assign(e) {
    this !== e &&
      (x(this.uid === e.uid, this.auth, 'internal-error'),
      (this.displayName = e.displayName),
      (this.photoURL = e.photoURL),
      (this.email = e.email),
      (this.emailVerified = e.emailVerified),
      (this.phoneNumber = e.phoneNumber),
      (this.isAnonymous = e.isAnonymous),
      (this.tenantId = e.tenantId),
      (this.providerData = e.providerData.map((t) => Object.assign({}, t))),
      this.metadata._copy(e.metadata),
      this.stsTokenManager._assign(e.stsTokenManager));
  }
  _clone(e) {
    const t = new pt(
      Object.assign(Object.assign({}, this), {
        auth: e,
        stsTokenManager: this.stsTokenManager._clone(),
      })
    );
    return (t.metadata._copy(this.metadata), t);
  }
  _onReload(e) {
    (x(!this.reloadListener, this.auth, 'internal-error'),
      (this.reloadListener = e),
      this.reloadUserInfo &&
        (this._notifyReloadListener(this.reloadUserInfo),
        (this.reloadUserInfo = null)));
  }
  _notifyReloadListener(e) {
    this.reloadListener ? this.reloadListener(e) : (this.reloadUserInfo = e);
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(e, t = !1) {
    let i = !1;
    (e.idToken &&
      e.idToken !== this.stsTokenManager.accessToken &&
      (this.stsTokenManager.updateFromServerResponse(e), (i = !0)),
      t && (await ar(this)),
      await this.auth._persistUserIfCurrent(this),
      i && this.auth._notifyListenersIfCurrent(this));
  }
  async delete() {
    if (tt(this.auth.app)) return Promise.reject(gt(this.auth));
    const e = await this.getIdToken();
    return (
      await qn(this, Sg(this.auth, { idToken: e })),
      this.stsTokenManager.clearRefreshToken(),
      this.auth.signOut()
    );
  }
  toJSON() {
    return Object.assign(
      Object.assign(
        {
          uid: this.uid,
          email: this.email || void 0,
          emailVerified: this.emailVerified,
          displayName: this.displayName || void 0,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || void 0,
          phoneNumber: this.phoneNumber || void 0,
          tenantId: this.tenantId || void 0,
          providerData: this.providerData.map((e) => Object.assign({}, e)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId,
        },
        this.metadata.toJSON()
      ),
      { apiKey: this.auth.config.apiKey, appName: this.auth.name }
    );
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || '';
  }
  static _fromJSON(e, t) {
    var i, s, r, a, l, c, h, f;
    const _ = (i = t.displayName) !== null && i !== void 0 ? i : void 0,
      g = (s = t.email) !== null && s !== void 0 ? s : void 0,
      R = (r = t.phoneNumber) !== null && r !== void 0 ? r : void 0,
      P = (a = t.photoURL) !== null && a !== void 0 ? a : void 0,
      O = (l = t.tenantId) !== null && l !== void 0 ? l : void 0,
      N = (c = t._redirectEventId) !== null && c !== void 0 ? c : void 0,
      $ = (h = t.createdAt) !== null && h !== void 0 ? h : void 0,
      q = (f = t.lastLoginAt) !== null && f !== void 0 ? f : void 0,
      {
        uid: G,
        emailVerified: ae,
        isAnonymous: $e,
        providerData: ce,
        stsTokenManager: T,
      } = t;
    x(G && T, e, 'internal-error');
    const m = Vn.fromJSON(this.name, T);
    (x(typeof G == 'string', e, 'internal-error'),
      kt(_, e.name),
      kt(g, e.name),
      x(typeof ae == 'boolean', e, 'internal-error'),
      x(typeof $e == 'boolean', e, 'internal-error'),
      kt(R, e.name),
      kt(P, e.name),
      kt(O, e.name),
      kt(N, e.name),
      kt($, e.name),
      kt(q, e.name));
    const v = new pt({
      uid: G,
      auth: e,
      email: g,
      emailVerified: ae,
      displayName: _,
      isAnonymous: $e,
      photoURL: P,
      phoneNumber: R,
      tenantId: O,
      stsTokenManager: m,
      createdAt: $,
      lastLoginAt: q,
    });
    return (
      ce &&
        Array.isArray(ce) &&
        (v.providerData = ce.map((E) => Object.assign({}, E))),
      N && (v._redirectEventId = N),
      v
    );
  }
  static async _fromIdTokenResponse(e, t, i = !1) {
    const s = new Vn();
    s.updateFromServerResponse(t);
    const r = new pt({
      uid: t.localId,
      auth: e,
      stsTokenManager: s,
      isAnonymous: i,
    });
    return (await ar(r), r);
  }
  static async _fromGetAccountInfoResponse(e, t, i) {
    const s = t.users[0];
    x(s.localId !== void 0, 'internal-error');
    const r = s.providerUserInfo !== void 0 ? Xh(s.providerUserInfo) : [],
      a = !(s.email && s.passwordHash) && !(r != null && r.length),
      l = new Vn();
    l.updateFromIdToken(i);
    const c = new pt({
        uid: s.localId,
        auth: e,
        stsTokenManager: l,
        isAnonymous: a,
      }),
      h = {
        uid: s.localId,
        displayName: s.displayName || null,
        photoURL: s.photoUrl || null,
        email: s.email || null,
        emailVerified: s.emailVerified || !1,
        phoneNumber: s.phoneNumber || null,
        tenantId: s.tenantId || null,
        providerData: r,
        metadata: new jo(s.createdAt, s.lastLoginAt),
        isAnonymous: !(s.email && s.passwordHash) && !(r != null && r.length),
      };
    return (Object.assign(c, h), c);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Kc = new Map();
function _t(n) {
  Tt(n instanceof Function, 'Expected a class definition');
  let e = Kc.get(n);
  return e
    ? (Tt(e instanceof n, 'Instance stored in cache mismatched with class'), e)
    : ((e = new n()), Kc.set(n, e), e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jh {
  constructor() {
    ((this.type = 'NONE'), (this.storage = {}));
  }
  async _isAvailable() {
    return !0;
  }
  async _set(e, t) {
    this.storage[e] = t;
  }
  async _get(e) {
    const t = this.storage[e];
    return t === void 0 ? null : t;
  }
  async _remove(e) {
    delete this.storage[e];
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
Jh.type = 'NONE';
const Qc = Jh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ks(n, e, t) {
  return `firebase:${n}:${e}:${t}`;
}
class Mn {
  constructor(e, t, i) {
    ((this.persistence = e), (this.auth = t), (this.userKey = i));
    const { config: s, name: r } = this.auth;
    ((this.fullUserKey = Ks(this.userKey, s.apiKey, r)),
      (this.fullPersistenceKey = Ks('persistence', s.apiKey, r)),
      (this.boundEventHandler = t._onStorageEvent.bind(t)),
      this.persistence._addListener(this.fullUserKey, this.boundEventHandler));
  }
  setCurrentUser(e) {
    return this.persistence._set(this.fullUserKey, e.toJSON());
  }
  async getCurrentUser() {
    const e = await this.persistence._get(this.fullUserKey);
    return e ? pt._fromJSON(this.auth, e) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(
      this.fullPersistenceKey,
      this.persistence.type
    );
  }
  async setPersistence(e) {
    if (this.persistence === e) return;
    const t = await this.getCurrentUser();
    if ((await this.removeCurrentUser(), (this.persistence = e), t))
      return this.setCurrentUser(t);
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(e, t, i = 'authUser') {
    if (!t.length) return new Mn(_t(Qc), e, i);
    const s = (
      await Promise.all(
        t.map(async (h) => {
          if (await h._isAvailable()) return h;
        })
      )
    ).filter((h) => h);
    let r = s[0] || _t(Qc);
    const a = Ks(i, e.config.apiKey, e.name);
    let l = null;
    for (const h of t)
      try {
        const f = await h._get(a);
        if (f) {
          const _ = pt._fromJSON(e, f);
          (h !== r && (l = _), (r = h));
          break;
        }
      } catch {}
    const c = s.filter((h) => h._shouldAllowMigration);
    return !r._shouldAllowMigration || !c.length
      ? new Mn(r, e, i)
      : ((r = c[0]),
        l && (await r._set(a, l.toJSON())),
        await Promise.all(
          t.map(async (h) => {
            if (h !== r)
              try {
                await h._remove(a);
              } catch {}
          })
        ),
        new Mn(r, e, i));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Yc(n) {
  const e = n.toLowerCase();
  if (e.includes('opera/') || e.includes('opr/') || e.includes('opios/'))
    return 'Opera';
  if (nd(e)) return 'IEMobile';
  if (e.includes('msie') || e.includes('trident/')) return 'IE';
  if (e.includes('edge/')) return 'Edge';
  if (Zh(e)) return 'Firefox';
  if (e.includes('silk/')) return 'Silk';
  if (sd(e)) return 'Blackberry';
  if (rd(e)) return 'Webos';
  if (ed(e)) return 'Safari';
  if ((e.includes('chrome/') || td(e)) && !e.includes('edge/')) return 'Chrome';
  if (id(e)) return 'Android';
  {
    const t = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
      i = n.match(t);
    if ((i == null ? void 0 : i.length) === 2) return i[1];
  }
  return 'Other';
}
function Zh(n = Me()) {
  return /firefox\//i.test(n);
}
function ed(n = Me()) {
  const e = n.toLowerCase();
  return (
    e.includes('safari/') &&
    !e.includes('chrome/') &&
    !e.includes('crios/') &&
    !e.includes('android')
  );
}
function td(n = Me()) {
  return /crios\//i.test(n);
}
function nd(n = Me()) {
  return /iemobile/i.test(n);
}
function id(n = Me()) {
  return /android/i.test(n);
}
function sd(n = Me()) {
  return /blackberry/i.test(n);
}
function rd(n = Me()) {
  return /webos/i.test(n);
}
function ba(n = Me()) {
  return (
    /iphone|ipad|ipod/i.test(n) || (/macintosh/i.test(n) && /mobile/i.test(n))
  );
}
function Mg(n = Me()) {
  var e;
  return (
    ba(n) &&
    !!(!((e = window.navigator) === null || e === void 0) && e.standalone)
  );
}
function Lg() {
  return tm() && document.documentMode === 10;
}
function od(n = Me()) {
  return ba(n) || id(n) || rd(n) || sd(n) || /windows phone/i.test(n) || nd(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ad(n, e = []) {
  let t;
  switch (n) {
    case 'Browser':
      t = Yc(Me());
      break;
    case 'Worker':
      t = `${Yc(Me())}-${n}`;
      break;
    default:
      t = n;
  }
  const i = e.length ? e.join(',') : 'FirebaseCore-web';
  return `${t}/JsCore/${gn}/${i}`;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xg {
  constructor(e) {
    ((this.auth = e), (this.queue = []));
  }
  pushCallback(e, t) {
    const i = (r) =>
      new Promise((a, l) => {
        try {
          const c = e(r);
          a(c);
        } catch (c) {
          l(c);
        }
      });
    ((i.onAbort = t), this.queue.push(i));
    const s = this.queue.length - 1;
    return () => {
      this.queue[s] = () => Promise.resolve();
    };
  }
  async runMiddleware(e) {
    if (this.auth.currentUser === e) return;
    const t = [];
    try {
      for (const i of this.queue) (await i(e), i.onAbort && t.push(i.onAbort));
    } catch (i) {
      t.reverse();
      for (const s of t)
        try {
          s();
        } catch {}
      throw this.auth._errorFactory.create('login-blocked', {
        originalMessage: i == null ? void 0 : i.message,
      });
    }
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Fg(n, e = {}) {
  return Ct(n, 'GET', '/v2/passwordPolicy', Gt(n, e));
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ug = 6;
class Bg {
  constructor(e) {
    var t, i, s, r;
    const a = e.customStrengthOptions;
    ((this.customStrengthOptions = {}),
      (this.customStrengthOptions.minPasswordLength =
        (t = a.minPasswordLength) !== null && t !== void 0 ? t : Ug),
      a.maxPasswordLength &&
        (this.customStrengthOptions.maxPasswordLength = a.maxPasswordLength),
      a.containsLowercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsLowercaseLetter =
          a.containsLowercaseCharacter),
      a.containsUppercaseCharacter !== void 0 &&
        (this.customStrengthOptions.containsUppercaseLetter =
          a.containsUppercaseCharacter),
      a.containsNumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNumericCharacter =
          a.containsNumericCharacter),
      a.containsNonAlphanumericCharacter !== void 0 &&
        (this.customStrengthOptions.containsNonAlphanumericCharacter =
          a.containsNonAlphanumericCharacter),
      (this.enforcementState = e.enforcementState),
      this.enforcementState === 'ENFORCEMENT_STATE_UNSPECIFIED' &&
        (this.enforcementState = 'OFF'),
      (this.allowedNonAlphanumericCharacters =
        (s =
          (i = e.allowedNonAlphanumericCharacters) === null || i === void 0
            ? void 0
            : i.join('')) !== null && s !== void 0
          ? s
          : ''),
      (this.forceUpgradeOnSignin =
        (r = e.forceUpgradeOnSignin) !== null && r !== void 0 ? r : !1),
      (this.schemaVersion = e.schemaVersion));
  }
  validatePassword(e) {
    var t, i, s, r, a, l;
    const c = { isValid: !0, passwordPolicy: this };
    return (
      this.validatePasswordLengthOptions(e, c),
      this.validatePasswordCharacterOptions(e, c),
      c.isValid &&
        (c.isValid =
          (t = c.meetsMinPasswordLength) !== null && t !== void 0 ? t : !0),
      c.isValid &&
        (c.isValid =
          (i = c.meetsMaxPasswordLength) !== null && i !== void 0 ? i : !0),
      c.isValid &&
        (c.isValid =
          (s = c.containsLowercaseLetter) !== null && s !== void 0 ? s : !0),
      c.isValid &&
        (c.isValid =
          (r = c.containsUppercaseLetter) !== null && r !== void 0 ? r : !0),
      c.isValid &&
        (c.isValid =
          (a = c.containsNumericCharacter) !== null && a !== void 0 ? a : !0),
      c.isValid &&
        (c.isValid =
          (l = c.containsNonAlphanumericCharacter) !== null && l !== void 0
            ? l
            : !0),
      c
    );
  }
  validatePasswordLengthOptions(e, t) {
    const i = this.customStrengthOptions.minPasswordLength,
      s = this.customStrengthOptions.maxPasswordLength;
    (i && (t.meetsMinPasswordLength = e.length >= i),
      s && (t.meetsMaxPasswordLength = e.length <= s));
  }
  validatePasswordCharacterOptions(e, t) {
    this.updatePasswordCharacterOptionsStatuses(t, !1, !1, !1, !1);
    let i;
    for (let s = 0; s < e.length; s++)
      ((i = e.charAt(s)),
        this.updatePasswordCharacterOptionsStatuses(
          t,
          i >= 'a' && i <= 'z',
          i >= 'A' && i <= 'Z',
          i >= '0' && i <= '9',
          this.allowedNonAlphanumericCharacters.includes(i)
        ));
  }
  updatePasswordCharacterOptionsStatuses(e, t, i, s, r) {
    (this.customStrengthOptions.containsLowercaseLetter &&
      (e.containsLowercaseLetter || (e.containsLowercaseLetter = t)),
      this.customStrengthOptions.containsUppercaseLetter &&
        (e.containsUppercaseLetter || (e.containsUppercaseLetter = i)),
      this.customStrengthOptions.containsNumericCharacter &&
        (e.containsNumericCharacter || (e.containsNumericCharacter = s)),
      this.customStrengthOptions.containsNonAlphanumericCharacter &&
        (e.containsNonAlphanumericCharacter ||
          (e.containsNonAlphanumericCharacter = r)));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qg {
  constructor(e, t, i, s) {
    ((this.app = e),
      (this.heartbeatServiceProvider = t),
      (this.appCheckServiceProvider = i),
      (this.config = s),
      (this.currentUser = null),
      (this.emulatorConfig = null),
      (this.operations = Promise.resolve()),
      (this.authStateSubscription = new Xc(this)),
      (this.idTokenSubscription = new Xc(this)),
      (this.beforeStateQueue = new xg(this)),
      (this.redirectUser = null),
      (this.isProactiveRefreshEnabled = !1),
      (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
      (this._canInitEmulator = !0),
      (this._isInitialized = !1),
      (this._deleted = !1),
      (this._initializationPromise = null),
      (this._popupRedirectResolver = null),
      (this._errorFactory = Hh),
      (this._agentRecaptchaConfig = null),
      (this._tenantRecaptchaConfigs = {}),
      (this._projectPasswordPolicy = null),
      (this._tenantPasswordPolicies = {}),
      (this.lastNotifiedUid = void 0),
      (this.languageCode = null),
      (this.tenantId = null),
      (this.settings = { appVerificationDisabledForTesting: !1 }),
      (this.frameworks = []),
      (this.name = e.name),
      (this.clientVersion = s.sdkClientVersion));
  }
  _initializeWithPersistence(e, t) {
    return (
      t && (this._popupRedirectResolver = _t(t)),
      (this._initializationPromise = this.queue(async () => {
        var i, s;
        if (
          !this._deleted &&
          ((this.persistenceManager = await Mn.create(this, e)), !this._deleted)
        ) {
          if (
            !((i = this._popupRedirectResolver) === null || i === void 0) &&
            i._shouldInitProactively
          )
            try {
              await this._popupRedirectResolver._initialize(this);
            } catch {}
          (await this.initializeCurrentUser(t),
            (this.lastNotifiedUid =
              ((s = this.currentUser) === null || s === void 0
                ? void 0
                : s.uid) || null),
            !this._deleted && (this._isInitialized = !0));
        }
      })),
      this._initializationPromise
    );
  }
  async _onStorageEvent() {
    if (this._deleted) return;
    const e = await this.assertedPersistence.getCurrentUser();
    if (!(!this.currentUser && !e)) {
      if (this.currentUser && e && this.currentUser.uid === e.uid) {
        (this._currentUser._assign(e), await this.currentUser.getIdToken());
        return;
      }
      await this._updateCurrentUser(e, !0);
    }
  }
  async initializeCurrentUserFromIdToken(e) {
    try {
      const t = await Yh(this, { idToken: e }),
        i = await pt._fromGetAccountInfoResponse(this, t, e);
      await this.directlySetCurrentUser(i);
    } catch (t) {
      (console.warn(
        'FirebaseServerApp could not login user with provided authIdToken: ',
        t
      ),
        await this.directlySetCurrentUser(null));
    }
  }
  async initializeCurrentUser(e) {
    var t;
    if (tt(this.app)) {
      const a = this.app.settings.authIdToken;
      return a
        ? new Promise((l) => {
            setTimeout(() =>
              this.initializeCurrentUserFromIdToken(a).then(l, l)
            );
          })
        : this.directlySetCurrentUser(null);
    }
    const i = await this.assertedPersistence.getCurrentUser();
    let s = i,
      r = !1;
    if (e && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const a =
          (t = this.redirectUser) === null || t === void 0
            ? void 0
            : t._redirectEventId,
        l = s == null ? void 0 : s._redirectEventId,
        c = await this.tryRedirectSignIn(e);
      (!a || a === l) && c != null && c.user && ((s = c.user), (r = !0));
    }
    if (!s) return this.directlySetCurrentUser(null);
    if (!s._redirectEventId) {
      if (r)
        try {
          await this.beforeStateQueue.runMiddleware(s);
        } catch (a) {
          ((s = i),
            this._popupRedirectResolver._overrideRedirectResult(this, () =>
              Promise.reject(a)
            ));
        }
      return s
        ? this.reloadAndSetCurrentUserOrClear(s)
        : this.directlySetCurrentUser(null);
    }
    return (
      x(this._popupRedirectResolver, this, 'argument-error'),
      await this.getOrInitRedirectPersistenceManager(),
      this.redirectUser &&
      this.redirectUser._redirectEventId === s._redirectEventId
        ? this.directlySetCurrentUser(s)
        : this.reloadAndSetCurrentUserOrClear(s)
    );
  }
  async tryRedirectSignIn(e) {
    let t = null;
    try {
      t = await this._popupRedirectResolver._completeRedirectFn(this, e, !0);
    } catch {
      await this._setRedirectUser(null);
    }
    return t;
  }
  async reloadAndSetCurrentUserOrClear(e) {
    try {
      await ar(e);
    } catch (t) {
      if ((t == null ? void 0 : t.code) !== 'auth/network-request-failed')
        return this.directlySetCurrentUser(null);
    }
    return this.directlySetCurrentUser(e);
  }
  useDeviceLanguage() {
    this.languageCode = Eg();
  }
  async _delete() {
    this._deleted = !0;
  }
  async updateCurrentUser(e) {
    if (tt(this.app)) return Promise.reject(gt(this));
    const t = e ? he(e) : null;
    return (
      t &&
        x(
          t.auth.config.apiKey === this.config.apiKey,
          this,
          'invalid-user-token'
        ),
      this._updateCurrentUser(t && t._clone(this))
    );
  }
  async _updateCurrentUser(e, t = !1) {
    if (!this._deleted)
      return (
        e && x(this.tenantId === e.tenantId, this, 'tenant-id-mismatch'),
        t || (await this.beforeStateQueue.runMiddleware(e)),
        this.queue(async () => {
          (await this.directlySetCurrentUser(e), this.notifyAuthListeners());
        })
      );
  }
  async signOut() {
    return tt(this.app)
      ? Promise.reject(gt(this))
      : (await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0));
  }
  setPersistence(e) {
    return tt(this.app)
      ? Promise.reject(gt(this))
      : this.queue(async () => {
          await this.assertedPersistence.setPersistence(_t(e));
        });
  }
  _getRecaptchaConfig() {
    return this.tenantId == null
      ? this._agentRecaptchaConfig
      : this._tenantRecaptchaConfigs[this.tenantId];
  }
  async validatePassword(e) {
    this._getPasswordPolicyInternal() || (await this._updatePasswordPolicy());
    const t = this._getPasswordPolicyInternal();
    return t.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
      ? Promise.reject(
          this._errorFactory.create(
            'unsupported-password-policy-schema-version',
            {}
          )
        )
      : t.validatePassword(e);
  }
  _getPasswordPolicyInternal() {
    return this.tenantId === null
      ? this._projectPasswordPolicy
      : this._tenantPasswordPolicies[this.tenantId];
  }
  async _updatePasswordPolicy() {
    const e = await Fg(this),
      t = new Bg(e);
    this.tenantId === null
      ? (this._projectPasswordPolicy = t)
      : (this._tenantPasswordPolicies[this.tenantId] = t);
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(e) {
    this._errorFactory = new is('auth', 'Firebase', e());
  }
  onAuthStateChanged(e, t, i) {
    return this.registerStateListener(this.authStateSubscription, e, t, i);
  }
  beforeAuthStateChanged(e, t) {
    return this.beforeStateQueue.pushCallback(e, t);
  }
  onIdTokenChanged(e, t, i) {
    return this.registerStateListener(this.idTokenSubscription, e, t, i);
  }
  authStateReady() {
    return new Promise((e, t) => {
      if (this.currentUser) e();
      else {
        const i = this.onAuthStateChanged(() => {
          (i(), e());
        }, t);
      }
    });
  }
  async revokeAccessToken(e) {
    if (this.currentUser) {
      const t = await this.currentUser.getIdToken(),
        i = {
          providerId: 'apple.com',
          tokenType: 'ACCESS_TOKEN',
          token: e,
          idToken: t,
        };
      (this.tenantId != null && (i.tenantId = this.tenantId),
        await Vg(this, i));
    }
  }
  toJSON() {
    var e;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser:
        (e = this._currentUser) === null || e === void 0 ? void 0 : e.toJSON(),
    };
  }
  async _setRedirectUser(e, t) {
    const i = await this.getOrInitRedirectPersistenceManager(t);
    return e === null ? i.removeCurrentUser() : i.setCurrentUser(e);
  }
  async getOrInitRedirectPersistenceManager(e) {
    if (!this.redirectPersistenceManager) {
      const t = (e && _t(e)) || this._popupRedirectResolver;
      (x(t, this, 'argument-error'),
        (this.redirectPersistenceManager = await Mn.create(
          this,
          [_t(t._redirectPersistence)],
          'redirectUser'
        )),
        (this.redirectUser =
          await this.redirectPersistenceManager.getCurrentUser()));
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(e) {
    var t, i;
    return (
      this._isInitialized && (await this.queue(async () => {})),
      ((t = this._currentUser) === null || t === void 0
        ? void 0
        : t._redirectEventId) === e
        ? this._currentUser
        : ((i = this.redirectUser) === null || i === void 0
              ? void 0
              : i._redirectEventId) === e
          ? this.redirectUser
          : null
    );
  }
  async _persistUserIfCurrent(e) {
    if (e === this.currentUser)
      return this.queue(async () => this.directlySetCurrentUser(e));
  }
  _notifyListenersIfCurrent(e) {
    e === this.currentUser && this.notifyAuthListeners();
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    ((this.isProactiveRefreshEnabled = !0),
      this.currentUser && this._currentUser._startProactiveRefresh());
  }
  _stopProactiveRefresh() {
    ((this.isProactiveRefreshEnabled = !1),
      this.currentUser && this._currentUser._stopProactiveRefresh());
  }
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var e, t;
    if (!this._isInitialized) return;
    this.idTokenSubscription.next(this.currentUser);
    const i =
      (t = (e = this.currentUser) === null || e === void 0 ? void 0 : e.uid) !==
        null && t !== void 0
        ? t
        : null;
    this.lastNotifiedUid !== i &&
      ((this.lastNotifiedUid = i),
      this.authStateSubscription.next(this.currentUser));
  }
  registerStateListener(e, t, i, s) {
    if (this._deleted) return () => {};
    const r = typeof t == 'function' ? t : t.next.bind(t);
    let a = !1;
    const l = this._isInitialized
      ? Promise.resolve()
      : this._initializationPromise;
    if (
      (x(l, this, 'internal-error'),
      l.then(() => {
        a || r(this.currentUser);
      }),
      typeof t == 'function')
    ) {
      const c = e.addObserver(t, i, s);
      return () => {
        ((a = !0), c());
      };
    } else {
      const c = e.addObserver(t);
      return () => {
        ((a = !0), c());
      };
    }
  }
  async directlySetCurrentUser(e) {
    (this.currentUser &&
      this.currentUser !== e &&
      this._currentUser._stopProactiveRefresh(),
      e && this.isProactiveRefreshEnabled && e._startProactiveRefresh(),
      (this.currentUser = e),
      e
        ? await this.assertedPersistence.setCurrentUser(e)
        : await this.assertedPersistence.removeCurrentUser());
  }
  queue(e) {
    return ((this.operations = this.operations.then(e, e)), this.operations);
  }
  get assertedPersistence() {
    return (
      x(this.persistenceManager, this, 'internal-error'),
      this.persistenceManager
    );
  }
  _logFramework(e) {
    !e ||
      this.frameworks.includes(e) ||
      (this.frameworks.push(e),
      this.frameworks.sort(),
      (this.clientVersion = ad(
        this.config.clientPlatform,
        this._getFrameworks()
      )));
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var e;
    const t = { 'X-Client-Version': this.clientVersion };
    this.app.options.appId && (t['X-Firebase-gmpid'] = this.app.options.appId);
    const i = await ((e = this.heartbeatServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getHeartbeatsHeader());
    i && (t['X-Firebase-Client'] = i);
    const s = await this._getAppCheckToken();
    return (s && (t['X-Firebase-AppCheck'] = s), t);
  }
  async _getAppCheckToken() {
    var e;
    const t = await ((e = this.appCheckServiceProvider.getImmediate({
      optional: !0,
    })) === null || e === void 0
      ? void 0
      : e.getToken());
    return (
      t != null &&
        t.error &&
        gg(`Error while retrieving App Check token: ${t.error}`),
      t == null ? void 0 : t.token
    );
  }
}
function zt(n) {
  return he(n);
}
class Xc {
  constructor(e) {
    ((this.auth = e),
      (this.observer = null),
      (this.addObserver = dm((t) => (this.observer = t))));
  }
  get next() {
    return (
      x(this.observer, this.auth, 'internal-error'),
      this.observer.next.bind(this.observer)
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Nr = {
  async loadJS() {
    throw new Error('Unable to load external scripts');
  },
  recaptchaV2Script: '',
  recaptchaEnterpriseScript: '',
  gapiScript: '',
};
function Wg(n) {
  Nr = n;
}
function ld(n) {
  return Nr.loadJS(n);
}
function jg() {
  return Nr.recaptchaEnterpriseScript;
}
function $g() {
  return Nr.gapiScript;
}
function Hg(n) {
  return `__${n}${Math.floor(Math.random() * 1e6)}`;
}
const Gg = 'recaptcha-enterprise',
  zg = 'NO_RECAPTCHA';
class Kg {
  constructor(e) {
    ((this.type = Gg), (this.auth = zt(e)));
  }
  async verify(e = 'verify', t = !1) {
    async function i(r) {
      if (!t) {
        if (r.tenantId == null && r._agentRecaptchaConfig != null)
          return r._agentRecaptchaConfig.siteKey;
        if (
          r.tenantId != null &&
          r._tenantRecaptchaConfigs[r.tenantId] !== void 0
        )
          return r._tenantRecaptchaConfigs[r.tenantId].siteKey;
      }
      return new Promise(async (a, l) => {
        Cg(r, {
          clientType: 'CLIENT_TYPE_WEB',
          version: 'RECAPTCHA_ENTERPRISE',
        })
          .then((c) => {
            if (c.recaptchaKey === void 0)
              l(new Error('recaptcha Enterprise site key undefined'));
            else {
              const h = new Rg(c);
              return (
                r.tenantId == null
                  ? (r._agentRecaptchaConfig = h)
                  : (r._tenantRecaptchaConfigs[r.tenantId] = h),
                a(h.siteKey)
              );
            }
          })
          .catch((c) => {
            l(c);
          });
      });
    }
    function s(r, a, l) {
      const c = window.grecaptcha;
      Gc(c)
        ? c.enterprise.ready(() => {
            c.enterprise
              .execute(r, { action: e })
              .then((h) => {
                a(h);
              })
              .catch(() => {
                a(zg);
              });
          })
        : l(Error('No reCAPTCHA enterprise script loaded.'));
    }
    return new Promise((r, a) => {
      i(this.auth)
        .then((l) => {
          if (!t && Gc(window.grecaptcha)) s(l, r, a);
          else {
            if (typeof window > 'u') {
              a(new Error('RecaptchaVerifier is only supported in browser'));
              return;
            }
            let c = jg();
            (c.length !== 0 && (c += l),
              ld(c)
                .then(() => {
                  s(l, r, a);
                })
                .catch((h) => {
                  a(h);
                }));
          }
        })
        .catch((l) => {
          a(l);
        });
    });
  }
}
async function Jc(n, e, t, i = !1) {
  const s = new Kg(n);
  let r;
  try {
    r = await s.verify(t);
  } catch {
    r = await s.verify(t, !0);
  }
  const a = Object.assign({}, e);
  return (
    i
      ? Object.assign(a, { captchaResp: r })
      : Object.assign(a, { captchaResponse: r }),
    Object.assign(a, { clientType: 'CLIENT_TYPE_WEB' }),
    Object.assign(a, { recaptchaVersion: 'RECAPTCHA_ENTERPRISE' }),
    a
  );
}
async function $o(n, e, t, i) {
  var s;
  if (
    !((s = n._getRecaptchaConfig()) === null || s === void 0) &&
    s.isProviderEnabled('EMAIL_PASSWORD_PROVIDER')
  ) {
    const r = await Jc(n, e, t, t === 'getOobCode');
    return i(n, r);
  } else
    return i(n, e).catch(async (r) => {
      if (r.code === 'auth/missing-recaptcha-token') {
        console.log(
          `${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`
        );
        const a = await Jc(n, e, t, t === 'getOobCode');
        return i(n, a);
      } else return Promise.reject(r);
    });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Qg(n, e) {
  const t = Ra(n, 'auth');
  if (t.isInitialized()) {
    const s = t.getImmediate(),
      r = t.getOptions();
    if (rr(r, e ?? {})) return s;
    Je(s, 'already-initialized');
  }
  return t.initialize({ options: e });
}
function Yg(n, e) {
  const t = (e == null ? void 0 : e.persistence) || [],
    i = (Array.isArray(t) ? t : [t]).map(_t);
  (e != null && e.errorMap && n._updateErrorMap(e.errorMap),
    n._initializeWithPersistence(
      i,
      e == null ? void 0 : e.popupRedirectResolver
    ));
}
function Xg(n, e, t) {
  const i = zt(n);
  (x(i._canInitEmulator, i, 'emulator-config-failed'),
    x(/^https?:\/\//.test(e), i, 'invalid-emulator-scheme'));
  const s = !1,
    r = cd(e),
    { host: a, port: l } = Jg(e),
    c = l === null ? '' : `:${l}`;
  ((i.config.emulator = { url: `${r}//${a}${c}/` }),
    (i.settings.appVerificationDisabledForTesting = !0),
    (i.emulatorConfig = Object.freeze({
      host: a,
      port: l,
      protocol: r.replace(':', ''),
      options: Object.freeze({ disableWarnings: s }),
    })),
    Zg());
}
function cd(n) {
  const e = n.indexOf(':');
  return e < 0 ? '' : n.substr(0, e + 1);
}
function Jg(n) {
  const e = cd(n),
    t = /(\/\/)?([^?#/]+)/.exec(n.substr(e.length));
  if (!t) return { host: '', port: null };
  const i = t[2].split('@').pop() || '',
    s = /^(\[[^\]]+\])(:|$)/.exec(i);
  if (s) {
    const r = s[1];
    return { host: r, port: Zc(i.substr(r.length + 1)) };
  } else {
    const [r, a] = i.split(':');
    return { host: r, port: Zc(a) };
  }
}
function Zc(n) {
  if (!n) return null;
  const e = Number(n);
  return isNaN(e) ? null : e;
}
function Zg() {
  function n() {
    const e = document.createElement('p'),
      t = e.style;
    ((e.innerText =
      'Running in emulator mode. Do not use with production credentials.'),
      (t.position = 'fixed'),
      (t.width = '100%'),
      (t.backgroundColor = '#ffffff'),
      (t.border = '.1em solid #000000'),
      (t.color = '#b50000'),
      (t.bottom = '0px'),
      (t.left = '0px'),
      (t.margin = '0px'),
      (t.zIndex = '10000'),
      (t.textAlign = 'center'),
      e.classList.add('firebase-emulator-warning'),
      document.body.appendChild(e));
  }
  (typeof console < 'u' &&
    typeof console.info == 'function' &&
    console.info(
      'WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.'
    ),
    typeof window < 'u' &&
      typeof document < 'u' &&
      (document.readyState === 'loading'
        ? window.addEventListener('DOMContentLoaded', n)
        : n()));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Na {
  constructor(e, t) {
    ((this.providerId = e), (this.signInMethod = t));
  }
  toJSON() {
    return ft('not implemented');
  }
  _getIdTokenResponse(e) {
    return ft('not implemented');
  }
  _linkToIdToken(e, t) {
    return ft('not implemented');
  }
  _getReauthenticationResolver(e) {
    return ft('not implemented');
  }
}
async function ey(n, e) {
  return Ct(n, 'POST', '/v1/accounts:signUp', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ty(n, e) {
  return rs(n, 'POST', '/v1/accounts:signInWithPassword', Gt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ny(n, e) {
  return rs(n, 'POST', '/v1/accounts:signInWithEmailLink', Gt(n, e));
}
async function iy(n, e) {
  return rs(n, 'POST', '/v1/accounts:signInWithEmailLink', Gt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zi extends Na {
  constructor(e, t, i, s = null) {
    (super('password', i),
      (this._email = e),
      (this._password = t),
      (this._tenantId = s));
  }
  static _fromEmailAndPassword(e, t) {
    return new zi(e, t, 'password');
  }
  static _fromEmailAndCode(e, t, i = null) {
    return new zi(e, t, 'emailLink', i);
  }
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e;
    if (t != null && t.email && t != null && t.password) {
      if (t.signInMethod === 'password')
        return this._fromEmailAndPassword(t.email, t.password);
      if (t.signInMethod === 'emailLink')
        return this._fromEmailAndCode(t.email, t.password, t.tenantId);
    }
    return null;
  }
  async _getIdTokenResponse(e) {
    switch (this.signInMethod) {
      case 'password':
        const t = {
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return $o(e, t, 'signInWithPassword', ty);
      case 'emailLink':
        return ny(e, { email: this._email, oobCode: this._password });
      default:
        Je(e, 'internal-error');
    }
  }
  async _linkToIdToken(e, t) {
    switch (this.signInMethod) {
      case 'password':
        const i = {
          idToken: t,
          returnSecureToken: !0,
          email: this._email,
          password: this._password,
          clientType: 'CLIENT_TYPE_WEB',
        };
        return $o(e, i, 'signUpPassword', ey);
      case 'emailLink':
        return iy(e, {
          idToken: t,
          email: this._email,
          oobCode: this._password,
        });
      default:
        Je(e, 'internal-error');
    }
  }
  _getReauthenticationResolver(e) {
    return this._getIdTokenResponse(e);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ln(n, e) {
  return rs(n, 'POST', '/v1/accounts:signInWithIdp', Gt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sy = 'http://localhost';
class ln extends Na {
  constructor() {
    (super(...arguments), (this.pendingToken = null));
  }
  static _fromParams(e) {
    const t = new ln(e.providerId, e.signInMethod);
    return (
      e.idToken || e.accessToken
        ? (e.idToken && (t.idToken = e.idToken),
          e.accessToken && (t.accessToken = e.accessToken),
          e.nonce && !e.pendingToken && (t.nonce = e.nonce),
          e.pendingToken && (t.pendingToken = e.pendingToken))
        : e.oauthToken && e.oauthTokenSecret
          ? ((t.accessToken = e.oauthToken), (t.secret = e.oauthTokenSecret))
          : Je('argument-error'),
      t
    );
  }
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod,
    };
  }
  static fromJSON(e) {
    const t = typeof e == 'string' ? JSON.parse(e) : e,
      { providerId: i, signInMethod: s } = t,
      r = Ta(t, ['providerId', 'signInMethod']);
    if (!i || !s) return null;
    const a = new ln(i, s);
    return (
      (a.idToken = r.idToken || void 0),
      (a.accessToken = r.accessToken || void 0),
      (a.secret = r.secret),
      (a.nonce = r.nonce),
      (a.pendingToken = r.pendingToken || null),
      a
    );
  }
  _getIdTokenResponse(e) {
    const t = this.buildRequest();
    return Ln(e, t);
  }
  _linkToIdToken(e, t) {
    const i = this.buildRequest();
    return ((i.idToken = t), Ln(e, i));
  }
  _getReauthenticationResolver(e) {
    const t = this.buildRequest();
    return ((t.autoCreate = !1), Ln(e, t));
  }
  buildRequest() {
    const e = { requestUri: sy, returnSecureToken: !0 };
    if (this.pendingToken) e.pendingToken = this.pendingToken;
    else {
      const t = {};
      (this.idToken && (t.id_token = this.idToken),
        this.accessToken && (t.access_token = this.accessToken),
        this.secret && (t.oauth_token_secret = this.secret),
        (t.providerId = this.providerId),
        this.nonce && !this.pendingToken && (t.nonce = this.nonce),
        (e.postBody = Jn(t)));
    }
    return e;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ry(n) {
  switch (n) {
    case 'recoverEmail':
      return 'RECOVER_EMAIL';
    case 'resetPassword':
      return 'PASSWORD_RESET';
    case 'signIn':
      return 'EMAIL_SIGNIN';
    case 'verifyEmail':
      return 'VERIFY_EMAIL';
    case 'verifyAndChangeEmail':
      return 'VERIFY_AND_CHANGE_EMAIL';
    case 'revertSecondFactorAddition':
      return 'REVERT_SECOND_FACTOR_ADDITION';
    default:
      return null;
  }
}
function oy(n) {
  const e = bi(Ni(n)).link,
    t = e ? bi(Ni(e)).deep_link_id : null,
    i = bi(Ni(n)).deep_link_id;
  return (i ? bi(Ni(i)).link : null) || i || t || e || n;
}
class ka {
  constructor(e) {
    var t, i, s, r, a, l;
    const c = bi(Ni(e)),
      h = (t = c.apiKey) !== null && t !== void 0 ? t : null,
      f = (i = c.oobCode) !== null && i !== void 0 ? i : null,
      _ = ry((s = c.mode) !== null && s !== void 0 ? s : null);
    (x(h && f && _, 'argument-error'),
      (this.apiKey = h),
      (this.operation = _),
      (this.code = f),
      (this.continueUrl =
        (r = c.continueUrl) !== null && r !== void 0 ? r : null),
      (this.languageCode =
        (a = c.languageCode) !== null && a !== void 0 ? a : null),
      (this.tenantId = (l = c.tenantId) !== null && l !== void 0 ? l : null));
  }
  static parseLink(e) {
    const t = oy(e);
    try {
      return new ka(t);
    } catch {
      return null;
    }
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Zn {
  constructor() {
    this.providerId = Zn.PROVIDER_ID;
  }
  static credential(e, t) {
    return zi._fromEmailAndPassword(e, t);
  }
  static credentialWithLink(e, t) {
    const i = ka.parseLink(t);
    return (
      x(i, 'argument-error'),
      zi._fromEmailAndCode(e, i.code, i.tenantId)
    );
  }
}
Zn.PROVIDER_ID = 'password';
Zn.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password';
Zn.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ud {
  constructor(e) {
    ((this.providerId = e),
      (this.defaultLanguageCode = null),
      (this.customParameters = {}));
  }
  setDefaultLanguage(e) {
    this.defaultLanguageCode = e;
  }
  setCustomParameters(e) {
    return ((this.customParameters = e), this);
  }
  getCustomParameters() {
    return this.customParameters;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class os extends ud {
  constructor() {
    (super(...arguments), (this.scopes = []));
  }
  addScope(e) {
    return (this.scopes.includes(e) || this.scopes.push(e), this);
  }
  getScopes() {
    return [...this.scopes];
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dt extends os {
  constructor() {
    super('facebook.com');
  }
  static credential(e) {
    return ln._fromParams({
      providerId: Dt.PROVIDER_ID,
      signInMethod: Dt.FACEBOOK_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Dt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Dt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Dt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Dt.FACEBOOK_SIGN_IN_METHOD = 'facebook.com';
Dt.PROVIDER_ID = 'facebook.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ot extends os {
  constructor() {
    (super('google.com'), this.addScope('profile'));
  }
  static credential(e, t) {
    return ln._fromParams({
      providerId: Ot.PROVIDER_ID,
      signInMethod: Ot.GOOGLE_SIGN_IN_METHOD,
      idToken: e,
      accessToken: t,
    });
  }
  static credentialFromResult(e) {
    return Ot.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Ot.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthIdToken: t, oauthAccessToken: i } = e;
    if (!t && !i) return null;
    try {
      return Ot.credential(t, i);
    } catch {
      return null;
    }
  }
}
Ot.GOOGLE_SIGN_IN_METHOD = 'google.com';
Ot.PROVIDER_ID = 'google.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vt extends os {
  constructor() {
    super('github.com');
  }
  static credential(e) {
    return ln._fromParams({
      providerId: Vt.PROVIDER_ID,
      signInMethod: Vt.GITHUB_SIGN_IN_METHOD,
      accessToken: e,
    });
  }
  static credentialFromResult(e) {
    return Vt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Vt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e || !('oauthAccessToken' in e) || !e.oauthAccessToken) return null;
    try {
      return Vt.credential(e.oauthAccessToken);
    } catch {
      return null;
    }
  }
}
Vt.GITHUB_SIGN_IN_METHOD = 'github.com';
Vt.PROVIDER_ID = 'github.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mt extends os {
  constructor() {
    super('twitter.com');
  }
  static credential(e, t) {
    return ln._fromParams({
      providerId: Mt.PROVIDER_ID,
      signInMethod: Mt.TWITTER_SIGN_IN_METHOD,
      oauthToken: e,
      oauthTokenSecret: t,
    });
  }
  static credentialFromResult(e) {
    return Mt.credentialFromTaggedObject(e);
  }
  static credentialFromError(e) {
    return Mt.credentialFromTaggedObject(e.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: e }) {
    if (!e) return null;
    const { oauthAccessToken: t, oauthTokenSecret: i } = e;
    if (!t || !i) return null;
    try {
      return Mt.credential(t, i);
    } catch {
      return null;
    }
  }
}
Mt.TWITTER_SIGN_IN_METHOD = 'twitter.com';
Mt.PROVIDER_ID = 'twitter.com';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ay(n, e) {
  return rs(n, 'POST', '/v1/accounts:signUp', Gt(n, e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cn {
  constructor(e) {
    ((this.user = e.user),
      (this.providerId = e.providerId),
      (this._tokenResponse = e._tokenResponse),
      (this.operationType = e.operationType));
  }
  static async _fromIdTokenResponse(e, t, i, s = !1) {
    const r = await pt._fromIdTokenResponse(e, i, s),
      a = eu(i);
    return new cn({
      user: r,
      providerId: a,
      _tokenResponse: i,
      operationType: t,
    });
  }
  static async _forOperation(e, t, i) {
    await e._updateTokensIfNecessary(i, !0);
    const s = eu(i);
    return new cn({
      user: e,
      providerId: s,
      _tokenResponse: i,
      operationType: t,
    });
  }
}
function eu(n) {
  return n.providerId ? n.providerId : 'phoneNumber' in n ? 'phone' : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lr extends At {
  constructor(e, t, i, s) {
    var r;
    (super(t.code, t.message),
      (this.operationType = i),
      (this.user = s),
      Object.setPrototypeOf(this, lr.prototype),
      (this.customData = {
        appName: e.name,
        tenantId: (r = e.tenantId) !== null && r !== void 0 ? r : void 0,
        _serverResponse: t.customData._serverResponse,
        operationType: i,
      }));
  }
  static _fromErrorAndOperation(e, t, i, s) {
    return new lr(e, t, i, s);
  }
}
function hd(n, e, t, i) {
  return (
    e === 'reauthenticate'
      ? t._getReauthenticationResolver(n)
      : t._getIdTokenResponse(n)
  ).catch((r) => {
    throw r.code === 'auth/multi-factor-auth-required'
      ? lr._fromErrorAndOperation(n, r, e, i)
      : r;
  });
}
async function ly(n, e, t = !1) {
  const i = await qn(n, e._linkToIdToken(n.auth, await n.getIdToken()), t);
  return cn._forOperation(n, 'link', i);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function dd(n, e, t = !1) {
  const { auth: i } = n;
  if (tt(i.app)) return Promise.reject(gt(i));
  const s = 'reauthenticate';
  try {
    const r = await qn(n, hd(i, s, e, n), t);
    x(r.idToken, i, 'internal-error');
    const a = Pa(r.idToken);
    x(a, i, 'internal-error');
    const { sub: l } = a;
    return (x(n.uid === l, i, 'user-mismatch'), cn._forOperation(n, s, r));
  } catch (r) {
    throw (
      (r == null ? void 0 : r.code) === 'auth/user-not-found' &&
        Je(i, 'user-mismatch'),
      r
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function fd(n, e, t = !1) {
  if (tt(n.app)) return Promise.reject(gt(n));
  const i = 'signIn',
    s = await hd(n, i, e),
    r = await cn._fromIdTokenResponse(n, i, s);
  return (t || (await n._updateCurrentUser(r.user)), r);
}
async function cy(n, e) {
  return fd(zt(n), e);
}
async function dR(n, e) {
  return dd(he(n), e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function pd(n) {
  const e = zt(n);
  e._getPasswordPolicyInternal() && (await e._updatePasswordPolicy());
}
async function fR(n, e, t) {
  if (tt(n.app)) return Promise.reject(gt(n));
  const i = zt(n),
    a = await $o(
      i,
      {
        returnSecureToken: !0,
        email: e,
        password: t,
        clientType: 'CLIENT_TYPE_WEB',
      },
      'signUpPassword',
      ay
    ).catch((c) => {
      throw (c.code === 'auth/password-does-not-meet-requirements' && pd(n), c);
    }),
    l = await cn._fromIdTokenResponse(i, 'signIn', a);
  return (await i._updateCurrentUser(l.user), l);
}
function pR(n, e, t) {
  return tt(n.app)
    ? Promise.reject(gt(n))
    : cy(he(n), Zn.credential(e, t)).catch(async (i) => {
        throw (
          i.code === 'auth/password-does-not-meet-requirements' && pd(n),
          i
        );
      });
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function uy(n, e) {
  return Ct(n, 'POST', '/v1/accounts:update', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function _R(n, { displayName: e, photoURL: t }) {
  if (e === void 0 && t === void 0) return;
  const i = he(n),
    r = {
      idToken: await i.getIdToken(),
      displayName: e,
      photoUrl: t,
      returnSecureToken: !0,
    },
    a = await qn(i, uy(i.auth, r));
  ((i.displayName = a.displayName || null), (i.photoURL = a.photoUrl || null));
  const l = i.providerData.find(({ providerId: c }) => c === 'password');
  (l && ((l.displayName = i.displayName), (l.photoURL = i.photoURL)),
    await i._updateTokensIfNecessary(a));
}
function hy(n, e, t, i) {
  return he(n).onIdTokenChanged(e, t, i);
}
function dy(n, e, t) {
  return he(n).beforeAuthStateChanged(e, t);
}
function mR(n, e, t, i) {
  return he(n).onAuthStateChanged(e, t, i);
}
function gR(n) {
  return he(n).signOut();
}
const cr = '__sak';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _d {
  constructor(e, t) {
    ((this.storageRetriever = e), (this.type = t));
  }
  _isAvailable() {
    try {
      return this.storage
        ? (this.storage.setItem(cr, '1'),
          this.storage.removeItem(cr),
          Promise.resolve(!0))
        : Promise.resolve(!1);
    } catch {
      return Promise.resolve(!1);
    }
  }
  _set(e, t) {
    return (this.storage.setItem(e, JSON.stringify(t)), Promise.resolve());
  }
  _get(e) {
    const t = this.storage.getItem(e);
    return Promise.resolve(t ? JSON.parse(t) : null);
  }
  _remove(e) {
    return (this.storage.removeItem(e), Promise.resolve());
  }
  get storage() {
    return this.storageRetriever();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fy = 1e3,
  py = 10;
class md extends _d {
  constructor() {
    (super(() => window.localStorage, 'LOCAL'),
      (this.boundEventHandler = (e, t) => this.onStorageEvent(e, t)),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.fallbackToPolling = od()),
      (this._shouldAllowMigration = !0));
  }
  forAllChangedKeys(e) {
    for (const t of Object.keys(this.listeners)) {
      const i = this.storage.getItem(t),
        s = this.localCache[t];
      i !== s && e(t, s, i);
    }
  }
  onStorageEvent(e, t = !1) {
    if (!e.key) {
      this.forAllChangedKeys((a, l, c) => {
        this.notifyListeners(a, c);
      });
      return;
    }
    const i = e.key;
    t ? this.detachListener() : this.stopPolling();
    const s = () => {
        const a = this.storage.getItem(i);
        (!t && this.localCache[i] === a) || this.notifyListeners(i, a);
      },
      r = this.storage.getItem(i);
    Lg() && r !== e.newValue && e.newValue !== e.oldValue
      ? setTimeout(s, py)
      : s();
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const i = this.listeners[e];
    if (i) for (const s of Array.from(i)) s(t && JSON.parse(t));
  }
  startPolling() {
    (this.stopPolling(),
      (this.pollTimer = setInterval(() => {
        this.forAllChangedKeys((e, t, i) => {
          this.onStorageEvent(
            new StorageEvent('storage', { key: e, oldValue: t, newValue: i }),
            !0
          );
        });
      }, fy)));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  attachListener() {
    window.addEventListener('storage', this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener('storage', this.boundEventHandler);
  }
  _addListener(e, t) {
    (Object.keys(this.listeners).length === 0 &&
      (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
      this.listeners[e] ||
        ((this.listeners[e] = new Set()),
        (this.localCache[e] = this.storage.getItem(e))),
      this.listeners[e].add(t));
  }
  _removeListener(e, t) {
    (this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 &&
        (this.detachListener(), this.stopPolling()));
  }
  async _set(e, t) {
    (await super._set(e, t), (this.localCache[e] = JSON.stringify(t)));
  }
  async _get(e) {
    const t = await super._get(e);
    return ((this.localCache[e] = JSON.stringify(t)), t);
  }
  async _remove(e) {
    (await super._remove(e), delete this.localCache[e]);
  }
}
md.type = 'LOCAL';
const _y = md;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gd extends _d {
  constructor() {
    super(() => window.sessionStorage, 'SESSION');
  }
  _addListener(e, t) {}
  _removeListener(e, t) {}
}
gd.type = 'SESSION';
const yd = gd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function my(n) {
  return Promise.all(
    n.map(async (e) => {
      try {
        return { fulfilled: !0, value: await e };
      } catch (t) {
        return { fulfilled: !1, reason: t };
      }
    })
  );
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kr {
  constructor(e) {
    ((this.eventTarget = e),
      (this.handlersMap = {}),
      (this.boundEventHandler = this.handleEvent.bind(this)));
  }
  static _getInstance(e) {
    const t = this.receivers.find((s) => s.isListeningto(e));
    if (t) return t;
    const i = new kr(e);
    return (this.receivers.push(i), i);
  }
  isListeningto(e) {
    return this.eventTarget === e;
  }
  async handleEvent(e) {
    const t = e,
      { eventId: i, eventType: s, data: r } = t.data,
      a = this.handlersMap[s];
    if (!(a != null && a.size)) return;
    t.ports[0].postMessage({ status: 'ack', eventId: i, eventType: s });
    const l = Array.from(a).map(async (h) => h(t.origin, r)),
      c = await my(l);
    t.ports[0].postMessage({
      status: 'done',
      eventId: i,
      eventType: s,
      response: c,
    });
  }
  _subscribe(e, t) {
    (Object.keys(this.handlersMap).length === 0 &&
      this.eventTarget.addEventListener('message', this.boundEventHandler),
      this.handlersMap[e] || (this.handlersMap[e] = new Set()),
      this.handlersMap[e].add(t));
  }
  _unsubscribe(e, t) {
    (this.handlersMap[e] && t && this.handlersMap[e].delete(t),
      (!t || this.handlersMap[e].size === 0) && delete this.handlersMap[e],
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.removeEventListener(
          'message',
          this.boundEventHandler
        ));
  }
}
kr.receivers = [];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Da(n = '', e = 10) {
  let t = '';
  for (let i = 0; i < e; i++) t += Math.floor(Math.random() * 10);
  return n + t;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gy {
  constructor(e) {
    ((this.target = e), (this.handlers = new Set()));
  }
  removeMessageHandler(e) {
    (e.messageChannel &&
      (e.messageChannel.port1.removeEventListener('message', e.onMessage),
      e.messageChannel.port1.close()),
      this.handlers.delete(e));
  }
  async _send(e, t, i = 50) {
    const s = typeof MessageChannel < 'u' ? new MessageChannel() : null;
    if (!s) throw new Error('connection_unavailable');
    let r, a;
    return new Promise((l, c) => {
      const h = Da('', 20);
      s.port1.start();
      const f = setTimeout(() => {
        c(new Error('unsupported_event'));
      }, i);
      ((a = {
        messageChannel: s,
        onMessage(_) {
          const g = _;
          if (g.data.eventId === h)
            switch (g.data.status) {
              case 'ack':
                (clearTimeout(f),
                  (r = setTimeout(() => {
                    c(new Error('timeout'));
                  }, 3e3)));
                break;
              case 'done':
                (clearTimeout(r), l(g.data.response));
                break;
              default:
                (clearTimeout(f),
                  clearTimeout(r),
                  c(new Error('invalid_response')));
                break;
            }
        },
      }),
        this.handlers.add(a),
        s.port1.addEventListener('message', a.onMessage),
        this.target.postMessage({ eventType: e, eventId: h, data: t }, [
          s.port2,
        ]));
    }).finally(() => {
      a && this.removeMessageHandler(a);
    });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function rt() {
  return window;
}
function yy(n) {
  rt().location.href = n;
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vd() {
  return (
    typeof rt().WorkerGlobalScope < 'u' &&
    typeof rt().importScripts == 'function'
  );
}
async function vy() {
  if (!(navigator != null && navigator.serviceWorker)) return null;
  try {
    return (await navigator.serviceWorker.ready).active;
  } catch {
    return null;
  }
}
function Ey() {
  var n;
  return (
    ((n = navigator == null ? void 0 : navigator.serviceWorker) === null ||
    n === void 0
      ? void 0
      : n.controller) || null
  );
}
function Ty() {
  return vd() ? self : null;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ed = 'firebaseLocalStorageDb',
  Iy = 1,
  ur = 'firebaseLocalStorage',
  Td = 'fbase_key';
class as {
  constructor(e) {
    this.request = e;
  }
  toPromise() {
    return new Promise((e, t) => {
      (this.request.addEventListener('success', () => {
        e(this.request.result);
      }),
        this.request.addEventListener('error', () => {
          t(this.request.error);
        }));
    });
  }
}
function Dr(n, e) {
  return n.transaction([ur], e ? 'readwrite' : 'readonly').objectStore(ur);
}
function wy() {
  const n = indexedDB.deleteDatabase(Ed);
  return new as(n).toPromise();
}
function Ho() {
  const n = indexedDB.open(Ed, Iy);
  return new Promise((e, t) => {
    (n.addEventListener('error', () => {
      t(n.error);
    }),
      n.addEventListener('upgradeneeded', () => {
        const i = n.result;
        try {
          i.createObjectStore(ur, { keyPath: Td });
        } catch (s) {
          t(s);
        }
      }),
      n.addEventListener('success', async () => {
        const i = n.result;
        i.objectStoreNames.contains(ur)
          ? e(i)
          : (i.close(), await wy(), e(await Ho()));
      }));
  });
}
async function tu(n, e, t) {
  const i = Dr(n, !0).put({ [Td]: e, value: t });
  return new as(i).toPromise();
}
async function Ay(n, e) {
  const t = Dr(n, !1).get(e),
    i = await new as(t).toPromise();
  return i === void 0 ? null : i.value;
}
function nu(n, e) {
  const t = Dr(n, !0).delete(e);
  return new as(t).toPromise();
}
const Ry = 800,
  Cy = 3;
class Id {
  constructor() {
    ((this.type = 'LOCAL'),
      (this._shouldAllowMigration = !0),
      (this.listeners = {}),
      (this.localCache = {}),
      (this.pollTimer = null),
      (this.pendingWrites = 0),
      (this.receiver = null),
      (this.sender = null),
      (this.serviceWorkerReceiverAvailable = !1),
      (this.activeServiceWorker = null),
      (this._workerInitializationPromise =
        this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        )));
  }
  async _openDb() {
    return this.db ? this.db : ((this.db = await Ho()), this.db);
  }
  async _withRetries(e) {
    let t = 0;
    for (;;)
      try {
        const i = await this._openDb();
        return await e(i);
      } catch (i) {
        if (t++ > Cy) throw i;
        this.db && (this.db.close(), (this.db = void 0));
      }
  }
  async initializeServiceWorkerMessaging() {
    return vd() ? this.initializeReceiver() : this.initializeSender();
  }
  async initializeReceiver() {
    ((this.receiver = kr._getInstance(Ty())),
      this.receiver._subscribe('keyChanged', async (e, t) => ({
        keyProcessed: (await this._poll()).includes(t.key),
      })),
      this.receiver._subscribe('ping', async (e, t) => ['keyChanged']));
  }
  async initializeSender() {
    var e, t;
    if (((this.activeServiceWorker = await vy()), !this.activeServiceWorker))
      return;
    this.sender = new gy(this.activeServiceWorker);
    const i = await this.sender._send('ping', {}, 800);
    i &&
      !((e = i[0]) === null || e === void 0) &&
      e.fulfilled &&
      !((t = i[0]) === null || t === void 0) &&
      t.value.includes('keyChanged') &&
      (this.serviceWorkerReceiverAvailable = !0);
  }
  async notifyServiceWorker(e) {
    if (
      !(
        !this.sender ||
        !this.activeServiceWorker ||
        Ey() !== this.activeServiceWorker
      )
    )
      try {
        await this.sender._send(
          'keyChanged',
          { key: e },
          this.serviceWorkerReceiverAvailable ? 800 : 50
        );
      } catch {}
  }
  async _isAvailable() {
    try {
      if (!indexedDB) return !1;
      const e = await Ho();
      return (await tu(e, cr, '1'), await nu(e, cr), !0);
    } catch {}
    return !1;
  }
  async _withPendingWrite(e) {
    this.pendingWrites++;
    try {
      await e();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(e, t) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((i) => tu(i, e, t)),
        (this.localCache[e] = t),
        this.notifyServiceWorker(e)
      )
    );
  }
  async _get(e) {
    const t = await this._withRetries((i) => Ay(i, e));
    return ((this.localCache[e] = t), t);
  }
  async _remove(e) {
    return this._withPendingWrite(
      async () => (
        await this._withRetries((t) => nu(t, e)),
        delete this.localCache[e],
        this.notifyServiceWorker(e)
      )
    );
  }
  async _poll() {
    const e = await this._withRetries((s) => {
      const r = Dr(s, !1).getAll();
      return new as(r).toPromise();
    });
    if (!e) return [];
    if (this.pendingWrites !== 0) return [];
    const t = [],
      i = new Set();
    if (e.length !== 0)
      for (const { fbase_key: s, value: r } of e)
        (i.add(s),
          JSON.stringify(this.localCache[s]) !== JSON.stringify(r) &&
            (this.notifyListeners(s, r), t.push(s)));
    for (const s of Object.keys(this.localCache))
      this.localCache[s] &&
        !i.has(s) &&
        (this.notifyListeners(s, null), t.push(s));
    return t;
  }
  notifyListeners(e, t) {
    this.localCache[e] = t;
    const i = this.listeners[e];
    if (i) for (const s of Array.from(i)) s(t);
  }
  startPolling() {
    (this.stopPolling(),
      (this.pollTimer = setInterval(async () => this._poll(), Ry)));
  }
  stopPolling() {
    this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
  }
  _addListener(e, t) {
    (Object.keys(this.listeners).length === 0 && this.startPolling(),
      this.listeners[e] || ((this.listeners[e] = new Set()), this._get(e)),
      this.listeners[e].add(t));
  }
  _removeListener(e, t) {
    (this.listeners[e] &&
      (this.listeners[e].delete(t),
      this.listeners[e].size === 0 && delete this.listeners[e]),
      Object.keys(this.listeners).length === 0 && this.stopPolling());
  }
}
Id.type = 'LOCAL';
const Sy = Id;
new ss(3e4, 6e4);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Py(n, e) {
  return e
    ? _t(e)
    : (x(n._popupRedirectResolver, n, 'argument-error'),
      n._popupRedirectResolver);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Oa extends Na {
  constructor(e) {
    (super('custom', 'custom'), (this.params = e));
  }
  _getIdTokenResponse(e) {
    return Ln(e, this._buildIdpRequest());
  }
  _linkToIdToken(e, t) {
    return Ln(e, this._buildIdpRequest(t));
  }
  _getReauthenticationResolver(e) {
    return Ln(e, this._buildIdpRequest());
  }
  _buildIdpRequest(e) {
    const t = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: !0,
      returnIdpCredential: !0,
    };
    return (e && (t.idToken = e), t);
  }
}
function by(n) {
  return fd(n.auth, new Oa(n), n.bypassAuthState);
}
function Ny(n) {
  const { auth: e, user: t } = n;
  return (x(t, e, 'internal-error'), dd(t, new Oa(n), n.bypassAuthState));
}
async function ky(n) {
  const { auth: e, user: t } = n;
  return (x(t, e, 'internal-error'), ly(t, new Oa(n), n.bypassAuthState));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wd {
  constructor(e, t, i, s, r = !1) {
    ((this.auth = e),
      (this.resolver = i),
      (this.user = s),
      (this.bypassAuthState = r),
      (this.pendingPromise = null),
      (this.eventManager = null),
      (this.filter = Array.isArray(t) ? t : [t]));
  }
  execute() {
    return new Promise(async (e, t) => {
      this.pendingPromise = { resolve: e, reject: t };
      try {
        ((this.eventManager = await this.resolver._initialize(this.auth)),
          await this.onExecution(),
          this.eventManager.registerConsumer(this));
      } catch (i) {
        this.reject(i);
      }
    });
  }
  async onAuthEvent(e) {
    const {
      urlResponse: t,
      sessionId: i,
      postBody: s,
      tenantId: r,
      error: a,
      type: l,
    } = e;
    if (a) {
      this.reject(a);
      return;
    }
    const c = {
      auth: this.auth,
      requestUri: t,
      sessionId: i,
      tenantId: r || void 0,
      postBody: s || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState,
    };
    try {
      this.resolve(await this.getIdpTask(l)(c));
    } catch (h) {
      this.reject(h);
    }
  }
  onError(e) {
    this.reject(e);
  }
  getIdpTask(e) {
    switch (e) {
      case 'signInViaPopup':
      case 'signInViaRedirect':
        return by;
      case 'linkViaPopup':
      case 'linkViaRedirect':
        return ky;
      case 'reauthViaPopup':
      case 'reauthViaRedirect':
        return Ny;
      default:
        Je(this.auth, 'internal-error');
    }
  }
  resolve(e) {
    (Tt(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.resolve(e),
      this.unregisterAndCleanUp());
  }
  reject(e) {
    (Tt(this.pendingPromise, 'Pending promise was never set'),
      this.pendingPromise.reject(e),
      this.unregisterAndCleanUp());
  }
  unregisterAndCleanUp() {
    (this.eventManager && this.eventManager.unregisterConsumer(this),
      (this.pendingPromise = null),
      this.cleanUp());
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dy = new ss(2e3, 1e4);
class kn extends wd {
  constructor(e, t, i, s, r) {
    (super(e, t, s, r),
      (this.provider = i),
      (this.authWindow = null),
      (this.pollId = null),
      kn.currentPopupAction && kn.currentPopupAction.cancel(),
      (kn.currentPopupAction = this));
  }
  async executeNotNull() {
    const e = await this.execute();
    return (x(e, this.auth, 'internal-error'), e);
  }
  async onExecution() {
    Tt(this.filter.length === 1, 'Popup operations only handle one event');
    const e = Da();
    ((this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      e
    )),
      (this.authWindow.associatedEvent = e),
      this.resolver._originValidation(this.auth).catch((t) => {
        this.reject(t);
      }),
      this.resolver._isIframeWebStorageSupported(this.auth, (t) => {
        t || this.reject(st(this.auth, 'web-storage-unsupported'));
      }),
      this.pollUserCancellation());
  }
  get eventId() {
    var e;
    return (
      ((e = this.authWindow) === null || e === void 0
        ? void 0
        : e.associatedEvent) || null
    );
  }
  cancel() {
    this.reject(st(this.auth, 'cancelled-popup-request'));
  }
  cleanUp() {
    (this.authWindow && this.authWindow.close(),
      this.pollId && window.clearTimeout(this.pollId),
      (this.authWindow = null),
      (this.pollId = null),
      (kn.currentPopupAction = null));
  }
  pollUserCancellation() {
    const e = () => {
      var t, i;
      if (
        !(
          (i =
            (t = this.authWindow) === null || t === void 0
              ? void 0
              : t.window) === null || i === void 0
        ) &&
        i.closed
      ) {
        this.pollId = window.setTimeout(() => {
          ((this.pollId = null),
            this.reject(st(this.auth, 'popup-closed-by-user')));
        }, 8e3);
        return;
      }
      this.pollId = window.setTimeout(e, Dy.get());
    };
    e();
  }
}
kn.currentPopupAction = null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Oy = 'pendingRedirect',
  Qs = new Map();
class Vy extends wd {
  constructor(e, t, i = !1) {
    (super(
      e,
      ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
      t,
      void 0,
      i
    ),
      (this.eventId = null));
  }
  async execute() {
    let e = Qs.get(this.auth._key());
    if (!e) {
      try {
        const i = (await My(this.resolver, this.auth))
          ? await super.execute()
          : null;
        e = () => Promise.resolve(i);
      } catch (t) {
        e = () => Promise.reject(t);
      }
      Qs.set(this.auth._key(), e);
    }
    return (
      this.bypassAuthState ||
        Qs.set(this.auth._key(), () => Promise.resolve(null)),
      e()
    );
  }
  async onAuthEvent(e) {
    if (e.type === 'signInViaRedirect') return super.onAuthEvent(e);
    if (e.type === 'unknown') {
      this.resolve(null);
      return;
    }
    if (e.eventId) {
      const t = await this.auth._redirectUserForId(e.eventId);
      if (t) return ((this.user = t), super.onAuthEvent(e));
      this.resolve(null);
    }
  }
  async onExecution() {}
  cleanUp() {}
}
async function My(n, e) {
  const t = Fy(e),
    i = xy(n);
  if (!(await i._isAvailable())) return !1;
  const s = (await i._get(t)) === 'true';
  return (await i._remove(t), s);
}
function Ly(n, e) {
  Qs.set(n._key(), e);
}
function xy(n) {
  return _t(n._redirectPersistence);
}
function Fy(n) {
  return Ks(Oy, n.config.apiKey, n.name);
}
async function yR(n, e) {
  return (await zt(n)._initializationPromise, Ad(n, e, !1));
}
async function Ad(n, e, t = !1) {
  if (tt(n.app)) return Promise.reject(gt(n));
  const i = zt(n),
    s = Py(i, e),
    a = await new Vy(i, s, t).execute();
  return (
    a &&
      !t &&
      (delete a.user._redirectEventId,
      await i._persistUserIfCurrent(a.user),
      await i._setRedirectUser(null, e)),
    a
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Uy = 10 * 60 * 1e3;
class By {
  constructor(e) {
    ((this.auth = e),
      (this.cachedEventUids = new Set()),
      (this.consumers = new Set()),
      (this.queuedRedirectEvent = null),
      (this.hasHandledPotentialRedirect = !1),
      (this.lastProcessedEventTime = Date.now()));
  }
  registerConsumer(e) {
    (this.consumers.add(e),
      this.queuedRedirectEvent &&
        this.isEventForConsumer(this.queuedRedirectEvent, e) &&
        (this.sendToConsumer(this.queuedRedirectEvent, e),
        this.saveEventToCache(this.queuedRedirectEvent),
        (this.queuedRedirectEvent = null)));
  }
  unregisterConsumer(e) {
    this.consumers.delete(e);
  }
  onEvent(e) {
    if (this.hasEventBeenHandled(e)) return !1;
    let t = !1;
    return (
      this.consumers.forEach((i) => {
        this.isEventForConsumer(e, i) &&
          ((t = !0), this.sendToConsumer(e, i), this.saveEventToCache(e));
      }),
      this.hasHandledPotentialRedirect ||
        !qy(e) ||
        ((this.hasHandledPotentialRedirect = !0),
        t || ((this.queuedRedirectEvent = e), (t = !0))),
      t
    );
  }
  sendToConsumer(e, t) {
    var i;
    if (e.error && !Rd(e)) {
      const s =
        ((i = e.error.code) === null || i === void 0
          ? void 0
          : i.split('auth/')[1]) || 'internal-error';
      t.onError(st(this.auth, s));
    } else t.onAuthEvent(e);
  }
  isEventForConsumer(e, t) {
    const i = t.eventId === null || (!!e.eventId && e.eventId === t.eventId);
    return t.filter.includes(e.type) && i;
  }
  hasEventBeenHandled(e) {
    return (
      Date.now() - this.lastProcessedEventTime >= Uy &&
        this.cachedEventUids.clear(),
      this.cachedEventUids.has(iu(e))
    );
  }
  saveEventToCache(e) {
    (this.cachedEventUids.add(iu(e)),
      (this.lastProcessedEventTime = Date.now()));
  }
}
function iu(n) {
  return [n.type, n.eventId, n.sessionId, n.tenantId]
    .filter((e) => e)
    .join('-');
}
function Rd({ type: n, error: e }) {
  return (
    n === 'unknown' && (e == null ? void 0 : e.code) === 'auth/no-auth-event'
  );
}
function qy(n) {
  switch (n.type) {
    case 'signInViaRedirect':
    case 'linkViaRedirect':
    case 'reauthViaRedirect':
      return !0;
    case 'unknown':
      return Rd(n);
    default:
      return !1;
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Wy(n, e = {}) {
  return Ct(n, 'GET', '/v1/projects', e);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const jy = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
  $y = /^https?/;
async function Hy(n) {
  if (n.config.emulator) return;
  const { authorizedDomains: e } = await Wy(n);
  for (const t of e)
    try {
      if (Gy(t)) return;
    } catch {}
  Je(n, 'unauthorized-domain');
}
function Gy(n) {
  const e = Wo(),
    { protocol: t, hostname: i } = new URL(e);
  if (n.startsWith('chrome-extension://')) {
    const a = new URL(n);
    return a.hostname === '' && i === ''
      ? t === 'chrome-extension:' &&
          n.replace('chrome-extension://', '') ===
            e.replace('chrome-extension://', '')
      : t === 'chrome-extension:' && a.hostname === i;
  }
  if (!$y.test(t)) return !1;
  if (jy.test(n)) return i === n;
  const s = n.replace(/\./g, '\\.');
  return new RegExp('^(.+\\.' + s + '|' + s + ')$', 'i').test(i);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const zy = new ss(3e4, 6e4);
function su() {
  const n = rt().___jsl;
  if (n != null && n.H) {
    for (const e of Object.keys(n.H))
      if (
        ((n.H[e].r = n.H[e].r || []),
        (n.H[e].L = n.H[e].L || []),
        (n.H[e].r = [...n.H[e].L]),
        n.CP)
      )
        for (let t = 0; t < n.CP.length; t++) n.CP[t] = null;
  }
}
function Ky(n) {
  return new Promise((e, t) => {
    var i, s, r;
    function a() {
      (su(),
        gapi.load('gapi.iframes', {
          callback: () => {
            e(gapi.iframes.getContext());
          },
          ontimeout: () => {
            (su(), t(st(n, 'network-request-failed')));
          },
          timeout: zy.get(),
        }));
    }
    if (
      !(
        (s = (i = rt().gapi) === null || i === void 0 ? void 0 : i.iframes) ===
          null || s === void 0
      ) &&
      s.Iframe
    )
      e(gapi.iframes.getContext());
    else if (!((r = rt().gapi) === null || r === void 0) && r.load) a();
    else {
      const l = Hg('iframefcb');
      return (
        (rt()[l] = () => {
          gapi.load ? a() : t(st(n, 'network-request-failed'));
        }),
        ld(`${$g()}?onload=${l}`).catch((c) => t(c))
      );
    }
  }).catch((e) => {
    throw ((Ys = null), e);
  });
}
let Ys = null;
function Qy(n) {
  return ((Ys = Ys || Ky(n)), Ys);
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Yy = new ss(5e3, 15e3),
  Xy = '__/auth/iframe',
  Jy = 'emulator/auth/iframe',
  Zy = {
    style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
    'aria-hidden': 'true',
    tabindex: '-1',
  },
  ev = new Map([
    ['identitytoolkit.googleapis.com', 'p'],
    ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
    ['test-identitytoolkit.sandbox.googleapis.com', 't'],
  ]);
function tv(n) {
  const e = n.config;
  x(e.authDomain, n, 'auth-domain-config-required');
  const t = e.emulator ? Sa(e, Jy) : `https://${n.config.authDomain}/${Xy}`,
    i = { apiKey: e.apiKey, appName: n.name, v: gn },
    s = ev.get(n.config.apiHost);
  s && (i.eid = s);
  const r = n._getFrameworks();
  return (r.length && (i.fw = r.join(',')), `${t}?${Jn(i).slice(1)}`);
}
async function nv(n) {
  const e = await Qy(n),
    t = rt().gapi;
  return (
    x(t, n, 'internal-error'),
    e.open(
      {
        where: document.body,
        url: tv(n),
        messageHandlersFilter: t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
        attributes: Zy,
        dontclear: !0,
      },
      (i) =>
        new Promise(async (s, r) => {
          await i.restyle({ setHideOnLeave: !1 });
          const a = st(n, 'network-request-failed'),
            l = rt().setTimeout(() => {
              r(a);
            }, Yy.get());
          function c() {
            (rt().clearTimeout(l), s(i));
          }
          i.ping(c).then(c, () => {
            r(a);
          });
        })
    )
  );
}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iv = {
    location: 'yes',
    resizable: 'yes',
    statusbar: 'yes',
    toolbar: 'no',
  },
  sv = 500,
  rv = 600,
  ov = '_blank',
  av = 'http://localhost';
class ru {
  constructor(e) {
    ((this.window = e), (this.associatedEvent = null));
  }
  close() {
    if (this.window)
      try {
        this.window.close();
      } catch {}
  }
}
function lv(n, e, t, i = sv, s = rv) {
  const r = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
    a = Math.max((window.screen.availWidth - i) / 2, 0).toString();
  let l = '';
  const c = Object.assign(Object.assign({}, iv), {
      width: i.toString(),
      height: s.toString(),
      top: r,
      left: a,
    }),
    h = Me().toLowerCase();
  (t && (l = td(h) ? ov : t), Zh(h) && ((e = e || av), (c.scrollbars = 'yes')));
  const f = Object.entries(c).reduce((g, [R, P]) => `${g}${R}=${P},`, '');
  if (Mg(h) && l !== '_self') return (cv(e || '', l), new ru(null));
  const _ = window.open(e || '', l, f);
  x(_, n, 'popup-blocked');
  try {
    _.focus();
  } catch {}
  return new ru(_);
}
function cv(n, e) {
  const t = document.createElement('a');
  ((t.href = n), (t.target = e));
  const i = document.createEvent('MouseEvent');
  (i.initMouseEvent(
    'click',
    !0,
    !0,
    window,
    1,
    0,
    0,
    0,
    0,
    !1,
    !1,
    !1,
    !1,
    1,
    null
  ),
    t.dispatchEvent(i));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const uv = '__/auth/handler',
  hv = 'emulator/auth/handler',
  dv = encodeURIComponent('fac');
async function ou(n, e, t, i, s, r) {
  (x(n.config.authDomain, n, 'auth-domain-config-required'),
    x(n.config.apiKey, n, 'invalid-api-key'));
  const a = {
    apiKey: n.config.apiKey,
    appName: n.name,
    authType: t,
    redirectUrl: i,
    v: gn,
    eventId: s,
  };
  if (e instanceof ud) {
    (e.setDefaultLanguage(n.languageCode),
      (a.providerId = e.providerId || ''),
      Fo(e.getCustomParameters()) ||
        (a.customParameters = JSON.stringify(e.getCustomParameters())));
    for (const [f, _] of Object.entries({})) a[f] = _;
  }
  if (e instanceof os) {
    const f = e.getScopes().filter((_) => _ !== '');
    f.length > 0 && (a.scopes = f.join(','));
  }
  n.tenantId && (a.tid = n.tenantId);
  const l = a;
  for (const f of Object.keys(l)) l[f] === void 0 && delete l[f];
  const c = await n._getAppCheckToken(),
    h = c ? `#${dv}=${encodeURIComponent(c)}` : '';
  return `${fv(n)}?${Jn(l).slice(1)}${h}`;
}
function fv({ config: n }) {
  return n.emulator ? Sa(n, hv) : `https://${n.authDomain}/${uv}`;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Co = 'webStorageSupport';
class pv {
  constructor() {
    ((this.eventManagers = {}),
      (this.iframes = {}),
      (this.originValidationPromises = {}),
      (this._redirectPersistence = yd),
      (this._completeRedirectFn = Ad),
      (this._overrideRedirectResult = Ly));
  }
  async _openPopup(e, t, i, s) {
    var r;
    Tt(
      (r = this.eventManagers[e._key()]) === null || r === void 0
        ? void 0
        : r.manager,
      '_initialize() not called before _openPopup()'
    );
    const a = await ou(e, t, i, Wo(), s);
    return lv(e, a, Da());
  }
  async _openRedirect(e, t, i, s) {
    await this._originValidation(e);
    const r = await ou(e, t, i, Wo(), s);
    return (yy(r), new Promise(() => {}));
  }
  _initialize(e) {
    const t = e._key();
    if (this.eventManagers[t]) {
      const { manager: s, promise: r } = this.eventManagers[t];
      return s
        ? Promise.resolve(s)
        : (Tt(r, 'If manager is not set, promise should be'), r);
    }
    const i = this.initAndGetManager(e);
    return (
      (this.eventManagers[t] = { promise: i }),
      i.catch(() => {
        delete this.eventManagers[t];
      }),
      i
    );
  }
  async initAndGetManager(e) {
    const t = await nv(e),
      i = new By(e);
    return (
      t.register(
        'authEvent',
        (s) => (
          x(s == null ? void 0 : s.authEvent, e, 'invalid-auth-event'),
          { status: i.onEvent(s.authEvent) ? 'ACK' : 'ERROR' }
        ),
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      ),
      (this.eventManagers[e._key()] = { manager: i }),
      (this.iframes[e._key()] = t),
      i
    );
  }
  _isIframeWebStorageSupported(e, t) {
    this.iframes[e._key()].send(
      Co,
      { type: Co },
      (s) => {
        var r;
        const a =
          (r = s == null ? void 0 : s[0]) === null || r === void 0
            ? void 0
            : r[Co];
        (a !== void 0 && t(!!a), Je(e, 'internal-error'));
      },
      gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
    );
  }
  _originValidation(e) {
    const t = e._key();
    return (
      this.originValidationPromises[t] ||
        (this.originValidationPromises[t] = Hy(e)),
      this.originValidationPromises[t]
    );
  }
  get _shouldInitProactively() {
    return od() || ed() || ba();
  }
}
const _v = pv;
var au = '@firebase/auth',
  lu = '1.7.9';
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mv {
  constructor(e) {
    ((this.auth = e), (this.internalListeners = new Map()));
  }
  getUid() {
    var e;
    return (
      this.assertAuthConfigured(),
      ((e = this.auth.currentUser) === null || e === void 0 ? void 0 : e.uid) ||
        null
    );
  }
  async getToken(e) {
    return (
      this.assertAuthConfigured(),
      await this.auth._initializationPromise,
      this.auth.currentUser
        ? { accessToken: await this.auth.currentUser.getIdToken(e) }
        : null
    );
  }
  addAuthTokenListener(e) {
    if ((this.assertAuthConfigured(), this.internalListeners.has(e))) return;
    const t = this.auth.onIdTokenChanged((i) => {
      e((i == null ? void 0 : i.stsTokenManager.accessToken) || null);
    });
    (this.internalListeners.set(e, t), this.updateProactiveRefresh());
  }
  removeAuthTokenListener(e) {
    this.assertAuthConfigured();
    const t = this.internalListeners.get(e);
    t && (this.internalListeners.delete(e), t(), this.updateProactiveRefresh());
  }
  assertAuthConfigured() {
    x(
      this.auth._initializationPromise,
      'dependent-sdk-initialized-before-auth'
    );
  }
  updateProactiveRefresh() {
    this.internalListeners.size > 0
      ? this.auth._startProactiveRefresh()
      : this.auth._stopProactiveRefresh();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gv(n) {
  switch (n) {
    case 'Node':
      return 'node';
    case 'ReactNative':
      return 'rn';
    case 'Worker':
      return 'webworker';
    case 'Cordova':
      return 'cordova';
    case 'WebExtension':
      return 'web-extension';
    default:
      return;
  }
}
function yv(n) {
  (an(
    new qt(
      'auth',
      (e, { options: t }) => {
        const i = e.getProvider('app').getImmediate(),
          s = e.getProvider('heartbeat'),
          r = e.getProvider('app-check-internal'),
          { apiKey: a, authDomain: l } = i.options;
        x(a && !a.includes(':'), 'invalid-api-key', { appName: i.name });
        const c = {
            apiKey: a,
            authDomain: l,
            clientPlatform: n,
            apiHost: 'identitytoolkit.googleapis.com',
            tokenApiHost: 'securetoken.googleapis.com',
            apiScheme: 'https',
            sdkClientVersion: ad(n),
          },
          h = new qg(i, s, r, c);
        return (Yg(h, t), h);
      },
      'PUBLIC'
    )
      .setInstantiationMode('EXPLICIT')
      .setInstanceCreatedCallback((e, t, i) => {
        e.getProvider('auth-internal').initialize();
      })
  ),
    an(
      new qt(
        'auth-internal',
        (e) => {
          const t = zt(e.getProvider('auth').getImmediate());
          return ((i) => new mv(i))(t);
        },
        'PRIVATE'
      ).setInstantiationMode('EXPLICIT')
    ),
    it(au, lu, gv(n)),
    it(au, lu, 'esm2017'));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const vv = 5 * 60,
  Ev = Fh('authIdTokenMaxAge') || vv;
let cu = null;
const Tv = (n) => async (e) => {
  const t = e && (await e.getIdTokenResult()),
    i = t && (new Date().getTime() - Date.parse(t.issuedAtTime)) / 1e3;
  if (i && i > Ev) return;
  const s = t == null ? void 0 : t.token;
  cu !== s &&
    ((cu = s),
    await fetch(n, {
      method: s ? 'POST' : 'DELETE',
      headers: s ? { Authorization: `Bearer ${s}` } : {},
    }));
};
function vR(n = qh()) {
  const e = Ra(n, 'auth');
  if (e.isInitialized()) return e.getImmediate();
  const t = Qg(n, { popupRedirectResolver: _v, persistence: [Sy, _y, yd] }),
    i = Fh('authTokenSyncURL');
  if (i && typeof isSecureContext == 'boolean' && isSecureContext) {
    const r = new URL(i, location.origin);
    if (location.origin === r.origin) {
      const a = Tv(r.toString());
      (dy(t, a, () => a(t.currentUser)), hy(t, (l) => a(l)));
    }
  }
  const s = Lh('auth');
  return (s && Xg(t, `http://${s}`), t);
}
function Iv() {
  var n, e;
  return (e =
    (n = document.getElementsByTagName('head')) === null || n === void 0
      ? void 0
      : n[0]) !== null && e !== void 0
    ? e
    : document;
}
Wg({
  loadJS(n) {
    return new Promise((e, t) => {
      const i = document.createElement('script');
      (i.setAttribute('src', n),
        (i.onload = e),
        (i.onerror = (s) => {
          const r = st('internal-error');
          ((r.customData = s), t(r));
        }),
        (i.type = 'text/javascript'),
        (i.charset = 'UTF-8'),
        Iv().appendChild(i));
    });
  },
  gapiScript: 'https://apis.google.com/js/api.js',
  recaptchaV2Script: 'https://www.google.com/recaptcha/api.js',
  recaptchaEnterpriseScript:
    'https://www.google.com/recaptcha/enterprise.js?render=',
});
yv('Browser');
var uu =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof on < 'u'
        ? on
        : typeof self < 'u'
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var rn, Cd;
(function () {
  var n;
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function e(T, m) {
    function v() {}
    ((v.prototype = m.prototype),
      (T.D = m.prototype),
      (T.prototype = new v()),
      (T.prototype.constructor = T),
      (T.C = function (E, I, A) {
        for (
          var y = Array(arguments.length - 2), ct = 2;
          ct < arguments.length;
          ct++
        )
          y[ct - 2] = arguments[ct];
        return m.prototype[I].apply(E, y);
      }));
  }
  function t() {
    this.blockSize = -1;
  }
  function i() {
    ((this.blockSize = -1),
      (this.blockSize = 64),
      (this.g = Array(4)),
      (this.B = Array(this.blockSize)),
      (this.o = this.h = 0),
      this.s());
  }
  (e(i, t),
    (i.prototype.s = function () {
      ((this.g[0] = 1732584193),
        (this.g[1] = 4023233417),
        (this.g[2] = 2562383102),
        (this.g[3] = 271733878),
        (this.o = this.h = 0));
    }));
  function s(T, m, v) {
    v || (v = 0);
    var E = Array(16);
    if (typeof m == 'string')
      for (var I = 0; 16 > I; ++I)
        E[I] =
          m.charCodeAt(v++) |
          (m.charCodeAt(v++) << 8) |
          (m.charCodeAt(v++) << 16) |
          (m.charCodeAt(v++) << 24);
    else
      for (I = 0; 16 > I; ++I)
        E[I] = m[v++] | (m[v++] << 8) | (m[v++] << 16) | (m[v++] << 24);
    ((m = T.g[0]), (v = T.g[1]), (I = T.g[2]));
    var A = T.g[3],
      y = (m + (A ^ (v & (I ^ A))) + E[0] + 3614090360) & 4294967295;
    ((m = v + (((y << 7) & 4294967295) | (y >>> 25))),
      (y = (A + (I ^ (m & (v ^ I))) + E[1] + 3905402710) & 4294967295),
      (A = m + (((y << 12) & 4294967295) | (y >>> 20))),
      (y = (I + (v ^ (A & (m ^ v))) + E[2] + 606105819) & 4294967295),
      (I = A + (((y << 17) & 4294967295) | (y >>> 15))),
      (y = (v + (m ^ (I & (A ^ m))) + E[3] + 3250441966) & 4294967295),
      (v = I + (((y << 22) & 4294967295) | (y >>> 10))),
      (y = (m + (A ^ (v & (I ^ A))) + E[4] + 4118548399) & 4294967295),
      (m = v + (((y << 7) & 4294967295) | (y >>> 25))),
      (y = (A + (I ^ (m & (v ^ I))) + E[5] + 1200080426) & 4294967295),
      (A = m + (((y << 12) & 4294967295) | (y >>> 20))),
      (y = (I + (v ^ (A & (m ^ v))) + E[6] + 2821735955) & 4294967295),
      (I = A + (((y << 17) & 4294967295) | (y >>> 15))),
      (y = (v + (m ^ (I & (A ^ m))) + E[7] + 4249261313) & 4294967295),
      (v = I + (((y << 22) & 4294967295) | (y >>> 10))),
      (y = (m + (A ^ (v & (I ^ A))) + E[8] + 1770035416) & 4294967295),
      (m = v + (((y << 7) & 4294967295) | (y >>> 25))),
      (y = (A + (I ^ (m & (v ^ I))) + E[9] + 2336552879) & 4294967295),
      (A = m + (((y << 12) & 4294967295) | (y >>> 20))),
      (y = (I + (v ^ (A & (m ^ v))) + E[10] + 4294925233) & 4294967295),
      (I = A + (((y << 17) & 4294967295) | (y >>> 15))),
      (y = (v + (m ^ (I & (A ^ m))) + E[11] + 2304563134) & 4294967295),
      (v = I + (((y << 22) & 4294967295) | (y >>> 10))),
      (y = (m + (A ^ (v & (I ^ A))) + E[12] + 1804603682) & 4294967295),
      (m = v + (((y << 7) & 4294967295) | (y >>> 25))),
      (y = (A + (I ^ (m & (v ^ I))) + E[13] + 4254626195) & 4294967295),
      (A = m + (((y << 12) & 4294967295) | (y >>> 20))),
      (y = (I + (v ^ (A & (m ^ v))) + E[14] + 2792965006) & 4294967295),
      (I = A + (((y << 17) & 4294967295) | (y >>> 15))),
      (y = (v + (m ^ (I & (A ^ m))) + E[15] + 1236535329) & 4294967295),
      (v = I + (((y << 22) & 4294967295) | (y >>> 10))),
      (y = (m + (I ^ (A & (v ^ I))) + E[1] + 4129170786) & 4294967295),
      (m = v + (((y << 5) & 4294967295) | (y >>> 27))),
      (y = (A + (v ^ (I & (m ^ v))) + E[6] + 3225465664) & 4294967295),
      (A = m + (((y << 9) & 4294967295) | (y >>> 23))),
      (y = (I + (m ^ (v & (A ^ m))) + E[11] + 643717713) & 4294967295),
      (I = A + (((y << 14) & 4294967295) | (y >>> 18))),
      (y = (v + (A ^ (m & (I ^ A))) + E[0] + 3921069994) & 4294967295),
      (v = I + (((y << 20) & 4294967295) | (y >>> 12))),
      (y = (m + (I ^ (A & (v ^ I))) + E[5] + 3593408605) & 4294967295),
      (m = v + (((y << 5) & 4294967295) | (y >>> 27))),
      (y = (A + (v ^ (I & (m ^ v))) + E[10] + 38016083) & 4294967295),
      (A = m + (((y << 9) & 4294967295) | (y >>> 23))),
      (y = (I + (m ^ (v & (A ^ m))) + E[15] + 3634488961) & 4294967295),
      (I = A + (((y << 14) & 4294967295) | (y >>> 18))),
      (y = (v + (A ^ (m & (I ^ A))) + E[4] + 3889429448) & 4294967295),
      (v = I + (((y << 20) & 4294967295) | (y >>> 12))),
      (y = (m + (I ^ (A & (v ^ I))) + E[9] + 568446438) & 4294967295),
      (m = v + (((y << 5) & 4294967295) | (y >>> 27))),
      (y = (A + (v ^ (I & (m ^ v))) + E[14] + 3275163606) & 4294967295),
      (A = m + (((y << 9) & 4294967295) | (y >>> 23))),
      (y = (I + (m ^ (v & (A ^ m))) + E[3] + 4107603335) & 4294967295),
      (I = A + (((y << 14) & 4294967295) | (y >>> 18))),
      (y = (v + (A ^ (m & (I ^ A))) + E[8] + 1163531501) & 4294967295),
      (v = I + (((y << 20) & 4294967295) | (y >>> 12))),
      (y = (m + (I ^ (A & (v ^ I))) + E[13] + 2850285829) & 4294967295),
      (m = v + (((y << 5) & 4294967295) | (y >>> 27))),
      (y = (A + (v ^ (I & (m ^ v))) + E[2] + 4243563512) & 4294967295),
      (A = m + (((y << 9) & 4294967295) | (y >>> 23))),
      (y = (I + (m ^ (v & (A ^ m))) + E[7] + 1735328473) & 4294967295),
      (I = A + (((y << 14) & 4294967295) | (y >>> 18))),
      (y = (v + (A ^ (m & (I ^ A))) + E[12] + 2368359562) & 4294967295),
      (v = I + (((y << 20) & 4294967295) | (y >>> 12))),
      (y = (m + (v ^ I ^ A) + E[5] + 4294588738) & 4294967295),
      (m = v + (((y << 4) & 4294967295) | (y >>> 28))),
      (y = (A + (m ^ v ^ I) + E[8] + 2272392833) & 4294967295),
      (A = m + (((y << 11) & 4294967295) | (y >>> 21))),
      (y = (I + (A ^ m ^ v) + E[11] + 1839030562) & 4294967295),
      (I = A + (((y << 16) & 4294967295) | (y >>> 16))),
      (y = (v + (I ^ A ^ m) + E[14] + 4259657740) & 4294967295),
      (v = I + (((y << 23) & 4294967295) | (y >>> 9))),
      (y = (m + (v ^ I ^ A) + E[1] + 2763975236) & 4294967295),
      (m = v + (((y << 4) & 4294967295) | (y >>> 28))),
      (y = (A + (m ^ v ^ I) + E[4] + 1272893353) & 4294967295),
      (A = m + (((y << 11) & 4294967295) | (y >>> 21))),
      (y = (I + (A ^ m ^ v) + E[7] + 4139469664) & 4294967295),
      (I = A + (((y << 16) & 4294967295) | (y >>> 16))),
      (y = (v + (I ^ A ^ m) + E[10] + 3200236656) & 4294967295),
      (v = I + (((y << 23) & 4294967295) | (y >>> 9))),
      (y = (m + (v ^ I ^ A) + E[13] + 681279174) & 4294967295),
      (m = v + (((y << 4) & 4294967295) | (y >>> 28))),
      (y = (A + (m ^ v ^ I) + E[0] + 3936430074) & 4294967295),
      (A = m + (((y << 11) & 4294967295) | (y >>> 21))),
      (y = (I + (A ^ m ^ v) + E[3] + 3572445317) & 4294967295),
      (I = A + (((y << 16) & 4294967295) | (y >>> 16))),
      (y = (v + (I ^ A ^ m) + E[6] + 76029189) & 4294967295),
      (v = I + (((y << 23) & 4294967295) | (y >>> 9))),
      (y = (m + (v ^ I ^ A) + E[9] + 3654602809) & 4294967295),
      (m = v + (((y << 4) & 4294967295) | (y >>> 28))),
      (y = (A + (m ^ v ^ I) + E[12] + 3873151461) & 4294967295),
      (A = m + (((y << 11) & 4294967295) | (y >>> 21))),
      (y = (I + (A ^ m ^ v) + E[15] + 530742520) & 4294967295),
      (I = A + (((y << 16) & 4294967295) | (y >>> 16))),
      (y = (v + (I ^ A ^ m) + E[2] + 3299628645) & 4294967295),
      (v = I + (((y << 23) & 4294967295) | (y >>> 9))),
      (y = (m + (I ^ (v | ~A)) + E[0] + 4096336452) & 4294967295),
      (m = v + (((y << 6) & 4294967295) | (y >>> 26))),
      (y = (A + (v ^ (m | ~I)) + E[7] + 1126891415) & 4294967295),
      (A = m + (((y << 10) & 4294967295) | (y >>> 22))),
      (y = (I + (m ^ (A | ~v)) + E[14] + 2878612391) & 4294967295),
      (I = A + (((y << 15) & 4294967295) | (y >>> 17))),
      (y = (v + (A ^ (I | ~m)) + E[5] + 4237533241) & 4294967295),
      (v = I + (((y << 21) & 4294967295) | (y >>> 11))),
      (y = (m + (I ^ (v | ~A)) + E[12] + 1700485571) & 4294967295),
      (m = v + (((y << 6) & 4294967295) | (y >>> 26))),
      (y = (A + (v ^ (m | ~I)) + E[3] + 2399980690) & 4294967295),
      (A = m + (((y << 10) & 4294967295) | (y >>> 22))),
      (y = (I + (m ^ (A | ~v)) + E[10] + 4293915773) & 4294967295),
      (I = A + (((y << 15) & 4294967295) | (y >>> 17))),
      (y = (v + (A ^ (I | ~m)) + E[1] + 2240044497) & 4294967295),
      (v = I + (((y << 21) & 4294967295) | (y >>> 11))),
      (y = (m + (I ^ (v | ~A)) + E[8] + 1873313359) & 4294967295),
      (m = v + (((y << 6) & 4294967295) | (y >>> 26))),
      (y = (A + (v ^ (m | ~I)) + E[15] + 4264355552) & 4294967295),
      (A = m + (((y << 10) & 4294967295) | (y >>> 22))),
      (y = (I + (m ^ (A | ~v)) + E[6] + 2734768916) & 4294967295),
      (I = A + (((y << 15) & 4294967295) | (y >>> 17))),
      (y = (v + (A ^ (I | ~m)) + E[13] + 1309151649) & 4294967295),
      (v = I + (((y << 21) & 4294967295) | (y >>> 11))),
      (y = (m + (I ^ (v | ~A)) + E[4] + 4149444226) & 4294967295),
      (m = v + (((y << 6) & 4294967295) | (y >>> 26))),
      (y = (A + (v ^ (m | ~I)) + E[11] + 3174756917) & 4294967295),
      (A = m + (((y << 10) & 4294967295) | (y >>> 22))),
      (y = (I + (m ^ (A | ~v)) + E[2] + 718787259) & 4294967295),
      (I = A + (((y << 15) & 4294967295) | (y >>> 17))),
      (y = (v + (A ^ (I | ~m)) + E[9] + 3951481745) & 4294967295),
      (T.g[0] = (T.g[0] + m) & 4294967295),
      (T.g[1] =
        (T.g[1] + (I + (((y << 21) & 4294967295) | (y >>> 11)))) & 4294967295),
      (T.g[2] = (T.g[2] + I) & 4294967295),
      (T.g[3] = (T.g[3] + A) & 4294967295));
  }
  ((i.prototype.u = function (T, m) {
    m === void 0 && (m = T.length);
    for (var v = m - this.blockSize, E = this.B, I = this.h, A = 0; A < m; ) {
      if (I == 0) for (; A <= v; ) (s(this, T, A), (A += this.blockSize));
      if (typeof T == 'string') {
        for (; A < m; )
          if (((E[I++] = T.charCodeAt(A++)), I == this.blockSize)) {
            (s(this, E), (I = 0));
            break;
          }
      } else
        for (; A < m; )
          if (((E[I++] = T[A++]), I == this.blockSize)) {
            (s(this, E), (I = 0));
            break;
          }
    }
    ((this.h = I), (this.o += m));
  }),
    (i.prototype.v = function () {
      var T = Array(
        (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
      );
      T[0] = 128;
      for (var m = 1; m < T.length - 8; ++m) T[m] = 0;
      var v = 8 * this.o;
      for (m = T.length - 8; m < T.length; ++m) ((T[m] = v & 255), (v /= 256));
      for (this.u(T), T = Array(16), m = v = 0; 4 > m; ++m)
        for (var E = 0; 32 > E; E += 8) T[v++] = (this.g[m] >>> E) & 255;
      return T;
    }));
  function r(T, m) {
    var v = l;
    return Object.prototype.hasOwnProperty.call(v, T) ? v[T] : (v[T] = m(T));
  }
  function a(T, m) {
    this.h = m;
    for (var v = [], E = !0, I = T.length - 1; 0 <= I; I--) {
      var A = T[I] | 0;
      (E && A == m) || ((v[I] = A), (E = !1));
    }
    this.g = v;
  }
  var l = {};
  function c(T) {
    return -128 <= T && 128 > T
      ? r(T, function (m) {
          return new a([m | 0], 0 > m ? -1 : 0);
        })
      : new a([T | 0], 0 > T ? -1 : 0);
  }
  function h(T) {
    if (isNaN(T) || !isFinite(T)) return _;
    if (0 > T) return N(h(-T));
    for (var m = [], v = 1, E = 0; T >= v; E++)
      ((m[E] = (T / v) | 0), (v *= 4294967296));
    return new a(m, 0);
  }
  function f(T, m) {
    if (T.length == 0) throw Error('number format error: empty string');
    if (((m = m || 10), 2 > m || 36 < m))
      throw Error('radix out of range: ' + m);
    if (T.charAt(0) == '-') return N(f(T.substring(1), m));
    if (0 <= T.indexOf('-'))
      throw Error('number format error: interior "-" character');
    for (var v = h(Math.pow(m, 8)), E = _, I = 0; I < T.length; I += 8) {
      var A = Math.min(8, T.length - I),
        y = parseInt(T.substring(I, I + A), m);
      8 > A
        ? ((A = h(Math.pow(m, A))), (E = E.j(A).add(h(y))))
        : ((E = E.j(v)), (E = E.add(h(y))));
    }
    return E;
  }
  var _ = c(0),
    g = c(1),
    R = c(16777216);
  ((n = a.prototype),
    (n.m = function () {
      if (O(this)) return -N(this).m();
      for (var T = 0, m = 1, v = 0; v < this.g.length; v++) {
        var E = this.i(v);
        ((T += (0 <= E ? E : 4294967296 + E) * m), (m *= 4294967296));
      }
      return T;
    }),
    (n.toString = function (T) {
      if (((T = T || 10), 2 > T || 36 < T))
        throw Error('radix out of range: ' + T);
      if (P(this)) return '0';
      if (O(this)) return '-' + N(this).toString(T);
      for (var m = h(Math.pow(T, 6)), v = this, E = ''; ; ) {
        var I = ae(v, m).g;
        v = $(v, I.j(m));
        var A = ((0 < v.g.length ? v.g[0] : v.h) >>> 0).toString(T);
        if (((v = I), P(v))) return A + E;
        for (; 6 > A.length; ) A = '0' + A;
        E = A + E;
      }
    }),
    (n.i = function (T) {
      return 0 > T ? 0 : T < this.g.length ? this.g[T] : this.h;
    }));
  function P(T) {
    if (T.h != 0) return !1;
    for (var m = 0; m < T.g.length; m++) if (T.g[m] != 0) return !1;
    return !0;
  }
  function O(T) {
    return T.h == -1;
  }
  n.l = function (T) {
    return ((T = $(this, T)), O(T) ? -1 : P(T) ? 0 : 1);
  };
  function N(T) {
    for (var m = T.g.length, v = [], E = 0; E < m; E++) v[E] = ~T.g[E];
    return new a(v, ~T.h).add(g);
  }
  ((n.abs = function () {
    return O(this) ? N(this) : this;
  }),
    (n.add = function (T) {
      for (
        var m = Math.max(this.g.length, T.g.length), v = [], E = 0, I = 0;
        I <= m;
        I++
      ) {
        var A = E + (this.i(I) & 65535) + (T.i(I) & 65535),
          y = (A >>> 16) + (this.i(I) >>> 16) + (T.i(I) >>> 16);
        ((E = y >>> 16), (A &= 65535), (y &= 65535), (v[I] = (y << 16) | A));
      }
      return new a(v, v[v.length - 1] & -2147483648 ? -1 : 0);
    }));
  function $(T, m) {
    return T.add(N(m));
  }
  n.j = function (T) {
    if (P(this) || P(T)) return _;
    if (O(this)) return O(T) ? N(this).j(N(T)) : N(N(this).j(T));
    if (O(T)) return N(this.j(N(T)));
    if (0 > this.l(R) && 0 > T.l(R)) return h(this.m() * T.m());
    for (var m = this.g.length + T.g.length, v = [], E = 0; E < 2 * m; E++)
      v[E] = 0;
    for (E = 0; E < this.g.length; E++)
      for (var I = 0; I < T.g.length; I++) {
        var A = this.i(E) >>> 16,
          y = this.i(E) & 65535,
          ct = T.i(I) >>> 16,
          ai = T.i(I) & 65535;
        ((v[2 * E + 2 * I] += y * ai),
          q(v, 2 * E + 2 * I),
          (v[2 * E + 2 * I + 1] += A * ai),
          q(v, 2 * E + 2 * I + 1),
          (v[2 * E + 2 * I + 1] += y * ct),
          q(v, 2 * E + 2 * I + 1),
          (v[2 * E + 2 * I + 2] += A * ct),
          q(v, 2 * E + 2 * I + 2));
      }
    for (E = 0; E < m; E++) v[E] = (v[2 * E + 1] << 16) | v[2 * E];
    for (E = m; E < 2 * m; E++) v[E] = 0;
    return new a(v, 0);
  };
  function q(T, m) {
    for (; (T[m] & 65535) != T[m]; )
      ((T[m + 1] += T[m] >>> 16), (T[m] &= 65535), m++);
  }
  function G(T, m) {
    ((this.g = T), (this.h = m));
  }
  function ae(T, m) {
    if (P(m)) throw Error('division by zero');
    if (P(T)) return new G(_, _);
    if (O(T)) return ((m = ae(N(T), m)), new G(N(m.g), N(m.h)));
    if (O(m)) return ((m = ae(T, N(m))), new G(N(m.g), m.h));
    if (30 < T.g.length) {
      if (O(T) || O(m))
        throw Error('slowDivide_ only works with positive integers.');
      for (var v = g, E = m; 0 >= E.l(T); ) ((v = $e(v)), (E = $e(E)));
      var I = ce(v, 1),
        A = ce(E, 1);
      for (E = ce(E, 2), v = ce(v, 2); !P(E); ) {
        var y = A.add(E);
        (0 >= y.l(T) && ((I = I.add(v)), (A = y)),
          (E = ce(E, 1)),
          (v = ce(v, 1)));
      }
      return ((m = $(T, I.j(m))), new G(I, m));
    }
    for (I = _; 0 <= T.l(m); ) {
      for (
        v = Math.max(1, Math.floor(T.m() / m.m())),
          E = Math.ceil(Math.log(v) / Math.LN2),
          E = 48 >= E ? 1 : Math.pow(2, E - 48),
          A = h(v),
          y = A.j(m);
        O(y) || 0 < y.l(T);

      )
        ((v -= E), (A = h(v)), (y = A.j(m)));
      (P(A) && (A = g), (I = I.add(A)), (T = $(T, y)));
    }
    return new G(I, T);
  }
  ((n.A = function (T) {
    return ae(this, T).h;
  }),
    (n.and = function (T) {
      for (
        var m = Math.max(this.g.length, T.g.length), v = [], E = 0;
        E < m;
        E++
      )
        v[E] = this.i(E) & T.i(E);
      return new a(v, this.h & T.h);
    }),
    (n.or = function (T) {
      for (
        var m = Math.max(this.g.length, T.g.length), v = [], E = 0;
        E < m;
        E++
      )
        v[E] = this.i(E) | T.i(E);
      return new a(v, this.h | T.h);
    }),
    (n.xor = function (T) {
      for (
        var m = Math.max(this.g.length, T.g.length), v = [], E = 0;
        E < m;
        E++
      )
        v[E] = this.i(E) ^ T.i(E);
      return new a(v, this.h ^ T.h);
    }));
  function $e(T) {
    for (var m = T.g.length + 1, v = [], E = 0; E < m; E++)
      v[E] = (T.i(E) << 1) | (T.i(E - 1) >>> 31);
    return new a(v, T.h);
  }
  function ce(T, m) {
    var v = m >> 5;
    m %= 32;
    for (var E = T.g.length - v, I = [], A = 0; A < E; A++)
      I[A] =
        0 < m ? (T.i(A + v) >>> m) | (T.i(A + v + 1) << (32 - m)) : T.i(A + v);
    return new a(I, T.h);
  }
  ((i.prototype.digest = i.prototype.v),
    (i.prototype.reset = i.prototype.s),
    (i.prototype.update = i.prototype.u),
    (Cd = i),
    (a.prototype.add = a.prototype.add),
    (a.prototype.multiply = a.prototype.j),
    (a.prototype.modulo = a.prototype.A),
    (a.prototype.compare = a.prototype.l),
    (a.prototype.toNumber = a.prototype.m),
    (a.prototype.toString = a.prototype.toString),
    (a.prototype.getBits = a.prototype.i),
    (a.fromNumber = h),
    (a.fromString = f),
    (rn = a));
}).apply(
  typeof uu < 'u'
    ? uu
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {}
);
var qs =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof on < 'u'
        ? on
        : typeof self < 'u'
          ? self
          : {};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/ var Sd, ki, Pd, Xs, Go, bd, Nd, kd;
(function () {
  var n,
    e =
      typeof Object.defineProperties == 'function'
        ? Object.defineProperty
        : function (o, u, d) {
            return (
              o == Array.prototype || o == Object.prototype || (o[u] = d.value),
              o
            );
          };
  function t(o) {
    o = [
      typeof globalThis == 'object' && globalThis,
      o,
      typeof window == 'object' && window,
      typeof self == 'object' && self,
      typeof qs == 'object' && qs,
    ];
    for (var u = 0; u < o.length; ++u) {
      var d = o[u];
      if (d && d.Math == Math) return d;
    }
    throw Error('Cannot find global object');
  }
  var i = t(this);
  function s(o, u) {
    if (u)
      e: {
        var d = i;
        o = o.split('.');
        for (var p = 0; p < o.length - 1; p++) {
          var w = o[p];
          if (!(w in d)) break e;
          d = d[w];
        }
        ((o = o[o.length - 1]),
          (p = d[o]),
          (u = u(p)),
          u != p &&
            u != null &&
            e(d, o, { configurable: !0, writable: !0, value: u }));
      }
  }
  function r(o, u) {
    o instanceof String && (o += '');
    var d = 0,
      p = !1,
      w = {
        next: function () {
          if (!p && d < o.length) {
            var C = d++;
            return { value: u(C, o[C]), done: !1 };
          }
          return ((p = !0), { done: !0, value: void 0 });
        },
      };
    return (
      (w[Symbol.iterator] = function () {
        return w;
      }),
      w
    );
  }
  s('Array.prototype.values', function (o) {
    return (
      o ||
      function () {
        return r(this, function (u, d) {
          return d;
        });
      }
    );
  });
  /** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ var a = a || {},
    l = this || self;
  function c(o) {
    var u = typeof o;
    return (
      (u = u != 'object' ? u : o ? (Array.isArray(o) ? 'array' : u) : 'null'),
      u == 'array' || (u == 'object' && typeof o.length == 'number')
    );
  }
  function h(o) {
    var u = typeof o;
    return (u == 'object' && o != null) || u == 'function';
  }
  function f(o, u, d) {
    return o.call.apply(o.bind, arguments);
  }
  function _(o, u, d) {
    if (!o) throw Error();
    if (2 < arguments.length) {
      var p = Array.prototype.slice.call(arguments, 2);
      return function () {
        var w = Array.prototype.slice.call(arguments);
        return (Array.prototype.unshift.apply(w, p), o.apply(u, w));
      };
    }
    return function () {
      return o.apply(u, arguments);
    };
  }
  function g(o, u, d) {
    return (
      (g =
        Function.prototype.bind &&
        Function.prototype.bind.toString().indexOf('native code') != -1
          ? f
          : _),
      g.apply(null, arguments)
    );
  }
  function R(o, u) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
      var p = d.slice();
      return (p.push.apply(p, arguments), o.apply(this, p));
    };
  }
  function P(o, u) {
    function d() {}
    ((d.prototype = u.prototype),
      (o.aa = u.prototype),
      (o.prototype = new d()),
      (o.prototype.constructor = o),
      (o.Qb = function (p, w, C) {
        for (
          var k = Array(arguments.length - 2), te = 2;
          te < arguments.length;
          te++
        )
          k[te - 2] = arguments[te];
        return u.prototype[w].apply(p, k);
      }));
  }
  function O(o) {
    const u = o.length;
    if (0 < u) {
      const d = Array(u);
      for (let p = 0; p < u; p++) d[p] = o[p];
      return d;
    }
    return [];
  }
  function N(o, u) {
    for (let d = 1; d < arguments.length; d++) {
      const p = arguments[d];
      if (c(p)) {
        const w = o.length || 0,
          C = p.length || 0;
        o.length = w + C;
        for (let k = 0; k < C; k++) o[w + k] = p[k];
      } else o.push(p);
    }
  }
  class $ {
    constructor(u, d) {
      ((this.i = u), (this.j = d), (this.h = 0), (this.g = null));
    }
    get() {
      let u;
      return (
        0 < this.h
          ? (this.h--, (u = this.g), (this.g = u.next), (u.next = null))
          : (u = this.i()),
        u
      );
    }
  }
  function q(o) {
    return /^[\s\xa0]*$/.test(o);
  }
  function G() {
    var o = l.navigator;
    return o && (o = o.userAgent) ? o : '';
  }
  function ae(o) {
    return (ae[' '](o), o);
  }
  ae[' '] = function () {};
  var $e =
    G().indexOf('Gecko') != -1 &&
    !(G().toLowerCase().indexOf('webkit') != -1 && G().indexOf('Edge') == -1) &&
    !(G().indexOf('Trident') != -1 || G().indexOf('MSIE') != -1) &&
    G().indexOf('Edge') == -1;
  function ce(o, u, d) {
    for (const p in o) u.call(d, o[p], p, o);
  }
  function T(o, u) {
    for (const d in o) u.call(void 0, o[d], d, o);
  }
  function m(o) {
    const u = {};
    for (const d in o) u[d] = o[d];
    return u;
  }
  const v =
    'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
      ' '
    );
  function E(o, u) {
    let d, p;
    for (let w = 1; w < arguments.length; w++) {
      p = arguments[w];
      for (d in p) o[d] = p[d];
      for (let C = 0; C < v.length; C++)
        ((d = v[C]),
          Object.prototype.hasOwnProperty.call(p, d) && (o[d] = p[d]));
    }
  }
  function I(o) {
    var u = 1;
    o = o.split(':');
    const d = [];
    for (; 0 < u && o.length; ) (d.push(o.shift()), u--);
    return (o.length && d.push(o.join(':')), d);
  }
  function A(o) {
    l.setTimeout(() => {
      throw o;
    }, 0);
  }
  function y() {
    var o = Jr;
    let u = null;
    return (
      o.g &&
        ((u = o.g), (o.g = o.g.next), o.g || (o.h = null), (u.next = null)),
      u
    );
  }
  class ct {
    constructor() {
      this.h = this.g = null;
    }
    add(u, d) {
      const p = ai.get();
      (p.set(u, d), this.h ? (this.h.next = p) : (this.g = p), (this.h = p));
    }
  }
  var ai = new $(
    () => new r_(),
    (o) => o.reset()
  );
  class r_ {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(u, d) {
      ((this.h = u), (this.g = d), (this.next = null));
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let li,
    ci = !1,
    Jr = new ct(),
    Fl = () => {
      const o = l.Promise.resolve(void 0);
      li = () => {
        o.then(o_);
      };
    };
  var o_ = () => {
    for (var o; (o = y()); ) {
      try {
        o.h.call(o.g);
      } catch (d) {
        A(d);
      }
      var u = ai;
      (u.j(o), 100 > u.h && (u.h++, (o.next = u.g), (u.g = o)));
    }
    ci = !1;
  };
  function St() {
    ((this.s = this.s), (this.C = this.C));
  }
  ((St.prototype.s = !1),
    (St.prototype.ma = function () {
      this.s || ((this.s = !0), this.N());
    }),
    (St.prototype.N = function () {
      if (this.C) for (; this.C.length; ) this.C.shift()();
    }));
  function Re(o, u) {
    ((this.type = o), (this.g = this.target = u), (this.defaultPrevented = !1));
  }
  Re.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var a_ = (function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var o = !1,
      u = Object.defineProperty({}, 'passive', {
        get: function () {
          o = !0;
        },
      });
    try {
      const d = () => {};
      (l.addEventListener('test', d, u), l.removeEventListener('test', d, u));
    } catch {}
    return o;
  })();
  function ui(o, u) {
    if (
      (Re.call(this, o ? o.type : ''),
      (this.relatedTarget = this.g = this.target = null),
      (this.button =
        this.screenY =
        this.screenX =
        this.clientY =
        this.clientX =
          0),
      (this.key = ''),
      (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
      (this.state = null),
      (this.pointerId = 0),
      (this.pointerType = ''),
      (this.i = null),
      o)
    ) {
      var d = (this.type = o.type),
        p =
          o.changedTouches && o.changedTouches.length
            ? o.changedTouches[0]
            : null;
      if (
        ((this.target = o.target || o.srcElement),
        (this.g = u),
        (u = o.relatedTarget))
      ) {
        if ($e) {
          e: {
            try {
              ae(u.nodeName);
              var w = !0;
              break e;
            } catch {}
            w = !1;
          }
          w || (u = null);
        }
      } else
        d == 'mouseover'
          ? (u = o.fromElement)
          : d == 'mouseout' && (u = o.toElement);
      ((this.relatedTarget = u),
        p
          ? ((this.clientX = p.clientX !== void 0 ? p.clientX : p.pageX),
            (this.clientY = p.clientY !== void 0 ? p.clientY : p.pageY),
            (this.screenX = p.screenX || 0),
            (this.screenY = p.screenY || 0))
          : ((this.clientX = o.clientX !== void 0 ? o.clientX : o.pageX),
            (this.clientY = o.clientY !== void 0 ? o.clientY : o.pageY),
            (this.screenX = o.screenX || 0),
            (this.screenY = o.screenY || 0)),
        (this.button = o.button),
        (this.key = o.key || ''),
        (this.ctrlKey = o.ctrlKey),
        (this.altKey = o.altKey),
        (this.shiftKey = o.shiftKey),
        (this.metaKey = o.metaKey),
        (this.pointerId = o.pointerId || 0),
        (this.pointerType =
          typeof o.pointerType == 'string'
            ? o.pointerType
            : l_[o.pointerType] || ''),
        (this.state = o.state),
        (this.i = o),
        o.defaultPrevented && ui.aa.h.call(this));
    }
  }
  P(ui, Re);
  var l_ = { 2: 'touch', 3: 'pen', 4: 'mouse' };
  ui.prototype.h = function () {
    ui.aa.h.call(this);
    var o = this.i;
    o.preventDefault ? o.preventDefault() : (o.returnValue = !1);
  };
  var Ts = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
    c_ = 0;
  function u_(o, u, d, p, w) {
    ((this.listener = o),
      (this.proxy = null),
      (this.src = u),
      (this.type = d),
      (this.capture = !!p),
      (this.ha = w),
      (this.key = ++c_),
      (this.da = this.fa = !1));
  }
  function Is(o) {
    ((o.da = !0),
      (o.listener = null),
      (o.proxy = null),
      (o.src = null),
      (o.ha = null));
  }
  function ws(o) {
    ((this.src = o), (this.g = {}), (this.h = 0));
  }
  ws.prototype.add = function (o, u, d, p, w) {
    var C = o.toString();
    ((o = this.g[C]), o || ((o = this.g[C] = []), this.h++));
    var k = eo(o, u, p, w);
    return (
      -1 < k
        ? ((u = o[k]), d || (u.fa = !1))
        : ((u = new u_(u, this.src, C, !!p, w)), (u.fa = d), o.push(u)),
      u
    );
  };
  function Zr(o, u) {
    var d = u.type;
    if (d in o.g) {
      var p = o.g[d],
        w = Array.prototype.indexOf.call(p, u, void 0),
        C;
      ((C = 0 <= w) && Array.prototype.splice.call(p, w, 1),
        C && (Is(u), o.g[d].length == 0 && (delete o.g[d], o.h--)));
    }
  }
  function eo(o, u, d, p) {
    for (var w = 0; w < o.length; ++w) {
      var C = o[w];
      if (!C.da && C.listener == u && C.capture == !!d && C.ha == p) return w;
    }
    return -1;
  }
  var to = 'closure_lm_' + ((1e6 * Math.random()) | 0),
    no = {};
  function Ul(o, u, d, p, w) {
    if (Array.isArray(u)) {
      for (var C = 0; C < u.length; C++) Ul(o, u[C], d, p, w);
      return null;
    }
    return (
      (d = Wl(d)),
      o && o[Ts] ? o.K(u, d, h(p) ? !!p.capture : !1, w) : h_(o, u, d, !1, p, w)
    );
  }
  function h_(o, u, d, p, w, C) {
    if (!u) throw Error('Invalid event type');
    var k = h(w) ? !!w.capture : !!w,
      te = so(o);
    if ((te || (o[to] = te = new ws(o)), (d = te.add(u, d, p, k, C)), d.proxy))
      return d;
    if (
      ((p = d_()),
      (d.proxy = p),
      (p.src = o),
      (p.listener = d),
      o.addEventListener)
    )
      (a_ || (w = k),
        w === void 0 && (w = !1),
        o.addEventListener(u.toString(), p, w));
    else if (o.attachEvent) o.attachEvent(ql(u.toString()), p);
    else if (o.addListener && o.removeListener) o.addListener(p);
    else throw Error('addEventListener and attachEvent are unavailable.');
    return d;
  }
  function d_() {
    function o(d) {
      return u.call(o.src, o.listener, d);
    }
    const u = f_;
    return o;
  }
  function Bl(o, u, d, p, w) {
    if (Array.isArray(u))
      for (var C = 0; C < u.length; C++) Bl(o, u[C], d, p, w);
    else
      ((p = h(p) ? !!p.capture : !!p),
        (d = Wl(d)),
        o && o[Ts]
          ? ((o = o.i),
            (u = String(u).toString()),
            u in o.g &&
              ((C = o.g[u]),
              (d = eo(C, d, p, w)),
              -1 < d &&
                (Is(C[d]),
                Array.prototype.splice.call(C, d, 1),
                C.length == 0 && (delete o.g[u], o.h--))))
          : o &&
            (o = so(o)) &&
            ((u = o.g[u.toString()]),
            (o = -1),
            u && (o = eo(u, d, p, w)),
            (d = -1 < o ? u[o] : null) && io(d)));
  }
  function io(o) {
    if (typeof o != 'number' && o && !o.da) {
      var u = o.src;
      if (u && u[Ts]) Zr(u.i, o);
      else {
        var d = o.type,
          p = o.proxy;
        (u.removeEventListener
          ? u.removeEventListener(d, p, o.capture)
          : u.detachEvent
            ? u.detachEvent(ql(d), p)
            : u.addListener && u.removeListener && u.removeListener(p),
          (d = so(u))
            ? (Zr(d, o), d.h == 0 && ((d.src = null), (u[to] = null)))
            : Is(o));
      }
    }
  }
  function ql(o) {
    return o in no ? no[o] : (no[o] = 'on' + o);
  }
  function f_(o, u) {
    if (o.da) o = !0;
    else {
      u = new ui(u, this);
      var d = o.listener,
        p = o.ha || o.src;
      (o.fa && io(o), (o = d.call(p, u)));
    }
    return o;
  }
  function so(o) {
    return ((o = o[to]), o instanceof ws ? o : null);
  }
  var ro = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
  function Wl(o) {
    return typeof o == 'function'
      ? o
      : (o[ro] ||
          (o[ro] = function (u) {
            return o.handleEvent(u);
          }),
        o[ro]);
  }
  function Ce() {
    (St.call(this), (this.i = new ws(this)), (this.M = this), (this.F = null));
  }
  (P(Ce, St),
    (Ce.prototype[Ts] = !0),
    (Ce.prototype.removeEventListener = function (o, u, d, p) {
      Bl(this, o, u, d, p);
    }));
  function Le(o, u) {
    var d,
      p = o.F;
    if (p) for (d = []; p; p = p.F) d.push(p);
    if (((o = o.M), (p = u.type || u), typeof u == 'string')) u = new Re(u, o);
    else if (u instanceof Re) u.target = u.target || o;
    else {
      var w = u;
      ((u = new Re(p, o)), E(u, w));
    }
    if (((w = !0), d))
      for (var C = d.length - 1; 0 <= C; C--) {
        var k = (u.g = d[C]);
        w = As(k, p, !0, u) && w;
      }
    if (
      ((k = u.g = o), (w = As(k, p, !0, u) && w), (w = As(k, p, !1, u) && w), d)
    )
      for (C = 0; C < d.length; C++)
        ((k = u.g = d[C]), (w = As(k, p, !1, u) && w));
  }
  ((Ce.prototype.N = function () {
    if ((Ce.aa.N.call(this), this.i)) {
      var o = this.i,
        u;
      for (u in o.g) {
        for (var d = o.g[u], p = 0; p < d.length; p++) Is(d[p]);
        (delete o.g[u], o.h--);
      }
    }
    this.F = null;
  }),
    (Ce.prototype.K = function (o, u, d, p) {
      return this.i.add(String(o), u, !1, d, p);
    }),
    (Ce.prototype.L = function (o, u, d, p) {
      return this.i.add(String(o), u, !0, d, p);
    }));
  function As(o, u, d, p) {
    if (((u = o.i.g[String(u)]), !u)) return !0;
    u = u.concat();
    for (var w = !0, C = 0; C < u.length; ++C) {
      var k = u[C];
      if (k && !k.da && k.capture == d) {
        var te = k.listener,
          Ee = k.ha || k.src;
        (k.fa && Zr(o.i, k), (w = te.call(Ee, p) !== !1 && w));
      }
    }
    return w && !p.defaultPrevented;
  }
  function jl(o, u, d) {
    if (typeof o == 'function') d && (o = g(o, d));
    else if (o && typeof o.handleEvent == 'function') o = g(o.handleEvent, o);
    else throw Error('Invalid listener argument');
    return 2147483647 < Number(u) ? -1 : l.setTimeout(o, u || 0);
  }
  function $l(o) {
    o.g = jl(() => {
      ((o.g = null), o.i && ((o.i = !1), $l(o)));
    }, o.l);
    const u = o.h;
    ((o.h = null), o.m.apply(null, u));
  }
  class p_ extends St {
    constructor(u, d) {
      (super(),
        (this.m = u),
        (this.l = d),
        (this.h = null),
        (this.i = !1),
        (this.g = null));
    }
    j(u) {
      ((this.h = arguments), this.g ? (this.i = !0) : $l(this));
    }
    N() {
      (super.N(),
        this.g &&
          (l.clearTimeout(this.g),
          (this.g = null),
          (this.i = !1),
          (this.h = null)));
    }
  }
  function hi(o) {
    (St.call(this), (this.h = o), (this.g = {}));
  }
  P(hi, St);
  var Hl = [];
  function Gl(o) {
    (ce(
      o.g,
      function (u, d) {
        this.g.hasOwnProperty(d) && io(u);
      },
      o
    ),
      (o.g = {}));
  }
  ((hi.prototype.N = function () {
    (hi.aa.N.call(this), Gl(this));
  }),
    (hi.prototype.handleEvent = function () {
      throw Error('EventHandler.handleEvent not implemented');
    }));
  var oo = l.JSON.stringify,
    __ = l.JSON.parse,
    m_ = class {
      stringify(o) {
        return l.JSON.stringify(o, void 0);
      }
      parse(o) {
        return l.JSON.parse(o, void 0);
      }
    };
  function ao() {}
  ao.prototype.h = null;
  function zl(o) {
    return o.h || (o.h = o.i());
  }
  function Kl() {}
  var di = { OPEN: 'a', kb: 'b', Ja: 'c', wb: 'd' };
  function lo() {
    Re.call(this, 'd');
  }
  P(lo, Re);
  function co() {
    Re.call(this, 'c');
  }
  P(co, Re);
  var Yt = {},
    Ql = null;
  function Rs() {
    return (Ql = Ql || new Ce());
  }
  Yt.La = 'serverreachability';
  function Yl(o) {
    Re.call(this, Yt.La, o);
  }
  P(Yl, Re);
  function fi(o) {
    const u = Rs();
    Le(u, new Yl(u));
  }
  Yt.STAT_EVENT = 'statevent';
  function Xl(o, u) {
    (Re.call(this, Yt.STAT_EVENT, o), (this.stat = u));
  }
  P(Xl, Re);
  function xe(o) {
    const u = Rs();
    Le(u, new Xl(u, o));
  }
  Yt.Ma = 'timingevent';
  function Jl(o, u) {
    (Re.call(this, Yt.Ma, o), (this.size = u));
  }
  P(Jl, Re);
  function pi(o, u) {
    if (typeof o != 'function')
      throw Error('Fn must not be null and must be a function');
    return l.setTimeout(function () {
      o();
    }, u);
  }
  function _i() {
    this.g = !0;
  }
  _i.prototype.xa = function () {
    this.g = !1;
  };
  function g_(o, u, d, p, w, C) {
    o.info(function () {
      if (o.g)
        if (C)
          for (var k = '', te = C.split('&'), Ee = 0; Ee < te.length; Ee++) {
            var Y = te[Ee].split('=');
            if (1 < Y.length) {
              var Se = Y[0];
              Y = Y[1];
              var Pe = Se.split('_');
              k =
                2 <= Pe.length && Pe[1] == 'type'
                  ? k + (Se + '=' + Y + '&')
                  : k + (Se + '=redacted&');
            }
          }
        else k = null;
      else k = C;
      return (
        'XMLHTTP REQ (' +
        p +
        ') [attempt ' +
        w +
        ']: ' +
        u +
        `
` +
        d +
        `
` +
        k
      );
    });
  }
  function y_(o, u, d, p, w, C, k) {
    o.info(function () {
      return (
        'XMLHTTP RESP (' +
        p +
        ') [ attempt ' +
        w +
        ']: ' +
        u +
        `
` +
        d +
        `
` +
        C +
        ' ' +
        k
      );
    });
  }
  function wn(o, u, d, p) {
    o.info(function () {
      return 'XMLHTTP TEXT (' + u + '): ' + E_(o, d) + (p ? ' ' + p : '');
    });
  }
  function v_(o, u) {
    o.info(function () {
      return 'TIMEOUT: ' + u;
    });
  }
  _i.prototype.info = function () {};
  function E_(o, u) {
    if (!o.g) return u;
    if (!u) return null;
    try {
      var d = JSON.parse(u);
      if (d) {
        for (o = 0; o < d.length; o++)
          if (Array.isArray(d[o])) {
            var p = d[o];
            if (!(2 > p.length)) {
              var w = p[1];
              if (Array.isArray(w) && !(1 > w.length)) {
                var C = w[0];
                if (C != 'noop' && C != 'stop' && C != 'close')
                  for (var k = 1; k < w.length; k++) w[k] = '';
              }
            }
          }
      }
      return oo(d);
    } catch {
      return u;
    }
  }
  var Cs = {
      NO_ERROR: 0,
      gb: 1,
      tb: 2,
      sb: 3,
      nb: 4,
      rb: 5,
      ub: 6,
      Ia: 7,
      TIMEOUT: 8,
      xb: 9,
    },
    Zl = {
      lb: 'complete',
      Hb: 'success',
      Ja: 'error',
      Ia: 'abort',
      zb: 'ready',
      Ab: 'readystatechange',
      TIMEOUT: 'timeout',
      vb: 'incrementaldata',
      yb: 'progress',
      ob: 'downloadprogress',
      Pb: 'uploadprogress',
    },
    uo;
  function Ss() {}
  (P(Ss, ao),
    (Ss.prototype.g = function () {
      return new XMLHttpRequest();
    }),
    (Ss.prototype.i = function () {
      return {};
    }),
    (uo = new Ss()));
  function Pt(o, u, d, p) {
    ((this.j = o),
      (this.i = u),
      (this.l = d),
      (this.R = p || 1),
      (this.U = new hi(this)),
      (this.I = 45e3),
      (this.H = null),
      (this.o = !1),
      (this.m = this.A = this.v = this.L = this.F = this.S = this.B = null),
      (this.D = []),
      (this.g = null),
      (this.C = 0),
      (this.s = this.u = null),
      (this.X = -1),
      (this.J = !1),
      (this.O = 0),
      (this.M = null),
      (this.W = this.K = this.T = this.P = !1),
      (this.h = new ec()));
  }
  function ec() {
    ((this.i = null), (this.g = ''), (this.h = !1));
  }
  var tc = {},
    ho = {};
  function fo(o, u, d) {
    ((o.L = 1), (o.v = ks(ut(u))), (o.m = d), (o.P = !0), nc(o, null));
  }
  function nc(o, u) {
    ((o.F = Date.now()), Ps(o), (o.A = ut(o.v)));
    var d = o.A,
      p = o.R;
    (Array.isArray(p) || (p = [String(p)]),
      mc(d.i, 't', p),
      (o.C = 0),
      (d = o.j.J),
      (o.h = new ec()),
      (o.g = Vc(o.j, d ? u : null, !o.m)),
      0 < o.O && (o.M = new p_(g(o.Y, o, o.g), o.O)),
      (u = o.U),
      (d = o.g),
      (p = o.ca));
    var w = 'readystatechange';
    Array.isArray(w) || (w && (Hl[0] = w.toString()), (w = Hl));
    for (var C = 0; C < w.length; C++) {
      var k = Ul(d, w[C], p || u.handleEvent, !1, u.h || u);
      if (!k) break;
      u.g[k.key] = k;
    }
    ((u = o.H ? m(o.H) : {}),
      o.m
        ? (o.u || (o.u = 'POST'),
          (u['Content-Type'] = 'application/x-www-form-urlencoded'),
          o.g.ea(o.A, o.u, o.m, u))
        : ((o.u = 'GET'), o.g.ea(o.A, o.u, null, u)),
      fi(),
      g_(o.i, o.u, o.A, o.l, o.R, o.m));
  }
  ((Pt.prototype.ca = function (o) {
    o = o.target;
    const u = this.M;
    u && ht(o) == 3 ? u.j() : this.Y(o);
  }),
    (Pt.prototype.Y = function (o) {
      try {
        if (o == this.g)
          e: {
            const Pe = ht(this.g);
            var u = this.g.Ba();
            const Cn = this.g.Z();
            if (
              !(3 > Pe) &&
              (Pe != 3 || (this.g && (this.h.h || this.g.oa() || wc(this.g))))
            ) {
              (this.J ||
                Pe != 4 ||
                u == 7 ||
                (u == 8 || 0 >= Cn ? fi(3) : fi(2)),
                po(this));
              var d = this.g.Z();
              this.X = d;
              t: if (ic(this)) {
                var p = wc(this.g);
                o = '';
                var w = p.length,
                  C = ht(this.g) == 4;
                if (!this.h.i) {
                  if (typeof TextDecoder > 'u') {
                    (Xt(this), mi(this));
                    var k = '';
                    break t;
                  }
                  this.h.i = new l.TextDecoder();
                }
                for (u = 0; u < w; u++)
                  ((this.h.h = !0),
                    (o += this.h.i.decode(p[u], {
                      stream: !(C && u == w - 1),
                    })));
                ((p.length = 0), (this.h.g += o), (this.C = 0), (k = this.h.g));
              } else k = this.g.oa();
              if (
                ((this.o = d == 200),
                y_(this.i, this.u, this.A, this.l, this.R, Pe, d),
                this.o)
              ) {
                if (this.T && !this.K) {
                  t: {
                    if (this.g) {
                      var te,
                        Ee = this.g;
                      if (
                        (te = Ee.g
                          ? Ee.g.getResponseHeader('X-HTTP-Initial-Response')
                          : null) &&
                        !q(te)
                      ) {
                        var Y = te;
                        break t;
                      }
                    }
                    Y = null;
                  }
                  if ((d = Y))
                    (wn(
                      this.i,
                      this.l,
                      d,
                      'Initial handshake response via X-HTTP-Initial-Response'
                    ),
                      (this.K = !0),
                      _o(this, d));
                  else {
                    ((this.o = !1), (this.s = 3), xe(12), Xt(this), mi(this));
                    break e;
                  }
                }
                if (this.P) {
                  d = !0;
                  let ze;
                  for (; !this.J && this.C < k.length; )
                    if (((ze = T_(this, k)), ze == ho)) {
                      (Pe == 4 && ((this.s = 4), xe(14), (d = !1)),
                        wn(this.i, this.l, null, '[Incomplete Response]'));
                      break;
                    } else if (ze == tc) {
                      ((this.s = 4),
                        xe(15),
                        wn(this.i, this.l, k, '[Invalid Chunk]'),
                        (d = !1));
                      break;
                    } else (wn(this.i, this.l, ze, null), _o(this, ze));
                  if (
                    (ic(this) &&
                      this.C != 0 &&
                      ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                    Pe != 4 ||
                      k.length != 0 ||
                      this.h.h ||
                      ((this.s = 1), xe(16), (d = !1)),
                    (this.o = this.o && d),
                    !d)
                  )
                    (wn(this.i, this.l, k, '[Invalid Chunked Response]'),
                      Xt(this),
                      mi(this));
                  else if (0 < k.length && !this.W) {
                    this.W = !0;
                    var Se = this.j;
                    Se.g == this &&
                      Se.ba &&
                      !Se.M &&
                      (Se.j.info(
                        'Great, no buffering proxy detected. Bytes received: ' +
                          k.length
                      ),
                      To(Se),
                      (Se.M = !0),
                      xe(11));
                  }
                } else (wn(this.i, this.l, k, null), _o(this, k));
                (Pe == 4 && Xt(this),
                  this.o &&
                    !this.J &&
                    (Pe == 4 ? Nc(this.j, this) : ((this.o = !1), Ps(this))));
              } else
                (F_(this.g),
                  d == 400 && 0 < k.indexOf('Unknown SID')
                    ? ((this.s = 3), xe(12))
                    : ((this.s = 0), xe(13)),
                  Xt(this),
                  mi(this));
            }
          }
      } catch {
      } finally {
      }
    }));
  function ic(o) {
    return o.g ? o.u == 'GET' && o.L != 2 && o.j.Ca : !1;
  }
  function T_(o, u) {
    var d = o.C,
      p = u.indexOf(
        `
`,
        d
      );
    return p == -1
      ? ho
      : ((d = Number(u.substring(d, p))),
        isNaN(d)
          ? tc
          : ((p += 1),
            p + d > u.length
              ? ho
              : ((u = u.slice(p, p + d)), (o.C = p + d), u)));
  }
  Pt.prototype.cancel = function () {
    ((this.J = !0), Xt(this));
  };
  function Ps(o) {
    ((o.S = Date.now() + o.I), sc(o, o.I));
  }
  function sc(o, u) {
    if (o.B != null) throw Error('WatchDog timer not null');
    o.B = pi(g(o.ba, o), u);
  }
  function po(o) {
    o.B && (l.clearTimeout(o.B), (o.B = null));
  }
  Pt.prototype.ba = function () {
    this.B = null;
    const o = Date.now();
    0 <= o - this.S
      ? (v_(this.i, this.A),
        this.L != 2 && (fi(), xe(17)),
        Xt(this),
        (this.s = 2),
        mi(this))
      : sc(this, this.S - o);
  };
  function mi(o) {
    o.j.G == 0 || o.J || Nc(o.j, o);
  }
  function Xt(o) {
    po(o);
    var u = o.M;
    (u && typeof u.ma == 'function' && u.ma(),
      (o.M = null),
      Gl(o.U),
      o.g && ((u = o.g), (o.g = null), u.abort(), u.ma()));
  }
  function _o(o, u) {
    try {
      var d = o.j;
      if (d.G != 0 && (d.g == o || mo(d.h, o))) {
        if (!o.K && mo(d.h, o) && d.G == 3) {
          try {
            var p = d.Da.g.parse(u);
          } catch {
            p = null;
          }
          if (Array.isArray(p) && p.length == 3) {
            var w = p;
            if (w[0] == 0) {
              e: if (!d.u) {
                if (d.g)
                  if (d.g.F + 3e3 < o.F) (xs(d), Ms(d));
                  else break e;
                (Eo(d), xe(18));
              }
            } else
              ((d.za = w[1]),
                0 < d.za - d.T &&
                  37500 > w[2] &&
                  d.F &&
                  d.v == 0 &&
                  !d.C &&
                  (d.C = pi(g(d.Za, d), 6e3)));
            if (1 >= ac(d.h) && d.ca) {
              try {
                d.ca();
              } catch {}
              d.ca = void 0;
            }
          } else Zt(d, 11);
        } else if (((o.K || d.g == o) && xs(d), !q(u)))
          for (w = d.Da.g.parse(u), u = 0; u < w.length; u++) {
            let Y = w[u];
            if (((d.T = Y[0]), (Y = Y[1]), d.G == 2))
              if (Y[0] == 'c') {
                ((d.K = Y[1]), (d.ia = Y[2]));
                const Se = Y[3];
                Se != null && ((d.la = Se), d.j.info('VER=' + d.la));
                const Pe = Y[4];
                Pe != null && ((d.Aa = Pe), d.j.info('SVER=' + d.Aa));
                const Cn = Y[5];
                (Cn != null &&
                  typeof Cn == 'number' &&
                  0 < Cn &&
                  ((p = 1.5 * Cn),
                  (d.L = p),
                  d.j.info('backChannelRequestTimeoutMs_=' + p)),
                  (p = d));
                const ze = o.g;
                if (ze) {
                  const Us = ze.g
                    ? ze.g.getResponseHeader('X-Client-Wire-Protocol')
                    : null;
                  if (Us) {
                    var C = p.h;
                    C.g ||
                      (Us.indexOf('spdy') == -1 &&
                        Us.indexOf('quic') == -1 &&
                        Us.indexOf('h2') == -1) ||
                      ((C.j = C.l),
                      (C.g = new Set()),
                      C.h && (go(C, C.h), (C.h = null)));
                  }
                  if (p.D) {
                    const Io = ze.g
                      ? ze.g.getResponseHeader('X-HTTP-Session-Id')
                      : null;
                    Io && ((p.ya = Io), ie(p.I, p.D, Io));
                  }
                }
                ((d.G = 3),
                  d.l && d.l.ua(),
                  d.ba &&
                    ((d.R = Date.now() - o.F),
                    d.j.info('Handshake RTT: ' + d.R + 'ms')),
                  (p = d));
                var k = o;
                if (((p.qa = Oc(p, p.J ? p.ia : null, p.W)), k.K)) {
                  lc(p.h, k);
                  var te = k,
                    Ee = p.L;
                  (Ee && (te.I = Ee), te.B && (po(te), Ps(te)), (p.g = k));
                } else Pc(p);
                0 < d.i.length && Ls(d);
              } else (Y[0] != 'stop' && Y[0] != 'close') || Zt(d, 7);
            else
              d.G == 3 &&
                (Y[0] == 'stop' || Y[0] == 'close'
                  ? Y[0] == 'stop'
                    ? Zt(d, 7)
                    : vo(d)
                  : Y[0] != 'noop' && d.l && d.l.ta(Y),
                (d.v = 0));
          }
      }
      fi(4);
    } catch {}
  }
  var I_ = class {
    constructor(o, u) {
      ((this.g = o), (this.map = u));
    }
  };
  function rc(o) {
    ((this.l = o || 10),
      l.PerformanceNavigationTiming
        ? ((o = l.performance.getEntriesByType('navigation')),
          (o =
            0 < o.length &&
            (o[0].nextHopProtocol == 'hq' || o[0].nextHopProtocol == 'h2')))
        : (o = !!(
            l.chrome &&
            l.chrome.loadTimes &&
            l.chrome.loadTimes() &&
            l.chrome.loadTimes().wasFetchedViaSpdy
          )),
      (this.j = o ? this.l : 1),
      (this.g = null),
      1 < this.j && (this.g = new Set()),
      (this.h = null),
      (this.i = []));
  }
  function oc(o) {
    return o.h ? !0 : o.g ? o.g.size >= o.j : !1;
  }
  function ac(o) {
    return o.h ? 1 : o.g ? o.g.size : 0;
  }
  function mo(o, u) {
    return o.h ? o.h == u : o.g ? o.g.has(u) : !1;
  }
  function go(o, u) {
    o.g ? o.g.add(u) : (o.h = u);
  }
  function lc(o, u) {
    o.h && o.h == u ? (o.h = null) : o.g && o.g.has(u) && o.g.delete(u);
  }
  rc.prototype.cancel = function () {
    if (((this.i = cc(this)), this.h)) (this.h.cancel(), (this.h = null));
    else if (this.g && this.g.size !== 0) {
      for (const o of this.g.values()) o.cancel();
      this.g.clear();
    }
  };
  function cc(o) {
    if (o.h != null) return o.i.concat(o.h.D);
    if (o.g != null && o.g.size !== 0) {
      let u = o.i;
      for (const d of o.g.values()) u = u.concat(d.D);
      return u;
    }
    return O(o.i);
  }
  function w_(o) {
    if (o.V && typeof o.V == 'function') return o.V();
    if (
      (typeof Map < 'u' && o instanceof Map) ||
      (typeof Set < 'u' && o instanceof Set)
    )
      return Array.from(o.values());
    if (typeof o == 'string') return o.split('');
    if (c(o)) {
      for (var u = [], d = o.length, p = 0; p < d; p++) u.push(o[p]);
      return u;
    }
    ((u = []), (d = 0));
    for (p in o) u[d++] = o[p];
    return u;
  }
  function A_(o) {
    if (o.na && typeof o.na == 'function') return o.na();
    if (!o.V || typeof o.V != 'function') {
      if (typeof Map < 'u' && o instanceof Map) return Array.from(o.keys());
      if (!(typeof Set < 'u' && o instanceof Set)) {
        if (c(o) || typeof o == 'string') {
          var u = [];
          o = o.length;
          for (var d = 0; d < o; d++) u.push(d);
          return u;
        }
        ((u = []), (d = 0));
        for (const p in o) u[d++] = p;
        return u;
      }
    }
  }
  function uc(o, u) {
    if (o.forEach && typeof o.forEach == 'function') o.forEach(u, void 0);
    else if (c(o) || typeof o == 'string')
      Array.prototype.forEach.call(o, u, void 0);
    else
      for (var d = A_(o), p = w_(o), w = p.length, C = 0; C < w; C++)
        u.call(void 0, p[C], d && d[C], o);
  }
  var hc = RegExp(
    '^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$'
  );
  function R_(o, u) {
    if (o) {
      o = o.split('&');
      for (var d = 0; d < o.length; d++) {
        var p = o[d].indexOf('='),
          w = null;
        if (0 <= p) {
          var C = o[d].substring(0, p);
          w = o[d].substring(p + 1);
        } else C = o[d];
        u(C, w ? decodeURIComponent(w.replace(/\+/g, ' ')) : '');
      }
    }
  }
  function Jt(o) {
    if (
      ((this.g = this.o = this.j = ''),
      (this.s = null),
      (this.m = this.l = ''),
      (this.h = !1),
      o instanceof Jt)
    ) {
      ((this.h = o.h),
        bs(this, o.j),
        (this.o = o.o),
        (this.g = o.g),
        Ns(this, o.s),
        (this.l = o.l));
      var u = o.i,
        d = new vi();
      ((d.i = u.i),
        u.g && ((d.g = new Map(u.g)), (d.h = u.h)),
        dc(this, d),
        (this.m = o.m));
    } else
      o && (u = String(o).match(hc))
        ? ((this.h = !1),
          bs(this, u[1] || '', !0),
          (this.o = gi(u[2] || '')),
          (this.g = gi(u[3] || '', !0)),
          Ns(this, u[4]),
          (this.l = gi(u[5] || '', !0)),
          dc(this, u[6] || '', !0),
          (this.m = gi(u[7] || '')))
        : ((this.h = !1), (this.i = new vi(null, this.h)));
  }
  Jt.prototype.toString = function () {
    var o = [],
      u = this.j;
    u && o.push(yi(u, fc, !0), ':');
    var d = this.g;
    return (
      (d || u == 'file') &&
        (o.push('//'),
        (u = this.o) && o.push(yi(u, fc, !0), '@'),
        o.push(
          encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')
        ),
        (d = this.s),
        d != null && o.push(':', String(d))),
      (d = this.l) &&
        (this.g && d.charAt(0) != '/' && o.push('/'),
        o.push(yi(d, d.charAt(0) == '/' ? P_ : S_, !0))),
      (d = this.i.toString()) && o.push('?', d),
      (d = this.m) && o.push('#', yi(d, N_)),
      o.join('')
    );
  };
  function ut(o) {
    return new Jt(o);
  }
  function bs(o, u, d) {
    ((o.j = d ? gi(u, !0) : u), o.j && (o.j = o.j.replace(/:$/, '')));
  }
  function Ns(o, u) {
    if (u) {
      if (((u = Number(u)), isNaN(u) || 0 > u))
        throw Error('Bad port number ' + u);
      o.s = u;
    } else o.s = null;
  }
  function dc(o, u, d) {
    u instanceof vi
      ? ((o.i = u), k_(o.i, o.h))
      : (d || (u = yi(u, b_)), (o.i = new vi(u, o.h)));
  }
  function ie(o, u, d) {
    o.i.set(u, d);
  }
  function ks(o) {
    return (
      ie(
        o,
        'zx',
        Math.floor(2147483648 * Math.random()).toString(36) +
          Math.abs(
            Math.floor(2147483648 * Math.random()) ^ Date.now()
          ).toString(36)
      ),
      o
    );
  }
  function gi(o, u) {
    return o
      ? u
        ? decodeURI(o.replace(/%25/g, '%2525'))
        : decodeURIComponent(o)
      : '';
  }
  function yi(o, u, d) {
    return typeof o == 'string'
      ? ((o = encodeURI(o).replace(u, C_)),
        d && (o = o.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
        o)
      : null;
  }
  function C_(o) {
    return (
      (o = o.charCodeAt(0)),
      '%' + ((o >> 4) & 15).toString(16) + (o & 15).toString(16)
    );
  }
  var fc = /[#\/\?@]/g,
    S_ = /[#\?:]/g,
    P_ = /[#\?]/g,
    b_ = /[#\?@]/g,
    N_ = /#/g;
  function vi(o, u) {
    ((this.h = this.g = null), (this.i = o || null), (this.j = !!u));
  }
  function bt(o) {
    o.g ||
      ((o.g = new Map()),
      (o.h = 0),
      o.i &&
        R_(o.i, function (u, d) {
          o.add(decodeURIComponent(u.replace(/\+/g, ' ')), d);
        }));
  }
  ((n = vi.prototype),
    (n.add = function (o, u) {
      (bt(this), (this.i = null), (o = An(this, o)));
      var d = this.g.get(o);
      return (d || this.g.set(o, (d = [])), d.push(u), (this.h += 1), this);
    }));
  function pc(o, u) {
    (bt(o),
      (u = An(o, u)),
      o.g.has(u) && ((o.i = null), (o.h -= o.g.get(u).length), o.g.delete(u)));
  }
  function _c(o, u) {
    return (bt(o), (u = An(o, u)), o.g.has(u));
  }
  ((n.forEach = function (o, u) {
    (bt(this),
      this.g.forEach(function (d, p) {
        d.forEach(function (w) {
          o.call(u, w, p, this);
        }, this);
      }, this));
  }),
    (n.na = function () {
      bt(this);
      const o = Array.from(this.g.values()),
        u = Array.from(this.g.keys()),
        d = [];
      for (let p = 0; p < u.length; p++) {
        const w = o[p];
        for (let C = 0; C < w.length; C++) d.push(u[p]);
      }
      return d;
    }),
    (n.V = function (o) {
      bt(this);
      let u = [];
      if (typeof o == 'string')
        _c(this, o) && (u = u.concat(this.g.get(An(this, o))));
      else {
        o = Array.from(this.g.values());
        for (let d = 0; d < o.length; d++) u = u.concat(o[d]);
      }
      return u;
    }),
    (n.set = function (o, u) {
      return (
        bt(this),
        (this.i = null),
        (o = An(this, o)),
        _c(this, o) && (this.h -= this.g.get(o).length),
        this.g.set(o, [u]),
        (this.h += 1),
        this
      );
    }),
    (n.get = function (o, u) {
      return o ? ((o = this.V(o)), 0 < o.length ? String(o[0]) : u) : u;
    }));
  function mc(o, u, d) {
    (pc(o, u),
      0 < d.length &&
        ((o.i = null), o.g.set(An(o, u), O(d)), (o.h += d.length)));
  }
  n.toString = function () {
    if (this.i) return this.i;
    if (!this.g) return '';
    const o = [],
      u = Array.from(this.g.keys());
    for (var d = 0; d < u.length; d++) {
      var p = u[d];
      const C = encodeURIComponent(String(p)),
        k = this.V(p);
      for (p = 0; p < k.length; p++) {
        var w = C;
        (k[p] !== '' && (w += '=' + encodeURIComponent(String(k[p]))),
          o.push(w));
      }
    }
    return (this.i = o.join('&'));
  };
  function An(o, u) {
    return ((u = String(u)), o.j && (u = u.toLowerCase()), u);
  }
  function k_(o, u) {
    (u &&
      !o.j &&
      (bt(o),
      (o.i = null),
      o.g.forEach(function (d, p) {
        var w = p.toLowerCase();
        p != w && (pc(this, p), mc(this, w, d));
      }, o)),
      (o.j = u));
  }
  function D_(o, u) {
    const d = new _i();
    if (l.Image) {
      const p = new Image();
      ((p.onload = R(Nt, d, 'TestLoadImage: loaded', !0, u, p)),
        (p.onerror = R(Nt, d, 'TestLoadImage: error', !1, u, p)),
        (p.onabort = R(Nt, d, 'TestLoadImage: abort', !1, u, p)),
        (p.ontimeout = R(Nt, d, 'TestLoadImage: timeout', !1, u, p)),
        l.setTimeout(function () {
          p.ontimeout && p.ontimeout();
        }, 1e4),
        (p.src = o));
    } else u(!1);
  }
  function O_(o, u) {
    const d = new _i(),
      p = new AbortController(),
      w = setTimeout(() => {
        (p.abort(), Nt(d, 'TestPingServer: timeout', !1, u));
      }, 1e4);
    fetch(o, { signal: p.signal })
      .then((C) => {
        (clearTimeout(w),
          C.ok
            ? Nt(d, 'TestPingServer: ok', !0, u)
            : Nt(d, 'TestPingServer: server error', !1, u));
      })
      .catch(() => {
        (clearTimeout(w), Nt(d, 'TestPingServer: error', !1, u));
      });
  }
  function Nt(o, u, d, p, w) {
    try {
      (w &&
        ((w.onload = null),
        (w.onerror = null),
        (w.onabort = null),
        (w.ontimeout = null)),
        p(d));
    } catch {}
  }
  function V_() {
    this.g = new m_();
  }
  function M_(o, u, d) {
    const p = d || '';
    try {
      uc(o, function (w, C) {
        let k = w;
        (h(w) && (k = oo(w)), u.push(p + C + '=' + encodeURIComponent(k)));
      });
    } catch (w) {
      throw (u.push(p + 'type=' + encodeURIComponent('_badmap')), w);
    }
  }
  function Ds(o) {
    ((this.l = o.Ub || null), (this.j = o.eb || !1));
  }
  (P(Ds, ao),
    (Ds.prototype.g = function () {
      return new Os(this.l, this.j);
    }),
    (Ds.prototype.i = (function (o) {
      return function () {
        return o;
      };
    })({})));
  function Os(o, u) {
    (Ce.call(this),
      (this.D = o),
      (this.o = u),
      (this.m = void 0),
      (this.status = this.readyState = 0),
      (this.responseType =
        this.responseText =
        this.response =
        this.statusText =
          ''),
      (this.onreadystatechange = null),
      (this.u = new Headers()),
      (this.h = null),
      (this.B = 'GET'),
      (this.A = ''),
      (this.g = !1),
      (this.v = this.j = this.l = null));
  }
  (P(Os, Ce),
    (n = Os.prototype),
    (n.open = function (o, u) {
      if (this.readyState != 0)
        throw (this.abort(), Error('Error reopening a connection'));
      ((this.B = o), (this.A = u), (this.readyState = 1), Ti(this));
    }),
    (n.send = function (o) {
      if (this.readyState != 1)
        throw (this.abort(), Error('need to call open() first. '));
      this.g = !0;
      const u = {
        headers: this.u,
        method: this.B,
        credentials: this.m,
        cache: void 0,
      };
      (o && (u.body = o),
        (this.D || l)
          .fetch(new Request(this.A, u))
          .then(this.Sa.bind(this), this.ga.bind(this)));
    }),
    (n.abort = function () {
      ((this.response = this.responseText = ''),
        (this.u = new Headers()),
        (this.status = 0),
        this.j && this.j.cancel('Request was aborted.').catch(() => {}),
        1 <= this.readyState &&
          this.g &&
          this.readyState != 4 &&
          ((this.g = !1), Ei(this)),
        (this.readyState = 0));
    }),
    (n.Sa = function (o) {
      if (
        this.g &&
        ((this.l = o),
        this.h ||
          ((this.status = this.l.status),
          (this.statusText = this.l.statusText),
          (this.h = o.headers),
          (this.readyState = 2),
          Ti(this)),
        this.g && ((this.readyState = 3), Ti(this), this.g))
      )
        if (this.responseType === 'arraybuffer')
          o.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
        else if (typeof l.ReadableStream < 'u' && 'body' in o) {
          if (((this.j = o.body.getReader()), this.o)) {
            if (this.responseType)
              throw Error(
                'responseType must be empty for "streamBinaryChunks" mode responses.'
              );
            this.response = [];
          } else
            ((this.response = this.responseText = ''),
              (this.v = new TextDecoder()));
          gc(this);
        } else o.text().then(this.Ra.bind(this), this.ga.bind(this));
    }));
  function gc(o) {
    o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o));
  }
  ((n.Pa = function (o) {
    if (this.g) {
      if (this.o && o.value) this.response.push(o.value);
      else if (!this.o) {
        var u = o.value ? o.value : new Uint8Array(0);
        (u = this.v.decode(u, { stream: !o.done })) &&
          (this.response = this.responseText += u);
      }
      (o.done ? Ei(this) : Ti(this), this.readyState == 3 && gc(this));
    }
  }),
    (n.Ra = function (o) {
      this.g && ((this.response = this.responseText = o), Ei(this));
    }),
    (n.Qa = function (o) {
      this.g && ((this.response = o), Ei(this));
    }),
    (n.ga = function () {
      this.g && Ei(this);
    }));
  function Ei(o) {
    ((o.readyState = 4), (o.l = null), (o.j = null), (o.v = null), Ti(o));
  }
  ((n.setRequestHeader = function (o, u) {
    this.u.append(o, u);
  }),
    (n.getResponseHeader = function (o) {
      return (this.h && this.h.get(o.toLowerCase())) || '';
    }),
    (n.getAllResponseHeaders = function () {
      if (!this.h) return '';
      const o = [],
        u = this.h.entries();
      for (var d = u.next(); !d.done; )
        ((d = d.value), o.push(d[0] + ': ' + d[1]), (d = u.next()));
      return o.join(`\r
`);
    }));
  function Ti(o) {
    o.onreadystatechange && o.onreadystatechange.call(o);
  }
  Object.defineProperty(Os.prototype, 'withCredentials', {
    get: function () {
      return this.m === 'include';
    },
    set: function (o) {
      this.m = o ? 'include' : 'same-origin';
    },
  });
  function yc(o) {
    let u = '';
    return (
      ce(o, function (d, p) {
        ((u += p),
          (u += ':'),
          (u += d),
          (u += `\r
`));
      }),
      u
    );
  }
  function yo(o, u, d) {
    e: {
      for (p in d) {
        var p = !1;
        break e;
      }
      p = !0;
    }
    p ||
      ((d = yc(d)),
      typeof o == 'string'
        ? d != null && encodeURIComponent(String(d))
        : ie(o, u, d));
  }
  function le(o) {
    (Ce.call(this),
      (this.headers = new Map()),
      (this.o = o || null),
      (this.h = !1),
      (this.v = this.g = null),
      (this.D = ''),
      (this.m = 0),
      (this.l = ''),
      (this.j = this.B = this.u = this.A = !1),
      (this.I = null),
      (this.H = ''),
      (this.J = !1));
  }
  P(le, Ce);
  var L_ = /^https?$/i,
    x_ = ['POST', 'PUT'];
  ((n = le.prototype),
    (n.Ha = function (o) {
      this.J = o;
    }),
    (n.ea = function (o, u, d, p) {
      if (this.g)
        throw Error(
          '[goog.net.XhrIo] Object is active with another request=' +
            this.D +
            '; newUri=' +
            o
        );
      ((u = u ? u.toUpperCase() : 'GET'),
        (this.D = o),
        (this.l = ''),
        (this.m = 0),
        (this.A = !1),
        (this.h = !0),
        (this.g = this.o ? this.o.g() : uo.g()),
        (this.v = this.o ? zl(this.o) : zl(uo)),
        (this.g.onreadystatechange = g(this.Ea, this)));
      try {
        ((this.B = !0), this.g.open(u, String(o), !0), (this.B = !1));
      } catch (C) {
        vc(this, C);
        return;
      }
      if (((o = d || ''), (d = new Map(this.headers)), p))
        if (Object.getPrototypeOf(p) === Object.prototype)
          for (var w in p) d.set(w, p[w]);
        else if (typeof p.keys == 'function' && typeof p.get == 'function')
          for (const C of p.keys()) d.set(C, p.get(C));
        else throw Error('Unknown input type for opt_headers: ' + String(p));
      ((p = Array.from(d.keys()).find(
        (C) => C.toLowerCase() == 'content-type'
      )),
        (w = l.FormData && o instanceof l.FormData),
        !(0 <= Array.prototype.indexOf.call(x_, u, void 0)) ||
          p ||
          w ||
          d.set(
            'Content-Type',
            'application/x-www-form-urlencoded;charset=utf-8'
          ));
      for (const [C, k] of d) this.g.setRequestHeader(C, k);
      (this.H && (this.g.responseType = this.H),
        'withCredentials' in this.g &&
          this.g.withCredentials !== this.J &&
          (this.g.withCredentials = this.J));
      try {
        (Ic(this), (this.u = !0), this.g.send(o), (this.u = !1));
      } catch (C) {
        vc(this, C);
      }
    }));
  function vc(o, u) {
    ((o.h = !1),
      o.g && ((o.j = !0), o.g.abort(), (o.j = !1)),
      (o.l = u),
      (o.m = 5),
      Ec(o),
      Vs(o));
  }
  function Ec(o) {
    o.A || ((o.A = !0), Le(o, 'complete'), Le(o, 'error'));
  }
  ((n.abort = function (o) {
    this.g &&
      this.h &&
      ((this.h = !1),
      (this.j = !0),
      this.g.abort(),
      (this.j = !1),
      (this.m = o || 7),
      Le(this, 'complete'),
      Le(this, 'abort'),
      Vs(this));
  }),
    (n.N = function () {
      (this.g &&
        (this.h &&
          ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
        Vs(this, !0)),
        le.aa.N.call(this));
    }),
    (n.Ea = function () {
      this.s || (this.B || this.u || this.j ? Tc(this) : this.bb());
    }),
    (n.bb = function () {
      Tc(this);
    }));
  function Tc(o) {
    if (o.h && typeof a < 'u' && (!o.v[1] || ht(o) != 4 || o.Z() != 2)) {
      if (o.u && ht(o) == 4) jl(o.Ea, 0, o);
      else if ((Le(o, 'readystatechange'), ht(o) == 4)) {
        o.h = !1;
        try {
          const k = o.Z();
          e: switch (k) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
              var u = !0;
              break e;
            default:
              u = !1;
          }
          var d;
          if (!(d = u)) {
            var p;
            if ((p = k === 0)) {
              var w = String(o.D).match(hc)[1] || null;
              (!w &&
                l.self &&
                l.self.location &&
                (w = l.self.location.protocol.slice(0, -1)),
                (p = !L_.test(w ? w.toLowerCase() : '')));
            }
            d = p;
          }
          if (d) (Le(o, 'complete'), Le(o, 'success'));
          else {
            o.m = 6;
            try {
              var C = 2 < ht(o) ? o.g.statusText : '';
            } catch {
              C = '';
            }
            ((o.l = C + ' [' + o.Z() + ']'), Ec(o));
          }
        } finally {
          Vs(o);
        }
      }
    }
  }
  function Vs(o, u) {
    if (o.g) {
      Ic(o);
      const d = o.g,
        p = o.v[0] ? () => {} : null;
      ((o.g = null), (o.v = null), u || Le(o, 'ready'));
      try {
        d.onreadystatechange = p;
      } catch {}
    }
  }
  function Ic(o) {
    o.I && (l.clearTimeout(o.I), (o.I = null));
  }
  n.isActive = function () {
    return !!this.g;
  };
  function ht(o) {
    return o.g ? o.g.readyState : 0;
  }
  ((n.Z = function () {
    try {
      return 2 < ht(this) ? this.g.status : -1;
    } catch {
      return -1;
    }
  }),
    (n.oa = function () {
      try {
        return this.g ? this.g.responseText : '';
      } catch {
        return '';
      }
    }),
    (n.Oa = function (o) {
      if (this.g) {
        var u = this.g.responseText;
        return (o && u.indexOf(o) == 0 && (u = u.substring(o.length)), __(u));
      }
    }));
  function wc(o) {
    try {
      if (!o.g) return null;
      if ('response' in o.g) return o.g.response;
      switch (o.H) {
        case '':
        case 'text':
          return o.g.responseText;
        case 'arraybuffer':
          if ('mozResponseArrayBuffer' in o.g)
            return o.g.mozResponseArrayBuffer;
      }
      return null;
    } catch {
      return null;
    }
  }
  function F_(o) {
    const u = {};
    o = ((o.g && 2 <= ht(o) && o.g.getAllResponseHeaders()) || '').split(`\r
`);
    for (let p = 0; p < o.length; p++) {
      if (q(o[p])) continue;
      var d = I(o[p]);
      const w = d[0];
      if (((d = d[1]), typeof d != 'string')) continue;
      d = d.trim();
      const C = u[w] || [];
      ((u[w] = C), C.push(d));
    }
    T(u, function (p) {
      return p.join(', ');
    });
  }
  ((n.Ba = function () {
    return this.m;
  }),
    (n.Ka = function () {
      return typeof this.l == 'string' ? this.l : String(this.l);
    }));
  function Ii(o, u, d) {
    return (d && d.internalChannelParams && d.internalChannelParams[o]) || u;
  }
  function Ac(o) {
    ((this.Aa = 0),
      (this.i = []),
      (this.j = new _i()),
      (this.ia =
        this.qa =
        this.I =
        this.W =
        this.g =
        this.ya =
        this.D =
        this.H =
        this.m =
        this.S =
        this.o =
          null),
      (this.Ya = this.U = 0),
      (this.Va = Ii('failFast', !1, o)),
      (this.F = this.C = this.u = this.s = this.l = null),
      (this.X = !0),
      (this.za = this.T = -1),
      (this.Y = this.v = this.B = 0),
      (this.Ta = Ii('baseRetryDelayMs', 5e3, o)),
      (this.cb = Ii('retryDelaySeedMs', 1e4, o)),
      (this.Wa = Ii('forwardChannelMaxRetries', 2, o)),
      (this.wa = Ii('forwardChannelRequestTimeoutMs', 2e4, o)),
      (this.pa = (o && o.xmlHttpFactory) || void 0),
      (this.Xa = (o && o.Tb) || void 0),
      (this.Ca = (o && o.useFetchStreams) || !1),
      (this.L = void 0),
      (this.J = (o && o.supportsCrossDomainXhr) || !1),
      (this.K = ''),
      (this.h = new rc(o && o.concurrentRequestLimit)),
      (this.Da = new V_()),
      (this.P = (o && o.fastHandshake) || !1),
      (this.O = (o && o.encodeInitMessageHeaders) || !1),
      this.P && this.O && (this.O = !1),
      (this.Ua = (o && o.Rb) || !1),
      o && o.xa && this.j.xa(),
      o && o.forceLongPolling && (this.X = !1),
      (this.ba = (!this.P && this.X && o && o.detectBufferingProxy) || !1),
      (this.ja = void 0),
      o &&
        o.longPollingTimeout &&
        0 < o.longPollingTimeout &&
        (this.ja = o.longPollingTimeout),
      (this.ca = void 0),
      (this.R = 0),
      (this.M = !1),
      (this.ka = this.A = null));
  }
  ((n = Ac.prototype),
    (n.la = 8),
    (n.G = 1),
    (n.connect = function (o, u, d, p) {
      (xe(0),
        (this.W = o),
        (this.H = u || {}),
        d && p !== void 0 && ((this.H.OSID = d), (this.H.OAID = p)),
        (this.F = this.X),
        (this.I = Oc(this, null, this.W)),
        Ls(this));
    }));
  function vo(o) {
    if ((Rc(o), o.G == 3)) {
      var u = o.U++,
        d = ut(o.I);
      if (
        (ie(d, 'SID', o.K),
        ie(d, 'RID', u),
        ie(d, 'TYPE', 'terminate'),
        wi(o, d),
        (u = new Pt(o, o.j, u)),
        (u.L = 2),
        (u.v = ks(ut(d))),
        (d = !1),
        l.navigator && l.navigator.sendBeacon)
      )
        try {
          d = l.navigator.sendBeacon(u.v.toString(), '');
        } catch {}
      (!d && l.Image && ((new Image().src = u.v), (d = !0)),
        d || ((u.g = Vc(u.j, null)), u.g.ea(u.v)),
        (u.F = Date.now()),
        Ps(u));
    }
    Dc(o);
  }
  function Ms(o) {
    o.g && (To(o), o.g.cancel(), (o.g = null));
  }
  function Rc(o) {
    (Ms(o),
      o.u && (l.clearTimeout(o.u), (o.u = null)),
      xs(o),
      o.h.cancel(),
      o.s && (typeof o.s == 'number' && l.clearTimeout(o.s), (o.s = null)));
  }
  function Ls(o) {
    if (!oc(o.h) && !o.s) {
      o.s = !0;
      var u = o.Ga;
      (li || Fl(), ci || (li(), (ci = !0)), Jr.add(u, o), (o.B = 0));
    }
  }
  function U_(o, u) {
    return ac(o.h) >= o.h.j - (o.s ? 1 : 0)
      ? !1
      : o.s
        ? ((o.i = u.D.concat(o.i)), !0)
        : o.G == 1 || o.G == 2 || o.B >= (o.Va ? 0 : o.Wa)
          ? !1
          : ((o.s = pi(g(o.Ga, o, u), kc(o, o.B))), o.B++, !0);
  }
  n.Ga = function (o) {
    if (this.s)
      if (((this.s = null), this.G == 1)) {
        if (!o) {
          ((this.U = Math.floor(1e5 * Math.random())), (o = this.U++));
          const w = new Pt(this, this.j, o);
          let C = this.o;
          if (
            (this.S && (C ? ((C = m(C)), E(C, this.S)) : (C = this.S)),
            this.m !== null || this.O || ((w.H = C), (C = null)),
            this.P)
          )
            e: {
              for (var u = 0, d = 0; d < this.i.length; d++) {
                t: {
                  var p = this.i[d];
                  if (
                    '__data__' in p.map &&
                    ((p = p.map.__data__), typeof p == 'string')
                  ) {
                    p = p.length;
                    break t;
                  }
                  p = void 0;
                }
                if (p === void 0) break;
                if (((u += p), 4096 < u)) {
                  u = d;
                  break e;
                }
                if (u === 4096 || d === this.i.length - 1) {
                  u = d + 1;
                  break e;
                }
              }
              u = 1e3;
            }
          else u = 1e3;
          ((u = Sc(this, w, u)),
            (d = ut(this.I)),
            ie(d, 'RID', o),
            ie(d, 'CVER', 22),
            this.D && ie(d, 'X-HTTP-Session-Id', this.D),
            wi(this, d),
            C &&
              (this.O
                ? (u = 'headers=' + encodeURIComponent(String(yc(C))) + '&' + u)
                : this.m && yo(d, this.m, C)),
            go(this.h, w),
            this.Ua && ie(d, 'TYPE', 'init'),
            this.P
              ? (ie(d, '$req', u),
                ie(d, 'SID', 'null'),
                (w.T = !0),
                fo(w, d, null))
              : fo(w, d, u),
            (this.G = 2));
        }
      } else
        this.G == 3 &&
          (o ? Cc(this, o) : this.i.length == 0 || oc(this.h) || Cc(this));
  };
  function Cc(o, u) {
    var d;
    u ? (d = u.l) : (d = o.U++);
    const p = ut(o.I);
    (ie(p, 'SID', o.K),
      ie(p, 'RID', d),
      ie(p, 'AID', o.T),
      wi(o, p),
      o.m && o.o && yo(p, o.m, o.o),
      (d = new Pt(o, o.j, d, o.B + 1)),
      o.m === null && (d.H = o.o),
      u && (o.i = u.D.concat(o.i)),
      (u = Sc(o, d, 1e3)),
      (d.I = Math.round(0.5 * o.wa) + Math.round(0.5 * o.wa * Math.random())),
      go(o.h, d),
      fo(d, p, u));
  }
  function wi(o, u) {
    (o.H &&
      ce(o.H, function (d, p) {
        ie(u, p, d);
      }),
      o.l &&
        uc({}, function (d, p) {
          ie(u, p, d);
        }));
  }
  function Sc(o, u, d) {
    d = Math.min(o.i.length, d);
    var p = o.l ? g(o.l.Na, o.l, o) : null;
    e: {
      var w = o.i;
      let C = -1;
      for (;;) {
        const k = ['count=' + d];
        C == -1
          ? 0 < d
            ? ((C = w[0].g), k.push('ofs=' + C))
            : (C = 0)
          : k.push('ofs=' + C);
        let te = !0;
        for (let Ee = 0; Ee < d; Ee++) {
          let Y = w[Ee].g;
          const Se = w[Ee].map;
          if (((Y -= C), 0 > Y)) ((C = Math.max(0, w[Ee].g - 100)), (te = !1));
          else
            try {
              M_(Se, k, 'req' + Y + '_');
            } catch {
              p && p(Se);
            }
        }
        if (te) {
          p = k.join('&');
          break e;
        }
      }
    }
    return ((o = o.i.splice(0, d)), (u.D = o), p);
  }
  function Pc(o) {
    if (!o.g && !o.u) {
      o.Y = 1;
      var u = o.Fa;
      (li || Fl(), ci || (li(), (ci = !0)), Jr.add(u, o), (o.v = 0));
    }
  }
  function Eo(o) {
    return o.g || o.u || 3 <= o.v
      ? !1
      : (o.Y++, (o.u = pi(g(o.Fa, o), kc(o, o.v))), o.v++, !0);
  }
  ((n.Fa = function () {
    if (
      ((this.u = null),
      bc(this),
      this.ba && !(this.M || this.g == null || 0 >= this.R))
    ) {
      var o = 2 * this.R;
      (this.j.info('BP detection timer enabled: ' + o),
        (this.A = pi(g(this.ab, this), o)));
    }
  }),
    (n.ab = function () {
      this.A &&
        ((this.A = null),
        this.j.info('BP detection timeout reached.'),
        this.j.info('Buffering proxy detected and switch to long-polling!'),
        (this.F = !1),
        (this.M = !0),
        xe(10),
        Ms(this),
        bc(this));
    }));
  function To(o) {
    o.A != null && (l.clearTimeout(o.A), (o.A = null));
  }
  function bc(o) {
    ((o.g = new Pt(o, o.j, 'rpc', o.Y)),
      o.m === null && (o.g.H = o.o),
      (o.g.O = 0));
    var u = ut(o.qa);
    (ie(u, 'RID', 'rpc'),
      ie(u, 'SID', o.K),
      ie(u, 'AID', o.T),
      ie(u, 'CI', o.F ? '0' : '1'),
      !o.F && o.ja && ie(u, 'TO', o.ja),
      ie(u, 'TYPE', 'xmlhttp'),
      wi(o, u),
      o.m && o.o && yo(u, o.m, o.o),
      o.L && (o.g.I = o.L));
    var d = o.g;
    ((o = o.ia),
      (d.L = 1),
      (d.v = ks(ut(u))),
      (d.m = null),
      (d.P = !0),
      nc(d, o));
  }
  n.Za = function () {
    this.C != null && ((this.C = null), Ms(this), Eo(this), xe(19));
  };
  function xs(o) {
    o.C != null && (l.clearTimeout(o.C), (o.C = null));
  }
  function Nc(o, u) {
    var d = null;
    if (o.g == u) {
      (xs(o), To(o), (o.g = null));
      var p = 2;
    } else if (mo(o.h, u)) ((d = u.D), lc(o.h, u), (p = 1));
    else return;
    if (o.G != 0) {
      if (u.o)
        if (p == 1) {
          ((d = u.m ? u.m.length : 0), (u = Date.now() - u.F));
          var w = o.B;
          ((p = Rs()), Le(p, new Jl(p, d)), Ls(o));
        } else Pc(o);
      else if (
        ((w = u.s),
        w == 3 ||
          (w == 0 && 0 < u.X) ||
          !((p == 1 && U_(o, u)) || (p == 2 && Eo(o))))
      )
        switch ((d && 0 < d.length && ((u = o.h), (u.i = u.i.concat(d))), w)) {
          case 1:
            Zt(o, 5);
            break;
          case 4:
            Zt(o, 10);
            break;
          case 3:
            Zt(o, 6);
            break;
          default:
            Zt(o, 2);
        }
    }
  }
  function kc(o, u) {
    let d = o.Ta + Math.floor(Math.random() * o.cb);
    return (o.isActive() || (d *= 2), d * u);
  }
  function Zt(o, u) {
    if ((o.j.info('Error code ' + u), u == 2)) {
      var d = g(o.fb, o),
        p = o.Xa;
      const w = !p;
      ((p = new Jt(p || '//www.google.com/images/cleardot.gif')),
        (l.location && l.location.protocol == 'http') || bs(p, 'https'),
        ks(p),
        w ? D_(p.toString(), d) : O_(p.toString(), d));
    } else xe(2);
    ((o.G = 0), o.l && o.l.sa(u), Dc(o), Rc(o));
  }
  n.fb = function (o) {
    o
      ? (this.j.info('Successfully pinged google.com'), xe(2))
      : (this.j.info('Failed to ping google.com'), xe(1));
  };
  function Dc(o) {
    if (((o.G = 0), (o.ka = []), o.l)) {
      const u = cc(o.h);
      ((u.length != 0 || o.i.length != 0) &&
        (N(o.ka, u),
        N(o.ka, o.i),
        (o.h.i.length = 0),
        O(o.i),
        (o.i.length = 0)),
        o.l.ra());
    }
  }
  function Oc(o, u, d) {
    var p = d instanceof Jt ? ut(d) : new Jt(d);
    if (p.g != '') (u && (p.g = u + '.' + p.g), Ns(p, p.s));
    else {
      var w = l.location;
      ((p = w.protocol),
        (u = u ? u + '.' + w.hostname : w.hostname),
        (w = +w.port));
      var C = new Jt(null);
      (p && bs(C, p), u && (C.g = u), w && Ns(C, w), d && (C.l = d), (p = C));
    }
    return (
      (d = o.D),
      (u = o.ya),
      d && u && ie(p, d, u),
      ie(p, 'VER', o.la),
      wi(o, p),
      p
    );
  }
  function Vc(o, u, d) {
    if (u && !o.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    return (
      (u = o.Ca && !o.pa ? new le(new Ds({ eb: d })) : new le(o.pa)),
      u.Ha(o.J),
      u
    );
  }
  n.isActive = function () {
    return !!this.l && this.l.isActive(this);
  };
  function Mc() {}
  ((n = Mc.prototype),
    (n.ua = function () {}),
    (n.ta = function () {}),
    (n.sa = function () {}),
    (n.ra = function () {}),
    (n.isActive = function () {
      return !0;
    }),
    (n.Na = function () {}));
  function Fs() {}
  Fs.prototype.g = function (o, u) {
    return new qe(o, u);
  };
  function qe(o, u) {
    (Ce.call(this),
      (this.g = new Ac(u)),
      (this.l = o),
      (this.h = (u && u.messageUrlParams) || null),
      (o = (u && u.messageHeaders) || null),
      u &&
        u.clientProtocolHeaderRequired &&
        (o
          ? (o['X-Client-Protocol'] = 'webchannel')
          : (o = { 'X-Client-Protocol': 'webchannel' })),
      (this.g.o = o),
      (o = (u && u.initMessageHeaders) || null),
      u &&
        u.messageContentType &&
        (o
          ? (o['X-WebChannel-Content-Type'] = u.messageContentType)
          : (o = { 'X-WebChannel-Content-Type': u.messageContentType })),
      u &&
        u.va &&
        (o
          ? (o['X-WebChannel-Client-Profile'] = u.va)
          : (o = { 'X-WebChannel-Client-Profile': u.va })),
      (this.g.S = o),
      (o = u && u.Sb) && !q(o) && (this.g.m = o),
      (this.v = (u && u.supportsCrossDomainXhr) || !1),
      (this.u = (u && u.sendRawJson) || !1),
      (u = u && u.httpSessionIdParam) &&
        !q(u) &&
        ((this.g.D = u),
        (o = this.h),
        o !== null && u in o && ((o = this.h), u in o && delete o[u])),
      (this.j = new Rn(this)));
  }
  (P(qe, Ce),
    (qe.prototype.m = function () {
      ((this.g.l = this.j),
        this.v && (this.g.J = !0),
        this.g.connect(this.l, this.h || void 0));
    }),
    (qe.prototype.close = function () {
      vo(this.g);
    }),
    (qe.prototype.o = function (o) {
      var u = this.g;
      if (typeof o == 'string') {
        var d = {};
        ((d.__data__ = o), (o = d));
      } else this.u && ((d = {}), (d.__data__ = oo(o)), (o = d));
      (u.i.push(new I_(u.Ya++, o)), u.G == 3 && Ls(u));
    }),
    (qe.prototype.N = function () {
      ((this.g.l = null),
        delete this.j,
        vo(this.g),
        delete this.g,
        qe.aa.N.call(this));
    }));
  function Lc(o) {
    (lo.call(this),
      o.__headers__ &&
        ((this.headers = o.__headers__),
        (this.statusCode = o.__status__),
        delete o.__headers__,
        delete o.__status__));
    var u = o.__sm__;
    if (u) {
      e: {
        for (const d in u) {
          o = d;
          break e;
        }
        o = void 0;
      }
      ((this.i = o) &&
        ((o = this.i), (u = u !== null && o in u ? u[o] : void 0)),
        (this.data = u));
    } else this.data = o;
  }
  P(Lc, lo);
  function xc() {
    (co.call(this), (this.status = 1));
  }
  P(xc, co);
  function Rn(o) {
    this.g = o;
  }
  (P(Rn, Mc),
    (Rn.prototype.ua = function () {
      Le(this.g, 'a');
    }),
    (Rn.prototype.ta = function (o) {
      Le(this.g, new Lc(o));
    }),
    (Rn.prototype.sa = function (o) {
      Le(this.g, new xc());
    }),
    (Rn.prototype.ra = function () {
      Le(this.g, 'b');
    }),
    (Fs.prototype.createWebChannel = Fs.prototype.g),
    (qe.prototype.send = qe.prototype.o),
    (qe.prototype.open = qe.prototype.m),
    (qe.prototype.close = qe.prototype.close),
    (kd = function () {
      return new Fs();
    }),
    (Nd = function () {
      return Rs();
    }),
    (bd = Yt),
    (Go = {
      mb: 0,
      pb: 1,
      qb: 2,
      Jb: 3,
      Ob: 4,
      Lb: 5,
      Mb: 6,
      Kb: 7,
      Ib: 8,
      Nb: 9,
      PROXY: 10,
      NOPROXY: 11,
      Gb: 12,
      Cb: 13,
      Db: 14,
      Bb: 15,
      Eb: 16,
      Fb: 17,
      ib: 18,
      hb: 19,
      jb: 20,
    }),
    (Cs.NO_ERROR = 0),
    (Cs.TIMEOUT = 8),
    (Cs.HTTP_ERROR = 6),
    (Xs = Cs),
    (Zl.COMPLETE = 'complete'),
    (Pd = Zl),
    (Kl.EventType = di),
    (di.OPEN = 'a'),
    (di.CLOSE = 'b'),
    (di.ERROR = 'c'),
    (di.MESSAGE = 'd'),
    (Ce.prototype.listen = Ce.prototype.K),
    (ki = Kl),
    (le.prototype.listenOnce = le.prototype.L),
    (le.prototype.getLastError = le.prototype.Ka),
    (le.prototype.getLastErrorCode = le.prototype.Ba),
    (le.prototype.getStatus = le.prototype.Z),
    (le.prototype.getResponseJson = le.prototype.Oa),
    (le.prototype.getResponseText = le.prototype.oa),
    (le.prototype.send = le.prototype.ea),
    (le.prototype.setWithCredentials = le.prototype.Ha),
    (Sd = le));
}).apply(
  typeof qs < 'u'
    ? qs
    : typeof self < 'u'
      ? self
      : typeof window < 'u'
        ? window
        : {}
);
const hu = '@firebase/firestore';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ne {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? 'uid:' + this.uid : 'anonymous-user';
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
((Ne.UNAUTHENTICATED = new Ne(null)),
  (Ne.GOOGLE_CREDENTIALS = new Ne('google-credentials-uid')),
  (Ne.FIRST_PARTY = new Ne('first-party-uid')),
  (Ne.MOCK_USER = new Ne('mock-user')));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ei = '10.14.0';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const un = new br('@firebase/firestore');
function Ai() {
  return un.logLevel;
}
function M(n, ...e) {
  if (un.logLevel <= W.DEBUG) {
    const t = e.map(Va);
    un.debug(`Firestore (${ei}): ${n}`, ...t);
  }
}
function It(n, ...e) {
  if (un.logLevel <= W.ERROR) {
    const t = e.map(Va);
    un.error(`Firestore (${ei}): ${n}`, ...t);
  }
}
function Wn(n, ...e) {
  if (un.logLevel <= W.WARN) {
    const t = e.map(Va);
    un.warn(`Firestore (${ei}): ${n}`, ...t);
  }
}
function Va(n) {
  if (typeof n == 'string') return n;
  try {
    /**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */ return (function (t) {
      return JSON.stringify(t);
    })(n);
  } catch {
    return n;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function F(n = 'Unexpected state') {
  const e = `FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: ` + n;
  throw (It(e), new Error(e));
}
function Z(n, e) {
  n || F();
}
function B(n, e) {
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S = {
  OK: 'ok',
  CANCELLED: 'cancelled',
  UNKNOWN: 'unknown',
  INVALID_ARGUMENT: 'invalid-argument',
  DEADLINE_EXCEEDED: 'deadline-exceeded',
  NOT_FOUND: 'not-found',
  ALREADY_EXISTS: 'already-exists',
  PERMISSION_DENIED: 'permission-denied',
  UNAUTHENTICATED: 'unauthenticated',
  RESOURCE_EXHAUSTED: 'resource-exhausted',
  FAILED_PRECONDITION: 'failed-precondition',
  ABORTED: 'aborted',
  OUT_OF_RANGE: 'out-of-range',
  UNIMPLEMENTED: 'unimplemented',
  INTERNAL: 'internal',
  UNAVAILABLE: 'unavailable',
  DATA_LOSS: 'data-loss',
};
class V extends At {
  constructor(e, t) {
    (super(e, t),
      (this.code = e),
      (this.message = t),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yt {
  constructor() {
    this.promise = new Promise((e, t) => {
      ((this.resolve = e), (this.reject = t));
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dd {
  constructor(e, t) {
    ((this.user = t),
      (this.type = 'OAuth'),
      (this.headers = new Map()),
      this.headers.set('Authorization', `Bearer ${e}`));
  }
}
class wv {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, t) {
    e.enqueueRetryable(() => t(Ne.UNAUTHENTICATED));
  }
  shutdown() {}
}
class Av {
  constructor(e) {
    ((this.token = e), (this.changeListener = null));
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, t) {
    ((this.changeListener = t), e.enqueueRetryable(() => t(this.token.user)));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class Rv {
  constructor(e) {
    ((this.t = e),
      (this.currentUser = Ne.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null));
  }
  start(e, t) {
    Z(this.o === void 0);
    let i = this.i;
    const s = (c) => (this.i !== i ? ((i = this.i), t(c)) : Promise.resolve());
    let r = new yt();
    this.o = () => {
      (this.i++,
        (this.currentUser = this.u()),
        r.resolve(),
        (r = new yt()),
        e.enqueueRetryable(() => s(this.currentUser)));
    };
    const a = () => {
        const c = r;
        e.enqueueRetryable(async () => {
          (await c.promise, await s(this.currentUser));
        });
      },
      l = (c) => {
        (M('FirebaseAuthCredentialsProvider', 'Auth detected'),
          (this.auth = c),
          this.o && (this.auth.addAuthTokenListener(this.o), a()));
      };
    (this.t.onInit((c) => l(c)),
      setTimeout(() => {
        if (!this.auth) {
          const c = this.t.getImmediate({ optional: !0 });
          c
            ? l(c)
            : (M('FirebaseAuthCredentialsProvider', 'Auth not yet detected'),
              r.resolve(),
              (r = new yt()));
        }
      }, 0),
      a());
  }
  getToken() {
    const e = this.i,
      t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(t)
            .then((i) =>
              this.i !== e
                ? (M(
                    'FirebaseAuthCredentialsProvider',
                    'getToken aborted due to token change.'
                  ),
                  this.getToken())
                : i
                  ? (Z(typeof i.accessToken == 'string'),
                    new Dd(i.accessToken, this.currentUser))
                  : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
      (this.o = void 0));
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return (Z(e === null || typeof e == 'string'), new Ne(e));
  }
}
class Cv {
  constructor(e, t, i) {
    ((this.l = e),
      (this.h = t),
      (this.P = i),
      (this.type = 'FirstParty'),
      (this.user = Ne.FIRST_PARTY),
      (this.I = new Map()));
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set('X-Goog-AuthUser', this.l);
    const e = this.T();
    return (
      e && this.I.set('Authorization', e),
      this.h && this.I.set('X-Goog-Iam-Authorization-Token', this.h),
      this.I
    );
  }
}
class Sv {
  constructor(e, t, i) {
    ((this.l = e), (this.h = t), (this.P = i));
  }
  getToken() {
    return Promise.resolve(new Cv(this.l, this.h, this.P));
  }
  start(e, t) {
    e.enqueueRetryable(() => t(Ne.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class Pv {
  constructor(e) {
    ((this.value = e),
      (this.type = 'AppCheck'),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set('x-firebase-appcheck', this.value));
  }
}
class bv {
  constructor(e) {
    ((this.A = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null));
  }
  start(e, t) {
    Z(this.o === void 0);
    const i = (r) => {
      r.error != null &&
        M(
          'FirebaseAppCheckTokenProvider',
          `Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`
        );
      const a = r.token !== this.R;
      return (
        (this.R = r.token),
        M(
          'FirebaseAppCheckTokenProvider',
          `Received ${a ? 'new' : 'existing'} token.`
        ),
        a ? t(r.token) : Promise.resolve()
      );
    };
    this.o = (r) => {
      e.enqueueRetryable(() => i(r));
    };
    const s = (r) => {
      (M('FirebaseAppCheckTokenProvider', 'AppCheck detected'),
        (this.appCheck = r),
        this.o && this.appCheck.addTokenListener(this.o));
    };
    (this.A.onInit((r) => s(r)),
      setTimeout(() => {
        if (!this.appCheck) {
          const r = this.A.getImmediate({ optional: !0 });
          r
            ? s(r)
            : M('FirebaseAppCheckTokenProvider', 'AppCheck not yet detected');
        }
      }, 0));
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((t) =>
              t
                ? (Z(typeof t.token == 'string'),
                  (this.R = t.token),
                  new Pv(t.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    (this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
      (this.o = void 0));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nv(n) {
  const e = typeof self < 'u' && (self.crypto || self.msCrypto),
    t = new Uint8Array(n);
  if (e && typeof e.getRandomValues == 'function') e.getRandomValues(t);
  else for (let i = 0; i < n; i++) t[i] = Math.floor(256 * Math.random());
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Od {
  static newId() {
    const e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      t = Math.floor(256 / e.length) * e.length;
    let i = '';
    for (; i.length < 20; ) {
      const s = Nv(40);
      for (let r = 0; r < s.length; ++r)
        i.length < 20 && s[r] < t && (i += e.charAt(s[r] % e.length));
    }
    return i;
  }
}
function X(n, e) {
  return n < e ? -1 : n > e ? 1 : 0;
}
function jn(n, e, t) {
  return n.length === e.length && n.every((i, s) => t(i, e[s]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _e {
  constructor(e, t) {
    if (((this.seconds = e), (this.nanoseconds = t), t < 0))
      throw new V(
        S.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + t
      );
    if (t >= 1e9)
      throw new V(
        S.INVALID_ARGUMENT,
        'Timestamp nanoseconds out of range: ' + t
      );
    if (e < -62135596800)
      throw new V(S.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
    if (e >= 253402300800)
      throw new V(S.INVALID_ARGUMENT, 'Timestamp seconds out of range: ' + e);
  }
  static now() {
    return _e.fromMillis(Date.now());
  }
  static fromDate(e) {
    return _e.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const t = Math.floor(e / 1e3),
      i = Math.floor(1e6 * (e - 1e3 * t));
    return new _e(t, i);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? X(this.nanoseconds, e.nanoseconds)
      : X(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      'Timestamp(seconds=' +
      this.seconds +
      ', nanoseconds=' +
      this.nanoseconds +
      ')'
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return (
      String(e).padStart(12, '0') +
      '.' +
      String(this.nanoseconds).padStart(9, '0')
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new U(e);
  }
  static min() {
    return new U(new _e(0, 0));
  }
  static max() {
    return new U(new _e(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return 'SnapshotVersion(' + this.timestamp.toString() + ')';
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ki {
  constructor(e, t, i) {
    (t === void 0 ? (t = 0) : t > e.length && F(),
      i === void 0 ? (i = e.length - t) : i > e.length - t && F(),
      (this.segments = e),
      (this.offset = t),
      (this.len = i));
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return Ki.comparator(this, e) === 0;
  }
  child(e) {
    const t = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof Ki
        ? e.forEach((i) => {
            t.push(i);
          })
        : t.push(e),
      this.construct(t)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let t = 0; t < this.length; t++)
      if (this.get(t) !== e.get(t)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let t = 0; t < this.length; t++)
      if (this.get(t) !== e.get(t)) return !1;
    return !0;
  }
  forEach(e) {
    for (let t = this.offset, i = this.limit(); t < i; t++) e(this.segments[t]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, t) {
    const i = Math.min(e.length, t.length);
    for (let s = 0; s < i; s++) {
      const r = e.get(s),
        a = t.get(s);
      if (r < a) return -1;
      if (r > a) return 1;
    }
    return e.length < t.length ? -1 : e.length > t.length ? 1 : 0;
  }
}
class ne extends Ki {
  construct(e, t, i) {
    return new ne(e, t, i);
  }
  canonicalString() {
    return this.toArray().join('/');
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join('/');
  }
  static fromString(...e) {
    const t = [];
    for (const i of e) {
      if (i.indexOf('//') >= 0)
        throw new V(
          S.INVALID_ARGUMENT,
          `Invalid segment (${i}). Paths must not contain // in them.`
        );
      t.push(...i.split('/').filter((s) => s.length > 0));
    }
    return new ne(t);
  }
  static emptyPath() {
    return new ne([]);
  }
}
const kv = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Ie extends Ki {
  construct(e, t, i) {
    return new Ie(e, t, i);
  }
  static isValidIdentifier(e) {
    return kv.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
          Ie.isValidIdentifier(e) || (e = '`' + e + '`'),
          e
        )
      )
      .join('.');
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === '__name__';
  }
  static keyField() {
    return new Ie(['__name__']);
  }
  static fromServerFormat(e) {
    const t = [];
    let i = '',
      s = 0;
    const r = () => {
      if (i.length === 0)
        throw new V(
          S.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      (t.push(i), (i = ''));
    };
    let a = !1;
    for (; s < e.length; ) {
      const l = e[s];
      if (l === '\\') {
        if (s + 1 === e.length)
          throw new V(
            S.INVALID_ARGUMENT,
            'Path has trailing escape character: ' + e
          );
        const c = e[s + 1];
        if (c !== '\\' && c !== '.' && c !== '`')
          throw new V(
            S.INVALID_ARGUMENT,
            'Path has invalid escape sequence: ' + e
          );
        ((i += c), (s += 2));
      } else
        l === '`'
          ? ((a = !a), s++)
          : l !== '.' || a
            ? ((i += l), s++)
            : (r(), s++);
    }
    if ((r(), a))
      throw new V(S.INVALID_ARGUMENT, 'Unterminated ` in path: ' + e);
    return new Ie(t);
  }
  static emptyPath() {
    return new Ie([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class L {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new L(ne.fromString(e));
  }
  static fromName(e) {
    return new L(ne.fromString(e).popFirst(5));
  }
  static empty() {
    return new L(ne.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && ne.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t) {
    return ne.comparator(e.path, t.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new L(new ne(e.slice()));
  }
}
function Dv(n, e) {
  const t = n.toTimestamp().seconds,
    i = n.toTimestamp().nanoseconds + 1,
    s = U.fromTimestamp(i === 1e9 ? new _e(t + 1, 0) : new _e(t, i));
  return new Wt(s, L.empty(), e);
}
function Ov(n) {
  return new Wt(n.readTime, n.key, -1);
}
class Wt {
  constructor(e, t, i) {
    ((this.readTime = e), (this.documentKey = t), (this.largestBatchId = i));
  }
  static min() {
    return new Wt(U.min(), L.empty(), -1);
  }
  static max() {
    return new Wt(U.max(), L.empty(), -1);
  }
}
function Vv(n, e) {
  let t = n.readTime.compareTo(e.readTime);
  return t !== 0
    ? t
    : ((t = L.comparator(n.documentKey, e.documentKey)),
      t !== 0 ? t : X(n.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Mv =
  'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.';
class Lv {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function ls(n) {
  if (n.code !== S.FAILED_PRECONDITION || n.message !== Mv) throw n;
  M('LocalStore', 'Unexpectedly lost primary lease');
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class b {
  constructor(e) {
    ((this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (t) => {
          ((this.isDone = !0),
            (this.result = t),
            this.nextCallback && this.nextCallback(t));
        },
        (t) => {
          ((this.isDone = !0),
            (this.error = t),
            this.catchCallback && this.catchCallback(t));
        }
      ));
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, t) {
    return (
      this.callbackAttached && F(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(t, this.error)
          : this.wrapSuccess(e, this.result)
        : new b((i, s) => {
            ((this.nextCallback = (r) => {
              this.wrapSuccess(e, r).next(i, s);
            }),
              (this.catchCallback = (r) => {
                this.wrapFailure(t, r).next(i, s);
              }));
          })
    );
  }
  toPromise() {
    return new Promise((e, t) => {
      this.next(e, t);
    });
  }
  wrapUserFunction(e) {
    try {
      const t = e();
      return t instanceof b ? t : b.resolve(t);
    } catch (t) {
      return b.reject(t);
    }
  }
  wrapSuccess(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : b.resolve(t);
  }
  wrapFailure(e, t) {
    return e ? this.wrapUserFunction(() => e(t)) : b.reject(t);
  }
  static resolve(e) {
    return new b((t, i) => {
      t(e);
    });
  }
  static reject(e) {
    return new b((t, i) => {
      i(e);
    });
  }
  static waitFor(e) {
    return new b((t, i) => {
      let s = 0,
        r = 0,
        a = !1;
      (e.forEach((l) => {
        (++s,
          l.next(
            () => {
              (++r, a && r === s && t());
            },
            (c) => i(c)
          ));
      }),
        (a = !0),
        r === s && t());
    });
  }
  static or(e) {
    let t = b.resolve(!1);
    for (const i of e) t = t.next((s) => (s ? b.resolve(s) : i()));
    return t;
  }
  static forEach(e, t) {
    const i = [];
    return (
      e.forEach((s, r) => {
        i.push(t.call(this, s, r));
      }),
      this.waitFor(i)
    );
  }
  static mapArray(e, t) {
    return new b((i, s) => {
      const r = e.length,
        a = new Array(r);
      let l = 0;
      for (let c = 0; c < r; c++) {
        const h = c;
        t(e[h]).next(
          (f) => {
            ((a[h] = f), ++l, l === r && i(a));
          },
          (f) => s(f)
        );
      }
    });
  }
  static doWhile(e, t) {
    return new b((i, s) => {
      const r = () => {
        e() === !0
          ? t().next(() => {
              r();
            }, s)
          : i();
      };
      r();
    });
  }
}
function xv(n) {
  const e = n.match(/Android ([\d.]+)/i),
    t = e ? e[1].split('.').slice(0, 2).join('.') : '-1';
  return Number(t);
}
function cs(n) {
  return n.name === 'IndexedDbTransactionError';
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ma {
  constructor(e, t) {
    ((this.previousValue = e),
      t &&
        ((t.sequenceNumberHandler = (i) => this.ie(i)),
        (this.se = (i) => t.writeSequenceNumber(i))));
  }
  ie(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)),
      this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return (this.se && this.se(e), e);
  }
}
Ma.oe = -1;
function Or(n) {
  return n == null;
}
function hr(n) {
  return n === 0 && 1 / n == -1 / 0;
}
function Fv(n) {
  return (
    typeof n == 'number' &&
    Number.isInteger(n) &&
    !hr(n) &&
    n <= Number.MAX_SAFE_INTEGER &&
    n >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function du(n) {
  let e = 0;
  for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e++;
  return e;
}
function yn(n, e) {
  for (const t in n) Object.prototype.hasOwnProperty.call(n, t) && e(t, n[t]);
}
function Vd(n) {
  for (const e in n) if (Object.prototype.hasOwnProperty.call(n, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let pe = class zo {
    constructor(e, t) {
      ((this.comparator = e), (this.root = t || Ft.EMPTY));
    }
    insert(e, t) {
      return new zo(
        this.comparator,
        this.root
          .insert(e, t, this.comparator)
          .copy(null, null, Ft.BLACK, null, null)
      );
    }
    remove(e) {
      return new zo(
        this.comparator,
        this.root
          .remove(e, this.comparator)
          .copy(null, null, Ft.BLACK, null, null)
      );
    }
    get(e) {
      let t = this.root;
      for (; !t.isEmpty(); ) {
        const i = this.comparator(e, t.key);
        if (i === 0) return t.value;
        i < 0 ? (t = t.left) : i > 0 && (t = t.right);
      }
      return null;
    }
    indexOf(e) {
      let t = 0,
        i = this.root;
      for (; !i.isEmpty(); ) {
        const s = this.comparator(e, i.key);
        if (s === 0) return t + i.left.size;
        s < 0 ? (i = i.left) : ((t += i.left.size + 1), (i = i.right));
      }
      return -1;
    }
    isEmpty() {
      return this.root.isEmpty();
    }
    get size() {
      return this.root.size;
    }
    minKey() {
      return this.root.minKey();
    }
    maxKey() {
      return this.root.maxKey();
    }
    inorderTraversal(e) {
      return this.root.inorderTraversal(e);
    }
    forEach(e) {
      this.inorderTraversal((t, i) => (e(t, i), !1));
    }
    toString() {
      const e = [];
      return (
        this.inorderTraversal((t, i) => (e.push(`${t}:${i}`), !1)),
        `{${e.join(', ')}}`
      );
    }
    reverseTraversal(e) {
      return this.root.reverseTraversal(e);
    }
    getIterator() {
      return new Ws(this.root, null, this.comparator, !1);
    }
    getIteratorFrom(e) {
      return new Ws(this.root, e, this.comparator, !1);
    }
    getReverseIterator() {
      return new Ws(this.root, null, this.comparator, !0);
    }
    getReverseIteratorFrom(e) {
      return new Ws(this.root, e, this.comparator, !0);
    }
  },
  Ws = class {
    constructor(e, t, i, s) {
      ((this.isReverse = s), (this.nodeStack = []));
      let r = 1;
      for (; !e.isEmpty(); )
        if (((r = t ? i(e.key, t) : 1), t && s && (r *= -1), r < 0))
          e = this.isReverse ? e.left : e.right;
        else {
          if (r === 0) {
            this.nodeStack.push(e);
            break;
          }
          (this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left));
        }
    }
    getNext() {
      let e = this.nodeStack.pop();
      const t = { key: e.key, value: e.value };
      if (this.isReverse)
        for (e = e.left; !e.isEmpty(); )
          (this.nodeStack.push(e), (e = e.right));
      else
        for (e = e.right; !e.isEmpty(); )
          (this.nodeStack.push(e), (e = e.left));
      return t;
    }
    hasNext() {
      return this.nodeStack.length > 0;
    }
    peek() {
      if (this.nodeStack.length === 0) return null;
      const e = this.nodeStack[this.nodeStack.length - 1];
      return { key: e.key, value: e.value };
    }
  },
  Ft = class dt {
    constructor(e, t, i, s, r) {
      ((this.key = e),
        (this.value = t),
        (this.color = i ?? dt.RED),
        (this.left = s ?? dt.EMPTY),
        (this.right = r ?? dt.EMPTY),
        (this.size = this.left.size + 1 + this.right.size));
    }
    copy(e, t, i, s, r) {
      return new dt(
        e ?? this.key,
        t ?? this.value,
        i ?? this.color,
        s ?? this.left,
        r ?? this.right
      );
    }
    isEmpty() {
      return !1;
    }
    inorderTraversal(e) {
      return (
        this.left.inorderTraversal(e) ||
        e(this.key, this.value) ||
        this.right.inorderTraversal(e)
      );
    }
    reverseTraversal(e) {
      return (
        this.right.reverseTraversal(e) ||
        e(this.key, this.value) ||
        this.left.reverseTraversal(e)
      );
    }
    min() {
      return this.left.isEmpty() ? this : this.left.min();
    }
    minKey() {
      return this.min().key;
    }
    maxKey() {
      return this.right.isEmpty() ? this.key : this.right.maxKey();
    }
    insert(e, t, i) {
      let s = this;
      const r = i(e, s.key);
      return (
        (s =
          r < 0
            ? s.copy(null, null, null, s.left.insert(e, t, i), null)
            : r === 0
              ? s.copy(null, t, null, null, null)
              : s.copy(null, null, null, null, s.right.insert(e, t, i))),
        s.fixUp()
      );
    }
    removeMin() {
      if (this.left.isEmpty()) return dt.EMPTY;
      let e = this;
      return (
        e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
        (e = e.copy(null, null, null, e.left.removeMin(), null)),
        e.fixUp()
      );
    }
    remove(e, t) {
      let i,
        s = this;
      if (t(e, s.key) < 0)
        (s.left.isEmpty() ||
          s.left.isRed() ||
          s.left.left.isRed() ||
          (s = s.moveRedLeft()),
          (s = s.copy(null, null, null, s.left.remove(e, t), null)));
      else {
        if (
          (s.left.isRed() && (s = s.rotateRight()),
          s.right.isEmpty() ||
            s.right.isRed() ||
            s.right.left.isRed() ||
            (s = s.moveRedRight()),
          t(e, s.key) === 0)
        ) {
          if (s.right.isEmpty()) return dt.EMPTY;
          ((i = s.right.min()),
            (s = s.copy(i.key, i.value, null, null, s.right.removeMin())));
        }
        s = s.copy(null, null, null, null, s.right.remove(e, t));
      }
      return s.fixUp();
    }
    isRed() {
      return this.color;
    }
    fixUp() {
      let e = this;
      return (
        e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
        e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
        e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
        e
      );
    }
    moveRedLeft() {
      let e = this.colorFlip();
      return (
        e.right.left.isRed() &&
          ((e = e.copy(null, null, null, null, e.right.rotateRight())),
          (e = e.rotateLeft()),
          (e = e.colorFlip())),
        e
      );
    }
    moveRedRight() {
      let e = this.colorFlip();
      return (
        e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())),
        e
      );
    }
    rotateLeft() {
      const e = this.copy(null, null, dt.RED, null, this.right.left);
      return this.right.copy(null, null, this.color, e, null);
    }
    rotateRight() {
      const e = this.copy(null, null, dt.RED, this.left.right, null);
      return this.left.copy(null, null, this.color, null, e);
    }
    colorFlip() {
      const e = this.left.copy(null, null, !this.left.color, null, null),
        t = this.right.copy(null, null, !this.right.color, null, null);
      return this.copy(null, null, !this.color, e, t);
    }
    checkMaxDepth() {
      const e = this.check();
      return Math.pow(2, e) <= this.size + 1;
    }
    check() {
      if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw F();
      const e = this.left.check();
      if (e !== this.right.check()) throw F();
      return e + (this.isRed() ? 0 : 1);
    }
  };
((Ft.EMPTY = null), (Ft.RED = !0), (Ft.BLACK = !1));
Ft.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw F();
  }
  get value() {
    throw F();
  }
  get color() {
    throw F();
  }
  get left() {
    throw F();
  }
  get right() {
    throw F();
  }
  copy(e, t, i, s, r) {
    return this;
  }
  insert(e, t, i) {
    return new Ft(e, t);
  }
  remove(e, t) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class we {
  constructor(e) {
    ((this.comparator = e), (this.data = new pe(this.comparator)));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((t, i) => (e(t), !1));
  }
  forEachInRange(e, t) {
    const i = this.data.getIteratorFrom(e[0]);
    for (; i.hasNext(); ) {
      const s = i.getNext();
      if (this.comparator(s.key, e[1]) >= 0) return;
      t(s.key);
    }
  }
  forEachWhile(e, t) {
    let i;
    for (
      i = t !== void 0 ? this.data.getIteratorFrom(t) : this.data.getIterator();
      i.hasNext();

    )
      if (!e(i.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const t = this.data.getIteratorFrom(e);
    return t.hasNext() ? t.getNext().key : null;
  }
  getIterator() {
    return new fu(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new fu(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t = this;
    return (
      t.size < e.size && ((t = e), (e = this)),
      e.forEach((i) => {
        t = t.add(i);
      }),
      t
    );
  }
  isEqual(e) {
    if (!(e instanceof we) || this.size !== e.size) return !1;
    const t = this.data.getIterator(),
      i = e.data.getIterator();
    for (; t.hasNext(); ) {
      const s = t.getNext().key,
        r = i.getNext().key;
      if (this.comparator(s, r) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((t) => {
        e.push(t);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return (this.forEach((t) => e.push(t)), 'SortedSet(' + e.toString() + ')');
  }
  copy(e) {
    const t = new we(this.comparator);
    return ((t.data = e), t);
  }
}
class fu {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class We {
  constructor(e) {
    ((this.fields = e), e.sort(Ie.comparator));
  }
  static empty() {
    return new We([]);
  }
  unionWith(e) {
    let t = new we(Ie.comparator);
    for (const i of this.fields) t = t.add(i);
    for (const i of e) t = t.add(i);
    return new We(t.toArray());
  }
  covers(e) {
    for (const t of this.fields) if (t.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return jn(this.fields, e.fields, (t, i) => t.isEqual(i));
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Md extends Error {
  constructor() {
    (super(...arguments), (this.name = 'Base64DecodeError'));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ae {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t = (function (s) {
      try {
        return atob(s);
      } catch (r) {
        throw typeof DOMException < 'u' && r instanceof DOMException
          ? new Md('Invalid base64 string: ' + r)
          : r;
      }
    })(e);
    return new Ae(t);
  }
  static fromUint8Array(e) {
    const t = (function (s) {
      let r = '';
      for (let a = 0; a < s.length; ++a) r += String.fromCharCode(s[a]);
      return r;
    })(e);
    return new Ae(t);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (t) {
      return btoa(t);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (t) {
      const i = new Uint8Array(t.length);
      for (let s = 0; s < t.length; s++) i[s] = t.charCodeAt(s);
      return i;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return X(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
Ae.EMPTY_BYTE_STRING = new Ae('');
const Uv = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function jt(n) {
  if ((Z(!!n), typeof n == 'string')) {
    let e = 0;
    const t = Uv.exec(n);
    if ((Z(!!t), t[1])) {
      let s = t[1];
      ((s = (s + '000000000').substr(0, 9)), (e = Number(s)));
    }
    const i = new Date(n);
    return { seconds: Math.floor(i.getTime() / 1e3), nanos: e };
  }
  return { seconds: ue(n.seconds), nanos: ue(n.nanos) };
}
function ue(n) {
  return typeof n == 'number' ? n : typeof n == 'string' ? Number(n) : 0;
}
function hn(n) {
  return typeof n == 'string' ? Ae.fromBase64String(n) : Ae.fromUint8Array(n);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function La(n) {
  var e, t;
  return (
    ((t = (
      ((e = n == null ? void 0 : n.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || t === void 0
      ? void 0
      : t.stringValue) === 'server_timestamp'
  );
}
function xa(n) {
  const e = n.mapValue.fields.__previous_value__;
  return La(e) ? xa(e) : e;
}
function Qi(n) {
  const e = jt(n.mapValue.fields.__local_write_time__.timestampValue);
  return new _e(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Bv {
  constructor(e, t, i, s, r, a, l, c, h) {
    ((this.databaseId = e),
      (this.appId = t),
      (this.persistenceKey = i),
      (this.host = s),
      (this.ssl = r),
      (this.forceLongPolling = a),
      (this.autoDetectLongPolling = l),
      (this.longPollingOptions = c),
      (this.useFetchStreams = h));
  }
}
class Yi {
  constructor(e, t) {
    ((this.projectId = e), (this.database = t || '(default)'));
  }
  static empty() {
    return new Yi('', '');
  }
  get isDefaultDatabase() {
    return this.database === '(default)';
  }
  isEqual(e) {
    return (
      e instanceof Yi &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const js = { mapValue: {} };
function dn(n) {
  return 'nullValue' in n
    ? 0
    : 'booleanValue' in n
      ? 1
      : 'integerValue' in n || 'doubleValue' in n
        ? 2
        : 'timestampValue' in n
          ? 3
          : 'stringValue' in n
            ? 5
            : 'bytesValue' in n
              ? 6
              : 'referenceValue' in n
                ? 7
                : 'geoPointValue' in n
                  ? 8
                  : 'arrayValue' in n
                    ? 9
                    : 'mapValue' in n
                      ? La(n)
                        ? 4
                        : Wv(n)
                          ? 9007199254740991
                          : qv(n)
                            ? 10
                            : 11
                      : F();
}
function lt(n, e) {
  if (n === e) return !0;
  const t = dn(n);
  if (t !== dn(e)) return !1;
  switch (t) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === e.booleanValue;
    case 4:
      return Qi(n).isEqual(Qi(e));
    case 3:
      return (function (s, r) {
        if (
          typeof s.timestampValue == 'string' &&
          typeof r.timestampValue == 'string' &&
          s.timestampValue.length === r.timestampValue.length
        )
          return s.timestampValue === r.timestampValue;
        const a = jt(s.timestampValue),
          l = jt(r.timestampValue);
        return a.seconds === l.seconds && a.nanos === l.nanos;
      })(n, e);
    case 5:
      return n.stringValue === e.stringValue;
    case 6:
      return (function (s, r) {
        return hn(s.bytesValue).isEqual(hn(r.bytesValue));
      })(n, e);
    case 7:
      return n.referenceValue === e.referenceValue;
    case 8:
      return (function (s, r) {
        return (
          ue(s.geoPointValue.latitude) === ue(r.geoPointValue.latitude) &&
          ue(s.geoPointValue.longitude) === ue(r.geoPointValue.longitude)
        );
      })(n, e);
    case 2:
      return (function (s, r) {
        if ('integerValue' in s && 'integerValue' in r)
          return ue(s.integerValue) === ue(r.integerValue);
        if ('doubleValue' in s && 'doubleValue' in r) {
          const a = ue(s.doubleValue),
            l = ue(r.doubleValue);
          return a === l ? hr(a) === hr(l) : isNaN(a) && isNaN(l);
        }
        return !1;
      })(n, e);
    case 9:
      return jn(n.arrayValue.values || [], e.arrayValue.values || [], lt);
    case 10:
    case 11:
      return (function (s, r) {
        const a = s.mapValue.fields || {},
          l = r.mapValue.fields || {};
        if (du(a) !== du(l)) return !1;
        for (const c in a)
          if (a.hasOwnProperty(c) && (l[c] === void 0 || !lt(a[c], l[c])))
            return !1;
        return !0;
      })(n, e);
    default:
      return F();
  }
}
function Xi(n, e) {
  return (n.values || []).find((t) => lt(t, e)) !== void 0;
}
function $n(n, e) {
  if (n === e) return 0;
  const t = dn(n),
    i = dn(e);
  if (t !== i) return X(t, i);
  switch (t) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return X(n.booleanValue, e.booleanValue);
    case 2:
      return (function (r, a) {
        const l = ue(r.integerValue || r.doubleValue),
          c = ue(a.integerValue || a.doubleValue);
        return l < c
          ? -1
          : l > c
            ? 1
            : l === c
              ? 0
              : isNaN(l)
                ? isNaN(c)
                  ? 0
                  : -1
                : 1;
      })(n, e);
    case 3:
      return pu(n.timestampValue, e.timestampValue);
    case 4:
      return pu(Qi(n), Qi(e));
    case 5:
      return X(n.stringValue, e.stringValue);
    case 6:
      return (function (r, a) {
        const l = hn(r),
          c = hn(a);
        return l.compareTo(c);
      })(n.bytesValue, e.bytesValue);
    case 7:
      return (function (r, a) {
        const l = r.split('/'),
          c = a.split('/');
        for (let h = 0; h < l.length && h < c.length; h++) {
          const f = X(l[h], c[h]);
          if (f !== 0) return f;
        }
        return X(l.length, c.length);
      })(n.referenceValue, e.referenceValue);
    case 8:
      return (function (r, a) {
        const l = X(ue(r.latitude), ue(a.latitude));
        return l !== 0 ? l : X(ue(r.longitude), ue(a.longitude));
      })(n.geoPointValue, e.geoPointValue);
    case 9:
      return _u(n.arrayValue, e.arrayValue);
    case 10:
      return (function (r, a) {
        var l, c, h, f;
        const _ = r.fields || {},
          g = a.fields || {},
          R = (l = _.value) === null || l === void 0 ? void 0 : l.arrayValue,
          P = (c = g.value) === null || c === void 0 ? void 0 : c.arrayValue,
          O = X(
            ((h = R == null ? void 0 : R.values) === null || h === void 0
              ? void 0
              : h.length) || 0,
            ((f = P == null ? void 0 : P.values) === null || f === void 0
              ? void 0
              : f.length) || 0
          );
        return O !== 0 ? O : _u(R, P);
      })(n.mapValue, e.mapValue);
    case 11:
      return (function (r, a) {
        if (r === js.mapValue && a === js.mapValue) return 0;
        if (r === js.mapValue) return 1;
        if (a === js.mapValue) return -1;
        const l = r.fields || {},
          c = Object.keys(l),
          h = a.fields || {},
          f = Object.keys(h);
        (c.sort(), f.sort());
        for (let _ = 0; _ < c.length && _ < f.length; ++_) {
          const g = X(c[_], f[_]);
          if (g !== 0) return g;
          const R = $n(l[c[_]], h[f[_]]);
          if (R !== 0) return R;
        }
        return X(c.length, f.length);
      })(n.mapValue, e.mapValue);
    default:
      throw F();
  }
}
function pu(n, e) {
  if (typeof n == 'string' && typeof e == 'string' && n.length === e.length)
    return X(n, e);
  const t = jt(n),
    i = jt(e),
    s = X(t.seconds, i.seconds);
  return s !== 0 ? s : X(t.nanos, i.nanos);
}
function _u(n, e) {
  const t = n.values || [],
    i = e.values || [];
  for (let s = 0; s < t.length && s < i.length; ++s) {
    const r = $n(t[s], i[s]);
    if (r) return r;
  }
  return X(t.length, i.length);
}
function Hn(n) {
  return Ko(n);
}
function Ko(n) {
  return 'nullValue' in n
    ? 'null'
    : 'booleanValue' in n
      ? '' + n.booleanValue
      : 'integerValue' in n
        ? '' + n.integerValue
        : 'doubleValue' in n
          ? '' + n.doubleValue
          : 'timestampValue' in n
            ? (function (t) {
                const i = jt(t);
                return `time(${i.seconds},${i.nanos})`;
              })(n.timestampValue)
            : 'stringValue' in n
              ? n.stringValue
              : 'bytesValue' in n
                ? (function (t) {
                    return hn(t).toBase64();
                  })(n.bytesValue)
                : 'referenceValue' in n
                  ? (function (t) {
                      return L.fromName(t).toString();
                    })(n.referenceValue)
                  : 'geoPointValue' in n
                    ? (function (t) {
                        return `geo(${t.latitude},${t.longitude})`;
                      })(n.geoPointValue)
                    : 'arrayValue' in n
                      ? (function (t) {
                          let i = '[',
                            s = !0;
                          for (const r of t.values || [])
                            (s ? (s = !1) : (i += ','), (i += Ko(r)));
                          return i + ']';
                        })(n.arrayValue)
                      : 'mapValue' in n
                        ? (function (t) {
                            const i = Object.keys(t.fields || {}).sort();
                            let s = '{',
                              r = !0;
                            for (const a of i)
                              (r ? (r = !1) : (s += ','),
                                (s += `${a}:${Ko(t.fields[a])}`));
                            return s + '}';
                          })(n.mapValue)
                        : F();
}
function mu(n, e) {
  return {
    referenceValue: `projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`,
  };
}
function Qo(n) {
  return !!n && 'integerValue' in n;
}
function Fa(n) {
  return !!n && 'arrayValue' in n;
}
function gu(n) {
  return !!n && 'nullValue' in n;
}
function yu(n) {
  return !!n && 'doubleValue' in n && isNaN(Number(n.doubleValue));
}
function Js(n) {
  return !!n && 'mapValue' in n;
}
function qv(n) {
  var e, t;
  return (
    ((t = (
      ((e = n == null ? void 0 : n.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || t === void 0
      ? void 0
      : t.stringValue) === '__vector__'
  );
}
function Li(n) {
  if (n.geoPointValue)
    return { geoPointValue: Object.assign({}, n.geoPointValue) };
  if (n.timestampValue && typeof n.timestampValue == 'object')
    return { timestampValue: Object.assign({}, n.timestampValue) };
  if (n.mapValue) {
    const e = { mapValue: { fields: {} } };
    return (yn(n.mapValue.fields, (t, i) => (e.mapValue.fields[t] = Li(i))), e);
  }
  if (n.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let t = 0; t < (n.arrayValue.values || []).length; ++t)
      e.arrayValue.values[t] = Li(n.arrayValue.values[t]);
    return e;
  }
  return Object.assign({}, n);
}
function Wv(n) {
  return (
    (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === '__max__'
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ue {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new Ue({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let t = this.value;
      for (let i = 0; i < e.length - 1; ++i)
        if (((t = (t.mapValue.fields || {})[e.get(i)]), !Js(t))) return null;
      return ((t = (t.mapValue.fields || {})[e.lastSegment()]), t || null);
    }
  }
  set(e, t) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = Li(t);
  }
  setAll(e) {
    let t = Ie.emptyPath(),
      i = {},
      s = [];
    e.forEach((a, l) => {
      if (!t.isImmediateParentOf(l)) {
        const c = this.getFieldsMap(t);
        (this.applyChanges(c, i, s), (i = {}), (s = []), (t = l.popLast()));
      }
      a ? (i[l.lastSegment()] = Li(a)) : s.push(l.lastSegment());
    });
    const r = this.getFieldsMap(t);
    this.applyChanges(r, i, s);
  }
  delete(e) {
    const t = this.field(e.popLast());
    Js(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return lt(this.value, e.value);
  }
  getFieldsMap(e) {
    let t = this.value;
    t.mapValue.fields || (t.mapValue = { fields: {} });
    for (let i = 0; i < e.length; ++i) {
      let s = t.mapValue.fields[e.get(i)];
      ((Js(s) && s.mapValue.fields) ||
        ((s = { mapValue: { fields: {} } }), (t.mapValue.fields[e.get(i)] = s)),
        (t = s));
    }
    return t.mapValue.fields;
  }
  applyChanges(e, t, i) {
    yn(t, (s, r) => (e[s] = r));
    for (const s of i) delete e[s];
  }
  clone() {
    return new Ue(Li(this.value));
  }
}
function Ld(n) {
  const e = [];
  return (
    yn(n.fields, (t, i) => {
      const s = new Ie([t]);
      if (Js(i)) {
        const r = Ld(i.mapValue).fields;
        if (r.length === 0) e.push(s);
        else for (const a of r) e.push(s.child(a));
      } else e.push(s);
    }),
    new We(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ke {
  constructor(e, t, i, s, r, a, l) {
    ((this.key = e),
      (this.documentType = t),
      (this.version = i),
      (this.readTime = s),
      (this.createTime = r),
      (this.data = a),
      (this.documentState = l));
  }
  static newInvalidDocument(e) {
    return new ke(e, 0, U.min(), U.min(), U.min(), Ue.empty(), 0);
  }
  static newFoundDocument(e, t, i, s) {
    return new ke(e, 1, t, U.min(), i, s, 0);
  }
  static newNoDocument(e, t) {
    return new ke(e, 2, t, U.min(), U.min(), Ue.empty(), 0);
  }
  static newUnknownDocument(e, t) {
    return new ke(e, 3, t, U.min(), U.min(), Ue.empty(), 2);
  }
  convertToFoundDocument(e, t) {
    return (
      !this.createTime.isEqual(U.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = t),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = Ue.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = Ue.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return ((this.documentState = 2), this);
  }
  setHasLocalMutations() {
    return ((this.documentState = 1), (this.version = U.min()), this);
  }
  setReadTime(e) {
    return ((this.readTime = e), this);
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof ke &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new ke(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dr {
  constructor(e, t) {
    ((this.position = e), (this.inclusive = t));
  }
}
function vu(n, e, t) {
  let i = 0;
  for (let s = 0; s < n.position.length; s++) {
    const r = e[s],
      a = n.position[s];
    if (
      (r.field.isKeyField()
        ? (i = L.comparator(L.fromName(a.referenceValue), t.key))
        : (i = $n(a, t.data.field(r.field))),
      r.dir === 'desc' && (i *= -1),
      i !== 0)
    )
      break;
  }
  return i;
}
function Eu(n, e) {
  if (n === null) return e === null;
  if (
    e === null ||
    n.inclusive !== e.inclusive ||
    n.position.length !== e.position.length
  )
    return !1;
  for (let t = 0; t < n.position.length; t++)
    if (!lt(n.position[t], e.position[t])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ji {
  constructor(e, t = 'asc') {
    ((this.field = e), (this.dir = t));
  }
}
function jv(n, e) {
  return n.dir === e.dir && n.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xd {}
class fe extends xd {
  constructor(e, t, i) {
    (super(), (this.field = e), (this.op = t), (this.value = i));
  }
  static create(e, t, i) {
    return e.isKeyField()
      ? t === 'in' || t === 'not-in'
        ? this.createKeyFieldInFilter(e, t, i)
        : new Hv(e, t, i)
      : t === 'array-contains'
        ? new Kv(e, i)
        : t === 'in'
          ? new Qv(e, i)
          : t === 'not-in'
            ? new Yv(e, i)
            : t === 'array-contains-any'
              ? new Xv(e, i)
              : new fe(e, t, i);
  }
  static createKeyFieldInFilter(e, t, i) {
    return t === 'in' ? new Gv(e, i) : new zv(e, i);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return this.op === '!='
      ? t !== null && this.matchesComparison($n(t, this.value))
      : t !== null &&
          dn(this.value) === dn(t) &&
          this.matchesComparison($n(t, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case '<':
        return e < 0;
      case '<=':
        return e <= 0;
      case '==':
        return e === 0;
      case '!=':
        return e !== 0;
      case '>':
        return e > 0;
      case '>=':
        return e >= 0;
      default:
        return F();
    }
  }
  isInequality() {
    return ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class Ze extends xd {
  constructor(e, t) {
    (super(), (this.filters = e), (this.op = t), (this.ae = null));
  }
  static create(e, t) {
    return new Ze(e, t);
  }
  matches(e) {
    return Fd(this)
      ? this.filters.find((t) => !t.matches(e)) === void 0
      : this.filters.find((t) => t.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ae !== null ||
        (this.ae = this.filters.reduce(
          (e, t) => e.concat(t.getFlattenedFilters()),
          []
        )),
      this.ae
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function Fd(n) {
  return n.op === 'and';
}
function Ud(n) {
  return $v(n) && Fd(n);
}
function $v(n) {
  for (const e of n.filters) if (e instanceof Ze) return !1;
  return !0;
}
function Yo(n) {
  if (n instanceof fe)
    return n.field.canonicalString() + n.op.toString() + Hn(n.value);
  if (Ud(n)) return n.filters.map((e) => Yo(e)).join(',');
  {
    const e = n.filters.map((t) => Yo(t)).join(',');
    return `${n.op}(${e})`;
  }
}
function Bd(n, e) {
  return n instanceof fe
    ? (function (i, s) {
        return (
          s instanceof fe &&
          i.op === s.op &&
          i.field.isEqual(s.field) &&
          lt(i.value, s.value)
        );
      })(n, e)
    : n instanceof Ze
      ? (function (i, s) {
          return s instanceof Ze &&
            i.op === s.op &&
            i.filters.length === s.filters.length
            ? i.filters.reduce((r, a, l) => r && Bd(a, s.filters[l]), !0)
            : !1;
        })(n, e)
      : void F();
}
function qd(n) {
  return n instanceof fe
    ? (function (t) {
        return `${t.field.canonicalString()} ${t.op} ${Hn(t.value)}`;
      })(n)
    : n instanceof Ze
      ? (function (t) {
          return (
            t.op.toString() + ' {' + t.getFilters().map(qd).join(' ,') + '}'
          );
        })(n)
      : 'Filter';
}
class Hv extends fe {
  constructor(e, t, i) {
    (super(e, t, i), (this.key = L.fromName(i.referenceValue)));
  }
  matches(e) {
    const t = L.comparator(e.key, this.key);
    return this.matchesComparison(t);
  }
}
class Gv extends fe {
  constructor(e, t) {
    (super(e, 'in', t), (this.keys = Wd('in', t)));
  }
  matches(e) {
    return this.keys.some((t) => t.isEqual(e.key));
  }
}
class zv extends fe {
  constructor(e, t) {
    (super(e, 'not-in', t), (this.keys = Wd('not-in', t)));
  }
  matches(e) {
    return !this.keys.some((t) => t.isEqual(e.key));
  }
}
function Wd(n, e) {
  var t;
  return (
    ((t = e.arrayValue) === null || t === void 0 ? void 0 : t.values) || []
  ).map((i) => L.fromName(i.referenceValue));
}
class Kv extends fe {
  constructor(e, t) {
    super(e, 'array-contains', t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return Fa(t) && Xi(t.arrayValue, this.value);
  }
}
class Qv extends fe {
  constructor(e, t) {
    super(e, 'in', t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return t !== null && Xi(this.value.arrayValue, t);
  }
}
class Yv extends fe {
  constructor(e, t) {
    super(e, 'not-in', t);
  }
  matches(e) {
    if (Xi(this.value.arrayValue, { nullValue: 'NULL_VALUE' })) return !1;
    const t = e.data.field(this.field);
    return t !== null && !Xi(this.value.arrayValue, t);
  }
}
class Xv extends fe {
  constructor(e, t) {
    super(e, 'array-contains-any', t);
  }
  matches(e) {
    const t = e.data.field(this.field);
    return (
      !(!Fa(t) || !t.arrayValue.values) &&
      t.arrayValue.values.some((i) => Xi(this.value.arrayValue, i))
    );
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Jv {
  constructor(e, t = null, i = [], s = [], r = null, a = null, l = null) {
    ((this.path = e),
      (this.collectionGroup = t),
      (this.orderBy = i),
      (this.filters = s),
      (this.limit = r),
      (this.startAt = a),
      (this.endAt = l),
      (this.ue = null));
  }
}
function Tu(n, e = null, t = [], i = [], s = null, r = null, a = null) {
  return new Jv(n, e, t, i, s, r, a);
}
function Ua(n) {
  const e = B(n);
  if (e.ue === null) {
    let t = e.path.canonicalString();
    (e.collectionGroup !== null && (t += '|cg:' + e.collectionGroup),
      (t += '|f:'),
      (t += e.filters.map((i) => Yo(i)).join(',')),
      (t += '|ob:'),
      (t += e.orderBy
        .map((i) =>
          (function (r) {
            return r.field.canonicalString() + r.dir;
          })(i)
        )
        .join(',')),
      Or(e.limit) || ((t += '|l:'), (t += e.limit)),
      e.startAt &&
        ((t += '|lb:'),
        (t += e.startAt.inclusive ? 'b:' : 'a:'),
        (t += e.startAt.position.map((i) => Hn(i)).join(','))),
      e.endAt &&
        ((t += '|ub:'),
        (t += e.endAt.inclusive ? 'a:' : 'b:'),
        (t += e.endAt.position.map((i) => Hn(i)).join(','))),
      (e.ue = t));
  }
  return e.ue;
}
function Ba(n, e) {
  if (n.limit !== e.limit || n.orderBy.length !== e.orderBy.length) return !1;
  for (let t = 0; t < n.orderBy.length; t++)
    if (!jv(n.orderBy[t], e.orderBy[t])) return !1;
  if (n.filters.length !== e.filters.length) return !1;
  for (let t = 0; t < n.filters.length; t++)
    if (!Bd(n.filters[t], e.filters[t])) return !1;
  return (
    n.collectionGroup === e.collectionGroup &&
    !!n.path.isEqual(e.path) &&
    !!Eu(n.startAt, e.startAt) &&
    Eu(n.endAt, e.endAt)
  );
}
function Xo(n) {
  return (
    L.isDocumentKey(n.path) &&
    n.collectionGroup === null &&
    n.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vn {
  constructor(
    e,
    t = null,
    i = [],
    s = [],
    r = null,
    a = 'F',
    l = null,
    c = null
  ) {
    ((this.path = e),
      (this.collectionGroup = t),
      (this.explicitOrderBy = i),
      (this.filters = s),
      (this.limit = r),
      (this.limitType = a),
      (this.startAt = l),
      (this.endAt = c),
      (this.ce = null),
      (this.le = null),
      (this.he = null),
      this.startAt,
      this.endAt);
  }
}
function Zv(n, e, t, i, s, r, a, l) {
  return new vn(n, e, t, i, s, r, a, l);
}
function qa(n) {
  return new vn(n);
}
function Iu(n) {
  return (
    n.filters.length === 0 &&
    n.limit === null &&
    n.startAt == null &&
    n.endAt == null &&
    (n.explicitOrderBy.length === 0 ||
      (n.explicitOrderBy.length === 1 &&
        n.explicitOrderBy[0].field.isKeyField()))
  );
}
function jd(n) {
  return n.collectionGroup !== null;
}
function xi(n) {
  const e = B(n);
  if (e.ce === null) {
    e.ce = [];
    const t = new Set();
    for (const r of e.explicitOrderBy)
      (e.ce.push(r), t.add(r.field.canonicalString()));
    const i =
      e.explicitOrderBy.length > 0
        ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
        : 'asc';
    ((function (a) {
      let l = new we(Ie.comparator);
      return (
        a.filters.forEach((c) => {
          c.getFlattenedFilters().forEach((h) => {
            h.isInequality() && (l = l.add(h.field));
          });
        }),
        l
      );
    })(e).forEach((r) => {
      t.has(r.canonicalString()) || r.isKeyField() || e.ce.push(new Ji(r, i));
    }),
      t.has(Ie.keyField().canonicalString()) ||
        e.ce.push(new Ji(Ie.keyField(), i)));
  }
  return e.ce;
}
function ot(n) {
  const e = B(n);
  return (e.le || (e.le = eE(e, xi(n))), e.le);
}
function eE(n, e) {
  if (n.limitType === 'F')
    return Tu(
      n.path,
      n.collectionGroup,
      e,
      n.filters,
      n.limit,
      n.startAt,
      n.endAt
    );
  {
    e = e.map((s) => {
      const r = s.dir === 'desc' ? 'asc' : 'desc';
      return new Ji(s.field, r);
    });
    const t = n.endAt ? new dr(n.endAt.position, n.endAt.inclusive) : null,
      i = n.startAt ? new dr(n.startAt.position, n.startAt.inclusive) : null;
    return Tu(n.path, n.collectionGroup, e, n.filters, n.limit, t, i);
  }
}
function Jo(n, e) {
  const t = n.filters.concat([e]);
  return new vn(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    t,
    n.limit,
    n.limitType,
    n.startAt,
    n.endAt
  );
}
function Zo(n, e, t) {
  return new vn(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    n.filters.slice(),
    e,
    t,
    n.startAt,
    n.endAt
  );
}
function Vr(n, e) {
  return Ba(ot(n), ot(e)) && n.limitType === e.limitType;
}
function $d(n) {
  return `${Ua(ot(n))}|lt:${n.limitType}`;
}
function Pn(n) {
  return `Query(target=${(function (t) {
    let i = t.path.canonicalString();
    return (
      t.collectionGroup !== null &&
        (i += ' collectionGroup=' + t.collectionGroup),
      t.filters.length > 0 &&
        (i += `, filters: [${t.filters.map((s) => qd(s)).join(', ')}]`),
      Or(t.limit) || (i += ', limit: ' + t.limit),
      t.orderBy.length > 0 &&
        (i += `, orderBy: [${t.orderBy
          .map((s) =>
            (function (a) {
              return `${a.field.canonicalString()} (${a.dir})`;
            })(s)
          )
          .join(', ')}]`),
      t.startAt &&
        ((i += ', startAt: '),
        (i += t.startAt.inclusive ? 'b:' : 'a:'),
        (i += t.startAt.position.map((s) => Hn(s)).join(','))),
      t.endAt &&
        ((i += ', endAt: '),
        (i += t.endAt.inclusive ? 'a:' : 'b:'),
        (i += t.endAt.position.map((s) => Hn(s)).join(','))),
      `Target(${i})`
    );
  })(ot(n))}; limitType=${n.limitType})`;
}
function Mr(n, e) {
  return (
    e.isFoundDocument() &&
    (function (i, s) {
      const r = s.key.path;
      return i.collectionGroup !== null
        ? s.key.hasCollectionId(i.collectionGroup) && i.path.isPrefixOf(r)
        : L.isDocumentKey(i.path)
          ? i.path.isEqual(r)
          : i.path.isImmediateParentOf(r);
    })(n, e) &&
    (function (i, s) {
      for (const r of xi(i))
        if (!r.field.isKeyField() && s.data.field(r.field) === null) return !1;
      return !0;
    })(n, e) &&
    (function (i, s) {
      for (const r of i.filters) if (!r.matches(s)) return !1;
      return !0;
    })(n, e) &&
    (function (i, s) {
      return !(
        (i.startAt &&
          !(function (a, l, c) {
            const h = vu(a, l, c);
            return a.inclusive ? h <= 0 : h < 0;
          })(i.startAt, xi(i), s)) ||
        (i.endAt &&
          !(function (a, l, c) {
            const h = vu(a, l, c);
            return a.inclusive ? h >= 0 : h > 0;
          })(i.endAt, xi(i), s))
      );
    })(n, e)
  );
}
function tE(n) {
  return (
    n.collectionGroup ||
    (n.path.length % 2 == 1
      ? n.path.lastSegment()
      : n.path.get(n.path.length - 2))
  );
}
function Hd(n) {
  return (e, t) => {
    let i = !1;
    for (const s of xi(n)) {
      const r = nE(s, e, t);
      if (r !== 0) return r;
      i = i || s.field.isKeyField();
    }
    return 0;
  };
}
function nE(n, e, t) {
  const i = n.field.isKeyField()
    ? L.comparator(e.key, t.key)
    : (function (r, a, l) {
        const c = a.data.field(r),
          h = l.data.field(r);
        return c !== null && h !== null ? $n(c, h) : F();
      })(n.field, e, t);
  switch (n.dir) {
    case 'asc':
      return i;
    case 'desc':
      return -1 * i;
    default:
      return F();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ti {
  constructor(e, t) {
    ((this.mapKeyFn = e),
      (this.equalsFn = t),
      (this.inner = {}),
      (this.innerSize = 0));
  }
  get(e) {
    const t = this.mapKeyFn(e),
      i = this.inner[t];
    if (i !== void 0) {
      for (const [s, r] of i) if (this.equalsFn(s, e)) return r;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, t) {
    const i = this.mapKeyFn(e),
      s = this.inner[i];
    if (s === void 0)
      return ((this.inner[i] = [[e, t]]), void this.innerSize++);
    for (let r = 0; r < s.length; r++)
      if (this.equalsFn(s[r][0], e)) return void (s[r] = [e, t]);
    (s.push([e, t]), this.innerSize++);
  }
  delete(e) {
    const t = this.mapKeyFn(e),
      i = this.inner[t];
    if (i === void 0) return !1;
    for (let s = 0; s < i.length; s++)
      if (this.equalsFn(i[s][0], e))
        return (
          i.length === 1 ? delete this.inner[t] : i.splice(s, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    yn(this.inner, (t, i) => {
      for (const [s, r] of i) e(s, r);
    });
  }
  isEmpty() {
    return Vd(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const iE = new pe(L.comparator);
function wt() {
  return iE;
}
const Gd = new pe(L.comparator);
function Di(...n) {
  let e = Gd;
  for (const t of n) e = e.insert(t.key, t);
  return e;
}
function zd(n) {
  let e = Gd;
  return (n.forEach((t, i) => (e = e.insert(t, i.overlayedDocument))), e);
}
function nn() {
  return Fi();
}
function Kd() {
  return Fi();
}
function Fi() {
  return new ti(
    (n) => n.toString(),
    (n, e) => n.isEqual(e)
  );
}
const sE = new pe(L.comparator),
  rE = new we(L.comparator);
function j(...n) {
  let e = rE;
  for (const t of n) e = e.add(t);
  return e;
}
const oE = new we(X);
function aE() {
  return oE;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Wa(n, e) {
  if (n.useProto3Json) {
    if (isNaN(e)) return { doubleValue: 'NaN' };
    if (e === 1 / 0) return { doubleValue: 'Infinity' };
    if (e === -1 / 0) return { doubleValue: '-Infinity' };
  }
  return { doubleValue: hr(e) ? '-0' : e };
}
function Qd(n) {
  return { integerValue: '' + n };
}
function lE(n, e) {
  return Fv(e) ? Qd(e) : Wa(n, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lr {
  constructor() {
    this._ = void 0;
  }
}
function cE(n, e, t) {
  return n instanceof fr
    ? (function (s, r) {
        const a = {
          fields: {
            __type__: { stringValue: 'server_timestamp' },
            __local_write_time__: {
              timestampValue: { seconds: s.seconds, nanos: s.nanoseconds },
            },
          },
        };
        return (
          r && La(r) && (r = xa(r)),
          r && (a.fields.__previous_value__ = r),
          { mapValue: a }
        );
      })(t, e)
    : n instanceof Zi
      ? Xd(n, e)
      : n instanceof es
        ? Jd(n, e)
        : (function (s, r) {
            const a = Yd(s, r),
              l = wu(a) + wu(s.Pe);
            return Qo(a) && Qo(s.Pe) ? Qd(l) : Wa(s.serializer, l);
          })(n, e);
}
function uE(n, e, t) {
  return n instanceof Zi ? Xd(n, e) : n instanceof es ? Jd(n, e) : t;
}
function Yd(n, e) {
  return n instanceof pr
    ? (function (i) {
        return (
          Qo(i) ||
          (function (r) {
            return !!r && 'doubleValue' in r;
          })(i)
        );
      })(e)
      ? e
      : { integerValue: 0 }
    : null;
}
class fr extends Lr {}
class Zi extends Lr {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function Xd(n, e) {
  const t = Zd(e);
  for (const i of n.elements) t.some((s) => lt(s, i)) || t.push(i);
  return { arrayValue: { values: t } };
}
class es extends Lr {
  constructor(e) {
    (super(), (this.elements = e));
  }
}
function Jd(n, e) {
  let t = Zd(e);
  for (const i of n.elements) t = t.filter((s) => !lt(s, i));
  return { arrayValue: { values: t } };
}
class pr extends Lr {
  constructor(e, t) {
    (super(), (this.serializer = e), (this.Pe = t));
  }
}
function wu(n) {
  return ue(n.integerValue || n.doubleValue);
}
function Zd(n) {
  return Fa(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function hE(n, e) {
  return (
    n.field.isEqual(e.field) &&
    (function (i, s) {
      return (i instanceof Zi && s instanceof Zi) ||
        (i instanceof es && s instanceof es)
        ? jn(i.elements, s.elements, lt)
        : i instanceof pr && s instanceof pr
          ? lt(i.Pe, s.Pe)
          : i instanceof fr && s instanceof fr;
    })(n.transform, e.transform)
  );
}
class dE {
  constructor(e, t) {
    ((this.version = e), (this.transformResults = t));
  }
}
class Ye {
  constructor(e, t) {
    ((this.updateTime = e), (this.exists = t));
  }
  static none() {
    return new Ye();
  }
  static exists(e) {
    return new Ye(void 0, e);
  }
  static updateTime(e) {
    return new Ye(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function Zs(n, e) {
  return n.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(n.updateTime)
    : n.exists === void 0 || n.exists === e.isFoundDocument();
}
class xr {}
function ef(n, e) {
  if (!n.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return n.isNoDocument()
      ? new ja(n.key, Ye.none())
      : new us(n.key, n.data, Ye.none());
  {
    const t = n.data,
      i = Ue.empty();
    let s = new we(Ie.comparator);
    for (let r of e.fields)
      if (!s.has(r)) {
        let a = t.field(r);
        (a === null && r.length > 1 && ((r = r.popLast()), (a = t.field(r))),
          a === null ? i.delete(r) : i.set(r, a),
          (s = s.add(r)));
      }
    return new Kt(n.key, i, new We(s.toArray()), Ye.none());
  }
}
function fE(n, e, t) {
  n instanceof us
    ? (function (s, r, a) {
        const l = s.value.clone(),
          c = Ru(s.fieldTransforms, r, a.transformResults);
        (l.setAll(c),
          r.convertToFoundDocument(a.version, l).setHasCommittedMutations());
      })(n, e, t)
    : n instanceof Kt
      ? (function (s, r, a) {
          if (!Zs(s.precondition, r))
            return void r.convertToUnknownDocument(a.version);
          const l = Ru(s.fieldTransforms, r, a.transformResults),
            c = r.data;
          (c.setAll(tf(s)),
            c.setAll(l),
            r.convertToFoundDocument(a.version, c).setHasCommittedMutations());
        })(n, e, t)
      : (function (s, r, a) {
          r.convertToNoDocument(a.version).setHasCommittedMutations();
        })(0, e, t);
}
function Ui(n, e, t, i) {
  return n instanceof us
    ? (function (r, a, l, c) {
        if (!Zs(r.precondition, a)) return l;
        const h = r.value.clone(),
          f = Cu(r.fieldTransforms, c, a);
        return (
          h.setAll(f),
          a.convertToFoundDocument(a.version, h).setHasLocalMutations(),
          null
        );
      })(n, e, t, i)
    : n instanceof Kt
      ? (function (r, a, l, c) {
          if (!Zs(r.precondition, a)) return l;
          const h = Cu(r.fieldTransforms, c, a),
            f = a.data;
          return (
            f.setAll(tf(r)),
            f.setAll(h),
            a.convertToFoundDocument(a.version, f).setHasLocalMutations(),
            l === null
              ? null
              : l
                  .unionWith(r.fieldMask.fields)
                  .unionWith(r.fieldTransforms.map((_) => _.field))
          );
        })(n, e, t, i)
      : (function (r, a, l) {
          return Zs(r.precondition, a)
            ? (a.convertToNoDocument(a.version).setHasLocalMutations(), null)
            : l;
        })(n, e, t);
}
function pE(n, e) {
  let t = null;
  for (const i of n.fieldTransforms) {
    const s = e.data.field(i.field),
      r = Yd(i.transform, s || null);
    r != null && (t === null && (t = Ue.empty()), t.set(i.field, r));
  }
  return t || null;
}
function Au(n, e) {
  return (
    n.type === e.type &&
    !!n.key.isEqual(e.key) &&
    !!n.precondition.isEqual(e.precondition) &&
    !!(function (i, s) {
      return (
        (i === void 0 && s === void 0) ||
        (!(!i || !s) && jn(i, s, (r, a) => hE(r, a)))
      );
    })(n.fieldTransforms, e.fieldTransforms) &&
    (n.type === 0
      ? n.value.isEqual(e.value)
      : n.type !== 1 ||
        (n.data.isEqual(e.data) && n.fieldMask.isEqual(e.fieldMask)))
  );
}
class us extends xr {
  constructor(e, t, i, s = []) {
    (super(),
      (this.key = e),
      (this.value = t),
      (this.precondition = i),
      (this.fieldTransforms = s),
      (this.type = 0));
  }
  getFieldMask() {
    return null;
  }
}
class Kt extends xr {
  constructor(e, t, i, s, r = []) {
    (super(),
      (this.key = e),
      (this.data = t),
      (this.fieldMask = i),
      (this.precondition = s),
      (this.fieldTransforms = r),
      (this.type = 1));
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function tf(n) {
  const e = new Map();
  return (
    n.fieldMask.fields.forEach((t) => {
      if (!t.isEmpty()) {
        const i = n.data.field(t);
        e.set(t, i);
      }
    }),
    e
  );
}
function Ru(n, e, t) {
  const i = new Map();
  Z(n.length === t.length);
  for (let s = 0; s < t.length; s++) {
    const r = n[s],
      a = r.transform,
      l = e.data.field(r.field);
    i.set(r.field, uE(a, l, t[s]));
  }
  return i;
}
function Cu(n, e, t) {
  const i = new Map();
  for (const s of n) {
    const r = s.transform,
      a = t.data.field(s.field);
    i.set(s.field, cE(r, a, e));
  }
  return i;
}
class ja extends xr {
  constructor(e, t) {
    (super(),
      (this.key = e),
      (this.precondition = t),
      (this.type = 2),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
class _E extends xr {
  constructor(e, t) {
    (super(),
      (this.key = e),
      (this.precondition = t),
      (this.type = 3),
      (this.fieldTransforms = []));
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mE {
  constructor(e, t, i, s) {
    ((this.batchId = e),
      (this.localWriteTime = t),
      (this.baseMutations = i),
      (this.mutations = s));
  }
  applyToRemoteDocument(e, t) {
    const i = t.mutationResults;
    for (let s = 0; s < this.mutations.length; s++) {
      const r = this.mutations[s];
      r.key.isEqual(e.key) && fE(r, e, i[s]);
    }
  }
  applyToLocalView(e, t) {
    for (const i of this.baseMutations)
      i.key.isEqual(e.key) && (t = Ui(i, e, t, this.localWriteTime));
    for (const i of this.mutations)
      i.key.isEqual(e.key) && (t = Ui(i, e, t, this.localWriteTime));
    return t;
  }
  applyToLocalDocumentSet(e, t) {
    const i = Kd();
    return (
      this.mutations.forEach((s) => {
        const r = e.get(s.key),
          a = r.overlayedDocument;
        let l = this.applyToLocalView(a, r.mutatedFields);
        l = t.has(s.key) ? null : l;
        const c = ef(a, l);
        (c !== null && i.set(s.key, c),
          a.isValidDocument() || a.convertToNoDocument(U.min()));
      }),
      i
    );
  }
  keys() {
    return this.mutations.reduce((e, t) => e.add(t.key), j());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      jn(this.mutations, e.mutations, (t, i) => Au(t, i)) &&
      jn(this.baseMutations, e.baseMutations, (t, i) => Au(t, i))
    );
  }
}
class $a {
  constructor(e, t, i, s) {
    ((this.batch = e),
      (this.commitVersion = t),
      (this.mutationResults = i),
      (this.docVersions = s));
  }
  static from(e, t, i) {
    Z(e.mutations.length === i.length);
    let s = (function () {
      return sE;
    })();
    const r = e.mutations;
    for (let a = 0; a < r.length; a++) s = s.insert(r[a].key, i[a].version);
    return new $a(e, t, i, s);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gE {
  constructor(e, t) {
    ((this.largestBatchId = e), (this.mutation = t));
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yE {
  constructor(e, t) {
    ((this.count = e), (this.unchangedNames = t));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var de, z;
function vE(n) {
  switch (n) {
    default:
      return F();
    case S.CANCELLED:
    case S.UNKNOWN:
    case S.DEADLINE_EXCEEDED:
    case S.RESOURCE_EXHAUSTED:
    case S.INTERNAL:
    case S.UNAVAILABLE:
    case S.UNAUTHENTICATED:
      return !1;
    case S.INVALID_ARGUMENT:
    case S.NOT_FOUND:
    case S.ALREADY_EXISTS:
    case S.PERMISSION_DENIED:
    case S.FAILED_PRECONDITION:
    case S.ABORTED:
    case S.OUT_OF_RANGE:
    case S.UNIMPLEMENTED:
    case S.DATA_LOSS:
      return !0;
  }
}
function nf(n) {
  if (n === void 0) return (It('GRPC error has no .code'), S.UNKNOWN);
  switch (n) {
    case de.OK:
      return S.OK;
    case de.CANCELLED:
      return S.CANCELLED;
    case de.UNKNOWN:
      return S.UNKNOWN;
    case de.DEADLINE_EXCEEDED:
      return S.DEADLINE_EXCEEDED;
    case de.RESOURCE_EXHAUSTED:
      return S.RESOURCE_EXHAUSTED;
    case de.INTERNAL:
      return S.INTERNAL;
    case de.UNAVAILABLE:
      return S.UNAVAILABLE;
    case de.UNAUTHENTICATED:
      return S.UNAUTHENTICATED;
    case de.INVALID_ARGUMENT:
      return S.INVALID_ARGUMENT;
    case de.NOT_FOUND:
      return S.NOT_FOUND;
    case de.ALREADY_EXISTS:
      return S.ALREADY_EXISTS;
    case de.PERMISSION_DENIED:
      return S.PERMISSION_DENIED;
    case de.FAILED_PRECONDITION:
      return S.FAILED_PRECONDITION;
    case de.ABORTED:
      return S.ABORTED;
    case de.OUT_OF_RANGE:
      return S.OUT_OF_RANGE;
    case de.UNIMPLEMENTED:
      return S.UNIMPLEMENTED;
    case de.DATA_LOSS:
      return S.DATA_LOSS;
    default:
      return F();
  }
}
(((z = de || (de = {}))[(z.OK = 0)] = 'OK'),
  (z[(z.CANCELLED = 1)] = 'CANCELLED'),
  (z[(z.UNKNOWN = 2)] = 'UNKNOWN'),
  (z[(z.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
  (z[(z.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
  (z[(z.NOT_FOUND = 5)] = 'NOT_FOUND'),
  (z[(z.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
  (z[(z.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
  (z[(z.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
  (z[(z.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
  (z[(z.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
  (z[(z.ABORTED = 10)] = 'ABORTED'),
  (z[(z.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
  (z[(z.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
  (z[(z.INTERNAL = 13)] = 'INTERNAL'),
  (z[(z.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
  (z[(z.DATA_LOSS = 15)] = 'DATA_LOSS'));
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function EE() {
  return new TextEncoder();
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const TE = new rn([4294967295, 4294967295], 0);
function Su(n) {
  const e = EE().encode(n),
    t = new Cd();
  return (t.update(e), new Uint8Array(t.digest()));
}
function Pu(n) {
  const e = new DataView(n.buffer),
    t = e.getUint32(0, !0),
    i = e.getUint32(4, !0),
    s = e.getUint32(8, !0),
    r = e.getUint32(12, !0);
  return [new rn([t, i], 0), new rn([s, r], 0)];
}
class Ha {
  constructor(e, t, i) {
    if (
      ((this.bitmap = e),
      (this.padding = t),
      (this.hashCount = i),
      t < 0 || t >= 8)
    )
      throw new Oi(`Invalid padding: ${t}`);
    if (i < 0) throw new Oi(`Invalid hash count: ${i}`);
    if (e.length > 0 && this.hashCount === 0)
      throw new Oi(`Invalid hash count: ${i}`);
    if (e.length === 0 && t !== 0)
      throw new Oi(`Invalid padding when bitmap length is 0: ${t}`);
    ((this.Ie = 8 * e.length - t), (this.Te = rn.fromNumber(this.Ie)));
  }
  Ee(e, t, i) {
    let s = e.add(t.multiply(rn.fromNumber(i)));
    return (
      s.compare(TE) === 1 && (s = new rn([s.getBits(0), s.getBits(1)], 0)),
      s.modulo(this.Te).toNumber()
    );
  }
  de(e) {
    return (this.bitmap[Math.floor(e / 8)] & (1 << e % 8)) != 0;
  }
  mightContain(e) {
    if (this.Ie === 0) return !1;
    const t = Su(e),
      [i, s] = Pu(t);
    for (let r = 0; r < this.hashCount; r++) {
      const a = this.Ee(i, s, r);
      if (!this.de(a)) return !1;
    }
    return !0;
  }
  static create(e, t, i) {
    const s = e % 8 == 0 ? 0 : 8 - (e % 8),
      r = new Uint8Array(Math.ceil(e / 8)),
      a = new Ha(r, s, t);
    return (i.forEach((l) => a.insert(l)), a);
  }
  insert(e) {
    if (this.Ie === 0) return;
    const t = Su(e),
      [i, s] = Pu(t);
    for (let r = 0; r < this.hashCount; r++) {
      const a = this.Ee(i, s, r);
      this.Ae(a);
    }
  }
  Ae(e) {
    const t = Math.floor(e / 8),
      i = e % 8;
    this.bitmap[t] |= 1 << i;
  }
}
class Oi extends Error {
  constructor() {
    (super(...arguments), (this.name = 'BloomFilterError'));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fr {
  constructor(e, t, i, s, r) {
    ((this.snapshotVersion = e),
      (this.targetChanges = t),
      (this.targetMismatches = i),
      (this.documentUpdates = s),
      (this.resolvedLimboDocuments = r));
  }
  static createSynthesizedRemoteEventForCurrentChange(e, t, i) {
    const s = new Map();
    return (
      s.set(e, hs.createSynthesizedTargetChangeForCurrentChange(e, t, i)),
      new Fr(U.min(), s, new pe(X), wt(), j())
    );
  }
}
class hs {
  constructor(e, t, i, s, r) {
    ((this.resumeToken = e),
      (this.current = t),
      (this.addedDocuments = i),
      (this.modifiedDocuments = s),
      (this.removedDocuments = r));
  }
  static createSynthesizedTargetChangeForCurrentChange(e, t, i) {
    return new hs(i, t, j(), j(), j());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class er {
  constructor(e, t, i, s) {
    ((this.Re = e), (this.removedTargetIds = t), (this.key = i), (this.Ve = s));
  }
}
class sf {
  constructor(e, t) {
    ((this.targetId = e), (this.me = t));
  }
}
class rf {
  constructor(e, t, i = Ae.EMPTY_BYTE_STRING, s = null) {
    ((this.state = e),
      (this.targetIds = t),
      (this.resumeToken = i),
      (this.cause = s));
  }
}
class bu {
  constructor() {
    ((this.fe = 0),
      (this.ge = ku()),
      (this.pe = Ae.EMPTY_BYTE_STRING),
      (this.ye = !1),
      (this.we = !0));
  }
  get current() {
    return this.ye;
  }
  get resumeToken() {
    return this.pe;
  }
  get Se() {
    return this.fe !== 0;
  }
  get be() {
    return this.we;
  }
  De(e) {
    e.approximateByteSize() > 0 && ((this.we = !0), (this.pe = e));
  }
  ve() {
    let e = j(),
      t = j(),
      i = j();
    return (
      this.ge.forEach((s, r) => {
        switch (r) {
          case 0:
            e = e.add(s);
            break;
          case 2:
            t = t.add(s);
            break;
          case 1:
            i = i.add(s);
            break;
          default:
            F();
        }
      }),
      new hs(this.pe, this.ye, e, t, i)
    );
  }
  Ce() {
    ((this.we = !1), (this.ge = ku()));
  }
  Fe(e, t) {
    ((this.we = !0), (this.ge = this.ge.insert(e, t)));
  }
  Me(e) {
    ((this.we = !0), (this.ge = this.ge.remove(e)));
  }
  xe() {
    this.fe += 1;
  }
  Oe() {
    ((this.fe -= 1), Z(this.fe >= 0));
  }
  Ne() {
    ((this.we = !0), (this.ye = !0));
  }
}
class IE {
  constructor(e) {
    ((this.Le = e),
      (this.Be = new Map()),
      (this.ke = wt()),
      (this.qe = Nu()),
      (this.Qe = new pe(X)));
  }
  Ke(e) {
    for (const t of e.Re)
      e.Ve && e.Ve.isFoundDocument()
        ? this.$e(t, e.Ve)
        : this.Ue(t, e.key, e.Ve);
    for (const t of e.removedTargetIds) this.Ue(t, e.key, e.Ve);
  }
  We(e) {
    this.forEachTarget(e, (t) => {
      const i = this.Ge(t);
      switch (e.state) {
        case 0:
          this.ze(t) && i.De(e.resumeToken);
          break;
        case 1:
          (i.Oe(), i.Se || i.Ce(), i.De(e.resumeToken));
          break;
        case 2:
          (i.Oe(), i.Se || this.removeTarget(t));
          break;
        case 3:
          this.ze(t) && (i.Ne(), i.De(e.resumeToken));
          break;
        case 4:
          this.ze(t) && (this.je(t), i.De(e.resumeToken));
          break;
        default:
          F();
      }
    });
  }
  forEachTarget(e, t) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(t)
      : this.Be.forEach((i, s) => {
          this.ze(s) && t(s);
        });
  }
  He(e) {
    const t = e.targetId,
      i = e.me.count,
      s = this.Je(t);
    if (s) {
      const r = s.target;
      if (Xo(r))
        if (i === 0) {
          const a = new L(r.path);
          this.Ue(t, a, ke.newNoDocument(a, U.min()));
        } else Z(i === 1);
      else {
        const a = this.Ye(t);
        if (a !== i) {
          const l = this.Ze(e),
            c = l ? this.Xe(l, e, a) : 1;
          if (c !== 0) {
            this.je(t);
            const h =
              c === 2
                ? 'TargetPurposeExistenceFilterMismatchBloom'
                : 'TargetPurposeExistenceFilterMismatch';
            this.Qe = this.Qe.insert(t, h);
          }
        }
      }
    }
  }
  Ze(e) {
    const t = e.me.unchangedNames;
    if (!t || !t.bits) return null;
    const {
      bits: { bitmap: i = '', padding: s = 0 },
      hashCount: r = 0,
    } = t;
    let a, l;
    try {
      a = hn(i).toUint8Array();
    } catch (c) {
      if (c instanceof Md)
        return (
          Wn(
            'Decoding the base64 bloom filter in existence filter failed (' +
              c.message +
              '); ignoring the bloom filter and falling back to full re-query.'
          ),
          null
        );
      throw c;
    }
    try {
      l = new Ha(a, s, r);
    } catch (c) {
      return (
        Wn(
          c instanceof Oi
            ? 'BloomFilter error: '
            : 'Applying bloom filter failed: ',
          c
        ),
        null
      );
    }
    return l.Ie === 0 ? null : l;
  }
  Xe(e, t, i) {
    return t.me.count === i - this.nt(e, t.targetId) ? 0 : 2;
  }
  nt(e, t) {
    const i = this.Le.getRemoteKeysForTarget(t);
    let s = 0;
    return (
      i.forEach((r) => {
        const a = this.Le.tt(),
          l = `projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;
        e.mightContain(l) || (this.Ue(t, r, null), s++);
      }),
      s
    );
  }
  rt(e) {
    const t = new Map();
    this.Be.forEach((r, a) => {
      const l = this.Je(a);
      if (l) {
        if (r.current && Xo(l.target)) {
          const c = new L(l.target.path);
          this.ke.get(c) !== null ||
            this.it(a, c) ||
            this.Ue(a, c, ke.newNoDocument(c, e));
        }
        r.be && (t.set(a, r.ve()), r.Ce());
      }
    });
    let i = j();
    (this.qe.forEach((r, a) => {
      let l = !0;
      (a.forEachWhile((c) => {
        const h = this.Je(c);
        return (
          !h || h.purpose === 'TargetPurposeLimboResolution' || ((l = !1), !1)
        );
      }),
        l && (i = i.add(r)));
    }),
      this.ke.forEach((r, a) => a.setReadTime(e)));
    const s = new Fr(e, t, this.Qe, this.ke, i);
    return ((this.ke = wt()), (this.qe = Nu()), (this.Qe = new pe(X)), s);
  }
  $e(e, t) {
    if (!this.ze(e)) return;
    const i = this.it(e, t.key) ? 2 : 0;
    (this.Ge(e).Fe(t.key, i),
      (this.ke = this.ke.insert(t.key, t)),
      (this.qe = this.qe.insert(t.key, this.st(t.key).add(e))));
  }
  Ue(e, t, i) {
    if (!this.ze(e)) return;
    const s = this.Ge(e);
    (this.it(e, t) ? s.Fe(t, 1) : s.Me(t),
      (this.qe = this.qe.insert(t, this.st(t).delete(e))),
      i && (this.ke = this.ke.insert(t, i)));
  }
  removeTarget(e) {
    this.Be.delete(e);
  }
  Ye(e) {
    const t = this.Ge(e).ve();
    return (
      this.Le.getRemoteKeysForTarget(e).size +
      t.addedDocuments.size -
      t.removedDocuments.size
    );
  }
  xe(e) {
    this.Ge(e).xe();
  }
  Ge(e) {
    let t = this.Be.get(e);
    return (t || ((t = new bu()), this.Be.set(e, t)), t);
  }
  st(e) {
    let t = this.qe.get(e);
    return (t || ((t = new we(X)), (this.qe = this.qe.insert(e, t))), t);
  }
  ze(e) {
    const t = this.Je(e) !== null;
    return (t || M('WatchChangeAggregator', 'Detected inactive target', e), t);
  }
  Je(e) {
    const t = this.Be.get(e);
    return t && t.Se ? null : this.Le.ot(e);
  }
  je(e) {
    (this.Be.set(e, new bu()),
      this.Le.getRemoteKeysForTarget(e).forEach((t) => {
        this.Ue(e, t, null);
      }));
  }
  it(e, t) {
    return this.Le.getRemoteKeysForTarget(e).has(t);
  }
}
function Nu() {
  return new pe(L.comparator);
}
function ku() {
  return new pe(L.comparator);
}
const wE = { asc: 'ASCENDING', desc: 'DESCENDING' },
  AE = {
    '<': 'LESS_THAN',
    '<=': 'LESS_THAN_OR_EQUAL',
    '>': 'GREATER_THAN',
    '>=': 'GREATER_THAN_OR_EQUAL',
    '==': 'EQUAL',
    '!=': 'NOT_EQUAL',
    'array-contains': 'ARRAY_CONTAINS',
    in: 'IN',
    'not-in': 'NOT_IN',
    'array-contains-any': 'ARRAY_CONTAINS_ANY',
  },
  RE = { and: 'AND', or: 'OR' };
class CE {
  constructor(e, t) {
    ((this.databaseId = e), (this.useProto3Json = t));
  }
}
function ea(n, e) {
  return n.useProto3Json || Or(e) ? e : { value: e };
}
function _r(n, e) {
  return n.useProto3Json
    ? `${new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, '').replace('Z', '')}.${('000000000' + e.nanoseconds).slice(-9)}Z`
    : { seconds: '' + e.seconds, nanos: e.nanoseconds };
}
function of(n, e) {
  return n.useProto3Json ? e.toBase64() : e.toUint8Array();
}
function SE(n, e) {
  return _r(n, e.toTimestamp());
}
function at(n) {
  return (
    Z(!!n),
    U.fromTimestamp(
      (function (t) {
        const i = jt(t);
        return new _e(i.seconds, i.nanos);
      })(n)
    )
  );
}
function Ga(n, e) {
  return ta(n, e).canonicalString();
}
function ta(n, e) {
  const t = (function (s) {
    return new ne(['projects', s.projectId, 'databases', s.database]);
  })(n).child('documents');
  return e === void 0 ? t : t.child(e);
}
function af(n) {
  const e = ne.fromString(n);
  return (Z(df(e)), e);
}
function na(n, e) {
  return Ga(n.databaseId, e.path);
}
function So(n, e) {
  const t = af(e);
  if (t.get(1) !== n.databaseId.projectId)
    throw new V(
      S.INVALID_ARGUMENT,
      'Tried to deserialize key from different project: ' +
        t.get(1) +
        ' vs ' +
        n.databaseId.projectId
    );
  if (t.get(3) !== n.databaseId.database)
    throw new V(
      S.INVALID_ARGUMENT,
      'Tried to deserialize key from different database: ' +
        t.get(3) +
        ' vs ' +
        n.databaseId.database
    );
  return new L(cf(t));
}
function lf(n, e) {
  return Ga(n.databaseId, e);
}
function PE(n) {
  const e = af(n);
  return e.length === 4 ? ne.emptyPath() : cf(e);
}
function ia(n) {
  return new ne([
    'projects',
    n.databaseId.projectId,
    'databases',
    n.databaseId.database,
  ]).canonicalString();
}
function cf(n) {
  return (Z(n.length > 4 && n.get(4) === 'documents'), n.popFirst(5));
}
function Du(n, e, t) {
  return { name: na(n, e), fields: t.value.mapValue.fields };
}
function bE(n, e) {
  let t;
  if ('targetChange' in e) {
    e.targetChange;
    const i = (function (h) {
        return h === 'NO_CHANGE'
          ? 0
          : h === 'ADD'
            ? 1
            : h === 'REMOVE'
              ? 2
              : h === 'CURRENT'
                ? 3
                : h === 'RESET'
                  ? 4
                  : F();
      })(e.targetChange.targetChangeType || 'NO_CHANGE'),
      s = e.targetChange.targetIds || [],
      r = (function (h, f) {
        return h.useProto3Json
          ? (Z(f === void 0 || typeof f == 'string'),
            Ae.fromBase64String(f || ''))
          : (Z(f === void 0 || f instanceof B_ || f instanceof Uint8Array),
            Ae.fromUint8Array(f || new Uint8Array()));
      })(n, e.targetChange.resumeToken),
      a = e.targetChange.cause,
      l =
        a &&
        (function (h) {
          const f = h.code === void 0 ? S.UNKNOWN : nf(h.code);
          return new V(f, h.message || '');
        })(a);
    t = new rf(i, s, r, l || null);
  } else if ('documentChange' in e) {
    e.documentChange;
    const i = e.documentChange;
    (i.document, i.document.name, i.document.updateTime);
    const s = So(n, i.document.name),
      r = at(i.document.updateTime),
      a = i.document.createTime ? at(i.document.createTime) : U.min(),
      l = new Ue({ mapValue: { fields: i.document.fields } }),
      c = ke.newFoundDocument(s, r, a, l),
      h = i.targetIds || [],
      f = i.removedTargetIds || [];
    t = new er(h, f, c.key, c);
  } else if ('documentDelete' in e) {
    e.documentDelete;
    const i = e.documentDelete;
    i.document;
    const s = So(n, i.document),
      r = i.readTime ? at(i.readTime) : U.min(),
      a = ke.newNoDocument(s, r),
      l = i.removedTargetIds || [];
    t = new er([], l, a.key, a);
  } else if ('documentRemove' in e) {
    e.documentRemove;
    const i = e.documentRemove;
    i.document;
    const s = So(n, i.document),
      r = i.removedTargetIds || [];
    t = new er([], r, s, null);
  } else {
    if (!('filter' in e)) return F();
    {
      e.filter;
      const i = e.filter;
      i.targetId;
      const { count: s = 0, unchangedNames: r } = i,
        a = new yE(s, r),
        l = i.targetId;
      t = new sf(l, a);
    }
  }
  return t;
}
function NE(n, e) {
  let t;
  if (e instanceof us) t = { update: Du(n, e.key, e.value) };
  else if (e instanceof ja) t = { delete: na(n, e.key) };
  else if (e instanceof Kt)
    t = { update: Du(n, e.key, e.data), updateMask: UE(e.fieldMask) };
  else {
    if (!(e instanceof _E)) return F();
    t = { verify: na(n, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (t.updateTransforms = e.fieldTransforms.map((i) =>
        (function (r, a) {
          const l = a.transform;
          if (l instanceof fr)
            return {
              fieldPath: a.field.canonicalString(),
              setToServerValue: 'REQUEST_TIME',
            };
          if (l instanceof Zi)
            return {
              fieldPath: a.field.canonicalString(),
              appendMissingElements: { values: l.elements },
            };
          if (l instanceof es)
            return {
              fieldPath: a.field.canonicalString(),
              removeAllFromArray: { values: l.elements },
            };
          if (l instanceof pr)
            return { fieldPath: a.field.canonicalString(), increment: l.Pe };
          throw F();
        })(0, i)
      )),
    e.precondition.isNone ||
      (t.currentDocument = (function (s, r) {
        return r.updateTime !== void 0
          ? { updateTime: SE(s, r.updateTime) }
          : r.exists !== void 0
            ? { exists: r.exists }
            : F();
      })(n, e.precondition)),
    t
  );
}
function kE(n, e) {
  return n && n.length > 0
    ? (Z(e !== void 0),
      n.map((t) =>
        (function (s, r) {
          let a = s.updateTime ? at(s.updateTime) : at(r);
          return (
            a.isEqual(U.min()) && (a = at(r)),
            new dE(a, s.transformResults || [])
          );
        })(t, e)
      ))
    : [];
}
function DE(n, e) {
  return { documents: [lf(n, e.path)] };
}
function OE(n, e) {
  const t = { structuredQuery: {} },
    i = e.path;
  let s;
  (e.collectionGroup !== null
    ? ((s = i),
      (t.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((s = i.popLast()),
      (t.structuredQuery.from = [{ collectionId: i.lastSegment() }])),
    (t.parent = lf(n, s)));
  const r = (function (h) {
    if (h.length !== 0) return hf(Ze.create(h, 'and'));
  })(e.filters);
  r && (t.structuredQuery.where = r);
  const a = (function (h) {
    if (h.length !== 0)
      return h.map((f) =>
        (function (g) {
          return { field: bn(g.field), direction: LE(g.dir) };
        })(f)
      );
  })(e.orderBy);
  a && (t.structuredQuery.orderBy = a);
  const l = ea(n, e.limit);
  return (
    l !== null && (t.structuredQuery.limit = l),
    e.startAt &&
      (t.structuredQuery.startAt = (function (h) {
        return { before: h.inclusive, values: h.position };
      })(e.startAt)),
    e.endAt &&
      (t.structuredQuery.endAt = (function (h) {
        return { before: !h.inclusive, values: h.position };
      })(e.endAt)),
    { _t: t, parent: s }
  );
}
function VE(n) {
  let e = PE(n.parent);
  const t = n.structuredQuery,
    i = t.from ? t.from.length : 0;
  let s = null;
  if (i > 0) {
    Z(i === 1);
    const f = t.from[0];
    f.allDescendants ? (s = f.collectionId) : (e = e.child(f.collectionId));
  }
  let r = [];
  t.where &&
    (r = (function (_) {
      const g = uf(_);
      return g instanceof Ze && Ud(g) ? g.getFilters() : [g];
    })(t.where));
  let a = [];
  t.orderBy &&
    (a = (function (_) {
      return _.map((g) =>
        (function (P) {
          return new Ji(
            Nn(P.field),
            (function (N) {
              switch (N) {
                case 'ASCENDING':
                  return 'asc';
                case 'DESCENDING':
                  return 'desc';
                default:
                  return;
              }
            })(P.direction)
          );
        })(g)
      );
    })(t.orderBy));
  let l = null;
  t.limit &&
    (l = (function (_) {
      let g;
      return ((g = typeof _ == 'object' ? _.value : _), Or(g) ? null : g);
    })(t.limit));
  let c = null;
  t.startAt &&
    (c = (function (_) {
      const g = !!_.before,
        R = _.values || [];
      return new dr(R, g);
    })(t.startAt));
  let h = null;
  return (
    t.endAt &&
      (h = (function (_) {
        const g = !_.before,
          R = _.values || [];
        return new dr(R, g);
      })(t.endAt)),
    Zv(e, s, a, r, l, 'F', c, h)
  );
}
function ME(n, e) {
  const t = (function (s) {
    switch (s) {
      case 'TargetPurposeListen':
        return null;
      case 'TargetPurposeExistenceFilterMismatch':
        return 'existence-filter-mismatch';
      case 'TargetPurposeExistenceFilterMismatchBloom':
        return 'existence-filter-mismatch-bloom';
      case 'TargetPurposeLimboResolution':
        return 'limbo-document';
      default:
        return F();
    }
  })(e.purpose);
  return t == null ? null : { 'goog-listen-tags': t };
}
function uf(n) {
  return n.unaryFilter !== void 0
    ? (function (t) {
        switch (t.unaryFilter.op) {
          case 'IS_NAN':
            const i = Nn(t.unaryFilter.field);
            return fe.create(i, '==', { doubleValue: NaN });
          case 'IS_NULL':
            const s = Nn(t.unaryFilter.field);
            return fe.create(s, '==', { nullValue: 'NULL_VALUE' });
          case 'IS_NOT_NAN':
            const r = Nn(t.unaryFilter.field);
            return fe.create(r, '!=', { doubleValue: NaN });
          case 'IS_NOT_NULL':
            const a = Nn(t.unaryFilter.field);
            return fe.create(a, '!=', { nullValue: 'NULL_VALUE' });
          default:
            return F();
        }
      })(n)
    : n.fieldFilter !== void 0
      ? (function (t) {
          return fe.create(
            Nn(t.fieldFilter.field),
            (function (s) {
              switch (s) {
                case 'EQUAL':
                  return '==';
                case 'NOT_EQUAL':
                  return '!=';
                case 'GREATER_THAN':
                  return '>';
                case 'GREATER_THAN_OR_EQUAL':
                  return '>=';
                case 'LESS_THAN':
                  return '<';
                case 'LESS_THAN_OR_EQUAL':
                  return '<=';
                case 'ARRAY_CONTAINS':
                  return 'array-contains';
                case 'IN':
                  return 'in';
                case 'NOT_IN':
                  return 'not-in';
                case 'ARRAY_CONTAINS_ANY':
                  return 'array-contains-any';
                default:
                  return F();
              }
            })(t.fieldFilter.op),
            t.fieldFilter.value
          );
        })(n)
      : n.compositeFilter !== void 0
        ? (function (t) {
            return Ze.create(
              t.compositeFilter.filters.map((i) => uf(i)),
              (function (s) {
                switch (s) {
                  case 'AND':
                    return 'and';
                  case 'OR':
                    return 'or';
                  default:
                    return F();
                }
              })(t.compositeFilter.op)
            );
          })(n)
        : F();
}
function LE(n) {
  return wE[n];
}
function xE(n) {
  return AE[n];
}
function FE(n) {
  return RE[n];
}
function bn(n) {
  return { fieldPath: n.canonicalString() };
}
function Nn(n) {
  return Ie.fromServerFormat(n.fieldPath);
}
function hf(n) {
  return n instanceof fe
    ? (function (t) {
        if (t.op === '==') {
          if (yu(t.value))
            return { unaryFilter: { field: bn(t.field), op: 'IS_NAN' } };
          if (gu(t.value))
            return { unaryFilter: { field: bn(t.field), op: 'IS_NULL' } };
        } else if (t.op === '!=') {
          if (yu(t.value))
            return { unaryFilter: { field: bn(t.field), op: 'IS_NOT_NAN' } };
          if (gu(t.value))
            return { unaryFilter: { field: bn(t.field), op: 'IS_NOT_NULL' } };
        }
        return {
          fieldFilter: { field: bn(t.field), op: xE(t.op), value: t.value },
        };
      })(n)
    : n instanceof Ze
      ? (function (t) {
          const i = t.getFilters().map((s) => hf(s));
          return i.length === 1
            ? i[0]
            : { compositeFilter: { op: FE(t.op), filters: i } };
        })(n)
      : F();
}
function UE(n) {
  const e = [];
  return (
    n.fields.forEach((t) => e.push(t.canonicalString())),
    { fieldPaths: e }
  );
}
function df(n) {
  return n.length >= 4 && n.get(0) === 'projects' && n.get(2) === 'databases';
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lt {
  constructor(
    e,
    t,
    i,
    s,
    r = U.min(),
    a = U.min(),
    l = Ae.EMPTY_BYTE_STRING,
    c = null
  ) {
    ((this.target = e),
      (this.targetId = t),
      (this.purpose = i),
      (this.sequenceNumber = s),
      (this.snapshotVersion = r),
      (this.lastLimboFreeSnapshotVersion = a),
      (this.resumeToken = l),
      (this.expectedCount = c));
  }
  withSequenceNumber(e) {
    return new Lt(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount
    );
  }
  withResumeToken(e, t) {
    return new Lt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      t,
      this.lastLimboFreeSnapshotVersion,
      e,
      null
    );
  }
  withExpectedCount(e) {
    return new Lt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new Lt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken,
      this.expectedCount
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BE {
  constructor(e) {
    this.ct = e;
  }
}
function qE(n) {
  const e = VE({ parent: n.parent, structuredQuery: n.structuredQuery });
  return n.limitType === 'LAST' ? Zo(e, e.limit, 'L') : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WE {
  constructor() {
    this.un = new jE();
  }
  addToCollectionParentIndex(e, t) {
    return (this.un.add(t), b.resolve());
  }
  getCollectionParents(e, t) {
    return b.resolve(this.un.getEntries(t));
  }
  addFieldIndex(e, t) {
    return b.resolve();
  }
  deleteFieldIndex(e, t) {
    return b.resolve();
  }
  deleteAllFieldIndexes(e) {
    return b.resolve();
  }
  createTargetIndexes(e, t) {
    return b.resolve();
  }
  getDocumentsMatchingTarget(e, t) {
    return b.resolve(null);
  }
  getIndexType(e, t) {
    return b.resolve(0);
  }
  getFieldIndexes(e, t) {
    return b.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return b.resolve(null);
  }
  getMinOffset(e, t) {
    return b.resolve(Wt.min());
  }
  getMinOffsetFromCollectionGroup(e, t) {
    return b.resolve(Wt.min());
  }
  updateCollectionGroup(e, t, i) {
    return b.resolve();
  }
  updateIndexEntries(e, t) {
    return b.resolve();
  }
}
class jE {
  constructor() {
    this.index = {};
  }
  add(e) {
    const t = e.lastSegment(),
      i = e.popLast(),
      s = this.index[t] || new we(ne.comparator),
      r = !s.has(i);
    return ((this.index[t] = s.add(i)), r);
  }
  has(e) {
    const t = e.lastSegment(),
      i = e.popLast(),
      s = this.index[t];
    return s && s.has(i);
  }
  getEntries(e) {
    return (this.index[e] || new we(ne.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gn {
  constructor(e) {
    this.Ln = e;
  }
  next() {
    return ((this.Ln += 2), this.Ln);
  }
  static Bn() {
    return new Gn(0);
  }
  static kn() {
    return new Gn(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $E {
  constructor() {
    ((this.changes = new ti(
      (e) => e.toString(),
      (e, t) => e.isEqual(t)
    )),
      (this.changesApplied = !1));
  }
  addEntry(e) {
    (this.assertNotApplied(), this.changes.set(e.key, e));
  }
  removeEntry(e, t) {
    (this.assertNotApplied(),
      this.changes.set(e, ke.newInvalidDocument(e).setReadTime(t)));
  }
  getEntry(e, t) {
    this.assertNotApplied();
    const i = this.changes.get(t);
    return i !== void 0 ? b.resolve(i) : this.getFromCache(e, t);
  }
  getEntries(e, t) {
    return this.getAllFromCache(e, t);
  }
  apply(e) {
    return (
      this.assertNotApplied(),
      (this.changesApplied = !0),
      this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class HE {
  constructor(e, t) {
    ((this.overlayedDocument = e), (this.mutatedFields = t));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class GE {
  constructor(e, t, i, s) {
    ((this.remoteDocumentCache = e),
      (this.mutationQueue = t),
      (this.documentOverlayCache = i),
      (this.indexManager = s));
  }
  getDocument(e, t) {
    let i = null;
    return this.documentOverlayCache
      .getOverlay(e, t)
      .next((s) => ((i = s), this.remoteDocumentCache.getEntry(e, t)))
      .next((s) => (i !== null && Ui(i.mutation, s, We.empty(), _e.now()), s));
  }
  getDocuments(e, t) {
    return this.remoteDocumentCache
      .getEntries(e, t)
      .next((i) => this.getLocalViewOfDocuments(e, i, j()).next(() => i));
  }
  getLocalViewOfDocuments(e, t, i = j()) {
    const s = nn();
    return this.populateOverlays(e, s, t).next(() =>
      this.computeViews(e, t, s, i).next((r) => {
        let a = Di();
        return (
          r.forEach((l, c) => {
            a = a.insert(l, c.overlayedDocument);
          }),
          a
        );
      })
    );
  }
  getOverlayedDocuments(e, t) {
    const i = nn();
    return this.populateOverlays(e, i, t).next(() =>
      this.computeViews(e, t, i, j())
    );
  }
  populateOverlays(e, t, i) {
    const s = [];
    return (
      i.forEach((r) => {
        t.has(r) || s.push(r);
      }),
      this.documentOverlayCache.getOverlays(e, s).next((r) => {
        r.forEach((a, l) => {
          t.set(a, l);
        });
      })
    );
  }
  computeViews(e, t, i, s) {
    let r = wt();
    const a = Fi(),
      l = (function () {
        return Fi();
      })();
    return (
      t.forEach((c, h) => {
        const f = i.get(h.key);
        s.has(h.key) && (f === void 0 || f.mutation instanceof Kt)
          ? (r = r.insert(h.key, h))
          : f !== void 0
            ? (a.set(h.key, f.mutation.getFieldMask()),
              Ui(f.mutation, h, f.mutation.getFieldMask(), _e.now()))
            : a.set(h.key, We.empty());
      }),
      this.recalculateAndSaveOverlays(e, r).next(
        (c) => (
          c.forEach((h, f) => a.set(h, f)),
          t.forEach((h, f) => {
            var _;
            return l.set(
              h,
              new HE(f, (_ = a.get(h)) !== null && _ !== void 0 ? _ : null)
            );
          }),
          l
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, t) {
    const i = Fi();
    let s = new pe((a, l) => a - l),
      r = j();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, t)
      .next((a) => {
        for (const l of a)
          l.keys().forEach((c) => {
            const h = t.get(c);
            if (h === null) return;
            let f = i.get(c) || We.empty();
            ((f = l.applyToLocalView(h, f)), i.set(c, f));
            const _ = (s.get(l.batchId) || j()).add(c);
            s = s.insert(l.batchId, _);
          });
      })
      .next(() => {
        const a = [],
          l = s.getReverseIterator();
        for (; l.hasNext(); ) {
          const c = l.getNext(),
            h = c.key,
            f = c.value,
            _ = Kd();
          (f.forEach((g) => {
            if (!r.has(g)) {
              const R = ef(t.get(g), i.get(g));
              (R !== null && _.set(g, R), (r = r.add(g)));
            }
          }),
            a.push(this.documentOverlayCache.saveOverlays(e, h, _)));
        }
        return b.waitFor(a);
      })
      .next(() => i);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, t) {
    return this.remoteDocumentCache
      .getEntries(e, t)
      .next((i) => this.recalculateAndSaveOverlays(e, i));
  }
  getDocumentsMatchingQuery(e, t, i, s) {
    return (function (a) {
      return (
        L.isDocumentKey(a.path) &&
        a.collectionGroup === null &&
        a.filters.length === 0
      );
    })(t)
      ? this.getDocumentsMatchingDocumentQuery(e, t.path)
      : jd(t)
        ? this.getDocumentsMatchingCollectionGroupQuery(e, t, i, s)
        : this.getDocumentsMatchingCollectionQuery(e, t, i, s);
  }
  getNextDocuments(e, t, i, s) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, t, i, s)
      .next((r) => {
        const a =
          s - r.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                t,
                i.largestBatchId,
                s - r.size
              )
            : b.resolve(nn());
        let l = -1,
          c = r;
        return a.next((h) =>
          b
            .forEach(
              h,
              (f, _) => (
                l < _.largestBatchId && (l = _.largestBatchId),
                r.get(f)
                  ? b.resolve()
                  : this.remoteDocumentCache.getEntry(e, f).next((g) => {
                      c = c.insert(f, g);
                    })
              )
            )
            .next(() => this.populateOverlays(e, h, r))
            .next(() => this.computeViews(e, c, h, j()))
            .next((f) => ({ batchId: l, changes: zd(f) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, t) {
    return this.getDocument(e, new L(t)).next((i) => {
      let s = Di();
      return (i.isFoundDocument() && (s = s.insert(i.key, i)), s);
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t, i, s) {
    const r = t.collectionGroup;
    let a = Di();
    return this.indexManager.getCollectionParents(e, r).next((l) =>
      b
        .forEach(l, (c) => {
          const h = (function (_, g) {
            return new vn(
              g,
              null,
              _.explicitOrderBy.slice(),
              _.filters.slice(),
              _.limit,
              _.limitType,
              _.startAt,
              _.endAt
            );
          })(t, c.child(r));
          return this.getDocumentsMatchingCollectionQuery(e, h, i, s).next(
            (f) => {
              f.forEach((_, g) => {
                a = a.insert(_, g);
              });
            }
          );
        })
        .next(() => a)
    );
  }
  getDocumentsMatchingCollectionQuery(e, t, i, s) {
    let r;
    return this.documentOverlayCache
      .getOverlaysForCollection(e, t.path, i.largestBatchId)
      .next(
        (a) => (
          (r = a),
          this.remoteDocumentCache.getDocumentsMatchingQuery(e, t, i, r, s)
        )
      )
      .next((a) => {
        r.forEach((c, h) => {
          const f = h.getKey();
          a.get(f) === null && (a = a.insert(f, ke.newInvalidDocument(f)));
        });
        let l = Di();
        return (
          a.forEach((c, h) => {
            const f = r.get(c);
            (f !== void 0 && Ui(f.mutation, h, We.empty(), _e.now()),
              Mr(t, h) && (l = l.insert(c, h)));
          }),
          l
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zE {
  constructor(e) {
    ((this.serializer = e), (this.hr = new Map()), (this.Pr = new Map()));
  }
  getBundleMetadata(e, t) {
    return b.resolve(this.hr.get(t));
  }
  saveBundleMetadata(e, t) {
    return (
      this.hr.set(
        t.id,
        (function (s) {
          return { id: s.id, version: s.version, createTime: at(s.createTime) };
        })(t)
      ),
      b.resolve()
    );
  }
  getNamedQuery(e, t) {
    return b.resolve(this.Pr.get(t));
  }
  saveNamedQuery(e, t) {
    return (
      this.Pr.set(
        t.name,
        (function (s) {
          return {
            name: s.name,
            query: qE(s.bundledQuery),
            readTime: at(s.readTime),
          };
        })(t)
      ),
      b.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class KE {
  constructor() {
    ((this.overlays = new pe(L.comparator)), (this.Ir = new Map()));
  }
  getOverlay(e, t) {
    return b.resolve(this.overlays.get(t));
  }
  getOverlays(e, t) {
    const i = nn();
    return b
      .forEach(t, (s) =>
        this.getOverlay(e, s).next((r) => {
          r !== null && i.set(s, r);
        })
      )
      .next(() => i);
  }
  saveOverlays(e, t, i) {
    return (
      i.forEach((s, r) => {
        this.ht(e, t, r);
      }),
      b.resolve()
    );
  }
  removeOverlaysForBatchId(e, t, i) {
    const s = this.Ir.get(i);
    return (
      s !== void 0 &&
        (s.forEach((r) => (this.overlays = this.overlays.remove(r))),
        this.Ir.delete(i)),
      b.resolve()
    );
  }
  getOverlaysForCollection(e, t, i) {
    const s = nn(),
      r = t.length + 1,
      a = new L(t.child('')),
      l = this.overlays.getIteratorFrom(a);
    for (; l.hasNext(); ) {
      const c = l.getNext().value,
        h = c.getKey();
      if (!t.isPrefixOf(h.path)) break;
      h.path.length === r && c.largestBatchId > i && s.set(c.getKey(), c);
    }
    return b.resolve(s);
  }
  getOverlaysForCollectionGroup(e, t, i, s) {
    let r = new pe((h, f) => h - f);
    const a = this.overlays.getIterator();
    for (; a.hasNext(); ) {
      const h = a.getNext().value;
      if (h.getKey().getCollectionGroup() === t && h.largestBatchId > i) {
        let f = r.get(h.largestBatchId);
        (f === null && ((f = nn()), (r = r.insert(h.largestBatchId, f))),
          f.set(h.getKey(), h));
      }
    }
    const l = nn(),
      c = r.getIterator();
    for (
      ;
      c.hasNext() &&
      (c.getNext().value.forEach((h, f) => l.set(h, f)), !(l.size() >= s));

    );
    return b.resolve(l);
  }
  ht(e, t, i) {
    const s = this.overlays.get(i.key);
    if (s !== null) {
      const a = this.Ir.get(s.largestBatchId).delete(i.key);
      this.Ir.set(s.largestBatchId, a);
    }
    this.overlays = this.overlays.insert(i.key, new gE(t, i));
    let r = this.Ir.get(t);
    (r === void 0 && ((r = j()), this.Ir.set(t, r)),
      this.Ir.set(t, r.add(i.key)));
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class QE {
  constructor() {
    this.sessionToken = Ae.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return b.resolve(this.sessionToken);
  }
  setSessionToken(e, t) {
    return ((this.sessionToken = t), b.resolve());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class za {
  constructor() {
    ((this.Tr = new we(ge.Er)), (this.dr = new we(ge.Ar)));
  }
  isEmpty() {
    return this.Tr.isEmpty();
  }
  addReference(e, t) {
    const i = new ge(e, t);
    ((this.Tr = this.Tr.add(i)), (this.dr = this.dr.add(i)));
  }
  Rr(e, t) {
    e.forEach((i) => this.addReference(i, t));
  }
  removeReference(e, t) {
    this.Vr(new ge(e, t));
  }
  mr(e, t) {
    e.forEach((i) => this.removeReference(i, t));
  }
  gr(e) {
    const t = new L(new ne([])),
      i = new ge(t, e),
      s = new ge(t, e + 1),
      r = [];
    return (
      this.dr.forEachInRange([i, s], (a) => {
        (this.Vr(a), r.push(a.key));
      }),
      r
    );
  }
  pr() {
    this.Tr.forEach((e) => this.Vr(e));
  }
  Vr(e) {
    ((this.Tr = this.Tr.delete(e)), (this.dr = this.dr.delete(e)));
  }
  yr(e) {
    const t = new L(new ne([])),
      i = new ge(t, e),
      s = new ge(t, e + 1);
    let r = j();
    return (
      this.dr.forEachInRange([i, s], (a) => {
        r = r.add(a.key);
      }),
      r
    );
  }
  containsKey(e) {
    const t = new ge(e, 0),
      i = this.Tr.firstAfterOrEqual(t);
    return i !== null && e.isEqual(i.key);
  }
}
class ge {
  constructor(e, t) {
    ((this.key = e), (this.wr = t));
  }
  static Er(e, t) {
    return L.comparator(e.key, t.key) || X(e.wr, t.wr);
  }
  static Ar(e, t) {
    return X(e.wr, t.wr) || L.comparator(e.key, t.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class YE {
  constructor(e, t) {
    ((this.indexManager = e),
      (this.referenceDelegate = t),
      (this.mutationQueue = []),
      (this.Sr = 1),
      (this.br = new we(ge.Er)));
  }
  checkEmpty(e) {
    return b.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, t, i, s) {
    const r = this.Sr;
    (this.Sr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1]);
    const a = new mE(r, t, i, s);
    this.mutationQueue.push(a);
    for (const l of s)
      ((this.br = this.br.add(new ge(l.key, r))),
        this.indexManager.addToCollectionParentIndex(e, l.key.path.popLast()));
    return b.resolve(a);
  }
  lookupMutationBatch(e, t) {
    return b.resolve(this.Dr(t));
  }
  getNextMutationBatchAfterBatchId(e, t) {
    const i = t + 1,
      s = this.vr(i),
      r = s < 0 ? 0 : s;
    return b.resolve(
      this.mutationQueue.length > r ? this.mutationQueue[r] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return b.resolve(this.mutationQueue.length === 0 ? -1 : this.Sr - 1);
  }
  getAllMutationBatches(e) {
    return b.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t) {
    const i = new ge(t, 0),
      s = new ge(t, Number.POSITIVE_INFINITY),
      r = [];
    return (
      this.br.forEachInRange([i, s], (a) => {
        const l = this.Dr(a.wr);
        r.push(l);
      }),
      b.resolve(r)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t) {
    let i = new we(X);
    return (
      t.forEach((s) => {
        const r = new ge(s, 0),
          a = new ge(s, Number.POSITIVE_INFINITY);
        this.br.forEachInRange([r, a], (l) => {
          i = i.add(l.wr);
        });
      }),
      b.resolve(this.Cr(i))
    );
  }
  getAllMutationBatchesAffectingQuery(e, t) {
    const i = t.path,
      s = i.length + 1;
    let r = i;
    L.isDocumentKey(r) || (r = r.child(''));
    const a = new ge(new L(r), 0);
    let l = new we(X);
    return (
      this.br.forEachWhile((c) => {
        const h = c.key.path;
        return !!i.isPrefixOf(h) && (h.length === s && (l = l.add(c.wr)), !0);
      }, a),
      b.resolve(this.Cr(l))
    );
  }
  Cr(e) {
    const t = [];
    return (
      e.forEach((i) => {
        const s = this.Dr(i);
        s !== null && t.push(s);
      }),
      t
    );
  }
  removeMutationBatch(e, t) {
    (Z(this.Fr(t.batchId, 'removed') === 0), this.mutationQueue.shift());
    let i = this.br;
    return b
      .forEach(t.mutations, (s) => {
        const r = new ge(s.key, t.batchId);
        return (
          (i = i.delete(r)),
          this.referenceDelegate.markPotentiallyOrphaned(e, s.key)
        );
      })
      .next(() => {
        this.br = i;
      });
  }
  On(e) {}
  containsKey(e, t) {
    const i = new ge(t, 0),
      s = this.br.firstAfterOrEqual(i);
    return b.resolve(t.isEqual(s && s.key));
  }
  performConsistencyCheck(e) {
    return (this.mutationQueue.length, b.resolve());
  }
  Fr(e, t) {
    return this.vr(e);
  }
  vr(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  Dr(e) {
    const t = this.vr(e);
    return t < 0 || t >= this.mutationQueue.length
      ? null
      : this.mutationQueue[t];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class XE {
  constructor(e) {
    ((this.Mr = e),
      (this.docs = (function () {
        return new pe(L.comparator);
      })()),
      (this.size = 0));
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, t) {
    const i = t.key,
      s = this.docs.get(i),
      r = s ? s.size : 0,
      a = this.Mr(t);
    return (
      (this.docs = this.docs.insert(i, { document: t.mutableCopy(), size: a })),
      (this.size += a - r),
      this.indexManager.addToCollectionParentIndex(e, i.path.popLast())
    );
  }
  removeEntry(e) {
    const t = this.docs.get(e);
    t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
  }
  getEntry(e, t) {
    const i = this.docs.get(t);
    return b.resolve(i ? i.document.mutableCopy() : ke.newInvalidDocument(t));
  }
  getEntries(e, t) {
    let i = wt();
    return (
      t.forEach((s) => {
        const r = this.docs.get(s);
        i = i.insert(
          s,
          r ? r.document.mutableCopy() : ke.newInvalidDocument(s)
        );
      }),
      b.resolve(i)
    );
  }
  getDocumentsMatchingQuery(e, t, i, s) {
    let r = wt();
    const a = t.path,
      l = new L(a.child('')),
      c = this.docs.getIteratorFrom(l);
    for (; c.hasNext(); ) {
      const {
        key: h,
        value: { document: f },
      } = c.getNext();
      if (!a.isPrefixOf(h.path)) break;
      h.path.length > a.length + 1 ||
        Vv(Ov(f), i) <= 0 ||
        ((s.has(f.key) || Mr(t, f)) && (r = r.insert(f.key, f.mutableCopy())));
    }
    return b.resolve(r);
  }
  getAllFromCollectionGroup(e, t, i, s) {
    F();
  }
  Or(e, t) {
    return b.forEach(this.docs, (i) => t(i));
  }
  newChangeBuffer(e) {
    return new JE(this);
  }
  getSize(e) {
    return b.resolve(this.size);
  }
}
class JE extends $E {
  constructor(e) {
    (super(), (this.cr = e));
  }
  applyChanges(e) {
    const t = [];
    return (
      this.changes.forEach((i, s) => {
        s.isValidDocument()
          ? t.push(this.cr.addEntry(e, s))
          : this.cr.removeEntry(i);
      }),
      b.waitFor(t)
    );
  }
  getFromCache(e, t) {
    return this.cr.getEntry(e, t);
  }
  getAllFromCache(e, t) {
    return this.cr.getEntries(e, t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ZE {
  constructor(e) {
    ((this.persistence = e),
      (this.Nr = new ti((t) => Ua(t), Ba)),
      (this.lastRemoteSnapshotVersion = U.min()),
      (this.highestTargetId = 0),
      (this.Lr = 0),
      (this.Br = new za()),
      (this.targetCount = 0),
      (this.kr = Gn.Bn()));
  }
  forEachTarget(e, t) {
    return (this.Nr.forEach((i, s) => t(s)), b.resolve());
  }
  getLastRemoteSnapshotVersion(e) {
    return b.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return b.resolve(this.Lr);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.kr.next()),
      b.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, t, i) {
    return (
      i && (this.lastRemoteSnapshotVersion = i),
      t > this.Lr && (this.Lr = t),
      b.resolve()
    );
  }
  Kn(e) {
    this.Nr.set(e.target, e);
    const t = e.targetId;
    (t > this.highestTargetId &&
      ((this.kr = new Gn(t)), (this.highestTargetId = t)),
      e.sequenceNumber > this.Lr && (this.Lr = e.sequenceNumber));
  }
  addTargetData(e, t) {
    return (this.Kn(t), (this.targetCount += 1), b.resolve());
  }
  updateTargetData(e, t) {
    return (this.Kn(t), b.resolve());
  }
  removeTargetData(e, t) {
    return (
      this.Nr.delete(t.target),
      this.Br.gr(t.targetId),
      (this.targetCount -= 1),
      b.resolve()
    );
  }
  removeTargets(e, t, i) {
    let s = 0;
    const r = [];
    return (
      this.Nr.forEach((a, l) => {
        l.sequenceNumber <= t &&
          i.get(l.targetId) === null &&
          (this.Nr.delete(a),
          r.push(this.removeMatchingKeysForTargetId(e, l.targetId)),
          s++);
      }),
      b.waitFor(r).next(() => s)
    );
  }
  getTargetCount(e) {
    return b.resolve(this.targetCount);
  }
  getTargetData(e, t) {
    const i = this.Nr.get(t) || null;
    return b.resolve(i);
  }
  addMatchingKeys(e, t, i) {
    return (this.Br.Rr(t, i), b.resolve());
  }
  removeMatchingKeys(e, t, i) {
    this.Br.mr(t, i);
    const s = this.persistence.referenceDelegate,
      r = [];
    return (
      s &&
        t.forEach((a) => {
          r.push(s.markPotentiallyOrphaned(e, a));
        }),
      b.waitFor(r)
    );
  }
  removeMatchingKeysForTargetId(e, t) {
    return (this.Br.gr(t), b.resolve());
  }
  getMatchingKeysForTargetId(e, t) {
    const i = this.Br.yr(t);
    return b.resolve(i);
  }
  containsKey(e, t) {
    return b.resolve(this.Br.containsKey(t));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eT {
  constructor(e, t) {
    ((this.qr = {}),
      (this.overlays = {}),
      (this.Qr = new Ma(0)),
      (this.Kr = !1),
      (this.Kr = !0),
      (this.$r = new QE()),
      (this.referenceDelegate = e(this)),
      (this.Ur = new ZE(this)),
      (this.indexManager = new WE()),
      (this.remoteDocumentCache = (function (s) {
        return new XE(s);
      })((i) => this.referenceDelegate.Wr(i))),
      (this.serializer = new BE(t)),
      (this.Gr = new zE(this.serializer)));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return ((this.Kr = !1), Promise.resolve());
  }
  get started() {
    return this.Kr;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t = this.overlays[e.toKey()];
    return (t || ((t = new KE()), (this.overlays[e.toKey()] = t)), t);
  }
  getMutationQueue(e, t) {
    let i = this.qr[e.toKey()];
    return (
      i || ((i = new YE(t, this.referenceDelegate)), (this.qr[e.toKey()] = i)),
      i
    );
  }
  getGlobalsCache() {
    return this.$r;
  }
  getTargetCache() {
    return this.Ur;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Gr;
  }
  runTransaction(e, t, i) {
    M('MemoryPersistence', 'Starting transaction:', e);
    const s = new tT(this.Qr.next());
    return (
      this.referenceDelegate.zr(),
      i(s)
        .next((r) => this.referenceDelegate.jr(s).next(() => r))
        .toPromise()
        .then((r) => (s.raiseOnCommittedEvent(), r))
    );
  }
  Hr(e, t) {
    return b.or(Object.values(this.qr).map((i) => () => i.containsKey(e, t)));
  }
}
class tT extends Lv {
  constructor(e) {
    (super(), (this.currentSequenceNumber = e));
  }
}
class Ka {
  constructor(e) {
    ((this.persistence = e), (this.Jr = new za()), (this.Yr = null));
  }
  static Zr(e) {
    return new Ka(e);
  }
  get Xr() {
    if (this.Yr) return this.Yr;
    throw F();
  }
  addReference(e, t, i) {
    return (
      this.Jr.addReference(i, t),
      this.Xr.delete(i.toString()),
      b.resolve()
    );
  }
  removeReference(e, t, i) {
    return (
      this.Jr.removeReference(i, t),
      this.Xr.add(i.toString()),
      b.resolve()
    );
  }
  markPotentiallyOrphaned(e, t) {
    return (this.Xr.add(t.toString()), b.resolve());
  }
  removeTarget(e, t) {
    this.Jr.gr(t.targetId).forEach((s) => this.Xr.add(s.toString()));
    const i = this.persistence.getTargetCache();
    return i
      .getMatchingKeysForTargetId(e, t.targetId)
      .next((s) => {
        s.forEach((r) => this.Xr.add(r.toString()));
      })
      .next(() => i.removeTargetData(e, t));
  }
  zr() {
    this.Yr = new Set();
  }
  jr(e) {
    const t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return b
      .forEach(this.Xr, (i) => {
        const s = L.fromPath(i);
        return this.ei(e, s).next((r) => {
          r || t.removeEntry(s, U.min());
        });
      })
      .next(() => ((this.Yr = null), t.apply(e)));
  }
  updateLimboDocument(e, t) {
    return this.ei(e, t).next((i) => {
      i ? this.Xr.delete(t.toString()) : this.Xr.add(t.toString());
    });
  }
  Wr(e) {
    return 0;
  }
  ei(e, t) {
    return b.or([
      () => b.resolve(this.Jr.containsKey(t)),
      () => this.persistence.getTargetCache().containsKey(e, t),
      () => this.persistence.Hr(e, t),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qa {
  constructor(e, t, i, s) {
    ((this.targetId = e), (this.fromCache = t), (this.$i = i), (this.Ui = s));
  }
  static Wi(e, t) {
    let i = j(),
      s = j();
    for (const r of t.docChanges)
      switch (r.type) {
        case 0:
          i = i.add(r.doc.key);
          break;
        case 1:
          s = s.add(r.doc.key);
      }
    return new Qa(e, t.fromCache, i, s);
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nT {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class iT {
  constructor() {
    ((this.Gi = !1),
      (this.zi = !1),
      (this.ji = 100),
      (this.Hi = (function () {
        return im() ? 8 : xv(Me()) > 0 ? 6 : 4;
      })()));
  }
  initialize(e, t) {
    ((this.Ji = e), (this.indexManager = t), (this.Gi = !0));
  }
  getDocumentsMatchingQuery(e, t, i, s) {
    const r = { result: null };
    return this.Yi(e, t)
      .next((a) => {
        r.result = a;
      })
      .next(() => {
        if (!r.result)
          return this.Zi(e, t, s, i).next((a) => {
            r.result = a;
          });
      })
      .next(() => {
        if (r.result) return;
        const a = new nT();
        return this.Xi(e, t, a).next((l) => {
          if (((r.result = l), this.zi)) return this.es(e, t, a, l.size);
        });
      })
      .next(() => r.result);
  }
  es(e, t, i, s) {
    return i.documentReadCount < this.ji
      ? (Ai() <= W.DEBUG &&
          M(
            'QueryEngine',
            'SDK will not create cache indexes for query:',
            Pn(t),
            'since it only creates cache indexes for collection contains',
            'more than or equal to',
            this.ji,
            'documents'
          ),
        b.resolve())
      : (Ai() <= W.DEBUG &&
          M(
            'QueryEngine',
            'Query:',
            Pn(t),
            'scans',
            i.documentReadCount,
            'local documents and returns',
            s,
            'documents as results.'
          ),
        i.documentReadCount > this.Hi * s
          ? (Ai() <= W.DEBUG &&
              M(
                'QueryEngine',
                'The SDK decides to create cache indexes for query:',
                Pn(t),
                'as using cache indexes may help improve performance.'
              ),
            this.indexManager.createTargetIndexes(e, ot(t)))
          : b.resolve());
  }
  Yi(e, t) {
    if (Iu(t)) return b.resolve(null);
    let i = ot(t);
    return this.indexManager.getIndexType(e, i).next((s) =>
      s === 0
        ? null
        : (t.limit !== null && s === 1 && ((t = Zo(t, null, 'F')), (i = ot(t))),
          this.indexManager.getDocumentsMatchingTarget(e, i).next((r) => {
            const a = j(...r);
            return this.Ji.getDocuments(e, a).next((l) =>
              this.indexManager.getMinOffset(e, i).next((c) => {
                const h = this.ts(t, l);
                return this.ns(t, h, a, c.readTime)
                  ? this.Yi(e, Zo(t, null, 'F'))
                  : this.rs(e, h, t, c);
              })
            );
          }))
    );
  }
  Zi(e, t, i, s) {
    return Iu(t) || s.isEqual(U.min())
      ? b.resolve(null)
      : this.Ji.getDocuments(e, i).next((r) => {
          const a = this.ts(t, r);
          return this.ns(t, a, i, s)
            ? b.resolve(null)
            : (Ai() <= W.DEBUG &&
                M(
                  'QueryEngine',
                  'Re-using previous result from %s to execute query: %s',
                  s.toString(),
                  Pn(t)
                ),
              this.rs(e, a, t, Dv(s, -1)).next((l) => l));
        });
  }
  ts(e, t) {
    let i = new we(Hd(e));
    return (
      t.forEach((s, r) => {
        Mr(e, r) && (i = i.add(r));
      }),
      i
    );
  }
  ns(e, t, i, s) {
    if (e.limit === null) return !1;
    if (i.size !== t.size) return !0;
    const r = e.limitType === 'F' ? t.last() : t.first();
    return !!r && (r.hasPendingWrites || r.version.compareTo(s) > 0);
  }
  Xi(e, t, i) {
    return (
      Ai() <= W.DEBUG &&
        M('QueryEngine', 'Using full collection scan to execute query:', Pn(t)),
      this.Ji.getDocumentsMatchingQuery(e, t, Wt.min(), i)
    );
  }
  rs(e, t, i, s) {
    return this.Ji.getDocumentsMatchingQuery(e, i, s).next(
      (r) => (
        t.forEach((a) => {
          r = r.insert(a.key, a);
        }),
        r
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sT {
  constructor(e, t, i, s) {
    ((this.persistence = e),
      (this.ss = t),
      (this.serializer = s),
      (this.os = new pe(X)),
      (this._s = new ti((r) => Ua(r), Ba)),
      (this.us = new Map()),
      (this.cs = e.getRemoteDocumentCache()),
      (this.Ur = e.getTargetCache()),
      (this.Gr = e.getBundleCache()),
      this.ls(i));
  }
  ls(e) {
    ((this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new GE(
        this.cs,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.cs.setIndexManager(this.indexManager),
      this.ss.initialize(this.localDocuments, this.indexManager));
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      'Collect garbage',
      'readwrite-primary',
      (t) => e.collect(t, this.os)
    );
  }
}
function rT(n, e, t, i) {
  return new sT(n, e, t, i);
}
async function ff(n, e) {
  const t = B(n);
  return await t.persistence.runTransaction(
    'Handle user change',
    'readonly',
    (i) => {
      let s;
      return t.mutationQueue
        .getAllMutationBatches(i)
        .next(
          (r) => ((s = r), t.ls(e), t.mutationQueue.getAllMutationBatches(i))
        )
        .next((r) => {
          const a = [],
            l = [];
          let c = j();
          for (const h of s) {
            a.push(h.batchId);
            for (const f of h.mutations) c = c.add(f.key);
          }
          for (const h of r) {
            l.push(h.batchId);
            for (const f of h.mutations) c = c.add(f.key);
          }
          return t.localDocuments
            .getDocuments(i, c)
            .next((h) => ({ hs: h, removedBatchIds: a, addedBatchIds: l }));
        });
    }
  );
}
function oT(n, e) {
  const t = B(n);
  return t.persistence.runTransaction(
    'Acknowledge batch',
    'readwrite-primary',
    (i) => {
      const s = e.batch.keys(),
        r = t.cs.newChangeBuffer({ trackRemovals: !0 });
      return (function (l, c, h, f) {
        const _ = h.batch,
          g = _.keys();
        let R = b.resolve();
        return (
          g.forEach((P) => {
            R = R.next(() => f.getEntry(c, P)).next((O) => {
              const N = h.docVersions.get(P);
              (Z(N !== null),
                O.version.compareTo(N) < 0 &&
                  (_.applyToRemoteDocument(O, h),
                  O.isValidDocument() &&
                    (O.setReadTime(h.commitVersion), f.addEntry(O))));
            });
          }),
          R.next(() => l.mutationQueue.removeMutationBatch(c, _))
        );
      })(t, i, e, r)
        .next(() => r.apply(i))
        .next(() => t.mutationQueue.performConsistencyCheck(i))
        .next(() =>
          t.documentOverlayCache.removeOverlaysForBatchId(i, s, e.batch.batchId)
        )
        .next(() =>
          t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            i,
            (function (l) {
              let c = j();
              for (let h = 0; h < l.mutationResults.length; ++h)
                l.mutationResults[h].transformResults.length > 0 &&
                  (c = c.add(l.batch.mutations[h].key));
              return c;
            })(e)
          )
        )
        .next(() => t.localDocuments.getDocuments(i, s));
    }
  );
}
function pf(n) {
  const e = B(n);
  return e.persistence.runTransaction(
    'Get last remote snapshot version',
    'readonly',
    (t) => e.Ur.getLastRemoteSnapshotVersion(t)
  );
}
function aT(n, e) {
  const t = B(n),
    i = e.snapshotVersion;
  let s = t.os;
  return t.persistence
    .runTransaction('Apply remote event', 'readwrite-primary', (r) => {
      const a = t.cs.newChangeBuffer({ trackRemovals: !0 });
      s = t.os;
      const l = [];
      e.targetChanges.forEach((f, _) => {
        const g = s.get(_);
        if (!g) return;
        l.push(
          t.Ur.removeMatchingKeys(r, f.removedDocuments, _).next(() =>
            t.Ur.addMatchingKeys(r, f.addedDocuments, _)
          )
        );
        let R = g.withSequenceNumber(r.currentSequenceNumber);
        (e.targetMismatches.get(_) !== null
          ? (R = R.withResumeToken(
              Ae.EMPTY_BYTE_STRING,
              U.min()
            ).withLastLimboFreeSnapshotVersion(U.min()))
          : f.resumeToken.approximateByteSize() > 0 &&
            (R = R.withResumeToken(f.resumeToken, i)),
          (s = s.insert(_, R)),
          (function (O, N, $) {
            return O.resumeToken.approximateByteSize() === 0 ||
              N.snapshotVersion.toMicroseconds() -
                O.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : $.addedDocuments.size +
                  $.modifiedDocuments.size +
                  $.removedDocuments.size >
                  0;
          })(g, R, f) && l.push(t.Ur.updateTargetData(r, R)));
      });
      let c = wt(),
        h = j();
      if (
        (e.documentUpdates.forEach((f) => {
          e.resolvedLimboDocuments.has(f) &&
            l.push(t.persistence.referenceDelegate.updateLimboDocument(r, f));
        }),
        l.push(
          lT(r, a, e.documentUpdates).next((f) => {
            ((c = f.Ps), (h = f.Is));
          })
        ),
        !i.isEqual(U.min()))
      ) {
        const f = t.Ur.getLastRemoteSnapshotVersion(r).next((_) =>
          t.Ur.setTargetsMetadata(r, r.currentSequenceNumber, i)
        );
        l.push(f);
      }
      return b
        .waitFor(l)
        .next(() => a.apply(r))
        .next(() => t.localDocuments.getLocalViewOfDocuments(r, c, h))
        .next(() => c);
    })
    .then((r) => ((t.os = s), r));
}
function lT(n, e, t) {
  let i = j(),
    s = j();
  return (
    t.forEach((r) => (i = i.add(r))),
    e.getEntries(n, i).next((r) => {
      let a = wt();
      return (
        t.forEach((l, c) => {
          const h = r.get(l);
          (c.isFoundDocument() !== h.isFoundDocument() && (s = s.add(l)),
            c.isNoDocument() && c.version.isEqual(U.min())
              ? (e.removeEntry(l, c.readTime), (a = a.insert(l, c)))
              : !h.isValidDocument() ||
                  c.version.compareTo(h.version) > 0 ||
                  (c.version.compareTo(h.version) === 0 && h.hasPendingWrites)
                ? (e.addEntry(c), (a = a.insert(l, c)))
                : M(
                    'LocalStore',
                    'Ignoring outdated watch update for ',
                    l,
                    '. Current version:',
                    h.version,
                    ' Watch version:',
                    c.version
                  ));
        }),
        { Ps: a, Is: s }
      );
    })
  );
}
function cT(n, e) {
  const t = B(n);
  return t.persistence.runTransaction(
    'Get next mutation batch',
    'readonly',
    (i) => (
      e === void 0 && (e = -1),
      t.mutationQueue.getNextMutationBatchAfterBatchId(i, e)
    )
  );
}
function uT(n, e) {
  const t = B(n);
  return t.persistence
    .runTransaction('Allocate target', 'readwrite', (i) => {
      let s;
      return t.Ur.getTargetData(i, e).next((r) =>
        r
          ? ((s = r), b.resolve(s))
          : t.Ur.allocateTargetId(i).next(
              (a) => (
                (s = new Lt(
                  e,
                  a,
                  'TargetPurposeListen',
                  i.currentSequenceNumber
                )),
                t.Ur.addTargetData(i, s).next(() => s)
              )
            )
      );
    })
    .then((i) => {
      const s = t.os.get(i.targetId);
      return (
        (s === null || i.snapshotVersion.compareTo(s.snapshotVersion) > 0) &&
          ((t.os = t.os.insert(i.targetId, i)), t._s.set(e, i.targetId)),
        i
      );
    });
}
async function sa(n, e, t) {
  const i = B(n),
    s = i.os.get(e),
    r = t ? 'readwrite' : 'readwrite-primary';
  try {
    t ||
      (await i.persistence.runTransaction('Release target', r, (a) =>
        i.persistence.referenceDelegate.removeTarget(a, s)
      ));
  } catch (a) {
    if (!cs(a)) throw a;
    M('LocalStore', `Failed to update sequence numbers for target ${e}: ${a}`);
  }
  ((i.os = i.os.remove(e)), i._s.delete(s.target));
}
function Ou(n, e, t) {
  const i = B(n);
  let s = U.min(),
    r = j();
  return i.persistence.runTransaction('Execute query', 'readwrite', (a) =>
    (function (c, h, f) {
      const _ = B(c),
        g = _._s.get(f);
      return g !== void 0 ? b.resolve(_.os.get(g)) : _.Ur.getTargetData(h, f);
    })(i, a, ot(e))
      .next((l) => {
        if (l)
          return (
            (s = l.lastLimboFreeSnapshotVersion),
            i.Ur.getMatchingKeysForTargetId(a, l.targetId).next((c) => {
              r = c;
            })
          );
      })
      .next(() =>
        i.ss.getDocumentsMatchingQuery(a, e, t ? s : U.min(), t ? r : j())
      )
      .next((l) => (hT(i, tE(e), l), { documents: l, Ts: r }))
  );
}
function hT(n, e, t) {
  let i = n.us.get(e) || U.min();
  (t.forEach((s, r) => {
    r.readTime.compareTo(i) > 0 && (i = r.readTime);
  }),
    n.us.set(e, i));
}
class Vu {
  constructor() {
    this.activeTargetIds = aE();
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  gs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  Vs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class dT {
  constructor() {
    ((this.so = new Vu()),
      (this.oo = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null));
  }
  addPendingMutation(e) {}
  updateMutationState(e, t, i) {}
  addLocalQueryTarget(e, t = !0) {
    return (t && this.so.fs(e), this.oo[e] || 'not-current');
  }
  updateQueryState(e, t, i) {
    this.oo[e] = t;
  }
  removeLocalQueryTarget(e) {
    this.so.gs(e);
  }
  isLocalQueryTarget(e) {
    return this.so.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.oo[e];
  }
  getAllActiveQueryTargets() {
    return this.so.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.so.activeTargetIds.has(e);
  }
  start() {
    return ((this.so = new Vu()), Promise.resolve());
  }
  handleUserChange(e, t, i) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fT {
  _o(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Mu {
  constructor() {
    ((this.ao = () => this.uo()),
      (this.co = () => this.lo()),
      (this.ho = []),
      this.Po());
  }
  _o(e) {
    this.ho.push(e);
  }
  shutdown() {
    (window.removeEventListener('online', this.ao),
      window.removeEventListener('offline', this.co));
  }
  Po() {
    (window.addEventListener('online', this.ao),
      window.addEventListener('offline', this.co));
  }
  uo() {
    M('ConnectivityMonitor', 'Network connectivity changed: AVAILABLE');
    for (const e of this.ho) e(0);
  }
  lo() {
    M('ConnectivityMonitor', 'Network connectivity changed: UNAVAILABLE');
    for (const e of this.ho) e(1);
  }
  static D() {
    return (
      typeof window < 'u' &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $s = null;
function Po() {
  return (
    $s === null
      ? ($s = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : $s++,
    '0x' + $s.toString(16)
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const pT = {
  BatchGetDocuments: 'batchGet',
  Commit: 'commit',
  RunQuery: 'runQuery',
  RunAggregationQuery: 'runAggregationQuery',
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _T {
  constructor(e) {
    ((this.Io = e.Io), (this.To = e.To));
  }
  Eo(e) {
    this.Ao = e;
  }
  Ro(e) {
    this.Vo = e;
  }
  mo(e) {
    this.fo = e;
  }
  onMessage(e) {
    this.po = e;
  }
  close() {
    this.To();
  }
  send(e) {
    this.Io(e);
  }
  yo() {
    this.Ao();
  }
  wo() {
    this.Vo();
  }
  So(e) {
    this.fo(e);
  }
  bo(e) {
    this.po(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const be = 'WebChannelConnection';
class mT extends class {
  constructor(t) {
    ((this.databaseInfo = t), (this.databaseId = t.databaseId));
    const i = t.ssl ? 'https' : 'http',
      s = encodeURIComponent(this.databaseId.projectId),
      r = encodeURIComponent(this.databaseId.database);
    ((this.Do = i + '://' + t.host),
      (this.vo = `projects/${s}/databases/${r}`),
      (this.Co =
        this.databaseId.database === '(default)'
          ? `project_id=${s}`
          : `project_id=${s}&database_id=${r}`));
  }
  get Fo() {
    return !1;
  }
  Mo(t, i, s, r, a) {
    const l = Po(),
      c = this.xo(t, i.toUriEncodedString());
    M('RestConnection', `Sending RPC '${t}' ${l}:`, c, s);
    const h = {
      'google-cloud-resource-prefix': this.vo,
      'x-goog-request-params': this.Co,
    };
    return (
      this.Oo(h, r, a),
      this.No(t, c, h, s).then(
        (f) => (M('RestConnection', `Received RPC '${t}' ${l}: `, f), f),
        (f) => {
          throw (
            Wn(
              'RestConnection',
              `RPC '${t}' ${l} failed with error: `,
              f,
              'url: ',
              c,
              'request:',
              s
            ),
            f
          );
        }
      )
    );
  }
  Lo(t, i, s, r, a, l) {
    return this.Mo(t, i, s, r, a);
  }
  Oo(t, i, s) {
    ((t['X-Goog-Api-Client'] = (function () {
      return 'gl-js/ fire/' + ei;
    })()),
      (t['Content-Type'] = 'text/plain'),
      this.databaseInfo.appId &&
        (t['X-Firebase-GMPID'] = this.databaseInfo.appId),
      i && i.headers.forEach((r, a) => (t[a] = r)),
      s && s.headers.forEach((r, a) => (t[a] = r)));
  }
  xo(t, i) {
    const s = pT[t];
    return `${this.Do}/v1/${i}:${s}`;
  }
  terminate() {}
} {
  constructor(e) {
    (super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams),
      (this.longPollingOptions = e.longPollingOptions));
  }
  No(e, t, i, s) {
    const r = Po();
    return new Promise((a, l) => {
      const c = new Sd();
      (c.setWithCredentials(!0),
        c.listenOnce(Pd.COMPLETE, () => {
          try {
            switch (c.getLastErrorCode()) {
              case Xs.NO_ERROR:
                const f = c.getResponseJson();
                (M(be, `XHR for RPC '${e}' ${r} received:`, JSON.stringify(f)),
                  a(f));
                break;
              case Xs.TIMEOUT:
                (M(be, `RPC '${e}' ${r} timed out`),
                  l(new V(S.DEADLINE_EXCEEDED, 'Request time out')));
                break;
              case Xs.HTTP_ERROR:
                const _ = c.getStatus();
                if (
                  (M(
                    be,
                    `RPC '${e}' ${r} failed with status:`,
                    _,
                    'response text:',
                    c.getResponseText()
                  ),
                  _ > 0)
                ) {
                  let g = c.getResponseJson();
                  Array.isArray(g) && (g = g[0]);
                  const R = g == null ? void 0 : g.error;
                  if (R && R.status && R.message) {
                    const P = (function (N) {
                      const $ = N.toLowerCase().replace(/_/g, '-');
                      return Object.values(S).indexOf($) >= 0 ? $ : S.UNKNOWN;
                    })(R.status);
                    l(new V(P, R.message));
                  } else
                    l(
                      new V(
                        S.UNKNOWN,
                        'Server responded with status ' + c.getStatus()
                      )
                    );
                } else l(new V(S.UNAVAILABLE, 'Connection failed.'));
                break;
              default:
                F();
            }
          } finally {
            M(be, `RPC '${e}' ${r} completed.`);
          }
        }));
      const h = JSON.stringify(s);
      (M(be, `RPC '${e}' ${r} sending request:`, s),
        c.send(t, 'POST', h, i, 15));
    });
  }
  Bo(e, t, i) {
    const s = Po(),
      r = [this.Do, '/', 'google.firestore.v1.Firestore', '/', e, '/channel'],
      a = kd(),
      l = Nd(),
      c = {
        httpSessionIdParam: 'gsessionid',
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      h = this.longPollingOptions.timeoutSeconds;
    (h !== void 0 && (c.longPollingTimeout = Math.round(1e3 * h)),
      this.useFetchStreams && (c.useFetchStreams = !0),
      this.Oo(c.initMessageHeaders, t, i),
      (c.encodeInitMessageHeaders = !0));
    const f = r.join('');
    M(be, `Creating RPC '${e}' stream ${s}: ${f}`, c);
    const _ = a.createWebChannel(f, c);
    let g = !1,
      R = !1;
    const P = new _T({
        Io: (N) => {
          R
            ? M(be, `Not sending because RPC '${e}' stream ${s} is closed:`, N)
            : (g ||
                (M(be, `Opening RPC '${e}' stream ${s} transport.`),
                _.open(),
                (g = !0)),
              M(be, `RPC '${e}' stream ${s} sending:`, N),
              _.send(N));
        },
        To: () => _.close(),
      }),
      O = (N, $, q) => {
        N.listen($, (G) => {
          try {
            q(G);
          } catch (ae) {
            setTimeout(() => {
              throw ae;
            }, 0);
          }
        });
      };
    return (
      O(_, ki.EventType.OPEN, () => {
        R || (M(be, `RPC '${e}' stream ${s} transport opened.`), P.yo());
      }),
      O(_, ki.EventType.CLOSE, () => {
        R ||
          ((R = !0), M(be, `RPC '${e}' stream ${s} transport closed`), P.So());
      }),
      O(_, ki.EventType.ERROR, (N) => {
        R ||
          ((R = !0),
          Wn(be, `RPC '${e}' stream ${s} transport errored:`, N),
          P.So(new V(S.UNAVAILABLE, 'The operation could not be completed')));
      }),
      O(_, ki.EventType.MESSAGE, (N) => {
        var $;
        if (!R) {
          const q = N.data[0];
          Z(!!q);
          const G = q,
            ae =
              G.error ||
              (($ = G[0]) === null || $ === void 0 ? void 0 : $.error);
          if (ae) {
            M(be, `RPC '${e}' stream ${s} received error:`, ae);
            const $e = ae.status;
            let ce = (function (v) {
                const E = de[v];
                if (E !== void 0) return nf(E);
              })($e),
              T = ae.message;
            (ce === void 0 &&
              ((ce = S.INTERNAL),
              (T =
                'Unknown error status: ' + $e + ' with message ' + ae.message)),
              (R = !0),
              P.So(new V(ce, T)),
              _.close());
          } else (M(be, `RPC '${e}' stream ${s} received:`, q), P.bo(q));
        }
      }),
      O(l, bd.STAT_EVENT, (N) => {
        N.stat === Go.PROXY
          ? M(be, `RPC '${e}' stream ${s} detected buffering proxy`)
          : N.stat === Go.NOPROXY &&
            M(be, `RPC '${e}' stream ${s} detected no buffering proxy`);
      }),
      setTimeout(() => {
        P.wo();
      }, 0),
      P
    );
  }
}
function bo() {
  return typeof document < 'u' ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ur(n) {
  return new CE(n, !0);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _f {
  constructor(e, t, i = 1e3, s = 1.5, r = 6e4) {
    ((this.ui = e),
      (this.timerId = t),
      (this.ko = i),
      (this.qo = s),
      (this.Qo = r),
      (this.Ko = 0),
      (this.$o = null),
      (this.Uo = Date.now()),
      this.reset());
  }
  reset() {
    this.Ko = 0;
  }
  Wo() {
    this.Ko = this.Qo;
  }
  Go(e) {
    this.cancel();
    const t = Math.floor(this.Ko + this.zo()),
      i = Math.max(0, Date.now() - this.Uo),
      s = Math.max(0, t - i);
    (s > 0 &&
      M(
        'ExponentialBackoff',
        `Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`
      ),
      (this.$o = this.ui.enqueueAfterDelay(
        this.timerId,
        s,
        () => ((this.Uo = Date.now()), e())
      )),
      (this.Ko *= this.qo),
      this.Ko < this.ko && (this.Ko = this.ko),
      this.Ko > this.Qo && (this.Ko = this.Qo));
  }
  jo() {
    this.$o !== null && (this.$o.skipDelay(), (this.$o = null));
  }
  cancel() {
    this.$o !== null && (this.$o.cancel(), (this.$o = null));
  }
  zo() {
    return (Math.random() - 0.5) * this.Ko;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mf {
  constructor(e, t, i, s, r, a, l, c) {
    ((this.ui = e),
      (this.Ho = i),
      (this.Jo = s),
      (this.connection = r),
      (this.authCredentialsProvider = a),
      (this.appCheckCredentialsProvider = l),
      (this.listener = c),
      (this.state = 0),
      (this.Yo = 0),
      (this.Zo = null),
      (this.Xo = null),
      (this.stream = null),
      (this.e_ = 0),
      (this.t_ = new _f(e, t)));
  }
  n_() {
    return this.state === 1 || this.state === 5 || this.r_();
  }
  r_() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    ((this.e_ = 0), this.state !== 4 ? this.auth() : this.i_());
  }
  async stop() {
    this.n_() && (await this.close(0));
  }
  s_() {
    ((this.state = 0), this.t_.reset());
  }
  o_() {
    this.r_() &&
      this.Zo === null &&
      (this.Zo = this.ui.enqueueAfterDelay(this.Ho, 6e4, () => this.__()));
  }
  a_(e) {
    (this.u_(), this.stream.send(e));
  }
  async __() {
    if (this.r_()) return this.close(0);
  }
  u_() {
    this.Zo && (this.Zo.cancel(), (this.Zo = null));
  }
  c_() {
    this.Xo && (this.Xo.cancel(), (this.Xo = null));
  }
  async close(e, t) {
    (this.u_(),
      this.c_(),
      this.t_.cancel(),
      this.Yo++,
      e !== 4
        ? this.t_.reset()
        : t && t.code === S.RESOURCE_EXHAUSTED
          ? (It(t.toString()),
            It(
              'Using maximum backoff delay to prevent overloading the backend.'
            ),
            this.t_.Wo())
          : t &&
            t.code === S.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.l_(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.mo(t));
  }
  l_() {}
  auth() {
    this.state = 1;
    const e = this.h_(this.Yo),
      t = this.Yo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([i, s]) => {
        this.Yo === t && this.P_(i, s);
      },
      (i) => {
        e(() => {
          const s = new V(
            S.UNKNOWN,
            'Fetching auth token failed: ' + i.message
          );
          return this.I_(s);
        });
      }
    );
  }
  P_(e, t) {
    const i = this.h_(this.Yo);
    ((this.stream = this.T_(e, t)),
      this.stream.Eo(() => {
        i(() => this.listener.Eo());
      }),
      this.stream.Ro(() => {
        i(
          () => (
            (this.state = 2),
            (this.Xo = this.ui.enqueueAfterDelay(
              this.Jo,
              1e4,
              () => (this.r_() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Ro()
          )
        );
      }),
      this.stream.mo((s) => {
        i(() => this.I_(s));
      }),
      this.stream.onMessage((s) => {
        i(() => (++this.e_ == 1 ? this.E_(s) : this.onNext(s)));
      }));
  }
  i_() {
    ((this.state = 5),
      this.t_.Go(async () => {
        ((this.state = 0), this.start());
      }));
  }
  I_(e) {
    return (
      M('PersistentStream', `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  h_(e) {
    return (t) => {
      this.ui.enqueueAndForget(() =>
        this.Yo === e
          ? t()
          : (M(
              'PersistentStream',
              'stream callback skipped by getCloseGuardedDispatcher.'
            ),
            Promise.resolve())
      );
    };
  }
}
class gT extends mf {
  constructor(e, t, i, s, r, a) {
    (super(
      e,
      'listen_stream_connection_backoff',
      'listen_stream_idle',
      'health_check_timeout',
      t,
      i,
      s,
      a
    ),
      (this.serializer = r));
  }
  T_(e, t) {
    return this.connection.Bo('Listen', e, t);
  }
  E_(e) {
    return this.onNext(e);
  }
  onNext(e) {
    this.t_.reset();
    const t = bE(this.serializer, e),
      i = (function (r) {
        if (!('targetChange' in r)) return U.min();
        const a = r.targetChange;
        return a.targetIds && a.targetIds.length
          ? U.min()
          : a.readTime
            ? at(a.readTime)
            : U.min();
      })(e);
    return this.listener.d_(t, i);
  }
  A_(e) {
    const t = {};
    ((t.database = ia(this.serializer)),
      (t.addTarget = (function (r, a) {
        let l;
        const c = a.target;
        if (
          ((l = Xo(c) ? { documents: DE(r, c) } : { query: OE(r, c)._t }),
          (l.targetId = a.targetId),
          a.resumeToken.approximateByteSize() > 0)
        ) {
          l.resumeToken = of(r, a.resumeToken);
          const h = ea(r, a.expectedCount);
          h !== null && (l.expectedCount = h);
        } else if (a.snapshotVersion.compareTo(U.min()) > 0) {
          l.readTime = _r(r, a.snapshotVersion.toTimestamp());
          const h = ea(r, a.expectedCount);
          h !== null && (l.expectedCount = h);
        }
        return l;
      })(this.serializer, e)));
    const i = ME(this.serializer, e);
    (i && (t.labels = i), this.a_(t));
  }
  R_(e) {
    const t = {};
    ((t.database = ia(this.serializer)), (t.removeTarget = e), this.a_(t));
  }
}
class yT extends mf {
  constructor(e, t, i, s, r, a) {
    (super(
      e,
      'write_stream_connection_backoff',
      'write_stream_idle',
      'health_check_timeout',
      t,
      i,
      s,
      a
    ),
      (this.serializer = r));
  }
  get V_() {
    return this.e_ > 0;
  }
  start() {
    ((this.lastStreamToken = void 0), super.start());
  }
  l_() {
    this.V_ && this.m_([]);
  }
  T_(e, t) {
    return this.connection.Bo('Write', e, t);
  }
  E_(e) {
    return (
      Z(!!e.streamToken),
      (this.lastStreamToken = e.streamToken),
      Z(!e.writeResults || e.writeResults.length === 0),
      this.listener.f_()
    );
  }
  onNext(e) {
    (Z(!!e.streamToken),
      (this.lastStreamToken = e.streamToken),
      this.t_.reset());
    const t = kE(e.writeResults, e.commitTime),
      i = at(e.commitTime);
    return this.listener.g_(i, t);
  }
  p_() {
    const e = {};
    ((e.database = ia(this.serializer)), this.a_(e));
  }
  m_(e) {
    const t = {
      streamToken: this.lastStreamToken,
      writes: e.map((i) => NE(this.serializer, i)),
    };
    this.a_(t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vT extends class {} {
  constructor(e, t, i, s) {
    (super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = t),
      (this.connection = i),
      (this.serializer = s),
      (this.y_ = !1));
  }
  w_() {
    if (this.y_)
      throw new V(
        S.FAILED_PRECONDITION,
        'The client has already been terminated.'
      );
  }
  Mo(e, t, i, s) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([r, a]) => this.connection.Mo(e, ta(t, i), s, r, a))
        .catch((r) => {
          throw r.name === 'FirebaseError'
            ? (r.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              r)
            : new V(S.UNKNOWN, r.toString());
        })
    );
  }
  Lo(e, t, i, s, r) {
    return (
      this.w_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([a, l]) => this.connection.Lo(e, ta(t, i), s, a, l, r))
        .catch((a) => {
          throw a.name === 'FirebaseError'
            ? (a.code === S.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              a)
            : new V(S.UNKNOWN, a.toString());
        })
    );
  }
  terminate() {
    ((this.y_ = !0), this.connection.terminate());
  }
}
class ET {
  constructor(e, t) {
    ((this.asyncQueue = e),
      (this.onlineStateHandler = t),
      (this.state = 'Unknown'),
      (this.S_ = 0),
      (this.b_ = null),
      (this.D_ = !0));
  }
  v_() {
    this.S_ === 0 &&
      (this.C_('Unknown'),
      (this.b_ = this.asyncQueue.enqueueAfterDelay(
        'online_state_timeout',
        1e4,
        () => (
          (this.b_ = null),
          this.F_("Backend didn't respond within 10 seconds."),
          this.C_('Offline'),
          Promise.resolve()
        )
      )));
  }
  M_(e) {
    this.state === 'Online'
      ? this.C_('Unknown')
      : (this.S_++,
        this.S_ >= 1 &&
          (this.x_(),
          this.F_(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.C_('Offline')));
  }
  set(e) {
    (this.x_(), (this.S_ = 0), e === 'Online' && (this.D_ = !1), this.C_(e));
  }
  C_(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  F_(e) {
    const t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.D_ ? (It(t), (this.D_ = !1)) : M('OnlineStateTracker', t);
  }
  x_() {
    this.b_ !== null && (this.b_.cancel(), (this.b_ = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class TT {
  constructor(e, t, i, s, r) {
    ((this.localStore = e),
      (this.datastore = t),
      (this.asyncQueue = i),
      (this.remoteSyncer = {}),
      (this.O_ = []),
      (this.N_ = new Map()),
      (this.L_ = new Set()),
      (this.B_ = []),
      (this.k_ = r),
      this.k_._o((a) => {
        i.enqueueAndForget(async () => {
          En(this) &&
            (M(
              'RemoteStore',
              'Restarting streams for network reachability change.'
            ),
            await (async function (c) {
              const h = B(c);
              (h.L_.add(4),
                await ds(h),
                h.q_.set('Unknown'),
                h.L_.delete(4),
                await Br(h));
            })(this));
        });
      }),
      (this.q_ = new ET(i, s)));
  }
}
async function Br(n) {
  if (En(n)) for (const e of n.B_) await e(!0);
}
async function ds(n) {
  for (const e of n.B_) await e(!1);
}
function gf(n, e) {
  const t = B(n);
  t.N_.has(e.targetId) ||
    (t.N_.set(e.targetId, e), Za(t) ? Ja(t) : ni(t).r_() && Xa(t, e));
}
function Ya(n, e) {
  const t = B(n),
    i = ni(t);
  (t.N_.delete(e),
    i.r_() && yf(t, e),
    t.N_.size === 0 && (i.r_() ? i.o_() : En(t) && t.q_.set('Unknown')));
}
function Xa(n, e) {
  if (
    (n.Q_.xe(e.targetId),
    e.resumeToken.approximateByteSize() > 0 ||
      e.snapshotVersion.compareTo(U.min()) > 0)
  ) {
    const t = n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;
    e = e.withExpectedCount(t);
  }
  ni(n).A_(e);
}
function yf(n, e) {
  (n.Q_.xe(e), ni(n).R_(e));
}
function Ja(n) {
  ((n.Q_ = new IE({
    getRemoteKeysForTarget: (e) => n.remoteSyncer.getRemoteKeysForTarget(e),
    ot: (e) => n.N_.get(e) || null,
    tt: () => n.datastore.serializer.databaseId,
  })),
    ni(n).start(),
    n.q_.v_());
}
function Za(n) {
  return En(n) && !ni(n).n_() && n.N_.size > 0;
}
function En(n) {
  return B(n).L_.size === 0;
}
function vf(n) {
  n.Q_ = void 0;
}
async function IT(n) {
  n.q_.set('Online');
}
async function wT(n) {
  n.N_.forEach((e, t) => {
    Xa(n, e);
  });
}
async function AT(n, e) {
  (vf(n), Za(n) ? (n.q_.M_(e), Ja(n)) : n.q_.set('Unknown'));
}
async function RT(n, e, t) {
  if ((n.q_.set('Online'), e instanceof rf && e.state === 2 && e.cause))
    try {
      await (async function (s, r) {
        const a = r.cause;
        for (const l of r.targetIds)
          s.N_.has(l) &&
            (await s.remoteSyncer.rejectListen(l, a),
            s.N_.delete(l),
            s.Q_.removeTarget(l));
      })(n, e);
    } catch (i) {
      (M(
        'RemoteStore',
        'Failed to remove targets %s: %s ',
        e.targetIds.join(','),
        i
      ),
        await mr(n, i));
    }
  else if (
    (e instanceof er ? n.Q_.Ke(e) : e instanceof sf ? n.Q_.He(e) : n.Q_.We(e),
    !t.isEqual(U.min()))
  )
    try {
      const i = await pf(n.localStore);
      t.compareTo(i) >= 0 &&
        (await (function (r, a) {
          const l = r.Q_.rt(a);
          return (
            l.targetChanges.forEach((c, h) => {
              if (c.resumeToken.approximateByteSize() > 0) {
                const f = r.N_.get(h);
                f && r.N_.set(h, f.withResumeToken(c.resumeToken, a));
              }
            }),
            l.targetMismatches.forEach((c, h) => {
              const f = r.N_.get(c);
              if (!f) return;
              (r.N_.set(
                c,
                f.withResumeToken(Ae.EMPTY_BYTE_STRING, f.snapshotVersion)
              ),
                yf(r, c));
              const _ = new Lt(f.target, c, h, f.sequenceNumber);
              Xa(r, _);
            }),
            r.remoteSyncer.applyRemoteEvent(l)
          );
        })(n, t));
    } catch (i) {
      (M('RemoteStore', 'Failed to raise snapshot:', i), await mr(n, i));
    }
}
async function mr(n, e, t) {
  if (!cs(e)) throw e;
  (n.L_.add(1),
    await ds(n),
    n.q_.set('Offline'),
    t || (t = () => pf(n.localStore)),
    n.asyncQueue.enqueueRetryable(async () => {
      (M('RemoteStore', 'Retrying IndexedDB access'),
        await t(),
        n.L_.delete(1),
        await Br(n));
    }));
}
function Ef(n, e) {
  return e().catch((t) => mr(n, t, e));
}
async function qr(n) {
  const e = B(n),
    t = $t(e);
  let i = e.O_.length > 0 ? e.O_[e.O_.length - 1].batchId : -1;
  for (; CT(e); )
    try {
      const s = await cT(e.localStore, i);
      if (s === null) {
        e.O_.length === 0 && t.o_();
        break;
      }
      ((i = s.batchId), ST(e, s));
    } catch (s) {
      await mr(e, s);
    }
  Tf(e) && If(e);
}
function CT(n) {
  return En(n) && n.O_.length < 10;
}
function ST(n, e) {
  n.O_.push(e);
  const t = $t(n);
  t.r_() && t.V_ && t.m_(e.mutations);
}
function Tf(n) {
  return En(n) && !$t(n).n_() && n.O_.length > 0;
}
function If(n) {
  $t(n).start();
}
async function PT(n) {
  $t(n).p_();
}
async function bT(n) {
  const e = $t(n);
  for (const t of n.O_) e.m_(t.mutations);
}
async function NT(n, e, t) {
  const i = n.O_.shift(),
    s = $a.from(i, e, t);
  (await Ef(n, () => n.remoteSyncer.applySuccessfulWrite(s)), await qr(n));
}
async function kT(n, e) {
  (e &&
    $t(n).V_ &&
    (await (async function (i, s) {
      if (
        (function (a) {
          return vE(a) && a !== S.ABORTED;
        })(s.code)
      ) {
        const r = i.O_.shift();
        ($t(i).s_(),
          await Ef(i, () => i.remoteSyncer.rejectFailedWrite(r.batchId, s)),
          await qr(i));
      }
    })(n, e)),
    Tf(n) && If(n));
}
async function Lu(n, e) {
  const t = B(n);
  (t.asyncQueue.verifyOperationInProgress(),
    M('RemoteStore', 'RemoteStore received new credentials'));
  const i = En(t);
  (t.L_.add(3),
    await ds(t),
    i && t.q_.set('Unknown'),
    await t.remoteSyncer.handleCredentialChange(e),
    t.L_.delete(3),
    await Br(t));
}
async function DT(n, e) {
  const t = B(n);
  e
    ? (t.L_.delete(2), await Br(t))
    : e || (t.L_.add(2), await ds(t), t.q_.set('Unknown'));
}
function ni(n) {
  return (
    n.K_ ||
      ((n.K_ = (function (t, i, s) {
        const r = B(t);
        return (
          r.w_(),
          new gT(
            i,
            r.connection,
            r.authCredentials,
            r.appCheckCredentials,
            r.serializer,
            s
          )
        );
      })(n.datastore, n.asyncQueue, {
        Eo: IT.bind(null, n),
        Ro: wT.bind(null, n),
        mo: AT.bind(null, n),
        d_: RT.bind(null, n),
      })),
      n.B_.push(async (e) => {
        e
          ? (n.K_.s_(), Za(n) ? Ja(n) : n.q_.set('Unknown'))
          : (await n.K_.stop(), vf(n));
      })),
    n.K_
  );
}
function $t(n) {
  return (
    n.U_ ||
      ((n.U_ = (function (t, i, s) {
        const r = B(t);
        return (
          r.w_(),
          new yT(
            i,
            r.connection,
            r.authCredentials,
            r.appCheckCredentials,
            r.serializer,
            s
          )
        );
      })(n.datastore, n.asyncQueue, {
        Eo: () => Promise.resolve(),
        Ro: PT.bind(null, n),
        mo: kT.bind(null, n),
        f_: bT.bind(null, n),
        g_: NT.bind(null, n),
      })),
      n.B_.push(async (e) => {
        e
          ? (n.U_.s_(), await qr(n))
          : (await n.U_.stop(),
            n.O_.length > 0 &&
              (M(
                'RemoteStore',
                `Stopping write stream with ${n.O_.length} pending writes`
              ),
              (n.O_ = [])));
      })),
    n.U_
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class el {
  constructor(e, t, i, s, r) {
    ((this.asyncQueue = e),
      (this.timerId = t),
      (this.targetTimeMs = i),
      (this.op = s),
      (this.removalCallback = r),
      (this.deferred = new yt()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((a) => {}));
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(e, t, i, s, r) {
    const a = Date.now() + i,
      l = new el(e, t, a, s, r);
    return (l.start(i), l);
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new V(S.CANCELLED, 'Operation cancelled' + (e ? ': ' + e : ''))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function tl(n, e) {
  if ((It('AsyncQueue', `${e}: ${n}`), cs(n)))
    return new V(S.UNAVAILABLE, `${e}: ${n}`);
  throw n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xn {
  constructor(e) {
    ((this.comparator = e
      ? (t, i) => e(t, i) || L.comparator(t.key, i.key)
      : (t, i) => L.comparator(t.key, i.key)),
      (this.keyedMap = Di()),
      (this.sortedSet = new pe(this.comparator)));
  }
  static emptySet(e) {
    return new xn(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const t = this.keyedMap.get(e);
    return t ? this.sortedSet.indexOf(t) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((t, i) => (e(t), !1));
  }
  add(e) {
    const t = this.delete(e.key);
    return t.copy(t.keyedMap.insert(e.key, e), t.sortedSet.insert(e, null));
  }
  delete(e) {
    const t = this.get(e);
    return t
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof xn) || this.size !== e.size) return !1;
    const t = this.sortedSet.getIterator(),
      i = e.sortedSet.getIterator();
    for (; t.hasNext(); ) {
      const s = t.getNext().key,
        r = i.getNext().key;
      if (!s.isEqual(r)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((t) => {
        e.push(t.toString());
      }),
      e.length === 0
        ? 'DocumentSet ()'
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, t) {
    const i = new xn();
    return (
      (i.comparator = this.comparator),
      (i.keyedMap = e),
      (i.sortedSet = t),
      i
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xu {
  constructor() {
    this.W_ = new pe(L.comparator);
  }
  track(e) {
    const t = e.doc.key,
      i = this.W_.get(t);
    i
      ? e.type !== 0 && i.type === 3
        ? (this.W_ = this.W_.insert(t, e))
        : e.type === 3 && i.type !== 1
          ? (this.W_ = this.W_.insert(t, { type: i.type, doc: e.doc }))
          : e.type === 2 && i.type === 2
            ? (this.W_ = this.W_.insert(t, { type: 2, doc: e.doc }))
            : e.type === 2 && i.type === 0
              ? (this.W_ = this.W_.insert(t, { type: 0, doc: e.doc }))
              : e.type === 1 && i.type === 0
                ? (this.W_ = this.W_.remove(t))
                : e.type === 1 && i.type === 2
                  ? (this.W_ = this.W_.insert(t, { type: 1, doc: i.doc }))
                  : e.type === 0 && i.type === 1
                    ? (this.W_ = this.W_.insert(t, { type: 2, doc: e.doc }))
                    : F()
      : (this.W_ = this.W_.insert(t, e));
  }
  G_() {
    const e = [];
    return (
      this.W_.inorderTraversal((t, i) => {
        e.push(i);
      }),
      e
    );
  }
}
class zn {
  constructor(e, t, i, s, r, a, l, c, h) {
    ((this.query = e),
      (this.docs = t),
      (this.oldDocs = i),
      (this.docChanges = s),
      (this.mutatedKeys = r),
      (this.fromCache = a),
      (this.syncStateChanged = l),
      (this.excludesMetadataChanges = c),
      (this.hasCachedResults = h));
  }
  static fromInitialDocuments(e, t, i, s, r) {
    const a = [];
    return (
      t.forEach((l) => {
        a.push({ type: 0, doc: l });
      }),
      new zn(e, t, xn.emptySet(t), a, i, s, !0, !1, r)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Vr(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const t = this.docChanges,
      i = e.docChanges;
    if (t.length !== i.length) return !1;
    for (let s = 0; s < t.length; s++)
      if (t[s].type !== i[s].type || !t[s].doc.isEqual(i[s].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class OT {
  constructor() {
    ((this.z_ = void 0), (this.j_ = []));
  }
  H_() {
    return this.j_.some((e) => e.J_());
  }
}
class VT {
  constructor() {
    ((this.queries = Fu()),
      (this.onlineState = 'Unknown'),
      (this.Y_ = new Set()));
  }
  terminate() {
    (function (t, i) {
      const s = B(t),
        r = s.queries;
      ((s.queries = Fu()),
        r.forEach((a, l) => {
          for (const c of l.j_) c.onError(i);
        }));
    })(this, new V(S.ABORTED, 'Firestore shutting down'));
  }
}
function Fu() {
  return new ti((n) => $d(n), Vr);
}
async function wf(n, e) {
  const t = B(n);
  let i = 3;
  const s = e.query;
  let r = t.queries.get(s);
  r ? !r.H_() && e.J_() && (i = 2) : ((r = new OT()), (i = e.J_() ? 0 : 1));
  try {
    switch (i) {
      case 0:
        r.z_ = await t.onListen(s, !0);
        break;
      case 1:
        r.z_ = await t.onListen(s, !1);
        break;
      case 2:
        await t.onFirstRemoteStoreListen(s);
    }
  } catch (a) {
    const l = tl(a, `Initialization of query '${Pn(e.query)}' failed`);
    return void e.onError(l);
  }
  (t.queries.set(s, r),
    r.j_.push(e),
    e.Z_(t.onlineState),
    r.z_ && e.X_(r.z_) && nl(t));
}
async function Af(n, e) {
  const t = B(n),
    i = e.query;
  let s = 3;
  const r = t.queries.get(i);
  if (r) {
    const a = r.j_.indexOf(e);
    a >= 0 &&
      (r.j_.splice(a, 1),
      r.j_.length === 0 ? (s = e.J_() ? 0 : 1) : !r.H_() && e.J_() && (s = 2));
  }
  switch (s) {
    case 0:
      return (t.queries.delete(i), t.onUnlisten(i, !0));
    case 1:
      return (t.queries.delete(i), t.onUnlisten(i, !1));
    case 2:
      return t.onLastRemoteStoreUnlisten(i);
    default:
      return;
  }
}
function MT(n, e) {
  const t = B(n);
  let i = !1;
  for (const s of e) {
    const r = s.query,
      a = t.queries.get(r);
    if (a) {
      for (const l of a.j_) l.X_(s) && (i = !0);
      a.z_ = s;
    }
  }
  i && nl(t);
}
function LT(n, e, t) {
  const i = B(n),
    s = i.queries.get(e);
  if (s) for (const r of s.j_) r.onError(t);
  i.queries.delete(e);
}
function nl(n) {
  n.Y_.forEach((e) => {
    e.next();
  });
}
var ra, Uu;
(((Uu = ra || (ra = {})).ea = 'default'), (Uu.Cache = 'cache'));
class Rf {
  constructor(e, t, i) {
    ((this.query = e),
      (this.ta = t),
      (this.na = !1),
      (this.ra = null),
      (this.onlineState = 'Unknown'),
      (this.options = i || {}));
  }
  X_(e) {
    if (!this.options.includeMetadataChanges) {
      const i = [];
      for (const s of e.docChanges) s.type !== 3 && i.push(s);
      e = new zn(
        e.query,
        e.docs,
        e.oldDocs,
        i,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      );
    }
    let t = !1;
    return (
      this.na
        ? this.ia(e) && (this.ta.next(e), (t = !0))
        : this.sa(e, this.onlineState) && (this.oa(e), (t = !0)),
      (this.ra = e),
      t
    );
  }
  onError(e) {
    this.ta.error(e);
  }
  Z_(e) {
    this.onlineState = e;
    let t = !1;
    return (
      this.ra &&
        !this.na &&
        this.sa(this.ra, e) &&
        (this.oa(this.ra), (t = !0)),
      t
    );
  }
  sa(e, t) {
    if (!e.fromCache || !this.J_()) return !0;
    const i = t !== 'Offline';
    return (
      (!this.options._a || !i) &&
      (!e.docs.isEmpty() || e.hasCachedResults || t === 'Offline')
    );
  }
  ia(e) {
    if (e.docChanges.length > 0) return !0;
    const t = this.ra && this.ra.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !t) && this.options.includeMetadataChanges === !0
    );
  }
  oa(e) {
    ((e = zn.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.na = !0),
      this.ta.next(e));
  }
  J_() {
    return this.options.source !== ra.Cache;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Cf {
  constructor(e) {
    this.key = e;
  }
}
class Sf {
  constructor(e) {
    this.key = e;
  }
}
class xT {
  constructor(e, t) {
    ((this.query = e),
      (this.Ta = t),
      (this.Ea = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.da = j()),
      (this.mutatedKeys = j()),
      (this.Aa = Hd(e)),
      (this.Ra = new xn(this.Aa)));
  }
  get Va() {
    return this.Ta;
  }
  ma(e, t) {
    const i = t ? t.fa : new xu(),
      s = t ? t.Ra : this.Ra;
    let r = t ? t.mutatedKeys : this.mutatedKeys,
      a = s,
      l = !1;
    const c =
        this.query.limitType === 'F' && s.size === this.query.limit
          ? s.last()
          : null,
      h =
        this.query.limitType === 'L' && s.size === this.query.limit
          ? s.first()
          : null;
    if (
      (e.inorderTraversal((f, _) => {
        const g = s.get(f),
          R = Mr(this.query, _) ? _ : null,
          P = !!g && this.mutatedKeys.has(g.key),
          O =
            !!R &&
            (R.hasLocalMutations ||
              (this.mutatedKeys.has(R.key) && R.hasCommittedMutations));
        let N = !1;
        (g && R
          ? g.data.isEqual(R.data)
            ? P !== O && (i.track({ type: 3, doc: R }), (N = !0))
            : this.ga(g, R) ||
              (i.track({ type: 2, doc: R }),
              (N = !0),
              ((c && this.Aa(R, c) > 0) || (h && this.Aa(R, h) < 0)) &&
                (l = !0))
          : !g && R
            ? (i.track({ type: 0, doc: R }), (N = !0))
            : g &&
              !R &&
              (i.track({ type: 1, doc: g }), (N = !0), (c || h) && (l = !0)),
          N &&
            (R
              ? ((a = a.add(R)), (r = O ? r.add(f) : r.delete(f)))
              : ((a = a.delete(f)), (r = r.delete(f)))));
      }),
      this.query.limit !== null)
    )
      for (; a.size > this.query.limit; ) {
        const f = this.query.limitType === 'F' ? a.last() : a.first();
        ((a = a.delete(f.key)),
          (r = r.delete(f.key)),
          i.track({ type: 1, doc: f }));
      }
    return { Ra: a, fa: i, ns: l, mutatedKeys: r };
  }
  ga(e, t) {
    return (
      e.hasLocalMutations && t.hasCommittedMutations && !t.hasLocalMutations
    );
  }
  applyChanges(e, t, i, s) {
    const r = this.Ra;
    ((this.Ra = e.Ra), (this.mutatedKeys = e.mutatedKeys));
    const a = e.fa.G_();
    (a.sort(
      (f, _) =>
        (function (R, P) {
          const O = (N) => {
            switch (N) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return F();
            }
          };
          return O(R) - O(P);
        })(f.type, _.type) || this.Aa(f.doc, _.doc)
    ),
      this.pa(i),
      (s = s != null && s));
    const l = t && !s ? this.ya() : [],
      c = this.da.size === 0 && this.current && !s ? 1 : 0,
      h = c !== this.Ea;
    return (
      (this.Ea = c),
      a.length !== 0 || h
        ? {
            snapshot: new zn(
              this.query,
              e.Ra,
              r,
              a,
              e.mutatedKeys,
              c === 0,
              h,
              !1,
              !!i && i.resumeToken.approximateByteSize() > 0
            ),
            wa: l,
          }
        : { wa: l }
    );
  }
  Z_(e) {
    return this.current && e === 'Offline'
      ? ((this.current = !1),
        this.applyChanges(
          { Ra: this.Ra, fa: new xu(), mutatedKeys: this.mutatedKeys, ns: !1 },
          !1
        ))
      : { wa: [] };
  }
  Sa(e) {
    return (
      !this.Ta.has(e) && !!this.Ra.has(e) && !this.Ra.get(e).hasLocalMutations
    );
  }
  pa(e) {
    e &&
      (e.addedDocuments.forEach((t) => (this.Ta = this.Ta.add(t))),
      e.modifiedDocuments.forEach((t) => {}),
      e.removedDocuments.forEach((t) => (this.Ta = this.Ta.delete(t))),
      (this.current = e.current));
  }
  ya() {
    if (!this.current) return [];
    const e = this.da;
    ((this.da = j()),
      this.Ra.forEach((i) => {
        this.Sa(i.key) && (this.da = this.da.add(i.key));
      }));
    const t = [];
    return (
      e.forEach((i) => {
        this.da.has(i) || t.push(new Sf(i));
      }),
      this.da.forEach((i) => {
        e.has(i) || t.push(new Cf(i));
      }),
      t
    );
  }
  ba(e) {
    ((this.Ta = e.Ts), (this.da = j()));
    const t = this.ma(e.documents);
    return this.applyChanges(t, !0);
  }
  Da() {
    return zn.fromInitialDocuments(
      this.query,
      this.Ra,
      this.mutatedKeys,
      this.Ea === 0,
      this.hasCachedResults
    );
  }
}
class FT {
  constructor(e, t, i) {
    ((this.query = e), (this.targetId = t), (this.view = i));
  }
}
class UT {
  constructor(e) {
    ((this.key = e), (this.va = !1));
  }
}
class BT {
  constructor(e, t, i, s, r, a) {
    ((this.localStore = e),
      (this.remoteStore = t),
      (this.eventManager = i),
      (this.sharedClientState = s),
      (this.currentUser = r),
      (this.maxConcurrentLimboResolutions = a),
      (this.Ca = {}),
      (this.Fa = new ti((l) => $d(l), Vr)),
      (this.Ma = new Map()),
      (this.xa = new Set()),
      (this.Oa = new pe(L.comparator)),
      (this.Na = new Map()),
      (this.La = new za()),
      (this.Ba = {}),
      (this.ka = new Map()),
      (this.qa = Gn.kn()),
      (this.onlineState = 'Unknown'),
      (this.Qa = void 0));
  }
  get isPrimaryClient() {
    return this.Qa === !0;
  }
}
async function qT(n, e, t = !0) {
  const i = Of(n);
  let s;
  const r = i.Fa.get(e);
  return (
    r
      ? (i.sharedClientState.addLocalQueryTarget(r.targetId), (s = r.view.Da()))
      : (s = await Pf(i, e, t, !0)),
    s
  );
}
async function WT(n, e) {
  const t = Of(n);
  await Pf(t, e, !0, !1);
}
async function Pf(n, e, t, i) {
  const s = await uT(n.localStore, ot(e)),
    r = s.targetId,
    a = n.sharedClientState.addLocalQueryTarget(r, t);
  let l;
  return (
    i && (l = await jT(n, e, r, a === 'current', s.resumeToken)),
    n.isPrimaryClient && t && gf(n.remoteStore, s),
    l
  );
}
async function jT(n, e, t, i, s) {
  n.Ka = (_, g, R) =>
    (async function (O, N, $, q) {
      let G = N.view.ma($);
      G.ns &&
        (G = await Ou(O.localStore, N.query, !1).then(({ documents: T }) =>
          N.view.ma(T, G)
        ));
      const ae = q && q.targetChanges.get(N.targetId),
        $e = q && q.targetMismatches.get(N.targetId) != null,
        ce = N.view.applyChanges(G, O.isPrimaryClient, ae, $e);
      return (qu(O, N.targetId, ce.wa), ce.snapshot);
    })(n, _, g, R);
  const r = await Ou(n.localStore, e, !0),
    a = new xT(e, r.Ts),
    l = a.ma(r.documents),
    c = hs.createSynthesizedTargetChangeForCurrentChange(
      t,
      i && n.onlineState !== 'Offline',
      s
    ),
    h = a.applyChanges(l, n.isPrimaryClient, c);
  qu(n, t, h.wa);
  const f = new FT(e, t, a);
  return (
    n.Fa.set(e, f),
    n.Ma.has(t) ? n.Ma.get(t).push(e) : n.Ma.set(t, [e]),
    h.snapshot
  );
}
async function $T(n, e, t) {
  const i = B(n),
    s = i.Fa.get(e),
    r = i.Ma.get(s.targetId);
  if (r.length > 1)
    return (
      i.Ma.set(
        s.targetId,
        r.filter((a) => !Vr(a, e))
      ),
      void i.Fa.delete(e)
    );
  i.isPrimaryClient
    ? (i.sharedClientState.removeLocalQueryTarget(s.targetId),
      i.sharedClientState.isActiveQueryTarget(s.targetId) ||
        (await sa(i.localStore, s.targetId, !1)
          .then(() => {
            (i.sharedClientState.clearQueryState(s.targetId),
              t && Ya(i.remoteStore, s.targetId),
              oa(i, s.targetId));
          })
          .catch(ls)))
    : (oa(i, s.targetId), await sa(i.localStore, s.targetId, !0));
}
async function HT(n, e) {
  const t = B(n),
    i = t.Fa.get(e),
    s = t.Ma.get(i.targetId);
  t.isPrimaryClient &&
    s.length === 1 &&
    (t.sharedClientState.removeLocalQueryTarget(i.targetId),
    Ya(t.remoteStore, i.targetId));
}
async function GT(n, e, t) {
  const i = ZT(n);
  try {
    const s = await (function (a, l) {
      const c = B(a),
        h = _e.now(),
        f = l.reduce((R, P) => R.add(P.key), j());
      let _, g;
      return c.persistence
        .runTransaction('Locally write mutations', 'readwrite', (R) => {
          let P = wt(),
            O = j();
          return c.cs
            .getEntries(R, f)
            .next((N) => {
              ((P = N),
                P.forEach(($, q) => {
                  q.isValidDocument() || (O = O.add($));
                }));
            })
            .next(() => c.localDocuments.getOverlayedDocuments(R, P))
            .next((N) => {
              _ = N;
              const $ = [];
              for (const q of l) {
                const G = pE(q, _.get(q.key).overlayedDocument);
                G != null &&
                  $.push(new Kt(q.key, G, Ld(G.value.mapValue), Ye.exists(!0)));
              }
              return c.mutationQueue.addMutationBatch(R, h, $, l);
            })
            .next((N) => {
              g = N;
              const $ = N.applyToLocalDocumentSet(_, O);
              return c.documentOverlayCache.saveOverlays(R, N.batchId, $);
            });
        })
        .then(() => ({ batchId: g.batchId, changes: zd(_) }));
    })(i.localStore, e);
    (i.sharedClientState.addPendingMutation(s.batchId),
      (function (a, l, c) {
        let h = a.Ba[a.currentUser.toKey()];
        (h || (h = new pe(X)),
          (h = h.insert(l, c)),
          (a.Ba[a.currentUser.toKey()] = h));
      })(i, s.batchId, t),
      await fs(i, s.changes),
      await qr(i.remoteStore));
  } catch (s) {
    const r = tl(s, 'Failed to persist write');
    t.reject(r);
  }
}
async function bf(n, e) {
  const t = B(n);
  try {
    const i = await aT(t.localStore, e);
    (e.targetChanges.forEach((s, r) => {
      const a = t.Na.get(r);
      a &&
        (Z(
          s.addedDocuments.size +
            s.modifiedDocuments.size +
            s.removedDocuments.size <=
            1
        ),
        s.addedDocuments.size > 0
          ? (a.va = !0)
          : s.modifiedDocuments.size > 0
            ? Z(a.va)
            : s.removedDocuments.size > 0 && (Z(a.va), (a.va = !1)));
    }),
      await fs(t, i, e));
  } catch (i) {
    await ls(i);
  }
}
function Bu(n, e, t) {
  const i = B(n);
  if ((i.isPrimaryClient && t === 0) || (!i.isPrimaryClient && t === 1)) {
    const s = [];
    (i.Fa.forEach((r, a) => {
      const l = a.view.Z_(e);
      l.snapshot && s.push(l.snapshot);
    }),
      (function (a, l) {
        const c = B(a);
        c.onlineState = l;
        let h = !1;
        (c.queries.forEach((f, _) => {
          for (const g of _.j_) g.Z_(l) && (h = !0);
        }),
          h && nl(c));
      })(i.eventManager, e),
      s.length && i.Ca.d_(s),
      (i.onlineState = e),
      i.isPrimaryClient && i.sharedClientState.setOnlineState(e));
  }
}
async function zT(n, e, t) {
  const i = B(n);
  i.sharedClientState.updateQueryState(e, 'rejected', t);
  const s = i.Na.get(e),
    r = s && s.key;
  if (r) {
    let a = new pe(L.comparator);
    a = a.insert(r, ke.newNoDocument(r, U.min()));
    const l = j().add(r),
      c = new Fr(U.min(), new Map(), new pe(X), a, l);
    (await bf(i, c), (i.Oa = i.Oa.remove(r)), i.Na.delete(e), il(i));
  } else
    await sa(i.localStore, e, !1)
      .then(() => oa(i, e, t))
      .catch(ls);
}
async function KT(n, e) {
  const t = B(n),
    i = e.batch.batchId;
  try {
    const s = await oT(t.localStore, e);
    (kf(t, i, null),
      Nf(t, i),
      t.sharedClientState.updateMutationState(i, 'acknowledged'),
      await fs(t, s));
  } catch (s) {
    await ls(s);
  }
}
async function QT(n, e, t) {
  const i = B(n);
  try {
    const s = await (function (a, l) {
      const c = B(a);
      return c.persistence.runTransaction(
        'Reject batch',
        'readwrite-primary',
        (h) => {
          let f;
          return c.mutationQueue
            .lookupMutationBatch(h, l)
            .next(
              (_) => (
                Z(_ !== null),
                (f = _.keys()),
                c.mutationQueue.removeMutationBatch(h, _)
              )
            )
            .next(() => c.mutationQueue.performConsistencyCheck(h))
            .next(() =>
              c.documentOverlayCache.removeOverlaysForBatchId(h, f, l)
            )
            .next(() =>
              c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h, f)
            )
            .next(() => c.localDocuments.getDocuments(h, f));
        }
      );
    })(i.localStore, e);
    (kf(i, e, t),
      Nf(i, e),
      i.sharedClientState.updateMutationState(e, 'rejected', t),
      await fs(i, s));
  } catch (s) {
    await ls(s);
  }
}
function Nf(n, e) {
  ((n.ka.get(e) || []).forEach((t) => {
    t.resolve();
  }),
    n.ka.delete(e));
}
function kf(n, e, t) {
  const i = B(n);
  let s = i.Ba[i.currentUser.toKey()];
  if (s) {
    const r = s.get(e);
    (r && (t ? r.reject(t) : r.resolve(), (s = s.remove(e))),
      (i.Ba[i.currentUser.toKey()] = s));
  }
}
function oa(n, e, t = null) {
  n.sharedClientState.removeLocalQueryTarget(e);
  for (const i of n.Ma.get(e)) (n.Fa.delete(i), t && n.Ca.$a(i, t));
  (n.Ma.delete(e),
    n.isPrimaryClient &&
      n.La.gr(e).forEach((i) => {
        n.La.containsKey(i) || Df(n, i);
      }));
}
function Df(n, e) {
  n.xa.delete(e.path.canonicalString());
  const t = n.Oa.get(e);
  t !== null &&
    (Ya(n.remoteStore, t), (n.Oa = n.Oa.remove(e)), n.Na.delete(t), il(n));
}
function qu(n, e, t) {
  for (const i of t)
    i instanceof Cf
      ? (n.La.addReference(i.key, e), YT(n, i))
      : i instanceof Sf
        ? (M('SyncEngine', 'Document no longer in limbo: ' + i.key),
          n.La.removeReference(i.key, e),
          n.La.containsKey(i.key) || Df(n, i.key))
        : F();
}
function YT(n, e) {
  const t = e.key,
    i = t.path.canonicalString();
  n.Oa.get(t) ||
    n.xa.has(i) ||
    (M('SyncEngine', 'New document in limbo: ' + t), n.xa.add(i), il(n));
}
function il(n) {
  for (; n.xa.size > 0 && n.Oa.size < n.maxConcurrentLimboResolutions; ) {
    const e = n.xa.values().next().value;
    n.xa.delete(e);
    const t = new L(ne.fromString(e)),
      i = n.qa.next();
    (n.Na.set(i, new UT(t)),
      (n.Oa = n.Oa.insert(t, i)),
      gf(
        n.remoteStore,
        new Lt(ot(qa(t.path)), i, 'TargetPurposeLimboResolution', Ma.oe)
      ));
  }
}
async function fs(n, e, t) {
  const i = B(n),
    s = [],
    r = [],
    a = [];
  i.Fa.isEmpty() ||
    (i.Fa.forEach((l, c) => {
      a.push(
        i.Ka(c, e, t).then((h) => {
          var f;
          if ((h || t) && i.isPrimaryClient) {
            const _ = h
              ? !h.fromCache
              : (f = t == null ? void 0 : t.targetChanges.get(c.targetId)) ===
                    null || f === void 0
                ? void 0
                : f.current;
            i.sharedClientState.updateQueryState(
              c.targetId,
              _ ? 'current' : 'not-current'
            );
          }
          if (h) {
            s.push(h);
            const _ = Qa.Wi(c.targetId, h);
            r.push(_);
          }
        })
      );
    }),
    await Promise.all(a),
    i.Ca.d_(s),
    await (async function (c, h) {
      const f = B(c);
      try {
        await f.persistence.runTransaction(
          'notifyLocalViewChanges',
          'readwrite',
          (_) =>
            b.forEach(h, (g) =>
              b
                .forEach(g.$i, (R) =>
                  f.persistence.referenceDelegate.addReference(_, g.targetId, R)
                )
                .next(() =>
                  b.forEach(g.Ui, (R) =>
                    f.persistence.referenceDelegate.removeReference(
                      _,
                      g.targetId,
                      R
                    )
                  )
                )
            )
        );
      } catch (_) {
        if (!cs(_)) throw _;
        M('LocalStore', 'Failed to update sequence numbers: ' + _);
      }
      for (const _ of h) {
        const g = _.targetId;
        if (!_.fromCache) {
          const R = f.os.get(g),
            P = R.snapshotVersion,
            O = R.withLastLimboFreeSnapshotVersion(P);
          f.os = f.os.insert(g, O);
        }
      }
    })(i.localStore, r));
}
async function XT(n, e) {
  const t = B(n);
  if (!t.currentUser.isEqual(e)) {
    M('SyncEngine', 'User change. New user:', e.toKey());
    const i = await ff(t.localStore, e);
    ((t.currentUser = e),
      (function (r, a) {
        (r.ka.forEach((l) => {
          l.forEach((c) => {
            c.reject(new V(S.CANCELLED, a));
          });
        }),
          r.ka.clear());
      })(t, "'waitForPendingWrites' promise is rejected due to a user change."),
      t.sharedClientState.handleUserChange(
        e,
        i.removedBatchIds,
        i.addedBatchIds
      ),
      await fs(t, i.hs));
  }
}
function JT(n, e) {
  const t = B(n),
    i = t.Na.get(e);
  if (i && i.va) return j().add(i.key);
  {
    let s = j();
    const r = t.Ma.get(e);
    if (!r) return s;
    for (const a of r) {
      const l = t.Fa.get(a);
      s = s.unionWith(l.view.Va);
    }
    return s;
  }
}
function Of(n) {
  const e = B(n);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = bf.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = JT.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = zT.bind(null, e)),
    (e.Ca.d_ = MT.bind(null, e.eventManager)),
    (e.Ca.$a = LT.bind(null, e.eventManager)),
    e
  );
}
function ZT(n) {
  const e = B(n);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = KT.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = QT.bind(null, e)),
    e
  );
}
class gr {
  constructor() {
    ((this.kind = 'memory'), (this.synchronizeTabs = !1));
  }
  async initialize(e) {
    ((this.serializer = Ur(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.Wa(e)),
      (this.persistence = this.Ga(e)),
      await this.persistence.start(),
      (this.localStore = this.za(e)),
      (this.gcScheduler = this.ja(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Ha(e, this.localStore)));
  }
  ja(e, t) {
    return null;
  }
  Ha(e, t) {
    return null;
  }
  za(e) {
    return rT(this.persistence, new iT(), e.initialUser, this.serializer);
  }
  Ga(e) {
    return new eT(Ka.Zr, this.serializer);
  }
  Wa(e) {
    return new dT();
  }
  async terminate() {
    var e, t;
    ((e = this.gcScheduler) === null || e === void 0 || e.stop(),
      (t = this.indexBackfillerScheduler) === null || t === void 0 || t.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown());
  }
}
gr.provider = { build: () => new gr() };
class aa {
  async initialize(e, t) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(t)),
      (this.remoteStore = this.createRemoteStore(t)),
      (this.eventManager = this.createEventManager(t)),
      (this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (i) =>
        Bu(this.syncEngine, i, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = XT.bind(
        null,
        this.syncEngine
      )),
      await DT(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return (function () {
      return new VT();
    })();
  }
  createDatastore(e) {
    const t = Ur(e.databaseInfo.databaseId),
      i = (function (r) {
        return new mT(r);
      })(e.databaseInfo);
    return (function (r, a, l, c) {
      return new vT(r, a, l, c);
    })(e.authCredentials, e.appCheckCredentials, i, t);
  }
  createRemoteStore(e) {
    return (function (i, s, r, a, l) {
      return new TT(i, s, r, a, l);
    })(
      this.localStore,
      this.datastore,
      e.asyncQueue,
      (t) => Bu(this.syncEngine, t, 0),
      (function () {
        return Mu.D() ? new Mu() : new fT();
      })()
    );
  }
  createSyncEngine(e, t) {
    return (function (s, r, a, l, c, h, f) {
      const _ = new BT(s, r, a, l, c, h);
      return (f && (_.Qa = !0), _);
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      t
    );
  }
  async terminate() {
    var e, t;
    (await (async function (s) {
      const r = B(s);
      (M('RemoteStore', 'RemoteStore shutting down.'),
        r.L_.add(5),
        await ds(r),
        r.k_.shutdown(),
        r.q_.set('Unknown'));
    })(this.remoteStore),
      (e = this.datastore) === null || e === void 0 || e.terminate(),
      (t = this.eventManager) === null || t === void 0 || t.terminate());
  }
}
aa.provider = { build: () => new aa() };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vf {
  constructor(e) {
    ((this.observer = e), (this.muted = !1));
  }
  next(e) {
    this.muted || (this.observer.next && this.Ya(this.observer.next, e));
  }
  error(e) {
    this.muted ||
      (this.observer.error
        ? this.Ya(this.observer.error, e)
        : It('Uncaught Error in snapshot listener:', e.toString()));
  }
  Za() {
    this.muted = !0;
  }
  Ya(e, t) {
    setTimeout(() => {
      this.muted || e(t);
    }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class eI {
  constructor(e, t, i, s, r) {
    ((this.authCredentials = e),
      (this.appCheckCredentials = t),
      (this.asyncQueue = i),
      (this.databaseInfo = s),
      (this.user = Ne.UNAUTHENTICATED),
      (this.clientId = Od.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      (this._uninitializedComponentsProvider = r),
      this.authCredentials.start(i, async (a) => {
        (M('FirestoreClient', 'Received user=', a.uid),
          await this.authCredentialListener(a),
          (this.user = a));
      }),
      this.appCheckCredentials.start(
        i,
        (a) => (
          M('FirestoreClient', 'Received new app check token=', a),
          this.appCheckCredentialListener(a, this.user)
        )
      ));
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new yt();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          (this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve());
        } catch (t) {
          const i = tl(t, 'Failed to shutdown persistence');
          e.reject(i);
        }
      }),
      e.promise
    );
  }
}
async function No(n, e) {
  (n.asyncQueue.verifyOperationInProgress(),
    M('FirestoreClient', 'Initializing OfflineComponentProvider'));
  const t = n.configuration;
  await e.initialize(t);
  let i = t.initialUser;
  (n.setCredentialChangeListener(async (s) => {
    i.isEqual(s) || (await ff(e.localStore, s), (i = s));
  }),
    e.persistence.setDatabaseDeletedListener(() => n.terminate()),
    (n._offlineComponents = e));
}
async function Wu(n, e) {
  n.asyncQueue.verifyOperationInProgress();
  const t = await tI(n);
  (M('FirestoreClient', 'Initializing OnlineComponentProvider'),
    await e.initialize(t, n.configuration),
    n.setCredentialChangeListener((i) => Lu(e.remoteStore, i)),
    n.setAppCheckTokenChangeListener((i, s) => Lu(e.remoteStore, s)),
    (n._onlineComponents = e));
}
async function tI(n) {
  if (!n._offlineComponents)
    if (n._uninitializedComponentsProvider) {
      M('FirestoreClient', 'Using user provided OfflineComponentProvider');
      try {
        await No(n, n._uninitializedComponentsProvider._offline);
      } catch (e) {
        const t = e;
        if (
          !(function (s) {
            return s.name === 'FirebaseError'
              ? s.code === S.FAILED_PRECONDITION || s.code === S.UNIMPLEMENTED
              : !(typeof DOMException < 'u' && s instanceof DOMException) ||
                  s.code === 22 ||
                  s.code === 20 ||
                  s.code === 11;
          })(t)
        )
          throw t;
        (Wn(
          'Error using user provided cache. Falling back to memory cache: ' + t
        ),
          await No(n, new gr()));
      }
    } else
      (M('FirestoreClient', 'Using default OfflineComponentProvider'),
        await No(n, new gr()));
  return n._offlineComponents;
}
async function Mf(n) {
  return (
    n._onlineComponents ||
      (n._uninitializedComponentsProvider
        ? (M('FirestoreClient', 'Using user provided OnlineComponentProvider'),
          await Wu(n, n._uninitializedComponentsProvider._online))
        : (M('FirestoreClient', 'Using default OnlineComponentProvider'),
          await Wu(n, new aa()))),
    n._onlineComponents
  );
}
function nI(n) {
  return Mf(n).then((e) => e.syncEngine);
}
async function Lf(n) {
  const e = await Mf(n),
    t = e.eventManager;
  return (
    (t.onListen = qT.bind(null, e.syncEngine)),
    (t.onUnlisten = $T.bind(null, e.syncEngine)),
    (t.onFirstRemoteStoreListen = WT.bind(null, e.syncEngine)),
    (t.onLastRemoteStoreUnlisten = HT.bind(null, e.syncEngine)),
    t
  );
}
function iI(n, e, t = {}) {
  const i = new yt();
  return (
    n.asyncQueue.enqueueAndForget(async () =>
      (function (r, a, l, c, h) {
        const f = new Vf({
            next: (g) => {
              (f.Za(), a.enqueueAndForget(() => Af(r, _)));
              const R = g.docs.has(l);
              !R && g.fromCache
                ? h.reject(
                    new V(
                      S.UNAVAILABLE,
                      'Failed to get document because the client is offline.'
                    )
                  )
                : R && g.fromCache && c && c.source === 'server'
                  ? h.reject(
                      new V(
                        S.UNAVAILABLE,
                        'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                      )
                    )
                  : h.resolve(g);
            },
            error: (g) => h.reject(g),
          }),
          _ = new Rf(qa(l.path), f, { includeMetadataChanges: !0, _a: !0 });
        return wf(r, _);
      })(await Lf(n), n.asyncQueue, e, t, i)
    ),
    i.promise
  );
}
function sI(n, e, t = {}) {
  const i = new yt();
  return (
    n.asyncQueue.enqueueAndForget(async () =>
      (function (r, a, l, c, h) {
        const f = new Vf({
            next: (g) => {
              (f.Za(),
                a.enqueueAndForget(() => Af(r, _)),
                g.fromCache && c.source === 'server'
                  ? h.reject(
                      new V(
                        S.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : h.resolve(g));
            },
            error: (g) => h.reject(g),
          }),
          _ = new Rf(l, f, { includeMetadataChanges: !0, _a: !0 });
        return wf(r, _);
      })(await Lf(n), n.asyncQueue, e, t, i)
    ),
    i.promise
  );
}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function xf(n) {
  const e = {};
  return (
    n.timeoutSeconds !== void 0 && (e.timeoutSeconds = n.timeoutSeconds),
    e
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ju = new Map();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sl(n, e, t) {
  if (!t)
    throw new V(
      S.INVALID_ARGUMENT,
      `Function ${n}() cannot be called with an empty ${e}.`
    );
}
function rI(n, e, t, i) {
  if (e === !0 && i === !0)
    throw new V(S.INVALID_ARGUMENT, `${n} and ${t} cannot be used together.`);
}
function $u(n) {
  if (!L.isDocumentKey(n))
    throw new V(
      S.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`
    );
}
function Hu(n) {
  if (L.isDocumentKey(n))
    throw new V(
      S.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`
    );
}
function Wr(n) {
  if (n === void 0) return 'undefined';
  if (n === null) return 'null';
  if (typeof n == 'string')
    return (
      n.length > 20 && (n = `${n.substring(0, 20)}...`),
      JSON.stringify(n)
    );
  if (typeof n == 'number' || typeof n == 'boolean') return '' + n;
  if (typeof n == 'object') {
    if (n instanceof Array) return 'an array';
    {
      const e = (function (i) {
        return i.constructor ? i.constructor.name : null;
      })(n);
      return e ? `a custom ${e} object` : 'an object';
    }
  }
  return typeof n == 'function' ? 'a function' : F();
}
function et(n, e) {
  if (('_delegate' in n && (n = n._delegate), !(n instanceof e))) {
    if (e.name === n.constructor.name)
      throw new V(
        S.INVALID_ARGUMENT,
        'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
      );
    {
      const t = Wr(n);
      throw new V(
        S.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${t}`
      );
    }
  }
  return n;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gu {
  constructor(e) {
    var t, i;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new V(
          S.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      ((this.host = 'firestore.googleapis.com'), (this.ssl = !0));
    } else
      ((this.host = e.host),
        (this.ssl = (t = e.ssl) === null || t === void 0 || t));
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      (this.localCache = e.localCache),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new V(
          S.INVALID_ARGUMENT,
          'cacheSizeBytes must be at least 1048576'
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (rI(
      'experimentalForceLongPolling',
      e.experimentalForceLongPolling,
      'experimentalAutoDetectLongPolling',
      e.experimentalAutoDetectLongPolling
    ),
      (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : e.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!e.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = xf(
        (i = e.experimentalLongPollingOptions) !== null && i !== void 0 ? i : {}
      )),
      (function (r) {
        if (r.timeoutSeconds !== void 0) {
          if (isNaN(r.timeoutSeconds))
            throw new V(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`
            );
          if (r.timeoutSeconds < 5)
            throw new V(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`
            );
          if (r.timeoutSeconds > 30)
            throw new V(
              S.INVALID_ARGUMENT,
              `invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!e.useFetchStreams));
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      (function (i, s) {
        return i.timeoutSeconds === s.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        e.experimentalLongPollingOptions
      ) &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
class ps {
  constructor(e, t, i, s) {
    ((this._authCredentials = e),
      (this._appCheckCredentials = t),
      (this._databaseId = i),
      (this._app = s),
      (this.type = 'firestore-lite'),
      (this._persistenceKey = '(lite)'),
      (this._settings = new Gu({})),
      (this._settingsFrozen = !1),
      (this._terminateTask = 'notTerminated'));
  }
  get app() {
    if (!this._app)
      throw new V(
        S.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== 'notTerminated';
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new V(
        S.FAILED_PRECONDITION,
        'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
      );
    ((this._settings = new Gu(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (i) {
          if (!i) return new wv();
          switch (i.type) {
            case 'firstParty':
              return new Sv(
                i.sessionIndex || '0',
                i.iamToken || null,
                i.authTokenFactory || null
              );
            case 'provider':
              return i.client;
            default:
              throw new V(
                S.INVALID_ARGUMENT,
                'makeAuthCredentialsProvider failed due to invalid credential type'
              );
          }
        })(e.credentials)));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return ((this._settingsFrozen = !0), this._settings);
  }
  _delete() {
    return (
      this._terminateTask === 'notTerminated' &&
        (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  async _restart() {
    this._terminateTask === 'notTerminated'
      ? await this._terminate()
      : (this._terminateTask = 'notTerminated');
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (t) {
        const i = ju.get(t);
        i &&
          (M('ComponentProvider', 'Removing Datastore'),
          ju.delete(t),
          i.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function oI(n, e, t, i = {}) {
  var s;
  const r = (n = et(n, ps))._getSettings(),
    a = `${e}:${t}`;
  if (
    (r.host !== 'firestore.googleapis.com' &&
      r.host !== a &&
      Wn(
        'Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.'
      ),
    n._setSettings(Object.assign(Object.assign({}, r), { host: a, ssl: !1 })),
    i.mockUserToken)
  ) {
    let l, c;
    if (typeof i.mockUserToken == 'string')
      ((l = i.mockUserToken), (c = Ne.MOCK_USER));
    else {
      l = X_(
        i.mockUserToken,
        (s = n._app) === null || s === void 0 ? void 0 : s.options.projectId
      );
      const h = i.mockUserToken.sub || i.mockUserToken.user_id;
      if (!h)
        throw new V(
          S.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      c = new Ne(h);
    }
    n._authCredentials = new Av(new Dd(l, c));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qt {
  constructor(e, t, i) {
    ((this.converter = t),
      (this._query = i),
      (this.type = 'query'),
      (this.firestore = e));
  }
  withConverter(e) {
    return new Qt(this.firestore, e, this._query);
  }
}
class Fe {
  constructor(e, t, i) {
    ((this.converter = t),
      (this._key = i),
      (this.type = 'document'),
      (this.firestore = e));
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new Ut(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new Fe(this.firestore, e, this._key);
  }
}
class Ut extends Qt {
  constructor(e, t, i) {
    (super(e, t, qa(i)), (this._path = i), (this.type = 'collection'));
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new Fe(this.firestore, null, new L(e));
  }
  withConverter(e) {
    return new Ut(this.firestore, e, this._path);
  }
}
function AR(n, e, ...t) {
  if (((n = he(n)), sl('collection', 'path', e), n instanceof ps)) {
    const i = ne.fromString(e, ...t);
    return (Hu(i), new Ut(n, null, i));
  }
  {
    if (!(n instanceof Fe || n instanceof Ut))
      throw new V(
        S.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const i = n._path.child(ne.fromString(e, ...t));
    return (Hu(i), new Ut(n.firestore, null, i));
  }
}
function RR(n, e) {
  if (
    ((n = et(n, ps)),
    sl('collectionGroup', 'collection id', e),
    e.indexOf('/') >= 0)
  )
    throw new V(
      S.INVALID_ARGUMENT,
      `Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`
    );
  return new Qt(
    n,
    null,
    (function (i) {
      return new vn(ne.emptyPath(), i);
    })(e)
  );
}
function CR(n, e, ...t) {
  if (
    ((n = he(n)),
    arguments.length === 1 && (e = Od.newId()),
    sl('doc', 'path', e),
    n instanceof ps)
  ) {
    const i = ne.fromString(e, ...t);
    return ($u(i), new Fe(n, null, new L(i)));
  }
  {
    if (!(n instanceof Fe || n instanceof Ut))
      throw new V(
        S.INVALID_ARGUMENT,
        'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
      );
    const i = n._path.child(ne.fromString(e, ...t));
    return (
      $u(i),
      new Fe(n.firestore, n instanceof Ut ? n.converter : null, new L(i))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zu {
  constructor(e = Promise.resolve()) {
    ((this.Pu = []),
      (this.Iu = !1),
      (this.Tu = []),
      (this.Eu = null),
      (this.du = !1),
      (this.Au = !1),
      (this.Ru = []),
      (this.t_ = new _f(this, 'async_queue_retry')),
      (this.Vu = () => {
        const i = bo();
        (i &&
          M('AsyncQueue', 'Visibility state changed to ' + i.visibilityState),
          this.t_.jo());
      }),
      (this.mu = e));
    const t = bo();
    t &&
      typeof t.addEventListener == 'function' &&
      t.addEventListener('visibilitychange', this.Vu);
  }
  get isShuttingDown() {
    return this.Iu;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    (this.fu(), this.gu(e));
  }
  enterRestrictedMode(e) {
    if (!this.Iu) {
      ((this.Iu = !0), (this.Au = e || !1));
      const t = bo();
      t &&
        typeof t.removeEventListener == 'function' &&
        t.removeEventListener('visibilitychange', this.Vu);
    }
  }
  enqueue(e) {
    if ((this.fu(), this.Iu)) return new Promise(() => {});
    const t = new yt();
    return this.gu(() =>
      this.Iu && this.Au
        ? Promise.resolve()
        : (e().then(t.resolve, t.reject), t.promise)
    ).then(() => t.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Pu.push(e), this.pu()));
  }
  async pu() {
    if (this.Pu.length !== 0) {
      try {
        (await this.Pu[0](), this.Pu.shift(), this.t_.reset());
      } catch (e) {
        if (!cs(e)) throw e;
        M('AsyncQueue', 'Operation failed with retryable error: ' + e);
      }
      this.Pu.length > 0 && this.t_.Go(() => this.pu());
    }
  }
  gu(e) {
    const t = this.mu.then(
      () => (
        (this.du = !0),
        e()
          .catch((i) => {
            ((this.Eu = i), (this.du = !1));
            const s = (function (a) {
              let l = a.message || '';
              return (
                a.stack &&
                  (l = a.stack.includes(a.message)
                    ? a.stack
                    : a.message +
                      `
` +
                      a.stack),
                l
              );
            })(i);
            throw (It('INTERNAL UNHANDLED ERROR: ', s), i);
          })
          .then((i) => ((this.du = !1), i))
      )
    );
    return ((this.mu = t), t);
  }
  enqueueAfterDelay(e, t, i) {
    (this.fu(), this.Ru.indexOf(e) > -1 && (t = 0));
    const s = el.createAndSchedule(this, e, t, i, (r) => this.yu(r));
    return (this.Tu.push(s), s);
  }
  fu() {
    this.Eu && F();
  }
  verifyOperationInProgress() {}
  async wu() {
    let e;
    do ((e = this.mu), await e);
    while (e !== this.mu);
  }
  Su(e) {
    for (const t of this.Tu) if (t.timerId === e) return !0;
    return !1;
  }
  bu(e) {
    return this.wu().then(() => {
      this.Tu.sort((t, i) => t.targetTimeMs - i.targetTimeMs);
      for (const t of this.Tu)
        if ((t.skipDelay(), e !== 'all' && t.timerId === e)) break;
      return this.wu();
    });
  }
  Du(e) {
    this.Ru.push(e);
  }
  yu(e) {
    const t = this.Tu.indexOf(e);
    this.Tu.splice(t, 1);
  }
}
class ii extends ps {
  constructor(e, t, i, s) {
    (super(e, t, i, s),
      (this.type = 'firestore'),
      (this._queue = new zu()),
      (this._persistenceKey = (s == null ? void 0 : s.name) || '[DEFAULT]'));
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate();
      ((this._queue = new zu(e)), (this._firestoreClient = void 0), await e);
    }
  }
}
function SR(n, e) {
  const t = typeof n == 'object' ? n : qh(),
    i = typeof n == 'string' ? n : '(default)',
    s = Ra(t, 'firestore').getImmediate({ identifier: i });
  if (!s._initialized) {
    const r = Y_('firestore');
    r && oI(s, ...r);
  }
  return s;
}
function rl(n) {
  if (n._terminated)
    throw new V(
      S.FAILED_PRECONDITION,
      'The client has already been terminated.'
    );
  return (n._firestoreClient || aI(n), n._firestoreClient);
}
function aI(n) {
  var e, t, i;
  const s = n._freezeSettings(),
    r = (function (l, c, h, f) {
      return new Bv(
        l,
        c,
        h,
        f.host,
        f.ssl,
        f.experimentalForceLongPolling,
        f.experimentalAutoDetectLongPolling,
        xf(f.experimentalLongPollingOptions),
        f.useFetchStreams
      );
    })(
      n._databaseId,
      ((e = n._app) === null || e === void 0 ? void 0 : e.options.appId) || '',
      n._persistenceKey,
      s
    );
  (n._componentsProvider ||
    (!((t = s.localCache) === null || t === void 0) &&
      t._offlineComponentProvider &&
      !((i = s.localCache) === null || i === void 0) &&
      i._onlineComponentProvider &&
      (n._componentsProvider = {
        _offline: s.localCache._offlineComponentProvider,
        _online: s.localCache._onlineComponentProvider,
      })),
    (n._firestoreClient = new eI(
      n._authCredentials,
      n._appCheckCredentials,
      n._queue,
      r,
      n._componentsProvider &&
        (function (l) {
          const c = l == null ? void 0 : l._online.build();
          return {
            _offline: l == null ? void 0 : l._offline.build(c),
            _online: c,
          };
        })(n._componentsProvider)
    )));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kn {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new Kn(Ae.fromBase64String(e));
    } catch (t) {
      throw new V(
        S.INVALID_ARGUMENT,
        'Failed to construct data from Base64 string: ' + t
      );
    }
  }
  static fromUint8Array(e) {
    return new Kn(Ae.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return 'Bytes(base64: ' + this.toBase64() + ')';
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jr {
  constructor(...e) {
    for (let t = 0; t < e.length; ++t)
      if (e[t].length === 0)
        throw new V(
          S.INVALID_ARGUMENT,
          'Invalid field name at argument $(i + 1). Field names must not be empty.'
        );
    this._internalPath = new Ie(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ol {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class al {
  constructor(e, t) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new V(
        S.INVALID_ARGUMENT,
        'Latitude must be a number between -90 and 90, but was: ' + e
      );
    if (!isFinite(t) || t < -180 || t > 180)
      throw new V(
        S.INVALID_ARGUMENT,
        'Longitude must be a number between -180 and 180, but was: ' + t
      );
    ((this._lat = e), (this._long = t));
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return X(this._lat, e._lat) || X(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ll {
  constructor(e) {
    this._values = (e || []).map((t) => t);
  }
  toArray() {
    return this._values.map((e) => e);
  }
  isEqual(e) {
    return (function (i, s) {
      if (i.length !== s.length) return !1;
      for (let r = 0; r < i.length; ++r) if (i[r] !== s[r]) return !1;
      return !0;
    })(this._values, e._values);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lI = /^__.*__$/;
class cI {
  constructor(e, t, i) {
    ((this.data = e), (this.fieldMask = t), (this.fieldTransforms = i));
  }
  toMutation(e, t) {
    return this.fieldMask !== null
      ? new Kt(e, this.data, this.fieldMask, t, this.fieldTransforms)
      : new us(e, this.data, t, this.fieldTransforms);
  }
}
class Ff {
  constructor(e, t, i) {
    ((this.data = e), (this.fieldMask = t), (this.fieldTransforms = i));
  }
  toMutation(e, t) {
    return new Kt(e, this.data, this.fieldMask, t, this.fieldTransforms);
  }
}
function Uf(n) {
  switch (n) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw F();
  }
}
class cl {
  constructor(e, t, i, s, r, a) {
    ((this.settings = e),
      (this.databaseId = t),
      (this.serializer = i),
      (this.ignoreUndefinedProperties = s),
      r === void 0 && this.vu(),
      (this.fieldTransforms = r || []),
      (this.fieldMask = a || []));
  }
  get path() {
    return this.settings.path;
  }
  get Cu() {
    return this.settings.Cu;
  }
  Fu(e) {
    return new cl(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  Mu(e) {
    var t;
    const i = (t = this.path) === null || t === void 0 ? void 0 : t.child(e),
      s = this.Fu({ path: i, xu: !1 });
    return (s.Ou(e), s);
  }
  Nu(e) {
    var t;
    const i = (t = this.path) === null || t === void 0 ? void 0 : t.child(e),
      s = this.Fu({ path: i, xu: !1 });
    return (s.vu(), s);
  }
  Lu(e) {
    return this.Fu({ path: void 0, xu: !0 });
  }
  Bu(e) {
    return yr(
      e,
      this.settings.methodName,
      this.settings.ku || !1,
      this.path,
      this.settings.qu
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((t) => e.isPrefixOf(t)) !== void 0 ||
      this.fieldTransforms.find((t) => e.isPrefixOf(t.field)) !== void 0
    );
  }
  vu() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.Ou(this.path.get(e));
  }
  Ou(e) {
    if (e.length === 0) throw this.Bu('Document fields must not be empty');
    if (Uf(this.Cu) && lI.test(e))
      throw this.Bu('Document fields cannot begin and end with "__"');
  }
}
class uI {
  constructor(e, t, i) {
    ((this.databaseId = e),
      (this.ignoreUndefinedProperties = t),
      (this.serializer = i || Ur(e)));
  }
  Qu(e, t, i, s = !1) {
    return new cl(
      { Cu: e, methodName: t, qu: i, path: Ie.emptyPath(), xu: !1, ku: s },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties
    );
  }
}
function ul(n) {
  const e = n._freezeSettings(),
    t = Ur(n._databaseId);
  return new uI(n._databaseId, !!e.ignoreUndefinedProperties, t);
}
function hI(n, e, t, i, s, r = {}) {
  const a = n.Qu(r.merge || r.mergeFields ? 2 : 0, e, t, s);
  hl('Data must be an object, but it was:', a, i);
  const l = Bf(i, a);
  let c, h;
  if (r.merge) ((c = new We(a.fieldMask)), (h = a.fieldTransforms));
  else if (r.mergeFields) {
    const f = [];
    for (const _ of r.mergeFields) {
      const g = la(e, _, t);
      if (!a.contains(g))
        throw new V(
          S.INVALID_ARGUMENT,
          `Field '${g}' is specified in your field mask but missing from your input data.`
        );
      Wf(f, g) || f.push(g);
    }
    ((c = new We(f)), (h = a.fieldTransforms.filter((_) => c.covers(_.field))));
  } else ((c = null), (h = a.fieldTransforms));
  return new cI(new Ue(l), c, h);
}
class $r extends ol {
  _toFieldTransform(e) {
    if (e.Cu !== 2)
      throw e.Cu === 1
        ? e.Bu(
            `${this._methodName}() can only appear at the top level of your update data`
          )
        : e.Bu(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
          );
    return (e.fieldMask.push(e.path), null);
  }
  isEqual(e) {
    return e instanceof $r;
  }
}
function dI(n, e, t, i) {
  const s = n.Qu(1, e, t);
  hl('Data must be an object, but it was:', s, i);
  const r = [],
    a = Ue.empty();
  yn(i, (c, h) => {
    const f = dl(e, c, t);
    h = he(h);
    const _ = s.Nu(f);
    if (h instanceof $r) r.push(f);
    else {
      const g = _s(h, _);
      g != null && (r.push(f), a.set(f, g));
    }
  });
  const l = new We(r);
  return new Ff(a, l, s.fieldTransforms);
}
function fI(n, e, t, i, s, r) {
  const a = n.Qu(1, e, t),
    l = [la(e, i, t)],
    c = [s];
  if (r.length % 2 != 0)
    throw new V(
      S.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let g = 0; g < r.length; g += 2) (l.push(la(e, r[g])), c.push(r[g + 1]));
  const h = [],
    f = Ue.empty();
  for (let g = l.length - 1; g >= 0; --g)
    if (!Wf(h, l[g])) {
      const R = l[g];
      let P = c[g];
      P = he(P);
      const O = a.Nu(R);
      if (P instanceof $r) h.push(R);
      else {
        const N = _s(P, O);
        N != null && (h.push(R), f.set(R, N));
      }
    }
  const _ = new We(h);
  return new Ff(f, _, a.fieldTransforms);
}
function pI(n, e, t, i = !1) {
  return _s(t, n.Qu(i ? 4 : 3, e));
}
function _s(n, e) {
  if (qf((n = he(n)))) return (hl('Unsupported field value:', e, n), Bf(n, e));
  if (n instanceof ol)
    return (
      (function (i, s) {
        if (!Uf(s.Cu))
          throw s.Bu(
            `${i._methodName}() can only be used with update() and set()`
          );
        if (!s.path)
          throw s.Bu(
            `${i._methodName}() is not currently supported inside arrays`
          );
        const r = i._toFieldTransform(s);
        r && s.fieldTransforms.push(r);
      })(n, e),
      null
    );
  if (n === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), n instanceof Array)) {
    if (e.settings.xu && e.Cu !== 4)
      throw e.Bu('Nested arrays are not supported');
    return (function (i, s) {
      const r = [];
      let a = 0;
      for (const l of i) {
        let c = _s(l, s.Lu(a));
        (c == null && (c = { nullValue: 'NULL_VALUE' }), r.push(c), a++);
      }
      return { arrayValue: { values: r } };
    })(n, e);
  }
  return (function (i, s) {
    if ((i = he(i)) === null) return { nullValue: 'NULL_VALUE' };
    if (typeof i == 'number') return lE(s.serializer, i);
    if (typeof i == 'boolean') return { booleanValue: i };
    if (typeof i == 'string') return { stringValue: i };
    if (i instanceof Date) {
      const r = _e.fromDate(i);
      return { timestampValue: _r(s.serializer, r) };
    }
    if (i instanceof _e) {
      const r = new _e(i.seconds, 1e3 * Math.floor(i.nanoseconds / 1e3));
      return { timestampValue: _r(s.serializer, r) };
    }
    if (i instanceof al)
      return {
        geoPointValue: { latitude: i.latitude, longitude: i.longitude },
      };
    if (i instanceof Kn) return { bytesValue: of(s.serializer, i._byteString) };
    if (i instanceof Fe) {
      const r = s.databaseId,
        a = i.firestore._databaseId;
      if (!a.isEqual(r))
        throw s.Bu(
          `Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`
        );
      return {
        referenceValue: Ga(
          i.firestore._databaseId || s.databaseId,
          i._key.path
        ),
      };
    }
    if (i instanceof ll)
      return (function (a, l) {
        return {
          mapValue: {
            fields: {
              __type__: { stringValue: '__vector__' },
              value: {
                arrayValue: {
                  values: a.toArray().map((c) => {
                    if (typeof c != 'number')
                      throw l.Bu(
                        'VectorValues must only contain numeric values.'
                      );
                    return Wa(l.serializer, c);
                  }),
                },
              },
            },
          },
        };
      })(i, s);
    throw s.Bu(`Unsupported field value: ${Wr(i)}`);
  })(n, e);
}
function Bf(n, e) {
  const t = {};
  return (
    Vd(n)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : yn(n, (i, s) => {
          const r = _s(s, e.Mu(i));
          r != null && (t[i] = r);
        }),
    { mapValue: { fields: t } }
  );
}
function qf(n) {
  return !(
    typeof n != 'object' ||
    n === null ||
    n instanceof Array ||
    n instanceof Date ||
    n instanceof _e ||
    n instanceof al ||
    n instanceof Kn ||
    n instanceof Fe ||
    n instanceof ol ||
    n instanceof ll
  );
}
function hl(n, e, t) {
  if (
    !qf(t) ||
    !(function (s) {
      return (
        typeof s == 'object' &&
        s !== null &&
        (Object.getPrototypeOf(s) === Object.prototype ||
          Object.getPrototypeOf(s) === null)
      );
    })(t)
  ) {
    const i = Wr(t);
    throw i === 'an object' ? e.Bu(n + ' a custom object') : e.Bu(n + ' ' + i);
  }
}
function la(n, e, t) {
  if ((e = he(e)) instanceof jr) return e._internalPath;
  if (typeof e == 'string') return dl(n, e);
  throw yr('Field path arguments must be of type string or ', n, !1, void 0, t);
}
const _I = new RegExp('[~\\*/\\[\\]]');
function dl(n, e, t) {
  if (e.search(_I) >= 0)
    throw yr(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      n,
      !1,
      void 0,
      t
    );
  try {
    return new jr(...e.split('.'))._internalPath;
  } catch {
    throw yr(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n,
      !1,
      void 0,
      t
    );
  }
}
function yr(n, e, t, i, s) {
  const r = i && !i.isEmpty(),
    a = s !== void 0;
  let l = `Function ${e}() called with invalid data`;
  (t && (l += ' (via `toFirestore()`)'), (l += '. '));
  let c = '';
  return (
    (r || a) &&
      ((c += ' (found'),
      r && (c += ` in field ${i}`),
      a && (c += ` in document ${s}`),
      (c += ')')),
    new V(S.INVALID_ARGUMENT, l + n + c)
  );
}
function Wf(n, e) {
  return n.some((t) => t.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class jf {
  constructor(e, t, i, s, r) {
    ((this._firestore = e),
      (this._userDataWriter = t),
      (this._key = i),
      (this._document = s),
      (this._converter = r));
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Fe(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new mI(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const t = this._document.data.field(Hr('DocumentSnapshot.get', e));
      if (t !== null) return this._userDataWriter.convertValue(t);
    }
  }
}
class mI extends jf {
  data() {
    return super.data();
  }
}
function Hr(n, e) {
  return typeof e == 'string'
    ? dl(n, e)
    : e instanceof jr
      ? e._internalPath
      : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function gI(n) {
  if (n.limitType === 'L' && n.explicitOrderBy.length === 0)
    throw new V(
      S.UNIMPLEMENTED,
      'limitToLast() queries require specifying at least one orderBy() clause'
    );
}
class fl {}
class $f extends fl {}
function PR(n, e, ...t) {
  let i = [];
  (e instanceof fl && i.push(e),
    (i = i.concat(t)),
    (function (r) {
      const a = r.filter((c) => c instanceof pl).length,
        l = r.filter((c) => c instanceof Gr).length;
      if (a > 1 || (a > 0 && l > 0))
        throw new V(
          S.INVALID_ARGUMENT,
          'InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.'
        );
    })(i));
  for (const s of i) n = s._apply(n);
  return n;
}
class Gr extends $f {
  constructor(e, t, i) {
    (super(),
      (this._field = e),
      (this._op = t),
      (this._value = i),
      (this.type = 'where'));
  }
  static _create(e, t, i) {
    return new Gr(e, t, i);
  }
  _apply(e) {
    const t = this._parse(e);
    return (Hf(e._query, t), new Qt(e.firestore, e.converter, Jo(e._query, t)));
  }
  _parse(e) {
    const t = ul(e.firestore);
    return (function (r, a, l, c, h, f, _) {
      let g;
      if (h.isKeyField()) {
        if (f === 'array-contains' || f === 'array-contains-any')
          throw new V(
            S.INVALID_ARGUMENT,
            `Invalid Query. You can't perform '${f}' queries on documentId().`
          );
        if (f === 'in' || f === 'not-in') {
          Qu(_, f);
          const R = [];
          for (const P of _) R.push(Ku(c, r, P));
          g = { arrayValue: { values: R } };
        } else g = Ku(c, r, _);
      } else
        ((f !== 'in' && f !== 'not-in' && f !== 'array-contains-any') ||
          Qu(_, f),
          (g = pI(l, a, _, f === 'in' || f === 'not-in')));
      return fe.create(h, f, g);
    })(
      e._query,
      'where',
      t,
      e.firestore._databaseId,
      this._field,
      this._op,
      this._value
    );
  }
}
function bR(n, e, t) {
  const i = e,
    s = Hr('where', n);
  return Gr._create(s, i, t);
}
class pl extends fl {
  constructor(e, t) {
    (super(), (this.type = e), (this._queryConstraints = t));
  }
  static _create(e, t) {
    return new pl(e, t);
  }
  _parse(e) {
    const t = this._queryConstraints
      .map((i) => i._parse(e))
      .filter((i) => i.getFilters().length > 0);
    return t.length === 1 ? t[0] : Ze.create(t, this._getOperator());
  }
  _apply(e) {
    const t = this._parse(e);
    return t.getFilters().length === 0
      ? e
      : ((function (s, r) {
          let a = s;
          const l = r.getFlattenedFilters();
          for (const c of l) (Hf(a, c), (a = Jo(a, c)));
        })(e._query, t),
        new Qt(e.firestore, e.converter, Jo(e._query, t)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === 'and' ? 'and' : 'or';
  }
}
class _l extends $f {
  constructor(e, t) {
    (super(),
      (this._field = e),
      (this._direction = t),
      (this.type = 'orderBy'));
  }
  static _create(e, t) {
    return new _l(e, t);
  }
  _apply(e) {
    const t = (function (s, r, a) {
      if (s.startAt !== null)
        throw new V(
          S.INVALID_ARGUMENT,
          'Invalid query. You must not call startAt() or startAfter() before calling orderBy().'
        );
      if (s.endAt !== null)
        throw new V(
          S.INVALID_ARGUMENT,
          'Invalid query. You must not call endAt() or endBefore() before calling orderBy().'
        );
      return new Ji(r, a);
    })(e._query, this._field, this._direction);
    return new Qt(
      e.firestore,
      e.converter,
      (function (s, r) {
        const a = s.explicitOrderBy.concat([r]);
        return new vn(
          s.path,
          s.collectionGroup,
          a,
          s.filters.slice(),
          s.limit,
          s.limitType,
          s.startAt,
          s.endAt
        );
      })(e._query, t)
    );
  }
}
function NR(n, e = 'asc') {
  const t = e,
    i = Hr('orderBy', n);
  return _l._create(i, t);
}
function Ku(n, e, t) {
  if (typeof (t = he(t)) == 'string') {
    if (t === '')
      throw new V(
        S.INVALID_ARGUMENT,
        'Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.'
      );
    if (!jd(e) && t.indexOf('/') !== -1)
      throw new V(
        S.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`
      );
    const i = e.path.child(ne.fromString(t));
    if (!L.isDocumentKey(i))
      throw new V(
        S.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`
      );
    return mu(n, new L(i));
  }
  if (t instanceof Fe) return mu(n, t._key);
  throw new V(
    S.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wr(t)}.`
  );
}
function Qu(n, e) {
  if (!Array.isArray(n) || n.length === 0)
    throw new V(
      S.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
    );
}
function Hf(n, e) {
  const t = (function (s, r) {
    for (const a of s)
      for (const l of a.getFlattenedFilters())
        if (r.indexOf(l.op) >= 0) return l.op;
    return null;
  })(
    n.filters,
    (function (s) {
      switch (s) {
        case '!=':
          return ['!=', 'not-in'];
        case 'array-contains-any':
        case 'in':
          return ['not-in'];
        case 'not-in':
          return ['array-contains-any', 'in', 'not-in', '!='];
        default:
          return [];
      }
    })(e.op)
  );
  if (t !== null)
    throw t === e.op
      ? new V(
          S.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`
        )
      : new V(
          S.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`
        );
}
class yI {
  convertValue(e, t = 'none') {
    switch (dn(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return ue(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, t);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(hn(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, t);
      case 11:
        return this.convertObject(e.mapValue, t);
      case 10:
        return this.convertVectorValue(e.mapValue);
      default:
        throw F();
    }
  }
  convertObject(e, t) {
    return this.convertObjectMap(e.fields, t);
  }
  convertObjectMap(e, t = 'none') {
    const i = {};
    return (
      yn(e, (s, r) => {
        i[s] = this.convertValue(r, t);
      }),
      i
    );
  }
  convertVectorValue(e) {
    var t, i, s;
    const r =
      (s =
        (i =
          (t = e.fields) === null || t === void 0
            ? void 0
            : t.value.arrayValue) === null || i === void 0
          ? void 0
          : i.values) === null || s === void 0
        ? void 0
        : s.map((a) => ue(a.doubleValue));
    return new ll(r);
  }
  convertGeoPoint(e) {
    return new al(ue(e.latitude), ue(e.longitude));
  }
  convertArray(e, t) {
    return (e.values || []).map((i) => this.convertValue(i, t));
  }
  convertServerTimestamp(e, t) {
    switch (t) {
      case 'previous':
        const i = xa(e);
        return i == null ? null : this.convertValue(i, t);
      case 'estimate':
        return this.convertTimestamp(Qi(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const t = jt(e);
    return new _e(t.seconds, t.nanos);
  }
  convertDocumentKey(e, t) {
    const i = ne.fromString(e);
    Z(df(i));
    const s = new Yi(i.get(1), i.get(3)),
      r = new L(i.popFirst(5));
    return (
      s.isEqual(t) ||
        It(
          `Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`
        ),
      r
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function vI(n, e, t) {
  let i;
  return ((i = n ? n.toFirestore(e) : e), i);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vi {
  constructor(e, t) {
    ((this.hasPendingWrites = e), (this.fromCache = t));
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class Gf extends jf {
  constructor(e, t, i, s, r, a) {
    (super(e, t, i, s, a),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = r));
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const t = new tr(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(t, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      );
    }
  }
  get(e, t = {}) {
    if (this._document) {
      const i = this._document.data.field(Hr('DocumentSnapshot.get', e));
      if (i !== null)
        return this._userDataWriter.convertValue(i, t.serverTimestamps);
    }
  }
}
class tr extends Gf {
  data(e = {}) {
    return super.data(e);
  }
}
class EI {
  constructor(e, t, i, s) {
    ((this._firestore = e),
      (this._userDataWriter = t),
      (this._snapshot = s),
      (this.metadata = new Vi(s.hasPendingWrites, s.fromCache)),
      (this.query = i));
  }
  get docs() {
    const e = [];
    return (this.forEach((t) => e.push(t)), e);
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, t) {
    this._snapshot.docs.forEach((i) => {
      e.call(
        t,
        new tr(
          this._firestore,
          this._userDataWriter,
          i.key,
          i,
          new Vi(
            this._snapshot.mutatedKeys.has(i.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const t = !!e.includeMetadataChanges;
    if (t && this._snapshot.excludesMetadataChanges)
      throw new V(
        S.INVALID_ARGUMENT,
        'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === t) ||
        ((this._cachedChanges = (function (s, r) {
          if (s._snapshot.oldDocs.isEmpty()) {
            let a = 0;
            return s._snapshot.docChanges.map((l) => {
              const c = new tr(
                s._firestore,
                s._userDataWriter,
                l.doc.key,
                l.doc,
                new Vi(
                  s._snapshot.mutatedKeys.has(l.doc.key),
                  s._snapshot.fromCache
                ),
                s.query.converter
              );
              return (
                l.doc,
                { type: 'added', doc: c, oldIndex: -1, newIndex: a++ }
              );
            });
          }
          {
            let a = s._snapshot.oldDocs;
            return s._snapshot.docChanges
              .filter((l) => r || l.type !== 3)
              .map((l) => {
                const c = new tr(
                  s._firestore,
                  s._userDataWriter,
                  l.doc.key,
                  l.doc,
                  new Vi(
                    s._snapshot.mutatedKeys.has(l.doc.key),
                    s._snapshot.fromCache
                  ),
                  s.query.converter
                );
                let h = -1,
                  f = -1;
                return (
                  l.type !== 0 &&
                    ((h = a.indexOf(l.doc.key)), (a = a.delete(l.doc.key))),
                  l.type !== 1 &&
                    ((a = a.add(l.doc)), (f = a.indexOf(l.doc.key))),
                  { type: TI(l.type), doc: c, oldIndex: h, newIndex: f }
                );
              });
          }
        })(this, t)),
        (this._cachedChangesIncludeMetadataChanges = t)),
      this._cachedChanges
    );
  }
}
function TI(n) {
  switch (n) {
    case 0:
      return 'added';
    case 2:
    case 3:
      return 'modified';
    case 1:
      return 'removed';
    default:
      return F();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kR(n) {
  n = et(n, Fe);
  const e = et(n.firestore, ii);
  return iI(rl(e), n._key).then((t) => II(e, n, t));
}
class zf extends yI {
  constructor(e) {
    (super(), (this.firestore = e));
  }
  convertBytes(e) {
    return new Kn(e);
  }
  convertReference(e) {
    const t = this.convertDocumentKey(e, this.firestore._databaseId);
    return new Fe(this.firestore, null, t);
  }
}
function DR(n) {
  n = et(n, Qt);
  const e = et(n.firestore, ii),
    t = rl(e),
    i = new zf(e);
  return (gI(n._query), sI(t, n._query).then((s) => new EI(e, i, n, s)));
}
function OR(n, e, t) {
  n = et(n, Fe);
  const i = et(n.firestore, ii),
    s = vI(n.converter, e);
  return ml(i, [
    hI(ul(i), 'setDoc', n._key, s, n.converter !== null, t).toMutation(
      n._key,
      Ye.none()
    ),
  ]);
}
function VR(n, e, t, ...i) {
  n = et(n, Fe);
  const s = et(n.firestore, ii),
    r = ul(s);
  let a;
  return (
    (a =
      typeof (e = he(e)) == 'string' || e instanceof jr
        ? fI(r, 'updateDoc', n._key, e, t, i)
        : dI(r, 'updateDoc', n._key, e)),
    ml(s, [a.toMutation(n._key, Ye.exists(!0))])
  );
}
function MR(n) {
  return ml(et(n.firestore, ii), [new ja(n._key, Ye.none())]);
}
function ml(n, e) {
  return (function (i, s) {
    const r = new yt();
    return (
      i.asyncQueue.enqueueAndForget(async () => GT(await nI(i), s, r)),
      r.promise
    );
  })(rl(n), e);
}
function II(n, e, t) {
  const i = t.docs.get(e._key),
    s = new zf(n);
  return new Gf(
    n,
    s,
    e._key,
    i,
    new Vi(t.hasPendingWrites, t.fromCache),
    e.converter
  );
}
(function (e, t = !0) {
  ((function (s) {
    ei = s;
  })(gn),
    an(
      new qt(
        'firestore',
        (i, { instanceIdentifier: s, options: r }) => {
          const a = i.getProvider('app').getImmediate(),
            l = new ii(
              new Rv(i.getProvider('auth-internal')),
              new bv(i.getProvider('app-check-internal')),
              (function (h, f) {
                if (
                  !Object.prototype.hasOwnProperty.apply(h.options, [
                    'projectId',
                  ])
                )
                  throw new V(
                    S.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Yi(h.options.projectId, f);
              })(a, s),
              a
            );
          return (
            (r = Object.assign({ useFetchStreams: t }, r)),
            l._setSettings(r),
            l
          );
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    it(hu, '4.7.3', e),
    it(hu, '4.7.3', 'esm2017'));
})();
var Yu = {};
const Xu = '@firebase/database',
  Ju = '1.0.8';
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Kf = '';
function wI(n) {
  Kf = n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class AI {
  constructor(e) {
    ((this.domStorage_ = e), (this.prefix_ = 'firebase:'));
  }
  set(e, t) {
    t == null
      ? this.domStorage_.removeItem(this.prefixedName_(e))
      : this.domStorage_.setItem(this.prefixedName_(e), Te(t));
  }
  get(e) {
    const t = this.domStorage_.getItem(this.prefixedName_(e));
    return t == null ? null : $i(t);
  }
  remove(e) {
    this.domStorage_.removeItem(this.prefixedName_(e));
  }
  prefixedName_(e) {
    return this.prefix_ + e;
  }
  toString() {
    return this.domStorage_.toString();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class RI {
  constructor() {
    ((this.cache_ = {}), (this.isInMemoryStorage = !0));
  }
  set(e, t) {
    t == null ? delete this.cache_[e] : (this.cache_[e] = t);
  }
  get(e) {
    return Rt(this.cache_, e) ? this.cache_[e] : null;
  }
  remove(e) {
    delete this.cache_[e];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Qf = function (n) {
    try {
      if (typeof window < 'u' && typeof window[n] < 'u') {
        const e = window[n];
        return (
          e.setItem('firebase:sentinel', 'cache'),
          e.removeItem('firebase:sentinel'),
          new AI(e)
        );
      }
    } catch {}
    return new RI();
  },
  sn = Qf('localStorage'),
  CI = Qf('sessionStorage');
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fn = new br('@firebase/database'),
  SI = (function () {
    let n = 1;
    return function () {
      return n++;
    };
  })(),
  Yf = function (n) {
    const e = mm(n),
      t = new hm();
    t.update(e);
    const i = t.digest();
    return Ia.encodeByteArray(i);
  },
  ms = function (...n) {
    let e = '';
    for (let t = 0; t < n.length; t++) {
      const i = n[t];
      (Array.isArray(i) ||
      (i && typeof i == 'object' && typeof i.length == 'number')
        ? (e += ms.apply(null, i))
        : typeof i == 'object'
          ? (e += Te(i))
          : (e += i),
        (e += ' '));
    }
    return e;
  };
let Bi = null,
  Zu = !0;
const PI = function (n, e) {
    (D(!0, "Can't turn on custom loggers persistently."),
      (Fn.logLevel = W.VERBOSE),
      (Bi = Fn.log.bind(Fn)));
  },
  De = function (...n) {
    if (
      (Zu === !0 &&
        ((Zu = !1), Bi === null && CI.get('logging_enabled') === !0 && PI()),
      Bi)
    ) {
      const e = ms.apply(null, n);
      Bi(e);
    }
  },
  gs = function (n) {
    return function (...e) {
      De(n, ...e);
    };
  },
  ca = function (...n) {
    const e = 'FIREBASE INTERNAL ERROR: ' + ms(...n);
    Fn.error(e);
  },
  fn = function (...n) {
    const e = `FIREBASE FATAL ERROR: ${ms(...n)}`;
    throw (Fn.error(e), new Error(e));
  },
  je = function (...n) {
    const e = 'FIREBASE WARNING: ' + ms(...n);
    Fn.warn(e);
  },
  bI = function () {
    typeof window < 'u' &&
      window.location &&
      window.location.protocol &&
      window.location.protocol.indexOf('https:') !== -1 &&
      je(
        'Insecure Firebase access from a secure page. Please use https in calls to new Firebase().'
      );
  },
  Xf = function (n) {
    return (
      typeof n == 'number' &&
      (n !== n ||
        n === Number.POSITIVE_INFINITY ||
        n === Number.NEGATIVE_INFINITY)
    );
  },
  NI = function (n) {
    if (document.readyState === 'complete') n();
    else {
      let e = !1;
      const t = function () {
        if (!document.body) {
          setTimeout(t, Math.floor(10));
          return;
        }
        e || ((e = !0), n());
      };
      document.addEventListener
        ? (document.addEventListener('DOMContentLoaded', t, !1),
          window.addEventListener('load', t, !1))
        : document.attachEvent &&
          (document.attachEvent('onreadystatechange', () => {
            document.readyState === 'complete' && t();
          }),
          window.attachEvent('onload', t));
    }
  },
  Qn = '[MIN_NAME]',
  pn = '[MAX_NAME]',
  si = function (n, e) {
    if (n === e) return 0;
    if (n === Qn || e === pn) return -1;
    if (e === Qn || n === pn) return 1;
    {
      const t = eh(n),
        i = eh(e);
      return t !== null
        ? i !== null
          ? t - i === 0
            ? n.length - e.length
            : t - i
          : -1
        : i !== null
          ? 1
          : n < e
            ? -1
            : 1;
    }
  },
  kI = function (n, e) {
    return n === e ? 0 : n < e ? -1 : 1;
  },
  Ri = function (n, e) {
    if (e && n in e) return e[n];
    throw new Error('Missing required key (' + n + ') in object: ' + Te(e));
  },
  gl = function (n) {
    if (typeof n != 'object' || n === null) return Te(n);
    const e = [];
    for (const i in n) e.push(i);
    e.sort();
    let t = '{';
    for (let i = 0; i < e.length; i++)
      (i !== 0 && (t += ','), (t += Te(e[i])), (t += ':'), (t += gl(n[e[i]])));
    return ((t += '}'), t);
  },
  Jf = function (n, e) {
    const t = n.length;
    if (t <= e) return [n];
    const i = [];
    for (let s = 0; s < t; s += e)
      s + e > t ? i.push(n.substring(s, t)) : i.push(n.substring(s, s + e));
    return i;
  };
function Ge(n, e) {
  for (const t in n) n.hasOwnProperty(t) && e(t, n[t]);
}
const Zf = function (n) {
    D(!Xf(n), 'Invalid JSON number');
    const e = 11,
      t = 52,
      i = (1 << (e - 1)) - 1;
    let s, r, a, l, c;
    n === 0
      ? ((r = 0), (a = 0), (s = 1 / n === -1 / 0 ? 1 : 0))
      : ((s = n < 0),
        (n = Math.abs(n)),
        n >= Math.pow(2, 1 - i)
          ? ((l = Math.min(Math.floor(Math.log(n) / Math.LN2), i)),
            (r = l + i),
            (a = Math.round(n * Math.pow(2, t - l) - Math.pow(2, t))))
          : ((r = 0), (a = Math.round(n / Math.pow(2, 1 - i - t)))));
    const h = [];
    for (c = t; c; c -= 1) (h.push(a % 2 ? 1 : 0), (a = Math.floor(a / 2)));
    for (c = e; c; c -= 1) (h.push(r % 2 ? 1 : 0), (r = Math.floor(r / 2)));
    (h.push(s ? 1 : 0), h.reverse());
    const f = h.join('');
    let _ = '';
    for (c = 0; c < 64; c += 8) {
      let g = parseInt(f.substr(c, 8), 2).toString(16);
      (g.length === 1 && (g = '0' + g), (_ = _ + g));
    }
    return _.toLowerCase();
  },
  DI = function () {
    return !!(
      typeof window == 'object' &&
      window.chrome &&
      window.chrome.extension &&
      !/^chrome/.test(window.location.href)
    );
  },
  OI = function () {
    return typeof Windows == 'object' && typeof Windows.UI == 'object';
  },
  VI = new RegExp('^-?(0*)\\d{1,10}$'),
  MI = -2147483648,
  LI = 2147483647,
  eh = function (n) {
    if (VI.test(n)) {
      const e = Number(n);
      if (e >= MI && e <= LI) return e;
    }
    return null;
  },
  ys = function (n) {
    try {
      n();
    } catch (e) {
      setTimeout(() => {
        const t = e.stack || '';
        throw (je('Exception was thrown by user callback.', t), e);
      }, Math.floor(0));
    }
  },
  xI = function () {
    return (
      (
        (typeof window == 'object' &&
          window.navigator &&
          window.navigator.userAgent) ||
        ''
      ).search(
        /googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i
      ) >= 0
    );
  },
  qi = function (n, e) {
    const t = setTimeout(n, e);
    return (
      typeof t == 'number' && typeof Deno < 'u' && Deno.unrefTimer
        ? Deno.unrefTimer(t)
        : typeof t == 'object' && t.unref && t.unref(),
      t
    );
  };
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FI {
  constructor(e, t) {
    ((this.appName_ = e),
      (this.appCheckProvider = t),
      (this.appCheck = t == null ? void 0 : t.getImmediate({ optional: !0 })),
      this.appCheck || t == null || t.get().then((i) => (this.appCheck = i)));
  }
  getToken(e) {
    return this.appCheck
      ? this.appCheck.getToken(e)
      : new Promise((t, i) => {
          setTimeout(() => {
            this.appCheck ? this.getToken(e).then(t, i) : t(null);
          }, 0);
        });
  }
  addTokenChangeListener(e) {
    var t;
    (t = this.appCheckProvider) === null ||
      t === void 0 ||
      t.get().then((i) => i.addTokenListener(e));
  }
  notifyForInvalidToken() {
    je(
      `Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class UI {
  constructor(e, t, i) {
    ((this.appName_ = e),
      (this.firebaseOptions_ = t),
      (this.authProvider_ = i),
      (this.auth_ = null),
      (this.auth_ = i.getImmediate({ optional: !0 })),
      this.auth_ || i.onInit((s) => (this.auth_ = s)));
  }
  getToken(e) {
    return this.auth_
      ? this.auth_
          .getToken(e)
          .catch((t) =>
            t && t.code === 'auth/token-not-initialized'
              ? (De(
                  'Got auth/token-not-initialized error.  Treating as null token.'
                ),
                null)
              : Promise.reject(t)
          )
      : new Promise((t, i) => {
          setTimeout(() => {
            this.auth_ ? this.getToken(e).then(t, i) : t(null);
          }, 0);
        });
  }
  addTokenChangeListener(e) {
    this.auth_
      ? this.auth_.addAuthTokenListener(e)
      : this.authProvider_.get().then((t) => t.addAuthTokenListener(e));
  }
  removeTokenChangeListener(e) {
    this.authProvider_.get().then((t) => t.removeAuthTokenListener(e));
  }
  notifyForInvalidToken() {
    let e =
      'Provided authentication credentials for the app named "' +
      this.appName_ +
      '" are invalid. This usually indicates your app was not initialized correctly. ';
    ('credential' in this.firebaseOptions_
      ? (e +=
          'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
      : 'serviceAccount' in this.firebaseOptions_
        ? (e +=
            'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.')
        : (e +=
            'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.'),
      je(e));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const yl = '5',
  ep = 'v',
  tp = 's',
  np = 'r',
  ip = 'f',
  sp =
    /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
  rp = 'ls',
  op = 'p',
  ua = 'ac',
  ap = 'websocket',
  lp = 'long_polling';
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class BI {
  constructor(e, t, i, s, r = !1, a = '', l = !1, c = !1) {
    ((this.secure = t),
      (this.namespace = i),
      (this.webSocketOnly = s),
      (this.nodeAdmin = r),
      (this.persistenceKey = a),
      (this.includeNamespaceInQueryParams = l),
      (this.isUsingEmulator = c),
      (this._host = e.toLowerCase()),
      (this._domain = this._host.substr(this._host.indexOf('.') + 1)),
      (this.internalHost = sn.get('host:' + e) || this._host));
  }
  isCacheableHost() {
    return this.internalHost.substr(0, 2) === 's-';
  }
  isCustomHost() {
    return (
      this._domain !== 'firebaseio.com' &&
      this._domain !== 'firebaseio-demo.com'
    );
  }
  get host() {
    return this._host;
  }
  set host(e) {
    e !== this.internalHost &&
      ((this.internalHost = e),
      this.isCacheableHost() &&
        sn.set('host:' + this._host, this.internalHost));
  }
  toString() {
    let e = this.toURLString();
    return (this.persistenceKey && (e += '<' + this.persistenceKey + '>'), e);
  }
  toURLString() {
    const e = this.secure ? 'https://' : 'http://',
      t = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : '';
    return `${e}${this.host}/${t}`;
  }
}
function qI(n) {
  return (
    n.host !== n.internalHost ||
    n.isCustomHost() ||
    n.includeNamespaceInQueryParams
  );
}
function cp(n, e, t) {
  (D(typeof e == 'string', 'typeof type must == string'),
    D(typeof t == 'object', 'typeof params must == object'));
  let i;
  if (e === ap) i = (n.secure ? 'wss://' : 'ws://') + n.internalHost + '/.ws?';
  else if (e === lp)
    i = (n.secure ? 'https://' : 'http://') + n.internalHost + '/.lp?';
  else throw new Error('Unknown connection type: ' + e);
  qI(n) && (t.ns = n.namespace);
  const s = [];
  return (
    Ge(t, (r, a) => {
      s.push(r + '=' + a);
    }),
    i + s.join('&')
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WI {
  constructor() {
    this.counters_ = {};
  }
  incrementCounter(e, t = 1) {
    (Rt(this.counters_, e) || (this.counters_[e] = 0),
      (this.counters_[e] += t));
  }
  get() {
    return $_(this.counters_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ko = {},
  Do = {};
function vl(n) {
  const e = n.toString();
  return (ko[e] || (ko[e] = new WI()), ko[e]);
}
function jI(n, e) {
  const t = n.toString();
  return (Do[t] || (Do[t] = e()), Do[t]);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $I {
  constructor(e) {
    ((this.onMessage_ = e),
      (this.pendingResponses = []),
      (this.currentResponseNum = 0),
      (this.closeAfterResponse = -1),
      (this.onClose = null));
  }
  closeAfter(e, t) {
    ((this.closeAfterResponse = e),
      (this.onClose = t),
      this.closeAfterResponse < this.currentResponseNum &&
        (this.onClose(), (this.onClose = null)));
  }
  handleResponse(e, t) {
    for (
      this.pendingResponses[e] = t;
      this.pendingResponses[this.currentResponseNum];

    ) {
      const i = this.pendingResponses[this.currentResponseNum];
      delete this.pendingResponses[this.currentResponseNum];
      for (let s = 0; s < i.length; ++s)
        i[s] &&
          ys(() => {
            this.onMessage_(i[s]);
          });
      if (this.currentResponseNum === this.closeAfterResponse) {
        this.onClose && (this.onClose(), (this.onClose = null));
        break;
      }
      this.currentResponseNum++;
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const th = 'start',
  HI = 'close',
  GI = 'pLPCommand',
  zI = 'pRTLPCB',
  up = 'id',
  hp = 'pw',
  dp = 'ser',
  KI = 'cb',
  QI = 'seg',
  YI = 'ts',
  XI = 'd',
  JI = 'dframe',
  fp = 1870,
  pp = 30,
  ZI = fp - pp,
  ew = 25e3,
  tw = 3e4;
class Dn {
  constructor(e, t, i, s, r, a, l) {
    ((this.connId = e),
      (this.repoInfo = t),
      (this.applicationId = i),
      (this.appCheckToken = s),
      (this.authToken = r),
      (this.transportSessionId = a),
      (this.lastSessionId = l),
      (this.bytesSent = 0),
      (this.bytesReceived = 0),
      (this.everConnected_ = !1),
      (this.log_ = gs(e)),
      (this.stats_ = vl(t)),
      (this.urlFn = (c) => (
        this.appCheckToken && (c[ua] = this.appCheckToken),
        cp(t, lp, c)
      )));
  }
  open(e, t) {
    ((this.curSegmentNum = 0),
      (this.onDisconnect_ = t),
      (this.myPacketOrderer = new $I(e)),
      (this.isClosed_ = !1),
      (this.connectTimeoutTimer_ = setTimeout(() => {
        (this.log_('Timed out trying to connect.'),
          this.onClosed_(),
          (this.connectTimeoutTimer_ = null));
      }, Math.floor(tw))),
      NI(() => {
        if (this.isClosed_) return;
        this.scriptTagHolder = new El(
          (...r) => {
            const [a, l, c, h, f] = r;
            if ((this.incrementIncomingBytes_(r), !!this.scriptTagHolder))
              if (
                (this.connectTimeoutTimer_ &&
                  (clearTimeout(this.connectTimeoutTimer_),
                  (this.connectTimeoutTimer_ = null)),
                (this.everConnected_ = !0),
                a === th)
              )
                ((this.id = l), (this.password = c));
              else if (a === HI)
                l
                  ? ((this.scriptTagHolder.sendNewPolls = !1),
                    this.myPacketOrderer.closeAfter(l, () => {
                      this.onClosed_();
                    }))
                  : this.onClosed_();
              else throw new Error('Unrecognized command received: ' + a);
          },
          (...r) => {
            const [a, l] = r;
            (this.incrementIncomingBytes_(r),
              this.myPacketOrderer.handleResponse(a, l));
          },
          () => {
            this.onClosed_();
          },
          this.urlFn
        );
        const i = {};
        ((i[th] = 't'),
          (i[dp] = Math.floor(Math.random() * 1e8)),
          this.scriptTagHolder.uniqueCallbackIdentifier &&
            (i[KI] = this.scriptTagHolder.uniqueCallbackIdentifier),
          (i[ep] = yl),
          this.transportSessionId && (i[tp] = this.transportSessionId),
          this.lastSessionId && (i[rp] = this.lastSessionId),
          this.applicationId && (i[op] = this.applicationId),
          this.appCheckToken && (i[ua] = this.appCheckToken),
          typeof location < 'u' &&
            location.hostname &&
            sp.test(location.hostname) &&
            (i[np] = ip));
        const s = this.urlFn(i);
        (this.log_('Connecting via long-poll to ' + s),
          this.scriptTagHolder.addTag(s, () => {}));
      }));
  }
  start() {
    (this.scriptTagHolder.startLongPoll(this.id, this.password),
      this.addDisconnectPingFrame(this.id, this.password));
  }
  static forceAllow() {
    Dn.forceAllow_ = !0;
  }
  static forceDisallow() {
    Dn.forceDisallow_ = !0;
  }
  static isAvailable() {
    return Dn.forceAllow_
      ? !0
      : !Dn.forceDisallow_ &&
          typeof document < 'u' &&
          document.createElement != null &&
          !DI() &&
          !OI();
  }
  markConnectionHealthy() {}
  shutdown_() {
    ((this.isClosed_ = !0),
      this.scriptTagHolder &&
        (this.scriptTagHolder.close(), (this.scriptTagHolder = null)),
      this.myDisconnFrame &&
        (document.body.removeChild(this.myDisconnFrame),
        (this.myDisconnFrame = null)),
      this.connectTimeoutTimer_ &&
        (clearTimeout(this.connectTimeoutTimer_),
        (this.connectTimeoutTimer_ = null)));
  }
  onClosed_() {
    this.isClosed_ ||
      (this.log_('Longpoll is closing itself'),
      this.shutdown_(),
      this.onDisconnect_ &&
        (this.onDisconnect_(this.everConnected_), (this.onDisconnect_ = null)));
  }
  close() {
    this.isClosed_ ||
      (this.log_('Longpoll is being closed.'), this.shutdown_());
  }
  send(e) {
    const t = Te(e);
    ((this.bytesSent += t.length),
      this.stats_.incrementCounter('bytes_sent', t.length));
    const i = Vh(t),
      s = Jf(i, ZI);
    for (let r = 0; r < s.length; r++)
      (this.scriptTagHolder.enqueueSegment(this.curSegmentNum, s.length, s[r]),
        this.curSegmentNum++);
  }
  addDisconnectPingFrame(e, t) {
    this.myDisconnFrame = document.createElement('iframe');
    const i = {};
    ((i[JI] = 't'),
      (i[up] = e),
      (i[hp] = t),
      (this.myDisconnFrame.src = this.urlFn(i)),
      (this.myDisconnFrame.style.display = 'none'),
      document.body.appendChild(this.myDisconnFrame));
  }
  incrementIncomingBytes_(e) {
    const t = Te(e).length;
    ((this.bytesReceived += t),
      this.stats_.incrementCounter('bytes_received', t));
  }
}
class El {
  constructor(e, t, i, s) {
    ((this.onDisconnect = i),
      (this.urlFn = s),
      (this.outstandingRequests = new Set()),
      (this.pendingSegs = []),
      (this.currentSerial = Math.floor(Math.random() * 1e8)),
      (this.sendNewPolls = !0));
    {
      ((this.uniqueCallbackIdentifier = SI()),
        (window[GI + this.uniqueCallbackIdentifier] = e),
        (window[zI + this.uniqueCallbackIdentifier] = t),
        (this.myIFrame = El.createIFrame_()));
      let r = '';
      this.myIFrame.src &&
        this.myIFrame.src.substr(0, 11) === 'javascript:' &&
        (r = '<script>document.domain="' + document.domain + '";<\/script>');
      const a = '<html><body>' + r + '</body></html>';
      try {
        (this.myIFrame.doc.open(),
          this.myIFrame.doc.write(a),
          this.myIFrame.doc.close());
      } catch (l) {
        (De('frame writing exception'), l.stack && De(l.stack), De(l));
      }
    }
  }
  static createIFrame_() {
    const e = document.createElement('iframe');
    if (((e.style.display = 'none'), document.body)) {
      document.body.appendChild(e);
      try {
        e.contentWindow.document || De('No IE domain setting required');
      } catch {
        const i = document.domain;
        e.src =
          "javascript:void((function(){document.open();document.domain='" +
          i +
          "';document.close();})())";
      }
    } else
      throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
    return (
      e.contentDocument
        ? (e.doc = e.contentDocument)
        : e.contentWindow
          ? (e.doc = e.contentWindow.document)
          : e.document && (e.doc = e.document),
      e
    );
  }
  close() {
    ((this.alive = !1),
      this.myIFrame &&
        ((this.myIFrame.doc.body.textContent = ''),
        setTimeout(() => {
          this.myIFrame !== null &&
            (document.body.removeChild(this.myIFrame), (this.myIFrame = null));
        }, Math.floor(0))));
    const e = this.onDisconnect;
    e && ((this.onDisconnect = null), e());
  }
  startLongPoll(e, t) {
    for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(); );
  }
  newRequest_() {
    if (
      this.alive &&
      this.sendNewPolls &&
      this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)
    ) {
      this.currentSerial++;
      const e = {};
      ((e[up] = this.myID), (e[hp] = this.myPW), (e[dp] = this.currentSerial));
      let t = this.urlFn(e),
        i = '',
        s = 0;
      for (
        ;
        this.pendingSegs.length > 0 &&
        this.pendingSegs[0].d.length + pp + i.length <= fp;

      ) {
        const a = this.pendingSegs.shift();
        ((i =
          i +
          '&' +
          QI +
          s +
          '=' +
          a.seg +
          '&' +
          YI +
          s +
          '=' +
          a.ts +
          '&' +
          XI +
          s +
          '=' +
          a.d),
          s++);
      }
      return ((t = t + i), this.addLongPollTag_(t, this.currentSerial), !0);
    } else return !1;
  }
  enqueueSegment(e, t, i) {
    (this.pendingSegs.push({ seg: e, ts: t, d: i }),
      this.alive && this.newRequest_());
  }
  addLongPollTag_(e, t) {
    this.outstandingRequests.add(t);
    const i = () => {
        (this.outstandingRequests.delete(t), this.newRequest_());
      },
      s = setTimeout(i, Math.floor(ew)),
      r = () => {
        (clearTimeout(s), i());
      };
    this.addTag(e, r);
  }
  addTag(e, t) {
    setTimeout(() => {
      try {
        if (!this.sendNewPolls) return;
        const i = this.myIFrame.doc.createElement('script');
        ((i.type = 'text/javascript'),
          (i.async = !0),
          (i.src = e),
          (i.onload = i.onreadystatechange =
            function () {
              const s = i.readyState;
              (!s || s === 'loaded' || s === 'complete') &&
                ((i.onload = i.onreadystatechange = null),
                i.parentNode && i.parentNode.removeChild(i),
                t());
            }),
          (i.onerror = () => {
            (De('Long-poll script failed to load: ' + e),
              (this.sendNewPolls = !1),
              this.close());
          }),
          this.myIFrame.doc.body.appendChild(i));
      } catch {}
    }, Math.floor(1));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const nw = 16384,
  iw = 45e3;
let vr = null;
typeof MozWebSocket < 'u'
  ? (vr = MozWebSocket)
  : typeof WebSocket < 'u' && (vr = WebSocket);
class Ke {
  constructor(e, t, i, s, r, a, l) {
    ((this.connId = e),
      (this.applicationId = i),
      (this.appCheckToken = s),
      (this.authToken = r),
      (this.keepaliveTimer = null),
      (this.frames = null),
      (this.totalFrames = 0),
      (this.bytesSent = 0),
      (this.bytesReceived = 0),
      (this.log_ = gs(this.connId)),
      (this.stats_ = vl(t)),
      (this.connURL = Ke.connectionURL_(t, a, l, s, i)),
      (this.nodeAdmin = t.nodeAdmin));
  }
  static connectionURL_(e, t, i, s, r) {
    const a = {};
    return (
      (a[ep] = yl),
      typeof location < 'u' &&
        location.hostname &&
        sp.test(location.hostname) &&
        (a[np] = ip),
      t && (a[tp] = t),
      i && (a[rp] = i),
      s && (a[ua] = s),
      r && (a[op] = r),
      cp(e, ap, a)
    );
  }
  open(e, t) {
    ((this.onDisconnect = t),
      (this.onMessage = e),
      this.log_('Websocket connecting to ' + this.connURL),
      (this.everConnected_ = !1),
      sn.set('previous_websocket_failure', !0));
    try {
      let i;
      (nm(), (this.mySock = new vr(this.connURL, [], i)));
    } catch (i) {
      this.log_('Error instantiating WebSocket.');
      const s = i.message || i.data;
      (s && this.log_(s), this.onClosed_());
      return;
    }
    ((this.mySock.onopen = () => {
      (this.log_('Websocket connected.'), (this.everConnected_ = !0));
    }),
      (this.mySock.onclose = () => {
        (this.log_('Websocket connection was disconnected.'),
          (this.mySock = null),
          this.onClosed_());
      }),
      (this.mySock.onmessage = (i) => {
        this.handleIncomingFrame(i);
      }),
      (this.mySock.onerror = (i) => {
        this.log_('WebSocket error.  Closing connection.');
        const s = i.message || i.data;
        (s && this.log_(s), this.onClosed_());
      }));
  }
  start() {}
  static forceDisallow() {
    Ke.forceDisallow_ = !0;
  }
  static isAvailable() {
    let e = !1;
    if (typeof navigator < 'u' && navigator.userAgent) {
      const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
        i = navigator.userAgent.match(t);
      i && i.length > 1 && parseFloat(i[1]) < 4.4 && (e = !0);
    }
    return !e && vr !== null && !Ke.forceDisallow_;
  }
  static previouslyFailed() {
    return sn.isInMemoryStorage || sn.get('previous_websocket_failure') === !0;
  }
  markConnectionHealthy() {
    sn.remove('previous_websocket_failure');
  }
  appendFrame_(e) {
    if ((this.frames.push(e), this.frames.length === this.totalFrames)) {
      const t = this.frames.join('');
      this.frames = null;
      const i = $i(t);
      this.onMessage(i);
    }
  }
  handleNewFrameCount_(e) {
    ((this.totalFrames = e), (this.frames = []));
  }
  extractFrameCount_(e) {
    if (
      (D(this.frames === null, 'We already have a frame buffer'), e.length <= 6)
    ) {
      const t = Number(e);
      if (!isNaN(t)) return (this.handleNewFrameCount_(t), null);
    }
    return (this.handleNewFrameCount_(1), e);
  }
  handleIncomingFrame(e) {
    if (this.mySock === null) return;
    const t = e.data;
    if (
      ((this.bytesReceived += t.length),
      this.stats_.incrementCounter('bytes_received', t.length),
      this.resetKeepAlive(),
      this.frames !== null)
    )
      this.appendFrame_(t);
    else {
      const i = this.extractFrameCount_(t);
      i !== null && this.appendFrame_(i);
    }
  }
  send(e) {
    this.resetKeepAlive();
    const t = Te(e);
    ((this.bytesSent += t.length),
      this.stats_.incrementCounter('bytes_sent', t.length));
    const i = Jf(t, nw);
    i.length > 1 && this.sendString_(String(i.length));
    for (let s = 0; s < i.length; s++) this.sendString_(i[s]);
  }
  shutdown_() {
    ((this.isClosed_ = !0),
      this.keepaliveTimer &&
        (clearInterval(this.keepaliveTimer), (this.keepaliveTimer = null)),
      this.mySock && (this.mySock.close(), (this.mySock = null)));
  }
  onClosed_() {
    this.isClosed_ ||
      (this.log_('WebSocket is closing itself'),
      this.shutdown_(),
      this.onDisconnect &&
        (this.onDisconnect(this.everConnected_), (this.onDisconnect = null)));
  }
  close() {
    this.isClosed_ ||
      (this.log_('WebSocket is being closed'), this.shutdown_());
  }
  resetKeepAlive() {
    (clearInterval(this.keepaliveTimer),
      (this.keepaliveTimer = setInterval(() => {
        (this.mySock && this.sendString_('0'), this.resetKeepAlive());
      }, Math.floor(iw))));
  }
  sendString_(e) {
    try {
      this.mySock.send(e);
    } catch (t) {
      (this.log_(
        'Exception thrown from WebSocket.send():',
        t.message || t.data,
        'Closing connection.'
      ),
        setTimeout(this.onClosed_.bind(this), 0));
    }
  }
}
Ke.responsesRequiredToBeHealthy = 2;
Ke.healthyTimeout = 3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ts {
  constructor(e) {
    this.initTransports_(e);
  }
  static get ALL_TRANSPORTS() {
    return [Dn, Ke];
  }
  static get IS_TRANSPORT_INITIALIZED() {
    return this.globalTransportInitialized_;
  }
  initTransports_(e) {
    const t = Ke && Ke.isAvailable();
    let i = t && !Ke.previouslyFailed();
    if (
      (e.webSocketOnly &&
        (t ||
          je(
            "wss:// URL used, but browser isn't known to support websockets.  Trying anyway."
          ),
        (i = !0)),
      i)
    )
      this.transports_ = [Ke];
    else {
      const s = (this.transports_ = []);
      for (const r of ts.ALL_TRANSPORTS) r && r.isAvailable() && s.push(r);
      ts.globalTransportInitialized_ = !0;
    }
  }
  initialTransport() {
    if (this.transports_.length > 0) return this.transports_[0];
    throw new Error('No transports available');
  }
  upgradeTransport() {
    return this.transports_.length > 1 ? this.transports_[1] : null;
  }
}
ts.globalTransportInitialized_ = !1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const sw = 6e4,
  rw = 5e3,
  ow = 10 * 1024,
  aw = 100 * 1024,
  Oo = 't',
  nh = 'd',
  lw = 's',
  ih = 'r',
  cw = 'e',
  sh = 'o',
  rh = 'a',
  oh = 'n',
  ah = 'p',
  uw = 'h';
class hw {
  constructor(e, t, i, s, r, a, l, c, h, f) {
    ((this.id = e),
      (this.repoInfo_ = t),
      (this.applicationId_ = i),
      (this.appCheckToken_ = s),
      (this.authToken_ = r),
      (this.onMessage_ = a),
      (this.onReady_ = l),
      (this.onDisconnect_ = c),
      (this.onKill_ = h),
      (this.lastSessionId = f),
      (this.connectionCount = 0),
      (this.pendingDataMessages = []),
      (this.state_ = 0),
      (this.log_ = gs('c:' + this.id + ':')),
      (this.transportManager_ = new ts(t)),
      this.log_('Connection created'),
      this.start_());
  }
  start_() {
    const e = this.transportManager_.initialTransport();
    ((this.conn_ = new e(
      this.nextTransportId_(),
      this.repoInfo_,
      this.applicationId_,
      this.appCheckToken_,
      this.authToken_,
      null,
      this.lastSessionId
    )),
      (this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0));
    const t = this.connReceiver_(this.conn_),
      i = this.disconnReceiver_(this.conn_);
    ((this.tx_ = this.conn_),
      (this.rx_ = this.conn_),
      (this.secondaryConn_ = null),
      (this.isHealthy_ = !1),
      setTimeout(() => {
        this.conn_ && this.conn_.open(t, i);
      }, Math.floor(0)));
    const s = e.healthyTimeout || 0;
    s > 0 &&
      (this.healthyTimeout_ = qi(() => {
        ((this.healthyTimeout_ = null),
          this.isHealthy_ ||
            (this.conn_ && this.conn_.bytesReceived > aw
              ? (this.log_(
                  'Connection exceeded healthy timeout but has received ' +
                    this.conn_.bytesReceived +
                    ' bytes.  Marking connection healthy.'
                ),
                (this.isHealthy_ = !0),
                this.conn_.markConnectionHealthy())
              : this.conn_ && this.conn_.bytesSent > ow
                ? this.log_(
                    'Connection exceeded healthy timeout but has sent ' +
                      this.conn_.bytesSent +
                      ' bytes.  Leaving connection alive.'
                  )
                : (this.log_('Closing unhealthy connection after timeout.'),
                  this.close())));
      }, Math.floor(s)));
  }
  nextTransportId_() {
    return 'c:' + this.id + ':' + this.connectionCount++;
  }
  disconnReceiver_(e) {
    return (t) => {
      e === this.conn_
        ? this.onConnectionLost_(t)
        : e === this.secondaryConn_
          ? (this.log_('Secondary connection lost.'),
            this.onSecondaryConnectionLost_())
          : this.log_('closing an old connection');
    };
  }
  connReceiver_(e) {
    return (t) => {
      this.state_ !== 2 &&
        (e === this.rx_
          ? this.onPrimaryMessageReceived_(t)
          : e === this.secondaryConn_
            ? this.onSecondaryMessageReceived_(t)
            : this.log_('message on old connection'));
    };
  }
  sendRequest(e) {
    const t = { t: 'd', d: e };
    this.sendData_(t);
  }
  tryCleanupConnection() {
    this.tx_ === this.secondaryConn_ &&
      this.rx_ === this.secondaryConn_ &&
      (this.log_(
        'cleaning up and promoting a connection: ' + this.secondaryConn_.connId
      ),
      (this.conn_ = this.secondaryConn_),
      (this.secondaryConn_ = null));
  }
  onSecondaryControl_(e) {
    if (Oo in e) {
      const t = e[Oo];
      t === rh
        ? this.upgradeIfSecondaryHealthy_()
        : t === ih
          ? (this.log_('Got a reset on secondary, closing it'),
            this.secondaryConn_.close(),
            (this.tx_ === this.secondaryConn_ ||
              this.rx_ === this.secondaryConn_) &&
              this.close())
          : t === sh &&
            (this.log_('got pong on secondary.'),
            this.secondaryResponsesRequired_--,
            this.upgradeIfSecondaryHealthy_());
    }
  }
  onSecondaryMessageReceived_(e) {
    const t = Ri('t', e),
      i = Ri('d', e);
    if (t === 'c') this.onSecondaryControl_(i);
    else if (t === 'd') this.pendingDataMessages.push(i);
    else throw new Error('Unknown protocol layer: ' + t);
  }
  upgradeIfSecondaryHealthy_() {
    this.secondaryResponsesRequired_ <= 0
      ? (this.log_('Secondary connection is healthy.'),
        (this.isHealthy_ = !0),
        this.secondaryConn_.markConnectionHealthy(),
        this.proceedWithUpgrade_())
      : (this.log_('sending ping on secondary.'),
        this.secondaryConn_.send({ t: 'c', d: { t: ah, d: {} } }));
  }
  proceedWithUpgrade_() {
    (this.secondaryConn_.start(),
      this.log_('sending client ack on secondary'),
      this.secondaryConn_.send({ t: 'c', d: { t: rh, d: {} } }),
      this.log_('Ending transmission on primary'),
      this.conn_.send({ t: 'c', d: { t: oh, d: {} } }),
      (this.tx_ = this.secondaryConn_),
      this.tryCleanupConnection());
  }
  onPrimaryMessageReceived_(e) {
    const t = Ri('t', e),
      i = Ri('d', e);
    t === 'c' ? this.onControl_(i) : t === 'd' && this.onDataMessage_(i);
  }
  onDataMessage_(e) {
    (this.onPrimaryResponse_(), this.onMessage_(e));
  }
  onPrimaryResponse_() {
    this.isHealthy_ ||
      (this.primaryResponsesRequired_--,
      this.primaryResponsesRequired_ <= 0 &&
        (this.log_('Primary connection is healthy.'),
        (this.isHealthy_ = !0),
        this.conn_.markConnectionHealthy()));
  }
  onControl_(e) {
    const t = Ri(Oo, e);
    if (nh in e) {
      const i = e[nh];
      if (t === uw) {
        const s = Object.assign({}, i);
        (this.repoInfo_.isUsingEmulator && (s.h = this.repoInfo_.host),
          this.onHandshake_(s));
      } else if (t === oh) {
        (this.log_('recvd end transmission on primary'),
          (this.rx_ = this.secondaryConn_));
        for (let s = 0; s < this.pendingDataMessages.length; ++s)
          this.onDataMessage_(this.pendingDataMessages[s]);
        ((this.pendingDataMessages = []), this.tryCleanupConnection());
      } else
        t === lw
          ? this.onConnectionShutdown_(i)
          : t === ih
            ? this.onReset_(i)
            : t === cw
              ? ca('Server Error: ' + i)
              : t === sh
                ? (this.log_('got pong on primary.'),
                  this.onPrimaryResponse_(),
                  this.sendPingOnPrimaryIfNecessary_())
                : ca('Unknown control packet command: ' + t);
    }
  }
  onHandshake_(e) {
    const t = e.ts,
      i = e.v,
      s = e.h;
    ((this.sessionId = e.s),
      (this.repoInfo_.host = s),
      this.state_ === 0 &&
        (this.conn_.start(),
        this.onConnectionEstablished_(this.conn_, t),
        yl !== i && je('Protocol version mismatch detected'),
        this.tryStartUpgrade_()));
  }
  tryStartUpgrade_() {
    const e = this.transportManager_.upgradeTransport();
    e && this.startUpgrade_(e);
  }
  startUpgrade_(e) {
    ((this.secondaryConn_ = new e(
      this.nextTransportId_(),
      this.repoInfo_,
      this.applicationId_,
      this.appCheckToken_,
      this.authToken_,
      this.sessionId
    )),
      (this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0));
    const t = this.connReceiver_(this.secondaryConn_),
      i = this.disconnReceiver_(this.secondaryConn_);
    (this.secondaryConn_.open(t, i),
      qi(() => {
        this.secondaryConn_ &&
          (this.log_('Timed out trying to upgrade.'),
          this.secondaryConn_.close());
      }, Math.floor(sw)));
  }
  onReset_(e) {
    (this.log_('Reset packet received.  New host: ' + e),
      (this.repoInfo_.host = e),
      this.state_ === 1
        ? this.close()
        : (this.closeConnections_(), this.start_()));
  }
  onConnectionEstablished_(e, t) {
    (this.log_('Realtime connection established.'),
      (this.conn_ = e),
      (this.state_ = 1),
      this.onReady_ &&
        (this.onReady_(t, this.sessionId), (this.onReady_ = null)),
      this.primaryResponsesRequired_ === 0
        ? (this.log_('Primary connection is healthy.'), (this.isHealthy_ = !0))
        : qi(() => {
            this.sendPingOnPrimaryIfNecessary_();
          }, Math.floor(rw)));
  }
  sendPingOnPrimaryIfNecessary_() {
    !this.isHealthy_ &&
      this.state_ === 1 &&
      (this.log_('sending ping on primary.'),
      this.sendData_({ t: 'c', d: { t: ah, d: {} } }));
  }
  onSecondaryConnectionLost_() {
    const e = this.secondaryConn_;
    ((this.secondaryConn_ = null),
      (this.tx_ === e || this.rx_ === e) && this.close());
  }
  onConnectionLost_(e) {
    ((this.conn_ = null),
      !e && this.state_ === 0
        ? (this.log_('Realtime connection failed.'),
          this.repoInfo_.isCacheableHost() &&
            (sn.remove('host:' + this.repoInfo_.host),
            (this.repoInfo_.internalHost = this.repoInfo_.host)))
        : this.state_ === 1 && this.log_('Realtime connection lost.'),
      this.close());
  }
  onConnectionShutdown_(e) {
    (this.log_('Connection shutdown command received. Shutting down...'),
      this.onKill_ && (this.onKill_(e), (this.onKill_ = null)),
      (this.onDisconnect_ = null),
      this.close());
  }
  sendData_(e) {
    if (this.state_ !== 1) throw 'Connection is not connected';
    this.tx_.send(e);
  }
  close() {
    this.state_ !== 2 &&
      (this.log_('Closing realtime connection.'),
      (this.state_ = 2),
      this.closeConnections_(),
      this.onDisconnect_ &&
        (this.onDisconnect_(), (this.onDisconnect_ = null)));
  }
  closeConnections_() {
    (this.log_('Shutting down all connections'),
      this.conn_ && (this.conn_.close(), (this.conn_ = null)),
      this.secondaryConn_ &&
        (this.secondaryConn_.close(), (this.secondaryConn_ = null)),
      this.healthyTimeout_ &&
        (clearTimeout(this.healthyTimeout_), (this.healthyTimeout_ = null)));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _p {
  put(e, t, i, s) {}
  merge(e, t, i, s) {}
  refreshAuthToken(e) {}
  refreshAppCheckToken(e) {}
  onDisconnectPut(e, t, i) {}
  onDisconnectMerge(e, t, i) {}
  onDisconnectCancel(e, t) {}
  reportStats(e) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class mp {
  constructor(e) {
    ((this.allowedEvents_ = e),
      (this.listeners_ = {}),
      D(Array.isArray(e) && e.length > 0, 'Requires a non-empty array'));
  }
  trigger(e, ...t) {
    if (Array.isArray(this.listeners_[e])) {
      const i = [...this.listeners_[e]];
      for (let s = 0; s < i.length; s++) i[s].callback.apply(i[s].context, t);
    }
  }
  on(e, t, i) {
    (this.validateEventType_(e),
      (this.listeners_[e] = this.listeners_[e] || []),
      this.listeners_[e].push({ callback: t, context: i }));
    const s = this.getInitialEvent(e);
    s && t.apply(i, s);
  }
  off(e, t, i) {
    this.validateEventType_(e);
    const s = this.listeners_[e] || [];
    for (let r = 0; r < s.length; r++)
      if (s[r].callback === t && (!i || i === s[r].context)) {
        s.splice(r, 1);
        return;
      }
  }
  validateEventType_(e) {
    D(
      this.allowedEvents_.find((t) => t === e),
      'Unknown event: ' + e
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Er extends mp {
  constructor() {
    (super(['online']),
      (this.online_ = !0),
      typeof window < 'u' &&
        typeof window.addEventListener < 'u' &&
        !Aa() &&
        (window.addEventListener(
          'online',
          () => {
            this.online_ || ((this.online_ = !0), this.trigger('online', !0));
          },
          !1
        ),
        window.addEventListener(
          'offline',
          () => {
            this.online_ && ((this.online_ = !1), this.trigger('online', !1));
          },
          !1
        )));
  }
  static getInstance() {
    return new Er();
  }
  getInitialEvent(e) {
    return (D(e === 'online', 'Unknown event type: ' + e), [this.online_]);
  }
  currentlyOnline() {
    return this.online_;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const lh = 32,
  ch = 768;
class oe {
  constructor(e, t) {
    if (t === void 0) {
      this.pieces_ = e.split('/');
      let i = 0;
      for (let s = 0; s < this.pieces_.length; s++)
        this.pieces_[s].length > 0 &&
          ((this.pieces_[i] = this.pieces_[s]), i++);
      ((this.pieces_.length = i), (this.pieceNum_ = 0));
    } else ((this.pieces_ = e), (this.pieceNum_ = t));
  }
  toString() {
    let e = '';
    for (let t = this.pieceNum_; t < this.pieces_.length; t++)
      this.pieces_[t] !== '' && (e += '/' + this.pieces_[t]);
    return e || '/';
  }
}
function ee() {
  return new oe('');
}
function K(n) {
  return n.pieceNum_ >= n.pieces_.length ? null : n.pieces_[n.pieceNum_];
}
function Ht(n) {
  return n.pieces_.length - n.pieceNum_;
}
function re(n) {
  let e = n.pieceNum_;
  return (e < n.pieces_.length && e++, new oe(n.pieces_, e));
}
function gp(n) {
  return n.pieceNum_ < n.pieces_.length
    ? n.pieces_[n.pieces_.length - 1]
    : null;
}
function dw(n) {
  let e = '';
  for (let t = n.pieceNum_; t < n.pieces_.length; t++)
    n.pieces_[t] !== '' &&
      (e += '/' + encodeURIComponent(String(n.pieces_[t])));
  return e || '/';
}
function yp(n, e = 0) {
  return n.pieces_.slice(n.pieceNum_ + e);
}
function vp(n) {
  if (n.pieceNum_ >= n.pieces_.length) return null;
  const e = [];
  for (let t = n.pieceNum_; t < n.pieces_.length - 1; t++) e.push(n.pieces_[t]);
  return new oe(e, 0);
}
function ve(n, e) {
  const t = [];
  for (let i = n.pieceNum_; i < n.pieces_.length; i++) t.push(n.pieces_[i]);
  if (e instanceof oe)
    for (let i = e.pieceNum_; i < e.pieces_.length; i++) t.push(e.pieces_[i]);
  else {
    const i = e.split('/');
    for (let s = 0; s < i.length; s++) i[s].length > 0 && t.push(i[s]);
  }
  return new oe(t, 0);
}
function H(n) {
  return n.pieceNum_ >= n.pieces_.length;
}
function He(n, e) {
  const t = K(n),
    i = K(e);
  if (t === null) return e;
  if (t === i) return He(re(n), re(e));
  throw new Error(
    'INTERNAL ERROR: innerPath (' + e + ') is not within outerPath (' + n + ')'
  );
}
function Ep(n, e) {
  if (Ht(n) !== Ht(e)) return !1;
  for (let t = n.pieceNum_, i = e.pieceNum_; t <= n.pieces_.length; t++, i++)
    if (n.pieces_[t] !== e.pieces_[i]) return !1;
  return !0;
}
function Qe(n, e) {
  let t = n.pieceNum_,
    i = e.pieceNum_;
  if (Ht(n) > Ht(e)) return !1;
  for (; t < n.pieces_.length; ) {
    if (n.pieces_[t] !== e.pieces_[i]) return !1;
    (++t, ++i);
  }
  return !0;
}
class fw {
  constructor(e, t) {
    ((this.errorPrefix_ = t),
      (this.parts_ = yp(e, 0)),
      (this.byteLength_ = Math.max(1, this.parts_.length)));
    for (let i = 0; i < this.parts_.length; i++)
      this.byteLength_ += Pr(this.parts_[i]);
    Tp(this);
  }
}
function pw(n, e) {
  (n.parts_.length > 0 && (n.byteLength_ += 1),
    n.parts_.push(e),
    (n.byteLength_ += Pr(e)),
    Tp(n));
}
function _w(n) {
  const e = n.parts_.pop();
  ((n.byteLength_ -= Pr(e)), n.parts_.length > 0 && (n.byteLength_ -= 1));
}
function Tp(n) {
  if (n.byteLength_ > ch)
    throw new Error(
      n.errorPrefix_ +
        'has a key path longer than ' +
        ch +
        ' bytes (' +
        n.byteLength_ +
        ').'
    );
  if (n.parts_.length > lh)
    throw new Error(
      n.errorPrefix_ +
        'path specified exceeds the maximum depth that can be written (' +
        lh +
        ') or object contains a cycle ' +
        tn(n)
    );
}
function tn(n) {
  return n.parts_.length === 0
    ? ''
    : "in property '" + n.parts_.join('.') + "'";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tl extends mp {
  constructor() {
    super(['visible']);
    let e, t;
    (typeof document < 'u' &&
      typeof document.addEventListener < 'u' &&
      (typeof document.hidden < 'u'
        ? ((t = 'visibilitychange'), (e = 'hidden'))
        : typeof document.mozHidden < 'u'
          ? ((t = 'mozvisibilitychange'), (e = 'mozHidden'))
          : typeof document.msHidden < 'u'
            ? ((t = 'msvisibilitychange'), (e = 'msHidden'))
            : typeof document.webkitHidden < 'u' &&
              ((t = 'webkitvisibilitychange'), (e = 'webkitHidden'))),
      (this.visible_ = !0),
      t &&
        document.addEventListener(
          t,
          () => {
            const i = !document[e];
            i !== this.visible_ &&
              ((this.visible_ = i), this.trigger('visible', i));
          },
          !1
        ));
  }
  static getInstance() {
    return new Tl();
  }
  getInitialEvent(e) {
    return (D(e === 'visible', 'Unknown event type: ' + e), [this.visible_]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ci = 1e3,
  mw = 60 * 5 * 1e3,
  uh = 30 * 1e3,
  gw = 1.3,
  yw = 3e4,
  vw = 'server_kill',
  hh = 3;
class vt extends _p {
  constructor(e, t, i, s, r, a, l, c) {
    if (
      (super(),
      (this.repoInfo_ = e),
      (this.applicationId_ = t),
      (this.onDataUpdate_ = i),
      (this.onConnectStatus_ = s),
      (this.onServerInfoUpdate_ = r),
      (this.authTokenProvider_ = a),
      (this.appCheckTokenProvider_ = l),
      (this.authOverride_ = c),
      (this.id = vt.nextPersistentConnectionId_++),
      (this.log_ = gs('p:' + this.id + ':')),
      (this.interruptReasons_ = {}),
      (this.listens = new Map()),
      (this.outstandingPuts_ = []),
      (this.outstandingGets_ = []),
      (this.outstandingPutCount_ = 0),
      (this.outstandingGetCount_ = 0),
      (this.onDisconnectRequestQueue_ = []),
      (this.connected_ = !1),
      (this.reconnectDelay_ = Ci),
      (this.maxReconnectDelay_ = mw),
      (this.securityDebugCallback_ = null),
      (this.lastSessionId = null),
      (this.establishConnectionTimer_ = null),
      (this.visible_ = !1),
      (this.requestCBHash_ = {}),
      (this.requestNumber_ = 0),
      (this.realtime_ = null),
      (this.authToken_ = null),
      (this.appCheckToken_ = null),
      (this.forceTokenRefresh_ = !1),
      (this.invalidAuthTokenCount_ = 0),
      (this.invalidAppCheckTokenCount_ = 0),
      (this.firstConnection_ = !0),
      (this.lastConnectionAttemptTime_ = null),
      (this.lastConnectionEstablishedTime_ = null),
      c)
    )
      throw new Error(
        'Auth override specified in options, but not supported on non Node.js platforms'
      );
    (Tl.getInstance().on('visible', this.onVisible_, this),
      e.host.indexOf('fblocal') === -1 &&
        Er.getInstance().on('online', this.onOnline_, this));
  }
  sendRequest(e, t, i) {
    const s = ++this.requestNumber_,
      r = { r: s, a: e, b: t };
    (this.log_(Te(r)),
      D(
        this.connected_,
        "sendRequest call when we're not connected not allowed."
      ),
      this.realtime_.sendRequest(r),
      i && (this.requestCBHash_[s] = i));
  }
  get(e) {
    this.initConnection_();
    const t = new wa(),
      s = {
        action: 'g',
        request: { p: e._path.toString(), q: e._queryObject },
        onComplete: (a) => {
          const l = a.d;
          a.s === 'ok' ? t.resolve(l) : t.reject(l);
        },
      };
    (this.outstandingGets_.push(s), this.outstandingGetCount_++);
    const r = this.outstandingGets_.length - 1;
    return (this.connected_ && this.sendGet_(r), t.promise);
  }
  listen(e, t, i, s) {
    this.initConnection_();
    const r = e._queryIdentifier,
      a = e._path.toString();
    (this.log_('Listen called for ' + a + ' ' + r),
      this.listens.has(a) || this.listens.set(a, new Map()),
      D(
        e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
        'listen() called for non-default but complete query'
      ),
      D(
        !this.listens.get(a).has(r),
        'listen() called twice for same path/queryId.'
      ));
    const l = { onComplete: s, hashFn: t, query: e, tag: i };
    (this.listens.get(a).set(r, l), this.connected_ && this.sendListen_(l));
  }
  sendGet_(e) {
    const t = this.outstandingGets_[e];
    this.sendRequest('g', t.request, (i) => {
      (delete this.outstandingGets_[e],
        this.outstandingGetCount_--,
        this.outstandingGetCount_ === 0 && (this.outstandingGets_ = []),
        t.onComplete && t.onComplete(i));
    });
  }
  sendListen_(e) {
    const t = e.query,
      i = t._path.toString(),
      s = t._queryIdentifier;
    this.log_('Listen on ' + i + ' for ' + s);
    const r = { p: i },
      a = 'q';
    (e.tag && ((r.q = t._queryObject), (r.t = e.tag)),
      (r.h = e.hashFn()),
      this.sendRequest(a, r, (l) => {
        const c = l.d,
          h = l.s;
        (vt.warnOnListenWarnings_(c, t),
          (this.listens.get(i) && this.listens.get(i).get(s)) === e &&
            (this.log_('listen response', l),
            h !== 'ok' && this.removeListen_(i, s),
            e.onComplete && e.onComplete(h, c)));
      }));
  }
  static warnOnListenWarnings_(e, t) {
    if (e && typeof e == 'object' && Rt(e, 'w')) {
      const i = Bn(e, 'w');
      if (Array.isArray(i) && ~i.indexOf('no_index')) {
        const s = '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
          r = t._path.toString();
        je(
          `Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`
        );
      }
    }
  }
  refreshAuthToken(e) {
    ((this.authToken_ = e),
      this.log_('Auth token refreshed'),
      this.authToken_
        ? this.tryAuth()
        : this.connected_ && this.sendRequest('unauth', {}, () => {}),
      this.reduceReconnectDelayIfAdminCredential_(e));
  }
  reduceReconnectDelayIfAdminCredential_(e) {
    ((e && e.length === 40) || um(e)) &&
      (this.log_(
        'Admin auth credential detected.  Reducing max reconnect time.'
      ),
      (this.maxReconnectDelay_ = uh));
  }
  refreshAppCheckToken(e) {
    ((this.appCheckToken_ = e),
      this.log_('App check token refreshed'),
      this.appCheckToken_
        ? this.tryAppCheck()
        : this.connected_ && this.sendRequest('unappeck', {}, () => {}));
  }
  tryAuth() {
    if (this.connected_ && this.authToken_) {
      const e = this.authToken_,
        t = cm(e) ? 'auth' : 'gauth',
        i = { cred: e };
      (this.authOverride_ === null
        ? (i.noauth = !0)
        : typeof this.authOverride_ == 'object' &&
          (i.authvar = this.authOverride_),
        this.sendRequest(t, i, (s) => {
          const r = s.s,
            a = s.d || 'error';
          this.authToken_ === e &&
            (r === 'ok'
              ? (this.invalidAuthTokenCount_ = 0)
              : this.onAuthRevoked_(r, a));
        }));
    }
  }
  tryAppCheck() {
    this.connected_ &&
      this.appCheckToken_ &&
      this.sendRequest('appcheck', { token: this.appCheckToken_ }, (e) => {
        const t = e.s,
          i = e.d || 'error';
        t === 'ok'
          ? (this.invalidAppCheckTokenCount_ = 0)
          : this.onAppCheckRevoked_(t, i);
      });
  }
  unlisten(e, t) {
    const i = e._path.toString(),
      s = e._queryIdentifier;
    (this.log_('Unlisten called for ' + i + ' ' + s),
      D(
        e._queryParams.isDefault() || !e._queryParams.loadsAllData(),
        'unlisten() called for non-default but complete query'
      ),
      this.removeListen_(i, s) &&
        this.connected_ &&
        this.sendUnlisten_(i, s, e._queryObject, t));
  }
  sendUnlisten_(e, t, i, s) {
    this.log_('Unlisten on ' + e + ' for ' + t);
    const r = { p: e },
      a = 'n';
    (s && ((r.q = i), (r.t = s)), this.sendRequest(a, r));
  }
  onDisconnectPut(e, t, i) {
    (this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_('o', e, t, i)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: 'o',
            data: t,
            onComplete: i,
          }));
  }
  onDisconnectMerge(e, t, i) {
    (this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_('om', e, t, i)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: 'om',
            data: t,
            onComplete: i,
          }));
  }
  onDisconnectCancel(e, t) {
    (this.initConnection_(),
      this.connected_
        ? this.sendOnDisconnect_('oc', e, null, t)
        : this.onDisconnectRequestQueue_.push({
            pathString: e,
            action: 'oc',
            data: null,
            onComplete: t,
          }));
  }
  sendOnDisconnect_(e, t, i, s) {
    const r = { p: t, d: i };
    (this.log_('onDisconnect ' + e, r),
      this.sendRequest(e, r, (a) => {
        s &&
          setTimeout(() => {
            s(a.s, a.d);
          }, Math.floor(0));
      }));
  }
  put(e, t, i, s) {
    this.putInternal('p', e, t, i, s);
  }
  merge(e, t, i, s) {
    this.putInternal('m', e, t, i, s);
  }
  putInternal(e, t, i, s, r) {
    this.initConnection_();
    const a = { p: t, d: i };
    (r !== void 0 && (a.h = r),
      this.outstandingPuts_.push({ action: e, request: a, onComplete: s }),
      this.outstandingPutCount_++);
    const l = this.outstandingPuts_.length - 1;
    this.connected_ ? this.sendPut_(l) : this.log_('Buffering put: ' + t);
  }
  sendPut_(e) {
    const t = this.outstandingPuts_[e].action,
      i = this.outstandingPuts_[e].request,
      s = this.outstandingPuts_[e].onComplete;
    ((this.outstandingPuts_[e].queued = this.connected_),
      this.sendRequest(t, i, (r) => {
        (this.log_(t + ' response', r),
          delete this.outstandingPuts_[e],
          this.outstandingPutCount_--,
          this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []),
          s && s(r.s, r.d));
      }));
  }
  reportStats(e) {
    if (this.connected_) {
      const t = { c: e };
      (this.log_('reportStats', t),
        this.sendRequest('s', t, (i) => {
          if (i.s !== 'ok') {
            const r = i.d;
            this.log_('reportStats', 'Error sending stats: ' + r);
          }
        }));
    }
  }
  onDataMessage_(e) {
    if ('r' in e) {
      this.log_('from server: ' + Te(e));
      const t = e.r,
        i = this.requestCBHash_[t];
      i && (delete this.requestCBHash_[t], i(e.b));
    } else {
      if ('error' in e) throw 'A server-side error has occurred: ' + e.error;
      'a' in e && this.onDataPush_(e.a, e.b);
    }
  }
  onDataPush_(e, t) {
    (this.log_('handleServerMessage', e, t),
      e === 'd'
        ? this.onDataUpdate_(t.p, t.d, !1, t.t)
        : e === 'm'
          ? this.onDataUpdate_(t.p, t.d, !0, t.t)
          : e === 'c'
            ? this.onListenRevoked_(t.p, t.q)
            : e === 'ac'
              ? this.onAuthRevoked_(t.s, t.d)
              : e === 'apc'
                ? this.onAppCheckRevoked_(t.s, t.d)
                : e === 'sd'
                  ? this.onSecurityDebugPacket_(t)
                  : ca(
                      'Unrecognized action received from server: ' +
                        Te(e) +
                        `
Are you using the latest client?`
                    ));
  }
  onReady_(e, t) {
    (this.log_('connection ready'),
      (this.connected_ = !0),
      (this.lastConnectionEstablishedTime_ = new Date().getTime()),
      this.handleTimestamp_(e),
      (this.lastSessionId = t),
      this.firstConnection_ && this.sendConnectStats_(),
      this.restoreState_(),
      (this.firstConnection_ = !1),
      this.onConnectStatus_(!0));
  }
  scheduleConnect_(e) {
    (D(
      !this.realtime_,
      "Scheduling a connect when we're already connected/ing?"
    ),
      this.establishConnectionTimer_ &&
        clearTimeout(this.establishConnectionTimer_),
      (this.establishConnectionTimer_ = setTimeout(() => {
        ((this.establishConnectionTimer_ = null), this.establishConnection_());
      }, Math.floor(e))));
  }
  initConnection_() {
    !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0);
  }
  onVisible_(e) {
    (e &&
      !this.visible_ &&
      this.reconnectDelay_ === this.maxReconnectDelay_ &&
      (this.log_('Window became visible.  Reducing delay.'),
      (this.reconnectDelay_ = Ci),
      this.realtime_ || this.scheduleConnect_(0)),
      (this.visible_ = e));
  }
  onOnline_(e) {
    e
      ? (this.log_('Browser went online.'),
        (this.reconnectDelay_ = Ci),
        this.realtime_ || this.scheduleConnect_(0))
      : (this.log_('Browser went offline.  Killing connection.'),
        this.realtime_ && this.realtime_.close());
  }
  onRealtimeDisconnect_() {
    if (
      (this.log_('data client disconnected'),
      (this.connected_ = !1),
      (this.realtime_ = null),
      this.cancelSentTransactions_(),
      (this.requestCBHash_ = {}),
      this.shouldReconnect_())
    ) {
      this.visible_
        ? this.lastConnectionEstablishedTime_ &&
          (new Date().getTime() - this.lastConnectionEstablishedTime_ > yw &&
            (this.reconnectDelay_ = Ci),
          (this.lastConnectionEstablishedTime_ = null))
        : (this.log_("Window isn't visible.  Delaying reconnect."),
          (this.reconnectDelay_ = this.maxReconnectDelay_),
          (this.lastConnectionAttemptTime_ = new Date().getTime()));
      const e = new Date().getTime() - this.lastConnectionAttemptTime_;
      let t = Math.max(0, this.reconnectDelay_ - e);
      ((t = Math.random() * t),
        this.log_('Trying to reconnect in ' + t + 'ms'),
        this.scheduleConnect_(t),
        (this.reconnectDelay_ = Math.min(
          this.maxReconnectDelay_,
          this.reconnectDelay_ * gw
        )));
    }
    this.onConnectStatus_(!1);
  }
  async establishConnection_() {
    if (this.shouldReconnect_()) {
      (this.log_('Making a connection attempt'),
        (this.lastConnectionAttemptTime_ = new Date().getTime()),
        (this.lastConnectionEstablishedTime_ = null));
      const e = this.onDataMessage_.bind(this),
        t = this.onReady_.bind(this),
        i = this.onRealtimeDisconnect_.bind(this),
        s = this.id + ':' + vt.nextConnectionId_++,
        r = this.lastSessionId;
      let a = !1,
        l = null;
      const c = function () {
          l ? l.close() : ((a = !0), i());
        },
        h = function (_) {
          (D(l, "sendRequest call when we're not connected not allowed."),
            l.sendRequest(_));
        };
      this.realtime_ = { close: c, sendRequest: h };
      const f = this.forceTokenRefresh_;
      this.forceTokenRefresh_ = !1;
      try {
        const [_, g] = await Promise.all([
          this.authTokenProvider_.getToken(f),
          this.appCheckTokenProvider_.getToken(f),
        ]);
        a
          ? De('getToken() completed but was canceled')
          : (De('getToken() completed. Creating connection.'),
            (this.authToken_ = _ && _.accessToken),
            (this.appCheckToken_ = g && g.token),
            (l = new hw(
              s,
              this.repoInfo_,
              this.applicationId_,
              this.appCheckToken_,
              this.authToken_,
              e,
              t,
              i,
              (R) => {
                (je(R + ' (' + this.repoInfo_.toString() + ')'),
                  this.interrupt(vw));
              },
              r
            )));
      } catch (_) {
        (this.log_('Failed to get token: ' + _),
          a || (this.repoInfo_.nodeAdmin && je(_), c()));
      }
    }
  }
  interrupt(e) {
    (De('Interrupting connection for reason: ' + e),
      (this.interruptReasons_[e] = !0),
      this.realtime_
        ? this.realtime_.close()
        : (this.establishConnectionTimer_ &&
            (clearTimeout(this.establishConnectionTimer_),
            (this.establishConnectionTimer_ = null)),
          this.connected_ && this.onRealtimeDisconnect_()));
  }
  resume(e) {
    (De('Resuming connection for reason: ' + e),
      delete this.interruptReasons_[e],
      Fo(this.interruptReasons_) &&
        ((this.reconnectDelay_ = Ci),
        this.realtime_ || this.scheduleConnect_(0)));
  }
  handleTimestamp_(e) {
    const t = e - new Date().getTime();
    this.onServerInfoUpdate_({ serverTimeOffset: t });
  }
  cancelSentTransactions_() {
    for (let e = 0; e < this.outstandingPuts_.length; e++) {
      const t = this.outstandingPuts_[e];
      t &&
        'h' in t.request &&
        t.queued &&
        (t.onComplete && t.onComplete('disconnect'),
        delete this.outstandingPuts_[e],
        this.outstandingPutCount_--);
    }
    this.outstandingPutCount_ === 0 && (this.outstandingPuts_ = []);
  }
  onListenRevoked_(e, t) {
    let i;
    t ? (i = t.map((r) => gl(r)).join('$')) : (i = 'default');
    const s = this.removeListen_(e, i);
    s && s.onComplete && s.onComplete('permission_denied');
  }
  removeListen_(e, t) {
    const i = new oe(e).toString();
    let s;
    if (this.listens.has(i)) {
      const r = this.listens.get(i);
      ((s = r.get(t)), r.delete(t), r.size === 0 && this.listens.delete(i));
    } else s = void 0;
    return s;
  }
  onAuthRevoked_(e, t) {
    (De('Auth token revoked: ' + e + '/' + t),
      (this.authToken_ = null),
      (this.forceTokenRefresh_ = !0),
      this.realtime_.close(),
      (e === 'invalid_token' || e === 'permission_denied') &&
        (this.invalidAuthTokenCount_++,
        this.invalidAuthTokenCount_ >= hh &&
          ((this.reconnectDelay_ = uh),
          this.authTokenProvider_.notifyForInvalidToken())));
  }
  onAppCheckRevoked_(e, t) {
    (De('App check token revoked: ' + e + '/' + t),
      (this.appCheckToken_ = null),
      (this.forceTokenRefresh_ = !0),
      (e === 'invalid_token' || e === 'permission_denied') &&
        (this.invalidAppCheckTokenCount_++,
        this.invalidAppCheckTokenCount_ >= hh &&
          this.appCheckTokenProvider_.notifyForInvalidToken()));
  }
  onSecurityDebugPacket_(e) {
    this.securityDebugCallback_
      ? this.securityDebugCallback_(e)
      : 'msg' in e &&
        console.log(
          'FIREBASE: ' +
            e.msg.replace(
              `
`,
              `
FIREBASE: `
            )
        );
  }
  restoreState_() {
    (this.tryAuth(), this.tryAppCheck());
    for (const e of this.listens.values())
      for (const t of e.values()) this.sendListen_(t);
    for (let e = 0; e < this.outstandingPuts_.length; e++)
      this.outstandingPuts_[e] && this.sendPut_(e);
    for (; this.onDisconnectRequestQueue_.length; ) {
      const e = this.onDisconnectRequestQueue_.shift();
      this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete);
    }
    for (let e = 0; e < this.outstandingGets_.length; e++)
      this.outstandingGets_[e] && this.sendGet_(e);
  }
  sendConnectStats_() {
    const e = {};
    let t = 'js';
    ((e['sdk.' + t + '.' + Kf.replace(/\./g, '-')] = 1),
      Aa()
        ? (e['framework.cordova'] = 1)
        : Uh() && (e['framework.reactnative'] = 1),
      this.reportStats(e));
  }
  shouldReconnect_() {
    const e = Er.getInstance().currentlyOnline();
    return Fo(this.interruptReasons_) && e;
  }
}
vt.nextPersistentConnectionId_ = 0;
vt.nextConnectionId_ = 0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Q {
  constructor(e, t) {
    ((this.name = e), (this.node = t));
  }
  static Wrap(e, t) {
    return new Q(e, t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zr {
  getCompare() {
    return this.compare.bind(this);
  }
  indexedValueChanged(e, t) {
    const i = new Q(Qn, e),
      s = new Q(Qn, t);
    return this.compare(i, s) !== 0;
  }
  minPost() {
    return Q.MIN;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Hs;
class Ip extends zr {
  static get __EMPTY_NODE() {
    return Hs;
  }
  static set __EMPTY_NODE(e) {
    Hs = e;
  }
  compare(e, t) {
    return si(e.name, t.name);
  }
  isDefinedOn(e) {
    throw Xn('KeyIndex.isDefinedOn not expected to be called.');
  }
  indexedValueChanged(e, t) {
    return !1;
  }
  minPost() {
    return Q.MIN;
  }
  maxPost() {
    return new Q(pn, Hs);
  }
  makePost(e, t) {
    return (
      D(typeof e == 'string', 'KeyIndex indexValue must always be a string.'),
      new Q(e, Hs)
    );
  }
  toString() {
    return '.key';
  }
}
const Un = new Ip();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Gs {
  constructor(e, t, i, s, r = null) {
    ((this.isReverse_ = s),
      (this.resultGenerator_ = r),
      (this.nodeStack_ = []));
    let a = 1;
    for (; !e.isEmpty(); )
      if (((e = e), (a = t ? i(e.key, t) : 1), s && (a *= -1), a < 0))
        this.isReverse_ ? (e = e.left) : (e = e.right);
      else if (a === 0) {
        this.nodeStack_.push(e);
        break;
      } else
        (this.nodeStack_.push(e),
          this.isReverse_ ? (e = e.right) : (e = e.left));
  }
  getNext() {
    if (this.nodeStack_.length === 0) return null;
    let e = this.nodeStack_.pop(),
      t;
    if (
      (this.resultGenerator_
        ? (t = this.resultGenerator_(e.key, e.value))
        : (t = { key: e.key, value: e.value }),
      this.isReverse_)
    )
      for (e = e.left; !e.isEmpty(); ) (this.nodeStack_.push(e), (e = e.right));
    else
      for (e = e.right; !e.isEmpty(); ) (this.nodeStack_.push(e), (e = e.left));
    return t;
  }
  hasNext() {
    return this.nodeStack_.length > 0;
  }
  peek() {
    if (this.nodeStack_.length === 0) return null;
    const e = this.nodeStack_[this.nodeStack_.length - 1];
    return this.resultGenerator_
      ? this.resultGenerator_(e.key, e.value)
      : { key: e.key, value: e.value };
  }
}
class ye {
  constructor(e, t, i, s, r) {
    ((this.key = e),
      (this.value = t),
      (this.color = i ?? ye.RED),
      (this.left = s ?? Be.EMPTY_NODE),
      (this.right = r ?? Be.EMPTY_NODE));
  }
  copy(e, t, i, s, r) {
    return new ye(
      e ?? this.key,
      t ?? this.value,
      i ?? this.color,
      s ?? this.left,
      r ?? this.right
    );
  }
  count() {
    return this.left.count() + 1 + this.right.count();
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      !!e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min_() {
    return this.left.isEmpty() ? this : this.left.min_();
  }
  minKey() {
    return this.min_().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, t, i) {
    let s = this;
    const r = i(e, s.key);
    return (
      r < 0
        ? (s = s.copy(null, null, null, s.left.insert(e, t, i), null))
        : r === 0
          ? (s = s.copy(null, t, null, null, null))
          : (s = s.copy(null, null, null, null, s.right.insert(e, t, i))),
      s.fixUp_()
    );
  }
  removeMin_() {
    if (this.left.isEmpty()) return Be.EMPTY_NODE;
    let e = this;
    return (
      !e.left.isRed_() && !e.left.left.isRed_() && (e = e.moveRedLeft_()),
      (e = e.copy(null, null, null, e.left.removeMin_(), null)),
      e.fixUp_()
    );
  }
  remove(e, t) {
    let i, s;
    if (((i = this), t(e, i.key) < 0))
      (!i.left.isEmpty() &&
        !i.left.isRed_() &&
        !i.left.left.isRed_() &&
        (i = i.moveRedLeft_()),
        (i = i.copy(null, null, null, i.left.remove(e, t), null)));
    else {
      if (
        (i.left.isRed_() && (i = i.rotateRight_()),
        !i.right.isEmpty() &&
          !i.right.isRed_() &&
          !i.right.left.isRed_() &&
          (i = i.moveRedRight_()),
        t(e, i.key) === 0)
      ) {
        if (i.right.isEmpty()) return Be.EMPTY_NODE;
        ((s = i.right.min_()),
          (i = i.copy(s.key, s.value, null, null, i.right.removeMin_())));
      }
      i = i.copy(null, null, null, null, i.right.remove(e, t));
    }
    return i.fixUp_();
  }
  isRed_() {
    return this.color;
  }
  fixUp_() {
    let e = this;
    return (
      e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()),
      e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()),
      e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()),
      e
    );
  }
  moveRedLeft_() {
    let e = this.colorFlip_();
    return (
      e.right.left.isRed_() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight_())),
        (e = e.rotateLeft_()),
        (e = e.colorFlip_())),
      e
    );
  }
  moveRedRight_() {
    let e = this.colorFlip_();
    return (
      e.left.left.isRed_() && ((e = e.rotateRight_()), (e = e.colorFlip_())),
      e
    );
  }
  rotateLeft_() {
    const e = this.copy(null, null, ye.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight_() {
    const e = this.copy(null, null, ye.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip_() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      t = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t);
  }
  checkMaxDepth_() {
    const e = this.check_();
    return Math.pow(2, e) <= this.count() + 1;
  }
  check_() {
    if (this.isRed_() && this.left.isRed_())
      throw new Error(
        'Red node has red child(' + this.key + ',' + this.value + ')'
      );
    if (this.right.isRed_())
      throw new Error(
        'Right child of (' + this.key + ',' + this.value + ') is red'
      );
    const e = this.left.check_();
    if (e !== this.right.check_()) throw new Error('Black depths differ');
    return e + (this.isRed_() ? 0 : 1);
  }
}
ye.RED = !0;
ye.BLACK = !1;
class Ew {
  copy(e, t, i, s, r) {
    return this;
  }
  insert(e, t, i) {
    return new ye(e, t, null);
  }
  remove(e, t) {
    return this;
  }
  count() {
    return 0;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(e) {
    return !1;
  }
  reverseTraversal(e) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  check_() {
    return 0;
  }
  isRed_() {
    return !1;
  }
}
class Be {
  constructor(e, t = Be.EMPTY_NODE) {
    ((this.comparator_ = e), (this.root_ = t));
  }
  insert(e, t) {
    return new Be(
      this.comparator_,
      this.root_
        .insert(e, t, this.comparator_)
        .copy(null, null, ye.BLACK, null, null)
    );
  }
  remove(e) {
    return new Be(
      this.comparator_,
      this.root_
        .remove(e, this.comparator_)
        .copy(null, null, ye.BLACK, null, null)
    );
  }
  get(e) {
    let t,
      i = this.root_;
    for (; !i.isEmpty(); ) {
      if (((t = this.comparator_(e, i.key)), t === 0)) return i.value;
      t < 0 ? (i = i.left) : t > 0 && (i = i.right);
    }
    return null;
  }
  getPredecessorKey(e) {
    let t,
      i = this.root_,
      s = null;
    for (; !i.isEmpty(); )
      if (((t = this.comparator_(e, i.key)), t === 0)) {
        if (i.left.isEmpty()) return s ? s.key : null;
        for (i = i.left; !i.right.isEmpty(); ) i = i.right;
        return i.key;
      } else t < 0 ? (i = i.left) : t > 0 && ((s = i), (i = i.right));
    throw new Error(
      'Attempted to find predecessor key for a nonexistent key.  What gives?'
    );
  }
  isEmpty() {
    return this.root_.isEmpty();
  }
  count() {
    return this.root_.count();
  }
  minKey() {
    return this.root_.minKey();
  }
  maxKey() {
    return this.root_.maxKey();
  }
  inorderTraversal(e) {
    return this.root_.inorderTraversal(e);
  }
  reverseTraversal(e) {
    return this.root_.reverseTraversal(e);
  }
  getIterator(e) {
    return new Gs(this.root_, null, this.comparator_, !1, e);
  }
  getIteratorFrom(e, t) {
    return new Gs(this.root_, e, this.comparator_, !1, t);
  }
  getReverseIteratorFrom(e, t) {
    return new Gs(this.root_, e, this.comparator_, !0, t);
  }
  getReverseIterator(e) {
    return new Gs(this.root_, null, this.comparator_, !0, e);
  }
}
Be.EMPTY_NODE = new Ew();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Tw(n, e) {
  return si(n.name, e.name);
}
function Il(n, e) {
  return si(n, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let ha;
function Iw(n) {
  ha = n;
}
const wp = function (n) {
    return typeof n == 'number' ? 'number:' + Zf(n) : 'string:' + n;
  },
  Ap = function (n) {
    if (n.isLeafNode()) {
      const e = n.val();
      D(
        typeof e == 'string' ||
          typeof e == 'number' ||
          (typeof e == 'object' && Rt(e, '.sv')),
        'Priority must be a string or number.'
      );
    } else D(n === ha || n.isEmpty(), 'priority of unexpected type.');
    D(
      n === ha || n.getPriority().isEmpty(),
      "Priority nodes can't have a priority of their own."
    );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let dh;
class me {
  constructor(e, t = me.__childrenNodeConstructor.EMPTY_NODE) {
    ((this.value_ = e),
      (this.priorityNode_ = t),
      (this.lazyHash_ = null),
      D(
        this.value_ !== void 0 && this.value_ !== null,
        "LeafNode shouldn't be created with null/undefined value."
      ),
      Ap(this.priorityNode_));
  }
  static set __childrenNodeConstructor(e) {
    dh = e;
  }
  static get __childrenNodeConstructor() {
    return dh;
  }
  isLeafNode() {
    return !0;
  }
  getPriority() {
    return this.priorityNode_;
  }
  updatePriority(e) {
    return new me(this.value_, e);
  }
  getImmediateChild(e) {
    return e === '.priority'
      ? this.priorityNode_
      : me.__childrenNodeConstructor.EMPTY_NODE;
  }
  getChild(e) {
    return H(e)
      ? this
      : K(e) === '.priority'
        ? this.priorityNode_
        : me.__childrenNodeConstructor.EMPTY_NODE;
  }
  hasChild() {
    return !1;
  }
  getPredecessorChildName(e, t) {
    return null;
  }
  updateImmediateChild(e, t) {
    return e === '.priority'
      ? this.updatePriority(t)
      : t.isEmpty() && e !== '.priority'
        ? this
        : me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(
            e,
            t
          ).updatePriority(this.priorityNode_);
  }
  updateChild(e, t) {
    const i = K(e);
    return i === null
      ? t
      : t.isEmpty() && i !== '.priority'
        ? this
        : (D(
            i !== '.priority' || Ht(e) === 1,
            '.priority must be the last token in a path'
          ),
          this.updateImmediateChild(
            i,
            me.__childrenNodeConstructor.EMPTY_NODE.updateChild(re(e), t)
          ));
  }
  isEmpty() {
    return !1;
  }
  numChildren() {
    return 0;
  }
  forEachChild(e, t) {
    return !1;
  }
  val(e) {
    return e && !this.getPriority().isEmpty()
      ? { '.value': this.getValue(), '.priority': this.getPriority().val() }
      : this.getValue();
  }
  hash() {
    if (this.lazyHash_ === null) {
      let e = '';
      this.priorityNode_.isEmpty() ||
        (e += 'priority:' + wp(this.priorityNode_.val()) + ':');
      const t = typeof this.value_;
      ((e += t + ':'),
        t === 'number' ? (e += Zf(this.value_)) : (e += this.value_),
        (this.lazyHash_ = Yf(e)));
    }
    return this.lazyHash_;
  }
  getValue() {
    return this.value_;
  }
  compareTo(e) {
    return e === me.__childrenNodeConstructor.EMPTY_NODE
      ? 1
      : e instanceof me.__childrenNodeConstructor
        ? -1
        : (D(e.isLeafNode(), 'Unknown node type'), this.compareToLeafNode_(e));
  }
  compareToLeafNode_(e) {
    const t = typeof e.value_,
      i = typeof this.value_,
      s = me.VALUE_TYPE_ORDER.indexOf(t),
      r = me.VALUE_TYPE_ORDER.indexOf(i);
    return (
      D(s >= 0, 'Unknown leaf type: ' + t),
      D(r >= 0, 'Unknown leaf type: ' + i),
      s === r
        ? i === 'object'
          ? 0
          : this.value_ < e.value_
            ? -1
            : this.value_ === e.value_
              ? 0
              : 1
        : r - s
    );
  }
  withIndex() {
    return this;
  }
  isIndexed() {
    return !0;
  }
  equals(e) {
    if (e === this) return !0;
    if (e.isLeafNode()) {
      const t = e;
      return (
        this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
      );
    } else return !1;
  }
}
me.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string'];
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Rp, Cp;
function ww(n) {
  Rp = n;
}
function Aw(n) {
  Cp = n;
}
class Rw extends zr {
  compare(e, t) {
    const i = e.node.getPriority(),
      s = t.node.getPriority(),
      r = i.compareTo(s);
    return r === 0 ? si(e.name, t.name) : r;
  }
  isDefinedOn(e) {
    return !e.getPriority().isEmpty();
  }
  indexedValueChanged(e, t) {
    return !e.getPriority().equals(t.getPriority());
  }
  minPost() {
    return Q.MIN;
  }
  maxPost() {
    return new Q(pn, new me('[PRIORITY-POST]', Cp));
  }
  makePost(e, t) {
    const i = Rp(e);
    return new Q(t, new me('[PRIORITY-POST]', i));
  }
  toString() {
    return '.priority';
  }
}
const Ve = new Rw();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Cw = Math.log(2);
class Sw {
  constructor(e) {
    const t = (r) => parseInt(Math.log(r) / Cw, 10),
      i = (r) => parseInt(Array(r + 1).join('1'), 2);
    ((this.count = t(e + 1)), (this.current_ = this.count - 1));
    const s = i(this.count);
    this.bits_ = (e + 1) & s;
  }
  nextBitIsOne() {
    const e = !(this.bits_ & (1 << this.current_));
    return (this.current_--, e);
  }
}
const Tr = function (n, e, t, i) {
  n.sort(e);
  const s = function (c, h) {
      const f = h - c;
      let _, g;
      if (f === 0) return null;
      if (f === 1)
        return (
          (_ = n[c]),
          (g = t ? t(_) : _),
          new ye(g, _.node, ye.BLACK, null, null)
        );
      {
        const R = parseInt(f / 2, 10) + c,
          P = s(c, R),
          O = s(R + 1, h);
        return (
          (_ = n[R]),
          (g = t ? t(_) : _),
          new ye(g, _.node, ye.BLACK, P, O)
        );
      }
    },
    r = function (c) {
      let h = null,
        f = null,
        _ = n.length;
      const g = function (P, O) {
          const N = _ - P,
            $ = _;
          _ -= P;
          const q = s(N + 1, $),
            G = n[N],
            ae = t ? t(G) : G;
          R(new ye(ae, G.node, O, null, q));
        },
        R = function (P) {
          h ? ((h.left = P), (h = P)) : ((f = P), (h = P));
        };
      for (let P = 0; P < c.count; ++P) {
        const O = c.nextBitIsOne(),
          N = Math.pow(2, c.count - (P + 1));
        O ? g(N, ye.BLACK) : (g(N, ye.BLACK), g(N, ye.RED));
      }
      return f;
    },
    a = new Sw(n.length),
    l = r(a);
  return new Be(i || e, l);
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Vo;
const Sn = {};
class mt {
  constructor(e, t) {
    ((this.indexes_ = e), (this.indexSet_ = t));
  }
  static get Default() {
    return (
      D(Sn && Ve, 'ChildrenNode.ts has not been loaded'),
      (Vo = Vo || new mt({ '.priority': Sn }, { '.priority': Ve })),
      Vo
    );
  }
  get(e) {
    const t = Bn(this.indexes_, e);
    if (!t) throw new Error('No index defined for ' + e);
    return t instanceof Be ? t : null;
  }
  hasIndex(e) {
    return Rt(this.indexSet_, e.toString());
  }
  addIndex(e, t) {
    D(
      e !== Un,
      "KeyIndex always exists and isn't meant to be added to the IndexMap."
    );
    const i = [];
    let s = !1;
    const r = t.getIterator(Q.Wrap);
    let a = r.getNext();
    for (; a; )
      ((s = s || e.isDefinedOn(a.node)), i.push(a), (a = r.getNext()));
    let l;
    s ? (l = Tr(i, e.getCompare())) : (l = Sn);
    const c = e.toString(),
      h = Object.assign({}, this.indexSet_);
    h[c] = e;
    const f = Object.assign({}, this.indexes_);
    return ((f[c] = l), new mt(f, h));
  }
  addToIndexes(e, t) {
    const i = sr(this.indexes_, (s, r) => {
      const a = Bn(this.indexSet_, r);
      if ((D(a, 'Missing index implementation for ' + r), s === Sn))
        if (a.isDefinedOn(e.node)) {
          const l = [],
            c = t.getIterator(Q.Wrap);
          let h = c.getNext();
          for (; h; ) (h.name !== e.name && l.push(h), (h = c.getNext()));
          return (l.push(e), Tr(l, a.getCompare()));
        } else return Sn;
      else {
        const l = t.get(e.name);
        let c = s;
        return (l && (c = c.remove(new Q(e.name, l))), c.insert(e, e.node));
      }
    });
    return new mt(i, this.indexSet_);
  }
  removeFromIndexes(e, t) {
    const i = sr(this.indexes_, (s) => {
      if (s === Sn) return s;
      {
        const r = t.get(e.name);
        return r ? s.remove(new Q(e.name, r)) : s;
      }
    });
    return new mt(i, this.indexSet_);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Si;
class J {
  constructor(e, t, i) {
    ((this.children_ = e),
      (this.priorityNode_ = t),
      (this.indexMap_ = i),
      (this.lazyHash_ = null),
      this.priorityNode_ && Ap(this.priorityNode_),
      this.children_.isEmpty() &&
        D(
          !this.priorityNode_ || this.priorityNode_.isEmpty(),
          'An empty node cannot have a priority'
        ));
  }
  static get EMPTY_NODE() {
    return Si || (Si = new J(new Be(Il), null, mt.Default));
  }
  isLeafNode() {
    return !1;
  }
  getPriority() {
    return this.priorityNode_ || Si;
  }
  updatePriority(e) {
    return this.children_.isEmpty()
      ? this
      : new J(this.children_, e, this.indexMap_);
  }
  getImmediateChild(e) {
    if (e === '.priority') return this.getPriority();
    {
      const t = this.children_.get(e);
      return t === null ? Si : t;
    }
  }
  getChild(e) {
    const t = K(e);
    return t === null ? this : this.getImmediateChild(t).getChild(re(e));
  }
  hasChild(e) {
    return this.children_.get(e) !== null;
  }
  updateImmediateChild(e, t) {
    if ((D(t, 'We should always be passing snapshot nodes'), e === '.priority'))
      return this.updatePriority(t);
    {
      const i = new Q(e, t);
      let s, r;
      t.isEmpty()
        ? ((s = this.children_.remove(e)),
          (r = this.indexMap_.removeFromIndexes(i, this.children_)))
        : ((s = this.children_.insert(e, t)),
          (r = this.indexMap_.addToIndexes(i, this.children_)));
      const a = s.isEmpty() ? Si : this.priorityNode_;
      return new J(s, a, r);
    }
  }
  updateChild(e, t) {
    const i = K(e);
    if (i === null) return t;
    {
      D(
        K(e) !== '.priority' || Ht(e) === 1,
        '.priority must be the last token in a path'
      );
      const s = this.getImmediateChild(i).updateChild(re(e), t);
      return this.updateImmediateChild(i, s);
    }
  }
  isEmpty() {
    return this.children_.isEmpty();
  }
  numChildren() {
    return this.children_.count();
  }
  val(e) {
    if (this.isEmpty()) return null;
    const t = {};
    let i = 0,
      s = 0,
      r = !0;
    if (
      (this.forEachChild(Ve, (a, l) => {
        ((t[a] = l.val(e)),
          i++,
          r && J.INTEGER_REGEXP_.test(a)
            ? (s = Math.max(s, Number(a)))
            : (r = !1));
      }),
      !e && r && s < 2 * i)
    ) {
      const a = [];
      for (const l in t) a[l] = t[l];
      return a;
    } else
      return (
        e &&
          !this.getPriority().isEmpty() &&
          (t['.priority'] = this.getPriority().val()),
        t
      );
  }
  hash() {
    if (this.lazyHash_ === null) {
      let e = '';
      (this.getPriority().isEmpty() ||
        (e += 'priority:' + wp(this.getPriority().val()) + ':'),
        this.forEachChild(Ve, (t, i) => {
          const s = i.hash();
          s !== '' && (e += ':' + t + ':' + s);
        }),
        (this.lazyHash_ = e === '' ? '' : Yf(e)));
    }
    return this.lazyHash_;
  }
  getPredecessorChildName(e, t, i) {
    const s = this.resolveIndex_(i);
    if (s) {
      const r = s.getPredecessorKey(new Q(e, t));
      return r ? r.name : null;
    } else return this.children_.getPredecessorKey(e);
  }
  getFirstChildName(e) {
    const t = this.resolveIndex_(e);
    if (t) {
      const i = t.minKey();
      return i && i.name;
    } else return this.children_.minKey();
  }
  getFirstChild(e) {
    const t = this.getFirstChildName(e);
    return t ? new Q(t, this.children_.get(t)) : null;
  }
  getLastChildName(e) {
    const t = this.resolveIndex_(e);
    if (t) {
      const i = t.maxKey();
      return i && i.name;
    } else return this.children_.maxKey();
  }
  getLastChild(e) {
    const t = this.getLastChildName(e);
    return t ? new Q(t, this.children_.get(t)) : null;
  }
  forEachChild(e, t) {
    const i = this.resolveIndex_(e);
    return i
      ? i.inorderTraversal((s) => t(s.name, s.node))
      : this.children_.inorderTraversal(t);
  }
  getIterator(e) {
    return this.getIteratorFrom(e.minPost(), e);
  }
  getIteratorFrom(e, t) {
    const i = this.resolveIndex_(t);
    if (i) return i.getIteratorFrom(e, (s) => s);
    {
      const s = this.children_.getIteratorFrom(e.name, Q.Wrap);
      let r = s.peek();
      for (; r != null && t.compare(r, e) < 0; ) (s.getNext(), (r = s.peek()));
      return s;
    }
  }
  getReverseIterator(e) {
    return this.getReverseIteratorFrom(e.maxPost(), e);
  }
  getReverseIteratorFrom(e, t) {
    const i = this.resolveIndex_(t);
    if (i) return i.getReverseIteratorFrom(e, (s) => s);
    {
      const s = this.children_.getReverseIteratorFrom(e.name, Q.Wrap);
      let r = s.peek();
      for (; r != null && t.compare(r, e) > 0; ) (s.getNext(), (r = s.peek()));
      return s;
    }
  }
  compareTo(e) {
    return this.isEmpty()
      ? e.isEmpty()
        ? 0
        : -1
      : e.isLeafNode() || e.isEmpty()
        ? 1
        : e === vs
          ? -1
          : 0;
  }
  withIndex(e) {
    if (e === Un || this.indexMap_.hasIndex(e)) return this;
    {
      const t = this.indexMap_.addIndex(e, this.children_);
      return new J(this.children_, this.priorityNode_, t);
    }
  }
  isIndexed(e) {
    return e === Un || this.indexMap_.hasIndex(e);
  }
  equals(e) {
    if (e === this) return !0;
    if (e.isLeafNode()) return !1;
    {
      const t = e;
      if (this.getPriority().equals(t.getPriority()))
        if (this.children_.count() === t.children_.count()) {
          const i = this.getIterator(Ve),
            s = t.getIterator(Ve);
          let r = i.getNext(),
            a = s.getNext();
          for (; r && a; ) {
            if (r.name !== a.name || !r.node.equals(a.node)) return !1;
            ((r = i.getNext()), (a = s.getNext()));
          }
          return r === null && a === null;
        } else return !1;
      else return !1;
    }
  }
  resolveIndex_(e) {
    return e === Un ? null : this.indexMap_.get(e.toString());
  }
}
J.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
class Pw extends J {
  constructor() {
    super(new Be(Il), J.EMPTY_NODE, mt.Default);
  }
  compareTo(e) {
    return e === this ? 0 : 1;
  }
  equals(e) {
    return e === this;
  }
  getPriority() {
    return this;
  }
  getImmediateChild(e) {
    return J.EMPTY_NODE;
  }
  isEmpty() {
    return !1;
  }
}
const vs = new Pw();
Object.defineProperties(Q, {
  MIN: { value: new Q(Qn, J.EMPTY_NODE) },
  MAX: { value: new Q(pn, vs) },
});
Ip.__EMPTY_NODE = J.EMPTY_NODE;
me.__childrenNodeConstructor = J;
Iw(vs);
Aw(vs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const bw = !0;
function Oe(n, e = null) {
  if (n === null) return J.EMPTY_NODE;
  if (
    (typeof n == 'object' && '.priority' in n && (e = n['.priority']),
    D(
      e === null ||
        typeof e == 'string' ||
        typeof e == 'number' ||
        (typeof e == 'object' && '.sv' in e),
      'Invalid priority type found: ' + typeof e
    ),
    typeof n == 'object' &&
      '.value' in n &&
      n['.value'] !== null &&
      (n = n['.value']),
    typeof n != 'object' || '.sv' in n)
  ) {
    const t = n;
    return new me(t, Oe(e));
  }
  if (!(n instanceof Array) && bw) {
    const t = [];
    let i = !1;
    if (
      (Ge(n, (a, l) => {
        if (a.substring(0, 1) !== '.') {
          const c = Oe(l);
          c.isEmpty() ||
            ((i = i || !c.getPriority().isEmpty()), t.push(new Q(a, c)));
        }
      }),
      t.length === 0)
    )
      return J.EMPTY_NODE;
    const r = Tr(t, Tw, (a) => a.name, Il);
    if (i) {
      const a = Tr(t, Ve.getCompare());
      return new J(r, Oe(e), new mt({ '.priority': a }, { '.priority': Ve }));
    } else return new J(r, Oe(e), mt.Default);
  } else {
    let t = J.EMPTY_NODE;
    return (
      Ge(n, (i, s) => {
        if (Rt(n, i) && i.substring(0, 1) !== '.') {
          const r = Oe(s);
          (r.isLeafNode() || !r.isEmpty()) &&
            (t = t.updateImmediateChild(i, r));
        }
      }),
      t.updatePriority(Oe(e))
    );
  }
}
ww(Oe);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nw extends zr {
  constructor(e) {
    (super(),
      (this.indexPath_ = e),
      D(
        !H(e) && K(e) !== '.priority',
        "Can't create PathIndex with empty path or .priority key"
      ));
  }
  extractChild(e) {
    return e.getChild(this.indexPath_);
  }
  isDefinedOn(e) {
    return !e.getChild(this.indexPath_).isEmpty();
  }
  compare(e, t) {
    const i = this.extractChild(e.node),
      s = this.extractChild(t.node),
      r = i.compareTo(s);
    return r === 0 ? si(e.name, t.name) : r;
  }
  makePost(e, t) {
    const i = Oe(e),
      s = J.EMPTY_NODE.updateChild(this.indexPath_, i);
    return new Q(t, s);
  }
  maxPost() {
    const e = J.EMPTY_NODE.updateChild(this.indexPath_, vs);
    return new Q(pn, e);
  }
  toString() {
    return yp(this.indexPath_, 0).join('/');
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kw extends zr {
  compare(e, t) {
    const i = e.node.compareTo(t.node);
    return i === 0 ? si(e.name, t.name) : i;
  }
  isDefinedOn(e) {
    return !0;
  }
  indexedValueChanged(e, t) {
    return !e.equals(t);
  }
  minPost() {
    return Q.MIN;
  }
  maxPost() {
    return Q.MAX;
  }
  makePost(e, t) {
    const i = Oe(e);
    return new Q(t, i);
  }
  toString() {
    return '.value';
  }
}
const Dw = new kw();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ow(n) {
  return { type: 'value', snapshotNode: n };
}
function Vw(n, e) {
  return { type: 'child_added', snapshotNode: e, childName: n };
}
function Mw(n, e) {
  return { type: 'child_removed', snapshotNode: e, childName: n };
}
function fh(n, e, t) {
  return { type: 'child_changed', snapshotNode: e, childName: n, oldSnap: t };
}
function Lw(n, e) {
  return { type: 'child_moved', snapshotNode: e, childName: n };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wl {
  constructor() {
    ((this.limitSet_ = !1),
      (this.startSet_ = !1),
      (this.startNameSet_ = !1),
      (this.startAfterSet_ = !1),
      (this.endSet_ = !1),
      (this.endNameSet_ = !1),
      (this.endBeforeSet_ = !1),
      (this.limit_ = 0),
      (this.viewFrom_ = ''),
      (this.indexStartValue_ = null),
      (this.indexStartName_ = ''),
      (this.indexEndValue_ = null),
      (this.indexEndName_ = ''),
      (this.index_ = Ve));
  }
  hasStart() {
    return this.startSet_;
  }
  isViewFromLeft() {
    return this.viewFrom_ === '' ? this.startSet_ : this.viewFrom_ === 'l';
  }
  getIndexStartValue() {
    return (
      D(this.startSet_, 'Only valid if start has been set'),
      this.indexStartValue_
    );
  }
  getIndexStartName() {
    return (
      D(this.startSet_, 'Only valid if start has been set'),
      this.startNameSet_ ? this.indexStartName_ : Qn
    );
  }
  hasEnd() {
    return this.endSet_;
  }
  getIndexEndValue() {
    return (
      D(this.endSet_, 'Only valid if end has been set'),
      this.indexEndValue_
    );
  }
  getIndexEndName() {
    return (
      D(this.endSet_, 'Only valid if end has been set'),
      this.endNameSet_ ? this.indexEndName_ : pn
    );
  }
  hasLimit() {
    return this.limitSet_;
  }
  hasAnchoredLimit() {
    return this.limitSet_ && this.viewFrom_ !== '';
  }
  getLimit() {
    return (D(this.limitSet_, 'Only valid if limit has been set'), this.limit_);
  }
  getIndex() {
    return this.index_;
  }
  loadsAllData() {
    return !(this.startSet_ || this.endSet_ || this.limitSet_);
  }
  isDefault() {
    return this.loadsAllData() && this.index_ === Ve;
  }
  copy() {
    const e = new wl();
    return (
      (e.limitSet_ = this.limitSet_),
      (e.limit_ = this.limit_),
      (e.startSet_ = this.startSet_),
      (e.startAfterSet_ = this.startAfterSet_),
      (e.indexStartValue_ = this.indexStartValue_),
      (e.startNameSet_ = this.startNameSet_),
      (e.indexStartName_ = this.indexStartName_),
      (e.endSet_ = this.endSet_),
      (e.endBeforeSet_ = this.endBeforeSet_),
      (e.indexEndValue_ = this.indexEndValue_),
      (e.endNameSet_ = this.endNameSet_),
      (e.indexEndName_ = this.indexEndName_),
      (e.index_ = this.index_),
      (e.viewFrom_ = this.viewFrom_),
      e
    );
  }
}
function ph(n) {
  const e = {};
  if (n.isDefault()) return e;
  let t;
  if (
    (n.index_ === Ve
      ? (t = '$priority')
      : n.index_ === Dw
        ? (t = '$value')
        : n.index_ === Un
          ? (t = '$key')
          : (D(n.index_ instanceof Nw, 'Unrecognized index type!'),
            (t = n.index_.toString())),
    (e.orderBy = Te(t)),
    n.startSet_)
  ) {
    const i = n.startAfterSet_ ? 'startAfter' : 'startAt';
    ((e[i] = Te(n.indexStartValue_)),
      n.startNameSet_ && (e[i] += ',' + Te(n.indexStartName_)));
  }
  if (n.endSet_) {
    const i = n.endBeforeSet_ ? 'endBefore' : 'endAt';
    ((e[i] = Te(n.indexEndValue_)),
      n.endNameSet_ && (e[i] += ',' + Te(n.indexEndName_)));
  }
  return (
    n.limitSet_ &&
      (n.isViewFromLeft()
        ? (e.limitToFirst = n.limit_)
        : (e.limitToLast = n.limit_)),
    e
  );
}
function _h(n) {
  const e = {};
  if (
    (n.startSet_ &&
      ((e.sp = n.indexStartValue_),
      n.startNameSet_ && (e.sn = n.indexStartName_),
      (e.sin = !n.startAfterSet_)),
    n.endSet_ &&
      ((e.ep = n.indexEndValue_),
      n.endNameSet_ && (e.en = n.indexEndName_),
      (e.ein = !n.endBeforeSet_)),
    n.limitSet_)
  ) {
    e.l = n.limit_;
    let t = n.viewFrom_;
    (t === '' && (n.isViewFromLeft() ? (t = 'l') : (t = 'r')), (e.vf = t));
  }
  return (n.index_ !== Ve && (e.i = n.index_.toString()), e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ir extends _p {
  constructor(e, t, i, s) {
    (super(),
      (this.repoInfo_ = e),
      (this.onDataUpdate_ = t),
      (this.authTokenProvider_ = i),
      (this.appCheckTokenProvider_ = s),
      (this.log_ = gs('p:rest:')),
      (this.listens_ = {}));
  }
  reportStats(e) {
    throw new Error('Method not implemented.');
  }
  static getListenId_(e, t) {
    return t !== void 0
      ? 'tag$' + t
      : (D(
          e._queryParams.isDefault(),
          "should have a tag if it's not a default query."
        ),
        e._path.toString());
  }
  listen(e, t, i, s) {
    const r = e._path.toString();
    this.log_('Listen called for ' + r + ' ' + e._queryIdentifier);
    const a = Ir.getListenId_(e, i),
      l = {};
    this.listens_[a] = l;
    const c = ph(e._queryParams);
    this.restRequest_(r + '.json', c, (h, f) => {
      let _ = f;
      if (
        (h === 404 && ((_ = null), (h = null)),
        h === null && this.onDataUpdate_(r, _, !1, i),
        Bn(this.listens_, a) === l)
      ) {
        let g;
        (h
          ? h === 401
            ? (g = 'permission_denied')
            : (g = 'rest_error:' + h)
          : (g = 'ok'),
          s(g, null));
      }
    });
  }
  unlisten(e, t) {
    const i = Ir.getListenId_(e, t);
    delete this.listens_[i];
  }
  get(e) {
    const t = ph(e._queryParams),
      i = e._path.toString(),
      s = new wa();
    return (
      this.restRequest_(i + '.json', t, (r, a) => {
        let l = a;
        (r === 404 && ((l = null), (r = null)),
          r === null
            ? (this.onDataUpdate_(i, l, !1, null), s.resolve(l))
            : s.reject(new Error(l)));
      }),
      s.promise
    );
  }
  refreshAuthToken(e) {}
  restRequest_(e, t = {}, i) {
    return (
      (t.format = 'export'),
      Promise.all([
        this.authTokenProvider_.getToken(!1),
        this.appCheckTokenProvider_.getToken(!1),
      ]).then(([s, r]) => {
        (s && s.accessToken && (t.auth = s.accessToken),
          r && r.token && (t.ac = r.token));
        const a =
          (this.repoInfo_.secure ? 'https://' : 'http://') +
          this.repoInfo_.host +
          e +
          '?ns=' +
          this.repoInfo_.namespace +
          Jn(t);
        this.log_('Sending REST request for ' + a);
        const l = new XMLHttpRequest();
        ((l.onreadystatechange = () => {
          if (i && l.readyState === 4) {
            this.log_(
              'REST Response for ' + a + ' received. status:',
              l.status,
              'response:',
              l.responseText
            );
            let c = null;
            if (l.status >= 200 && l.status < 300) {
              try {
                c = $i(l.responseText);
              } catch {
                je(
                  'Failed to parse JSON response for ' +
                    a +
                    ': ' +
                    l.responseText
                );
              }
              i(null, c);
            } else
              (l.status !== 401 &&
                l.status !== 404 &&
                je(
                  'Got unsuccessful REST response for ' +
                    a +
                    ' Status: ' +
                    l.status
                ),
                i(l.status));
            i = null;
          }
        }),
          l.open('GET', a, !0),
          l.send());
      })
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xw {
  constructor() {
    this.rootNode_ = J.EMPTY_NODE;
  }
  getNode(e) {
    return this.rootNode_.getChild(e);
  }
  updateSnapshot(e, t) {
    this.rootNode_ = this.rootNode_.updateChild(e, t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function wr() {
  return { value: null, children: new Map() };
}
function Sp(n, e, t) {
  if (H(e)) ((n.value = t), n.children.clear());
  else if (n.value !== null) n.value = n.value.updateChild(e, t);
  else {
    const i = K(e);
    n.children.has(i) || n.children.set(i, wr());
    const s = n.children.get(i);
    ((e = re(e)), Sp(s, e, t));
  }
}
function da(n, e, t) {
  n.value !== null
    ? t(e, n.value)
    : Fw(n, (i, s) => {
        const r = new oe(e.toString() + '/' + i);
        da(s, r, t);
      });
}
function Fw(n, e) {
  n.children.forEach((t, i) => {
    e(i, t);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Uw {
  constructor(e) {
    ((this.collection_ = e), (this.last_ = null));
  }
  get() {
    const e = this.collection_.get(),
      t = Object.assign({}, e);
    return (
      this.last_ &&
        Ge(this.last_, (i, s) => {
          t[i] = t[i] - s;
        }),
      (this.last_ = e),
      t
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const mh = 10 * 1e3,
  Bw = 30 * 1e3,
  qw = 5 * 60 * 1e3;
class Ww {
  constructor(e, t) {
    ((this.server_ = t),
      (this.statsToReport_ = {}),
      (this.statsListener_ = new Uw(e)));
    const i = mh + (Bw - mh) * Math.random();
    qi(this.reportStats_.bind(this), Math.floor(i));
  }
  reportStats_() {
    const e = this.statsListener_.get(),
      t = {};
    let i = !1;
    (Ge(e, (s, r) => {
      r > 0 && Rt(this.statsToReport_, s) && ((t[s] = r), (i = !0));
    }),
      i && this.server_.reportStats(t),
      qi(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * qw)));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var nt;
(function (n) {
  ((n[(n.OVERWRITE = 0)] = 'OVERWRITE'),
    (n[(n.MERGE = 1)] = 'MERGE'),
    (n[(n.ACK_USER_WRITE = 2)] = 'ACK_USER_WRITE'),
    (n[(n.LISTEN_COMPLETE = 3)] = 'LISTEN_COMPLETE'));
})(nt || (nt = {}));
function Pp() {
  return { fromUser: !0, fromServer: !1, queryId: null, tagged: !1 };
}
function bp() {
  return { fromUser: !1, fromServer: !0, queryId: null, tagged: !1 };
}
function Np(n) {
  return { fromUser: !1, fromServer: !0, queryId: n, tagged: !0 };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ar {
  constructor(e, t, i) {
    ((this.path = e),
      (this.affectedTree = t),
      (this.revert = i),
      (this.type = nt.ACK_USER_WRITE),
      (this.source = Pp()));
  }
  operationForChild(e) {
    if (H(this.path)) {
      if (this.affectedTree.value != null)
        return (
          D(
            this.affectedTree.children.isEmpty(),
            'affectedTree should not have overlapping affected paths.'
          ),
          this
        );
      {
        const t = this.affectedTree.subtree(new oe(e));
        return new Ar(ee(), t, this.revert);
      }
    } else
      return (
        D(K(this.path) === e, 'operationForChild called for unrelated child.'),
        new Ar(re(this.path), this.affectedTree, this.revert)
      );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _n {
  constructor(e, t, i) {
    ((this.source = e),
      (this.path = t),
      (this.snap = i),
      (this.type = nt.OVERWRITE));
  }
  operationForChild(e) {
    return H(this.path)
      ? new _n(this.source, ee(), this.snap.getImmediateChild(e))
      : new _n(this.source, re(this.path), this.snap);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ns {
  constructor(e, t, i) {
    ((this.source = e),
      (this.path = t),
      (this.children = i),
      (this.type = nt.MERGE));
  }
  operationForChild(e) {
    if (H(this.path)) {
      const t = this.children.subtree(new oe(e));
      return t.isEmpty()
        ? null
        : t.value
          ? new _n(this.source, ee(), t.value)
          : new ns(this.source, ee(), t);
    } else
      return (
        D(
          K(this.path) === e,
          "Can't get a merge for a child not on the path of the operation"
        ),
        new ns(this.source, re(this.path), this.children)
      );
  }
  toString() {
    return (
      'Operation(' +
      this.path +
      ': ' +
      this.source.toString() +
      ' merge: ' +
      this.children.toString() +
      ')'
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Al {
  constructor(e, t, i) {
    ((this.node_ = e), (this.fullyInitialized_ = t), (this.filtered_ = i));
  }
  isFullyInitialized() {
    return this.fullyInitialized_;
  }
  isFiltered() {
    return this.filtered_;
  }
  isCompleteForPath(e) {
    if (H(e)) return this.isFullyInitialized() && !this.filtered_;
    const t = K(e);
    return this.isCompleteForChild(t);
  }
  isCompleteForChild(e) {
    return (
      (this.isFullyInitialized() && !this.filtered_) || this.node_.hasChild(e)
    );
  }
  getNode() {
    return this.node_;
  }
}
function jw(n, e, t, i) {
  const s = [],
    r = [];
  return (
    e.forEach((a) => {
      a.type === 'child_changed' &&
        n.index_.indexedValueChanged(a.oldSnap, a.snapshotNode) &&
        r.push(Lw(a.childName, a.snapshotNode));
    }),
    Pi(n, s, 'child_removed', e, i, t),
    Pi(n, s, 'child_added', e, i, t),
    Pi(n, s, 'child_moved', r, i, t),
    Pi(n, s, 'child_changed', e, i, t),
    Pi(n, s, 'value', e, i, t),
    s
  );
}
function Pi(n, e, t, i, s, r) {
  const a = i.filter((l) => l.type === t);
  (a.sort((l, c) => Hw(n, l, c)),
    a.forEach((l) => {
      const c = $w(n, l, r);
      s.forEach((h) => {
        h.respondsTo(l.type) && e.push(h.createEvent(c, n.query_));
      });
    }));
}
function $w(n, e, t) {
  return (
    e.type === 'value' ||
      e.type === 'child_removed' ||
      (e.prevName = t.getPredecessorChildName(
        e.childName,
        e.snapshotNode,
        n.index_
      )),
    e
  );
}
function Hw(n, e, t) {
  if (e.childName == null || t.childName == null)
    throw Xn('Should only compare child_ events.');
  const i = new Q(e.childName, e.snapshotNode),
    s = new Q(t.childName, t.snapshotNode);
  return n.index_.compare(i, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function kp(n, e) {
  return { eventCache: n, serverCache: e };
}
function Wi(n, e, t, i) {
  return kp(new Al(e, t, i), n.serverCache);
}
function Dp(n, e, t, i) {
  return kp(n.eventCache, new Al(e, t, i));
}
function fa(n) {
  return n.eventCache.isFullyInitialized() ? n.eventCache.getNode() : null;
}
function mn(n) {
  return n.serverCache.isFullyInitialized() ? n.serverCache.getNode() : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Mo;
const Gw = () => (Mo || (Mo = new Be(kI)), Mo);
class se {
  constructor(e, t = Gw()) {
    ((this.value = e), (this.children = t));
  }
  static fromObject(e) {
    let t = new se(null);
    return (
      Ge(e, (i, s) => {
        t = t.set(new oe(i), s);
      }),
      t
    );
  }
  isEmpty() {
    return this.value === null && this.children.isEmpty();
  }
  findRootMostMatchingPathAndValue(e, t) {
    if (this.value != null && t(this.value))
      return { path: ee(), value: this.value };
    if (H(e)) return null;
    {
      const i = K(e),
        s = this.children.get(i);
      if (s !== null) {
        const r = s.findRootMostMatchingPathAndValue(re(e), t);
        return r != null
          ? { path: ve(new oe(i), r.path), value: r.value }
          : null;
      } else return null;
    }
  }
  findRootMostValueAndPath(e) {
    return this.findRootMostMatchingPathAndValue(e, () => !0);
  }
  subtree(e) {
    if (H(e)) return this;
    {
      const t = K(e),
        i = this.children.get(t);
      return i !== null ? i.subtree(re(e)) : new se(null);
    }
  }
  set(e, t) {
    if (H(e)) return new se(t, this.children);
    {
      const i = K(e),
        r = (this.children.get(i) || new se(null)).set(re(e), t),
        a = this.children.insert(i, r);
      return new se(this.value, a);
    }
  }
  remove(e) {
    if (H(e))
      return this.children.isEmpty()
        ? new se(null)
        : new se(null, this.children);
    {
      const t = K(e),
        i = this.children.get(t);
      if (i) {
        const s = i.remove(re(e));
        let r;
        return (
          s.isEmpty()
            ? (r = this.children.remove(t))
            : (r = this.children.insert(t, s)),
          this.value === null && r.isEmpty()
            ? new se(null)
            : new se(this.value, r)
        );
      } else return this;
    }
  }
  get(e) {
    if (H(e)) return this.value;
    {
      const t = K(e),
        i = this.children.get(t);
      return i ? i.get(re(e)) : null;
    }
  }
  setTree(e, t) {
    if (H(e)) return t;
    {
      const i = K(e),
        r = (this.children.get(i) || new se(null)).setTree(re(e), t);
      let a;
      return (
        r.isEmpty()
          ? (a = this.children.remove(i))
          : (a = this.children.insert(i, r)),
        new se(this.value, a)
      );
    }
  }
  fold(e) {
    return this.fold_(ee(), e);
  }
  fold_(e, t) {
    const i = {};
    return (
      this.children.inorderTraversal((s, r) => {
        i[s] = r.fold_(ve(e, s), t);
      }),
      t(e, this.value, i)
    );
  }
  findOnPath(e, t) {
    return this.findOnPath_(e, ee(), t);
  }
  findOnPath_(e, t, i) {
    const s = this.value ? i(t, this.value) : !1;
    if (s) return s;
    if (H(e)) return null;
    {
      const r = K(e),
        a = this.children.get(r);
      return a ? a.findOnPath_(re(e), ve(t, r), i) : null;
    }
  }
  foreachOnPath(e, t) {
    return this.foreachOnPath_(e, ee(), t);
  }
  foreachOnPath_(e, t, i) {
    if (H(e)) return this;
    {
      this.value && i(t, this.value);
      const s = K(e),
        r = this.children.get(s);
      return r ? r.foreachOnPath_(re(e), ve(t, s), i) : new se(null);
    }
  }
  foreach(e) {
    this.foreach_(ee(), e);
  }
  foreach_(e, t) {
    (this.children.inorderTraversal((i, s) => {
      s.foreach_(ve(e, i), t);
    }),
      this.value && t(e, this.value));
  }
  foreachChild(e) {
    this.children.inorderTraversal((t, i) => {
      i.value && e(t, i.value);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Xe {
  constructor(e) {
    this.writeTree_ = e;
  }
  static empty() {
    return new Xe(new se(null));
  }
}
function ji(n, e, t) {
  if (H(e)) return new Xe(new se(t));
  {
    const i = n.writeTree_.findRootMostValueAndPath(e);
    if (i != null) {
      const s = i.path;
      let r = i.value;
      const a = He(s, e);
      return ((r = r.updateChild(a, t)), new Xe(n.writeTree_.set(s, r)));
    } else {
      const s = new se(t),
        r = n.writeTree_.setTree(e, s);
      return new Xe(r);
    }
  }
}
function gh(n, e, t) {
  let i = n;
  return (
    Ge(t, (s, r) => {
      i = ji(i, ve(e, s), r);
    }),
    i
  );
}
function yh(n, e) {
  if (H(e)) return Xe.empty();
  {
    const t = n.writeTree_.setTree(e, new se(null));
    return new Xe(t);
  }
}
function pa(n, e) {
  return Tn(n, e) != null;
}
function Tn(n, e) {
  const t = n.writeTree_.findRootMostValueAndPath(e);
  return t != null ? n.writeTree_.get(t.path).getChild(He(t.path, e)) : null;
}
function vh(n) {
  const e = [],
    t = n.writeTree_.value;
  return (
    t != null
      ? t.isLeafNode() ||
        t.forEachChild(Ve, (i, s) => {
          e.push(new Q(i, s));
        })
      : n.writeTree_.children.inorderTraversal((i, s) => {
          s.value != null && e.push(new Q(i, s.value));
        }),
    e
  );
}
function Bt(n, e) {
  if (H(e)) return n;
  {
    const t = Tn(n, e);
    return t != null ? new Xe(new se(t)) : new Xe(n.writeTree_.subtree(e));
  }
}
function _a(n) {
  return n.writeTree_.isEmpty();
}
function Yn(n, e) {
  return Op(ee(), n.writeTree_, e);
}
function Op(n, e, t) {
  if (e.value != null) return t.updateChild(n, e.value);
  {
    let i = null;
    return (
      e.children.inorderTraversal((s, r) => {
        s === '.priority'
          ? (D(r.value !== null, 'Priority writes must always be leaf nodes'),
            (i = r.value))
          : (t = Op(ve(n, s), r, t));
      }),
      !t.getChild(n).isEmpty() &&
        i !== null &&
        (t = t.updateChild(ve(n, '.priority'), i)),
      t
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Vp(n, e) {
  return Up(e, n);
}
function zw(n, e, t, i, s) {
  (D(i > n.lastWriteId, 'Stacking an older write on top of newer ones'),
    s === void 0 && (s = !0),
    n.allWrites.push({ path: e, snap: t, writeId: i, visible: s }),
    s && (n.visibleWrites = ji(n.visibleWrites, e, t)),
    (n.lastWriteId = i));
}
function Kw(n, e) {
  for (let t = 0; t < n.allWrites.length; t++) {
    const i = n.allWrites[t];
    if (i.writeId === e) return i;
  }
  return null;
}
function Qw(n, e) {
  const t = n.allWrites.findIndex((l) => l.writeId === e);
  D(t >= 0, 'removeWrite called with nonexistent writeId.');
  const i = n.allWrites[t];
  n.allWrites.splice(t, 1);
  let s = i.visible,
    r = !1,
    a = n.allWrites.length - 1;
  for (; s && a >= 0; ) {
    const l = n.allWrites[a];
    (l.visible &&
      (a >= t && Yw(l, i.path) ? (s = !1) : Qe(i.path, l.path) && (r = !0)),
      a--);
  }
  if (s) {
    if (r) return (Xw(n), !0);
    if (i.snap) n.visibleWrites = yh(n.visibleWrites, i.path);
    else {
      const l = i.children;
      Ge(l, (c) => {
        n.visibleWrites = yh(n.visibleWrites, ve(i.path, c));
      });
    }
    return !0;
  } else return !1;
}
function Yw(n, e) {
  if (n.snap) return Qe(n.path, e);
  for (const t in n.children)
    if (n.children.hasOwnProperty(t) && Qe(ve(n.path, t), e)) return !0;
  return !1;
}
function Xw(n) {
  ((n.visibleWrites = Mp(n.allWrites, Jw, ee())),
    n.allWrites.length > 0
      ? (n.lastWriteId = n.allWrites[n.allWrites.length - 1].writeId)
      : (n.lastWriteId = -1));
}
function Jw(n) {
  return n.visible;
}
function Mp(n, e, t) {
  let i = Xe.empty();
  for (let s = 0; s < n.length; ++s) {
    const r = n[s];
    if (e(r)) {
      const a = r.path;
      let l;
      if (r.snap)
        Qe(t, a)
          ? ((l = He(t, a)), (i = ji(i, l, r.snap)))
          : Qe(a, t) && ((l = He(a, t)), (i = ji(i, ee(), r.snap.getChild(l))));
      else if (r.children) {
        if (Qe(t, a)) ((l = He(t, a)), (i = gh(i, l, r.children)));
        else if (Qe(a, t))
          if (((l = He(a, t)), H(l))) i = gh(i, ee(), r.children);
          else {
            const c = Bn(r.children, K(l));
            if (c) {
              const h = c.getChild(re(l));
              i = ji(i, ee(), h);
            }
          }
      } else throw Xn('WriteRecord should have .snap or .children');
    }
  }
  return i;
}
function Lp(n, e, t, i, s) {
  if (!i && !s) {
    const r = Tn(n.visibleWrites, e);
    if (r != null) return r;
    {
      const a = Bt(n.visibleWrites, e);
      if (_a(a)) return t;
      if (t == null && !pa(a, ee())) return null;
      {
        const l = t || J.EMPTY_NODE;
        return Yn(a, l);
      }
    }
  } else {
    const r = Bt(n.visibleWrites, e);
    if (!s && _a(r)) return t;
    if (!s && t == null && !pa(r, ee())) return null;
    {
      const a = function (h) {
          return (
            (h.visible || s) &&
            (!i || !~i.indexOf(h.writeId)) &&
            (Qe(h.path, e) || Qe(e, h.path))
          );
        },
        l = Mp(n.allWrites, a, e),
        c = t || J.EMPTY_NODE;
      return Yn(l, c);
    }
  }
}
function Zw(n, e, t) {
  let i = J.EMPTY_NODE;
  const s = Tn(n.visibleWrites, e);
  if (s)
    return (
      s.isLeafNode() ||
        s.forEachChild(Ve, (r, a) => {
          i = i.updateImmediateChild(r, a);
        }),
      i
    );
  if (t) {
    const r = Bt(n.visibleWrites, e);
    return (
      t.forEachChild(Ve, (a, l) => {
        const c = Yn(Bt(r, new oe(a)), l);
        i = i.updateImmediateChild(a, c);
      }),
      vh(r).forEach((a) => {
        i = i.updateImmediateChild(a.name, a.node);
      }),
      i
    );
  } else {
    const r = Bt(n.visibleWrites, e);
    return (
      vh(r).forEach((a) => {
        i = i.updateImmediateChild(a.name, a.node);
      }),
      i
    );
  }
}
function eA(n, e, t, i, s) {
  D(i || s, 'Either existingEventSnap or existingServerSnap must exist');
  const r = ve(e, t);
  if (pa(n.visibleWrites, r)) return null;
  {
    const a = Bt(n.visibleWrites, r);
    return _a(a) ? s.getChild(t) : Yn(a, s.getChild(t));
  }
}
function tA(n, e, t, i) {
  const s = ve(e, t),
    r = Tn(n.visibleWrites, s);
  if (r != null) return r;
  if (i.isCompleteForChild(t)) {
    const a = Bt(n.visibleWrites, s);
    return Yn(a, i.getNode().getImmediateChild(t));
  } else return null;
}
function nA(n, e) {
  return Tn(n.visibleWrites, e);
}
function iA(n, e, t, i, s, r, a) {
  let l;
  const c = Bt(n.visibleWrites, e),
    h = Tn(c, ee());
  if (h != null) l = h;
  else if (t != null) l = Yn(c, t);
  else return [];
  if (((l = l.withIndex(a)), !l.isEmpty() && !l.isLeafNode())) {
    const f = [],
      _ = a.getCompare(),
      g = r ? l.getReverseIteratorFrom(i, a) : l.getIteratorFrom(i, a);
    let R = g.getNext();
    for (; R && f.length < s; ) (_(R, i) !== 0 && f.push(R), (R = g.getNext()));
    return f;
  } else return [];
}
function sA() {
  return { visibleWrites: Xe.empty(), allWrites: [], lastWriteId: -1 };
}
function ma(n, e, t, i) {
  return Lp(n.writeTree, n.treePath, e, t, i);
}
function xp(n, e) {
  return Zw(n.writeTree, n.treePath, e);
}
function Eh(n, e, t, i) {
  return eA(n.writeTree, n.treePath, e, t, i);
}
function Rr(n, e) {
  return nA(n.writeTree, ve(n.treePath, e));
}
function rA(n, e, t, i, s, r) {
  return iA(n.writeTree, n.treePath, e, t, i, s, r);
}
function Rl(n, e, t) {
  return tA(n.writeTree, n.treePath, e, t);
}
function Fp(n, e) {
  return Up(ve(n.treePath, e), n.writeTree);
}
function Up(n, e) {
  return { treePath: n, writeTree: e };
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oA {
  constructor() {
    this.changeMap = new Map();
  }
  trackChildChange(e) {
    const t = e.type,
      i = e.childName;
    (D(
      t === 'child_added' || t === 'child_changed' || t === 'child_removed',
      'Only child changes supported for tracking'
    ),
      D(i !== '.priority', 'Only non-priority child changes can be tracked.'));
    const s = this.changeMap.get(i);
    if (s) {
      const r = s.type;
      if (t === 'child_added' && r === 'child_removed')
        this.changeMap.set(i, fh(i, e.snapshotNode, s.snapshotNode));
      else if (t === 'child_removed' && r === 'child_added')
        this.changeMap.delete(i);
      else if (t === 'child_removed' && r === 'child_changed')
        this.changeMap.set(i, Mw(i, s.oldSnap));
      else if (t === 'child_changed' && r === 'child_added')
        this.changeMap.set(i, Vw(i, e.snapshotNode));
      else if (t === 'child_changed' && r === 'child_changed')
        this.changeMap.set(i, fh(i, e.snapshotNode, s.oldSnap));
      else
        throw Xn(
          'Illegal combination of changes: ' + e + ' occurred after ' + s
        );
    } else this.changeMap.set(i, e);
  }
  getChanges() {
    return Array.from(this.changeMap.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class aA {
  getCompleteChild(e) {
    return null;
  }
  getChildAfterChild(e, t, i) {
    return null;
  }
}
const Bp = new aA();
class Cl {
  constructor(e, t, i = null) {
    ((this.writes_ = e),
      (this.viewCache_ = t),
      (this.optCompleteServerCache_ = i));
  }
  getCompleteChild(e) {
    const t = this.viewCache_.eventCache;
    if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
    {
      const i =
        this.optCompleteServerCache_ != null
          ? new Al(this.optCompleteServerCache_, !0, !1)
          : this.viewCache_.serverCache;
      return Rl(this.writes_, e, i);
    }
  }
  getChildAfterChild(e, t, i) {
    const s =
        this.optCompleteServerCache_ != null
          ? this.optCompleteServerCache_
          : mn(this.viewCache_),
      r = rA(this.writes_, s, t, 1, i, e);
    return r.length === 0 ? null : r[0];
  }
}
function lA(n, e) {
  (D(
    e.eventCache.getNode().isIndexed(n.filter.getIndex()),
    'Event snap not indexed'
  ),
    D(
      e.serverCache.getNode().isIndexed(n.filter.getIndex()),
      'Server snap not indexed'
    ));
}
function cA(n, e, t, i, s) {
  const r = new oA();
  let a, l;
  if (t.type === nt.OVERWRITE) {
    const h = t;
    h.source.fromUser
      ? (a = ga(n, e, h.path, h.snap, i, s, r))
      : (D(h.source.fromServer, 'Unknown source.'),
        (l = h.source.tagged || (e.serverCache.isFiltered() && !H(h.path))),
        (a = Cr(n, e, h.path, h.snap, i, s, l, r)));
  } else if (t.type === nt.MERGE) {
    const h = t;
    h.source.fromUser
      ? (a = hA(n, e, h.path, h.children, i, s, r))
      : (D(h.source.fromServer, 'Unknown source.'),
        (l = h.source.tagged || e.serverCache.isFiltered()),
        (a = ya(n, e, h.path, h.children, i, s, l, r)));
  } else if (t.type === nt.ACK_USER_WRITE) {
    const h = t;
    h.revert
      ? (a = pA(n, e, h.path, i, s, r))
      : (a = dA(n, e, h.path, h.affectedTree, i, s, r));
  } else if (t.type === nt.LISTEN_COMPLETE) a = fA(n, e, t.path, i, r);
  else throw Xn('Unknown operation type: ' + t.type);
  const c = r.getChanges();
  return (uA(e, a, c), { viewCache: a, changes: c });
}
function uA(n, e, t) {
  const i = e.eventCache;
  if (i.isFullyInitialized()) {
    const s = i.getNode().isLeafNode() || i.getNode().isEmpty(),
      r = fa(n);
    (t.length > 0 ||
      !n.eventCache.isFullyInitialized() ||
      (s && !i.getNode().equals(r)) ||
      !i.getNode().getPriority().equals(r.getPriority())) &&
      t.push(Ow(fa(e)));
  }
}
function qp(n, e, t, i, s, r) {
  const a = e.eventCache;
  if (Rr(i, t) != null) return e;
  {
    let l, c;
    if (H(t))
      if (
        (D(
          e.serverCache.isFullyInitialized(),
          'If change path is empty, we must have complete server data'
        ),
        e.serverCache.isFiltered())
      ) {
        const h = mn(e),
          f = h instanceof J ? h : J.EMPTY_NODE,
          _ = xp(i, f);
        l = n.filter.updateFullNode(e.eventCache.getNode(), _, r);
      } else {
        const h = ma(i, mn(e));
        l = n.filter.updateFullNode(e.eventCache.getNode(), h, r);
      }
    else {
      const h = K(t);
      if (h === '.priority') {
        D(Ht(t) === 1, "Can't have a priority with additional path components");
        const f = a.getNode();
        c = e.serverCache.getNode();
        const _ = Eh(i, t, f, c);
        _ != null ? (l = n.filter.updatePriority(f, _)) : (l = a.getNode());
      } else {
        const f = re(t);
        let _;
        if (a.isCompleteForChild(h)) {
          c = e.serverCache.getNode();
          const g = Eh(i, t, a.getNode(), c);
          g != null
            ? (_ = a.getNode().getImmediateChild(h).updateChild(f, g))
            : (_ = a.getNode().getImmediateChild(h));
        } else _ = Rl(i, h, e.serverCache);
        _ != null
          ? (l = n.filter.updateChild(a.getNode(), h, _, f, s, r))
          : (l = a.getNode());
      }
    }
    return Wi(e, l, a.isFullyInitialized() || H(t), n.filter.filtersNodes());
  }
}
function Cr(n, e, t, i, s, r, a, l) {
  const c = e.serverCache;
  let h;
  const f = a ? n.filter : n.filter.getIndexedFilter();
  if (H(t)) h = f.updateFullNode(c.getNode(), i, null);
  else if (f.filtersNodes() && !c.isFiltered()) {
    const R = c.getNode().updateChild(t, i);
    h = f.updateFullNode(c.getNode(), R, null);
  } else {
    const R = K(t);
    if (!c.isCompleteForPath(t) && Ht(t) > 1) return e;
    const P = re(t),
      N = c.getNode().getImmediateChild(R).updateChild(P, i);
    R === '.priority'
      ? (h = f.updatePriority(c.getNode(), N))
      : (h = f.updateChild(c.getNode(), R, N, P, Bp, null));
  }
  const _ = Dp(e, h, c.isFullyInitialized() || H(t), f.filtersNodes()),
    g = new Cl(s, _, r);
  return qp(n, _, t, s, g, l);
}
function ga(n, e, t, i, s, r, a) {
  const l = e.eventCache;
  let c, h;
  const f = new Cl(s, e, r);
  if (H(t))
    ((h = n.filter.updateFullNode(e.eventCache.getNode(), i, a)),
      (c = Wi(e, h, !0, n.filter.filtersNodes())));
  else {
    const _ = K(t);
    if (_ === '.priority')
      ((h = n.filter.updatePriority(e.eventCache.getNode(), i)),
        (c = Wi(e, h, l.isFullyInitialized(), l.isFiltered())));
    else {
      const g = re(t),
        R = l.getNode().getImmediateChild(_);
      let P;
      if (H(g)) P = i;
      else {
        const O = f.getCompleteChild(_);
        O != null
          ? gp(g) === '.priority' && O.getChild(vp(g)).isEmpty()
            ? (P = O)
            : (P = O.updateChild(g, i))
          : (P = J.EMPTY_NODE);
      }
      if (R.equals(P)) c = e;
      else {
        const O = n.filter.updateChild(l.getNode(), _, P, g, f, a);
        c = Wi(e, O, l.isFullyInitialized(), n.filter.filtersNodes());
      }
    }
  }
  return c;
}
function Th(n, e) {
  return n.eventCache.isCompleteForChild(e);
}
function hA(n, e, t, i, s, r, a) {
  let l = e;
  return (
    i.foreach((c, h) => {
      const f = ve(t, c);
      Th(e, K(f)) && (l = ga(n, l, f, h, s, r, a));
    }),
    i.foreach((c, h) => {
      const f = ve(t, c);
      Th(e, K(f)) || (l = ga(n, l, f, h, s, r, a));
    }),
    l
  );
}
function Ih(n, e, t) {
  return (
    t.foreach((i, s) => {
      e = e.updateChild(i, s);
    }),
    e
  );
}
function ya(n, e, t, i, s, r, a, l) {
  if (e.serverCache.getNode().isEmpty() && !e.serverCache.isFullyInitialized())
    return e;
  let c = e,
    h;
  H(t) ? (h = i) : (h = new se(null).setTree(t, i));
  const f = e.serverCache.getNode();
  return (
    h.children.inorderTraversal((_, g) => {
      if (f.hasChild(_)) {
        const R = e.serverCache.getNode().getImmediateChild(_),
          P = Ih(n, R, g);
        c = Cr(n, c, new oe(_), P, s, r, a, l);
      }
    }),
    h.children.inorderTraversal((_, g) => {
      const R = !e.serverCache.isCompleteForChild(_) && g.value === null;
      if (!f.hasChild(_) && !R) {
        const P = e.serverCache.getNode().getImmediateChild(_),
          O = Ih(n, P, g);
        c = Cr(n, c, new oe(_), O, s, r, a, l);
      }
    }),
    c
  );
}
function dA(n, e, t, i, s, r, a) {
  if (Rr(s, t) != null) return e;
  const l = e.serverCache.isFiltered(),
    c = e.serverCache;
  if (i.value != null) {
    if ((H(t) && c.isFullyInitialized()) || c.isCompleteForPath(t))
      return Cr(n, e, t, c.getNode().getChild(t), s, r, l, a);
    if (H(t)) {
      let h = new se(null);
      return (
        c.getNode().forEachChild(Un, (f, _) => {
          h = h.set(new oe(f), _);
        }),
        ya(n, e, t, h, s, r, l, a)
      );
    } else return e;
  } else {
    let h = new se(null);
    return (
      i.foreach((f, _) => {
        const g = ve(t, f);
        c.isCompleteForPath(g) && (h = h.set(f, c.getNode().getChild(g)));
      }),
      ya(n, e, t, h, s, r, l, a)
    );
  }
}
function fA(n, e, t, i, s) {
  const r = e.serverCache,
    a = Dp(e, r.getNode(), r.isFullyInitialized() || H(t), r.isFiltered());
  return qp(n, a, t, i, Bp, s);
}
function pA(n, e, t, i, s, r) {
  let a;
  if (Rr(i, t) != null) return e;
  {
    const l = new Cl(i, e, s),
      c = e.eventCache.getNode();
    let h;
    if (H(t) || K(t) === '.priority') {
      let f;
      if (e.serverCache.isFullyInitialized()) f = ma(i, mn(e));
      else {
        const _ = e.serverCache.getNode();
        (D(_ instanceof J, 'serverChildren would be complete if leaf node'),
          (f = xp(i, _)));
      }
      ((f = f), (h = n.filter.updateFullNode(c, f, r)));
    } else {
      const f = K(t);
      let _ = Rl(i, f, e.serverCache);
      (_ == null &&
        e.serverCache.isCompleteForChild(f) &&
        (_ = c.getImmediateChild(f)),
        _ != null
          ? (h = n.filter.updateChild(c, f, _, re(t), l, r))
          : e.eventCache.getNode().hasChild(f)
            ? (h = n.filter.updateChild(c, f, J.EMPTY_NODE, re(t), l, r))
            : (h = c),
        h.isEmpty() &&
          e.serverCache.isFullyInitialized() &&
          ((a = ma(i, mn(e))),
          a.isLeafNode() && (h = n.filter.updateFullNode(h, a, r))));
    }
    return (
      (a = e.serverCache.isFullyInitialized() || Rr(i, ee()) != null),
      Wi(e, h, a, n.filter.filtersNodes())
    );
  }
}
function _A(n, e) {
  const t = mn(n.viewCache_);
  return t &&
    (n.query._queryParams.loadsAllData() ||
      (!H(e) && !t.getImmediateChild(K(e)).isEmpty()))
    ? t.getChild(e)
    : null;
}
function wh(n, e, t, i) {
  e.type === nt.MERGE &&
    e.source.queryId !== null &&
    (D(
      mn(n.viewCache_),
      'We should always have a full cache before handling merges'
    ),
    D(
      fa(n.viewCache_),
      'Missing event cache, even though we have a server cache'
    ));
  const s = n.viewCache_,
    r = cA(n.processor_, s, e, t, i);
  return (
    lA(n.processor_, r.viewCache),
    D(
      r.viewCache.serverCache.isFullyInitialized() ||
        !s.serverCache.isFullyInitialized(),
      'Once a server snap is complete, it should never go back'
    ),
    (n.viewCache_ = r.viewCache),
    mA(n, r.changes, r.viewCache.eventCache.getNode())
  );
}
function mA(n, e, t, i) {
  const s = n.eventRegistrations_;
  return jw(n.eventGenerator_, e, t, s);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Ah;
function gA(n) {
  (D(!Ah, '__referenceConstructor has already been defined'), (Ah = n));
}
function Sl(n, e, t, i) {
  const s = e.source.queryId;
  if (s !== null) {
    const r = n.views.get(s);
    return (
      D(r != null, 'SyncTree gave us an op for an invalid query.'),
      wh(r, e, t, i)
    );
  } else {
    let r = [];
    for (const a of n.views.values()) r = r.concat(wh(a, e, t, i));
    return r;
  }
}
function Pl(n, e) {
  let t = null;
  for (const i of n.views.values()) t = t || _A(i, e);
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let Rh;
function yA(n) {
  (D(!Rh, '__referenceConstructor has already been defined'), (Rh = n));
}
class Ch {
  constructor(e) {
    ((this.listenProvider_ = e),
      (this.syncPointTree_ = new se(null)),
      (this.pendingWriteTree_ = sA()),
      (this.tagToQueryMap = new Map()),
      (this.queryToTagMap = new Map()));
  }
}
function vA(n, e, t, i, s) {
  return (
    zw(n.pendingWriteTree_, e, t, i, s),
    s ? Qr(n, new _n(Pp(), e, t)) : []
  );
}
function On(n, e, t = !1) {
  const i = Kw(n.pendingWriteTree_, e);
  if (Qw(n.pendingWriteTree_, e)) {
    let r = new se(null);
    return (
      i.snap != null
        ? (r = r.set(ee(), !0))
        : Ge(i.children, (a) => {
            r = r.set(new oe(a), !0);
          }),
      Qr(n, new Ar(i.path, r, t))
    );
  } else return [];
}
function Kr(n, e, t) {
  return Qr(n, new _n(bp(), e, t));
}
function EA(n, e, t) {
  const i = se.fromObject(t);
  return Qr(n, new ns(bp(), e, i));
}
function TA(n, e, t, i) {
  const s = Hp(n, i);
  if (s != null) {
    const r = Gp(s),
      a = r.path,
      l = r.queryId,
      c = He(a, e),
      h = new _n(Np(l), c, t);
    return zp(n, a, h);
  } else return [];
}
function IA(n, e, t, i) {
  const s = Hp(n, i);
  if (s) {
    const r = Gp(s),
      a = r.path,
      l = r.queryId,
      c = He(a, e),
      h = se.fromObject(t),
      f = new ns(Np(l), c, h);
    return zp(n, a, f);
  } else return [];
}
function Wp(n, e, t) {
  const s = n.pendingWriteTree_,
    r = n.syncPointTree_.findOnPath(e, (a, l) => {
      const c = He(a, e),
        h = Pl(l, c);
      if (h) return h;
    });
  return Lp(s, e, r, t, !0);
}
function Qr(n, e) {
  return jp(e, n.syncPointTree_, null, Vp(n.pendingWriteTree_, ee()));
}
function jp(n, e, t, i) {
  if (H(n.path)) return $p(n, e, t, i);
  {
    const s = e.get(ee());
    t == null && s != null && (t = Pl(s, ee()));
    let r = [];
    const a = K(n.path),
      l = n.operationForChild(a),
      c = e.children.get(a);
    if (c && l) {
      const h = t ? t.getImmediateChild(a) : null,
        f = Fp(i, a);
      r = r.concat(jp(l, c, h, f));
    }
    return (s && (r = r.concat(Sl(s, n, i, t))), r);
  }
}
function $p(n, e, t, i) {
  const s = e.get(ee());
  t == null && s != null && (t = Pl(s, ee()));
  let r = [];
  return (
    e.children.inorderTraversal((a, l) => {
      const c = t ? t.getImmediateChild(a) : null,
        h = Fp(i, a),
        f = n.operationForChild(a);
      f && (r = r.concat($p(f, l, c, h)));
    }),
    s && (r = r.concat(Sl(s, n, i, t))),
    r
  );
}
function Hp(n, e) {
  return n.tagToQueryMap.get(e);
}
function Gp(n) {
  const e = n.indexOf('$');
  return (
    D(e !== -1 && e < n.length - 1, 'Bad queryKey.'),
    { queryId: n.substr(e + 1), path: new oe(n.substr(0, e)) }
  );
}
function zp(n, e, t) {
  const i = n.syncPointTree_.get(e);
  D(i, "Missing sync point for query tag that we're tracking");
  const s = Vp(n.pendingWriteTree_, e);
  return Sl(i, t, s, null);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class bl {
  constructor(e) {
    this.node_ = e;
  }
  getImmediateChild(e) {
    const t = this.node_.getImmediateChild(e);
    return new bl(t);
  }
  node() {
    return this.node_;
  }
}
class Nl {
  constructor(e, t) {
    ((this.syncTree_ = e), (this.path_ = t));
  }
  getImmediateChild(e) {
    const t = ve(this.path_, e);
    return new Nl(this.syncTree_, t);
  }
  node() {
    return Wp(this.syncTree_, this.path_);
  }
}
const wA = function (n) {
    return (
      (n = n || {}),
      (n.timestamp = n.timestamp || new Date().getTime()),
      n
    );
  },
  Sh = function (n, e, t) {
    if (!n || typeof n != 'object') return n;
    if (
      (D('.sv' in n, 'Unexpected leaf node or priority contents'),
      typeof n['.sv'] == 'string')
    )
      return AA(n['.sv'], e, t);
    if (typeof n['.sv'] == 'object') return RA(n['.sv'], e);
    D(!1, 'Unexpected server value: ' + JSON.stringify(n, null, 2));
  },
  AA = function (n, e, t) {
    switch (n) {
      case 'timestamp':
        return t.timestamp;
      default:
        D(!1, 'Unexpected server value: ' + n);
    }
  },
  RA = function (n, e, t) {
    n.hasOwnProperty('increment') ||
      D(!1, 'Unexpected server value: ' + JSON.stringify(n, null, 2));
    const i = n.increment;
    typeof i != 'number' && D(!1, 'Unexpected increment value: ' + i);
    const s = e.node();
    if (
      (D(
        s !== null && typeof s < 'u',
        'Expected ChildrenNode.EMPTY_NODE for nulls'
      ),
      !s.isLeafNode())
    )
      return i;
    const a = s.getValue();
    return typeof a != 'number' ? i : a + i;
  },
  CA = function (n, e, t, i) {
    return kl(e, new Nl(t, n), i);
  },
  SA = function (n, e, t) {
    return kl(n, new bl(e), t);
  };
function kl(n, e, t) {
  const i = n.getPriority().val(),
    s = Sh(i, e.getImmediateChild('.priority'), t);
  let r;
  if (n.isLeafNode()) {
    const a = n,
      l = Sh(a.getValue(), e, t);
    return l !== a.getValue() || s !== a.getPriority().val()
      ? new me(l, Oe(s))
      : n;
  } else {
    const a = n;
    return (
      (r = a),
      s !== a.getPriority().val() && (r = r.updatePriority(new me(s))),
      a.forEachChild(Ve, (l, c) => {
        const h = kl(c, e.getImmediateChild(l), t);
        h !== c && (r = r.updateImmediateChild(l, h));
      }),
      r
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Dl {
  constructor(e = '', t = null, i = { children: {}, childCount: 0 }) {
    ((this.name = e), (this.parent = t), (this.node = i));
  }
}
function Ol(n, e) {
  let t = e instanceof oe ? e : new oe(e),
    i = n,
    s = K(t);
  for (; s !== null; ) {
    const r = Bn(i.node.children, s) || { children: {}, childCount: 0 };
    ((i = new Dl(s, i, r)), (t = re(t)), (s = K(t)));
  }
  return i;
}
function ri(n) {
  return n.node.value;
}
function Kp(n, e) {
  ((n.node.value = e), va(n));
}
function Qp(n) {
  return n.node.childCount > 0;
}
function PA(n) {
  return ri(n) === void 0 && !Qp(n);
}
function Yr(n, e) {
  Ge(n.node.children, (t, i) => {
    e(new Dl(t, n, i));
  });
}
function Yp(n, e, t, i) {
  (t && e(n),
    Yr(n, (s) => {
      Yp(s, e, !0);
    }));
}
function bA(n, e, t) {
  let i = n.parent;
  for (; i !== null; ) {
    if (e(i)) return !0;
    i = i.parent;
  }
  return !1;
}
function Es(n) {
  return new oe(n.parent === null ? n.name : Es(n.parent) + '/' + n.name);
}
function va(n) {
  n.parent !== null && NA(n.parent, n.name, n);
}
function NA(n, e, t) {
  const i = PA(t),
    s = Rt(n.node.children, e);
  i && s
    ? (delete n.node.children[e], n.node.childCount--, va(n))
    : !i && !s && ((n.node.children[e] = t.node), n.node.childCount++, va(n));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const kA = /[\[\].#$\/\u0000-\u001F\u007F]/,
  DA = /[\[\].#$\u0000-\u001F\u007F]/,
  Lo = 10 * 1024 * 1024,
  Xp = function (n) {
    return typeof n == 'string' && n.length !== 0 && !kA.test(n);
  },
  OA = function (n) {
    return typeof n == 'string' && n.length !== 0 && !DA.test(n);
  },
  VA = function (n) {
    return (n && (n = n.replace(/^\/*\.info(\/|$)/, '/')), OA(n));
  },
  Jp = function (n, e, t) {
    const i = t instanceof oe ? new fw(t, n) : t;
    if (e === void 0) throw new Error(n + 'contains undefined ' + tn(i));
    if (typeof e == 'function')
      throw new Error(
        n + 'contains a function ' + tn(i) + ' with contents = ' + e.toString()
      );
    if (Xf(e)) throw new Error(n + 'contains ' + e.toString() + ' ' + tn(i));
    if (typeof e == 'string' && e.length > Lo / 3 && Pr(e) > Lo)
      throw new Error(
        n +
          'contains a string greater than ' +
          Lo +
          ' utf8 bytes ' +
          tn(i) +
          " ('" +
          e.substring(0, 50) +
          "...')"
      );
    if (e && typeof e == 'object') {
      let s = !1,
        r = !1;
      if (
        (Ge(e, (a, l) => {
          if (a === '.value') s = !0;
          else if (a !== '.priority' && a !== '.sv' && ((r = !0), !Xp(a)))
            throw new Error(
              n +
                ' contains an invalid key (' +
                a +
                ') ' +
                tn(i) +
                `.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`
            );
          (pw(i, a), Jp(n, l, i), _w(i));
        }),
        s && r)
      )
        throw new Error(
          n +
            ' contains ".value" child ' +
            tn(i) +
            ' in addition to actual children.'
        );
    }
  },
  MA = function (n, e) {
    const t = e.path.toString();
    if (
      typeof e.repoInfo.host != 'string' ||
      e.repoInfo.host.length === 0 ||
      (!Xp(e.repoInfo.namespace) &&
        e.repoInfo.host.split(':')[0] !== 'localhost') ||
      (t.length !== 0 && !VA(t))
    )
      throw new Error(
        _m(n, 'url') +
          `must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`
      );
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class LA {
  constructor() {
    ((this.eventLists_ = []), (this.recursionDepth_ = 0));
  }
}
function xA(n, e) {
  let t = null;
  for (let i = 0; i < e.length; i++) {
    const s = e[i],
      r = s.getPath();
    (t !== null && !Ep(r, t.path) && (n.eventLists_.push(t), (t = null)),
      t === null && (t = { events: [], path: r }),
      t.events.push(s));
  }
  t && n.eventLists_.push(t);
}
function In(n, e, t) {
  (xA(n, t), FA(n, (i) => Qe(i, e) || Qe(e, i)));
}
function FA(n, e) {
  n.recursionDepth_++;
  let t = !0;
  for (let i = 0; i < n.eventLists_.length; i++) {
    const s = n.eventLists_[i];
    if (s) {
      const r = s.path;
      e(r) ? (UA(n.eventLists_[i]), (n.eventLists_[i] = null)) : (t = !1);
    }
  }
  (t && (n.eventLists_ = []), n.recursionDepth_--);
}
function UA(n) {
  for (let e = 0; e < n.events.length; e++) {
    const t = n.events[e];
    if (t !== null) {
      n.events[e] = null;
      const i = t.getEventRunner();
      (Bi && De('event: ' + t.toString()), ys(i));
    }
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const BA = 'repo_interrupt',
  qA = 25;
class WA {
  constructor(e, t, i, s) {
    ((this.repoInfo_ = e),
      (this.forceRestClient_ = t),
      (this.authTokenProvider_ = i),
      (this.appCheckProvider_ = s),
      (this.dataUpdateCount = 0),
      (this.statsListener_ = null),
      (this.eventQueue_ = new LA()),
      (this.nextWriteId_ = 1),
      (this.interceptServerDataCallback_ = null),
      (this.onDisconnect_ = wr()),
      (this.transactionQueueTree_ = new Dl()),
      (this.persistentConnection_ = null),
      (this.key = this.repoInfo_.toURLString()));
  }
  toString() {
    return (
      (this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host
    );
  }
}
function jA(n, e, t) {
  if (((n.stats_ = vl(n.repoInfo_)), n.forceRestClient_ || xI()))
    ((n.server_ = new Ir(
      n.repoInfo_,
      (i, s, r, a) => {
        Ph(n, i, s, r, a);
      },
      n.authTokenProvider_,
      n.appCheckProvider_
    )),
      setTimeout(() => bh(n, !0), 0));
  else {
    if (typeof t < 'u' && t !== null) {
      if (typeof t != 'object')
        throw new Error(
          'Only objects are supported for option databaseAuthVariableOverride'
        );
      try {
        Te(t);
      } catch (i) {
        throw new Error('Invalid authOverride provided: ' + i);
      }
    }
    ((n.persistentConnection_ = new vt(
      n.repoInfo_,
      e,
      (i, s, r, a) => {
        Ph(n, i, s, r, a);
      },
      (i) => {
        bh(n, i);
      },
      (i) => {
        HA(n, i);
      },
      n.authTokenProvider_,
      n.appCheckProvider_,
      t
    )),
      (n.server_ = n.persistentConnection_));
  }
  (n.authTokenProvider_.addTokenChangeListener((i) => {
    n.server_.refreshAuthToken(i);
  }),
    n.appCheckProvider_.addTokenChangeListener((i) => {
      n.server_.refreshAppCheckToken(i.token);
    }),
    (n.statsReporter_ = jI(n.repoInfo_, () => new Ww(n.stats_, n.server_))),
    (n.infoData_ = new xw()),
    (n.infoSyncTree_ = new Ch({
      startListening: (i, s, r, a) => {
        let l = [];
        const c = n.infoData_.getNode(i._path);
        return (
          c.isEmpty() ||
            ((l = Kr(n.infoSyncTree_, i._path, c)),
            setTimeout(() => {
              a('ok');
            }, 0)),
          l
        );
      },
      stopListening: () => {},
    })),
    Vl(n, 'connected', !1),
    (n.serverSyncTree_ = new Ch({
      startListening: (i, s, r, a) => (
        n.server_.listen(i, r, s, (l, c) => {
          const h = a(l, c);
          In(n.eventQueue_, i._path, h);
        }),
        []
      ),
      stopListening: (i, s) => {
        n.server_.unlisten(i, s);
      },
    })));
}
function $A(n) {
  const t = n.infoData_.getNode(new oe('.info/serverTimeOffset')).val() || 0;
  return new Date().getTime() + t;
}
function Zp(n) {
  return wA({ timestamp: $A(n) });
}
function Ph(n, e, t, i, s) {
  n.dataUpdateCount++;
  const r = new oe(e);
  t = n.interceptServerDataCallback_ ? n.interceptServerDataCallback_(e, t) : t;
  let a = [];
  if (s)
    if (i) {
      const c = sr(t, (h) => Oe(h));
      a = IA(n.serverSyncTree_, r, c, s);
    } else {
      const c = Oe(t);
      a = TA(n.serverSyncTree_, r, c, s);
    }
  else if (i) {
    const c = sr(t, (h) => Oe(h));
    a = EA(n.serverSyncTree_, r, c);
  } else {
    const c = Oe(t);
    a = Kr(n.serverSyncTree_, r, c);
  }
  let l = r;
  (a.length > 0 && (l = Ll(n, r)), In(n.eventQueue_, l, a));
}
function bh(n, e) {
  (Vl(n, 'connected', e), e === !1 && zA(n));
}
function HA(n, e) {
  Ge(e, (t, i) => {
    Vl(n, t, i);
  });
}
function Vl(n, e, t) {
  const i = new oe('/.info/' + e),
    s = Oe(t);
  n.infoData_.updateSnapshot(i, s);
  const r = Kr(n.infoSyncTree_, i, s);
  In(n.eventQueue_, i, r);
}
function GA(n) {
  return n.nextWriteId_++;
}
function zA(n) {
  e_(n, 'onDisconnectEvents');
  const e = Zp(n),
    t = wr();
  da(n.onDisconnect_, ee(), (s, r) => {
    const a = CA(s, r, n.serverSyncTree_, e);
    Sp(t, s, a);
  });
  let i = [];
  (da(t, ee(), (s, r) => {
    i = i.concat(Kr(n.serverSyncTree_, s, r));
    const a = XA(n, s);
    Ll(n, a);
  }),
    (n.onDisconnect_ = wr()),
    In(n.eventQueue_, ee(), i));
}
function KA(n) {
  n.persistentConnection_ && n.persistentConnection_.interrupt(BA);
}
function e_(n, ...e) {
  let t = '';
  (n.persistentConnection_ && (t = n.persistentConnection_.id + ':'),
    De(t, ...e));
}
function t_(n, e, t) {
  return Wp(n.serverSyncTree_, e, t) || J.EMPTY_NODE;
}
function Ml(n, e = n.transactionQueueTree_) {
  if ((e || Xr(n, e), ri(e))) {
    const t = i_(n, e);
    (D(t.length > 0, 'Sending zero length transaction queue'),
      t.every((s) => s.status === 0) && QA(n, Es(e), t));
  } else
    Qp(e) &&
      Yr(e, (t) => {
        Ml(n, t);
      });
}
function QA(n, e, t) {
  const i = t.map((h) => h.currentWriteId),
    s = t_(n, e, i);
  let r = s;
  const a = s.hash();
  for (let h = 0; h < t.length; h++) {
    const f = t[h];
    (D(
      f.status === 0,
      'tryToSendTransactionQueue_: items in queue should all be run.'
    ),
      (f.status = 1),
      f.retryCount++);
    const _ = He(e, f.path);
    r = r.updateChild(_, f.currentOutputSnapshotRaw);
  }
  const l = r.val(!0),
    c = e;
  n.server_.put(
    c.toString(),
    l,
    (h) => {
      e_(n, 'transaction put response', { path: c.toString(), status: h });
      let f = [];
      if (h === 'ok') {
        const _ = [];
        for (let g = 0; g < t.length; g++)
          ((t[g].status = 2),
            (f = f.concat(On(n.serverSyncTree_, t[g].currentWriteId))),
            t[g].onComplete &&
              _.push(() =>
                t[g].onComplete(null, !0, t[g].currentOutputSnapshotResolved)
              ),
            t[g].unwatcher());
        (Xr(n, Ol(n.transactionQueueTree_, e)),
          Ml(n, n.transactionQueueTree_),
          In(n.eventQueue_, e, f));
        for (let g = 0; g < _.length; g++) ys(_[g]);
      } else {
        if (h === 'datastale')
          for (let _ = 0; _ < t.length; _++)
            t[_].status === 3 ? (t[_].status = 4) : (t[_].status = 0);
        else {
          je('transaction at ' + c.toString() + ' failed: ' + h);
          for (let _ = 0; _ < t.length; _++)
            ((t[_].status = 4), (t[_].abortReason = h));
        }
        Ll(n, e);
      }
    },
    a
  );
}
function Ll(n, e) {
  const t = n_(n, e),
    i = Es(t),
    s = i_(n, t);
  return (YA(n, s, i), i);
}
function YA(n, e, t) {
  if (e.length === 0) return;
  const i = [];
  let s = [];
  const a = e.filter((l) => l.status === 0).map((l) => l.currentWriteId);
  for (let l = 0; l < e.length; l++) {
    const c = e[l],
      h = He(t, c.path);
    let f = !1,
      _;
    if (
      (D(
        h !== null,
        'rerunTransactionsUnderNode_: relativePath should not be null.'
      ),
      c.status === 4)
    )
      ((f = !0),
        (_ = c.abortReason),
        (s = s.concat(On(n.serverSyncTree_, c.currentWriteId, !0))));
    else if (c.status === 0)
      if (c.retryCount >= qA)
        ((f = !0),
          (_ = 'maxretry'),
          (s = s.concat(On(n.serverSyncTree_, c.currentWriteId, !0))));
      else {
        const g = t_(n, c.path, a);
        c.currentInputSnapshot = g;
        const R = e[l].update(g.val());
        if (R !== void 0) {
          Jp('transaction failed: Data returned ', R, c.path);
          let P = Oe(R);
          (typeof R == 'object' && R != null && Rt(R, '.priority')) ||
            (P = P.updatePriority(g.getPriority()));
          const N = c.currentWriteId,
            $ = Zp(n),
            q = SA(P, g, $);
          ((c.currentOutputSnapshotRaw = P),
            (c.currentOutputSnapshotResolved = q),
            (c.currentWriteId = GA(n)),
            a.splice(a.indexOf(N), 1),
            (s = s.concat(
              vA(n.serverSyncTree_, c.path, q, c.currentWriteId, c.applyLocally)
            )),
            (s = s.concat(On(n.serverSyncTree_, N, !0))));
        } else
          ((f = !0),
            (_ = 'nodata'),
            (s = s.concat(On(n.serverSyncTree_, c.currentWriteId, !0))));
      }
    (In(n.eventQueue_, t, s),
      (s = []),
      f &&
        ((e[l].status = 2),
        (function (g) {
          setTimeout(g, Math.floor(0));
        })(e[l].unwatcher),
        e[l].onComplete &&
          (_ === 'nodata'
            ? i.push(() => e[l].onComplete(null, !1, e[l].currentInputSnapshot))
            : i.push(() => e[l].onComplete(new Error(_), !1, null)))));
  }
  Xr(n, n.transactionQueueTree_);
  for (let l = 0; l < i.length; l++) ys(i[l]);
  Ml(n, n.transactionQueueTree_);
}
function n_(n, e) {
  let t,
    i = n.transactionQueueTree_;
  for (t = K(e); t !== null && ri(i) === void 0; )
    ((i = Ol(i, t)), (e = re(e)), (t = K(e)));
  return i;
}
function i_(n, e) {
  const t = [];
  return (s_(n, e, t), t.sort((i, s) => i.order - s.order), t);
}
function s_(n, e, t) {
  const i = ri(e);
  if (i) for (let s = 0; s < i.length; s++) t.push(i[s]);
  Yr(e, (s) => {
    s_(n, s, t);
  });
}
function Xr(n, e) {
  const t = ri(e);
  if (t) {
    let i = 0;
    for (let s = 0; s < t.length; s++)
      t[s].status !== 2 && ((t[i] = t[s]), i++);
    ((t.length = i), Kp(e, t.length > 0 ? t : void 0));
  }
  Yr(e, (i) => {
    Xr(n, i);
  });
}
function XA(n, e) {
  const t = Es(n_(n, e)),
    i = Ol(n.transactionQueueTree_, e);
  return (
    bA(i, (s) => {
      xo(n, s);
    }),
    xo(n, i),
    Yp(i, (s) => {
      xo(n, s);
    }),
    t
  );
}
function xo(n, e) {
  const t = ri(e);
  if (t) {
    const i = [];
    let s = [],
      r = -1;
    for (let a = 0; a < t.length; a++)
      t[a].status === 3 ||
        (t[a].status === 1
          ? (D(r === a - 1, 'All SENT items should be at beginning of queue.'),
            (r = a),
            (t[a].status = 3),
            (t[a].abortReason = 'set'))
          : (D(t[a].status === 0, 'Unexpected transaction status in abort'),
            t[a].unwatcher(),
            (s = s.concat(On(n.serverSyncTree_, t[a].currentWriteId, !0))),
            t[a].onComplete &&
              i.push(t[a].onComplete.bind(null, new Error('set'), !1, null))));
    (r === -1 ? Kp(e, void 0) : (t.length = r + 1),
      In(n.eventQueue_, Es(e), s));
    for (let a = 0; a < i.length; a++) ys(i[a]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function JA(n) {
  let e = '';
  const t = n.split('/');
  for (let i = 0; i < t.length; i++)
    if (t[i].length > 0) {
      let s = t[i];
      try {
        s = decodeURIComponent(s.replace(/\+/g, ' '));
      } catch {}
      e += '/' + s;
    }
  return e;
}
function ZA(n) {
  const e = {};
  n.charAt(0) === '?' && (n = n.substring(1));
  for (const t of n.split('&')) {
    if (t.length === 0) continue;
    const i = t.split('=');
    i.length === 2
      ? (e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]))
      : je(`Invalid query segment '${t}' in query '${n}'`);
  }
  return e;
}
const Nh = function (n, e) {
    const t = eR(n),
      i = t.namespace;
    (t.domain === 'firebase.com' &&
      fn(
        t.host +
          ' is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead'
      ),
      (!i || i === 'undefined') &&
        t.domain !== 'localhost' &&
        fn(
          'Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com'
        ),
      t.secure || bI());
    const s = t.scheme === 'ws' || t.scheme === 'wss';
    return {
      repoInfo: new BI(t.host, t.secure, i, s, e, '', i !== t.subdomain),
      path: new oe(t.pathString),
    };
  },
  eR = function (n) {
    let e = '',
      t = '',
      i = '',
      s = '',
      r = '',
      a = !0,
      l = 'https',
      c = 443;
    if (typeof n == 'string') {
      let h = n.indexOf('//');
      h >= 0 && ((l = n.substring(0, h - 1)), (n = n.substring(h + 2)));
      let f = n.indexOf('/');
      f === -1 && (f = n.length);
      let _ = n.indexOf('?');
      (_ === -1 && (_ = n.length),
        (e = n.substring(0, Math.min(f, _))),
        f < _ && (s = JA(n.substring(f, _))));
      const g = ZA(n.substring(Math.min(n.length, _)));
      ((h = e.indexOf(':')),
        h >= 0
          ? ((a = l === 'https' || l === 'wss'),
            (c = parseInt(e.substring(h + 1), 10)))
          : (h = e.length));
      const R = e.slice(0, h);
      if (R.toLowerCase() === 'localhost') t = 'localhost';
      else if (R.split('.').length <= 2) t = R;
      else {
        const P = e.indexOf('.');
        ((i = e.substring(0, P).toLowerCase()),
          (t = e.substring(P + 1)),
          (r = i));
      }
      'ns' in g && (r = g.ns);
    }
    return {
      host: e,
      port: c,
      domain: t,
      subdomain: i,
      secure: a,
      scheme: l,
      pathString: s,
      namespace: r,
    };
  };
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xl {
  constructor(e, t, i, s) {
    ((this._repo = e),
      (this._path = t),
      (this._queryParams = i),
      (this._orderByCalled = s));
  }
  get key() {
    return H(this._path) ? null : gp(this._path);
  }
  get ref() {
    return new oi(this._repo, this._path);
  }
  get _queryIdentifier() {
    const e = _h(this._queryParams),
      t = gl(e);
    return t === '{}' ? 'default' : t;
  }
  get _queryObject() {
    return _h(this._queryParams);
  }
  isEqual(e) {
    if (((e = he(e)), !(e instanceof xl))) return !1;
    const t = this._repo === e._repo,
      i = Ep(this._path, e._path),
      s = this._queryIdentifier === e._queryIdentifier;
    return t && i && s;
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return this._repo.toString() + dw(this._path);
  }
}
class oi extends xl {
  constructor(e, t) {
    super(e, t, new wl(), !1);
  }
  get parent() {
    const e = vp(this._path);
    return e === null ? null : new oi(this._repo, e);
  }
  get root() {
    let e = this;
    for (; e.parent !== null; ) e = e.parent;
    return e;
  }
}
gA(oi);
yA(oi);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const tR = 'FIREBASE_DATABASE_EMULATOR_HOST',
  Ea = {};
let nR = !1;
function iR(n, e, t, i, s) {
  let r = i || n.options.databaseURL;
  r === void 0 &&
    (n.options.projectId ||
      fn(
        "Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."
      ),
    De('Using default host for project ', n.options.projectId),
    (r = `${n.options.projectId}-default-rtdb.firebaseio.com`));
  let a = Nh(r, s),
    l = a.repoInfo,
    c;
  (typeof kh < 'u' && Yu && (c = Yu[tR]),
    c
      ? ((r = `http://${c}?ns=${l.namespace}`),
        (a = Nh(r, s)),
        (l = a.repoInfo))
      : a.repoInfo.secure);
  const h = new UI(n.name, n.options, e);
  (MA('Invalid Firebase Database URL', a),
    H(a.path) ||
      fn(
        'Database URL must point to the root of a Firebase Database (not including a child path).'
      ));
  const f = rR(l, n, h, new FI(n.name, t));
  return new oR(f, n);
}
function sR(n, e) {
  const t = Ea[e];
  ((!t || t[n.key] !== n) &&
    fn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),
    KA(n),
    delete t[n.key]);
}
function rR(n, e, t, i) {
  let s = Ea[e.name];
  s || ((s = {}), (Ea[e.name] = s));
  let r = s[n.toURLString()];
  return (
    r &&
      fn(
        'Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.'
      ),
    (r = new WA(n, nR, t, i)),
    (s[n.toURLString()] = r),
    r
  );
}
class oR {
  constructor(e, t) {
    ((this._repoInternal = e),
      (this.app = t),
      (this.type = 'database'),
      (this._instanceStarted = !1));
  }
  get _repo() {
    return (
      this._instanceStarted ||
        (jA(
          this._repoInternal,
          this.app.options.appId,
          this.app.options.databaseAuthVariableOverride
        ),
        (this._instanceStarted = !0)),
      this._repoInternal
    );
  }
  get _root() {
    return (
      this._rootInternal || (this._rootInternal = new oi(this._repo, ee())),
      this._rootInternal
    );
  }
  _delete() {
    return (
      this._rootInternal !== null &&
        (sR(this._repo, this.app.name),
        (this._repoInternal = null),
        (this._rootInternal = null)),
      Promise.resolve()
    );
  }
  _checkNotDeleted(e) {
    this._rootInternal === null &&
      fn('Cannot call ' + e + ' on a deleted database.');
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function aR(n) {
  (wI(gn),
    an(
      new qt(
        'database',
        (e, { instanceIdentifier: t }) => {
          const i = e.getProvider('app').getImmediate(),
            s = e.getProvider('auth-internal'),
            r = e.getProvider('app-check-internal');
          return iR(i, s, r, t);
        },
        'PUBLIC'
      ).setMultipleInstances(!0)
    ),
    it(Xu, Ju, n),
    it(Xu, Ju, 'esm2017'));
}
vt.prototype.simpleListen = function (n, e) {
  this.sendRequest('q', { p: n }, e);
};
vt.prototype.echo = function (n, e) {
  this.sendRequest('echo', { d: n }, e);
};
aR();
export {
  Zn as E,
  Ot as G,
  _e as T,
  qh as a,
  vR as b,
  SR as c,
  CR as d,
  kR as e,
  RR as f,
  hR as g,
  NR as h,
  sg as i,
  DR as j,
  AR as k,
  MR as l,
  gR as m,
  fR as n,
  mR as o,
  _R as p,
  PR as q,
  pR as r,
  OR as s,
  dR as t,
  VR as u,
  yR as v,
  bR as w,
};
