import * as actionTypes from '../constants/actionTypes';

const initialState = {
	year: new Date().getFullYear(),
	month: new Date().getMonth(),
	day: new Date().getDate()
};

function incrementMonth(state, action) {
	let { currentMonth } = action;
	let newMonth;
	let newYear;

	if ( currentMonth === 11 ) {
		newMonth = 0;
		newYear = state.year + 1;
	} else {
		newMonth = currentMonth += 1;
		newYear = state.year
	}
	return { ...state, month: newMonth, year: newYear}
}

export default function( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.INCREMENT_MONTH:
			return incrementMonth(state, action);

	}
	return state;
};

