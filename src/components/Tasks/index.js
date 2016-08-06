import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Tasks from './presenter';

function mapStateToProps(state) {
	const { tasks } = state.tasks;
	return { tasks } 
};

function mapDispathToProps(dispatch) {
	return {
	}
}

export default connect(mapStateToProps, mapDispathToProps)(Tasks);

