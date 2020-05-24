import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './component/App';
import * as serviceWorker from './serviceWorker';

const todos = [
  
];
ReactDOM.render(
  <React.StrictMode>
    <App todos={todos} />{' '}
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();


