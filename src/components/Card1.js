import React from 'react';

const Card1 = () =>  (
<div className="col-md-6 mt-4">
    <div className="card text-center">
        <h5 className="card-header"></h5>
        <div className="card-body">
        <img src="./images/card1" alt="example img"/>
        <p className="card-text display-1">Day 1</p>
        </div>
        <div className="card-footer">
            <button className="form-control btn btn-success">Start</button>
        </div>
    </div>
</div> 
)

export default Card1;