import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NoMatch from "./containers/NoMatch/NoMatch";
import Search from "./containers/Search/Search";
import Saved from "./containers/Saved/Saved";
import Nav from "./containers/Nav/Nav";

function App() {
  useEffect(() => {
    axios
      .get("/api/config")
      .then((response) => {
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
