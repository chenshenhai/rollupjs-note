import React from 'react';
import ReactDOM from 'react-dom/cjs/react-dom.production.min';
import List from './component/List.jsx';

const dataList = [
  { name: 'hello' },
  { name: 'world' },
  { name: 'react' },
  { name: 'react-dom' },
]


ReactDOM.render(
  React.createElement(List, { dataList }, null), 
  document.getElementById('App')
);
