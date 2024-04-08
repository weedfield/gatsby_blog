import React from "react";
import { Link } from "gatsby";
import LOGO_IMG from "../../static/logo.png";
import "../styles/header.scss";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                <img src={LOGO_IMG} className="header__logo" alt="logo" />
                <h1 className="header__text">Sample Blog</h1>
            </Link>
        </header>
    )
}

export default Header