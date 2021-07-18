import React from "react";
import LeaderboardCard from "./LeaderboardCard";
import { Table, Container } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Config from "./config.json";

const Leaderboards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const GetTopTenUsers = async () => {
      try {
        const response = await axios.get(
          Config.ENV === "development"
            ? "http://localhost:5000/api/topten"
            : Config.PRODUCTION_URL + "/api/topten"
        );
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    GetTopTenUsers();
  }, []);

  return (
    <Container className="mt-4 pt-4">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Position</th>
            <th>Username</th>
            <th>Level</th>
            <th>Total Notes Hit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            return (
              <LeaderboardCard
                key={i}
                position={i + 1}
                id={user.id}
                username={user.username}
                level={user.level}
                money={user.money}
              />
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Leaderboards;
