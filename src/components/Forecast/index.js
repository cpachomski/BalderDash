import React from 'react';
import Day from './Day';
import { WEATHER_API_KEY } from '../../constants/config';
import './style.scss';

export default React.createClass({
	displayName: 'Forecast',

	getInitialState() {
		return {
			loaded: false,
			days: []
		}
	},

	fetchForecast() {
		let localForecastUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.lat}&lon=${this.state.lng}&appid=${WEATHER_API_KEY}&units=imperial`;
		let days = [];
		
		fetch(localForecastUrl)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				for (let i = 0; i < 5; i++) {
					days.push(data.list[i]);
				}
			})
			.then(() => {
				this.setState({
					days: days
				});
			});
	},

	fetchLatLng(cb) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				this.setState({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
					loaded: true
				})

				cb();
			});
		}
	},

	render() {
		this.fetchLatLng(this.fetchForecast);
		console.log(this.state);
		return ( 
			<div className='forecast--container'>
				<ul>
					{	
						this.state.days.map((day) => {
							return <Day key={day.dt} day={day} />
						})
					}
				</ul>
			</div>
		)
	}
})