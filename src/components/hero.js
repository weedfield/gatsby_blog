import * as React from "react";
import "../styles/hero.scss";
import AVATOR from "../../static/avator.jpg"

const Hero = () => {
    return (
        <div className="hero"> 
            <h1 className="hero__text">
                This is my sample project!
            </h1>
            <div className="heroAuthor">
                <img src={AVATOR} className="heroAuthor__img" alt="avatar" />
                <p className="heroAuthor__text">
                    Written by Yuki.<br />
                    FrontEnd Engineer at NIJIBOX. 
                </p>
            </div>
        </div>
    )
}

export default Hero;