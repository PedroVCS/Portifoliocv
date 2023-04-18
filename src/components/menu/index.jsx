import React from "react";
import "./style.scss"

const Menu = () => {
    return(
        <nav className="Menu">
            <ul className="menuUl">
                <button  className="homeBt">Sobre</button>
                <button  className="homeBt">Curriculo</button>
                <button  className="homeBt">Projetos</button>
            </ul>
        </nav>
    );
}

export default Menu;    