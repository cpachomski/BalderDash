import React from 'react';
import constants from '../../constants/calendar';
import './style.scss';


export default React.createClass({
	render() {
		const { day, month, year } = this.props;

		return (
			<div className='date--header'>
				<div className='date--box'>
					<p className='date--date'>{ day }</p>
					<p className='date--month'>{ constants.monthNames[month]}</p>
					<p className='date--year'>{ year }</p>
				</div>
				<p className='date--day'>{ constants.dayNames[day] }</p>
			</div>
		)
	}
})