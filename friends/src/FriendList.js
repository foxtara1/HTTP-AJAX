import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const Wrapper = styled.div
    `display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    color: rgba(0,0,0,0.7);
    margin: 1rem;
    padding: 1rem;
    min-width: 15rem;`

function FriendList(props) {
    return (
        <ul>
        {props.friends.map(friend => {
          return (
            <Wrapper key={friend.id}>
                <li>
                {friend.name}
                </li>
                <li>
                    {friend.age}
                </li>
                <li>
                    {friend.email}
                </li>
                <button
                    onClick={() => {
                    props.onDelete(friend.id);
                    }}>
                    Delete
                </button>
            </Wrapper>
          );
        })}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

FriendList.defaultProps = {
    friends: [],
};

export default FriendList;