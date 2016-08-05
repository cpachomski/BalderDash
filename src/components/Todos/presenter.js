import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Todos from './presenter.js';

function mapStateToProps(state) {
	const {} = state.todos;
	return {
	}
};

function mapDispathToProps(dispatch) {
	return {
		incrementMonth: bindActionCreators(actions.incrementMonth, dispatch),
		decrementMonth: bindActionCreators(actions.decrementMonth, dispatch)
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Todos);