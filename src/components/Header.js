import React from "react";
import pulseline from "../images/pulseline.png";

const header = () => (
    <>
        <div className="bg">
            <header className="pagetop">
                <h1 className="covid">COVID</h1>
                <div className="flexed">
                    <img alt="pulse line" className="pulse" src={pulseline} />
                    <h1 className="fit">FIT</h1>
                </div>
            </header>
        </div>
    </>
);

export default header;