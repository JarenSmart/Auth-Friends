import React from "react";

const Friend = (props) => {
  return (
    <div className="new-friend-wrapper">
      {props.friend.map((newFriend) => {
        return (
          <div className="friend-wrapper">
            <div className="friend-card">
              <h3>Name: {newFriend.name}</h3>
              <h3>Age: {newFriend.age}</h3>
              <h3>E-Mail: {newFriend.email}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Friend;
