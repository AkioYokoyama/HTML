/*
 * イベント処理
 * @see https://ja.reactjs.org/docs/handling-events.html
 * editor: https://codepen.io/gaearon/pen/MjrdWg?editors=1010
 */

import React from 'react';
import ReactDOM from 'react-dom';


/*
 * buttonのOn/Off
 */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </button>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Toggle />);
