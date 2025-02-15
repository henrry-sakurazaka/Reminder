import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


// Axios をモック
// jest.mock('axios');

test('renders Sign Up link', () => {
  render(<App />);
  const linkElement = screen.getByText((content) => 
    content.includes('Sign Up')  // テキストが部分的に存在するか確
  );
  expect(linkElement).toBeInTheDocument();
  
});


// Firebase モジュールの特定の関数をモック
jest.mock('./firebase', () => ({
  initializeApp: jest.fn(),
  getAuth: jest.fn(() => ({})),
  getFirestore: jest.fn(() => ({})),
  getDatabase: jest.fn(() => ({})),
  getMessaging: jest.fn(() => ({})),
}));

test('renders App component', () => {
  render(<App />);
});
