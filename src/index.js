import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import './assets/css/iconfont.css';
import './assets/css/common.less';
import AppRouter from './router/index';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

