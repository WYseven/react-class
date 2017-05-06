import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './views/app';
// import App from './state/app';
import App from './props/app';

import './css/base.css'
import './css/index.css'

let list = [
  {
    id: 1,
    title: "123",
    isSelected: true
  },
  {
    id: 2,
    title: "hello2",
    isSelected: false
  }
]

ReactDOM.render(
  //<TodoList list={list} />,
  <App />,
  document.getElementById('root')
);
