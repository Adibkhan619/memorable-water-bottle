import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'


const Bottles = () => {

    const [bottles, setBottles] = useState([])

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data));
            
    }, [])

    return (
        <div >
            <div className='bottle-container'>
                {
                bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id}></Bottle>)
            }
            </div>
            
        </div>
    );
};

export default Bottles;