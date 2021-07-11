
import './App.css';
import Main from './Screen/Main';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AddForm from './Screen/AddForm';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" ><Main /></Route>
          <Route path="/add-user"><AddForm /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
