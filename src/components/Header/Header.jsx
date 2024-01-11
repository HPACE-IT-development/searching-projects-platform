import React from "react";

import {Link} from "react-router-dom";
import {Routes} from "../../Utils/Routes";
import LOGO from "../../Images/logo_blue.png";


const Header = () => {
    return (
        <div className="Header">
            <div className="Home">
                <Link to={Routes.HOME}>
                    <img className="img" src={LOGO} alt="HPACE"/>
                </Link>
            </div>
            <div className="Container">
                <form className="Container-inner">
                    <input className="Search"
                        id="Search"
                        type="text"
                        name="Search"
                        placeholder="Введите запрос"
                        autoComplete="off"
                        onChange={() => {}}
                    />
                    <button className="Search-button" type="submit">
                        <span className="material-symbols-outlined">
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                            Search
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Header;