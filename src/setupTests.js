// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'text-encoding';

// Polyfill for encoding which isn't present globally in jsdom
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}



// // Polyfill for encoding which isn't present globally in jsdom
// if (typeof global.TextEncoder === 'undefined') {
//     global.TextEncoder = TextEncoder;
//   }
  
//   if (typeof global.TextDecoder === 'undefined') {
//     global.TextDecoder = TextDecoder;
//   }

// setupTests.js

// // Polyfill for TextEncoder
// if (typeof global.TextEncoder === 'undefined') {
//     global.TextEncoder = class {
//       encode(str) {
//         var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
//         var bufView = new Uint16Array(buf);
//         for (var i = 0, strLen = str.length; i < strLen; i++) {
//           bufView[i] = str.charCodeAt(i);
//         }
//         return bufView;
//       }
//     };
//   }
  