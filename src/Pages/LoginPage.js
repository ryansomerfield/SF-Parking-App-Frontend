import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="align-center">Login with Social Media</h2>
          <div className="vl"></div>

          <div className="col">
            <div className="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>
          </div>

          <div className="col">
            <a
              href={process.env.REACT_APP_BACKEND_URL + "auth/facebook"}
              className="fb btn"
            >
              <i className="fa fa-facebook fa-fw"></i> Login with Facebook
            </a>
            <a
              href={process.env.REACT_APP_BACKEND_URL + "auth/twitter"}
              className="twitter btn"
            >
              <i className="fa fa-twitter fa-fw"></i> Login with Twitter
            </a>
            <a
              href={process.env.REACT_APP_BACKEND_URL + "auth/google"}
              className="google btn"
            >
              <i className="fa fa-google fa-fw"></i> Login with Google+
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
