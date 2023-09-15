import React from "react";
import User from "./User";

const Profile = (props) => {
  const { user } = props;

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.text}</p>
      <p>{user.descrtption}</p>
    </div>
  );
};

export default Profile;
