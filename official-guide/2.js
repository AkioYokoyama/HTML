/*
 * JSXの導入
 * @see https://ja.reactjs.org/docs/introducing-jsx.html
 */

import React from 'react';
import ReactDOM from 'react-dom';

const name = 'word'
const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://ja.wikipedia.org/wiki/React#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:React-icon.svg'
}     
const h1 = <h1>Hello, {formatUser(user)} !!</h1>

ReactDOM.render(
  greeting(user),
  document.getElementById('root')
);

/* function list */

function formatUser(user) {
  return user.firstName + user.lastName;
}

function greeting(user) {
  if (user) {
    return (
      <div>
        <h1>Hello, {formatUser(user)} !!</h1>
        <a href="https://www.reactjs.org">React</a>
        <img src={user.avatarUrl} />
      </div>
    )
  }
  return (<h1>Hello, Stranger.</h1>)
}
