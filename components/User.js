import React from "react";
import { data } from "@/data/datas";
import Profile from "./Profile";

const User = () => {
  return (
    <>
      <div>
        {data.map((user) => {
          return <Profile user={user} key={user.id} />;
        })}
      </div>
    </>
  );
};

export default User;
