import React from "react";
import Home from "./home";
import About from "./about";
import Work from "./work";
import Contact from "./contact";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/work" component={Work} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;
