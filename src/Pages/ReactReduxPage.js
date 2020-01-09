import React, { Component } from "react";
import { connect } from "react-redux";
export default connect(
  //mapStateToProps 把state映射到props
  state => ({ num: state }),
  //mapDispatchToProps 把dispatch映射到props
  {
    minus: () => ({ type: "MINUS" })
  }
)(
  class ReactReduxPage extends Component {
    render() {
      console.log("props", this.props);
      const { num, dispatch, minus } = this.props;

      return (
        <div>
          <h3>ReactReduxPage</h3>
          {/* <button onClick={() => dispatch({ type: "ADD" })}>add</button> */}
          <button onClick={minus}>minus</button>
          <p>{num}</p>
        </div>
      );
    }
  }
);
