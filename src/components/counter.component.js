import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
		console.log(this.state.count);
		this.props.handleCart("Increment", this.state.count + 1);
	};

	handleDecrement = () => {
		if (this.state.count > 0)
			this.setState({ count: this.state.count - 1 });
		this.props.handleCart("Decrement", this.state.count - 1);
	};

	render() {
		return (
			<div style={{ textAlign: "center" }}>
				<button onClick={this.handleIncrement}>Increment</button>
				<span style={{ margin: "5px" }}>{this.state.count}</span>
				<button
					disabled={this.state.count === 0}
					onClick={this.handleDecrement}
				>
					Decrement
				</button>
			</div>
		);
	}
}

export default Counter;
