import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import ParkPage from "./Pages/ParkPage";
import CarsPage from "./Pages/MyCarsPage";
import LandingPage from "./Pages/LandingPage";
import E404 from "./Pages/404";
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
        <Route exact path="/cars">
          <CarsPage />
        </Route>

        <Route path="*">
          <E404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
