import React from "react";
import Landingpage from "./pages/landingpage";
import Careerspage from "./pages/careerspage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <Route exact path="/careers">
            <Careerspage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
