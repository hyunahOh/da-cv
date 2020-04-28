import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;