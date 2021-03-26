import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Download from './Download';
import Navbar from "./Navbar";

function App() {
  return (
    
      <Router>
        <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/download" component={Download}/>
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
