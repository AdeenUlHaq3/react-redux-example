import React, { Component } from 'react';
import FriendList from './containers/FriendList/FriendList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppState from './AppState';
const store = createStore(AppState);

class App extends Component {
  
  render() {
    return (
      <Provider store={ store }>
        <FriendList />
      </Provider>
    );
  }
}

export default App;
