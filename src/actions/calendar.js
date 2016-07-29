import * as actionTypes from '../constants/actionTypes';

function triggerIncrementDay() {
	return { type: actionTypes.TEST }
};

export function incrementDay() {
	return (dispatch) => {
		dispatch(triggerIncrementDay());
	}
};