import * as R from "ramda";
import React from "react";
import BubbleChart from "./BubbleChart";

export default class App extends React.Component {
  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  };

  reDraw = R.map((v) => ({
    v: this.getRandomIntInclusive(10, 100),
  }))(R.range(1, 24));
  render() {
    return (
      <div className="App">
        <h1>Hello D3</h1>
        <BubbleChart data={this.reDraw} useLabels />
      </div>
    );
  }
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
