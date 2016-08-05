import * as actionTypes from '../constants/actionTypes';

function triggerAddNewTask(task) {
	return {
		type: actionTypes.ADD_TASK,
		task
	}
};

export function addNewTask(task) {
	return(dispatch) => {
		dispatch(triggerAddNewTask(task));
	}
};