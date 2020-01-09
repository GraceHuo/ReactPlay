import React, { Component } from "react";
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="Home Page">
        {/* <div>
          <h3>HomePage</h3>
        </div> */}
        {{
          content: (
            <div>
              <h3>HomePage - From Object</h3>
            </div>
          ),
          txt: "this is text",
          btnClick: () => {
            console.log("btnClick");
          }
        }}
      </Layout>
    );
  }
}
