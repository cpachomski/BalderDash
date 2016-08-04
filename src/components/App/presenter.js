import React from 'react';
import constants from '../../constants/calendar';
import DateHeader from '../DateHeader';
import Calendar from '../Calendar';

export default React.createClass({


	render() {
		const { day, month, year, calMonth, calYear } = this.props;

		return (
			<div className='container'>
				<h1>BalderDash</h1>
				<DateHeader day={day} month={month} year={year} />
				<Calendar />
			</div>
		)
	}
})