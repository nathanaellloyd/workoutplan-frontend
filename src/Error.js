import React from 'react';
import bacteria from "./images/bacteria.jpg";


const Error = () => (
    <>
        <div className="PNFwrap">
            <img alt="bacteria" className="bacteria" src={bacteria} />
            <p className="pageNotFoundTitle">Page Not Found.</p>
            <p className="pageNotFoundText">If you believe this happened in error, please <a href="/">contact us</a></p>
        </div>
    </>
); 

export default Error;