/**
 * リストとkey
 * @see https://ja.reactjs.org/docs/lists-and-keys.html
 * editor: https://codepen.io/gaearon/pen/MjrdWg?editors=1010
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 複数のコンポーネントをレンダーする
 */
const numbers = [1, 2, 3, 4, 5]
const listItems = numbers.map((number) => <li>{number}</li>)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(listItems)

/**
 * コンポーネントを利用する
 */
function Numbers(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  )

  return (
    <ul>{listItems}</ul>
  )
}

const numbers = [1, 2, 3, 4, 5]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Numbers numbers={numbers} />)


/**
 * 正しいkeyの利用法
 *
 * key値は要素に直接書かない
 */
function NubmerList(props) {
  const numbers = props.numbers
  const listItems = numbers.map((number) =>
    <ListItems key={number.toString()} value={number} />
  )

  return (
    <ul>{listItems}</ul>
  )
}

function ListItems(props) {
  return <li>{props.value}</li>
}

const numbers = [1, 2, 3, 4, 5]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<NubmerList numbers={numbers} />)

/**
 * key は兄弟要素の中で一意であればよい
 */
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  )

  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  )

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  )
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Blog posts={posts} />)

/**
 * map() を JSX に埋め込む
 */
function NumberList(props) {
  const numbers = props.numbers

  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
      )}
    </ul>
  )
}

function ListItem(props) {
  return <li>{props.value}</li>
}

numbers = [1, 2, 3, 4, 5]
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<NumberList numbers={numbers} />)
