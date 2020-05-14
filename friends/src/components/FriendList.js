import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

const FriendList = () => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        setFriend(res.data);
      });
  }, []);

  return (
    <div>
      <FriendForm />
      <Friend friend={friend} />
    </div>
  );
};

export default FriendList;
