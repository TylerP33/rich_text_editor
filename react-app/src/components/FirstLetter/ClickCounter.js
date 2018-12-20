import React, { Component } from 'react';
import '../styles/AlphabetClick.css';



class ClickCounter extends Component {
		state = {
			counter: 0
		}

		clickCounter = (e) => {
			console.log(e)
			this.setState({counter: this.state.counter + 1})
		}



render() {
	return (
		<div>
		<button onClick={this.clickCounter} id="special-counters">Counter</button>
		<div id="click-holder">
				{this.state.counter}
		</div>
		</div>
	)
}

}

export default ClickCounter;