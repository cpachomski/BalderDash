import * as actionTypes from '../constants/actionTypes';

function triggerIncrementMonth(calMonth) {
	return { 
		type: actionTypes.INCREMENT_MONTH,
		calMonth
	}
};

function triggerDecrementMonth(calMonth) {
	return {
		type: actionTypes.DECREMENT_MONTH,
		calMonth
	}
}


export function incrementMonth(calMonth) {
	return (dispatch) => {
		dispatch(triggerIncrementMonth(calMonth));
	}
};

export function decrementMonth(calMonth) {
	return (dispatch) => {
		dispatch(triggerDecrementMonth(calMonth));
	}
}