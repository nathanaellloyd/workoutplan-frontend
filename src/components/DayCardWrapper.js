import React, {useState} from 'react'
import axios from '../axios'
import Page1Card from './Cards/Page1Card'

export default () => {

    const [loaded,setLoaded] = useState(false)
    const [apiData,setApiData] = useState({})

    axios.get('/days').then(({data}) => {

        !loaded ? setApiData(data.data) : console.log('not loaded');

        setLoaded(true)

    })

    console.log(apiData)

    return loaded ? (

        apiData.map((obj,i) => (

            <Page1Card key={i} title={obj.name}/>
        
        ))

    ) : (

        <p>wait for it</p>

    )

}