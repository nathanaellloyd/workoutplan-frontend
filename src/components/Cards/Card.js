import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title }) => (
    <>
        <div className='position'>
            <div className='card'>
                <Link to='/day1'>
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

export default Card;