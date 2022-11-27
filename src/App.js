import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import page404 from "./pages/404";
import AnonymousPage from "./pages/AnonymousPage";
import { Auth } from "./api/auth";
import UserContext from "./contexts/UserContext";

function App() {
  const [login, setLogin] = useState({});

  const handleLogin = (login) => {
    setLogin(login);
  };

  const handleLogout = () => {
    setLogin({});
  };

  window.onmessage = ({ data: { action } }) => {
    if (action === "bb-request-logout") {
      new Auth().delete();
      handleLogout();
    }
  };

  if (login.valid && window.location.hostname !== "localhost" && window.gtag) {
    window.gtag("event", `${window.location.pathname} ${login.code}`);
  }

  return (
    <>
      <UserContext.Provider value={login}>
        {login.valid ? (
          <Router>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/"}`}
                component={Home}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL + "/rsvp"}`}
                component={Portfolio}
              />
              <Route exact component={page404} />
            </Switch>
          </Router>
        ) : (
          <AnonymousPage onLogin={handleLogin} />
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
