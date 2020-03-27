import React, { useState } from 'react';
import axios from '../axios';
import Page2Card from './Cards/Page2Card'
import { Link } from 'react-router-dom';

export default ({ day }) => {

    const [loaded, setLoaded] = useState(false)
    const [apiData, setApiData] = useState({})

    axios.get(`/days/${day}`).then(({ data }) => {

        !loaded ? setApiData(data.data.exercises) : console.log('loaded');

        setLoaded(true)

    })

    console.log(apiData)

    return loaded ? (
        <>
            <div className="exerciseCardWrapper">
                {apiData.map((obj, i) => (

                    <Page2Card
                        key={i}
                        name={obj.exerciseName}
                        reps={obj.exerciseRepititions}
                        description={obj.exerciseDescription}
                        url={obj.exerciseImageURL}
                    />

                ))}
            </div>
            <div className="doneButtonPosition">
                <Link to="/" className="doneButton">DONE</Link>
            </div>
        </>
    ) : (

            <p>wait for it</p>

        )

}