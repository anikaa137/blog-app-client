import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/components/Home/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
        </Switch>

    </Router>
    </div>
  );
}

export default App;
