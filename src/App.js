import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import { useSelector } from "react-redux";

const App = () => {
  let isLogged = useSelector((state) => state.isLogged);

  return (
    <BrowserRouter>
      <Switch>
        {!isLogged ? (
          <Route path="/auth/:userId">
            <AuthPage />
          </Route>
        ) : (
          ""
        )}
        <Route exact path="/">
          {isLogged ? <HomePage /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
