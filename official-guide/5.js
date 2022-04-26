/*
 * state とライフサイクル
 * @see https://ja.reactjs.org/docs/state-and-lifecycle.html
 * editor: https://codepen.io/gaearon/pen/MjrdWg?editors=1010
 */

import React from 'react';
import ReactDOM from 'react-dom';


/*
 * UIのカプセル化
 */
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);

/*
 * 関数をクラスに変換する
 *
 * [手順]
 * 1. React.Component を継承する同名の ES6 クラスを作成する。
 * 2. render() と呼ばれる空のメソッドを 1 つ追加する。
 * 3. 関数の中身を render() メソッドに移動する。
 * 4. render() 内の props を this.props に書き換える。
 * 5. 空になった関数の宣言部分を削除する。
 */
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);

/*
 * クラスにローカルな state を追加する
 * ※ 毎秒ごとに更新はされない
 */
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);

/*
 * クラスにローカルな state を追加する
 * ※ 毎秒ごとに更新はされない
 */
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  // DOMにレンダーされたあと
  componentDidMount() {
    // setIntervalは第2引数で指定したミリ秒ごとに第1引数の関数が実行される
    // 第1引数は引数なしのアロー関数
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    // stateは直接変更しない
    // ☓:  this.state.date = new Date()
    // constructorの this.stateはOK
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
