import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Login from "../components/form/index.js";
import Logged from "../components/logged/index.js";
import Register from "../components/register/index.js";

function Authenticator() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");

    if (!token) {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login setLoggedIn={setLoggedIn} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/logged">
          <Logged />
        </Route>
      </Switch>
    </>
  );
}

export default Authenticator;
