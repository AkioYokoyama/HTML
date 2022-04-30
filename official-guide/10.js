/**
 * state のリフトアップ
 * @see https://ja.reactjs.org/docs/lifting-state-up.html
 * editor: https://codepen.io/gaearon/pen/MjrdWg?editors=1010
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature: ''}
  }

  handleChange(event) {
    this.setState({temperature: event.target.value})
  }

  render() {
    const temperature = this.state.temperature
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Calculator />)

/**
 * 2つ目の入力を追加する
 */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature: ''}
  }

  handleChange(event) {
    this.setState({temperature: event.target.value})
  }

  render() {
    const temperature = this.state.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange= {this.handleChange} />
      </fieldset>
    )
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Calculator />)

/**
 * 変換関数の作成
 */
function toCelsius(fahrenheit) {
  return (fahrenheit -32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

/**
 * stateのリフトアップ
 */
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit -32) * 5 / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
    this.state = {temperature: '', scale: 'c'}
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature})
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = (scale === 'f') ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = (scale === 'c') ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature: ''}
  }

  handleChange(event) {
    this.setState({temperature: event.target.value})
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange= {this.handleChange} />
      </fieldset>
    )
  }
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Calculator />)
