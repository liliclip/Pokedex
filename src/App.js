import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Cart from "./Components/CartPokemon/Cart";
import "./App.css";
import Detail from "./Components/Detail/Detail";
//import PokedexBoard from "./Components/Pokedex/PokedexBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/wall">
            <div className="App"></div>
          </Route>

          <Route path="/dashboard">
            <div className="Dashboard">
              <Dashboard />
            </div>
          </Route>

          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>

          <Route path="/detail/:id">
            <div className="detail">
              <Detail modeMockApi  />
            </div>
          </Route>
          <Route path="/cart">
            <div className="Cart">
              <Cart />
            </div>
          </Route>
          <Route path="/pokedex">
            <div className="pokedex">
              <Dashboard modeMockApi />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
