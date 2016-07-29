import React from 'react';

export default React.createClass({
	render() {
		const { incrementDay } = this.props;
		return (
			<div className='container'>
				<h1> App.js</h1>
				<button 
					onClick={incrementDay}>
					Next Day</button>
			</div>
		)
	}
})