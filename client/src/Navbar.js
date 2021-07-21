import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./css/Navbar.css";
import logo from "./images/icon.png";
import UserContext from "./UserContext";
import Config from "./config.json";

const MyNavbar = () => {
  const { user, setUser } = useContext(UserContext);
  const logoutUser = async () => {
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Navbar className="nav-bar p-0" variant="dark" bg="dark" expand="lg">
      <Navbar.Brand className="pl-5" href="/">
        <img
          alt={logo}
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Prime Pianist
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="nav-link-header px-3 py-3" href="/about">
            About/Contact
          </Nav.Link>
          <Nav.Link className="nav-link-header px-3 py-3" href="/leaderboards">
            Leaderboards
          </Nav.Link>
          {user === "" ? (
            <>
              <Nav.Link className="nav-link-header px-3 py-3" href="/login">
                Login
              </Nav.Link>
              <Nav.Link
                className="nav-link-header px-3 py-3 rightlink"
                href="/register"
              >
                Register
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                className="nav-link-header px-3 py-3"
                href={"/dashboard:" + user}
              >
                Dashboard
              </Nav.Link>
              <Nav.Link
                className="nav-link-header px-3 py-3 rightlink"
                onClick={() => logoutUser()}
              >
                Logout
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
