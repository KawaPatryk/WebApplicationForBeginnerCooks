import React, {useState} from 'react';

 const SelectIngredient = ({id ,checked ,checkboxHandler}) => {
    return(
        <div className="row">
            <div className="text-left col-8 offset-4">
                <label>
                    <input onClick={(e) =>{
                        e.persist();
                        console.log(e);
                        checkboxHandler(id, e.target.checked)}
                    }  checked={checked} type="checkbox"/>
                    <span> {id}</span>
                </label>
            </div>
        </div>
        
    )
};

export default SelectIngredient;