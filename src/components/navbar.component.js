import React, { Component } from 'react';

class Navbar extends Component {
	render() { 
		return (
			<nav>
			  <div style = {{textAlign: "center", marginTop: "10px"}}>
				  <strong><h3>Cart: {this.props.count}</h3> </strong>
				  <hr />
			  </div>
			</nav>
		  );
	}
}
 
export default Navbar;