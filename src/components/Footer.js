import React from 'react';
import facebook from "../icons/facebook.png"; 
import insta from "../icons/insta.png"; 
import youtube from "../icons/youtube.png"; 
import twitter from "../icons/twitter.png"; 


const Footer = () => (
    <>
        <footer>
            <p>a Team A production @ 2020</p>
            <div class="icons">
            <a href='#' class="icon" >
                <img src={facebook} link="" alt="facebookwidget" width="100%"  class="icon" />
            </a>
            <a href='#' class="icon" >
                <img src={twitter} link="" alt="twitterwidget" width="100%"  class="icon" />
            </a>
            <a href='#' class="icon" >
                <img src={insta} link="" alt="instagramwidget" width="100%"  class="icon" />
            </a>
            <a href='#' class="icon" >
                <img src={youtube} link="" alt="youtubewidget" width="100%"  class="icon" />
            </a>
            </div>
        </footer>
    </>
);

export default Footer;