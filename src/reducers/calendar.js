import * as actionTypes from '../constants/actionTypes';

const initialState = {
	year: new Date().getFullYear(),
	month: new Date().getMonth(),
	day: new Date().getDate()
};

function incrementDay(state, action) {
	return { ...state, day: state.day + 1}
}

export default function( state = initialState, action ) {
	switch(action.type) {
		case actionTypes.TEST:
			return incrementDay(state);

	}
	return state;
};

