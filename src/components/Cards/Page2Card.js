import React from 'react';

const Page2Card = ({ name, exerciseRepetitions, description, url }) => {

    return (
        <article className="exerciseCard">
            <header>
                <img alt="Someone exercising" src={`${process.env.PUBLIC_URL}/${url}`} />
                <h2>{name}</h2>
            </header>
            <h5>Sets: 4</h5>
            <h5>Reps: {exerciseRepetitions}</h5>
            <p className="exerciseDescription">{description}</p>
        </article>
    )
}

export default Page2Card;