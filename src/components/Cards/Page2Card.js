import React, { useState } from 'react';

const Page2Card = ({ day }) => {

    return (
                <article className="exerciseCard">
                    <header>
                        <img>{}</img>
                        <h2>{}</h2>
                    </header>
                    <h4>Sets: {}</h4>
                    <h4>Reps: {}</h4>
                    <p>{}</p>
                </article>
    )
}

export default Page2Card;