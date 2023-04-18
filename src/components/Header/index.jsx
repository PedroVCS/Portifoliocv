import Avatar from "../../assets/img/eu.jpg";
import React from "react";
import Menu from "../menu";
import "./style.scss";

const Header =  () => {
    return(
        <div className="headerCard">
          <div className="titleCard">
            <p>Olá, sou o</p>
            <h1>Pedro Victor</h1>
            <p className="twoTitle">Front-end Developer</p>
          </div>
          <img  src={Avatar} alt="Pedro victor" />
            <Menu />
        </div>
    );
}

export default Header;