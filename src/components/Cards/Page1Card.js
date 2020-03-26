import React from 'react';
import { Link } from 'react-router-dom';

const Page1Card = ({ title, id }) => (
    <>
        <div className='position'>
            <div className='page1card'>
                <Link to={`/days/${id+1}`}>
                    <div className='transition-top'>
                        <h2 className='day'>{title}</h2>
                    </div>
                    <div className='overlay'>
                        <h2 className='glow'>START</h2>
                    </div>
                </Link>
            </div>
        </div>
    </>
);

export default Page1Card;