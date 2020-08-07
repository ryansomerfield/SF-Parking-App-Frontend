import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import ParkPage from "./Pages/ParkPage";
import ProfilePage from "./Pages/ProfilePage";
import AdminPage from "./Pages/AdminPage";
import HelpPage from "./Pages/HelpPage";
import LandingPage from "./Pages/LandingPage";
import E404 from "./Pages/404";
import { useSelector } from "react-redux";

const App = () => {
  let isLogged = useSelector((state) => state.isLogged);
  const user = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Switch>
        {!isLogged ? (
          <>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </>
        ) : (
          ""
        )}
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/park">
          <ParkPage />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        {user.admin ? (
          <Route exact path="/admin">
            <AdminPage />
          </Route>
        ) : (
          ""
        )}
        <Route exact path="/help">
          <HelpPage />
        </Route>
        <Route path="*">
          <E404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
