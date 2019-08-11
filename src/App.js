import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">

      <Router>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <a className="navbar-brand" href={"/"}> Stocker </a>
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/home/" className="nav-link"><i className="fas fa-home" /></Link>
            </li>

            <li className="nav-item">
              <Link to="/search/" className="nav-link"><i className="fas fa-search" /></Link>
            </li>

          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route exact path="/home/" component={Home} />
        <Route exact path="/search/" component={Search} />


      </Router>
    </div>

  );
}

export default App;
