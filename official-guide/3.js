/*
 * 要素のrender
 * @see https://ja.reactjs.org/docs/rendering-elements.html
 */

import React from 'react';
import ReactDOM from 'react-dom';


/* DOMとしての描画 */
const element = <h1>element render</h1>
const root = ReactDOM.createRoot(
  document.getElementById('root')
)

root.render(element)

/* レンダーされた要素の更新 */
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  root.render(element);
}

setInterval(tick, 1000);
