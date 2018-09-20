import React, { Component } from 'react';
import { connect } from 'react-redux';

class FriendList extends Component {
    
    renderFriendsList() {
        return this.props.friends.map(friend => <li key={friend.name}>{friend.name}</li>)
    }

    render() {
        return(
            <ul>
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

export default connect(mapStateToProps)(FriendList);