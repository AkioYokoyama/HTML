/**
 * コンポジション vs 継承
 * @see https://ja.reactjs.org/docs/composition-vs-inheritance.html
 * editor: https://codepen.io/gaearon/pen/MjrdWg?editors=1010
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 子要素の出力 (Containment)
 */
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<WelcomeDialog />)

/**
 * 独自propsの生成
 */
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

function Contacts(props) {
  return (
    <section>  
      <h2>Contacts</h2>
      <p>left</p>
    </section>
  )
}

function Chat(props) {
  return (
    <section>  
      <h2>Chat</h2>
      <p>right</p>
    </section>
  )
}

function App() {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
    />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

/**
 * 特化したコンポーネント (Specialization)
 */
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  )
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="hank you for visiting our spacecraft!"
    />
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<WelcomeDialog />)

/**
 * class Component
 */
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  )
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
    this.state = {loginName: ''}
  }

  handleChange(e) {
    this.setState({loginName: e.target.value})
  }

  handleSignUp(e) {
    alert(`Welcome aboard, ${this.state.loginName}!`)
  }

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      > 
        <input value={this.state.loginName} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<SignUpDialog />)
