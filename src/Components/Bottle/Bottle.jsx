import React from 'react';
import './bottle.css'


const Bottle = ({bottle , handleAddToCart}) => {
    const {name, price, img} = bottle;

    return (
        <div className='bottle'>
            <h2>{name}</h2>
            <img src={img} alt="" />
            <h3>Price: ${price}</h3>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;