import * as actionTypes from '../constants/actionTypes';


const initialState = {
	tasks: [],
	completed: 0,
	remaining: 0
};


function addTask(state, action) {
	let { task } = action;
	let newTask = {};
	newTask.description = task;
	newTask.completed = false;

	return { 
		...state, 
		tasks: state.tasks.concat(task),
		remaining: state.remaining + 1
	}
}


export default function( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.ADD_TASK:
			return addTask(state, action)
	}
	
	return state;
};

