import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import NewForm from './presenter';

function mapStateToProps(state) {
	return {}
};

function mapDispathToProps(dispatch) {
	return {
		addNewTask: bindActionCreators(actions.addNewTask, dispatch)
	}
}

export default connect(mapStateToProps, mapDispathToProps)(NewForm);