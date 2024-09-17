
  const mockFirebase = {
    getAuth: jest.fn(() => ({
      onAuthStateChanged: jest.fn((callback) => callback(null)),
    })),
    getFirestore: jest.fn(() => ({})),
    getDatabase: jest.fn(() => ({})),
    getMessaging: jest.fn(() => ({})),
    initializeApp: jest.fn(() => mockFirebase),
    GoogleAuthProvider: jest.fn(),
    ref: jest.fn(),
    set: jest.fn(),
    getToken: jest.fn(),
    onMessage: jest.fn(),
  };
  
  export default mockFirebase;
   