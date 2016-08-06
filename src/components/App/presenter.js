import React from 'react';
import constants from '../../constants/calendar';
import DateHeader from '../DateHeader';
import Calendar from '../Calendar';
import Todos from '../Todos';
import Forecast from '../Forecast';
import './style.scss';

export default React.createClass({


	render() {
		const { day, month, year, calMonth, calYear } = this.props;

		return (
			<div className='container'>
				<div className='top-bar'>
					<DateHeader day={day} month={month} year={year} />
					<Forecast />
				</div>
				<div className='inner--container'>
					<Todos />
					<Calendar />
				</div>
			</div>
		)
	}
})