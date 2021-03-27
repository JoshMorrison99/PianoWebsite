import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tutorial from "./Tutorial";

function App() {
  return (
    
      <Router>
        <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/tutorial" component={Tutorial}/>
          </Switch>
        <Footer />
        </div>
      </Router>
    
  );
}

export default App;
