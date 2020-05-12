import React from "react";

const Friend = (props) => {
  return (
    <div className="new-friend-wrapper">
      {props.friend.map((newFriend) => {
        return (
          <div>
            <h3>{newFriend.name}</h3>
            <h3>{newFriend.age}</h3>
            <h3>{newFriend.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Friend;
