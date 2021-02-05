import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/organisms";
import { Home, About, ContactUs } from "./components/pages";
import { ABOUT, CONTACT_US, HOME } from "./config";

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route component={About} path={ABOUT} exact />
          <Route component={ContactUs} path={CONTACT_US} exact />
          <Route path="/" exact component={Home} />
        </Switch>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
