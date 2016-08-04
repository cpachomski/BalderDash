import React from 'react';
import calendar from 'calendar';

export default React.createClass({
	displayName: 'Calendar',


	handleIncrementMonth() {
		const { month, incrementMonth } = this.props;
		incrementMonth(month);
	},

	handleDecrementMonth() {
		const { month, decrementMonth } =  this.props;
		decrementMonth(month);
	},

	render() {
		<div className='calendar'>
				<h1> App.js</h1>
				<h3>Month: {constants.monthNames[month]}</h3>
				<h3>Year: {year}</h3>
				<button 
					onClick={ this.handleDecrementMonth }>
					Prev Month</button>
				<button 
					onClick={ this.handleIncrementMonth }>
					Next Month</button>
		</div>
	}
});