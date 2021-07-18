import React from "react";

const LeaderboardCard = (props) => {
  return (
    <tr>
      <td>{props.position}</td>
      <td>{props.username}</td>
      <td>{props.level}</td>
      <td>{props.money}</td>
    </tr>
  );
};

export default LeaderboardCard;
