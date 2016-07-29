import * as actionTypes from '../constants/actionTypes';

function triggerIncrementMonth(currentMonth) {
	return { 
		type: actionTypes.INCREMENT_MONTH,
		currentMonth
	}
};


export function incrementMonth(currentMonth) {
	return (dispatch) => {
		dispatch(triggerIncrementMonth(currentMonth));
	}
};