import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);