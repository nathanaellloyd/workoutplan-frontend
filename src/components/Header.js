import React from "react";
import pulseline from "./images/pulseline.png";

const header = () => (
    <>
        <div className="bg">
            <header>
                <h1 className="covid">COVID</h1>
                <div className="flexed">
                    <img className="pulse" src={pulseline} />
                    <h1 className="fit">Fit</h1>
                </div>
            </header>
        </div>
    </>
);

export default header;