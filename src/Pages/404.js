import React from "react";
import { Link } from "react-router-dom";

const E404Page = () => {
  return (
    <>
      <h1>Error 404</h1>
      <h3>Page Not Found</h3>
      <p>
        <Link to="/">Go Back Home</Link>
      </p>
    </>
  );
};

export default E404Page;
