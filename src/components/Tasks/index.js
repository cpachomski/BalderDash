import React from 'react';
import NewForm from './NewForm';
import './style.scss';

export default React.createClass({
	displayName: 'Todos',

	getInitialState() {
		return {
			newFormVisible: false
		}
	},

	toggleFormVisibility() {
		this.setState({
			newFormVisible: !this.state.newFormVisible
		})
	},

	render() {
		const iconClass = this.state.newFormVisible ? 'material-icons light' : 'material-icons';
		const iconText = this.state.newFormVisible ? 'clear' : 'add';

		return (
			<div className='todos'>
				<div className='todos--header'>
					<NewForm visible={this.state.newFormVisible}/>			
					<i className={iconClass}
						onClick={this.toggleFormVisibility}>{iconText}</i>
					
				</div>
			</div>
		)
	}
});
