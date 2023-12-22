import React from "react";
import "./WebPage.css";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mypics from "./Asset/IMG_4.PNG";

const WebPage = ({ onclick, onshow, changeTheme }) => {
  let themeText = "Dark Mode";
  if (!changeTheme) {
    themeText = "Color Mode";
  }
  return (
    <div className="container">
      <div className="li_Div">
        <ul className="ul">
          <li className="mo">MO</li>
          <li>
            <i>
              <FontAwesomeIcon
                className="icon"
                onClick={onclick}
                style={{ color: "white" }}
                icon={faLightbulb}
              />
              <span className="clickme">{themeText}</span>
            </i>
          </li>
        </ul>
      </div>
      <div className="welcomeText-div">
        <p className="welcomeText">You are welcome to my Page</p>
      </div>
      <div className="div_2">
        <div className="name_Div">
          <div className="imageContainer">
            <img src={mypics} alt="mypicture" className="myimage" />
          </div>
          <div className="name">
            <p className="olasode">Mubarak Olasode:MO</p>
          </div>
        </div>
        <div class="href_Div">
          <div className="sub_href">
            <p className="a" onClick={onshow}>
              My Profile
            </p>
            <a className="c" href="https://github.com/B-Alpha-com">
              Github
            </a>
            <a className="c" href="https://github.com/mubarakolasode">
              Github2
            </a>
            <a className="b" href="https://twitter.com/OlasodeM">
              Twitter
            </a>
            <a className="e" href="www.twitter.com">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPage;
