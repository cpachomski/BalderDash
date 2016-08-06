import React from 'react';
import './style.scss';

export default React.createClass({
	displayName: 'Task',

	getInitialState() {
		return {
			completed: false
		}
	},

	toggleCompleted() {
		this.setState({
			completed: !this.state.completed
		});
	}, 

	render() {
		const { description } = this.props;
		const toggleClass = this.state.completed ? 'task complete' : 'task' 
		return (
			<li className={toggleClass}
				onClick={this.toggleCompleted}>
				<p className='task--description'>{description}</p>
			</li>
		)
	}
})