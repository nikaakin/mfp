import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Need mount function to start up app

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//  if we are in development we should start up immidiately

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("._marketing-dev-root");
  if (root) {
    mount(root);
  }
}

//  if we are in prod we need to export
export { mount };
