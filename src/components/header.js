import React from "react";
import { Link } from "gatsby";
import LOGO_IMG from "../../static/logo.png";
import "../styles/header.scss";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={LOGO_IMG} className="logo" alt="logo"></img>
            </Link>
        </header>
    )
}

export default Header