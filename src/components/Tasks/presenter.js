import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Tasks from './presenter.js';

function mapStateToProps(state) {
	const {} = state.Tasks;
	return {
	}
};

function mapDispathToProps(dispatch) {
	return {
		incrementMonth: bindActionCreators(actions.incrementMonth, dispatch),
		decrementMonth: bindActionCreators(actions.decrementMonth, dispatch)
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Tasks);