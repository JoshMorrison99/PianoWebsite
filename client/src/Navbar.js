import axios from "axios";
import React from "react";
import { useContext } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "./css/Navbar.css";
import logo from "./images/icon.png";
import UserContext from "./UserContext";
import Config from "./config.json";

function Navbar() {
  console.log("--> " + Config.ENV);
  const { user, setUser } = useContext(UserContext);
  console.log("user --> ", user);
  const logoutUser = async () => {
    console.log("exec");
    try {
      const response = await axios.get(
        Config.ENV === "development"
          ? "http://localhost:5000/api/logout"
          : Config.PRODUCTION_URL + "/api/logout",
        {
          withCredentials: true,
        }
      );
      window.location.href =
        Config.ENV === "development"
          ? "http://localhost:3000"
          : Config.PRODUCTION_URL;
      console.log("res ", response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ReactBootStrap.Navbar className="nav-bar p-0" variant="dark" expand="lg">
      <ReactBootStrap.Navbar.Brand className="pl-5" href="/">
        <img
          alt={logo}
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Prime Pianist
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="ml-auto">
          <ReactBootStrap.Nav.Link
            className="nav-link-header px-3 py-3"
            href="/about"
          >
            About/Contact
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link
            className="nav-link-header px-3 py-3"
            href="/leaderboards"
          >
            Leaderboards
          </ReactBootStrap.Nav.Link>
          {user === "" ? (
            <>
              <ReactBootStrap.Nav.Link
                className="nav-link-header px-3 py-3"
                href="/login"
              >
                Login
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link
                className="nav-link-header px-3 py-3 rightlink"
                href="/register"
              >
                Register
              </ReactBootStrap.Nav.Link>
            </>
          ) : (
            <>
              <ReactBootStrap.Nav.Link
                className="nav-link-header px-3 py-3"
                href={"/dashboard:" + user}
              >
                Dashboard
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link
                className="nav-link-header px-3 py-3 rightlink"
                onClick={() => logoutUser()}
              >
                Logout
              </ReactBootStrap.Nav.Link>
            </>
          )}
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  );
}

export default Navbar;
