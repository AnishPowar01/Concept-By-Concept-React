import React from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Please Login</div>;
  }

  return (
    <h1>Welcome, {user}</h1>
   
  );
};

export default Profile;
