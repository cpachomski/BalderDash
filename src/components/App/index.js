import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import App from './presenter.js';

function mapStateToProps(state) {
	const { calendar } = state.calendar;

	return {
		calendar
	}
};

function mapDispathToProps(dispatch) {
	return {
		incrementDay: bindActionCreators(actions.incrementDay, dispatch)
	}
}

export default connect(mapStateToProps, mapDispathToProps)(App);