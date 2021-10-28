import React from "react";
import "./App.css";
import Navbar from "./Components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;