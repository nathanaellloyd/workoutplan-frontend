import React from "react";
import linked from "../icons/linkedin-in2.png";
import insta from "../icons/instagram2.png";
import youtube from "../icons/youtube2.png";
import twitter from "../icons/twitter2.png";

const Footer = () => (
  <>
    <footer>
      <p className="teama">TEAM-A</p>
      <span className="date"> &copy; 2020</span>
      <span className="rights">
        <i> All rights reserved</i>
      </span>
      <p className="rights">Powered by: The Will of the Gods</p>
      <div className="icons">
        <a href="/" className="icon">
          <img
            src={linked}
            link=""
            alt="linkedinwidget"
            width="100%"
            className="icon"
          />
        </a>
        <a href="/" className="icon">
          <img
            src={twitter}
            link=""
            alt="twitterwidget"
            width="100%"
            className="icon"
          />
        </a>
        <a href="/" className="icon">
          <img
            src={insta}
            link=""
            alt="instagramwidget"
            width="100%"
            className="icon"
          />
        </a>
        <a href="/" className="icon">
          <img
            src={youtube}
            link=""
            alt="youtubewidget"
            width="100%"
            className="icon"
          />
        </a>
      </div>
    </footer>
  </>
);

export default Footer;
