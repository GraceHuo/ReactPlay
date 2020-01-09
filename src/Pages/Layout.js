import React, { Component } from "react";
import { TopBar } from "./Components/TopBar";
import { BottomBar } from "./Components/BottomBar";

export default class Layout extends Component {
  componentDidMount() {
    const { title = "Default Page" } = this.props;
    document.title = title;
  }
  render() {
    const { children, showTopBar, showBottomBar } = this.props;
    return (
      <div>
        {showTopBar && <TopBar />}
        {children.content}
        {children.txt}
        <div>
          <button onClick={children.btnClick}>Click Me</button>
        </div>
        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}
