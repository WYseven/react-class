import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './views/app';

import './css/base.css'
import './css/index.css'

let list = [
  {
    id: 1,
    title: "hello1",
    isSelected: true
  },
  {
    id: 2,
    title: "hello2",
    isSelected: false
  }
]

ReactDOM.render(
  <TodoList list={list} />,
  document.getElementById('root')
);
