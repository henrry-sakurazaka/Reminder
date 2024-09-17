// src/setupTests.js
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'text-encoding';
import fetch from 'node-fetch';


// Polyfill for fetch
globalThis.fetch = fetch;

// Polyfill for encoding which isn't present globally in jsdom
if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = TextDecoder;
}

// Mock ReadableStream
global.ReadableStream = class ReadableStream {
  constructor() {
    this.locked = false;
  }
  getReader() {
    return {
      read: () => Promise.resolve({ done: true, value: undefined }),
      releaseLock: () => {},
    };
  }
};

// Mock Firebase
jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(),
    getApps: jest.fn(() => []),
    getApp: jest.fn(),
  };
});

jest.mock('firebase/auth', () => {
  return {
    getAuth: jest.fn(() => ({
      currentUser: null,
      signInWithPopup: jest.fn(),
    })),
    GoogleAuthProvider: jest.fn(),
  };
});

jest.mock('firebase/firestore', () => {
  return {
    getFirestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          set: jest.fn(),
          get: jest.fn(() => Promise.resolve({ data: () => ({}) })),
        })),
      })),
    })),
  };
});

jest.mock('firebase/database', () => {
  return {
    getDatabase: jest.fn(() => ({})),
    ref: jest.fn(),
    set: jest.fn(),
  };
});

jest.mock('firebase/messaging', () => {
  return {
    getMessaging: jest.fn(() => ({
      onMessage: jest.fn(),
      getToken: jest.fn(),
    })),
    getToken: jest.fn(),
  };
});

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(() => ({})),
  onAuthStateChanged: jest.fn((auth, callback) => callback(null)),
}));


global.window = Object.create(window);
global.window.addEventListener = jest.fn();
global.window.removeEventListener = jest.fn();
