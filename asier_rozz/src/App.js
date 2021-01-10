import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Style/App.css';
import './Style/Navegacion.css';
import Navigacion from './components/Navigacion';
import Home from './components/Home'
import Music from './components/Music'
import About from './components/About'


function App() {
  return (
    <Router >
      <div className={"site-content"}>
        <Navigacion />

        <Route path="/" exact component={Home} />
        <Route path="/music/" component={Music} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}

export default App;
