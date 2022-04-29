/**
 * フォーム
 * @see https://ja.reactjs.org/docs/forms.html
 * editor: https://codepen.io/gaearon/pen/MjrdWg?editors=1010
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 制御されたコンポーネント
 */
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      textValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleTextChange(event) {
    this.setState({textValue: event.target.value})
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value + ' & ' + this.state.textValue)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Essay:
          <textarea value={this.state.textValue} onChange={this.handleTextChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<NameForm />)

/**
 * select タグ
 */
class FlavorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {favoriteFlavor: 'coconut'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({favoriteFlavor: event.target.value})
  }

  handleSubmit() {
    alert('Your favorite flavor is: ' + this.state.favoriteFlavor)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.favoriteFlavor} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FlavorForm />)

/**
 * 複数の入力処理
 */
class Reservation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = (target.type === 'checkbox') ?  target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Reservation />)
