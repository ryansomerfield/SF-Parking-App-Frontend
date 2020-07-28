import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="login-bg">
        <div className="login-container-full">
          <div className="login-container-clipped"></div>
          <div className="login-content-container">
            <div className="login-content-left">
              <div className="login-svg-container">
                <div className="login-app-logo"></div>
                <div className="login-app-text">Park App</div>
              </div>
            </div>
            <div className="login-content-right">
              <div className="login-info-container">
                <div className="login-text">Login with</div>
                <div className="login-text-strong">Social Media</div>
                <div className="login-button-container">
                  <div className="button-box">
                    <a
                      href={process.env.REACT_APP_BACKEND_URL + "auth/facebook"}
                      className="fb btn"
                      alt="Login with Facebook"
                    >
                      <i className="fa fa-facebook fa-fw"></i>
                    </a>
                    <div className="under-shadow"></div>
                  </div>
                  <div className="button-box">
                    <a
                      href={process.env.REACT_APP_BACKEND_URL + "auth/twitter"}
                      className="twitter btn"
                      alt="Login with Twitter"
                    >
                      <i className="fa fa-twitter fa-fw"></i>
                    </a>
                    <div className="under-shadow"></div>
                  </div>
                  <div className="button-box">
                    <a
                      href={process.env.REACT_APP_BACKEND_URL + "auth/google"}
                      className="google btn"
                      alt="Login with Google+"
                    >
                      <i className="fa fa-google fa-fw"></i>
                    </a>
                    <div className="under-shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
