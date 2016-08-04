import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import App from './presenter.js';

function mapStateToProps(state) {
	const { day, calYear, calMonth } = state.calendar;
	return {
		day,
		calMonth,
		calYear
	}
};

function mapDispathToProps(dispatch) {
	return {
		incrementMonth: bindActionCreators(actions.incrementMonth, dispatch),
		decrementMonth: bindActionCreators(actions.decrementMonth, dispatch)
	}
}

export default connect(mapStateToProps, mapDispathToProps)(App);