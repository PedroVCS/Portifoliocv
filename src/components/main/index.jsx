
import React from "react";
import "./style.scss";
import Header from '../Header';

const Main = () => {
    return(
    <div className="main1"> 
        <Header />
    <div className="boxInf"> 
        <article className="inf">
            <h1>São Paulo</h1>
            <p>04/02/1996</p> 
        </article>
        <aside className='infomacaoPessoal'>
            <div className="box">
            
            </div>

            <div className="box1">
            <h1>Sobre</h1>
            <p>ola meu nome e pedro</p>
            </div>

        </aside> 
    </div>   
    </div>
    );
}

export default Main;    