import React from "react";
import "./style.scss"

const Menu = () => {
    return(
        <nav className="Menu">
            <ul className="menuUl">
                <button href="/" className="Link">Sobre</button>
                <button href="/" >Curriculo</button>
                <button href="/" >Projetos</button>
            </ul>
        </nav>
    );
}

export default Menu;    