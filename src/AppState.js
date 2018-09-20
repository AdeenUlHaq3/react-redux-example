import { combineReducers } from 'redux';
import friends from './components/FriendList/reducer';

const AppState = combineReducers({
    friends
})

export default AppState;