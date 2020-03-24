import React from "react";
import pulseline from "./images/pulseline.png";

const header = () => (
    <>
        <div className="bg">
            <header>
                <h1>CORONA CARDIO</h1>
                <div className="flexed">
                    <img className="pulse" src={pulseline} />
                    <h1>ROUTINE</h1>
                    <img className="pulse" src={pulseline} />
                </div>
            </header>
        </div>
    </>
);

export default header;