import React from 'react';
import { createRoot } from 'react-dom/client';
import './firebaseInit';

import reportWebVitals from './reportWebVitals';
import App from './App';
import 'text-encoding';


const root = createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();

