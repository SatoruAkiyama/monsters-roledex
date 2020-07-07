import React from "react";
import "./CardList.css";
import Card from "../card/Card";

const CardList = (props) => {
  const monsters = props.monsters.map((monster, i) => {
    return <Card key={i} monster={monster} />;
  });
  return <div className="card-list row">{monsters}</div>;
};

export default CardList;
