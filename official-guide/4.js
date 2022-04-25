/*
 * コンポーネントとprops
 * @see https://ja.reactjs.org/docs/components-and-props.html
 * editor: https://codepen.io/gaearon/pen/MjrdWg?editors=1010
 */

import React from 'react';
import ReactDOM from 'react-dom';


/*
 * DOMとしての描画
 *
 * [Memo]
 * - functionで定義したものをrenderで利用できる
 * - 引数にpropsを指定すると要素の属性を渡すことができる
 */
function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}

const element = <Welcome name="Sara" />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

/*
 * コンポーネントを組み合わせる
 *
 * 再利用し、まとめることができる
 */
function Welcome(props) {
  return <h1>Hello {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  )
}

const element = <App />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

/*
 * コンポーネントの抽出
 *
 * 再利用し、まとめることができる
 */
// before
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

const author = {
  avatarUrl: "http://www.sample.com/avatar.jpg",
  name: "author name"
}

const element = <Comment author={author} text="Before" date="2022-04-26" />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// after
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.user} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

const user = {
  avatarUrl: "http://www.sample.com/avatar.jpg",
  name: "author name"
}

const element = <Comment user={user} text="After" date="2022-04-26" />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
