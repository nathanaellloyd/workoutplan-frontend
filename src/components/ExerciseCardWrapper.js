import React, {useState} from 'react';
import axios from '../axios';
import Page2Card from './Cards/Page2Card'

export default ({day}) => {

    const [loaded,setLoaded] = useState(false)
    const [apiData,setApiData] = useState({})

    axios.get(`/days/${day}`).then(({data}) => {

        !loaded ? setApiData(data.data.exercises) : console.log('loaded');

        setLoaded(true)

    })

    console.log(apiData)

    return loaded ? (
        <div className="exerciseCardWrapper">
            { apiData.map((obj,i) => (

                <Page2Card 
                    key={i} 
                    name={obj.exerciseName} 
                    reps={obj.exerciseRepititions}
                    description={obj.exerciseDescription}
                />
            
            ))}
        </div>

    ) : (

        <p>wait for it</p>

    )

}