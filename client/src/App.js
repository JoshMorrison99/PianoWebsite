import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Tutorial from "./Tutorial";
import Logs from "./Logs";
import Login from "./Login";
import Register from "./Register";
import UserContext from "./UserContext";
import { useEffect } from "react";
import axios from "axios";
import Dashboard from "./dashboard";
import Leaderboards from "./Leaderboards";
import Config from "./config.json";
import Gym from "./Gym.js";

function App() {
  const [user, setUser] = useState("");
  console.log("-------------------> ", user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          Config.ENV === "development"
            ? "http://localhost:5000/api/me"
            : Config.PRODUCTION_URL + "/api/me",
          {
            withCredentials: true,
          }
        );
        setUser(response.data._id);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/logs" component={Logs} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/dashboard:id" exact component={Dashboard} />
            <Route path="/leaderboards" exact component={Leaderboards} />
            <Route path="/gym" exact component={Gym} />
          </Switch>
          <Footer />
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
