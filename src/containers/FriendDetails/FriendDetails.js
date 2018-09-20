import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

class FriendDetails extends Component {
    render() {
        const { friend } = this.props;
        if(!friend) {
            return <div className='initial-text'>Select any friend.</div>
        }
        return (
            <div className='friend-details'>
                <h1>Details for:</h1>
                <div>
                    Name: {friend.name} <br /><br />
                    Age: {friend.age}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        friend: state.selectedFriend
    };
}

export default connect(mapStateToProps)(FriendDetails);