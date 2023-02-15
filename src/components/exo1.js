import ReactDOM from "react-dom";
import React from "react";
// import { render } from "@testing-library/react";
import "./index.css";

/**  cette synthase ne passe que dans du HTML  */

class Clock extends React.Component {
  render() {
    ReactDOM.render(<Clock />, document.getElementById("root"));
    let d = new Date().toLocaleString(); // heure et date en continu
    return <h1>{d}</h1>;
  }
}
ReactDOM.render(<Clock />, document.getElementById("root"));
