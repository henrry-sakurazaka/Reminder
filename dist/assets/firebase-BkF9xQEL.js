import{g as rn,p as Lh,B as q_}from"./vite-plugin-node-polyfills-CYF0W5wK.js";import{_ as wa}from"./tslib-BGVaTf34.js";import{o as W_}from"./idb-BXWtuYvb.js";var Wc={};/**
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
 */const xh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const O=function(n,e){if(!n)throw Xn(e)},Xn=function(n){return new Error("Firebase Database ("+xh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Fh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},j_=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(r&63)<<12|(a&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},Aa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=r>>2,_=(r&3)<<4|l>>4;let g=(l&15)<<2|h>>6,R=h&63;c||(R=64,a||(g=64)),i.push(t[f],t[_],t[g],t[R])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Fh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):j_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||l==null||h==null||_==null)throw new H_;const g=r<<2|l>>4;if(i.push(g),h!==64){const R=l<<4&240|h>>2;if(i.push(R),_!==64){const S=h<<6&192|_;i.push(S)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class H_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uh=function(n){const e=Fh(n);return Aa.encodeByteArray(e,!0)},er=function(n){return Uh(n).replace(/\./g,"")},tr=function(n){try{return Aa.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function G_(n){return Bh(void 0,n)}function Bh(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$_(t)||(n[t]=Bh(n[t],e[t]));return n}function $_(n){return n!=="__proto__"}/**
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
 */function z_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof rn<"u")return rn;throw new Error("Unable to locate global object.")}/**
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
 */const K_=()=>z_().__FIREBASE_DEFAULTS__,Q_=()=>{if(typeof Lh>"u"||typeof Wc>"u")return;const n=Wc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Y_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&tr(n[1]);return e&&JSON.parse(e)},Sr=()=>{try{return K_()||Q_()||Y_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qh=n=>{var e,t;return(t=(e=Sr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},X_=n=>{const e=qh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Wh=()=>{var n;return(n=Sr())===null||n===void 0?void 0:n.config},jh=n=>{var e;return(e=Sr())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function J_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[er(JSON.stringify(t)),er(JSON.stringify(a)),""].join(".")}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Z_(){var n;const e=(n=Sr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(rn.process)==="[object process]"}catch{return!1}}function em(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nm(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function im(){return xh.NODE_ADMIN===!0}function sm(){return!Z_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rm(){try{return typeof indexedDB=="object"}catch{return!1}}function om(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const am="FirebaseError";class At extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=am,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ts.prototype.create)}}class ts{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?lm(r,i):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new At(s,l,i)}}function lm(n,e){return n.replace(cm,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const cm=/\{\$([^}]+)}/g;/**
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
 */function ji(n){return JSON.parse(n)}function Te(n){return JSON.stringify(n)}/**
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
 */const Gh=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=ji(tr(r[0])||""),t=ji(tr(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},um=function(n){const e=Gh(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},hm=function(n){const e=Gh(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Rt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Bn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Bo(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function nr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ir(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(jc(r)&&jc(a)){if(!ir(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function jc(n){return n!==null&&typeof n=="object"}/**
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
 */function Jn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Pi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function bi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class dm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let _=0;_<16;_++)i[_]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let _=0;_<16;_++)i[_]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let _=16;_<80;_++){const g=i[_-3]^i[_-8]^i[_-14]^i[_-16];i[_]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4],h,f;for(let _=0;_<80;_++){_<40?_<20?(h=l^r&(a^l),f=1518500249):(h=r^a^l,f=1859775393):_<60?(h=r&a|l&(r|a),f=2400959708):(h=r^a^l,f=3395469782);const g=(s<<5|s>>>27)+h+c+f+i[_]&4294967295;c=l,l=a,a=(r<<30|r>>>2)&4294967295,r=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}else for(;s<t;)if(r[a]=e[s],++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function fm(n,e){const t=new pm(n,e);return t.subscribe.bind(t)}class pm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");_m(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ro),s.error===void 0&&(s.error=Ro),s.complete===void 0&&(s.complete=Ro);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _m(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ro(){}function mm(n,e){return`${n} failed: ${e} argument `}/**
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
 */const gm=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,O(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(r<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ce(n){return n&&n._delegate?n._delegate:n}class qt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class ym{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Ra;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Em(e))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Zt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Zt){return this.instances.has(e)}getOptions(e=Zt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:vm(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Zt){return this.component?this.component.multipleInstances?e:Zt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function vm(n){return n===Zt?void 0:n}function Em(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ym(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(j||(j={}));const Im={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},wm=j.INFO,Am={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Rm=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Am[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class br{constructor(e){this.name=e,this._logLevel=wm,this._logHandler=Rm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}/**
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
 */class Cm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Sm(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Sm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qo="@firebase/app",Hc="0.10.13";/**
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
 */const Et=new br("@firebase/app"),Pm="@firebase/app-compat",bm="@firebase/analytics-compat",Nm="@firebase/analytics",km="@firebase/app-check-compat",Dm="@firebase/app-check",Om="@firebase/auth",Vm="@firebase/auth-compat",Mm="@firebase/database",Lm="@firebase/data-connect",xm="@firebase/database-compat",Fm="@firebase/functions",Um="@firebase/functions-compat",Bm="@firebase/installations",qm="@firebase/installations-compat",Wm="@firebase/messaging",jm="@firebase/messaging-compat",Hm="@firebase/performance",Gm="@firebase/performance-compat",$m="@firebase/remote-config",zm="@firebase/remote-config-compat",Km="@firebase/storage",Qm="@firebase/storage-compat",Ym="@firebase/firestore",Xm="@firebase/vertexai-preview",Jm="@firebase/firestore-compat",Zm="firebase",eg="10.14.1";/**
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
 */const Wo="[DEFAULT]",tg={[qo]:"fire-core",[Pm]:"fire-core-compat",[Nm]:"fire-analytics",[bm]:"fire-analytics-compat",[Dm]:"fire-app-check",[km]:"fire-app-check-compat",[Om]:"fire-auth",[Vm]:"fire-auth-compat",[Mm]:"fire-rtdb",[Lm]:"fire-data-connect",[xm]:"fire-rtdb-compat",[Fm]:"fire-fn",[Um]:"fire-fn-compat",[Bm]:"fire-iid",[qm]:"fire-iid-compat",[Wm]:"fire-fcm",[jm]:"fire-fcm-compat",[Hm]:"fire-perf",[Gm]:"fire-perf-compat",[$m]:"fire-rc",[zm]:"fire-rc-compat",[Km]:"fire-gcs",[Qm]:"fire-gcs-compat",[Ym]:"fire-fst",[Jm]:"fire-fst-compat",[Xm]:"fire-vertex","fire-js":"fire-js",[Zm]:"fire-js-all"};/**
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
 */const Hi=new Map,ng=new Map,jo=new Map;function Gc(n,e){try{n.container.addComponent(e)}catch(t){Et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function on(n){const e=n.name;if(jo.has(e))return Et.debug(`There were multiple attempts to register component ${e}.`),!1;jo.set(e,n);for(const t of Hi.values())Gc(t,n);for(const t of ng.values())Gc(t,n);return!0}function Sa(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function tt(n){return n.settings!==void 0}/**
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
 */const ig={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new ts("app","Firebase",ig);/**
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
 */class sg{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
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
 */const mn=eg;function rg(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Wo,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(t||(t=Wh()),!t)throw xt.create("no-options");const r=Hi.get(s);if(r){if(ir(t,r.options)&&ir(i,r.config))return r;throw xt.create("duplicate-app",{appName:s})}const a=new Tm(s);for(const c of jo.values())a.addComponent(c);const l=new sg(t,i,a);return Hi.set(s,l),l}function $h(n=Wo){const e=Hi.get(n);if(!e&&n===Wo&&Wh())return rg();if(!e)throw xt.create("no-app",{appName:n});return e}function hR(){return Array.from(Hi.values())}function it(n,e,t){var i;let s=(i=tg[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const l=[`Unable to register library "${s}" with version "${e}":`];r&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Et.warn(l.join(" "));return}on(new qt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const og="firebase-heartbeat-database",ag=1,Gi="firebase-heartbeat-store";let Co=null;function zh(){return Co||(Co=W_(og,ag,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gi)}catch(t){console.warn(t)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),Co}async function lg(n){try{const t=(await zh()).transaction(Gi),i=await t.objectStore(Gi).get(Kh(n));return await t.done,i}catch(e){if(e instanceof At)Et.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Et.warn(t.message)}}}async function $c(n,e){try{const i=(await zh()).transaction(Gi,"readwrite");await i.objectStore(Gi).put(e,Kh(n)),await i.done}catch(t){if(t instanceof At)Et.warn(t.message);else{const i=xt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Et.warn(i.message)}}}function Kh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const cg=1024,ug=30*24*60*60*1e3;class hg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fg(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(a=>a.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ug}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Et.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zc(),{heartbeatsToSend:i,unsentEntries:s}=dg(this._heartbeatsCache.heartbeats),r=er(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Et.warn(t),""}}}function zc(){return new Date().toISOString().substring(0,10)}function dg(n,e=cg){const t=[];let i=n.slice();for(const s of n){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Kc(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Kc(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class fg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rm()?om().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return $c(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kc(n){return er(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function pg(n){on(new qt("platform-logger",e=>new Cm(e),"PRIVATE")),on(new qt("heartbeat",e=>new hg(e),"PRIVATE")),it(qo,Hc,n),it(qo,Hc,"esm2017"),it("fire-js","")}pg("");var _g="firebase",mg="10.14.1";/**
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
 */it(_g,mg,"app");function Qh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gg=Qh,Yh=new ts("auth","Firebase",Qh());/**
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
 */const sr=new br("@firebase/auth");function yg(n,...e){sr.logLevel<=j.WARN&&sr.warn(`Auth (${mn}): ${n}`,...e)}function Gs(n,...e){sr.logLevel<=j.ERROR&&sr.error(`Auth (${mn}): ${n}`,...e)}/**
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
 */function Ze(n,...e){throw Pa(n,...e)}function st(n,...e){return Pa(n,...e)}function Xh(n,e,t){const i=Object.assign(Object.assign({},gg()),{[e]:t});return new ts("auth","Firebase",i).create(e,{appName:n.name})}function gt(n){return Xh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pa(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Yh.create(n,...e)}function x(n,e,...t){if(!n)throw Pa(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Gs(e),new Error(e)}function Tt(n,e){n||ft(e)}/**
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
 */function Ho(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function vg(){return Qc()==="http:"||Qc()==="https:"}function Qc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Eg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vg()||tm()||"connection"in navigator)?navigator.onLine:!0}function Tg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,Tt(t>e,"Short delay should be less than long delay!"),this.isMobile=Ca()||Hh()}get(){return Eg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ba(n,e){Tt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Jh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ig={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const wg=new ns(3e4,6e4);function zt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ct(n,e,t,i,s={}){return Zh(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const l=Jn(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},r);return em()||(h.referrerPolicy="no-referrer"),Jh.fetch()(ed(n,n.config.apiHost,t,l),h)})}async function Zh(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Ig),e);try{const s=new Rg(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Fs(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const l=r.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fs(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Fs(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Fs(n,"user-disabled",a);const f=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Xh(n,f,h);Ze(n,f)}}catch(s){if(s instanceof At)throw s;Ze(n,"network-request-failed",{message:String(s)})}}async function is(n,e,t,i,s={}){const r=await Ct(n,e,t,i,s);return"mfaPendingCredential"in r&&Ze(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ed(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?ba(n.config,s):`${n.config.apiScheme}://${s}`}function Ag(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Rg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(st(this.auth,"network-request-failed")),wg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=st(n,e,i);return s.customData._tokenResponse=t,s}function Yc(n){return n!==void 0&&n.enterprise!==void 0}class Cg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ag(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Sg(n,e){return Ct(n,"GET","/v2/recaptchaConfig",zt(n,e))}/**
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
 */async function Pg(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function td(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bg(n,e=!1){const t=ce(n),i=await t.getIdToken(e),s=Na(i);x(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Vi(So(s.auth_time)),issuedAtTime:Vi(So(s.iat)),expirationTime:Vi(So(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function So(n){return Number(n)*1e3}function Na(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Gs("JWT malformed, contained fewer than 3 sections"),null;try{const s=tr(t);return s?JSON.parse(s):(Gs("Failed to decode base64 JWT payload"),null)}catch(s){return Gs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xc(n){const e=Na(n);return x(e,"internal-error"),x(typeof e.exp<"u","internal-error"),x(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof At&&Ng(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ng({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class kg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Go{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await qn(n,td(t,{idToken:i}));x(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?nd(r.providerUserInfo):[],l=Og(n.providerData,a),c=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,_={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Go(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(n,_)}async function Dg(n){const e=ce(n);await rr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Og(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function nd(n){return n.map(e=>{var{providerId:t}=e,i=wa(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Vg(n,e){const t=await Zh(n,{},async()=>{const i=Jn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=ed(n,s,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Jh.fetch()(a,{method:"POST",headers:l,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Mg(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",zt(n,e))}/**
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
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){x(e.idToken,"internal-error"),x(typeof e.idToken<"u","internal-error"),x(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){x(e.length!==0,"internal-error");const t=Xc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(x(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Vg(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new Vn;return i&&(x(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(x(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(x(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function kt(n,e){x(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Go(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await qn(this,this.stsTokenManager.getToken(this.auth,e));return x(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bg(this,e)}reload(){return Dg(this)}_assign(e){this!==e&&(x(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){x(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await rr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tt(this.auth.app))return Promise.reject(gt(this.auth));const e=await this.getIdToken();return await qn(this,Pg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,l,c,h,f;const _=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,R=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,S=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,W=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:ae,isAnonymous:Ge,providerData:ue,stsTokenManager:T}=t;x($&&T,e,"internal-error");const m=Vn.fromJSON(this.name,T);x(typeof $=="string",e,"internal-error"),kt(_,e.name),kt(g,e.name),x(typeof ae=="boolean",e,"internal-error"),x(typeof Ge=="boolean",e,"internal-error"),kt(R,e.name),kt(S,e.name),kt(D,e.name),kt(N,e.name),kt(q,e.name),kt(W,e.name);const v=new pt({uid:$,auth:e,email:g,emailVerified:ae,displayName:_,isAnonymous:Ge,photoURL:S,phoneNumber:R,tenantId:D,stsTokenManager:m,createdAt:q,lastLoginAt:W});return ue&&Array.isArray(ue)&&(v.providerData=ue.map(E=>Object.assign({},E))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,t,i=!1){const s=new Vn;s.updateFromServerResponse(t);const r=new pt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await rr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];x(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?nd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new Vn;l.updateFromIdToken(i);const c=new pt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Go(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,h),c}}/**
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
 */const Jc=new Map;function _t(n){Tt(n instanceof Function,"Expected a class definition");let e=Jc.get(n);return e?(Tt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Jc.set(n,e),e)}/**
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
 */class id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}id.type="NONE";const Zc=id;/**
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
 */function $s(n,e,t){return`firebase:${n}:${e}:${t}`}class Mn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=$s(this.userKey,s.apiKey,r),this.fullPersistenceKey=$s("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Mn(_t(Zc),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||_t(Zc);const a=$s(i,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const _=pt._fromJSON(e,f);h!==r&&(l=_),r=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new Mn(r,e,i):(r=c[0],l&&await r._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new Mn(r,e,i))}}/**
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
 */function eu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ad(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cd(e))return"Blackberry";if(ud(e))return"Webos";if(rd(e))return"Safari";if((e.includes("chrome/")||od(e))&&!e.includes("edge/"))return"Chrome";if(ld(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function sd(n=Le()){return/firefox\//i.test(n)}function rd(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function od(n=Le()){return/crios\//i.test(n)}function ad(n=Le()){return/iemobile/i.test(n)}function ld(n=Le()){return/android/i.test(n)}function cd(n=Le()){return/blackberry/i.test(n)}function ud(n=Le()){return/webos/i.test(n)}function ka(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Lg(n=Le()){var e;return ka(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xg(){return nm()&&document.documentMode===10}function hd(n=Le()){return ka(n)||ld(n)||ud(n)||cd(n)||/windows phone/i.test(n)||ad(n)}/**
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
 */function dd(n,e=[]){let t;switch(n){case"Browser":t=eu(Le());break;case"Worker":t=`${eu(Le())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mn}/${i}`}/**
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
 */class Fg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,l)=>{try{const c=e(r);a(c)}catch(c){l(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Ug(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",zt(n,e))}/**
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
 */const Bg=6;class qg{constructor(e){var t,i,s,r;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Bg,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Wg{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tu(this),this.idTokenSubscription=new tu(this),this.beforeStateQueue=new Fg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await td(this,{idToken:e}),i=await pt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return x(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tt(this.app))return Promise.reject(gt(this));const t=e?ce(e):null;return t&&x(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&x(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tt(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tt(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ug(this),t=new qg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ts("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Mg(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;x(t,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(x(l,this,"internal-error"),l.then(()=>{a||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return x(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&yg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function gn(n){return ce(n)}class tu{constructor(e){this.auth=e,this.observer=null,this.addObserver=fm(t=>this.observer=t)}get next(){return x(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function jg(n){Nr=n}function fd(n){return Nr.loadJS(n)}function Hg(){return Nr.recaptchaEnterpriseScript}function Gg(){return Nr.gapiScript}function $g(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const zg="recaptcha-enterprise",Kg="NO_RECAPTCHA";class Qg{constructor(e){this.type=zg,this.auth=gn(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,l)=>{Sg(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Cg(c);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(r,a,l){const c=window.grecaptcha;Yc(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(h=>{a(h)}).catch(()=>{a(Kg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,a)=>{i(this.auth).then(l=>{if(!t&&Yc(window.grecaptcha))s(l,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Hg();c.length!==0&&(c+=l),fd(c).then(()=>{s(l,r,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function nu(n,e,t,i=!1){const s=new Qg(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const a=Object.assign({},e);return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $o(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await nu(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await nu(n,e,t,t==="getOobCode");return i(n,a)}else return Promise.reject(r)})}/**
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
 */function Yg(n,e){const t=Sa(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ir(r,e??{}))return s;Ze(s,"already-initialized")}return t.initialize({options:e})}function Xg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Jg(n,e,t){const i=gn(n);x(i._canInitEmulator,i,"emulator-config-failed"),x(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=pd(e),{host:a,port:l}=Zg(e),c=l===null?"":`:${l}`;i.config.emulator={url:`${r}//${a}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),ey()}function pd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zg(n){const e=pd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:iu(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:iu(a)}}}function iu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ey(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Da{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function ty(n,e){return Ct(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ny(n,e){return is(n,"POST","/v1/accounts:signInWithPassword",zt(n,e))}/**
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
 */async function iy(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",zt(n,e))}async function sy(n,e){return is(n,"POST","/v1/accounts:signInWithEmailLink",zt(n,e))}/**
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
 */class $i extends Da{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new $i(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new $i(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $o(e,t,"signInWithPassword",ny);case"emailLink":return iy(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $o(e,i,"signUpPassword",ty);case"emailLink":return sy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ln(n,e){return is(n,"POST","/v1/accounts:signInWithIdp",zt(n,e))}/**
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
 */const ry="http://localhost";class an extends Da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=wa(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new an(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ln(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ln(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ln(e,t)}buildRequest(){const e={requestUri:ry,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jn(t)}return e}}/**
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
 */function oy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ay(n){const e=Pi(bi(n)).link,t=e?Pi(bi(e)).deep_link_id:null,i=Pi(bi(n)).deep_link_id;return(i?Pi(bi(i)).link:null)||i||t||e||n}class Oa{constructor(e){var t,i,s,r,a,l;const c=Pi(bi(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(i=c.oobCode)!==null&&i!==void 0?i:null,_=oy((s=c.mode)!==null&&s!==void 0?s:null);x(h&&f&&_,"argument-error"),this.apiKey=h,this.operation=_,this.code=f,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=ay(e);try{return new Oa(t)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,t){return $i._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Oa.parseLink(t);return x(i,"argument-error"),$i._fromEmailAndCode(e,i.code,i.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ss extends _d{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Dt extends ss{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
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
 */class Ot extends ss{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return an._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ot.credential(t,i)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
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
 */class Vt extends ss{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
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
 */class Mt extends ss{constructor(){super("twitter.com")}static credential(e,t){return an._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Mt.credential(t,i)}catch{return null}}}Mt.TWITTER_SIGN_IN_METHOD="twitter.com";Mt.PROVIDER_ID="twitter.com";/**
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
 */async function ly(n,e){return is(n,"POST","/v1/accounts:signUp",zt(n,e))}/**
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
 */class ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await pt._fromIdTokenResponse(e,i,s),a=su(i);return new ln({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=su(i);return new ln({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function su(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class or extends At{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,or.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new or(e,t,i,s)}}function md(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?or._fromErrorAndOperation(n,r,e,i):r})}async function cy(n,e,t=!1){const i=await qn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ln._forOperation(n,"link",i)}/**
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
 */async function gd(n,e,t=!1){const{auth:i}=n;if(tt(i.app))return Promise.reject(gt(i));const s="reauthenticate";try{const r=await qn(n,md(i,s,e,n),t);x(r.idToken,i,"internal-error");const a=Na(r.idToken);x(a,i,"internal-error");const{sub:l}=a;return x(n.uid===l,i,"user-mismatch"),ln._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ze(i,"user-mismatch"),r}}/**
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
 */async function yd(n,e,t=!1){if(tt(n.app))return Promise.reject(gt(n));const i="signIn",s=await md(n,i,e),r=await ln._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function uy(n,e){return yd(gn(n),e)}async function dR(n,e){return gd(ce(n),e)}/**
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
 */async function vd(n){const e=gn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function fR(n,e,t){if(tt(n.app))return Promise.reject(gt(n));const i=gn(n),a=await $o(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ly).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&vd(n),c}),l=await ln._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function pR(n,e,t){return tt(n.app)?Promise.reject(gt(n)):uy(ce(n),Zn.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&vd(n),i})}/**
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
 */async function hy(n,e){return Ct(n,"POST","/v1/accounts:update",e)}/**
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
 */async function _R(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ce(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await qn(i,hy(i.auth,r));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const l=i.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function dy(n,e,t,i){return ce(n).onIdTokenChanged(e,t,i)}function fy(n,e,t){return ce(n).beforeAuthStateChanged(e,t)}function mR(n,e,t,i){return ce(n).onAuthStateChanged(e,t,i)}function gR(n){return ce(n).signOut()}const ar="__sak";/**
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
 */class Ed{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ar,"1"),this.storage.removeItem(ar),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const py=1e3,_y=10;class Td extends Ed{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);xg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_y):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},py)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Td.type="LOCAL";const my=Td;/**
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
 */class Id extends Ed{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Id.type="SESSION";const wd=Id;/**
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
 */function gy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class kr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new kr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,r)),c=await gy(l);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kr.receivers=[];/**
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
 */function Va(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class yy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((l,c)=>{const h=Va("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(_){const g=_;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(g.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function vy(n){rt().location.href=n}/**
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
 */function Ad(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Ey(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ty(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Iy(){return Ad()?self:null}/**
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
 */const Rd="firebaseLocalStorageDb",wy=1,lr="firebaseLocalStorage",Cd="fbase_key";class rs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Dr(n,e){return n.transaction([lr],e?"readwrite":"readonly").objectStore(lr)}function Ay(){const n=indexedDB.deleteDatabase(Rd);return new rs(n).toPromise()}function zo(){const n=indexedDB.open(Rd,wy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(lr,{keyPath:Cd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(lr)?e(i):(i.close(),await Ay(),e(await zo()))})})}async function ru(n,e,t){const i=Dr(n,!0).put({[Cd]:e,value:t});return new rs(i).toPromise()}async function Ry(n,e){const t=Dr(n,!1).get(e),i=await new rs(t).toPromise();return i===void 0?null:i.value}function ou(n,e){const t=Dr(n,!0).delete(e);return new rs(t).toPromise()}const Cy=800,Sy=3;class Sd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Sy)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ad()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kr._getInstance(Iy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ey(),!this.activeServiceWorker)return;this.sender=new yy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zo();return await ru(e,ar,"1"),await ou(e,ar),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ru(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Ry(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ou(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Dr(s,!1).getAll();return new rs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Cy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sd.type="LOCAL";const Py=Sd;new ns(3e4,6e4);/**
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
 */function by(n,e){return e?_t(e):(x(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ma extends Da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ln(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ln(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ln(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ny(n){return yd(n.auth,new Ma(n),n.bypassAuthState)}function ky(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),gd(t,new Ma(n),n.bypassAuthState)}async function Dy(n){const{auth:e,user:t}=n;return x(t,e,"internal-error"),cy(t,new Ma(n),n.bypassAuthState)}/**
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
 */class Pd{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ny;case"linkViaPopup":case"linkViaRedirect":return Dy;case"reauthViaPopup":case"reauthViaRedirect":return ky;default:Ze(this.auth,"internal-error")}}resolve(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Oy=new ns(2e3,1e4);class kn extends Pd{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return x(e,this.auth,"internal-error"),e}async onExecution(){Tt(this.filter.length===1,"Popup operations only handle one event");const e=Va();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Oy.get())};e()}}kn.currentPopupAction=null;/**
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
 */const Vy="pendingRedirect",zs=new Map;class My extends Pd{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=zs.get(this.auth._key());if(!e){try{const i=await Ly(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}zs.set(this.auth._key(),e)}return this.bypassAuthState||zs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ly(n,e){const t=Uy(e),i=Fy(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function xy(n,e){zs.set(n._key(),e)}function Fy(n){return _t(n._redirectPersistence)}function Uy(n){return $s(Vy,n.config.apiKey,n.name)}async function By(n,e,t=!1){if(tt(n.app))return Promise.reject(gt(n));const i=gn(n),s=by(i,e),a=await new My(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const qy=10*60*1e3;class Wy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!bd(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(st(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qy&&this.cachedEventUids.clear(),this.cachedEventUids.has(au(e))}saveEventToCache(e){this.cachedEventUids.add(au(e)),this.lastProcessedEventTime=Date.now()}}function au(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bd(n);default:return!1}}/**
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
 */async function Hy(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
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
 */const Gy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$y=/^https?/;async function zy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Hy(n);for(const t of e)try{if(Ky(t))return}catch{}Ze(n,"unauthorized-domain")}function Ky(n){const e=Ho(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!$y.test(t))return!1;if(Gy.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Qy=new ns(3e4,6e4);function lu(){const n=rt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Yy(n){return new Promise((e,t)=>{var i,s,r;function a(){lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lu(),t(st(n,"network-request-failed"))},timeout:Qy.get()})}if(!((s=(i=rt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=rt().gapi)===null||r===void 0)&&r.load)a();else{const l=$g("iframefcb");return rt()[l]=()=>{gapi.load?a():t(st(n,"network-request-failed"))},fd(`${Gg()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Ks=null,e})}let Ks=null;function Xy(n){return Ks=Ks||Yy(n),Ks}/**
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
 */const Jy=new ns(5e3,15e3),Zy="__/auth/iframe",ev="emulator/auth/iframe",tv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iv(n){const e=n.config;x(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ba(e,ev):`https://${n.config.authDomain}/${Zy}`,i={apiKey:e.apiKey,appName:n.name,v:mn},s=nv.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Jn(i).slice(1)}`}async function sv(n){const e=await Xy(n),t=rt().gapi;return x(t,n,"internal-error"),e.open({where:document.body,url:iv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=st(n,"network-request-failed"),l=rt().setTimeout(()=>{r(a)},Jy.get());function c(){rt().clearTimeout(l),s(i)}i.ping(c).then(c,()=>{r(a)})}))}/**
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
 */const rv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ov=500,av=600,lv="_blank",cv="http://localhost";class cu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uv(n,e,t,i=ov,s=av){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},rv),{width:i.toString(),height:s.toString(),top:r,left:a}),h=Le().toLowerCase();t&&(l=od(h)?lv:t),sd(h)&&(e=e||cv,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[R,S])=>`${g}${R}=${S},`,"");if(Lg(h)&&l!=="_self")return hv(e||"",l),new cu(null);const _=window.open(e||"",l,f);x(_,n,"popup-blocked");try{_.focus()}catch{}return new cu(_)}function hv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const dv="__/auth/handler",fv="emulator/auth/handler",pv=encodeURIComponent("fac");async function uu(n,e,t,i,s,r){x(n.config.authDomain,n,"auth-domain-config-required"),x(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:mn,eventId:s};if(e instanceof _d){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bo(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,_]of Object.entries({}))a[f]=_}if(e instanceof ss){const f=e.getScopes().filter(_=>_!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${pv}=${encodeURIComponent(c)}`:"";return`${_v(n)}?${Jn(l).slice(1)}${h}`}function _v({config:n}){return n.emulator?ba(n,fv):`https://${n.authDomain}/${dv}`}/**
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
 */const Po="webStorageSupport";class mv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wd,this._completeRedirectFn=By,this._overrideRedirectResult=xy}async _openPopup(e,t,i,s){var r;Tt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await uu(e,t,i,Ho(),s);return uv(e,a,Va())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await uu(e,t,i,Ho(),s);return vy(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Tt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await sv(e),i=new Wy(e);return t.register("authEvent",s=>(x(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Po,{type:Po},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Po];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hd()||rd()||ka()}}const gv=mv;var hu="@firebase/auth",du="1.7.9";/**
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
 */class yv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){x(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function vv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ev(n){on(new qt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=i.options;x(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dd(n)},h=new Wg(i,s,r,c);return Xg(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),on(new qt("auth-internal",e=>{const t=gn(e.getProvider("auth").getImmediate());return(i=>new yv(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(hu,du,vv(n)),it(hu,du,"esm2017")}/**
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
 */const Tv=5*60,Iv=jh("authIdTokenMaxAge")||Tv;let fu=null;const wv=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Iv)return;const s=t==null?void 0:t.token;fu!==s&&(fu=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yR(n=$h()){const e=Sa(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yg(n,{popupRedirectResolver:gv,persistence:[Py,my,wd]}),i=jh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const a=wv(r.toString());fy(t,a,()=>a(t.currentUser)),dy(t,l=>a(l))}}const s=qh("auth");return s&&Jg(t,`http://${s}`),t}function Av(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}jg({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=st("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Av().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ev("Browser");var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof rn<"u"?rn:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sn,Nd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function v(){}v.prototype=m.prototype,T.D=m.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(E,I,A){for(var y=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)y[ct-2]=arguments[ct];return m.prototype[I].apply(E,y)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,v){v||(v=0);var E=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)E[I]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(I=0;16>I;++I)E[I]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=T.g[0],v=T.g[1],I=T.g[2];var A=T.g[3],y=m+(A^v&(I^A))+E[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=A+(I^m&(v^I))+E[1]+3905402710&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(v^A&(m^v))+E[2]+606105819&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(m^I&(A^m))+E[3]+3250441966&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(A^v&(I^A))+E[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=A+(I^m&(v^I))+E[5]+1200080426&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(v^A&(m^v))+E[6]+2821735955&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(m^I&(A^m))+E[7]+4249261313&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(A^v&(I^A))+E[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=A+(I^m&(v^I))+E[9]+2336552879&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(v^A&(m^v))+E[10]+4294925233&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(m^I&(A^m))+E[11]+2304563134&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(A^v&(I^A))+E[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=A+(I^m&(v^I))+E[13]+4254626195&4294967295,A=m+(y<<12&4294967295|y>>>20),y=I+(v^A&(m^v))+E[14]+2792965006&4294967295,I=A+(y<<17&4294967295|y>>>15),y=v+(m^I&(A^m))+E[15]+1236535329&4294967295,v=I+(y<<22&4294967295|y>>>10),y=m+(I^A&(v^I))+E[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(m^v))+E[6]+3225465664&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(A^m))+E[11]+643717713&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^m&(I^A))+E[0]+3921069994&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(I^A&(v^I))+E[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(m^v))+E[10]+38016083&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(A^m))+E[15]+3634488961&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^m&(I^A))+E[4]+3889429448&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(I^A&(v^I))+E[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(m^v))+E[14]+3275163606&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(A^m))+E[3]+4107603335&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^m&(I^A))+E[8]+1163531501&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(I^A&(v^I))+E[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=A+(v^I&(m^v))+E[2]+4243563512&4294967295,A=m+(y<<9&4294967295|y>>>23),y=I+(m^v&(A^m))+E[7]+1735328473&4294967295,I=A+(y<<14&4294967295|y>>>18),y=v+(A^m&(I^A))+E[12]+2368359562&4294967295,v=I+(y<<20&4294967295|y>>>12),y=m+(v^I^A)+E[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=A+(m^v^I)+E[8]+2272392833&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^v)+E[11]+1839030562&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^m)+E[14]+4259657740&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(v^I^A)+E[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=A+(m^v^I)+E[4]+1272893353&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^v)+E[7]+4139469664&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^m)+E[10]+3200236656&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(v^I^A)+E[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=A+(m^v^I)+E[0]+3936430074&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^v)+E[3]+3572445317&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^m)+E[6]+76029189&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(v^I^A)+E[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=A+(m^v^I)+E[12]+3873151461&4294967295,A=m+(y<<11&4294967295|y>>>21),y=I+(A^m^v)+E[15]+530742520&4294967295,I=A+(y<<16&4294967295|y>>>16),y=v+(I^A^m)+E[2]+3299628645&4294967295,v=I+(y<<23&4294967295|y>>>9),y=m+(I^(v|~A))+E[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=A+(v^(m|~I))+E[7]+1126891415&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~v))+E[14]+2878612391&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~m))+E[5]+4237533241&4294967295,v=I+(y<<21&4294967295|y>>>11),y=m+(I^(v|~A))+E[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=A+(v^(m|~I))+E[3]+2399980690&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~v))+E[10]+4293915773&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~m))+E[1]+2240044497&4294967295,v=I+(y<<21&4294967295|y>>>11),y=m+(I^(v|~A))+E[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=A+(v^(m|~I))+E[15]+4264355552&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~v))+E[6]+2734768916&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~m))+E[13]+1309151649&4294967295,v=I+(y<<21&4294967295|y>>>11),y=m+(I^(v|~A))+E[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=A+(v^(m|~I))+E[11]+3174756917&4294967295,A=m+(y<<10&4294967295|y>>>22),y=I+(m^(A|~v))+E[2]+718787259&4294967295,I=A+(y<<15&4294967295|y>>>17),y=v+(A^(I|~m))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}i.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var v=m-this.blockSize,E=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=v;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<m;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=m},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var v=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=v&255,v/=256;for(this.u(T),T=Array(16),m=v=0;4>m;++m)for(var E=0;32>E;E+=8)T[v++]=this.g[m]>>>E&255;return T};function r(T,m){var v=l;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=m(T)}function a(T,m){this.h=m;for(var v=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==m||(v[I]=A,E=!1)}this.g=v}var l={};function c(T){return-128<=T&&128>T?r(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return _;if(0>T)return N(h(-T));for(var m=[],v=1,E=0;T>=v;E++)m[E]=T/v|0,v*=4294967296;return new a(m,0)}function f(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return N(f(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),E=_,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),y=parseInt(T.substring(I,I+A),m);8>A?(A=h(Math.pow(m,A)),E=E.j(A).add(h(y))):(E=E.j(v),E=E.add(h(y)))}return E}var _=c(0),g=c(1),R=c(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();for(var T=0,m=1,v=0;v<this.g.length;v++){var E=this.i(v);T+=(0<=E?E:4294967296+E)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S(this))return"0";if(D(this))return"-"+N(this).toString(T);for(var m=h(Math.pow(T,6)),v=this,E="";;){var I=ae(v,m).g;v=q(v,I.j(m));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=I,S(v))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function S(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=q(this,T),D(T)?-1:S(T)?0:1};function N(T){for(var m=T.g.length,v=[],E=0;E<m;E++)v[E]=~T.g[E];return new a(v,~T.h).add(g)}n.abs=function(){return D(this)?N(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],E=0,I=0;I<=m;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),y=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=y>>>16,A&=65535,y&=65535,v[I]=y<<16|A}return new a(v,v[v.length-1]&-2147483648?-1:0)};function q(T,m){return T.add(N(m))}n.j=function(T){if(S(this)||S(T))return _;if(D(this))return D(T)?N(this).j(N(T)):N(N(this).j(T));if(D(T))return N(this.j(N(T)));if(0>this.l(R)&&0>T.l(R))return h(this.m()*T.m());for(var m=this.g.length+T.g.length,v=[],E=0;E<2*m;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,y=this.i(E)&65535,ct=T.i(I)>>>16,oi=T.i(I)&65535;v[2*E+2*I]+=y*oi,W(v,2*E+2*I),v[2*E+2*I+1]+=A*oi,W(v,2*E+2*I+1),v[2*E+2*I+1]+=y*ct,W(v,2*E+2*I+1),v[2*E+2*I+2]+=A*ct,W(v,2*E+2*I+2)}for(E=0;E<m;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=m;E<2*m;E++)v[E]=0;return new a(v,0)};function W(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function $(T,m){this.g=T,this.h=m}function ae(T,m){if(S(m))throw Error("division by zero");if(S(T))return new $(_,_);if(D(T))return m=ae(N(T),m),new $(N(m.g),N(m.h));if(D(m))return m=ae(T,N(m)),new $(N(m.g),m.h);if(30<T.g.length){if(D(T)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var v=g,E=m;0>=E.l(T);)v=Ge(v),E=Ge(E);var I=ue(v,1),A=ue(E,1);for(E=ue(E,2),v=ue(v,2);!S(E);){var y=A.add(E);0>=y.l(T)&&(I=I.add(v),A=y),E=ue(E,1),v=ue(v,1)}return m=q(T,I.j(m)),new $(I,m)}for(I=_;0<=T.l(m);){for(v=Math.max(1,Math.floor(T.m()/m.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=h(v),y=A.j(m);D(y)||0<y.l(T);)v-=E,A=h(v),y=A.j(m);S(A)&&(A=g),I=I.add(A),T=q(T,y)}return new $(I,T)}n.A=function(T){return ae(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)&T.i(E);return new a(v,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)|T.i(E);return new a(v,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),v=[],E=0;E<m;E++)v[E]=this.i(E)^T.i(E);return new a(v,this.h^T.h)};function Ge(T){for(var m=T.g.length+1,v=[],E=0;E<m;E++)v[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(v,T.h)}function ue(T,m){var v=m>>5;m%=32;for(var E=T.g.length-v,I=[],A=0;A<E;A++)I[A]=0<m?T.i(A+v)>>>m|T.i(A+v+1)<<32-m:T.i(A+v);return new a(I,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Nd=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,sn=a}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});var Us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof rn<"u"?rn:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kd,Ni,Dd,Qs,Ko,Od,Vd,Md;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Us=="object"&&Us];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var i=t(this);function s(o,u){if(u)e:{var d=i;o=o.split(".");for(var p=0;p<o.length-1;p++){var w=o[p];if(!(w in d))break e;d=d[w]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function r(o,u){o instanceof String&&(o+="");var d=0,p=!1,w={next:function(){if(!p&&d<o.length){var C=d++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return r(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function _(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,p),o.apply(u,w)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:_,g.apply(null,arguments)}function R(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,w,C){for(var k=Array(arguments.length-2),te=2;te<arguments.length;te++)k[te-2]=arguments[te];return u.prototype[w].apply(p,k)}}function D(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function N(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const w=o.length||0,C=p.length||0;o.length=w+C;for(let k=0;k<C;k++)o[w+k]=p[k]}else o.push(p)}}class q{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function W(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function ae(o){return ae[" "](o),o}ae[" "]=function(){};var Ge=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function ue(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function T(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,u){let d,p;for(let w=1;w<arguments.length;w++){p=arguments[w];for(d in p)o[d]=p[d];for(let C=0;C<v.length;C++)d=v[C],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function A(o){l.setTimeout(()=>{throw o},0)}function y(){var o=eo;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ct{constructor(){this.h=this.g=null}add(u,d){const p=oi.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var oi=new q(()=>new o_,o=>o.reset());class o_{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ai,li=!1,eo=new ct,Wl=()=>{const o=l.Promise.resolve(void 0);ai=()=>{o.then(a_)}};var a_=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){A(d)}var u=oi;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}li=!1};function St(){this.s=this.s,this.C=this.C}St.prototype.s=!1,St.prototype.ma=function(){this.s||(this.s=!0,this.N())},St.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var l_=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function ci(o,u){if(Re.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Ge){e:{try{ae(u.nodeName);var w=!0;break e}catch{}w=!1}w||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:c_[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ci.aa.h.call(this)}}S(ci,Re);var c_={2:"touch",3:"pen",4:"mouse"};ci.prototype.h=function(){ci.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var vs="closure_listenable_"+(1e6*Math.random()|0),u_=0;function h_(o,u,d,p,w){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=w,this.key=++u_,this.da=this.fa=!1}function Es(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ts(o){this.src=o,this.g={},this.h=0}Ts.prototype.add=function(o,u,d,p,w){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var k=no(o,u,p,w);return-1<k?(u=o[k],d||(u.fa=!1)):(u=new h_(u,this.src,C,!!p,w),u.fa=d,o.push(u)),u};function to(o,u){var d=u.type;if(d in o.g){var p=o.g[d],w=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=w)&&Array.prototype.splice.call(p,w,1),C&&(Es(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function no(o,u,d,p){for(var w=0;w<o.length;++w){var C=o[w];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return w}return-1}var io="closure_lm_"+(1e6*Math.random()|0),so={};function jl(o,u,d,p,w){if(Array.isArray(u)){for(var C=0;C<u.length;C++)jl(o,u[C],d,p,w);return null}return d=$l(d),o&&o[vs]?o.K(u,d,h(p)?!!p.capture:!1,w):d_(o,u,d,!1,p,w)}function d_(o,u,d,p,w,C){if(!u)throw Error("Invalid event type");var k=h(w)?!!w.capture:!!w,te=oo(o);if(te||(o[io]=te=new Ts(o)),d=te.add(u,d,p,k,C),d.proxy)return d;if(p=f_(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)l_||(w=k),w===void 0&&(w=!1),o.addEventListener(u.toString(),p,w);else if(o.attachEvent)o.attachEvent(Gl(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function f_(){function o(d){return u.call(o.src,o.listener,d)}const u=p_;return o}function Hl(o,u,d,p,w){if(Array.isArray(u))for(var C=0;C<u.length;C++)Hl(o,u[C],d,p,w);else p=h(p)?!!p.capture:!!p,d=$l(d),o&&o[vs]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],d=no(C,d,p,w),-1<d&&(Es(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=oo(o))&&(u=o.g[u.toString()],o=-1,u&&(o=no(u,d,p,w)),(d=-1<o?u[o]:null)&&ro(d))}function ro(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[vs])to(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(Gl(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=oo(u))?(to(d,o),d.h==0&&(d.src=null,u[io]=null)):Es(o)}}}function Gl(o){return o in so?so[o]:so[o]="on"+o}function p_(o,u){if(o.da)o=!0;else{u=new ci(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&ro(o),o=d.call(p,u)}return o}function oo(o){return o=o[io],o instanceof Ts?o:null}var ao="__closure_events_fn_"+(1e9*Math.random()>>>0);function $l(o){return typeof o=="function"?o:(o[ao]||(o[ao]=function(u){return o.handleEvent(u)}),o[ao])}function Ce(){St.call(this),this.i=new Ts(this),this.M=this,this.F=null}S(Ce,St),Ce.prototype[vs]=!0,Ce.prototype.removeEventListener=function(o,u,d,p){Hl(this,o,u,d,p)};function xe(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Re(u,o);else if(u instanceof Re)u.target=u.target||o;else{var w=u;u=new Re(p,o),E(u,w)}if(w=!0,d)for(var C=d.length-1;0<=C;C--){var k=u.g=d[C];w=Is(k,p,!0,u)&&w}if(k=u.g=o,w=Is(k,p,!0,u)&&w,w=Is(k,p,!1,u)&&w,d)for(C=0;C<d.length;C++)k=u.g=d[C],w=Is(k,p,!1,u)&&w}Ce.prototype.N=function(){if(Ce.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Es(d[p]);delete o.g[u],o.h--}}this.F=null},Ce.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},Ce.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function Is(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var w=!0,C=0;C<u.length;++C){var k=u[C];if(k&&!k.da&&k.capture==d){var te=k.listener,Ee=k.ha||k.src;k.fa&&to(o.i,k),w=te.call(Ee,p)!==!1&&w}}return w&&!p.defaultPrevented}function zl(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Kl(o){o.g=zl(()=>{o.g=null,o.i&&(o.i=!1,Kl(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class __ extends St{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Kl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(o){St.call(this),this.h=o,this.g={}}S(ui,St);var Ql=[];function Yl(o){ue(o.g,function(u,d){this.g.hasOwnProperty(d)&&ro(u)},o),o.g={}}ui.prototype.N=function(){ui.aa.N.call(this),Yl(this)},ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lo=l.JSON.stringify,m_=l.JSON.parse,g_=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function co(){}co.prototype.h=null;function Xl(o){return o.h||(o.h=o.i())}function Jl(){}var hi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function uo(){Re.call(this,"d")}S(uo,Re);function ho(){Re.call(this,"c")}S(ho,Re);var Qt={},Zl=null;function ws(){return Zl=Zl||new Ce}Qt.La="serverreachability";function ec(o){Re.call(this,Qt.La,o)}S(ec,Re);function di(o){const u=ws();xe(u,new ec(u))}Qt.STAT_EVENT="statevent";function tc(o,u){Re.call(this,Qt.STAT_EVENT,o),this.stat=u}S(tc,Re);function Fe(o){const u=ws();xe(u,new tc(u,o))}Qt.Ma="timingevent";function nc(o,u){Re.call(this,Qt.Ma,o),this.size=u}S(nc,Re);function fi(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function pi(){this.g=!0}pi.prototype.xa=function(){this.g=!1};function y_(o,u,d,p,w,C){o.info(function(){if(o.g)if(C)for(var k="",te=C.split("&"),Ee=0;Ee<te.length;Ee++){var Y=te[Ee].split("=");if(1<Y.length){var Se=Y[0];Y=Y[1];var Pe=Se.split("_");k=2<=Pe.length&&Pe[1]=="type"?k+(Se+"="+Y+"&"):k+(Se+"=redacted&")}}else k=null;else k=C;return"XMLHTTP REQ ("+p+") [attempt "+w+"]: "+u+`
`+d+`
`+k})}function v_(o,u,d,p,w,C,k){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+w+"]: "+u+`
`+d+`
`+C+" "+k})}function wn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+T_(o,d)+(p?" "+p:"")})}function E_(o,u){o.info(function(){return"TIMEOUT: "+u})}pi.prototype.info=function(){};function T_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var w=p[1];if(Array.isArray(w)&&!(1>w.length)){var C=w[0];if(C!="noop"&&C!="stop"&&C!="close")for(var k=1;k<w.length;k++)w[k]=""}}}}return lo(d)}catch{return u}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ic={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fo;function Rs(){}S(Rs,co),Rs.prototype.g=function(){return new XMLHttpRequest},Rs.prototype.i=function(){return{}},fo=new Rs;function Pt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new sc}function sc(){this.i=null,this.g="",this.h=!1}var rc={},po={};function _o(o,u,d){o.L=1,o.v=bs(ut(u)),o.m=d,o.P=!0,oc(o,null)}function oc(o,u){o.F=Date.now(),Cs(o),o.A=ut(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ec(d.i,"t",p),o.C=0,d=o.j.J,o.h=new sc,o.g=Fc(o.j,d?u:null,!o.m),0<o.O&&(o.M=new __(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(Ql[0]=w.toString()),w=Ql);for(var C=0;C<w.length;C++){var k=jl(d,w[C],p||u.handleEvent,!1,u.h||u);if(!k)break;u.g[k.key]=k}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),di(),y_(o.i,o.u,o.A,o.l,o.R,o.m)}Pt.prototype.ca=function(o){o=o.target;const u=this.M;u&&ht(o)==3?u.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Pe=ht(this.g);var u=this.g.Ba();const Cn=this.g.Z();if(!(3>Pe)&&(Pe!=3||this.g&&(this.h.h||this.g.oa()||Sc(this.g)))){this.J||Pe!=4||u==7||(u==8||0>=Cn?di(3):di(2)),mo(this);var d=this.g.Z();this.X=d;t:if(ac(this)){var p=Sc(this.g);o="";var w=p.length,C=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),_i(this);var k="";break t}this.h.i=new l.TextDecoder}for(u=0;u<w;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==w-1)});p.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=d==200,v_(this.i,this.u,this.A,this.l,this.R,Pe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var te,Ee=this.g;if((te=Ee.g?Ee.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(te)){var Y=te;break t}}Y=null}if(d=Y)wn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,go(this,d);else{this.o=!1,this.s=3,Fe(12),Yt(this),_i(this);break e}}if(this.P){d=!0;let Ke;for(;!this.J&&this.C<k.length;)if(Ke=I_(this,k),Ke==po){Pe==4&&(this.s=4,Fe(14),d=!1),wn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==rc){this.s=4,Fe(15),wn(this.i,this.l,k,"[Invalid Chunk]"),d=!1;break}else wn(this.i,this.l,Ke,null),go(this,Ke);if(ac(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||k.length!=0||this.h.h||(this.s=1,Fe(16),d=!1),this.o=this.o&&d,!d)wn(this.i,this.l,k,"[Invalid Chunked Response]"),Yt(this),_i(this);else if(0<k.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),wo(Se),Se.M=!0,Fe(11))}}else wn(this.i,this.l,k,null),go(this,k);Pe==4&&Yt(this),this.o&&!this.J&&(Pe==4?Vc(this.j,this):(this.o=!1,Cs(this)))}else U_(this.g),d==400&&0<k.indexOf("Unknown SID")?(this.s=3,Fe(12)):(this.s=0,Fe(13)),Yt(this),_i(this)}}}catch{}finally{}};function ac(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function I_(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?po:(d=Number(u.substring(d,p)),isNaN(d)?rc:(p+=1,p+d>u.length?po:(u=u.slice(p,p+d),o.C=p+d,u)))}Pt.prototype.cancel=function(){this.J=!0,Yt(this)};function Cs(o){o.S=Date.now()+o.I,lc(o,o.I)}function lc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=fi(g(o.ba,o),u)}function mo(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(E_(this.i,this.A),this.L!=2&&(di(),Fe(17)),Yt(this),this.s=2,_i(this)):lc(this,this.S-o)};function _i(o){o.j.G==0||o.J||Vc(o.j,o)}function Yt(o){mo(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Yl(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function go(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||yo(d.h,o))){if(!o.K&&yo(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var w=p;if(w[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ms(d),Os(d);else break e;Io(d),Fe(18)}}else d.za=w[1],0<d.za-d.T&&37500>w[2]&&d.F&&d.v==0&&!d.C&&(d.C=fi(g(d.Za,d),6e3));if(1>=hc(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((o.K||d.g==o)&&Ms(d),!W(u))for(w=d.Da.g.parse(u),u=0;u<w.length;u++){let Y=w[u];if(d.T=Y[0],Y=Y[1],d.G==2)if(Y[0]=="c"){d.K=Y[1],d.ia=Y[2];const Se=Y[3];Se!=null&&(d.la=Se,d.j.info("VER="+d.la));const Pe=Y[4];Pe!=null&&(d.Aa=Pe,d.j.info("SVER="+d.Aa));const Cn=Y[5];Cn!=null&&typeof Cn=="number"&&0<Cn&&(p=1.5*Cn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ke=o.g;if(Ke){const xs=Ke.g?Ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xs){var C=p.h;C.g||xs.indexOf("spdy")==-1&&xs.indexOf("quic")==-1&&xs.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(vo(C,C.h),C.h=null))}if(p.D){const Ao=Ke.g?Ke.g.getResponseHeader("X-HTTP-Session-Id"):null;Ao&&(p.ya=Ao,ne(p.I,p.D,Ao))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var k=o;if(p.qa=xc(p,p.J?p.ia:null,p.W),k.K){dc(p.h,k);var te=k,Ee=p.L;Ee&&(te.I=Ee),te.B&&(mo(te),Cs(te)),p.g=k}else Dc(p);0<d.i.length&&Vs(d)}else Y[0]!="stop"&&Y[0]!="close"||Jt(d,7);else d.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Jt(d,7):To(d):Y[0]!="noop"&&d.l&&d.l.ta(Y),d.v=0)}}di(4)}catch{}}var w_=class{constructor(o,u){this.g=o,this.map=u}};function cc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function uc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function hc(o){return o.h?1:o.g?o.g.size:0}function yo(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function vo(o,u){o.g?o.g.add(u):o.h=u}function dc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}cc.prototype.cancel=function(){if(this.i=fc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return D(o.i)}function A_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function R_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function pc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=R_(o),p=A_(o),w=p.length,C=0;C<w;C++)u.call(void 0,p[C],d&&d[C],o)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),w=null;if(0<=p){var C=o[d].substring(0,p);w=o[d].substring(p+1)}else C=o[d];u(C,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Xt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Xt){this.h=o.h,Ss(this,o.j),this.o=o.o,this.g=o.g,Ps(this,o.s),this.l=o.l;var u=o.i,d=new yi;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),mc(this,d),this.m=o.m}else o&&(u=String(o).match(_c))?(this.h=!1,Ss(this,u[1]||"",!0),this.o=mi(u[2]||""),this.g=mi(u[3]||"",!0),Ps(this,u[4]),this.l=mi(u[5]||"",!0),mc(this,u[6]||"",!0),this.m=mi(u[7]||"")):(this.h=!1,this.i=new yi(null,this.h))}Xt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gi(u,gc,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gi(u,gc,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gi(d,d.charAt(0)=="/"?b_:P_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gi(d,k_)),o.join("")};function ut(o){return new Xt(o)}function Ss(o,u,d){o.j=d?mi(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ps(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function mc(o,u,d){u instanceof yi?(o.i=u,D_(o.i,o.h)):(d||(u=gi(u,N_)),o.i=new yi(u,o.h))}function ne(o,u,d){o.i.set(u,d)}function bs(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function mi(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gi(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,S_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function S_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var gc=/[#\/\?@]/g,P_=/[#\?:]/g,b_=/[#\?]/g,N_=/[#\?@]/g,k_=/#/g;function yi(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function bt(o){o.g||(o.g=new Map,o.h=0,o.i&&C_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=yi.prototype,n.add=function(o,u){bt(this),this.i=null,o=An(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function yc(o,u){bt(o),u=An(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function vc(o,u){return bt(o),u=An(o,u),o.g.has(u)}n.forEach=function(o,u){bt(this),this.g.forEach(function(d,p){d.forEach(function(w){o.call(u,w,p,this)},this)},this)},n.na=function(){bt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const w=o[p];for(let C=0;C<w.length;C++)d.push(u[p])}return d},n.V=function(o){bt(this);let u=[];if(typeof o=="string")vc(this,o)&&(u=u.concat(this.g.get(An(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return bt(this),this.i=null,o=An(this,o),vc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Ec(o,u,d){yc(o,u),0<d.length&&(o.i=null,o.g.set(An(o,u),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),k=this.V(p);for(p=0;p<k.length;p++){var w=C;k[p]!==""&&(w+="="+encodeURIComponent(String(k[p]))),o.push(w)}}return this.i=o.join("&")};function An(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function D_(o,u){u&&!o.j&&(bt(o),o.i=null,o.g.forEach(function(d,p){var w=p.toLowerCase();p!=w&&(yc(this,p),Ec(this,w,d))},o)),o.j=u}function O_(o,u){const d=new pi;if(l.Image){const p=new Image;p.onload=R(Nt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=R(Nt,d,"TestLoadImage: error",!1,u,p),p.onabort=R(Nt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=R(Nt,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function V_(o,u){const d=new pi,p=new AbortController,w=setTimeout(()=>{p.abort(),Nt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(w),C.ok?Nt(d,"TestPingServer: ok",!0,u):Nt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(w),Nt(d,"TestPingServer: error",!1,u)})}function Nt(o,u,d,p,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),p(d)}catch{}}function M_(){this.g=new g_}function L_(o,u,d){const p=d||"";try{pc(o,function(w,C){let k=w;h(w)&&(k=lo(w)),u.push(p+C+"="+encodeURIComponent(k))})}catch(w){throw u.push(p+"type="+encodeURIComponent("_badmap")),w}}function Ns(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Ns,co),Ns.prototype.g=function(){return new ks(this.l,this.j)},Ns.prototype.i=function(o){return function(){return o}}({});function ks(o,u){Ce.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(ks,Ce),n=ks.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ei(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?vi(this):Ei(this),this.readyState==3&&Tc(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,vi(this))},n.Qa=function(o){this.g&&(this.response=o,vi(this))},n.ga=function(){this.g&&vi(this)};function vi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ei(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Ei(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ks.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ic(o){let u="";return ue(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Eo(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Ic(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ne(o,u,d))}function le(o){Ce.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(le,Ce);var x_=/^https?$/i,F_=["POST","PUT"];n=le.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fo.g(),this.v=this.o?Xl(this.o):Xl(fo),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){wc(this,C);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var w in p)d.set(w,p[w]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),w=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(F_,u,void 0))||p||w||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,k]of d)this.g.setRequestHeader(C,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cc(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){wc(this,C)}};function wc(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ac(o),Ds(o)}function Ac(o){o.A||(o.A=!0,xe(o,"complete"),xe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,xe(this,"complete"),xe(this,"abort"),Ds(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ds(this,!0)),le.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Rc(this):this.bb())},n.bb=function(){Rc(this)};function Rc(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ht(o)!=4||o.Z()!=2)){if(o.u&&ht(o)==4)zl(o.Ea,0,o);else if(xe(o,"readystatechange"),ht(o)==4){o.h=!1;try{const k=o.Z();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=k===0){var w=String(o.D).match(_c)[1]||null;!w&&l.self&&l.self.location&&(w=l.self.location.protocol.slice(0,-1)),p=!x_.test(w?w.toLowerCase():"")}d=p}if(d)xe(o,"complete"),xe(o,"success");else{o.m=6;try{var C=2<ht(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",Ac(o)}}finally{Ds(o)}}}}function Ds(o,u){if(o.g){Cc(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||xe(o,"ready");try{d.onreadystatechange=p}catch{}}}function Cc(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ht(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),m_(u)}};function Sc(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function U_(o){const u={};o=(o.g&&2<=ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(W(o[p]))continue;var d=I(o[p]);const w=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[w]||[];u[w]=C,C.push(d)}T(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Pc(o){this.Aa=0,this.i=[],this.j=new pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ti("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ti("baseRetryDelayMs",5e3,o),this.cb=Ti("retryDelaySeedMs",1e4,o),this.Wa=Ti("forwardChannelMaxRetries",2,o),this.wa=Ti("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new cc(o&&o.concurrentRequestLimit),this.Da=new M_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pc.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){Fe(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=xc(this,null,this.W),Vs(this)};function To(o){if(bc(o),o.G==3){var u=o.U++,d=ut(o.I);if(ne(d,"SID",o.K),ne(d,"RID",u),ne(d,"TYPE","terminate"),Ii(o,d),u=new Pt(o,o.j,u),u.L=2,u.v=bs(ut(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Fc(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Cs(u)}Lc(o)}function Os(o){o.g&&(wo(o),o.g.cancel(),o.g=null)}function bc(o){Os(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ms(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Vs(o){if(!uc(o.h)&&!o.s){o.s=!0;var u=o.Ga;ai||Wl(),li||(ai(),li=!0),eo.add(u,o),o.B=0}}function B_(o,u){return hc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=fi(g(o.Ga,o,u),Mc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new Pt(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(w.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=kc(this,w,u),d=ut(this.I),ne(d,"RID",o),ne(d,"CVER",22),this.D&&ne(d,"X-HTTP-Session-Id",this.D),Ii(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(Ic(C)))+"&"+u:this.m&&Eo(d,this.m,C)),vo(this.h,w),this.Ua&&ne(d,"TYPE","init"),this.P?(ne(d,"$req",u),ne(d,"SID","null"),w.T=!0,_o(w,d,null)):_o(w,d,u),this.G=2}}else this.G==3&&(o?Nc(this,o):this.i.length==0||uc(this.h)||Nc(this))};function Nc(o,u){var d;u?d=u.l:d=o.U++;const p=ut(o.I);ne(p,"SID",o.K),ne(p,"RID",d),ne(p,"AID",o.T),Ii(o,p),o.m&&o.o&&Eo(p,o.m,o.o),d=new Pt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=kc(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),vo(o.h,d),_o(d,p,u)}function Ii(o,u){o.H&&ue(o.H,function(d,p){ne(u,p,d)}),o.l&&pc({},function(d,p){ne(u,p,d)})}function kc(o,u,d){d=Math.min(o.i.length,d);var p=o.l?g(o.l.Na,o.l,o):null;e:{var w=o.i;let C=-1;for(;;){const k=["count="+d];C==-1?0<d?(C=w[0].g,k.push("ofs="+C)):C=0:k.push("ofs="+C);let te=!0;for(let Ee=0;Ee<d;Ee++){let Y=w[Ee].g;const Se=w[Ee].map;if(Y-=C,0>Y)C=Math.max(0,w[Ee].g-100),te=!1;else try{L_(Se,k,"req"+Y+"_")}catch{p&&p(Se)}}if(te){p=k.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Dc(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ai||Wl(),li||(ai(),li=!0),eo.add(u,o),o.v=0}}function Io(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=fi(g(o.Fa,o),Mc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Oc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=fi(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Fe(10),Os(this),Oc(this))};function wo(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Oc(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ut(o.qa);ne(u,"RID","rpc"),ne(u,"SID",o.K),ne(u,"AID",o.T),ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(u,"TO",o.ja),ne(u,"TYPE","xmlhttp"),Ii(o,u),o.m&&o.o&&Eo(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=bs(ut(u)),d.m=null,d.P=!0,oc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,Os(this),Io(this),Fe(19))};function Ms(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Vc(o,u){var d=null;if(o.g==u){Ms(o),wo(o),o.g=null;var p=2}else if(yo(o.h,u))d=u.D,dc(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var w=o.B;p=ws(),xe(p,new nc(p,d)),Vs(o)}else Dc(o);else if(w=u.s,w==3||w==0&&0<u.X||!(p==1&&B_(o,u)||p==2&&Io(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),w){case 1:Jt(o,5);break;case 4:Jt(o,10);break;case 3:Jt(o,6);break;default:Jt(o,2)}}}function Mc(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function Jt(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),p=o.Xa;const w=!p;p=new Xt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ss(p,"https"),bs(p),w?O_(p.toString(),d):V_(p.toString(),d)}else Fe(2);o.G=0,o.l&&o.l.sa(u),Lc(o),bc(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Lc(o){if(o.G=0,o.ka=[],o.l){const u=fc(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function xc(o,u,d){var p=d instanceof Xt?ut(d):new Xt(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ps(p,p.s);else{var w=l.location;p=w.protocol,u=u?u+"."+w.hostname:w.hostname,w=+w.port;var C=new Xt(null);p&&Ss(C,p),u&&(C.g=u),w&&Ps(C,w),d&&(C.l=d),p=C}return d=o.D,u=o.ya,d&&u&&ne(p,d,u),ne(p,"VER",o.la),Ii(o,p),p}function Fc(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new le(new Ns({eb:d})):new le(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}n=Uc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ls(){}Ls.prototype.g=function(o,u){return new qe(o,u)};function qe(o,u){Ce.call(this),this.g=new Pc(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!W(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!W(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rn(this)}S(qe,Ce),qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){To(this.g)},qe.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=lo(o),o=d);u.i.push(new w_(u.Ya++,o)),u.G==3&&Vs(u)},qe.prototype.N=function(){this.g.l=null,delete this.j,To(this.g),delete this.g,qe.aa.N.call(this)};function Bc(o){uo.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}S(Bc,uo);function qc(){ho.call(this),this.status=1}S(qc,ho);function Rn(o){this.g=o}S(Rn,Uc),Rn.prototype.ua=function(){xe(this.g,"a")},Rn.prototype.ta=function(o){xe(this.g,new Bc(o))},Rn.prototype.sa=function(o){xe(this.g,new qc)},Rn.prototype.ra=function(){xe(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,Md=function(){return new Ls},Vd=function(){return ws()},Od=Qt,Ko={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,Qs=As,ic.COMPLETE="complete",Dd=ic,Jl.EventType=hi,hi.OPEN="a",hi.CLOSE="b",hi.ERROR="c",hi.MESSAGE="d",Ce.prototype.listen=Ce.prototype.K,Ni=Jl,le.prototype.listenOnce=le.prototype.L,le.prototype.getLastError=le.prototype.Ka,le.prototype.getLastErrorCode=le.prototype.Ba,le.prototype.getStatus=le.prototype.Z,le.prototype.getResponseJson=le.prototype.Oa,le.prototype.getResponseText=le.prototype.oa,le.prototype.send=le.prototype.ea,le.prototype.setWithCredentials=le.prototype.Ha,kd=le}).apply(typeof Us<"u"?Us:typeof self<"u"?self:typeof window<"u"?window:{});const _u="@firebase/firestore";/**
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
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
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
 */let ei="10.14.0";/**
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
 */const cn=new br("@firebase/firestore");function wi(){return cn.logLevel}function M(n,...e){if(cn.logLevel<=j.DEBUG){const t=e.map(La);cn.debug(`Firestore (${ei}): ${n}`,...t)}}function It(n,...e){if(cn.logLevel<=j.ERROR){const t=e.map(La);cn.error(`Firestore (${ei}): ${n}`,...t)}}function Wn(n,...e){if(cn.logLevel<=j.WARN){const t=e.map(La);cn.warn(`Firestore (${ei}): ${n}`,...t)}}function La(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n="Unexpected state"){const e=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: `+n;throw It(e),new Error(e)}function Z(n,e){n||F()}function B(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends At{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Ld{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Rv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class Cv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Sv{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Z(this.o===void 0);let i=this.i;const s=c=>this.i!==i?(i=this.i,t(c)):Promise.resolve();let r=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new yt,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new yt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Z(typeof i.accessToken=="string"),new Ld(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new Ne(e)}}class Pv{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class bv{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new Pv(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kv{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Z(this.o===void 0);const i=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.R;return this.R=r.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?s(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Z(typeof t.token=="string"),this.R=t.token,new Nv(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Dv(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
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
 */class xd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Dv(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function X(n,e){return n<e?-1:n>e?1:0}function jn(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new _e(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class U{constructor(e){this.timestamp=e}static fromTimestamp(e){return new U(e)}static min(){return new U(new _e(0,0))}static max(){return new U(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class zi{constructor(e,t,i){t===void 0?t=0:t>e.length&&F(),i===void 0?i=e.length-t:i>e.length-t&&F(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return zi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),a=t.get(s);if(r<a)return-1;if(r>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends zi{construct(e,t,i){return new re(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new V(P.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new re(t)}static emptyPath(){return new re([])}}const Ov=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ie extends zi{construct(e,t,i){return new Ie(e,t,i)}static isValidIdentifier(e){return Ov.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ie.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ie(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new V(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new V(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(i+=l,s++):(r(),s++)}if(r(),a)throw new V(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ie(t)}static emptyPath(){return new Ie([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(re.fromString(e))}static fromName(e){return new L(re.fromString(e).popFirst(5))}static empty(){return new L(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new re(e.slice()))}}function Vv(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(i===1e9?new _e(t+1,0):new _e(t,i));return new Wt(s,L.empty(),e)}function Mv(n){return new Wt(n.readTime,n.key,-1)}class Wt{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Wt(U.min(),L.empty(),-1)}static max(){return new Wt(U.max(),L.empty(),-1)}}function Lv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:X(n.largestBatchId,e.largestBatchId))}/**
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
 */const xv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function os(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==xv)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,i)=>{t(e)})}static reject(e){return new b((t,i)=>{i(e)})}static waitFor(e){return new b((t,i)=>{let s=0,r=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++r,a&&r===s&&t()},c=>i(c))}),a=!0,r===s&&t()})}static or(e){let t=b.resolve(!1);for(const i of e)t=t.next(s=>s?b.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}static mapArray(e,t){return new b((i,s)=>{const r=e.length,a=new Array(r);let l=0;for(let c=0;c<r;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===r&&i(a)},f=>s(f))}})}static doWhile(e,t){return new b((i,s)=>{const r=()=>{e()===!0?t().next(()=>{r()},s):i()};r()})}}function Uv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function as(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}xa.oe=-1;function Or(n){return n==null}function cr(n){return n===0&&1/n==-1/0}function Bv(n){return typeof n=="number"&&Number.isInteger(n)&&!cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function mu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function yn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Fd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let pe=class Qo{constructor(e,t){this.comparator=e,this.root=t||Ft.EMPTY}insert(e,t){return new Qo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ft.BLACK,null,null))}remove(e){return new Qo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ft.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bs(this.root,e,this.comparator,!0)}},Bs=class{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ft=class dt{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??dt.RED,this.left=s??dt.EMPTY,this.right=r??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new dt(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}};Ft.EMPTY=null,Ft.RED=!0,Ft.BLACK=!1;Ft.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ft(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new gu(this.data.getIterator())}getIteratorFrom(e){return new gu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class gu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class We{constructor(e){this.fields=e,e.sort(Ie.comparator)}static empty(){return new We([])}unionWith(e){let t=new we(Ie.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new We(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return jn(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
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
 */class Ud extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ae{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Ud("Invalid base64 string: "+r):r}}(e);return new Ae(t)}static fromUint8Array(e){const t=function(s){let r="";for(let a=0;a<s.length;++a)r+=String.fromCharCode(s[a]);return r}(e);return new Ae(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ae.EMPTY_BYTE_STRING=new Ae("");const qv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(Z(!!n),typeof n=="string"){let e=0;const t=qv.exec(n);if(Z(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function un(n){return typeof n=="string"?Ae.fromBase64String(n):Ae.fromUint8Array(n)}/**
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
 */function Fa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ua(n){const e=n.mapValue.fields.__previous_value__;return Fa(e)?Ua(e):e}function Ki(n){const e=jt(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class Wv{constructor(e,t,i,s,r,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Qi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const qs={mapValue:{}};function hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fa(n)?4:Hv(n)?9007199254740991:jv(n)?10:11:F()}function lt(n,e){if(n===e)return!0;const t=hn(n);if(t!==hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ki(n).isEqual(Ki(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const a=jt(s.timestampValue),l=jt(r.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return un(s.bytesValue).isEqual(un(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return he(s.geoPointValue.latitude)===he(r.geoPointValue.latitude)&&he(s.geoPointValue.longitude)===he(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return he(s.integerValue)===he(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const a=he(s.doubleValue),l=he(r.doubleValue);return a===l?cr(a)===cr(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return jn(n.arrayValue.values||[],e.arrayValue.values||[],lt);case 10:case 11:return function(s,r){const a=s.mapValue.fields||{},l=r.mapValue.fields||{};if(mu(a)!==mu(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!lt(a[c],l[c])))return!1;return!0}(n,e);default:return F()}}function Yi(n,e){return(n.values||[]).find(t=>lt(t,e))!==void 0}function Hn(n,e){if(n===e)return 0;const t=hn(n),i=hn(e);if(t!==i)return X(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,e.booleanValue);case 2:return function(r,a){const l=he(r.integerValue||r.doubleValue),c=he(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return yu(n.timestampValue,e.timestampValue);case 4:return yu(Ki(n),Ki(e));case 5:return X(n.stringValue,e.stringValue);case 6:return function(r,a){const l=un(r),c=un(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(r,a){const l=r.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=X(l[h],c[h]);if(f!==0)return f}return X(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,a){const l=X(he(r.latitude),he(a.latitude));return l!==0?l:X(he(r.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return vu(n.arrayValue,e.arrayValue);case 10:return function(r,a){var l,c,h,f;const _=r.fields||{},g=a.fields||{},R=(l=_.value)===null||l===void 0?void 0:l.arrayValue,S=(c=g.value)===null||c===void 0?void 0:c.arrayValue,D=X(((h=R==null?void 0:R.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:vu(R,S)}(n.mapValue,e.mapValue);case 11:return function(r,a){if(r===qs.mapValue&&a===qs.mapValue)return 0;if(r===qs.mapValue)return 1;if(a===qs.mapValue)return-1;const l=r.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let _=0;_<c.length&&_<f.length;++_){const g=X(c[_],f[_]);if(g!==0)return g;const R=Hn(l[c[_]],h[f[_]]);if(R!==0)return R}return X(c.length,f.length)}(n.mapValue,e.mapValue);default:throw F()}}function yu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return X(n,e);const t=jt(n),i=jt(e),s=X(t.seconds,i.seconds);return s!==0?s:X(t.nanos,i.nanos)}function vu(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Hn(t[s],i[s]);if(r)return r}return X(t.length,i.length)}function Gn(n){return Yo(n)}function Yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=jt(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return un(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return L.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Yo(r);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const a of i)r?r=!1:s+=",",s+=`${a}:${Yo(t.fields[a])}`;return s+"}"}(n.mapValue):F()}function Eu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xo(n){return!!n&&"integerValue"in n}function Ba(n){return!!n&&"arrayValue"in n}function Tu(n){return!!n&&"nullValue"in n}function Iu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ys(n){return!!n&&"mapValue"in n}function jv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Mi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return yn(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Mi(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Mi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Hv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ue{constructor(e){this.value=e}static empty(){return new Ue({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ys(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(t)}setAll(e){let t=Ie.emptyPath(),i={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,i,s),i={},s=[],t=l.popLast()}a?i[l.lastSegment()]=Mi(a):s.push(l.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Ys(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ys(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){yn(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new Ue(Mi(this.value))}}function Bd(n){const e=[];return yn(n.fields,(t,i)=>{const s=new Ie([t]);if(Ys(i)){const r=Bd(i.mapValue).fields;if(r.length===0)e.push(s);else for(const a of r)e.push(s.child(a))}else e.push(s)}),new We(e)}/**
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
 */class ke{constructor(e,t,i,s,r,a,l){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ke(e,0,U.min(),U.min(),U.min(),Ue.empty(),0)}static newFoundDocument(e,t,i,s){return new ke(e,1,t,U.min(),i,s,0)}static newNoDocument(e,t){return new ke(e,2,t,U.min(),U.min(),Ue.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,U.min(),U.min(),Ue.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ue.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ur{constructor(e,t){this.position=e,this.inclusive=t}}function wu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],a=n.position[s];if(r.field.isKeyField()?i=L.comparator(L.fromName(a.referenceValue),t.key):i=Hn(a,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Au(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class hr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class qd{}class fe extends qd{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new zv(e,t,i):t==="array-contains"?new Yv(e,i):t==="in"?new Xv(e,i):t==="not-in"?new Jv(e,i):t==="array-contains-any"?new Zv(e,i):new fe(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Kv(e,i):new Qv(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Hn(t,this.value)):t!==null&&hn(this.value)===hn(t)&&this.matchesComparison(Hn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class et extends qd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new et(e,t)}matches(e){return Wd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wd(n){return n.op==="and"}function jd(n){return $v(n)&&Wd(n)}function $v(n){for(const e of n.filters)if(e instanceof et)return!1;return!0}function Jo(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+Gn(n.value);if(jd(n))return n.filters.map(e=>Jo(e)).join(",");{const e=n.filters.map(t=>Jo(t)).join(",");return`${n.op}(${e})`}}function Hd(n,e){return n instanceof fe?function(i,s){return s instanceof fe&&i.op===s.op&&i.field.isEqual(s.field)&&lt(i.value,s.value)}(n,e):n instanceof et?function(i,s){return s instanceof et&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((r,a,l)=>r&&Hd(a,s.filters[l]),!0):!1}(n,e):void F()}function Gd(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${Gn(t.value)}`}(n):n instanceof et?function(t){return t.op.toString()+" {"+t.getFilters().map(Gd).join(" ,")+"}"}(n):"Filter"}class zv extends fe{constructor(e,t,i){super(e,t,i),this.key=L.fromName(i.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class Kv extends fe{constructor(e,t){super(e,"in",t),this.keys=$d("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qv extends fe{constructor(e,t){super(e,"not-in",t),this.keys=$d("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $d(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>L.fromName(i.referenceValue))}class Yv extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ba(t)&&Yi(t.arrayValue,this.value)}}class Xv extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Yi(this.value.arrayValue,t)}}class Jv extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Yi(this.value.arrayValue,t)}}class Zv extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Yi(this.value.arrayValue,i))}}/**
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
 */class eE{constructor(e,t=null,i=[],s=[],r=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=a,this.endAt=l,this.ue=null}}function Ru(n,e=null,t=[],i=[],s=null,r=null,a=null){return new eE(n,e,t,i,s,r,a)}function qa(n){const e=B(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Jo(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(r){return r.field.canonicalString()+r.dir}(i)).join(","),Or(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Gn(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Gn(i)).join(",")),e.ue=t}return e.ue}function Wa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Au(n.startAt,e.startAt)&&Au(n.endAt,e.endAt)}function Zo(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ls{constructor(e,t=null,i=[],s=[],r=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tE(n,e,t,i,s,r,a,l){return new ls(n,e,t,i,s,r,a,l)}function Vr(n){return new ls(n)}function Cu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function zd(n){return n.collectionGroup!==null}function Li(n){const e=B(n);if(e.ce===null){e.ce=[];const t=new Set;for(const r of e.explicitOrderBy)e.ce.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new we(Ie.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new hr(r,i))}),t.has(Ie.keyField().canonicalString())||e.ce.push(new hr(Ie.keyField(),i))}return e.ce}function ot(n){const e=B(n);return e.le||(e.le=nE(e,Li(n))),e.le}function nE(n,e){if(n.limitType==="F")return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const r=s.dir==="desc"?"asc":"desc";return new hr(s.field,r)});const t=n.endAt?new ur(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new ur(n.startAt.position,n.startAt.inclusive):null;return Ru(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function ea(n,e){const t=n.filters.concat([e]);return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ta(n,e,t){return new ls(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Mr(n,e){return Wa(ot(n),ot(e))&&n.limitType===e.limitType}function Kd(n){return`${qa(ot(n))}|lt:${n.limitType}`}function Pn(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>Gd(s)).join(", ")}]`),Or(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Gn(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Gn(s)).join(",")),`Target(${i})`}(ot(n))}; limitType=${n.limitType})`}function Lr(n,e){return e.isFoundDocument()&&function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):L.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)}(n,e)&&function(i,s){for(const r of Li(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(a,l,c){const h=wu(a,l,c);return a.inclusive?h<=0:h<0}(i.startAt,Li(i),s)||i.endAt&&!function(a,l,c){const h=wu(a,l,c);return a.inclusive?h>=0:h>0}(i.endAt,Li(i),s))}(n,e)}function iE(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qd(n){return(e,t)=>{let i=!1;for(const s of Li(n)){const r=sE(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function sE(n,e,t){const i=n.field.isKeyField()?L.comparator(e.key,t.key):function(r,a,l){const c=a.data.field(r),h=l.data.field(r);return c!==null&&h!==null?Hn(c,h):F()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return F()}}/**
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
 */class ti{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yn(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Fd(this.inner)}size(){return this.innerSize}}/**
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
 */const rE=new pe(L.comparator);function wt(){return rE}const Yd=new pe(L.comparator);function ki(...n){let e=Yd;for(const t of n)e=e.insert(t.key,t);return e}function Xd(n){let e=Yd;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function tn(){return xi()}function Jd(){return xi()}function xi(){return new ti(n=>n.toString(),(n,e)=>n.isEqual(e))}const oE=new pe(L.comparator),aE=new we(L.comparator);function H(...n){let e=aE;for(const t of n)e=e.add(t);return e}const lE=new we(X);function cE(){return lE}/**
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
 */function ja(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(e)?"-0":e}}function Zd(n){return{integerValue:""+n}}function uE(n,e){return Bv(e)?Zd(e):ja(n,e)}/**
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
 */class xr{constructor(){this._=void 0}}function hE(n,e,t){return n instanceof dr?function(s,r){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Fa(r)&&(r=Ua(r)),r&&(a.fields.__previous_value__=r),{mapValue:a}}(t,e):n instanceof Xi?tf(n,e):n instanceof Ji?nf(n,e):function(s,r){const a=ef(s,r),l=Su(a)+Su(s.Pe);return Xo(a)&&Xo(s.Pe)?Zd(l):ja(s.serializer,l)}(n,e)}function dE(n,e,t){return n instanceof Xi?tf(n,e):n instanceof Ji?nf(n,e):t}function ef(n,e){return n instanceof fr?function(i){return Xo(i)||function(r){return!!r&&"doubleValue"in r}(i)}(e)?e:{integerValue:0}:null}class dr extends xr{}class Xi extends xr{constructor(e){super(),this.elements=e}}function tf(n,e){const t=sf(e);for(const i of n.elements)t.some(s=>lt(s,i))||t.push(i);return{arrayValue:{values:t}}}class Ji extends xr{constructor(e){super(),this.elements=e}}function nf(n,e){let t=sf(e);for(const i of n.elements)t=t.filter(s=>!lt(s,i));return{arrayValue:{values:t}}}class fr extends xr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Su(n){return he(n.integerValue||n.doubleValue)}function sf(n){return Ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function fE(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof Xi&&s instanceof Xi||i instanceof Ji&&s instanceof Ji?jn(i.elements,s.elements,lt):i instanceof fr&&s instanceof fr?lt(i.Pe,s.Pe):i instanceof dr&&s instanceof dr}(n.transform,e.transform)}class pE{constructor(e,t){this.version=e,this.transformResults=t}}class Xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Xe}static exists(e){return new Xe(void 0,e)}static updateTime(e){return new Xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fr{}function rf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ha(n.key,Xe.none()):new cs(n.key,n.data,Xe.none());{const t=n.data,i=Ue.empty();let s=new we(Ie.comparator);for(let r of e.fields)if(!s.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?i.delete(r):i.set(r,a),s=s.add(r)}return new Kt(n.key,i,new We(s.toArray()),Xe.none())}}function _E(n,e,t){n instanceof cs?function(s,r,a){const l=s.value.clone(),c=bu(s.fieldTransforms,r,a.transformResults);l.setAll(c),r.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Kt?function(s,r,a){if(!Xs(s.precondition,r))return void r.convertToUnknownDocument(a.version);const l=bu(s.fieldTransforms,r,a.transformResults),c=r.data;c.setAll(of(s)),c.setAll(l),r.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,r,a){r.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Fi(n,e,t,i){return n instanceof cs?function(r,a,l,c){if(!Xs(r.precondition,a))return l;const h=r.value.clone(),f=Nu(r.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,i):n instanceof Kt?function(r,a,l,c){if(!Xs(r.precondition,a))return l;const h=Nu(r.fieldTransforms,c,a),f=a.data;return f.setAll(of(r)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(_=>_.field))}(n,e,t,i):function(r,a,l){return Xs(r.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function mE(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=ef(i.transform,s||null);r!=null&&(t===null&&(t=Ue.empty()),t.set(i.field,r))}return t||null}function Pu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&jn(i,s,(r,a)=>fE(r,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cs extends Fr{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Kt extends Fr{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function of(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function bu(n,e,t){const i=new Map;Z(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],a=r.transform,l=e.data.field(r.field);i.set(r.field,dE(a,l,t[s]))}return i}function Nu(n,e,t){const i=new Map;for(const s of n){const r=s.transform,a=t.data.field(s.field);i.set(s.field,hE(r,a,e))}return i}class Ha extends Fr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gE extends Fr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yE{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&_E(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Fi(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Fi(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Jd();return this.mutations.forEach(s=>{const r=e.get(s.key),a=r.overlayedDocument;let l=this.applyToLocalView(a,r.mutatedFields);l=t.has(s.key)?null:l;const c=rf(a,l);c!==null&&i.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),H())}isEqual(e){return this.batchId===e.batchId&&jn(this.mutations,e.mutations,(t,i)=>Pu(t,i))&&jn(this.baseMutations,e.baseMutations,(t,i)=>Pu(t,i))}}class Ga{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){Z(e.mutations.length===i.length);let s=function(){return oE}();const r=e.mutations;for(let a=0;a<r.length;a++)s=s.insert(r[a].key,i[a].version);return new Ga(e,t,i,s)}}/**
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
 */class vE{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class EE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var de,z;function TE(n){switch(n){default:return F();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function af(n){if(n===void 0)return It("GRPC error has no .code"),P.UNKNOWN;switch(n){case de.OK:return P.OK;case de.CANCELLED:return P.CANCELLED;case de.UNKNOWN:return P.UNKNOWN;case de.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case de.INTERNAL:return P.INTERNAL;case de.UNAVAILABLE:return P.UNAVAILABLE;case de.UNAUTHENTICATED:return P.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case de.NOT_FOUND:return P.NOT_FOUND;case de.ALREADY_EXISTS:return P.ALREADY_EXISTS;case de.PERMISSION_DENIED:return P.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case de.ABORTED:return P.ABORTED;case de.OUT_OF_RANGE:return P.OUT_OF_RANGE;case de.UNIMPLEMENTED:return P.UNIMPLEMENTED;case de.DATA_LOSS:return P.DATA_LOSS;default:return F()}}(z=de||(de={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IE(){return new TextEncoder}/**
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
 */const wE=new sn([4294967295,4294967295],0);function ku(n){const e=IE().encode(n),t=new Nd;return t.update(e),new Uint8Array(t.digest())}function Du(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new sn([t,i],0),new sn([s,r],0)]}class $a{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Di(`Invalid padding: ${t}`);if(i<0)throw new Di(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Di(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Di(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=sn.fromNumber(this.Ie)}Ee(e,t,i){let s=e.add(t.multiply(sn.fromNumber(i)));return s.compare(wE)===1&&(s=new sn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ku(e),[i,s]=Du(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(i,s,r);if(!this.de(a))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),a=new $a(r,s,t);return i.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=ku(e),[i,s]=Du(t);for(let r=0;r<this.hashCount;r++){const a=this.Ee(i,s,r);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Di extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ur{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,us.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Ur(U.min(),s,new pe(X),wt(),H())}}class us{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new us(i,t,H(),H(),H())}}/**
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
 */class Js{constructor(e,t,i,s){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=s}}class lf{constructor(e,t){this.targetId=e,this.me=t}}class cf{constructor(e,t,i=Ae.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Ou{constructor(){this.fe=0,this.ge=Mu(),this.pe=Ae.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=H(),t=H(),i=H();return this.ge.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:F()}}),new us(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Mu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class AE{constructor(e){this.Le=e,this.Be=new Map,this.ke=wt(),this.qe=Vu(),this.Qe=new pe(X)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:F()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,i=e.me.count,s=this.Je(t);if(s){const r=s.target;if(Zo(r))if(i===0){const a=new L(r.path);this.Ue(t,a,ke.newNoDocument(a,U.min()))}else Z(i===1);else{const a=this.Ye(t);if(a!==i){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let a,l;try{a=un(i).toUint8Array()}catch(c){if(c instanceof Ud)return Wn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new $a(a,s,r)}catch(c){return Wn(c instanceof Di?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let s=0;return i.forEach(r=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${r.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,r,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((r,a)=>{const l=this.Je(a);if(l){if(r.current&&Zo(l.target)){const c=new L(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,ke.newNoDocument(c,e))}r.be&&(t.set(a,r.ve()),r.Ce())}});let i=H();this.qe.forEach((r,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(i=i.add(r))}),this.ke.forEach((r,a)=>a.setReadTime(e));const s=new Ur(e,t,this.Qe,this.ke,i);return this.ke=wt(),this.qe=Vu(),this.Qe=new pe(X),s}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Ou,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new we(X),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Ou),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Vu(){return new pe(L.comparator)}function Mu(){return new pe(L.comparator)}const RE={asc:"ASCENDING",desc:"DESCENDING"},CE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SE={and:"AND",or:"OR"};class PE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function na(n,e){return n.useProto3Json||Or(e)?e:{value:e}}function pr(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function bE(n,e){return pr(n,e.toTimestamp())}function at(n){return Z(!!n),U.fromTimestamp(function(t){const i=jt(t);return new _e(i.seconds,i.nanos)}(n))}function za(n,e){return ia(n,e).canonicalString()}function ia(n,e){const t=function(s){return new re(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function hf(n){const e=re.fromString(n);return Z(mf(e)),e}function sa(n,e){return za(n.databaseId,e.path)}function bo(n,e){const t=hf(e);if(t.get(1)!==n.databaseId.projectId)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(ff(t))}function df(n,e){return za(n.databaseId,e)}function NE(n){const e=hf(n);return e.length===4?re.emptyPath():ff(e)}function ra(n){return new re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ff(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Lu(n,e,t){return{name:sa(n,e),fields:t.value.mapValue.fields}}function kE(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(h,f){return h.useProto3Json?(Z(f===void 0||typeof f=="string"),Ae.fromBase64String(f||"")):(Z(f===void 0||f instanceof q_||f instanceof Uint8Array),Ae.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?P.UNKNOWN:af(h.code);return new V(f,h.message||"")}(a);t=new cf(i,s,r,l||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=bo(n,i.document.name),r=at(i.document.updateTime),a=i.document.createTime?at(i.document.createTime):U.min(),l=new Ue({mapValue:{fields:i.document.fields}}),c=ke.newFoundDocument(s,r,a,l),h=i.targetIds||[],f=i.removedTargetIds||[];t=new Js(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=bo(n,i.document),r=i.readTime?at(i.readTime):U.min(),a=ke.newNoDocument(s,r),l=i.removedTargetIds||[];t=new Js([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=bo(n,i.document),r=i.removedTargetIds||[];t=new Js([],r,s,null)}else{if(!("filter"in e))return F();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,a=new EE(s,r),l=i.targetId;t=new lf(l,a)}}return t}function DE(n,e){let t;if(e instanceof cs)t={update:Lu(n,e.key,e.value)};else if(e instanceof Ha)t={delete:sa(n,e.key)};else if(e instanceof Kt)t={update:Lu(n,e.key,e.data),updateMask:qE(e.fieldMask)};else{if(!(e instanceof gE))return F();t={verify:sa(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(r,a){const l=a.transform;if(l instanceof dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ji)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof fr)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw F()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:bE(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:F()}(n,e.precondition)),t}function OE(n,e){return n&&n.length>0?(Z(e!==void 0),n.map(t=>function(s,r){let a=s.updateTime?at(s.updateTime):at(r);return a.isEqual(U.min())&&(a=at(r)),new pE(a,s.transformResults||[])}(t,e))):[]}function VE(n,e){return{documents:[df(n,e.path)]}}function ME(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=df(n,s);const r=function(h){if(h.length!==0)return _f(et.create(h,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:bn(g.field),direction:FE(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=na(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function LE(n){let e=NE(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Z(i===1);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let r=[];t.where&&(r=function(_){const g=pf(_);return g instanceof et&&jd(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(g=>function(S){return new hr(Nn(S.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(_){let g;return g=typeof _=="object"?_.value:_,Or(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(_){const g=!!_.before,R=_.values||[];return new ur(R,g)}(t.startAt));let h=null;return t.endAt&&(h=function(_){const g=!_.before,R=_.values||[];return new ur(R,g)}(t.endAt)),tE(e,s,a,r,l,"F",c,h)}function xE(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function pf(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Nn(t.unaryFilter.field);return fe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Nn(t.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Nn(t.unaryFilter.field);return fe.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(Nn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return et.create(t.compositeFilter.filters.map(i=>pf(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F()}}(t.compositeFilter.op))}(n):F()}function FE(n){return RE[n]}function UE(n){return CE[n]}function BE(n){return SE[n]}function bn(n){return{fieldPath:n.canonicalString()}}function Nn(n){return Ie.fromServerFormat(n.fieldPath)}function _f(n){return n instanceof fe?function(t){if(t.op==="=="){if(Iu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NAN"}};if(Tu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Iu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NAN"}};if(Tu(t.value))return{unaryFilter:{field:bn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bn(t.field),op:UE(t.op),value:t.value}}}(n):n instanceof et?function(t){const i=t.getFilters().map(s=>_f(s));return i.length===1?i[0]:{compositeFilter:{op:BE(t.op),filters:i}}}(n):F()}function qE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function mf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Lt{constructor(e,t,i,s,r=U.min(),a=U.min(),l=Ae.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class WE{constructor(e){this.ct=e}}function jE(n){const e=LE({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ta(e,e.limit,"L"):e}/**
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
 */class HE{constructor(){this.un=new GE}addToCollectionParentIndex(e,t){return this.un.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Wt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Wt.min())}updateCollectionGroup(e,t,i){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class GE{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new we(re.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new we(re.comparator)).toArray()}}/**
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
 */class $n{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new $n(0)}static kn(){return new $n(-1)}}/**
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
 */class $E{constructor(){this.changes=new ti(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?b.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class zE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class KE{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&Fi(i.mutation,s,We.empty(),_e.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,H()).next(()=>i))}getLocalViewOfDocuments(e,t,i=H()){const s=tn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(r=>{let a=ki();return r.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const i=tn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,H()))}populateOverlays(e,t,i){const s=[];return i.forEach(r=>{t.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,i,s){let r=wt();const a=xi(),l=function(){return xi()}();return t.forEach((c,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Kt)?r=r.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Fi(f.mutation,h,f.mutation.getFieldMask(),_e.now())):a.set(h.key,We.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var _;return l.set(h,new zE(f,(_=a.get(h))!==null&&_!==void 0?_:null))}),l))}recalculateAndSaveOverlays(e,t){const i=xi();let s=new pe((a,l)=>a-l),r=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=i.get(c)||We.empty();f=l.applyToLocalView(h,f),i.set(c,f);const _=(s.get(l.batchId)||H()).add(c);s=s.insert(l.batchId,_)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,_=Jd();f.forEach(g=>{if(!r.has(g)){const R=rf(t.get(g),i.get(g));R!==null&&_.set(g,R),r=r.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,_))}return b.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):zd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(r=>{const a=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):b.resolve(tn());let l=-1,c=r;return a.next(h=>b.forEach(h,(f,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),r.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,c,h,H())).next(f=>({batchId:l,changes:Xd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next(i=>{let s=ki();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let a=ki();return this.indexManager.getCollectionParents(e,r).next(l=>b.forEach(l,c=>{const h=function(_,g){return new ls(g,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,c.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next(f=>{f.forEach((_,g)=>{a=a.insert(_,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(a=>(r=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s))).next(a=>{r.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ke.newInvalidDocument(f)))});let l=ki();return a.forEach((c,h)=>{const f=r.get(c);f!==void 0&&Fi(f.mutation,h,We.empty(),_e.now()),Lr(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class QE{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return b.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:at(s.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:jE(s.bundledQuery),readTime:at(s.readTime)}}(t)),b.resolve()}}/**
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
 */class YE{constructor(){this.overlays=new pe(L.comparator),this.Ir=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const i=tn();return b.forEach(t,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,r)=>{this.ht(e,t,r)}),b.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Ir.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.Ir.delete(i)),b.resolve()}getOverlaysForCollection(e,t,i){const s=tn(),r=t.length+1,a=new L(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return b.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let f=r.get(h.largestBatchId);f===null&&(f=tn(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=tn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return b.resolve(l)}ht(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(i.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new vE(t,i));let r=this.Ir.get(t);r===void 0&&(r=H(),this.Ir.set(t,r)),this.Ir.set(t,r.add(i.key))}}/**
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
 */class XE{constructor(){this.sessionToken=Ae.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
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
 */class Ka{constructor(){this.Tr=new we(ge.Er),this.dr=new we(ge.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const i=new ge(e,t);this.Tr=this.Tr.add(i),this.dr=this.dr.add(i)}Rr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Vr(new ge(e,t))}mr(e,t){e.forEach(i=>this.removeReference(i,t))}gr(e){const t=new L(new re([])),i=new ge(t,e),s=new ge(t,e+1),r=[];return this.dr.forEachInRange([i,s],a=>{this.Vr(a),r.push(a.key)}),r}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new L(new re([])),i=new ge(t,e),s=new ge(t,e+1);let r=H();return this.dr.forEachInRange([i,s],a=>{r=r.add(a.key)}),r}containsKey(e){const t=new ge(e,0),i=this.Tr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class ge{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return L.comparator(e.key,t.key)||X(e.wr,t.wr)}static Ar(e,t){return X(e.wr,t.wr)||L.comparator(e.key,t.key)}}/**
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
 */class JE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new we(ge.Er)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new yE(r,t,i,s);this.mutationQueue.push(a);for(const l of s)this.br=this.br.add(new ge(l.key,r)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.vr(i),r=s<0?0:s;return b.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),r=[];return this.br.forEachInRange([i,s],a=>{const l=this.Dr(a.wr);r.push(l)}),b.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new we(X);return t.forEach(s=>{const r=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([r,a],l=>{i=i.add(l.wr)})}),b.resolve(this.Cr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;L.isDocumentKey(r)||(r=r.child(""));const a=new ge(new L(r),0);let l=new we(X);return this.br.forEachWhile(c=>{const h=c.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},a),b.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(i=>{const s=this.Dr(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Z(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.br;return b.forEach(t.mutations,s=>{const r=new ge(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=i})}On(e){}containsKey(e,t){const i=new ge(t,0),s=this.br.firstAfterOrEqual(i);return b.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class ZE{constructor(e){this.Mr=e,this.docs=function(){return new pe(L.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,a=this.Mr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return b.resolve(i?i.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let i=wt();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ke.newInvalidDocument(s))}),b.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=wt();const a=t.path,l=new L(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Lv(Mv(f),i)<=0||(s.has(f.key)||Lr(t,f))&&(r=r.insert(f.key,f.mutableCopy()))}return b.resolve(r)}getAllFromCollectionGroup(e,t,i,s){F()}Or(e,t){return b.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new eT(this)}getSize(e){return b.resolve(this.size)}}class eT extends $E{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(i)}),b.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class tT{constructor(e){this.persistence=e,this.Nr=new ti(t=>qa(t),Wa),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ka,this.targetCount=0,this.kr=$n.Bn()}forEachTarget(e,t){return this.Nr.forEach((i,s)=>t(s)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Lr&&(this.Lr=t),b.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Kn(t),b.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=t&&i.get(l.targetId)===null&&(this.Nr.delete(a),r.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),b.waitFor(r).next(()=>s)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const i=this.Nr.get(t)||null;return b.resolve(i)}addMatchingKeys(e,t,i){return this.Br.Rr(t,i),b.resolve()}removeMatchingKeys(e,t,i){this.Br.mr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(a=>{r.push(s.markPotentiallyOrphaned(e,a))}),b.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Br.yr(t);return b.resolve(i)}containsKey(e,t){return b.resolve(this.Br.containsKey(t))}}/**
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
 */class nT{constructor(e,t){this.qr={},this.overlays={},this.Qr=new xa(0),this.Kr=!1,this.Kr=!0,this.$r=new XE,this.referenceDelegate=e(this),this.Ur=new tT(this),this.indexManager=new HE,this.remoteDocumentCache=function(s){return new ZE(s)}(i=>this.referenceDelegate.Wr(i)),this.serializer=new WE(t),this.Gr=new QE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new YE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.qr[e.toKey()];return i||(i=new JE(t,this.referenceDelegate),this.qr[e.toKey()]=i),i}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,i){M("MemoryPersistence","Starting transaction:",e);const s=new iT(this.Qr.next());return this.referenceDelegate.zr(),i(s).next(r=>this.referenceDelegate.jr(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Hr(e,t){return b.or(Object.values(this.qr).map(i=>()=>i.containsKey(e,t)))}}class iT extends Fv{constructor(e){super(),this.currentSequenceNumber=e}}class Qa{constructor(e){this.persistence=e,this.Jr=new Ka,this.Yr=null}static Zr(e){return new Qa(e)}get Xr(){if(this.Yr)return this.Yr;throw F()}addReference(e,t,i){return this.Jr.addReference(i,t),this.Xr.delete(i.toString()),b.resolve()}removeReference(e,t,i){return this.Jr.removeReference(i,t),this.Xr.add(i.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),b.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.Xr.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Xr,i=>{const s=L.fromPath(i);return this.ei(e,s).next(r=>{r||t.removeEntry(s,U.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(i=>{i?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return b.or([()=>b.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class Ya{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.$i=i,this.Ui=s}static Wi(e,t){let i=H(),s=H();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Ya(e,t.fromCache,i,s)}}/**
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
 */class sT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rT{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return sm()?8:Uv(Le())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.Yi(e,t).next(a=>{r.result=a}).next(()=>{if(!r.result)return this.Zi(e,t,s,i).next(a=>{r.result=a})}).next(()=>{if(r.result)return;const a=new sT;return this.Xi(e,t,a).next(l=>{if(r.result=l,this.zi)return this.es(e,t,a,l.size)})}).next(()=>r.result)}es(e,t,i,s){return i.documentReadCount<this.ji?(wi()<=j.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),b.resolve()):(wi()<=j.DEBUG&&M("QueryEngine","Query:",Pn(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.Hi*s?(wi()<=j.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):b.resolve())}Yi(e,t){if(Cu(t))return b.resolve(null);let i=ot(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ta(t,null,"F"),i=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const a=H(...r);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,i).next(c=>{const h=this.ts(t,l);return this.ns(t,h,a,c.readTime)?this.Yi(e,ta(t,null,"F")):this.rs(e,h,t,c)}))})))}Zi(e,t,i,s){return Cu(t)||s.isEqual(U.min())?b.resolve(null):this.Ji.getDocuments(e,i).next(r=>{const a=this.ts(t,r);return this.ns(t,a,i,s)?b.resolve(null):(wi()<=j.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pn(t)),this.rs(e,a,t,Vv(s,-1)).next(l=>l))})}ts(e,t){let i=new we(Qd(e));return t.forEach((s,r)=>{Lr(e,r)&&(i=i.add(r))}),i}ns(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Xi(e,t,i){return wi()<=j.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Pn(t)),this.Ji.getDocumentsMatchingQuery(e,t,Wt.min(),i)}rs(e,t,i,s){return this.Ji.getDocumentsMatchingQuery(e,i,s).next(r=>(t.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
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
 */class oT{constructor(e,t,i,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new pe(X),this._s=new ti(r=>qa(r),Wa),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(i)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KE(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function aT(n,e,t,i){return new oT(n,e,t,i)}async function gf(n,e){const t=B(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,t.ls(e),t.mutationQueue.getAllMutationBatches(i))).next(r=>{const a=[],l=[];let c=H();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of r){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(i,c).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function lT(n,e){const t=B(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const _=h.batch,g=_.keys();let R=b.resolve();return g.forEach(S=>{R=R.next(()=>f.getEntry(c,S)).next(D=>{const N=h.docVersions.get(S);Z(N!==null),D.version.compareTo(N)<0&&(_.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(c,_))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(l){let c=H();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function yf(n){const e=B(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function cT(n,e){const t=B(n),i=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const l=[];e.targetChanges.forEach((f,_)=>{const g=s.get(_);if(!g)return;l.push(t.Ur.removeMatchingKeys(r,f.removedDocuments,_).next(()=>t.Ur.addMatchingKeys(r,f.addedDocuments,_)));let R=g.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(Ae.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):f.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(f.resumeToken,i)),s=s.insert(_,R),function(D,N,q){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,R,f)&&l.push(t.Ur.updateTargetData(r,R))});let c=wt(),h=H();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(r,f))}),l.push(uT(r,a,e.documentUpdates).next(f=>{c=f.Ps,h=f.Is})),!i.isEqual(U.min())){const f=t.Ur.getLastRemoteSnapshotVersion(r).next(_=>t.Ur.setTargetsMetadata(r,r.currentSequenceNumber,i));l.push(f)}return b.waitFor(l).next(()=>a.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,h)).next(()=>c)}).then(r=>(t.os=s,r))}function uT(n,e,t){let i=H(),s=H();return t.forEach(r=>i=i.add(r)),e.getEntries(n,i).next(r=>{let a=wt();return t.forEach((l,c)=>{const h=r.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(U.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):M("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:a,Is:s}})}function hT(n,e){const t=B(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function dT(n,e){const t=B(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Ur.getTargetData(i,e).next(r=>r?(s=r,b.resolve(s)):t.Ur.allocateTargetId(i).next(a=>(s=new Lt(e,a,"TargetPurposeListen",i.currentSequenceNumber),t.Ur.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.os.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(i.targetId,i),t._s.set(e,i.targetId)),i})}async function oa(n,e,t){const i=B(n),s=i.os.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,a=>i.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!as(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.os=i.os.remove(e),i._s.delete(s.target)}function xu(n,e,t){const i=B(n);let s=U.min(),r=H();return i.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const _=B(c),g=_._s.get(f);return g!==void 0?b.resolve(_.os.get(g)):_.Ur.getTargetData(h,f)}(i,a,ot(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,i.Ur.getMatchingKeysForTargetId(a,l.targetId).next(c=>{r=c})}).next(()=>i.ss.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?r:H())).next(l=>(fT(i,iE(e),l),{documents:l,Ts:r})))}function fT(n,e,t){let i=n.us.get(e)||U.min();t.forEach((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)}),n.us.set(e,i)}class Fu{constructor(){this.activeTargetIds=cE()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pT{constructor(){this.so=new Fu,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,i){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _T{_o(e){}shutdown(){}}/**
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
 */class Uu{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ws=null;function No(){return Ws===null?Ws=function(){return 268435456+Math.round(2147483648*Math.random())}():Ws++,"0x"+Ws.toString(16)}/**
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
 */const mT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gT{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const be="WebChannelConnection";class yT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Do=i+"://"+t.host,this.vo=`projects/${s}/databases/${r}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${r}`}get Fo(){return!1}Mo(t,i,s,r,a){const l=No(),c=this.xo(t,i.toUriEncodedString());M("RestConnection",`Sending RPC '${t}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,r,a),this.No(t,c,h,s).then(f=>(M("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Wn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",s),f})}Lo(t,i,s,r,a,l){return this.Mo(t,i,s,r,a)}Oo(t,i,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((r,a)=>t[a]=r),s&&s.headers.forEach((r,a)=>t[a]=r)}xo(t,i){const s=mT[t];return`${this.Do}/v1/${i}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,i,s){const r=No();return new Promise((a,l)=>{const c=new kd;c.setWithCredentials(!0),c.listenOnce(Dd.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Qs.NO_ERROR:const f=c.getResponseJson();M(be,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),a(f);break;case Qs.TIMEOUT:M(be,`RPC '${e}' ${r} timed out`),l(new V(P.DEADLINE_EXCEEDED,"Request time out"));break;case Qs.HTTP_ERROR:const _=c.getStatus();if(M(be,`RPC '${e}' ${r} failed with status:`,_,"response text:",c.getResponseText()),_>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const R=g==null?void 0:g.error;if(R&&R.status&&R.message){const S=function(N){const q=N.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(q)>=0?q:P.UNKNOWN}(R.status);l(new V(S,R.message))}else l(new V(P.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new V(P.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{M(be,`RPC '${e}' ${r} completed.`)}});const h=JSON.stringify(s);M(be,`RPC '${e}' ${r} sending request:`,s),c.send(t,"POST",h,i,15)})}Bo(e,t,i){const s=No(),r=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Md(),l=Vd(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const f=r.join("");M(be,`Creating RPC '${e}' stream ${s}: ${f}`,c);const _=a.createWebChannel(f,c);let g=!1,R=!1;const S=new gT({Io:N=>{R?M(be,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(M(be,`Opening RPC '${e}' stream ${s} transport.`),_.open(),g=!0),M(be,`RPC '${e}' stream ${s} sending:`,N),_.send(N))},To:()=>_.close()}),D=(N,q,W)=>{N.listen(q,$=>{try{W($)}catch(ae){setTimeout(()=>{throw ae},0)}})};return D(_,Ni.EventType.OPEN,()=>{R||(M(be,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),D(_,Ni.EventType.CLOSE,()=>{R||(R=!0,M(be,`RPC '${e}' stream ${s} transport closed`),S.So())}),D(_,Ni.EventType.ERROR,N=>{R||(R=!0,Wn(be,`RPC '${e}' stream ${s} transport errored:`,N),S.So(new V(P.UNAVAILABLE,"The operation could not be completed")))}),D(_,Ni.EventType.MESSAGE,N=>{var q;if(!R){const W=N.data[0];Z(!!W);const $=W,ae=$.error||((q=$[0])===null||q===void 0?void 0:q.error);if(ae){M(be,`RPC '${e}' stream ${s} received error:`,ae);const Ge=ae.status;let ue=function(v){const E=de[v];if(E!==void 0)return af(E)}(Ge),T=ae.message;ue===void 0&&(ue=P.INTERNAL,T="Unknown error status: "+Ge+" with message "+ae.message),R=!0,S.So(new V(ue,T)),_.close()}else M(be,`RPC '${e}' stream ${s} received:`,W),S.bo(W)}}),D(l,Od.STAT_EVENT,N=>{N.stat===Ko.PROXY?M(be,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ko.NOPROXY&&M(be,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function ko(){return typeof document<"u"?document:null}/**
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
 */function Br(n){return new PE(n,!0)}/**
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
 */class vf{constructor(e,t,i=1e3,s=1.5,r=6e4){this.ui=e,this.timerId=t,this.ko=i,this.qo=s,this.Qo=r,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),i=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-i);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ef{constructor(e,t,i,s,r,a,l,c){this.ui=e,this.Ho=i,this.Jo=s,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vf(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(It(t.toString()),It("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Yo===t&&this.P_(i,s)},i=>{e(()=>{const s=new V(P.UNKNOWN,"Fetching auth token failed: "+i.message);return this.I_(s)})})}P_(e,t){const i=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{i(()=>this.listener.Eo())}),this.stream.Ro(()=>{i(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{i(()=>this.I_(s))}),this.stream.onMessage(s=>{i(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return M("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vT extends Ef{constructor(e,t,i,s,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=kE(this.serializer,e),i=function(r){if(!("targetChange"in r))return U.min();const a=r.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?at(a.readTime):U.min()}(e);return this.listener.d_(t,i)}A_(e){const t={};t.database=ra(this.serializer),t.addTarget=function(r,a){let l;const c=a.target;if(l=Zo(c)?{documents:VE(r,c)}:{query:ME(r,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=uf(r,a.resumeToken);const h=na(r,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(U.min())>0){l.readTime=pr(r,a.snapshotVersion.toTimestamp());const h=na(r,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const i=xE(this.serializer,e);i&&(t.labels=i),this.a_(t)}R_(e){const t={};t.database=ra(this.serializer),t.removeTarget=e,this.a_(t)}}class ET extends Ef{constructor(e,t,i,s,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,a),this.serializer=r}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=OE(e.writeResults,e.commitTime),i=at(e.commitTime);return this.listener.g_(i,t)}p_(){const e={};e.database=ra(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>DE(this.serializer,i))};this.a_(t)}}/**
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
 */class TT extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.Mo(e,ia(t,i),s,r,a)).catch(r=>{throw r.name==="FirebaseError"?(r.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(P.UNKNOWN,r.toString())})}Lo(e,t,i,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ia(t,i),s,a,l,r)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(P.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class IT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(It(t),this.D_=!1):M("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class wT{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=r,this.k_._o(a=>{i.enqueueAndForget(async()=>{vn(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=B(c);h.L_.add(4),await hs(h),h.q_.set("Unknown"),h.L_.delete(4),await qr(h)}(this))})}),this.q_=new IT(i,s)}}async function qr(n){if(vn(n))for(const e of n.B_)await e(!0)}async function hs(n){for(const e of n.B_)await e(!1)}function Tf(n,e){const t=B(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),el(t)?Za(t):ni(t).r_()&&Ja(t,e))}function Xa(n,e){const t=B(n),i=ni(t);t.N_.delete(e),i.r_()&&If(t,e),t.N_.size===0&&(i.r_()?i.o_():vn(t)&&t.q_.set("Unknown"))}function Ja(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ni(n).A_(e)}function If(n,e){n.Q_.xe(e),ni(n).R_(e)}function Za(n){n.Q_=new AE({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),ni(n).start(),n.q_.v_()}function el(n){return vn(n)&&!ni(n).n_()&&n.N_.size>0}function vn(n){return B(n).L_.size===0}function wf(n){n.Q_=void 0}async function AT(n){n.q_.set("Online")}async function RT(n){n.N_.forEach((e,t)=>{Ja(n,e)})}async function CT(n,e){wf(n),el(n)?(n.q_.M_(e),Za(n)):n.q_.set("Unknown")}async function ST(n,e,t){if(n.q_.set("Online"),e instanceof cf&&e.state===2&&e.cause)try{await async function(s,r){const a=r.cause;for(const l of r.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.N_.delete(l),s.Q_.removeTarget(l))}(n,e)}catch(i){M("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await _r(n,i)}else if(e instanceof Js?n.Q_.Ke(e):e instanceof lf?n.Q_.He(e):n.Q_.We(e),!t.isEqual(U.min()))try{const i=await yf(n.localStore);t.compareTo(i)>=0&&await function(r,a){const l=r.Q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=r.N_.get(h);f&&r.N_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=r.N_.get(c);if(!f)return;r.N_.set(c,f.withResumeToken(Ae.EMPTY_BYTE_STRING,f.snapshotVersion)),If(r,c);const _=new Lt(f.target,c,h,f.sequenceNumber);Ja(r,_)}),r.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(i){M("RemoteStore","Failed to raise snapshot:",i),await _r(n,i)}}async function _r(n,e,t){if(!as(e))throw e;n.L_.add(1),await hs(n),n.q_.set("Offline"),t||(t=()=>yf(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await qr(n)})}function Af(n,e){return e().catch(t=>_r(n,t,e))}async function Wr(n){const e=B(n),t=Ht(e);let i=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;PT(e);)try{const s=await hT(e.localStore,i);if(s===null){e.O_.length===0&&t.o_();break}i=s.batchId,bT(e,s)}catch(s){await _r(e,s)}Rf(e)&&Cf(e)}function PT(n){return vn(n)&&n.O_.length<10}function bT(n,e){n.O_.push(e);const t=Ht(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Rf(n){return vn(n)&&!Ht(n).n_()&&n.O_.length>0}function Cf(n){Ht(n).start()}async function NT(n){Ht(n).p_()}async function kT(n){const e=Ht(n);for(const t of n.O_)e.m_(t.mutations)}async function DT(n,e,t){const i=n.O_.shift(),s=Ga.from(i,e,t);await Af(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Wr(n)}async function OT(n,e){e&&Ht(n).V_&&await async function(i,s){if(function(a){return TE(a)&&a!==P.ABORTED}(s.code)){const r=i.O_.shift();Ht(i).s_(),await Af(i,()=>i.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Wr(i)}}(n,e),Rf(n)&&Cf(n)}async function Bu(n,e){const t=B(n);t.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const i=vn(t);t.L_.add(3),await hs(t),i&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await qr(t)}async function VT(n,e){const t=B(n);e?(t.L_.delete(2),await qr(t)):e||(t.L_.add(2),await hs(t),t.q_.set("Unknown"))}function ni(n){return n.K_||(n.K_=function(t,i,s){const r=B(t);return r.w_(),new vT(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Eo:AT.bind(null,n),Ro:RT.bind(null,n),mo:CT.bind(null,n),d_:ST.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),el(n)?Za(n):n.q_.set("Unknown")):(await n.K_.stop(),wf(n))})),n.K_}function Ht(n){return n.U_||(n.U_=function(t,i,s){const r=B(t);return r.w_(),new ET(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:NT.bind(null,n),mo:OT.bind(null,n),f_:kT.bind(null,n),g_:DT.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Wr(n)):(await n.U_.stop(),n.O_.length>0&&(M("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
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
 */class tl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const a=Date.now()+i,l=new tl(e,t,a,s,r);return l.start(i),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nl(n,e){if(It("AsyncQueue",`${e}: ${n}`),as(n))return new V(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class xn{constructor(e){this.comparator=e?(t,i)=>e(t,i)||L.comparator(t.key,i.key):(t,i)=>L.comparator(t.key,i.key),this.keyedMap=ki(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new xn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof xn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new xn;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
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
 */class qu{constructor(){this.W_=new pe(L.comparator)}track(e){const t=e.doc.key,i=this.W_.get(t);i?e.type!==0&&i.type===3?this.W_=this.W_.insert(t,e):e.type===3&&i.type!==1?this.W_=this.W_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.W_=this.W_.remove(t):e.type===1&&i.type===2?this.W_=this.W_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):F():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,i)=>{e.push(i)}),e}}class zn{constructor(e,t,i,s,r,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,r){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new zn(e,t,xn.emptySet(t),a,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
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
 */class MT{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class LT{constructor(){this.queries=Wu(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,i){const s=B(t),r=s.queries;s.queries=Wu(),r.forEach((a,l)=>{for(const c of l.j_)c.onError(i)})})(this,new V(P.ABORTED,"Firestore shutting down"))}}function Wu(){return new ti(n=>Kd(n),Mr)}async function il(n,e){const t=B(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.H_()&&e.J_()&&(i=2):(r=new MT,i=e.J_()?0:1);try{switch(i){case 0:r.z_=await t.onListen(s,!0);break;case 1:r.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=nl(a,`Initialization of query '${Pn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,r),r.j_.push(e),e.Z_(t.onlineState),r.z_&&e.X_(r.z_)&&rl(t)}async function sl(n,e){const t=B(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const a=r.j_.indexOf(e);a>=0&&(r.j_.splice(a,1),r.j_.length===0?s=e.J_()?0:1:!r.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function xT(n,e){const t=B(n);let i=!1;for(const s of e){const r=s.query,a=t.queries.get(r);if(a){for(const l of a.j_)l.X_(s)&&(i=!0);a.z_=s}}i&&rl(t)}function FT(n,e,t){const i=B(n),s=i.queries.get(e);if(s)for(const r of s.j_)r.onError(t);i.queries.delete(e)}function rl(n){n.Y_.forEach(e=>{e.next()})}var aa,ju;(ju=aa||(aa={})).ea="default",ju.Cache="cache";class ol{constructor(e,t,i){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=i||{}}X_(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new zn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const i=t!=="Offline";return(!this.options._a||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=zn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==aa.Cache}}/**
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
 */class Sf{constructor(e){this.key=e}}class Pf{constructor(e){this.key=e}}class UT{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=H(),this.mutatedKeys=H(),this.Aa=Qd(e),this.Ra=new xn(this.Aa)}get Va(){return this.Ta}ma(e,t){const i=t?t.fa:new qu,s=t?t.Ra:this.Ra;let r=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,_)=>{const g=s.get(f),R=Lr(this.query,_)?_:null,S=!!g&&this.mutatedKeys.has(g.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;g&&R?g.data.isEqual(R.data)?S!==D&&(i.track({type:3,doc:R}),N=!0):this.ga(g,R)||(i.track({type:2,doc:R}),N=!0,(c&&this.Aa(R,c)>0||h&&this.Aa(R,h)<0)&&(l=!0)):!g&&R?(i.track({type:0,doc:R}),N=!0):g&&!R&&(i.track({type:1,doc:g}),N=!0,(c||h)&&(l=!0)),N&&(R?(a=a.add(R),r=D?r.add(f):r.delete(f)):(a=a.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),r=r.delete(f.key),i.track({type:1,doc:f})}return{Ra:a,fa:i,ns:l,mutatedKeys:r}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const a=e.fa.G_();a.sort((f,_)=>function(R,S){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return D(R)-D(S)}(f.type,_.type)||this.Aa(f.doc,_.doc)),this.pa(i),s=s!=null&&s;const l=t&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,a.length!==0||h?{snapshot:new zn(this.query,e.Ra,r,a,e.mutatedKeys,c===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new qu,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=H(),this.Ra.forEach(i=>{this.Sa(i.key)&&(this.da=this.da.add(i.key))});const t=[];return e.forEach(i=>{this.da.has(i)||t.push(new Pf(i))}),this.da.forEach(i=>{e.has(i)||t.push(new Sf(i))}),t}ba(e){this.Ta=e.Ts,this.da=H();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return zn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class BT{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class qT{constructor(e){this.key=e,this.va=!1}}class WT{constructor(e,t,i,s,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new ti(l=>Kd(l),Mr),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(L.comparator),this.Na=new Map,this.La=new Ka,this.Ba={},this.ka=new Map,this.qa=$n.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function jT(n,e,t=!0){const i=Vf(n);let s;const r=i.Fa.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.Da()):s=await bf(i,e,t,!0),s}async function HT(n,e){const t=Vf(n);await bf(t,e,!0,!1)}async function bf(n,e,t,i){const s=await dT(n.localStore,ot(e)),r=s.targetId,a=n.sharedClientState.addLocalQueryTarget(r,t);let l;return i&&(l=await GT(n,e,r,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Tf(n.remoteStore,s),l}async function GT(n,e,t,i,s){n.Ka=(_,g,R)=>async function(D,N,q,W){let $=N.view.ma(q);$.ns&&($=await xu(D.localStore,N.query,!1).then(({documents:T})=>N.view.ma(T,$)));const ae=W&&W.targetChanges.get(N.targetId),Ge=W&&W.targetMismatches.get(N.targetId)!=null,ue=N.view.applyChanges($,D.isPrimaryClient,ae,Ge);return Gu(D,N.targetId,ue.wa),ue.snapshot}(n,_,g,R);const r=await xu(n.localStore,e,!0),a=new UT(e,r.Ts),l=a.ma(r.documents),c=us.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Gu(n,t,h.wa);const f=new BT(e,t,a);return n.Fa.set(e,f),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function $T(n,e,t){const i=B(n),s=i.Fa.get(e),r=i.Ma.get(s.targetId);if(r.length>1)return i.Ma.set(s.targetId,r.filter(a=>!Mr(a,e))),void i.Fa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await oa(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Xa(i.remoteStore,s.targetId),la(i,s.targetId)}).catch(os)):(la(i,s.targetId),await oa(i.localStore,s.targetId,!0))}async function zT(n,e){const t=B(n),i=t.Fa.get(e),s=t.Ma.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Xa(t.remoteStore,i.targetId))}async function KT(n,e,t){const i=tI(n);try{const s=await function(a,l){const c=B(a),h=_e.now(),f=l.reduce((R,S)=>R.add(S.key),H());let _,g;return c.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=wt(),D=H();return c.cs.getEntries(R,f).next(N=>{S=N,S.forEach((q,W)=>{W.isValidDocument()||(D=D.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(R,S)).next(N=>{_=N;const q=[];for(const W of l){const $=mE(W,_.get(W.key).overlayedDocument);$!=null&&q.push(new Kt(W.key,$,Bd($.value.mapValue),Xe.exists(!0)))}return c.mutationQueue.addMutationBatch(R,h,q,l)}).next(N=>{g=N;const q=N.applyToLocalDocumentSet(_,D);return c.documentOverlayCache.saveOverlays(R,N.batchId,q)})}).then(()=>({batchId:g.batchId,changes:Xd(_)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ba[a.currentUser.toKey()];h||(h=new pe(X)),h=h.insert(l,c),a.Ba[a.currentUser.toKey()]=h}(i,s.batchId,t),await ds(i,s.changes),await Wr(i.remoteStore)}catch(s){const r=nl(s,"Failed to persist write");t.reject(r)}}async function Nf(n,e){const t=B(n);try{const i=await cT(t.localStore,e);e.targetChanges.forEach((s,r)=>{const a=t.Na.get(r);a&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?Z(a.va):s.removedDocuments.size>0&&(Z(a.va),a.va=!1))}),await ds(t,i,e)}catch(i){await os(i)}}function Hu(n,e,t){const i=B(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Fa.forEach((r,a)=>{const l=a.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=B(a);c.onlineState=l;let h=!1;c.queries.forEach((f,_)=>{for(const g of _.j_)g.Z_(l)&&(h=!0)}),h&&rl(c)}(i.eventManager,e),s.length&&i.Ca.d_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function QT(n,e,t){const i=B(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Na.get(e),r=s&&s.key;if(r){let a=new pe(L.comparator);a=a.insert(r,ke.newNoDocument(r,U.min()));const l=H().add(r),c=new Ur(U.min(),new Map,new pe(X),a,l);await Nf(i,c),i.Oa=i.Oa.remove(r),i.Na.delete(e),al(i)}else await oa(i.localStore,e,!1).then(()=>la(i,e,t)).catch(os)}async function YT(n,e){const t=B(n),i=e.batch.batchId;try{const s=await lT(t.localStore,e);Df(t,i,null),kf(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await ds(t,s)}catch(s){await os(s)}}async function XT(n,e,t){const i=B(n);try{const s=await function(a,l){const c=B(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(_=>(Z(_!==null),f=_.keys(),c.mutationQueue.removeMutationBatch(h,_))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(i.localStore,e);Df(i,e,t),kf(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await ds(i,s)}catch(s){await os(s)}}function kf(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function Df(n,e,t){const i=B(n);let s=i.Ba[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Ba[i.currentUser.toKey()]=s}}function la(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Ma.get(e))n.Fa.delete(i),t&&n.Ca.$a(i,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(i=>{n.La.containsKey(i)||Of(n,i)})}function Of(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(Xa(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),al(n))}function Gu(n,e,t){for(const i of t)i instanceof Sf?(n.La.addReference(i.key,e),JT(n,i)):i instanceof Pf?(M("SyncEngine","Document no longer in limbo: "+i.key),n.La.removeReference(i.key,e),n.La.containsKey(i.key)||Of(n,i.key)):F()}function JT(n,e){const t=e.key,i=t.path.canonicalString();n.Oa.get(t)||n.xa.has(i)||(M("SyncEngine","New document in limbo: "+t),n.xa.add(i),al(n))}function al(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new L(re.fromString(e)),i=n.qa.next();n.Na.set(i,new qT(t)),n.Oa=n.Oa.insert(t,i),Tf(n.remoteStore,new Lt(ot(Vr(t.path)),i,"TargetPurposeLimboResolution",xa.oe))}}async function ds(n,e,t){const i=B(n),s=[],r=[],a=[];i.Fa.isEmpty()||(i.Fa.forEach((l,c)=>{a.push(i.Ka(c,e,t).then(h=>{var f;if((h||t)&&i.isPrimaryClient){const _=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;i.sharedClientState.updateQueryState(c.targetId,_?"current":"not-current")}if(h){s.push(h);const _=Ya.Wi(c.targetId,h);r.push(_)}}))}),await Promise.all(a),i.Ca.d_(s),await async function(c,h){const f=B(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>b.forEach(h,g=>b.forEach(g.$i,R=>f.persistence.referenceDelegate.addReference(_,g.targetId,R)).next(()=>b.forEach(g.Ui,R=>f.persistence.referenceDelegate.removeReference(_,g.targetId,R)))))}catch(_){if(!as(_))throw _;M("LocalStore","Failed to update sequence numbers: "+_)}for(const _ of h){const g=_.targetId;if(!_.fromCache){const R=f.os.get(g),S=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(g,D)}}}(i.localStore,r))}async function ZT(n,e){const t=B(n);if(!t.currentUser.isEqual(e)){M("SyncEngine","User change. New user:",e.toKey());const i=await gf(t.localStore,e);t.currentUser=e,function(r,a){r.ka.forEach(l=>{l.forEach(c=>{c.reject(new V(P.CANCELLED,a))})}),r.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ds(t,i.hs)}}function eI(n,e){const t=B(n),i=t.Na.get(e);if(i&&i.va)return H().add(i.key);{let s=H();const r=t.Ma.get(e);if(!r)return s;for(const a of r){const l=t.Fa.get(a);s=s.unionWith(l.view.Va)}return s}}function Vf(n){const e=B(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Nf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QT.bind(null,e),e.Ca.d_=xT.bind(null,e.eventManager),e.Ca.$a=FT.bind(null,e.eventManager),e}function tI(n){const e=B(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XT.bind(null,e),e}class mr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Br(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return aT(this.persistence,new rT,e.initialUser,this.serializer)}Ga(e){return new nT(Qa.Zr,this.serializer)}Wa(e){return new pT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}mr.provider={build:()=>new mr};class ca{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Hu(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZT.bind(null,this.syncEngine),await VT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LT}()}createDatastore(e){const t=Br(e.databaseInfo.databaseId),i=function(r){return new yT(r)}(e.databaseInfo);return function(r,a,l,c){return new TT(r,a,l,c)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,r,a,l){return new wT(i,s,r,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Hu(this.syncEngine,t,0),function(){return Uu.D()?new Uu:new _T}())}createSyncEngine(e,t){return function(s,r,a,l,c,h,f){const _=new WT(s,r,a,l,c,h);return f&&(_.Qa=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const r=B(s);M("RemoteStore","RemoteStore shutting down."),r.L_.add(5),await hs(r),r.k_.shutdown(),r.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ca.provider={build:()=>new ca};/**
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
 */class ll{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):It("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class nI{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=Ne.UNAUTHENTICATED,this.clientId=xd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(i,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=nl(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Do(n,e){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await gf(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $u(n,e){n.asyncQueue.verifyOperationInProgress();const t=await iI(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>Bu(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Bu(e.remoteStore,s)),n._onlineComponents=e}async function iI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await Do(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await Do(n,new mr)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await Do(n,new mr);return n._offlineComponents}async function Mf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await $u(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await $u(n,new ca))),n._onlineComponents}function sI(n){return Mf(n).then(e=>e.syncEngine)}async function gr(n){const e=await Mf(n),t=e.eventManager;return t.onListen=jT.bind(null,e.syncEngine),t.onUnlisten=$T.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zT.bind(null,e.syncEngine),t}function rI(n,e,t={}){const i=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(r,a,l,c,h){const f=new ll({next:g=>{f.Za(),a.enqueueAndForget(()=>sl(r,_));const R=g.docs.has(l);!R&&g.fromCache?h.reject(new V(P.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&g.fromCache&&c&&c.source==="server"?h.reject(new V(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),_=new ol(Vr(l.path),f,{includeMetadataChanges:!0,_a:!0});return il(r,_)}(await gr(n),n.asyncQueue,e,t,i)),i.promise}function oI(n,e,t={}){const i=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(r,a,l,c,h){const f=new ll({next:g=>{f.Za(),a.enqueueAndForget(()=>sl(r,_)),g.fromCache&&c.source==="server"?h.reject(new V(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),_=new ol(l,f,{includeMetadataChanges:!0,_a:!0});return il(r,_)}(await gr(n),n.asyncQueue,e,t,i)),i.promise}/**
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
 */function Lf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const zu=new Map;/**
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
 */function xf(n,e,t){if(!t)throw new V(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function aI(n,e,t,i){if(e===!0&&i===!0)throw new V(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ku(n){if(!L.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Qu(n){if(L.isDocumentKey(n))throw new V(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F()}function je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jr(n);throw new V(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Yu{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new V(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}aI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lf((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new V(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hr{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yu({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yu(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Rv;switch(i.type){case"firstParty":return new bv(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new V(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=zu.get(t);i&&(M("ComponentProvider","Removing Datastore"),zu.delete(t),i.terminate())}(this),Promise.resolve()}}function lI(n,e,t,i={}){var s;const r=(n=je(n,Hr))._getSettings(),a=`${e}:${t}`;if(r.host!=="firestore.googleapis.com"&&r.host!==a&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},r),{host:a,ssl:!1})),i.mockUserToken){let l,c;if(typeof i.mockUserToken=="string")l=i.mockUserToken,c=Ne.MOCK_USER;else{l=J_(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new V(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ne(h)}n._authCredentials=new Cv(new Ld(l,c))}}/**
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
 */class En{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new En(this.firestore,e,this._query)}}class Me{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}}class Ut extends En{constructor(e,t,i){super(e,t,Vr(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new L(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function wR(n,e,...t){if(n=ce(n),xf("collection","path",e),n instanceof Hr){const i=re.fromString(e,...t);return Qu(i),new Ut(n,null,i)}{if(!(n instanceof Me||n instanceof Ut))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(re.fromString(e,...t));return Qu(i),new Ut(n.firestore,null,i)}}function AR(n,e,...t){if(n=ce(n),arguments.length===1&&(e=xd.newId()),xf("doc","path",e),n instanceof Hr){const i=re.fromString(e,...t);return Ku(i),new Me(n,null,new L(i))}{if(!(n instanceof Me||n instanceof Ut))throw new V(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(re.fromString(e,...t));return Ku(i),new Me(n.firestore,n instanceof Ut?n.converter:null,new L(i))}}/**
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
 */class Xu{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vf(this,"async_queue_retry"),this.Vu=()=>{const i=ko();i&&M("AsyncQueue","Visibility state changed to "+i.visibilityState),this.t_.jo()},this.mu=e;const t=ko();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=ko();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new yt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!as(e))throw e;M("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(i=>{this.Eu=i,this.du=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(i);throw It("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.du=!1,i))));return this.mu=t,t}enqueueAfterDelay(e,t,i){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=tl.createAndSchedule(this,e,t,i,r=>this.yu(r));return this.Tu.push(s),s}fu(){this.Eu&&F()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Ju(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class Gt extends Hr{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Xu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xu(e),this._firestoreClient=void 0,await e}}}function RR(n,e){const t=typeof n=="object"?n:$h(),i=typeof n=="string"?n:"(default)",s=Sa(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=X_("firestore");r&&lI(s,...r)}return s}function Gr(n){if(n._terminated)throw new V(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cI(n),n._firestoreClient}function cI(n){var e,t,i;const s=n._freezeSettings(),r=function(l,c,h,f){return new Wv(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Lf(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new nI(n._authCredentials,n._appCheckCredentials,n._queue,r,n._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class Kn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kn(Ae.fromBase64String(e))}catch(t){throw new V(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Kn(Ae.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class $r{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ie(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class cl{constructor(e){this._methodName=e}}/**
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
 */class ul{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */class hl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0}(this._values,e._values)}}/**
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
 */const uI=/^__.*__$/;class hI{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms):new cs(e,this.data,t,this.fieldTransforms)}}class Ff{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Kt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Uf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class dl{constructor(e,t,i,s,r,a){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.vu(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new dl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.Ou(e),s}Nu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:i,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return yr(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Uf(this.Cu)&&uI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dI{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Br(e)}Qu(e,t,i,s=!1){return new dl({Cu:e,methodName:t,qu:i,path:Ie.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fl(n){const e=n._freezeSettings(),t=Br(n._databaseId);return new dI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fI(n,e,t,i,s,r={}){const a=n.Qu(r.merge||r.mergeFields?2:0,e,t,s);pl("Data must be an object, but it was:",a,i);const l=Bf(i,a);let c,h;if(r.merge)c=new We(a.fieldMask),h=a.fieldTransforms;else if(r.mergeFields){const f=[];for(const _ of r.mergeFields){const g=ua(e,_,t);if(!a.contains(g))throw new V(P.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Wf(f,g)||f.push(g)}c=new We(f),h=a.fieldTransforms.filter(_=>c.covers(_.field))}else c=null,h=a.fieldTransforms;return new hI(new Ue(l),c,h)}class zr extends cl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof zr}}function pI(n,e,t,i){const s=n.Qu(1,e,t);pl("Data must be an object, but it was:",s,i);const r=[],a=Ue.empty();yn(i,(c,h)=>{const f=_l(e,c,t);h=ce(h);const _=s.Nu(f);if(h instanceof zr)r.push(f);else{const g=fs(h,_);g!=null&&(r.push(f),a.set(f,g))}});const l=new We(r);return new Ff(a,l,s.fieldTransforms)}function _I(n,e,t,i,s,r){const a=n.Qu(1,e,t),l=[ua(e,i,t)],c=[s];if(r.length%2!=0)throw new V(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<r.length;g+=2)l.push(ua(e,r[g])),c.push(r[g+1]);const h=[],f=Ue.empty();for(let g=l.length-1;g>=0;--g)if(!Wf(h,l[g])){const R=l[g];let S=c[g];S=ce(S);const D=a.Nu(R);if(S instanceof zr)h.push(R);else{const N=fs(S,D);N!=null&&(h.push(R),f.set(R,N))}}const _=new We(h);return new Ff(f,_,a.fieldTransforms)}function mI(n,e,t,i=!1){return fs(t,n.Qu(i?4:3,e))}function fs(n,e){if(qf(n=ce(n)))return pl("Unsupported field value:",e,n),Bf(n,e);if(n instanceof cl)return function(i,s){if(!Uf(s.Cu))throw s.Bu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${i._methodName}() is not currently supported inside arrays`);const r=i._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(i,s){const r=[];let a=0;for(const l of i){let c=fs(l,s.Lu(a));c==null&&(c={nullValue:"NULL_VALUE"}),r.push(c),a++}return{arrayValue:{values:r}}}(n,e)}return function(i,s){if((i=ce(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return uE(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const r=_e.fromDate(i);return{timestampValue:pr(s.serializer,r)}}if(i instanceof _e){const r=new _e(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:pr(s.serializer,r)}}if(i instanceof ul)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Kn)return{bytesValue:uf(s.serializer,i._byteString)};if(i instanceof Me){const r=s.databaseId,a=i.firestore._databaseId;if(!a.isEqual(r))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:za(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof hl)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return ja(l.serializer,c)})}}}}}}(i,s);throw s.Bu(`Unsupported field value: ${jr(i)}`)}(n,e)}function Bf(n,e){const t={};return Fd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yn(n,(i,s)=>{const r=fs(s,e.Mu(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function qf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof ul||n instanceof Kn||n instanceof Me||n instanceof cl||n instanceof hl)}function pl(n,e,t){if(!qf(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=jr(t);throw i==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+i)}}function ua(n,e,t){if((e=ce(e))instanceof $r)return e._internalPath;if(typeof e=="string")return _l(n,e);throw yr("Field path arguments must be of type string or ",n,!1,void 0,t)}const gI=new RegExp("[~\\*/\\[\\]]");function _l(n,e,t){if(e.search(gI)>=0)throw yr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new $r(...e.split("."))._internalPath}catch{throw yr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function yr(n,e,t,i,s){const r=i&&!i.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(r||a)&&(c+=" (found",r&&(c+=` in field ${i}`),a&&(c+=` in document ${s}`),c+=")"),new V(P.INVALID_ARGUMENT,l+n+c)}function Wf(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class jf{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ml("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yI extends jf{data(){return super.data()}}function ml(n,e){return typeof e=="string"?_l(n,e):e instanceof $r?e._internalPath:e._delegate._internalPath}/**
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
 */function Hf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gl{}class vI extends gl{}function CR(n,e,...t){let i=[];e instanceof gl&&i.push(e),i=i.concat(t),function(r){const a=r.filter(c=>c instanceof yl).length,l=r.filter(c=>c instanceof Kr).length;if(a>1||a>0&&l>0)throw new V(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)n=s._apply(n);return n}class Kr extends vI{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Kr(e,t,i)}_apply(e){const t=this._parse(e);return Gf(e._query,t),new En(e.firestore,e.converter,ea(e._query,t))}_parse(e){const t=fl(e.firestore);return function(r,a,l,c,h,f,_){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){eh(_,f);const R=[];for(const S of _)R.push(Zu(c,r,S));g={arrayValue:{values:R}}}else g=Zu(c,r,_)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||eh(_,f),g=mI(l,a,_,f==="in"||f==="not-in");return fe.create(h,f,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function SR(n,e,t){const i=e,s=ml("where",n);return Kr._create(s,i,t)}class yl extends gl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yl(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:et.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let a=s;const l=r.getFlattenedFilters();for(const c of l)Gf(a,c),a=ea(a,c)}(e._query,t),new En(e.firestore,e.converter,ea(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Zu(n,e,t){if(typeof(t=ce(t))=="string"){if(t==="")throw new V(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zd(e)&&t.indexOf("/")!==-1)throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(re.fromString(t));if(!L.isDocumentKey(i))throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Eu(n,new L(i))}if(t instanceof Me)return Eu(n,t._key);throw new V(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jr(t)}.`)}function eh(n,e){if(!Array.isArray(n)||n.length===0)throw new V(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gf(n,e){const t=function(s,r){for(const a of s)for(const l of a.getFlattenedFilters())if(r.indexOf(l.op)>=0)return l.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class EI{convertValue(e,t="none"){switch(hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return yn(e,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertVectorValue(e){var t,i,s;const r=(s=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(a=>he(a.doubleValue));return new hl(r)}convertGeoPoint(e){return new ul(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Ua(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const t=jt(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=re.fromString(e);Z(mf(i));const s=new Qi(i.get(1),i.get(3)),r=new L(i.popFirst(5));return s.isEqual(t)||It(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */function TI(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
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
 */class Oi{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $f extends jf{constructor(e,t,i,s,r,a){super(e,t,i,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(ml("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Zs extends $f{data(e={}){return super.data(e)}}class zf{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Oi(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Zs(this._firestore,this._userDataWriter,i.key,i,new Oi(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new Zs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>r||l.type!==3).map(l=>{const c=new Zs(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Oi(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:II(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function II(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}/**
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
 */function PR(n){n=je(n,Me);const e=je(n.firestore,Gt);return rI(Gr(e),n._key).then(t=>Kf(e,n,t))}class vl extends EI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,t)}}function bR(n){n=je(n,En);const e=je(n.firestore,Gt),t=Gr(e),i=new vl(e);return Hf(n._query),oI(t,n._query).then(s=>new zf(e,i,n,s))}function NR(n,e,t){n=je(n,Me);const i=je(n.firestore,Gt),s=TI(n.converter,e);return El(i,[fI(fl(i),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Xe.none())])}function kR(n,e,t,...i){n=je(n,Me);const s=je(n.firestore,Gt),r=fl(s);let a;return a=typeof(e=ce(e))=="string"||e instanceof $r?_I(r,"updateDoc",n._key,e,t,i):pI(r,"updateDoc",n._key,e),El(s,[a.toMutation(n._key,Xe.exists(!0))])}function DR(n){return El(je(n.firestore,Gt),[new Ha(n._key,Xe.none())])}function OR(n,...e){var t,i,s;n=ce(n);let r={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Ju(e[a])||(r=e[a],a++);const l={includeMetadataChanges:r.includeMetadataChanges,source:r.source};if(Ju(e[a])){const _=e[a];e[a]=(t=_.next)===null||t===void 0?void 0:t.bind(_),e[a+1]=(i=_.error)===null||i===void 0?void 0:i.bind(_),e[a+2]=(s=_.complete)===null||s===void 0?void 0:s.bind(_)}let c,h,f;if(n instanceof Me)h=je(n.firestore,Gt),f=Vr(n._key.path),c={next:_=>{e[a]&&e[a](Kf(h,n,_))},error:e[a+1],complete:e[a+2]};else{const _=je(n,En);h=je(_.firestore,Gt),f=_._query;const g=new vl(h);c={next:R=>{e[a]&&e[a](new zf(h,g,_,R))},error:e[a+1],complete:e[a+2]},Hf(n._query)}return function(g,R,S,D){const N=new ll(D),q=new ol(R,N,S);return g.asyncQueue.enqueueAndForget(async()=>il(await gr(g),q)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>sl(await gr(g),q))}}(Gr(h),f,l,c)}function El(n,e){return function(i,s){const r=new yt;return i.asyncQueue.enqueueAndForget(async()=>KT(await sI(i),s,r)),r.promise}(Gr(n),e)}function Kf(n,e,t){const i=t.docs.get(e._key),s=new vl(n);return new $f(n,s,e._key,i,new Oi(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){ei=s})(mn),on(new qt("firestore",(i,{instanceIdentifier:s,options:r})=>{const a=i.getProvider("app").getImmediate(),l=new Gt(new Sv(i.getProvider("auth-internal")),new kv(i.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(h.options.projectId,f)}(a,s),a);return r=Object.assign({useFetchStreams:t},r),l._setSettings(r),l},"PUBLIC").setMultipleInstances(!0)),it(_u,"4.7.3",e),it(_u,"4.7.3","esm2017")})();var th={NVM_INC:"/Users/Tsp33786/.nvm/versions/node/v18.14.2/include/node",TERM_PROGRAM:"vscode",NODE:"/Users/Tsp33786/.nvm/versions/node/v18.14.2/bin/node",INIT_CWD:"/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder",NVM_CD_FLAGS:"-q",TERM:"xterm-256color",SHELL:"/bin/zsh",npm_config_metrics_registry:"https://registry.npmjs.org/",TMPDIR:"/var/folders/st/3drj07vj2yq_7f9m4xljxrv40000gn/T/",npm_config_global_prefix:"/Users/Tsp33786/.nvm/versions/node/v18.14.2",DOCKER_HOST:"unix:///Users/Tsp33786/.docker/run/docker.sock",TERM_PROGRAM_VERSION:"1.96.4",NODE_OPTIONS:"--max-old-space-size=4096",ZDOTDIR:"/Users/Tsp33786",ORIGINAL_XDG_CURRENT_DESKTOP:"undefined",MallocNanoZone:"0",COLOR:"1",npm_config_noproxy:"",npm_config_local_prefix:"/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder",VITE_NGROK_AUTH_TOKEN:"2qQx1MCl4vc7aF2ukPx0OG71ZKV_5HSHmVBqUrC8LfbLa4D4B",NVM_DIR:"/Users/Tsp33786/.nvm",USER:"Tsp33786",COMMAND_MODE:"unix2003",npm_config_globalconfig:"/Users/Tsp33786/.nvm/versions/node/v18.14.2/etc/npmrc",SSH_AUTH_SOCK:"/private/tmp/com.apple.launchd.YkZWCUdaV9/Listeners",__CF_USER_TEXT_ENCODING:"0x1F5:0x1:0xE",npm_execpath:"/Users/Tsp33786/.nvm/versions/node/v18.14.2/lib/node_modules/npm/bin/npm-cli.js",NO_VSCODE_PORT:"8000-8999",PATH:"/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/node_modules/.bin:/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/node_modules/.bin:/Users/Tsp33786/Desktop/trial_html/node_modules/.bin:/Users/Tsp33786/Desktop/node_modules/.bin:/Users/Tsp33786/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/Users/Tsp33786/.nvm/versions/node/v18.14.2/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/Users/Tsp33786/.nvm/versions/node/v18.14.2/bin:/Users/Tsp33786/.nvm/versions/node/v18.14.2/bin:/usr/local/opt/openjdk/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/Tsp33786/.nvm/versions/node/v18.14.2/bin:/usr/local/opt/openjdk/bin",npm_package_json:"/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/package.json",_:"/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder/node_modules/.bin/vite",npm_config_userconfig:"/Users/Tsp33786/.npmrc",npm_config_init_module:"/Users/Tsp33786/.npm-init.js",USER_ZDOTDIR:"/Users/Tsp33786",__CFBundleIdentifier:"com.microsoft.VSCode",npm_command:"run-script",PWD:"/Users/Tsp33786/Desktop/trial_html/MY_WEB_SIGHT/reminder",npm_lifecycle_event:"build",EDITOR:"vi",npm_package_name:"reminder",LANG:"ja_JP.UTF-8",VSCODE_GIT_ASKPASS_EXTRA_ARGS:"",XPC_FLAGS:"0x0",npm_config_node_gyp:"/Users/Tsp33786/.nvm/versions/node/v18.14.2/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js",npm_package_version:"0.1.0",XPC_SERVICE_NAME:"0",VSCODE_INJECTION:"1",SHLVL:"2",HOME:"/Users/Tsp33786",VSCODE_GIT_ASKPASS_MAIN:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js",npm_config_cache:"/Users/Tsp33786/.npm",LOGNAME:"Tsp33786",npm_lifecycle_script:"vite build",VSCODE_GIT_IPC_HANDLE:"/var/folders/st/3drj07vj2yq_7f9m4xljxrv40000gn/T/vscode-git-26efef4505.sock",NVM_BIN:"/Users/Tsp33786/.nvm/versions/node/v18.14.2/bin",npm_config_user_agent:"npm/9.6.5 node/v18.14.2 darwin x64 workspaces/false",VSCODE_GIT_ASKPASS_NODE:"/Applications/Visual Studio Code.app/Contents/Frameworks/Code Helper (Plugin).app/Contents/MacOS/Code Helper (Plugin)",GIT_ASKPASS:"/Applications/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh",npm_node_execpath:"/Users/Tsp33786/.nvm/versions/node/v18.14.2/bin/node",npm_config_prefix:"/Users/Tsp33786/.nvm/versions/node/v18.14.2",COLORTERM:"truecolor",NODE_ENV:"production",VITE_HTTPS:"true",VITE_REACT_APP_API_URL:"https://offsetcodecraft.site",DOCKER_PASSWORD:"3jpc37yoci8dot",FIREBASE_EMULATOR_HOST:"localhost:8080",DOCKER_USERNAME:"henrry301",VITE_FIREBASE_TOKEN:"1//0e8Tw9QYjmNSbCgYIARAAGA4SNwF-L9Irpdon7TgJnUBEpI7xd_37p0-y7kgpjDrGOdoc1pcdX3yVbzAwY-x-TyDEQiy9hRsnYGk",VITE_FIREBASE_TOKEN_CI:"1//0e-WM8nwqPjwdCgYIARAAGA4SNwF-L9IrK7dtPwtRyqpGnY131DB8M8b2dyJ3TDeQSvpKfeJJYFShNfOrx3M7exAbDFI5RJvTYEs",GOOGLE_APPLICATION_CREDENTIALS:"./serviceAccountKey.json",VITE_REACT_APP_FIREBASE_API_KEY:"AIzaSyCFn-eJuAP2f2zYP4VxMvvwef15jzyW7bA",VITE_REACT_APP_FIREBASE_DATABASE_URL:"https://reminder3-65e84-default-rtdb.firebaseio.com",VITE_REACT_APP_FIREBASE_APP_ID:"1:280162142902:web:4fed1bc9d4b35e75963417",VITE_REACT_APP_FIREBASE_AUTH_DOMAIN:"reminder3-65e84.firebaseapp.com",VITE_REACT_APP_FIREBASE_PROJECT_ID:"reminder3-65e84",VITE_REACT_APP_FIREBASE_STORAGE_BUCKET:"reminder3-65e84.firebasestorage.app",VITE_REACT_APP_FIREBASE_MEASUREMENT_ID:"280162142902",VITE_REACT_APP_TEST_EMAIL:"Peace.875136D.time@gmail.com",VITE_REACT_APP_TEST_PASSWORD:"57tqw7y6m",VITE_NODE_ENV:"production",VITE_HOST:"0.0.0.0",VITE_PORT:"3000",VITE_PLAYWRIGHT_BASE_URL:"https://offsetcodecraft.site",VITE_CLOUDFLARE_TUNNEL_TOKEN:"eyJhIjoiNTcyN2NlMWY3Mzk5ZWI4NmY1NWNkYjFhNDAxOGI5NjMiLCJzIjoiZUdEUThOQ0xtM2NGM090NFpjcXorN3h6ci85aFFuSzNVLythMUJyYTNYbz0iLCJ0IjoiNmU4OWRlZjktNDEwZC00MWIyLWExZGUtODljNjRiZjMzMmY2In0",VITE_CLOUDFLARE_API_TOKEN:"g6dJSyUjyioqIxnvclgqXxoxdN7J1IEdlRi0fFKL",TUNNEL_ID:"6e89def9-410d-41b2-a1de-89c64bf332f6",HOST:"0.0.0.0",PORT:"3000"};const nh="@firebase/database",ih="1.0.8";/**
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
 */let Qf="";function wI(n){Qf=n}/**
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
 */class AI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ji(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class RI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Yf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new AI(e)}}catch{}return new RI},nn=Yf("localStorage"),CI=Yf("sessionStorage");/**
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
 */const Fn=new br("@firebase/database"),SI=function(){let n=1;return function(){return n++}}(),Xf=function(n){const e=gm(n),t=new dm;t.update(e);const i=t.digest();return Aa.encodeByteArray(i)},ps=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=ps.apply(null,i):typeof i=="object"?e+=Te(i):e+=i,e+=" "}return e};let Ui=null,sh=!0;const PI=function(n,e){O(!0,"Can't turn on custom loggers persistently."),Fn.logLevel=j.VERBOSE,Ui=Fn.log.bind(Fn)},De=function(...n){if(sh===!0&&(sh=!1,Ui===null&&CI.get("logging_enabled")===!0&&PI()),Ui){const e=ps.apply(null,n);Ui(e)}},_s=function(n){return function(...e){De(n,...e)}},ha=function(...n){const e="FIREBASE INTERNAL ERROR: "+ps(...n);Fn.error(e)},dn=function(...n){const e=`FIREBASE FATAL ERROR: ${ps(...n)}`;throw Fn.error(e),new Error(e)},He=function(...n){const e="FIREBASE WARNING: "+ps(...n);Fn.warn(e)},bI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jf=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},NI=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qn="[MIN_NAME]",fn="[MAX_NAME]",ii=function(n,e){if(n===e)return 0;if(n===Qn||e===fn)return-1;if(e===Qn||n===fn)return 1;{const t=rh(n),i=rh(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},kI=function(n,e){return n===e?0:n<e?-1:1},Ai=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Te(e))},Tl=function(n){if(typeof n!="object"||n===null)return Te(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Te(e[i]),t+=":",t+=Tl(n[e[i]]);return t+="}",t},Zf=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ze(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ep=function(n){O(!Jf(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,a,l,c;n===0?(r=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=l+i,a=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,a=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(c=t;c;c-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(c=e;c;c-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const f=h.join("");let _="";for(c=0;c<64;c+=8){let g=parseInt(f.substr(c,8),2).toString(16);g.length===1&&(g="0"+g),_=_+g}return _.toLowerCase()},DI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},VI=new RegExp("^-?(0*)\\d{1,10}$"),MI=-2147483648,LI=2147483647,rh=function(n){if(VI.test(n)){const e=Number(n);if(e>=MI&&e<=LI)return e}return null},ms=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw He("Exception was thrown by user callback.",t),e},Math.floor(0))}},xI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Bi=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class FI{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class UI{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}/**
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
 */const Il="5",tp="v",np="s",ip="r",sp="f",rp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,op="ls",ap="p",da="ac",lp="websocket",cp="long_polling";/**
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
 */class BI{constructor(e,t,i,s,r=!1,a="",l=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=nn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&nn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qI(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function up(n,e,t){O(typeof e=="string","typeof type must == string"),O(typeof t=="object","typeof params must == object");let i;if(e===lp)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===cp)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);qI(n)&&(t.ns=n.namespace);const s=[];return ze(t,(r,a)=>{s.push(r+"="+a)}),i+s.join("&")}/**
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
 */class WI{constructor(){this.counters_={}}incrementCounter(e,t=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return G_(this.counters_)}}/**
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
 */const Oo={},Vo={};function wl(n){const e=n.toString();return Oo[e]||(Oo[e]=new WI),Oo[e]}function jI(n,e){const t=n.toString();return Vo[t]||(Vo[t]=e()),Vo[t]}/**
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
 */class HI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ms(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const oh="start",GI="close",$I="pLPCommand",zI="pRTLPCB",hp="id",dp="pw",fp="ser",KI="cb",QI="seg",YI="ts",XI="d",JI="dframe",pp=1870,_p=30,ZI=pp-_p,ew=25e3,tw=3e4;class Dn{constructor(e,t,i,s,r,a,l){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=a,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_s(e),this.stats_=wl(t),this.urlFn=c=>(this.appCheckToken&&(c[da]=this.appCheckToken),up(t,cp,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new HI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tw)),NI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Al((...r)=>{const[a,l,c,h,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===oh)this.id=l,this.password=c;else if(a===GI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,l)},()=>{this.onClosed_()},this.urlFn);const i={};i[oh]="t",i[fp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[KI]=this.scriptTagHolder.uniqueCallbackIdentifier),i[tp]=Il,this.transportSessionId&&(i[np]=this.transportSessionId),this.lastSessionId&&(i[op]=this.lastSessionId),this.applicationId&&(i[ap]=this.applicationId),this.appCheckToken&&(i[da]=this.appCheckToken),typeof location<"u"&&location.hostname&&rp.test(location.hostname)&&(i[ip]=sp);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Dn.forceAllow_=!0}static forceDisallow(){Dn.forceDisallow_=!0}static isAvailable(){return Dn.forceAllow_?!0:!Dn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!DI()&&!OI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Uh(t),s=Zf(i,ZI);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[JI]="t",i[hp]=e,i[dp]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Te(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Al{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SI(),window[$I+this.uniqueCallbackIdentifier]=e,window[zI+this.uniqueCallbackIdentifier]=t,this.myIFrame=Al.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(l){De("frame writing exception"),l.stack&&De(l.stack),De(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[hp]=this.myID,e[dp]=this.myPW,e[fp]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_p+i.length<=pp;){const a=this.pendingSegs.shift();i=i+"&"+QI+s+"="+a.seg+"&"+YI+s+"="+a.ts+"&"+XI+s+"="+a.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ew)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const nw=16384,iw=45e3;let vr=null;typeof MozWebSocket<"u"?vr=MozWebSocket:typeof WebSocket<"u"&&(vr=WebSocket);class Qe{constructor(e,t,i,s,r,a,l){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_s(this.connId),this.stats_=wl(t),this.connURL=Qe.connectionURL_(t,a,l,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const a={};return a[tp]=Il,typeof location<"u"&&location.hostname&&rp.test(location.hostname)&&(a[ip]=sp),t&&(a[np]=t),i&&(a[op]=i),s&&(a[da]=s),r&&(a[ap]=r),up(e,lp,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,nn.set("previous_websocket_failure",!0);try{let i;im(),this.mySock=new vr(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Qe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&vr!==null&&!Qe.forceDisallow_}static previouslyFailed(){return nn.isInMemoryStorage||nn.get("previous_websocket_failure")===!0}markConnectionHealthy(){nn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=ji(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(O(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Zf(t,nw);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(iw))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qe.responsesRequiredToBeHealthy=2;Qe.healthyTimeout=3e4;/**
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
 */class Zi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Dn,Qe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Qe&&Qe.isAvailable();let i=t&&!Qe.previouslyFailed();if(e.webSocketOnly&&(t||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Qe];else{const s=this.transports_=[];for(const r of Zi.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Zi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zi.globalTransportInitialized_=!1;/**
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
 */const sw=6e4,rw=5e3,ow=10*1024,aw=100*1024,Mo="t",ah="d",lw="s",lh="r",cw="e",ch="o",uh="a",hh="n",dh="p",uw="h";class hw{constructor(e,t,i,s,r,a,l,c,h,f){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=a,this.onReady_=l,this.onDisconnect_=c,this.onKill_=h,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_s("c:"+this.id+":"),this.transportManager_=new Zi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ow?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mo in e){const t=e[Mo];t===uh?this.upgradeIfSecondaryHealthy_():t===lh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ch&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ai("t",e),i=Ai("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ai("t",e),i=Ai("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ai(Mo,e);if(ah in e){const i=e[ah];if(t===uw){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===hh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===lw?this.onConnectionShutdown_(i):t===lh?this.onReset_(i):t===cw?ha("Server Error: "+i):t===ch?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ha("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Il!==i&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(nn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class mp{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class gp{constructor(e){this.allowedEvents_=e,this.listeners_={},O(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){O(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Er extends gp{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ca()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Er}getInitialEvent(e){return O(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const fh=32,ph=768;class oe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function ee(){return new oe("")}function K(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function $t(n){return n.pieces_.length-n.pieceNum_}function se(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new oe(n.pieces_,e)}function yp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dw(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function vp(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ep(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new oe(e,0)}function ve(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof oe)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new oe(t,0)}function G(n){return n.pieceNum_>=n.pieces_.length}function $e(n,e){const t=K(n),i=K(e);if(t===null)return e;if(t===i)return $e(se(n),se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Tp(n,e){if($t(n)!==$t(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function Ye(n,e){let t=n.pieceNum_,i=e.pieceNum_;if($t(n)>$t(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class fw{constructor(e,t){this.errorPrefix_=t,this.parts_=vp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Pr(this.parts_[i]);Ip(this)}}function pw(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Pr(e),Ip(n)}function _w(n){const e=n.parts_.pop();n.byteLength_-=Pr(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ip(n){if(n.byteLength_>ph)throw new Error(n.errorPrefix_+"has a key path longer than "+ph+" bytes ("+n.byteLength_+").");if(n.parts_.length>fh)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fh+") or object contains a cycle "+en(n))}function en(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Rl extends gp{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Rl}getInitialEvent(e){return O(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ri=1e3,mw=60*5*1e3,_h=30*1e3,gw=1.3,yw=3e4,vw="server_kill",mh=3;class vt extends mp{constructor(e,t,i,s,r,a,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=vt.nextPersistentConnectionId_++,this.log_=_s("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ri,this.maxReconnectDelay_=mw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Er.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Te(r)),O(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Ra,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const l=a.d;a.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),O(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const l={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},a="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(a,r,l=>{const c=l.d,h=l.s;vt.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",l),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Rt(e,"w")){const i=Bn(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||hm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_h)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=um(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,a=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),O(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},a="n";s&&(r.q=i,r.t=s),this.sendRequest(a,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const a={p:t,d:i};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ha("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){O(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yw&&(this.reconnectDelay_=Ri),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let a=!1,l=null;const c=function(){l?l.close():(a=!0,i())},h=function(_){O(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(_)};this.realtime_={close:c,sendRequest:h};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[_,g]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);a?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=_&&_.accessToken,this.appCheckToken_=g&&g.token,l=new hw(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,R=>{He(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(vw)},r))}catch(_){this.log_("Failed to get token: "+_),a||(this.repoInfo_.nodeAdmin&&He(_),c())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Bo(this.interruptReasons_)&&(this.reconnectDelay_=Ri,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Tl(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new oe(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){De("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mh&&(this.reconnectDelay_=_h,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){De("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Qf.replace(/\./g,"-")]=1,Ca()?e["framework.cordova"]=1:Hh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Er.getInstance().currentlyOnline();return Bo(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
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
 */class Q{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Q(e,t)}}/**
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
 */class Qr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Q(Qn,e),s=new Q(Qn,t);return this.compare(i,s)!==0}minPost(){return Q.MIN}}/**
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
 */let js;class wp extends Qr{static get __EMPTY_NODE(){return js}static set __EMPTY_NODE(e){js=e}compare(e,t){return ii(e.name,t.name)}isDefinedOn(e){throw Xn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Q.MIN}maxPost(){return new Q(fn,js)}makePost(e,t){return O(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,js)}toString(){return".key"}}const Un=new wp;/**
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
 */class Hs{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ye.RED,this.left=s??Be.EMPTY_NODE,this.right=r??Be.EMPTY_NODE}copy(e,t,i,s,r){return new ye(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class Ew{copy(e,t,i,s,r){return this}insert(e,t,i){return new ye(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Be{constructor(e,t=Be.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Be(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new Be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hs(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Hs(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Hs(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Hs(this.root_,null,this.comparator_,!0,e)}}Be.EMPTY_NODE=new Ew;/**
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
 */function Tw(n,e){return ii(n.name,e.name)}function Cl(n,e){return ii(n,e)}/**
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
 */let fa;function Iw(n){fa=n}const Ap=function(n){return typeof n=="number"?"number:"+ep(n):"string:"+n},Rp=function(n){if(n.isLeafNode()){const e=n.val();O(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else O(n===fa||n.isEmpty(),"priority of unexpected type.");O(n===fa||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gh;class me{constructor(e,t=me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,O(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rp(this.priorityNode_)}static set __childrenNodeConstructor(e){gh=e}static get __childrenNodeConstructor(){return gh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:K(e)===".priority"?this.priorityNode_:me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=K(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(O(i!==".priority"||$t(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,me.__childrenNodeConstructor.EMPTY_NODE.updateChild(se(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ap(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ep(this.value_):e+=this.value_,this.lazyHash_=Xf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof me.__childrenNodeConstructor?-1:(O(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=me.VALUE_TYPE_ORDER.indexOf(t),r=me.VALUE_TYPE_ORDER.indexOf(i);return O(s>=0,"Unknown leaf type: "+t),O(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Cp,Sp;function ww(n){Cp=n}function Aw(n){Sp=n}class Rw extends Qr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(fn,new me("[PRIORITY-POST]",Sp))}makePost(e,t){const i=Cp(e);return new Q(t,new me("[PRIORITY-POST]",i))}toString(){return".priority"}}const Ve=new Rw;/**
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
 */const Cw=Math.log(2);class Sw{constructor(e){const t=r=>parseInt(Math.log(r)/Cw,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tr=function(n,e,t,i){n.sort(e);const s=function(c,h){const f=h-c;let _,g;if(f===0)return null;if(f===1)return _=n[c],g=t?t(_):_,new ye(g,_.node,ye.BLACK,null,null);{const R=parseInt(f/2,10)+c,S=s(c,R),D=s(R+1,h);return _=n[R],g=t?t(_):_,new ye(g,_.node,ye.BLACK,S,D)}},r=function(c){let h=null,f=null,_=n.length;const g=function(S,D){const N=_-S,q=_;_-=S;const W=s(N+1,q),$=n[N],ae=t?t($):$;R(new ye(ae,$.node,D,null,W))},R=function(S){h?(h.left=S,h=S):(f=S,h=S)};for(let S=0;S<c.count;++S){const D=c.nextBitIsOne(),N=Math.pow(2,c.count-(S+1));D?g(N,ye.BLACK):(g(N,ye.BLACK),g(N,ye.RED))}return f},a=new Sw(n.length),l=r(a);return new Be(i||e,l)};/**
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
 */let Lo;const Sn={};class mt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return O(Sn&&Ve,"ChildrenNode.ts has not been loaded"),Lo=Lo||new mt({".priority":Sn},{".priority":Ve}),Lo}get(e){const t=Bn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Be?t:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,t){O(e!==Un,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(Q.Wrap);let a=r.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=r.getNext();let l;s?l=Tr(i,e.getCompare()):l=Sn;const c=e.toString(),h=Object.assign({},this.indexSet_);h[c]=e;const f=Object.assign({},this.indexes_);return f[c]=l,new mt(f,h)}addToIndexes(e,t){const i=nr(this.indexes_,(s,r)=>{const a=Bn(this.indexSet_,r);if(O(a,"Missing index implementation for "+r),s===Sn)if(a.isDefinedOn(e.node)){const l=[],c=t.getIterator(Q.Wrap);let h=c.getNext();for(;h;)h.name!==e.name&&l.push(h),h=c.getNext();return l.push(e),Tr(l,a.getCompare())}else return Sn;else{const l=t.get(e.name);let c=s;return l&&(c=c.remove(new Q(e.name,l))),c.insert(e,e.node)}});return new mt(i,this.indexSet_)}removeFromIndexes(e,t){const i=nr(this.indexes_,s=>{if(s===Sn)return s;{const r=t.get(e.name);return r?s.remove(new Q(e.name,r)):s}});return new mt(i,this.indexSet_)}}/**
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
 */let Ci;class J{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Rp(this.priorityNode_),this.children_.isEmpty()&&O(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ci||(Ci=new J(new Be(Cl),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ci}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ci:t}}getChild(e){const t=K(e);return t===null?this:this.getImmediateChild(t).getChild(se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(O(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Q(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?Ci:this.priorityNode_;return new J(s,a,r)}}updateChild(e,t){const i=K(e);if(i===null)return t;{O(K(e)!==".priority"||$t(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(se(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(Ve,(a,l)=>{t[a]=l.val(e),i++,r&&J.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):r=!1}),!e&&r&&s<2*i){const a=[];for(const l in t)a[l]=t[l];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ap(this.getPriority().val())+":"),this.forEachChild(Ve,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Xf(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new Q(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Q(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Q(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gs?-1:0}withIndex(e){if(e===Un||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Un||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(Ve),s=t.getIterator(Ve);let r=i.getNext(),a=s.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=i.getNext(),a=s.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Un?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Pw extends J{constructor(){super(new Be(Cl),J.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const gs=new Pw;Object.defineProperties(Q,{MIN:{value:new Q(Qn,J.EMPTY_NODE)},MAX:{value:new Q(fn,gs)}});wp.__EMPTY_NODE=J.EMPTY_NODE;me.__childrenNodeConstructor=J;Iw(gs);Aw(gs);/**
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
 */const bw=!0;function Oe(n,e=null){if(n===null)return J.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),O(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new me(t,Oe(e))}if(!(n instanceof Array)&&bw){const t=[];let i=!1;if(ze(n,(a,l)=>{if(a.substring(0,1)!=="."){const c=Oe(l);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new Q(a,c)))}}),t.length===0)return J.EMPTY_NODE;const r=Tr(t,Tw,a=>a.name,Cl);if(i){const a=Tr(t,Ve.getCompare());return new J(r,Oe(e),new mt({".priority":a},{".priority":Ve}))}else return new J(r,Oe(e),mt.Default)}else{let t=J.EMPTY_NODE;return ze(n,(i,s)=>{if(Rt(n,i)&&i.substring(0,1)!=="."){const r=Oe(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(Oe(e))}}ww(Oe);/**
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
 */class Nw extends Qr{constructor(e){super(),this.indexPath_=e,O(!G(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ii(e.name,t.name):r}makePost(e,t){const i=Oe(e),s=J.EMPTY_NODE.updateChild(this.indexPath_,i);return new Q(t,s)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,gs);return new Q(fn,e)}toString(){return vp(this.indexPath_,0).join("/")}}/**
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
 */class kw extends Qr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ii(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,t){const i=Oe(e);return new Q(t,i)}toString(){return".value"}}const Dw=new kw;/**
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
 */function Ow(n){return{type:"value",snapshotNode:n}}function Vw(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Mw(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function yh(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Lw(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Sl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ve}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return O(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return O(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qn}hasEnd(){return this.endSet_}getIndexEndValue(){return O(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return O(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return O(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ve}copy(){const e=new Sl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vh(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Ve?t="$priority":n.index_===Dw?t="$value":n.index_===Un?t="$key":(O(n.index_ instanceof Nw,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Te(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Te(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Te(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Te(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Te(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Eh(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Ve&&(e.i=n.index_.toString()),e}/**
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
 */class Ir extends mp{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=_s("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(O(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=Ir.getListenId_(e,i),l={};this.listens_[a]=l;const c=vh(e._queryParams);this.restRequest_(r+".json",c,(h,f)=>{let _=f;if(h===404&&(_=null,h=null),h===null&&this.onDataUpdate_(r,_,!1,i),Bn(this.listens_,a)===l){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",s(g,null)}})}unlisten(e,t){const i=Ir.getListenId_(e,t);delete this.listens_[i]}get(e){const t=vh(e._queryParams),i=e._path.toString(),s=new Ra;return this.restRequest_(i+".json",t,(r,a)=>{let l=a;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(i,l,!1,null),s.resolve(l)):s.reject(new Error(l))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jn(t);this.log_("Sending REST request for "+a);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(i&&l.readyState===4){this.log_("REST Response for "+a+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=ji(l.responseText)}catch{He("Failed to parse JSON response for "+a+": "+l.responseText)}i(null,c)}else l.status!==401&&l.status!==404&&He("Got unsuccessful REST response for "+a+" Status: "+l.status),i(l.status);i=null}},l.open("GET",a,!0),l.send()})}}/**
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
 */class xw{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function wr(){return{value:null,children:new Map}}function Pp(n,e,t){if(G(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=K(e);n.children.has(i)||n.children.set(i,wr());const s=n.children.get(i);e=se(e),Pp(s,e,t)}}function pa(n,e,t){n.value!==null?t(e,n.value):Fw(n,(i,s)=>{const r=new oe(e.toString()+"/"+i);pa(s,r,t)})}function Fw(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Uw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ze(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const Th=10*1e3,Bw=30*1e3,qw=5*60*1e3;class Ww{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Uw(e);const i=Th+(Bw-Th)*Math.random();Bi(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ze(e,(s,r)=>{r>0&&Rt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*qw))}}/**
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
 */var nt;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function bp(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Np(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function kp(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ar{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=nt.ACK_USER_WRITE,this.source=bp()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return O(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new oe(e));return new Ar(ee(),t,this.revert)}}else return O(K(this.path)===e,"operationForChild called for unrelated child."),new Ar(se(this.path),this.affectedTree,this.revert)}}/**
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
 */class pn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=nt.OVERWRITE}operationForChild(e){return G(this.path)?new pn(this.source,ee(),this.snap.getImmediateChild(e)):new pn(this.source,se(this.path),this.snap)}}/**
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
 */class es{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=nt.MERGE}operationForChild(e){if(G(this.path)){const t=this.children.subtree(new oe(e));return t.isEmpty()?null:t.value?new pn(this.source,ee(),t.value):new es(this.source,ee(),t)}else return O(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new es(this.source,se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Pl{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const t=K(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function jw(n,e,t,i){const s=[],r=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(Lw(a.childName,a.snapshotNode))}),Si(n,s,"child_removed",e,i,t),Si(n,s,"child_added",e,i,t),Si(n,s,"child_moved",r,i,t),Si(n,s,"child_changed",e,i,t),Si(n,s,"value",e,i,t),s}function Si(n,e,t,i,s,r){const a=i.filter(l=>l.type===t);a.sort((l,c)=>Gw(n,l,c)),a.forEach(l=>{const c=Hw(n,l,r);s.forEach(h=>{h.respondsTo(l.type)&&e.push(h.createEvent(c,n.query_))})})}function Hw(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Gw(n,e,t){if(e.childName==null||t.childName==null)throw Xn("Should only compare child_ events.");const i=new Q(e.childName,e.snapshotNode),s=new Q(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Dp(n,e){return{eventCache:n,serverCache:e}}function qi(n,e,t,i){return Dp(new Pl(e,t,i),n.serverCache)}function Op(n,e,t,i){return Dp(n.eventCache,new Pl(e,t,i))}function _a(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function _n(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let xo;const $w=()=>(xo||(xo=new Be(kI)),xo);class ie{constructor(e,t=$w()){this.value=e,this.children=t}static fromObject(e){let t=new ie(null);return ze(e,(i,s)=>{t=t.set(new oe(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:ee(),value:this.value};if(G(e))return null;{const i=K(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(se(e),t);return r!=null?{path:ve(new oe(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const t=K(e),i=this.children.get(t);return i!==null?i.subtree(se(e)):new ie(null)}}set(e,t){if(G(e))return new ie(t,this.children);{const i=K(e),r=(this.children.get(i)||new ie(null)).set(se(e),t),a=this.children.insert(i,r);return new ie(this.value,a)}}remove(e){if(G(e))return this.children.isEmpty()?new ie(null):new ie(null,this.children);{const t=K(e),i=this.children.get(t);if(i){const s=i.remove(se(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new ie(null):new ie(this.value,r)}else return this}}get(e){if(G(e))return this.value;{const t=K(e),i=this.children.get(t);return i?i.get(se(e)):null}}setTree(e,t){if(G(e))return t;{const i=K(e),r=(this.children.get(i)||new ie(null)).setTree(se(e),t);let a;return r.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,r),new ie(this.value,a)}}fold(e){return this.fold_(ee(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(ve(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,ee(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(G(e))return null;{const r=K(e),a=this.children.get(r);return a?a.findOnPath_(se(e),ve(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ee(),t)}foreachOnPath_(e,t,i){if(G(e))return this;{this.value&&i(t,this.value);const s=K(e),r=this.children.get(s);return r?r.foreachOnPath_(se(e),ve(t,s),i):new ie(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(ve(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new ie(null))}}function Wi(n,e,t){if(G(e))return new Je(new ie(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const a=$e(s,e);return r=r.updateChild(a,t),new Je(n.writeTree_.set(s,r))}else{const s=new ie(t),r=n.writeTree_.setTree(e,s);return new Je(r)}}}function Ih(n,e,t){let i=n;return ze(t,(s,r)=>{i=Wi(i,ve(e,s),r)}),i}function wh(n,e){if(G(e))return Je.empty();{const t=n.writeTree_.setTree(e,new ie(null));return new Je(t)}}function ma(n,e){return Tn(n,e)!=null}function Tn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild($e(t.path,e)):null}function Ah(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ve,(i,s)=>{e.push(new Q(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new Q(i,s.value))}),e}function Bt(n,e){if(G(e))return n;{const t=Tn(n,e);return t!=null?new Je(new ie(t)):new Je(n.writeTree_.subtree(e))}}function ga(n){return n.writeTree_.isEmpty()}function Yn(n,e){return Vp(ee(),n.writeTree_,e)}function Vp(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(O(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Vp(ve(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(ve(n,".priority"),i)),t}}/**
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
 */function Mp(n,e){return Bp(e,n)}function zw(n,e,t,i,s){O(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Wi(n.visibleWrites,e,t)),n.lastWriteId=i}function Kw(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Qw(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);O(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const l=n.allWrites[a];l.visible&&(a>=t&&Yw(l,i.path)?s=!1:Ye(i.path,l.path)&&(r=!0)),a--}if(s){if(r)return Xw(n),!0;if(i.snap)n.visibleWrites=wh(n.visibleWrites,i.path);else{const l=i.children;ze(l,c=>{n.visibleWrites=wh(n.visibleWrites,ve(i.path,c))})}return!0}else return!1}function Yw(n,e){if(n.snap)return Ye(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Ye(ve(n.path,t),e))return!0;return!1}function Xw(n){n.visibleWrites=Lp(n.allWrites,Jw,ee()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jw(n){return n.visible}function Lp(n,e,t){let i=Je.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const a=r.path;let l;if(r.snap)Ye(t,a)?(l=$e(t,a),i=Wi(i,l,r.snap)):Ye(a,t)&&(l=$e(a,t),i=Wi(i,ee(),r.snap.getChild(l)));else if(r.children){if(Ye(t,a))l=$e(t,a),i=Ih(i,l,r.children);else if(Ye(a,t))if(l=$e(a,t),G(l))i=Ih(i,ee(),r.children);else{const c=Bn(r.children,K(l));if(c){const h=c.getChild(se(l));i=Wi(i,ee(),h)}}}else throw Xn("WriteRecord should have .snap or .children")}}return i}function xp(n,e,t,i,s){if(!i&&!s){const r=Tn(n.visibleWrites,e);if(r!=null)return r;{const a=Bt(n.visibleWrites,e);if(ga(a))return t;if(t==null&&!ma(a,ee()))return null;{const l=t||J.EMPTY_NODE;return Yn(a,l)}}}else{const r=Bt(n.visibleWrites,e);if(!s&&ga(r))return t;if(!s&&t==null&&!ma(r,ee()))return null;{const a=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(Ye(h.path,e)||Ye(e,h.path))},l=Lp(n.allWrites,a,e),c=t||J.EMPTY_NODE;return Yn(l,c)}}}function Zw(n,e,t){let i=J.EMPTY_NODE;const s=Tn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Ve,(r,a)=>{i=i.updateImmediateChild(r,a)}),i;if(t){const r=Bt(n.visibleWrites,e);return t.forEachChild(Ve,(a,l)=>{const c=Yn(Bt(r,new oe(a)),l);i=i.updateImmediateChild(a,c)}),Ah(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const r=Bt(n.visibleWrites,e);return Ah(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function eA(n,e,t,i,s){O(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,t);if(ma(n.visibleWrites,r))return null;{const a=Bt(n.visibleWrites,r);return ga(a)?s.getChild(t):Yn(a,s.getChild(t))}}function tA(n,e,t,i){const s=ve(e,t),r=Tn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const a=Bt(n.visibleWrites,s);return Yn(a,i.getNode().getImmediateChild(t))}else return null}function nA(n,e){return Tn(n.visibleWrites,e)}function iA(n,e,t,i,s,r,a){let l;const c=Bt(n.visibleWrites,e),h=Tn(c,ee());if(h!=null)l=h;else if(t!=null)l=Yn(c,t);else return[];if(l=l.withIndex(a),!l.isEmpty()&&!l.isLeafNode()){const f=[],_=a.getCompare(),g=r?l.getReverseIteratorFrom(i,a):l.getIteratorFrom(i,a);let R=g.getNext();for(;R&&f.length<s;)_(R,i)!==0&&f.push(R),R=g.getNext();return f}else return[]}function sA(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function ya(n,e,t,i){return xp(n.writeTree,n.treePath,e,t,i)}function Fp(n,e){return Zw(n.writeTree,n.treePath,e)}function Rh(n,e,t,i){return eA(n.writeTree,n.treePath,e,t,i)}function Rr(n,e){return nA(n.writeTree,ve(n.treePath,e))}function rA(n,e,t,i,s,r){return iA(n.writeTree,n.treePath,e,t,i,s,r)}function bl(n,e,t){return tA(n.writeTree,n.treePath,e,t)}function Up(n,e){return Bp(ve(n.treePath,e),n.writeTree)}function Bp(n,e){return{treePath:n,writeTree:e}}/**
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
 */class oA{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;O(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),O(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,yh(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Mw(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Vw(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,yh(i,e.snapshotNode,s.oldSnap));else throw Xn("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class aA{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const qp=new aA;class Nl{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Pl(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bl(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_n(this.viewCache_),r=rA(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}function lA(n,e){O(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),O(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function cA(n,e,t,i,s){const r=new oA;let a,l;if(t.type===nt.OVERWRITE){const h=t;h.source.fromUser?a=va(n,e,h.path,h.snap,i,s,r):(O(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered()&&!G(h.path),a=Cr(n,e,h.path,h.snap,i,s,l,r))}else if(t.type===nt.MERGE){const h=t;h.source.fromUser?a=hA(n,e,h.path,h.children,i,s,r):(O(h.source.fromServer,"Unknown source."),l=h.source.tagged||e.serverCache.isFiltered(),a=Ea(n,e,h.path,h.children,i,s,l,r))}else if(t.type===nt.ACK_USER_WRITE){const h=t;h.revert?a=pA(n,e,h.path,i,s,r):a=dA(n,e,h.path,h.affectedTree,i,s,r)}else if(t.type===nt.LISTEN_COMPLETE)a=fA(n,e,t.path,i,r);else throw Xn("Unknown operation type: "+t.type);const c=r.getChanges();return uA(e,a,c),{viewCache:a,changes:c}}function uA(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=_a(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Ow(_a(e)))}}function Wp(n,e,t,i,s,r){const a=e.eventCache;if(Rr(i,t)!=null)return e;{let l,c;if(G(t))if(O(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=_n(e),f=h instanceof J?h:J.EMPTY_NODE,_=Fp(i,f);l=n.filter.updateFullNode(e.eventCache.getNode(),_,r)}else{const h=ya(i,_n(e));l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=K(t);if(h===".priority"){O($t(t)===1,"Can't have a priority with additional path components");const f=a.getNode();c=e.serverCache.getNode();const _=Rh(i,t,f,c);_!=null?l=n.filter.updatePriority(f,_):l=a.getNode()}else{const f=se(t);let _;if(a.isCompleteForChild(h)){c=e.serverCache.getNode();const g=Rh(i,t,a.getNode(),c);g!=null?_=a.getNode().getImmediateChild(h).updateChild(f,g):_=a.getNode().getImmediateChild(h)}else _=bl(i,h,e.serverCache);_!=null?l=n.filter.updateChild(a.getNode(),h,_,f,s,r):l=a.getNode()}}return qi(e,l,a.isFullyInitialized()||G(t),n.filter.filtersNodes())}}function Cr(n,e,t,i,s,r,a,l){const c=e.serverCache;let h;const f=a?n.filter:n.filter.getIndexedFilter();if(G(t))h=f.updateFullNode(c.getNode(),i,null);else if(f.filtersNodes()&&!c.isFiltered()){const R=c.getNode().updateChild(t,i);h=f.updateFullNode(c.getNode(),R,null)}else{const R=K(t);if(!c.isCompleteForPath(t)&&$t(t)>1)return e;const S=se(t),N=c.getNode().getImmediateChild(R).updateChild(S,i);R===".priority"?h=f.updatePriority(c.getNode(),N):h=f.updateChild(c.getNode(),R,N,S,qp,null)}const _=Op(e,h,c.isFullyInitialized()||G(t),f.filtersNodes()),g=new Nl(s,_,r);return Wp(n,_,t,s,g,l)}function va(n,e,t,i,s,r,a){const l=e.eventCache;let c,h;const f=new Nl(s,e,r);if(G(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,a),c=qi(e,h,!0,n.filter.filtersNodes());else{const _=K(t);if(_===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),c=qi(e,h,l.isFullyInitialized(),l.isFiltered());else{const g=se(t),R=l.getNode().getImmediateChild(_);let S;if(G(g))S=i;else{const D=f.getCompleteChild(_);D!=null?yp(g)===".priority"&&D.getChild(Ep(g)).isEmpty()?S=D:S=D.updateChild(g,i):S=J.EMPTY_NODE}if(R.equals(S))c=e;else{const D=n.filter.updateChild(l.getNode(),_,S,g,f,a);c=qi(e,D,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Ch(n,e){return n.eventCache.isCompleteForChild(e)}function hA(n,e,t,i,s,r,a){let l=e;return i.foreach((c,h)=>{const f=ve(t,c);Ch(e,K(f))&&(l=va(n,l,f,h,s,r,a))}),i.foreach((c,h)=>{const f=ve(t,c);Ch(e,K(f))||(l=va(n,l,f,h,s,r,a))}),l}function Sh(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ea(n,e,t,i,s,r,a,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,h;G(t)?h=i:h=new ie(null).setTree(t,i);const f=e.serverCache.getNode();return h.children.inorderTraversal((_,g)=>{if(f.hasChild(_)){const R=e.serverCache.getNode().getImmediateChild(_),S=Sh(n,R,g);c=Cr(n,c,new oe(_),S,s,r,a,l)}}),h.children.inorderTraversal((_,g)=>{const R=!e.serverCache.isCompleteForChild(_)&&g.value===null;if(!f.hasChild(_)&&!R){const S=e.serverCache.getNode().getImmediateChild(_),D=Sh(n,S,g);c=Cr(n,c,new oe(_),D,s,r,a,l)}}),c}function dA(n,e,t,i,s,r,a){if(Rr(s,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(G(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Cr(n,e,t,c.getNode().getChild(t),s,r,l,a);if(G(t)){let h=new ie(null);return c.getNode().forEachChild(Un,(f,_)=>{h=h.set(new oe(f),_)}),Ea(n,e,t,h,s,r,l,a)}else return e}else{let h=new ie(null);return i.foreach((f,_)=>{const g=ve(t,f);c.isCompleteForPath(g)&&(h=h.set(f,c.getNode().getChild(g)))}),Ea(n,e,t,h,s,r,l,a)}}function fA(n,e,t,i,s){const r=e.serverCache,a=Op(e,r.getNode(),r.isFullyInitialized()||G(t),r.isFiltered());return Wp(n,a,t,i,qp,s)}function pA(n,e,t,i,s,r){let a;if(Rr(i,t)!=null)return e;{const l=new Nl(i,e,s),c=e.eventCache.getNode();let h;if(G(t)||K(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=ya(i,_n(e));else{const _=e.serverCache.getNode();O(_ instanceof J,"serverChildren would be complete if leaf node"),f=Fp(i,_)}f=f,h=n.filter.updateFullNode(c,f,r)}else{const f=K(t);let _=bl(i,f,e.serverCache);_==null&&e.serverCache.isCompleteForChild(f)&&(_=c.getImmediateChild(f)),_!=null?h=n.filter.updateChild(c,f,_,se(t),l,r):e.eventCache.getNode().hasChild(f)?h=n.filter.updateChild(c,f,J.EMPTY_NODE,se(t),l,r):h=c,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=ya(i,_n(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,r)))}return a=e.serverCache.isFullyInitialized()||Rr(i,ee())!=null,qi(e,h,a,n.filter.filtersNodes())}}function _A(n,e){const t=_n(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!G(e)&&!t.getImmediateChild(K(e)).isEmpty())?t.getChild(e):null}function Ph(n,e,t,i){e.type===nt.MERGE&&e.source.queryId!==null&&(O(_n(n.viewCache_),"We should always have a full cache before handling merges"),O(_a(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=cA(n.processor_,s,e,t,i);return lA(n.processor_,r.viewCache),O(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,mA(n,r.changes,r.viewCache.eventCache.getNode())}function mA(n,e,t,i){const s=n.eventRegistrations_;return jw(n.eventGenerator_,e,t,s)}/**
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
 */let bh;function gA(n){O(!bh,"__referenceConstructor has already been defined"),bh=n}function kl(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return O(r!=null,"SyncTree gave us an op for an invalid query."),Ph(r,e,t,i)}else{let r=[];for(const a of n.views.values())r=r.concat(Ph(a,e,t,i));return r}}function Dl(n,e){let t=null;for(const i of n.views.values())t=t||_A(i,e);return t}/**
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
 */let Nh;function yA(n){O(!Nh,"__referenceConstructor has already been defined"),Nh=n}class kh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ie(null),this.pendingWriteTree_=sA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vA(n,e,t,i,s){return zw(n.pendingWriteTree_,e,t,i,s),s?Xr(n,new pn(bp(),e,t)):[]}function On(n,e,t=!1){const i=Kw(n.pendingWriteTree_,e);if(Qw(n.pendingWriteTree_,e)){let r=new ie(null);return i.snap!=null?r=r.set(ee(),!0):ze(i.children,a=>{r=r.set(new oe(a),!0)}),Xr(n,new Ar(i.path,r,t))}else return[]}function Yr(n,e,t){return Xr(n,new pn(Np(),e,t))}function EA(n,e,t){const i=ie.fromObject(t);return Xr(n,new es(Np(),e,i))}function TA(n,e,t,i){const s=$p(n,i);if(s!=null){const r=zp(s),a=r.path,l=r.queryId,c=$e(a,e),h=new pn(kp(l),c,t);return Kp(n,a,h)}else return[]}function IA(n,e,t,i){const s=$p(n,i);if(s){const r=zp(s),a=r.path,l=r.queryId,c=$e(a,e),h=ie.fromObject(t),f=new es(kp(l),c,h);return Kp(n,a,f)}else return[]}function jp(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(a,l)=>{const c=$e(a,e),h=Dl(l,c);if(h)return h});return xp(s,e,r,t,!0)}function Xr(n,e){return Hp(e,n.syncPointTree_,null,Mp(n.pendingWriteTree_,ee()))}function Hp(n,e,t,i){if(G(n.path))return Gp(n,e,t,i);{const s=e.get(ee());t==null&&s!=null&&(t=Dl(s,ee()));let r=[];const a=K(n.path),l=n.operationForChild(a),c=e.children.get(a);if(c&&l){const h=t?t.getImmediateChild(a):null,f=Up(i,a);r=r.concat(Hp(l,c,h,f))}return s&&(r=r.concat(kl(s,n,i,t))),r}}function Gp(n,e,t,i){const s=e.get(ee());t==null&&s!=null&&(t=Dl(s,ee()));let r=[];return e.children.inorderTraversal((a,l)=>{const c=t?t.getImmediateChild(a):null,h=Up(i,a),f=n.operationForChild(a);f&&(r=r.concat(Gp(f,l,c,h)))}),s&&(r=r.concat(kl(s,n,i,t))),r}function $p(n,e){return n.tagToQueryMap.get(e)}function zp(n){const e=n.indexOf("$");return O(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new oe(n.substr(0,e))}}function Kp(n,e,t){const i=n.syncPointTree_.get(e);O(i,"Missing sync point for query tag that we're tracking");const s=Mp(n.pendingWriteTree_,e);return kl(i,t,s,null)}/**
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
 */class Ol{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ol(t)}node(){return this.node_}}class Vl{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ve(this.path_,e);return new Vl(this.syncTree_,t)}node(){return jp(this.syncTree_,this.path_)}}const wA=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Dh=function(n,e,t){if(!n||typeof n!="object")return n;if(O(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return AA(n[".sv"],e,t);if(typeof n[".sv"]=="object")return RA(n[".sv"],e);O(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},AA=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:O(!1,"Unexpected server value: "+n)}},RA=function(n,e,t){n.hasOwnProperty("increment")||O(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&O(!1,"Unexpected increment value: "+i);const s=e.node();if(O(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},CA=function(n,e,t,i){return Ml(e,new Vl(t,n),i)},SA=function(n,e,t){return Ml(n,new Ol(e),t)};function Ml(n,e,t){const i=n.getPriority().val(),s=Dh(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const a=n,l=Dh(a.getValue(),e,t);return l!==a.getValue()||s!==a.getPriority().val()?new me(l,Oe(s)):n}else{const a=n;return r=a,s!==a.getPriority().val()&&(r=r.updatePriority(new me(s))),a.forEachChild(Ve,(l,c)=>{const h=Ml(c,e.getImmediateChild(l),t);h!==c&&(r=r.updateImmediateChild(l,h))}),r}}/**
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
 */class Ll{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function xl(n,e){let t=e instanceof oe?e:new oe(e),i=n,s=K(t);for(;s!==null;){const r=Bn(i.node.children,s)||{children:{},childCount:0};i=new Ll(s,i,r),t=se(t),s=K(t)}return i}function si(n){return n.node.value}function Qp(n,e){n.node.value=e,Ta(n)}function Yp(n){return n.node.childCount>0}function PA(n){return si(n)===void 0&&!Yp(n)}function Jr(n,e){ze(n.node.children,(t,i)=>{e(new Ll(t,n,i))})}function Xp(n,e,t,i){t&&e(n),Jr(n,s=>{Xp(s,e,!0)})}function bA(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function ys(n){return new oe(n.parent===null?n.name:ys(n.parent)+"/"+n.name)}function Ta(n){n.parent!==null&&NA(n.parent,n.name,n)}function NA(n,e,t){const i=PA(t),s=Rt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Ta(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ta(n))}/**
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
 */const kA=/[\[\].#$\/\u0000-\u001F\u007F]/,DA=/[\[\].#$\u0000-\u001F\u007F]/,Fo=10*1024*1024,Jp=function(n){return typeof n=="string"&&n.length!==0&&!kA.test(n)},OA=function(n){return typeof n=="string"&&n.length!==0&&!DA.test(n)},VA=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OA(n)},Zp=function(n,e,t){const i=t instanceof oe?new fw(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+en(i));if(typeof e=="function")throw new Error(n+"contains a function "+en(i)+" with contents = "+e.toString());if(Jf(e))throw new Error(n+"contains "+e.toString()+" "+en(i));if(typeof e=="string"&&e.length>Fo/3&&Pr(e)>Fo)throw new Error(n+"contains a string greater than "+Fo+" utf8 bytes "+en(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ze(e,(a,l)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!Jp(a)))throw new Error(n+" contains an invalid key ("+a+") "+en(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pw(i,a),Zp(n,l,i),_w(i)}),s&&r)throw new Error(n+' contains ".value" child '+en(i)+" in addition to actual children.")}},MA=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!VA(t))throw new Error(mm(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class LA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function xA(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Tp(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function In(n,e,t){xA(n,t),FA(n,i=>Ye(i,e)||Ye(e,i))}function FA(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(UA(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function UA(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Ui&&De("event: "+t.toString()),ms(i)}}}/**
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
 */const BA="repo_interrupt",qA=25;class WA{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wr(),this.transactionQueueTree_=new Ll,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jA(n,e,t){if(n.stats_=wl(n.repoInfo_),n.forceRestClient_||xI())n.server_=new Ir(n.repoInfo_,(i,s,r,a)=>{Oh(n,i,s,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Vh(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new vt(n.repoInfo_,e,(i,s,r,a)=>{Oh(n,i,s,r,a)},i=>{Vh(n,i)},i=>{GA(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=jI(n.repoInfo_,()=>new Ww(n.stats_,n.server_)),n.infoData_=new xw,n.infoSyncTree_=new kh({startListening:(i,s,r,a)=>{let l=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(l=Yr(n.infoSyncTree_,i._path,c),setTimeout(()=>{a("ok")},0)),l},stopListening:()=>{}}),Fl(n,"connected",!1),n.serverSyncTree_=new kh({startListening:(i,s,r,a)=>(n.server_.listen(i,r,s,(l,c)=>{const h=a(l,c);In(n.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function HA(n){const t=n.infoData_.getNode(new oe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function e_(n){return wA({timestamp:HA(n)})}function Oh(n,e,t,i,s){n.dataUpdateCount++;const r=new oe(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const c=nr(t,h=>Oe(h));a=IA(n.serverSyncTree_,r,c,s)}else{const c=Oe(t);a=TA(n.serverSyncTree_,r,c,s)}else if(i){const c=nr(t,h=>Oe(h));a=EA(n.serverSyncTree_,r,c)}else{const c=Oe(t);a=Yr(n.serverSyncTree_,r,c)}let l=r;a.length>0&&(l=Bl(n,r)),In(n.eventQueue_,l,a)}function Vh(n,e){Fl(n,"connected",e),e===!1&&zA(n)}function GA(n,e){ze(e,(t,i)=>{Fl(n,t,i)})}function Fl(n,e,t){const i=new oe("/.info/"+e),s=Oe(t);n.infoData_.updateSnapshot(i,s);const r=Yr(n.infoSyncTree_,i,s);In(n.eventQueue_,i,r)}function $A(n){return n.nextWriteId_++}function zA(n){t_(n,"onDisconnectEvents");const e=e_(n),t=wr();pa(n.onDisconnect_,ee(),(s,r)=>{const a=CA(s,r,n.serverSyncTree_,e);Pp(t,s,a)});let i=[];pa(t,ee(),(s,r)=>{i=i.concat(Yr(n.serverSyncTree_,s,r));const a=XA(n,s);Bl(n,a)}),n.onDisconnect_=wr(),In(n.eventQueue_,ee(),i)}function KA(n){n.persistentConnection_&&n.persistentConnection_.interrupt(BA)}function t_(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),De(t,...e)}function n_(n,e,t){return jp(n.serverSyncTree_,e,t)||J.EMPTY_NODE}function Ul(n,e=n.transactionQueueTree_){if(e||Zr(n,e),si(e)){const t=s_(n,e);O(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&QA(n,ys(e),t)}else Yp(e)&&Jr(e,t=>{Ul(n,t)})}function QA(n,e,t){const i=t.map(h=>h.currentWriteId),s=n_(n,e,i);let r=s;const a=s.hash();for(let h=0;h<t.length;h++){const f=t[h];O(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const _=$e(e,f.path);r=r.updateChild(_,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,h=>{t_(n,"transaction put response",{path:c.toString(),status:h});let f=[];if(h==="ok"){const _=[];for(let g=0;g<t.length;g++)t[g].status=2,f=f.concat(On(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&_.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();Zr(n,xl(n.transactionQueueTree_,e)),Ul(n,n.transactionQueueTree_),In(n.eventQueue_,e,f);for(let g=0;g<_.length;g++)ms(_[g])}else{if(h==="datastale")for(let _=0;_<t.length;_++)t[_].status===3?t[_].status=4:t[_].status=0;else{He("transaction at "+c.toString()+" failed: "+h);for(let _=0;_<t.length;_++)t[_].status=4,t[_].abortReason=h}Bl(n,e)}},a)}function Bl(n,e){const t=i_(n,e),i=ys(t),s=s_(n,t);return YA(n,s,i),i}function YA(n,e,t){if(e.length===0)return;const i=[];let s=[];const a=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],h=$e(t,c.path);let f=!1,_;if(O(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,_=c.abortReason,s=s.concat(On(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=qA)f=!0,_="maxretry",s=s.concat(On(n.serverSyncTree_,c.currentWriteId,!0));else{const g=n_(n,c.path,a);c.currentInputSnapshot=g;const R=e[l].update(g.val());if(R!==void 0){Zp("transaction failed: Data returned ",R,c.path);let S=Oe(R);typeof R=="object"&&R!=null&&Rt(R,".priority")||(S=S.updatePriority(g.getPriority()));const N=c.currentWriteId,q=e_(n),W=SA(S,g,q);c.currentOutputSnapshotRaw=S,c.currentOutputSnapshotResolved=W,c.currentWriteId=$A(n),a.splice(a.indexOf(N),1),s=s.concat(vA(n.serverSyncTree_,c.path,W,c.currentWriteId,c.applyLocally)),s=s.concat(On(n.serverSyncTree_,N,!0))}else f=!0,_="nodata",s=s.concat(On(n.serverSyncTree_,c.currentWriteId,!0))}In(n.eventQueue_,t,s),s=[],f&&(e[l].status=2,function(g){setTimeout(g,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(_==="nodata"?i.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):i.push(()=>e[l].onComplete(new Error(_),!1,null))))}Zr(n,n.transactionQueueTree_);for(let l=0;l<i.length;l++)ms(i[l]);Ul(n,n.transactionQueueTree_)}function i_(n,e){let t,i=n.transactionQueueTree_;for(t=K(e);t!==null&&si(i)===void 0;)i=xl(i,t),e=se(e),t=K(e);return i}function s_(n,e){const t=[];return r_(n,e,t),t.sort((i,s)=>i.order-s.order),t}function r_(n,e,t){const i=si(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Jr(e,s=>{r_(n,s,t)})}function Zr(n,e){const t=si(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Qp(e,t.length>0?t:void 0)}Jr(e,i=>{Zr(n,i)})}function XA(n,e){const t=ys(i_(n,e)),i=xl(n.transactionQueueTree_,e);return bA(i,s=>{Uo(n,s)}),Uo(n,i),Xp(i,s=>{Uo(n,s)}),t}function Uo(n,e){const t=si(e);if(t){const i=[];let s=[],r=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(O(r===a-1,"All SENT items should be at beginning of queue."),r=a,t[a].status=3,t[a].abortReason="set"):(O(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(On(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Qp(e,void 0):t.length=r+1,In(n.eventQueue_,ys(e),s);for(let a=0;a<i.length;a++)ms(i[a])}}/**
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
 */function JA(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function ZA(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):He(`Invalid query segment '${t}' in query '${n}'`)}return e}const Mh=function(n,e){const t=eR(n),i=t.namespace;t.domain==="firebase.com"&&dn(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||bI();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new BI(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new oe(t.pathString)}},eR=function(n){let e="",t="",i="",s="",r="",a=!0,l="https",c=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(l=n.substring(0,h-1),n=n.substring(h+2));let f=n.indexOf("/");f===-1&&(f=n.length);let _=n.indexOf("?");_===-1&&(_=n.length),e=n.substring(0,Math.min(f,_)),f<_&&(s=JA(n.substring(f,_)));const g=ZA(n.substring(Math.min(n.length,_)));h=e.indexOf(":"),h>=0?(a=l==="https"||l==="wss",c=parseInt(e.substring(h+1),10)):h=e.length;const R=e.slice(0,h);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const S=e.indexOf(".");i=e.substring(0,S).toLowerCase(),t=e.substring(S+1),r=i}"ns"in g&&(r=g.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:a,scheme:l,pathString:s,namespace:r}};/**
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
 */class ql{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return G(this._path)?null:yp(this._path)}get ref(){return new ri(this._repo,this._path)}get _queryIdentifier(){const e=Eh(this._queryParams),t=Tl(e);return t==="{}"?"default":t}get _queryObject(){return Eh(this._queryParams)}isEqual(e){if(e=ce(e),!(e instanceof ql))return!1;const t=this._repo===e._repo,i=Tp(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+dw(this._path)}}class ri extends ql{constructor(e,t){super(e,t,new Sl,!1)}get parent(){const e=Ep(this._path);return e===null?null:new ri(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}gA(ri);yA(ri);/**
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
 */const tR="FIREBASE_DATABASE_EMULATOR_HOST",Ia={};let nR=!1;function iR(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=Mh(r,s),l=a.repoInfo,c;typeof Lh<"u"&&th&&(c=th[tR]),c?(r=`http://${c}?ns=${l.namespace}`,a=Mh(r,s),l=a.repoInfo):a.repoInfo.secure;const h=new UI(n.name,n.options,e);MA("Invalid Firebase Database URL",a),G(a.path)||dn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=rR(l,n,h,new FI(n.name,t));return new oR(f,n)}function sR(n,e){const t=Ia[e];(!t||t[n.key]!==n)&&dn(`Database ${e}(${n.repoInfo_}) has already been deleted.`),KA(n),delete t[n.key]}function rR(n,e,t,i){let s=Ia[e.name];s||(s={},Ia[e.name]=s);let r=s[n.toURLString()];return r&&dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new WA(n,nR,t,i),s[n.toURLString()]=r,r}class oR{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ri(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(sR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&dn("Cannot call "+e+" on a deleted database.")}}/**
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
 */function aR(n){wI(mn),on(new qt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return iR(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),it(nh,ih,n),it(nh,ih,"esm2017")}vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};aR();export{Zn as E,Ot as G,_e as T,$h as a,yR as b,RR as c,AR as d,PR as e,OR as f,hR as g,wR as h,rg as i,bR as j,DR as k,gR as l,fR as m,_R as n,mR as o,pR as p,CR as q,dR as r,NR as s,kR as u,SR as w};
