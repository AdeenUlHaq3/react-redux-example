import { combineReducers } from 'redux';
import friends from './containers/FriendList/reducer';

const AppState = combineReducers({
    friends
})

export default AppState;