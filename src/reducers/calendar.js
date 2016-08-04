import * as actionTypes from '../constants/actionTypes';

const initialState = {
	year: new Date().getFullYear(),
	month: new Date().getMonth(),
	day: new Date().getDate(),
	calMonth: new Date().getMonth(),
	calYear: new Date().getFullYear()
};

function incrementMonth(state, action) {
	let { calMonth } = action;
	let newMonth;
	let newYear;

	if ( calMonth === 11 ) {
		newMonth = 0;
		newYear = state.calYear + 1;
	} else {
		newMonth = state.calMonth += 1;
		newYear = state.calYear;
	}
	return { ...state, calMonth: newMonth, year: newYear }
}

function decrementMonth(state, action) {
	let { calMonth } = action;
	let newMonth;
	let newYear;

	if ( currentMonth === 0 ) {
		newMonth = 11;
		newYear = state.calYear - 1;
	} else {
		newMonth = state.calMonth -= 1;
		newYear = state.calYear;
	}

	return { ...state, calMonth: newMonth, calYear: newYear }
}

export default function( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.INCREMENT_MONTH:
			return incrementMonth(state, action);
		case actionTypes.DECREMENT_MONTH:
			return decrementMonth(state, action);

	}

	return state;
};

