import React, { useState, useEffect } from 'react'
import axios from '../axios'
import Page1Card from './Cards/Page1Card'

export default () => {


	const [loaded, setLoaded] = useState(false)
	const [apiData, setApiData] = useState({})


	useEffect(() => {

    
		axios.get('/days').then(({ data }) => {

        
			setApiData(data.data);

        
			setLoaded(true)

        
		})

    
	}, [setApiData])


	console.log(apiData)


	return loaded ? (
		<div className="cards1">
			{ apiData.map((obj, i) => (

				<Page1Card key={ i } id={ i } title={ obj.name } />

            
			)) }
		</div>
	) : (

    
        <div className="holder">

        </div>

        
		)

    
}