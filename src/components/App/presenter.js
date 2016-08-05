import React from 'react';
import constants from '../../constants/calendar';
import DateHeader from '../DateHeader';
import Calendar from '../Calendar';
import Todos from '../Todos';
import './style.scss';

export default React.createClass({


	render() {
		const { day, month, year, calMonth, calYear } = this.props;

		return (
			<div className='container'>
				<DateHeader day={day} month={month} year={year} />
				<div className='inner--container'>
					<Todos />
					<Calendar />
				</div>
			</div>
		)
	}
})