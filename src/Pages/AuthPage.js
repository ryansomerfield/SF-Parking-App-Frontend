import React from "react";
import { withRouter, useParams, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../actions/isLogged";
import { setUser, clearUser } from "../actions/user";

const AuthPage = () => {
  let { userId } = useParams();
  const dispatch = useDispatch();
  let isLogged = useSelector((state) => state.user);
  (async () => {
    try {
      const userResponse = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}user/${userId}`,
        {
          method: "GET",
          credentials: "include",
        }
      ).then((res) => res.json());
      const user = userResponse[0];
      dispatch(setUser(user));
      dispatch(signIn());
    } catch (err) {
      dispatch(clearUser());
      dispatch(signOut());
      console.error(`There was a problem with sign in. ${err}`);
    }
  })();
  return <>{isLogged ? <Redirect to="/" /> : null}</>;
};

export default withRouter(AuthPage);
