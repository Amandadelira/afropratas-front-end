import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    return <Nav></Nav>;
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
