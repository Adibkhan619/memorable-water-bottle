import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Bottle from '../Bottle/Bottle';
import './bottles.css'
import { addToLS } from '../../utilities/localStorage';


const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    }, [])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    return (
        <div >
            <h2>Bottle Available: {bottles.length}</h2>
            <h3>Cart: {cart.length}</h3>
            <ul>
                {cart.map(cart => <li key={cart.id}>{cart.name}</li>)}
            </ul>
            <div className='bottle-container'>
                {              
               bottles.map(bottle => <Bottle
                        bottle={bottle}
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;