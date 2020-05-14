import React, { useState } from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

const FriendForm = () => {
  const [addFriend, setAddFriend] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", addFriend)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("Here is your error: ", err))
      .finally(() => window.location.reload());
  };

  const changeHandler = (e) => {
    setAddFriend({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        onChange={changeHandler}
        value={addFriend.name}
        placeholder="Name..."
      />
      <input
        type="number"
        name="age"
        onChange={changeHandler}
        value={addFriend.age}
        placeholder="Age..."
      />
      <input
        type="email"
        name="email"
        onChange={changeHandler}
        value={addFriend.email}
        placeholder="E-mail..."
      />
      <button>Add Friend!</button>
    </form>
  );
};

export default FriendForm;
