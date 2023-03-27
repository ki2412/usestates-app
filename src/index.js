import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppOrder from './AppOrder';
import AppInfo from './AppInfo';
import AppRandom from './AppRandom';
import AppToDoList from './AppToDoList';
import AppToggle from './AppToggle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <AppOrder />
    <AppInfo />
    <AppRandom />
    <AppToDoList />
    <AppToggle />

  </React.StrictMode>
);

reportWebVitals();

