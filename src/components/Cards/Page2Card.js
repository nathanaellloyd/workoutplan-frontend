import React from 'react';

const Page2Card = ({ name,reps,description  }) => {

    return (
        <article className="exerciseCard">
            <header>
                <img alt="Someone exercising">{}</img>
                <h2>{name}</h2>
            </header>
            <h4>Sets: 4</h4>
            <h4>Reps: {reps}</h4>
            <p>{description}</p>
        </article>
    )
}

export default Page2Card;