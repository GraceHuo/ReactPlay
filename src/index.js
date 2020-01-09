import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import Jsx from "./Jsx";
import SetStatePage from "./SetStatePage";
import LifeCyclePage from "./LifeCyclePage";
import ClassComponent from "./Pages/ClassComponent";
import { FunctionComponent } from "./Pages/FunctionComponnent";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import ReduxPage from "./Pages/ReduxPage";
import store from "./store/";
import { Provider } from "react-redux";
import ReactReduxPage from "./Pages/ReactReduxPage";
import RouterPage from "./Pages/RouterPage";
import PureComponentPage from "./Pages/PureComponentPage";

// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<Jsx />, document.getElementById("root"));
// ReactDOM.render(<SetStatePage />, document.getElementById("root"));
// ReactDOM.render(<LifeCyclePage />, document.getElementById("root"));
// ReactDOM.render(<ClassComponent />, document.getElementById("root"));
// ReactDOM.render(<FunctionComponent />, document.getElementById("root"));
// ReactDOM.render(<HomePage />, document.getElementById("root"));
// ReactDOM.render(<UserPage />, document.getElementById("root"));
// ReactDOM.render(<ReduxPage />, document.getElementById("root"));
// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxPage />
//   </Provider>,
//   document.getElementById("root")
// );
ReactDOM.render(<RouterPage />, document.getElementById("root"));
ReactDOM.render(<PureComponentPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
