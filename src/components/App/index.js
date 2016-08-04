import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import App from './presenter.js';

function mapStateToProps(state) {
	const { day, month, year} = state.calendar;

	return {
		day,
		month,
		year
	}
};

export default connect(mapStateToProps)(App);