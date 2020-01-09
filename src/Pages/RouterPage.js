import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import EmptyPage from "./EmptyPage";

export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <h3>RouterPage</h3>
        <Router>
          <Link to="/">Home Page</Link>
          <Link to="/user">User Page</Link>

          <Switch>
            <Route
              exact
              path="/"
              component={HomePage}
              children={() => <div>children</div>}
              render={() => <div>render</div>}
            />
            <Route path="/user" component={UserPage} />
            <Route component={EmptyPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

// Route渲染优先级：children>component>render
// 三种方法互斥，只能选一种
// 不管是否匹配都要渲染的内容，用children
