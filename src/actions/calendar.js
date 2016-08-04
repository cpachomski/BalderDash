import * as actionTypes from '../constants/actionTypes';

function triggerIncrementMonth(currentMonth) {
	return { 
		type: actionTypes.INCREMENT_MONTH,
		currentMonth
	}
};

function triggerDecrementMonth(currentMonth) {
	return {
		type: actionTypes.DECREMENT_MONTH,
		currentMonth
	}
}


export function incrementMonth(currentMonth) {
	return (dispatch) => {
		dispatch(triggerIncrementMonth(currentMonth));
	}
};

export function decrementMonth(currentMonth) {
	return (dispatch) => {
		dispatch(triggerDecrementMonth(currentMonth));
	}
}