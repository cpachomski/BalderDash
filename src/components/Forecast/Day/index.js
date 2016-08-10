import React from 'react';
import './style.scss';

export default React.createClass({
	render() {
		const temp = this.props.day.main.temp;
		const humidity = this.props.day.main.humidity;
		const iconClass = 'icon';
		const date = new Date(this.props.day.dt_text);
		console.log(date);

		return (
			<li className='forecast--day'>
				<div className='forecast--date'	></div>
				<div className={iconClass}></div>
				<div className='temp'><small>T</small> { parseInt(temp) } °F</div>
				<div className='humidity'><small>H</small> { humidity }  %</div>
			</li>
		)
	}
})