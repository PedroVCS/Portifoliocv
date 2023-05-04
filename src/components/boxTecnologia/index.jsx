import React from 'react'
import "./style.scss";

import htmlImg from "../../assets/img/imgCaixaInf/html.png";
import nodeImg from "../../assets/img/imgCaixaInf/node.png";
import reactImg from "../../assets/img/imgCaixaInf/Rectangle15.png";
import sassImg from "../../assets/img/imgCaixaInf/Rectangle16.png";

function boxTec() {
  return (
    <div className='boximg'>
    <img  src={htmlImg} alt="html imagem" />
    <img  src={nodeImg} alt="node icon" />
    <img  src={reactImg} alt="react icon" />
    <img  src={sassImg} alt="sasas icon" />
    </div>
  )
}

export default boxTec

