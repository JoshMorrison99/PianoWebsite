import React from "react";

const SongCard = (props) => {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.highscore}</td>
      <td>{props.plays}</td>
      <td>{props.stars}</td>
      <td>{props.notesHit}</td>
      <td>{props.totalNotes}</td>
      <td>{props.percentage}</td>
      <td>{props.difficulty}</td>
    </tr>
  );
};

export default SongCard;
