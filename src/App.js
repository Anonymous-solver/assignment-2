import React, { Component } from "react";
import Counter from "./components/counter.component";
import Navbar from "./components/navbar.component";

class App extends Component {
  state = {
    counters: [
      <Counter index={0}></Counter>,
      <Counter index={1}></Counter>,
      <Counter index={2}></Counter>,
      <Counter index={3}></Counter>,
      <Counter index={4}></Counter>,
    ],
    cart: 0,
  };

  handleCart = (status, count) => {
    if (status === "Increment" && count === 1)
      this.setState({ cart: this.state.cart + 1 });
    if (status === "Decrement" && count === 0)
      this.setState({ cart: this.state.cart - 1 });
  };

  render() {
    return (
      <div style = {{marginLeft: "500px", marginTop: "100px", marginRight:"500px", border: "1px solid", boxShadow:"1px 1px 5px gray", backgroundColor: "lightsalmon", borderRadius : "5px"}}>
        <Navbar count={this.state.cart} />
        <br />
        {this.state.counters.map((counter, index) => (
          <>
            <Counter key={index} handleCart={this.handleCart} />
            <br />
          </>
        ))}
      </div>
    );
  }
}

export default App;
