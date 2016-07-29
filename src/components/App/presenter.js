import React from 'react';

export default React.createClass({

	handleIncrementMonth() {
		const { month, incrementMonth } = this.props;
		incrementMonth(month);
	},

	render() {
		const { day, month, year } = this.props;


		return (
			<div className='container'>
				<h1> App.js</h1>
				<h3>Month: {month}</h3>
				<h3>Year: {year}</h3>
				<button 
					onClick={ this.handleIncrementMonth }>
					Next Month</button>
			</div>
		)
	}
})