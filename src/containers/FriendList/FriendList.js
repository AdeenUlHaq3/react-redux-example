import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import selectedFriend from './actions';
import { bindActionCreators } from 'redux';

class FriendList extends Component {
    renderFriendsList() {
        const { friends, selectedFriend } = this.props;
        return friends.map(friend => <li 
            key={friend.name} 
            onClick={ () => selectedFriend(friend) }>
            {friend.name}
            </li>)
    }

    render() {
        return (
            <ul className='friends-list'>
                <h1>My Friends</h1>
                {this.renderFriendsList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        friends: state.friends
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedFriend }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendList);