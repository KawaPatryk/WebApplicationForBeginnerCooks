import React, {useState} from 'react';
import _ from 'lodash';
import './Filter.css'

const Filter = ({collection, filterHandler, searchTerm, labelText}) => {

    const filterElems = value => {

       
        const filteredElems = collection.filter((elem => {
            return elem.id.toLowerCase().includes(value.toLowerCase())
        }))
        filterHandler(filteredElems, value);
    }

    return (
        <div>
            <div>
                <label className="text-left row"><h5 className="col-4">{labelText}:</h5> <input
                    type="text"
                    className="col-8"
                    placeholder={labelText === 'Ingredients' ? 'filter ingredients' : 'filter recipes'}
                    value={searchTerm}
                    onChange={(e) => filterElems(e.target.value)}
                /></label>
            </div>

        </div>
    )
}

export default Filter;
