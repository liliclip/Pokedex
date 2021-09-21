import Dashboard from "./Components/Dashboard/Dashboard";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/wall">
            <div className="App"></div>
          </Route>

          <Route path="/Dashboard">
            <div className="Dashboard">
              <Dashboard />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
