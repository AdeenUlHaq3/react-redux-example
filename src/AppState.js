import { combineReducers } from 'redux';
import friends from './containers/FriendList/reducer';
import selectedFriend from './containers/FriendDetails/reducer';

const AppState = combineReducers({
    friends,
    selectedFriend
})

export default AppState;