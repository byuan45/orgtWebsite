import authReducer from './authReducer';
import meetingMinutesReducer from './meetingMinutesReducer';
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducer,
    meeting: meetingMinutesReducer
});

export default rootReducer