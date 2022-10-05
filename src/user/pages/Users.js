import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Tom Hanks",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
