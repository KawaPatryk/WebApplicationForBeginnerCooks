import React from 'react';
import './Ingredient.css'

const Ingredient =  ({id, quantity, measure, calories}) => {
    return (
        <div className="Ingredient">
            <span>{id} </span>
            <span>{quantity} </span>
            <span>{measure} </span>
            <span>{calories} </span>
        </div>
    )
}

export default Ingredient;
