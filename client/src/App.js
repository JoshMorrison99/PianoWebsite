import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tutorial from "./Tutorial";
import Logs from "./Logs";

function App() {
  return (
    
      <Router>
        <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/tutorial" component={Tutorial}/>
            <Route path="/logs" component={Logs}/>
          </Switch>
        <Footer />
        </div>
      </Router>
    
  );
}

export default App;