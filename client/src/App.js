import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home.js";

export default function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/home" component={(props) => <Home {...props} />} />
      </Switch>
    </main>
  );
}
