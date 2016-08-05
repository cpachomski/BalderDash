import { combineReducers } from 'redux';
import calendar from './calendar';
import tasks from './tasks';

export default combineReducers({
	calendar,
	tasks
});