import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './assets/iconfont/iconfont.css'
import './assets/css/common.less';
import AppRouter from './router/index';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

