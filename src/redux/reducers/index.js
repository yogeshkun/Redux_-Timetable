import {combineReducers} from 'redux';
import {showweekdays,showtimetable} from './Reducer';

const reducers = combineReducers({
    showweekdays : showweekdays,
    showtimetable:showtimetable,
})
export default reducers