import React from 'react';
import seinfeld from "./images/seinfeld.jpg";
import theme from './audio/seinfeld.mp3';


const Error = () => (
    <>
        <div className="PNFwrap">
            <img alt="Jerry" className="jerry" src={seinfeld} />
            <p className="pageNotFoundTitle">"What's the <i>deal</i> with all these errors?!"</p>
            <p className="pageNotFoundText"><a href="/">Back Up</a></p>
            <audio src={theme} controls autoplay></audio>
        </div>
    </>
); 

export default Error;