import React from 'react';
import {Button, Modal, Image, Row, Col} from 'react-bootstrap';

const RecipeDetailedView = ({recipe, ingredientsRemoveHandler, handleClose}) => {
    const {id, ingredients, description, steps, img, favorites} = recipe;
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{id}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row style={{marginBottom: '20px'}}>
                    <Col xs={5}>
                        <Image src={img} fluid />
                    </Col>
                    <Col xs={7}>
                        {description}
                    </Col>
                </Row>
                <Row>
                    <Col xs={5}>
                        <h5>Ingredients</h5>
                        <div className="row">
                        {ingredients.map(ingredient => {
                            return (
                                <div className="col-6" style={{marginTop: '20px'}}> 
                                    <strong>{ingredient.id}</strong>: {ingredient.quantity}
                                </div>
                            )
                        })}
                        </div>
                        
                    </Col>
                    <Col xs={7}>
                        <h5>Instructions</h5>
                        {steps.map((step, id) => {
                            return (
                                <div className="row col-12" style={{marginTop: '20px'}}> 
                                    {id+1}. {step}
                                </div>
                            )
                        })}
                    </Col>
                </Row>
                
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => ingredientsRemoveHandler(id)}>
                    Cook it
                </Button>
            </Modal.Footer>
        </>
    )

}

export default RecipeDetailedView