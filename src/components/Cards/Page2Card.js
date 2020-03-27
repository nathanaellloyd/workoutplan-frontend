import React from 'react';

const Page2Card = ({ name,reps,description  }) => {

    return (
        <article className="exerciseCard">
            <header>
                <img alt="Someone exercising">{}</img>
                <h2>{name}</h2>
            </header>
            <h5>Sets: 4</h5>
            <h5>Reps: {reps}</h5>
            <p className="exerciseDescription">{description}</p>
        </article>
    )
}

export default Page2Card;