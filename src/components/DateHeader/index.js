import React from 'react';
import constants from '../../constants/calendar';
export default React.createClass({
	render() {
		const { day, month, year } = this.props;
		
		return (
			<div className='date--header'>
				<p className='date--day'> { constants.dayNames[day] } </p>
				<p className='date--month'> { constants.monthNames[month] } </p>
				<p className='date--year'> { year } </p>
			</div>
		)
	}
})