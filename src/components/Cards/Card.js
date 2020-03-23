import React from 'react';
import virus from '../images/virus.jpg';

const Card = ({ title }) => (
    <div className="col-md-6 mt-4">
        <div className="card text-center">
            <h5 className="card-header"></h5>
            <div className="card-body">
                <img src={ virus } alt="virus" />
                <p className="title">{ title }</p>
            </div>
            <div className="card-footer">
                <a href="">
                    <button className="start-button">Start</button>
                </a>
            </div>
        </div>
    </div>
)

export default Card;