import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/Dashboard.css";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState(0);
  const [exp, setExp] = useState("");
  const [money, setMoney] = useState("");

  useEffect(() => {
    const GetUserInfo = async () => {
      try {
        const me = await axios.get("http://localhost:5000/api/me", {
          withCredentials: true,
        });
        const data = me.data;
        setUsername(data.username);
        setLevel(data.level);
        setExp(data.exp);
        setMoney(data.money);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    GetUserInfo();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1 className="text mb-0">{username}</h1>
          <h4 className="text">{"Level " + level}</h4>
        </Col>
        <Col>
          <h4 className="text">{"Total Notes Hit " + money}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
