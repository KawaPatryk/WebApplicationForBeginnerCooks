import React, {useState} from 'react';
import _ from 'lodash';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

const CreateRecipe = ({createRecipeHandler}) => {
    const [recipeName, setRecipeName] = useState('');
    const [description, setDescription] = useState('');
    const [steps, setSteps] = useState([''])
    const [ingredients, setIngredients] = useState([{id: '', quantity: 0}])

    const [redirectRender, setRedirectRender] = useState(false)

    const handleSubmit = () => {
        const newRecipe = {
            id: recipeName,
            description: description,
            steps: steps,
            ingredients: ingredients,
        }
        createRecipeHandler(newRecipe);
        setRedirectRender(true);
    }

    return (
        <div>
            {redirectRender && <Redirect to="/recipes" />}
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Recipe name</Form.Label>
                    <Form.Control type="text" placeholder="eg. pierogies with onion" onChange={(e) => setRecipeName(e.target.value)} value={recipeName} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} value={description} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Steps</Form.Label>
                    {
                        steps && steps.map((step, id) => {
                           return (
                            <Form.Control as="textarea" rows={3}
                            value={steps[id]}
                            onChange={(e) => {
                                const { target } = e
                                setSteps(prevState => {
                                    const newState = [...prevState]
                                    newState[id] = target.value
                                    return newState
                                })
                            }}
                            />
                           )
                        })
                    }
                    <Button variant="dark"
                        onClick={() => {
                            setSteps(prevState => {
                                return [...prevState, ""]
                            })
                        }}>
                        Add Step</Button>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Ingredients</Form.Label>
                    {
                        ingredients.map((elem, id) => {
                            return (
                                <Row>
                                    <Col>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" rows={3} value={elem.id}
                                        onChange={(e) => {
                                            const { target } = e
                                            setIngredients(prevState => {
                                                let newState = _.cloneDeep(prevState);
                                                newState[id].id = target.value;
                                                return newState;
                                            })
                                        }}
                                        />
                                    </Col>
                                    <Col>
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="number" rows={3}
                                        value={elem.quantity}
                                        onChange={(e) => {
                                            const { target } = e
                                            setIngredients(prevState => {
                                                let newState = _.cloneDeep(prevState);
                                                newState[id].quantity = target.value;
                                                return newState;
                                            })
                                        }}
                                        />
                                    </Col>
                                </Row>
                            )
                        })
                    }
                    <Button variant="dark"
                        onClick={
                            () => {
                                setIngredients(prevState => {
                                    return [...prevState, {id: '', quantity: 0}]
                                })
                            }
                        }>
                        Add Ingredient
                    </Button>
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Create Recipe
                </Button>
            </Form>

        </div>
    )
}

export default CreateRecipe;
