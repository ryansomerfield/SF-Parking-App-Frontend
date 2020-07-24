import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
          <>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="/">
              <AuthPage />
            </Route>
          </>
        ) : (
          ""
        )}
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
