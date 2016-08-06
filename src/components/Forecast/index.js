import React from 'react';
import { WEATHER_API_KEY } from '../../constants/config'

export default React.createClass({
	displayName: 'Forecast',

	fetchForecast() {
		console.log(WEATHER_API_KEY);
	},

	render() {
		this.fetchForecast();

		return ( 
			<div className='forecast--container'>test</div>
		)
	}
})