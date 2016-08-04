import React from 'react';
import constants from '../../constants/calendar';
import { Cal } from './Calendar';
import './style.scss';

export default React.createClass({
	displayName: 'Calendar',

	handleIncrementMonth() {
		const { calMonth, incrementMonth } = this.props;
		incrementMonth(calMonth);
	},

	handleDecrementMonth() {
		const { calMonth, decrementMonth } =  this.props;
		decrementMonth(calMonth);
	},

	componentDidMount() {
		const calendar = new Cal('calendar');
	},

	render() {
		const { day, calMonth, calYear } = this.props;

		return (
			<div id='calendar'>

				<button 
					id='prev-month'
					onClick={ this.handleDecrementMonth }>
					Prev Month</button>
				<button 
					id='next-month'
					onClick={ this.handleIncrementMonth }>
					Next Month</button>
			</div>
		)
	}
});