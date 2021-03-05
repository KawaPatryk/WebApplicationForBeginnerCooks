import React, {useState} from "react";
import Filter from '../Filter/Filter'
import { qtyChange } from '../utils/utils'
import { Card, Button } from 'react-bootstrap';


const Fridge = ({ingredients, changeHandler}) => {
    const [filteredIngredients, setFilteredIngredients] = useState(ingredients);
    const [searchTerm, setSearchTerm] = useState("");

    const filterHandler = (elems, value) => {
        setFilteredIngredients(elems);
        setSearchTerm(value);
    }
    
    const handleChange = (id, type, value) => {
        setFilteredIngredients((prevState) => { 
            return qtyChange(prevState, id, type, value)
        })
        changeHandler(id, type, value)
    }


    return (
        <div className="row">
            
            <div className="col-4">
                <Filter collection={ingredients} filterHandler={filterHandler} searchTerm={searchTerm} labelText="Ingredients" />
            </div>
            <div className="row col-8">
                {filteredIngredients.map(elem => {
                    return (
                        <div className="col-3">
                            <Card>
                                <Card.Img variant="top" src={elem.img} />
                                <Card.Body>
                                    <p className="text-center row col-12">{elem.id}</p>
                                    <div className="row">
                                    <i className="bi-dash-square" style={{fontSize: '2rem', color: 'cornflowerblue'}} onClick={() => handleChange(elem.id, 'dec')}/>
                                    <input type="number" value={elem.quantity}
                                        onChange={(e) => handleChange(elem.id, 'input', e.target.value)} className="col-7"/>
                                    <i className="bi-plus-square" style={{fontSize: '2rem', color: 'cornflowerblue'}}  onClick={() => handleChange(elem.id, 'inc')}/>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Fridge;
