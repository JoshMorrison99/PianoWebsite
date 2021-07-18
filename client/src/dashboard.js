import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "./css/Dashboard.css";
import SongCard from "./SongCard";
import Config from "./config.json";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [level, setLevel] = useState(0);
  const [exp, setExp] = useState("");
  const [money, setMoney] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const GetUserInfo = async () => {
      try {
        const me = await axios.get(
          Config.ENV === "development"
            ? "http://localhost:5000/api/me"
            : Config.PRODUCTION_URL + "/api/me",
          {
            withCredentials: true,
          }
        );
        const data = me.data;
        setUsername(data.username);
        setLevel(data.level);
        setExp(data.exp);
        setMoney(data.money);
        setSongs(data.songs);
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
      <Row>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Highscore</th>
              <th>Plays</th>
              <th>Stars</th>
              <th>Notes Hit</th>
              <th>Total Notes</th>
              <th>Percentage</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, i) => {
              return (
                <SongCard
                  key={i}
                  title={song.title}
                  author={song.author}
                  highscore={song.highscore}
                  plays={song.plays}
                  stars={song.stars}
                  notesHit={song.notesHit}
                  totalNotes={song.totalNotes}
                  percentage={song.percentage}
                  difficulty={song.difficulty}
                />
              );
            })}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Dashboard;
