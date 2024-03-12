import React from 'react';
import './bottle.css'
const Bottle = ({bottle}) => {
    const {name, price, img} = bottle;

    return (
        <div className='bottle'>
            <h2>Name: {name}</h2>
            <img src={img} alt="" />
            <h3>Price: ${price}</h3>
        </div>
    );
};

export default Bottle;