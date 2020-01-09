import React, { Component } from "react";

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  componentDidMount() {
    // this.changeValue(100);
    document.getElementById("test").addEventListener("click", this.setCounter);
  }

  changeValue = v => {
    // setState在合成事件和生命周期中是异步的，这里说的异步其实是批量更新，达到优化性能的目的
    this.setState(
      {
        counter: this.state.counter + v
      },
      () => {
        // callback在state更新后再执行
        console.log("in call back", this.state.counter);
      }
    );
    // 函数形式不会合并，因为state是当时值
    // this.setState(state => {
    //   return {
    //     counter: state.counter + v
    //   };
    // });
    console.log("conter", this.state.counter);
  };

  // setState在setTimeout和原生事件中是同步的
  setCounter = () => {
    // setTimeout(() => {
    //   this.changeValue(100);
    // }, 0);
    this.changeValue(1);
    // state 的更新可能会被合并
    this.changeValue(2);
  };
  render() {
    return (
      <div>
        <h3>SetStatePage</h3>
        <button onClick={this.setCounter}>合成事件</button>
        <button id="test">原生事件</button>
        <div>counter: {this.state.counter}</div>
      </div>
    );
  }
}
