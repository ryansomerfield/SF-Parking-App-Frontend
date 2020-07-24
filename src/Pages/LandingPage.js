import React, { useState, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn, logOut } from "../actions/isLogged";
import { setUser, clearUser } from "../actions/user";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  let location = useLocation();
  const redirectPath = location.pathname;
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
            dispatch(setUser(user[0]));
            dispatch(logIn());
          } else {
            const error = new Error(res.error);
            throw error;
          }
        });
      } catch (err) {
        setLoading(false);
        setRedirect(true);
        dispatch(clearUser());
        dispatch(logOut());
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
  return location.pathname === "/auth/" ? (
    <Redirect to="/" />
  ) : (
    <Redirect to={redirectPath} />
  );
};

export default LandingPage;
