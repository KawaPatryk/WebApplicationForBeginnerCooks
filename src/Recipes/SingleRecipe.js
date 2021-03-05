import React from "react";
import {Button, Image, Row, Col, Container} from 'react-bootstrap'

const SingleRecipe = ({elem, clickHandler, modalClickHandler}) => {
    const {id, ingredients, img, description, favorites} = elem;
    return (
        <Container>
            <Row style={{marginBottom: '30px', height: '200px', maxHeight: '200px'}}>
                <Col sm={5}>
                    <Image src={img} fluid />
                </Col>
                <Col sm={6}>
                    <h4>{id}</h4>
                    <p style={{overflow: 'hidden', maxHeight: '170px'}}>{description}</p>
                    
                </Col>
                <Col sm={1}>
                    {!favorites ? 
                        <i className='bi-heart' 
                            style={{fontSize: '2rem'}}  
                            onClick={() =>clickHandler(id)}/> :
                        <i className='bi-heart-fill'
                            style={{fontSize: '2rem'}}  
                            onClick={() =>clickHandler(id)}/>
                        }
                        <i className='bi-arrow-right'
                            style={{fontSize: '2rem'}}  
                            onClick={() =>modalClickHandler(elem)}/>
                </Col>
                
            </Row>
        </Container>
        
    )
}

export default SingleRecipe;
