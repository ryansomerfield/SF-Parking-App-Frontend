import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../actions/isLogged";
import { setUser, clearUser } from "../actions/user";

const AuthPage = () => {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        await fetch(`${process.env.REACT_APP_BACKEND_URL}user/me`, {
          method: "GET",
          credentials: "include",
        }).then(async (res) => {
          if (res.status === 200) {
            setLoading(false);
            const user = await res.json();
            console.log(user);
            dispatch(setUser(user[0]));
            dispatch(logIn());
          } else {
            console.log(res.status);
            // const error = new Error(userResponse.error);
            // throw error;
          }
        });
      } catch (err) {
        setLoading(false);
        setRedirect(true);
        dispatch(clearUser());
        dispatch(logOut());
        console.error(`There was a problem with sign in. ${err}`);
      }
    }
    fetchData();
  }, [dispatch]);
  if (loading) {
    return null;
  }
  if (redirect) {
    return <Redirect to="/login" />;
  }
  return <Redirect to="/" />;
};

export default withRouter(AuthPage);
