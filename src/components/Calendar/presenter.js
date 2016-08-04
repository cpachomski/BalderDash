import React from 'react';
import constants from '../../constants/calendar';
import { Cal } from './Calendar';

export default React.createClass({
	displayName: 'Calendar',

	getInitialState() {
		return {
			calendar: new Cal('calendar')
		}
	},

	handleIncrementMonth() {
		const { month, incrementMonth } = this.props;
		incrementMonth(month);
	},

	handleDecrementMonth() {
		const { month, decrementMonth } =  this.props;
		decrementMonth(month);
	},

	render() {
		const { day, calMonth, calYear } = this.props;
		const calendar = new Calendar();
		const weeks = calendar.monthDays(calYear, calMonth);

		return (
			<div id='calendar'>

				<button 
					onClick={ this.handleDecrementMonth }>
					Prev Month</button>
				<button 
					onClick={ this.handleIncrementMonth }>
					Next Month</button>
			</div>
		)
	}
});