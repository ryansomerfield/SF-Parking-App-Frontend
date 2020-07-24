import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <h1>Welcome, {user.firstName ? user.firstName : user.displayName}!</h1>
    </>
  );
};

export default HomePage;
