import React from 'react';
import './style.scss';

export default React.createClass({
	displayName: 'NewTodo',

	generateRandomPlaceholder() {

		const placeholders = [
			'Mop the walls',
			'Eat horseradish',
			'Store the crayons better',
			'Use Sephora sale coups',
			'Reach out to grandparent(s)'
		]
		const idx = parseInt(Math.random() * (placeholders.length - 0) + 0);

		return placeholders[idx];

	},

	handleSubmit(e) {
		e.preventDefault();

		const task = this.refs.newTask.value;
		const { addNewTask } = this.props;
		addNewTask(task);
	},

	render() {
		const { visible } = this.props;
		const randomPlaceholder = this.generateRandomPlaceholder();
		const toggleClass = visible ? 'new-task--form visible' : 'new-task--form' 

		return (
			<form className={toggleClass}
				  onSubmit={this.handleSubmit}>
				<input type='text'
						ref='newTask'
						placeholder={randomPlaceholder}
						></input>
				<input type='submit'
						value='Add'></input>
			</form>
		)
	}
});