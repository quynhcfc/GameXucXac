import React, { Component } from "react";
import "./css/game.css";
import bg_game from "../assets/GameXucXac/bgGame.png";
import KetQua from "./KetQua";
import GameXucXac from "./GameXucXac";
import ChucMung from "./ChucMung";

export default class GameXucXacRedux extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${bg_game})`,
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg_game"
      >
        <GameXucXac />
        <KetQua />
        <ChucMung />
      </div>
    );
  }
}
