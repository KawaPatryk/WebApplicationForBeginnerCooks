import React, {useState, useEffect, useRef} from 'react';
import _ from 'lodash';
import './Recipes.css'
import SingleRecipeView from "./SingleRecipe";
import SelectIngredient from "./SelectIngredient"
import RecipeDetailedView from "./RecipeDetailedView"
import Filter from '../Filter/Filter'
import {Modal, Button} from 'react-bootstrap'


//glowny komponent
const Recipes = ({recipes, recipesChangeHandler, ingredients, ingredientsRemoveHandler}) => {
    console.log('rerender')
    console.log(recipes);
    const [ingredientsCopy, setIngredientsCopy] = useState(ingredients);
    const [filteredIngredients, setFilteredIngredients] = useState(ingredients);
    const [ingredientsFilterText, setIngredientsFilterText] = useState("");
    // const [recipesCopy, setRecipesCopy] = useState(recipes);
    const [filteredRecipes, setFilteredRecipes] = useState(recipes);
    const [recipesFilterText, setRecipesFilterText] = useState("");
    const [showModal, setShowModal] = useState(false)
    const [recipeToShow, setRecipeToShow] = useState('')


    console.log(filteredRecipes);

    const isInitialMount = useRef(true);

    //empty array to have always initial value, same as componentDidMount and unmount it will never rerun
    //not empty arr makes dependencies on which effect fire
    useEffect(() => {
        console.log('wykonujem siem')
        setFilteredRecipes(recipes);
    }, [recipes])

    useEffect(() => {
        console.log('wykonujem siem')
        const ingredientsInTheFridge = ingredients.filter(elem => {
            return elem.quantity
        })
        console.log(ingredientsInTheFridge);
        setFilteredIngredients(ingredientsInTheFridge);
        setIngredientsCopy(ingredientsInTheFridge);
    }, [])


    useEffect(() => {
        console.log(isInitialMount);
        if (isInitialMount.current) {
            isInitialMount.current = false;
          } else {
            if (recipesFilterText.length) {
                filteredRecipesHandler(filteredRecipes, recipesFilterText)
            }
            else {
                filteredRecipesHandler(recipes, recipesFilterText)
            }
          }
    }, [ingredientsCopy])

    //ingredientst changeHandler ma przyjmować ingredientsCopy i
    const ingredientsChangeHandler = (elems, filterText) => {
        setFilteredIngredients(elems);
        setIngredientsFilterText(filterText);
    };

    const modalClickHandler = (recipe) => {
        setRecipeToShow(recipe)
        setShowModal(true);
    }
    const checkboxHandler = (id, checked) => {
        setFilteredIngredients(prevState => {
            let newState = _.cloneDeep(prevState);
            let elem = _.find(newState, (elem) => elem.id === id);
            elem.checked = checked;
            return newState;
        });
        setIngredientsCopy(prevState => {
            let newState = _.cloneDeep(prevState);
            let elem = _.find(newState, (elem) => elem.id === id);
            elem.checked = checked;
            return newState;
        });
    };

    const handleClose = () => {
        setShowModal(false);
    }


    const filteredRecipesHandler = (elems, filterText) => {
        let filteredElems = [];
        const checkedIngredients = ingredientsCopy.reduce((acc, elem) => {
                if (elem.checked === true) {
                    acc.push(elem);
                }
                return acc;
            }, [])
        if (checkedIngredients.length) {
            filteredElems = elems.filter((recipe) => {
                return checkedIngredients.reduce((acc, ingredient) => {
                    const ingredientPresent = recipe.ingredients.reduce((acc, recipeIngredient) => {
                        if (recipeIngredient.id.toLowerCase() === ingredient.id.toLowerCase()) {
                            return true
                        }
                        return acc;
                    }, false);
                    if (!ingredientPresent) {
                        return false
                    }
                    return acc;
                }, true)
            })
        }
        else {
            filteredElems = elems
        }
        setFilteredRecipes(filteredElems);
        setRecipesFilterText(filterText);
    };



    //iterowanie po filtered ingredients
    return (
        <div className="row">
            <div className="col-4">
                <Filter collection={ingredientsCopy}
                        filterHandler={ingredientsChangeHandler}
                        searchTerm={ingredientsFilterText}
                        labelText="Ingredients"
                />
                {filteredIngredients.map(elem => {
                    return <SelectIngredient
                        id={elem.id}
                        checked={elem.checked || false}
                        checkboxHandler={checkboxHandler}

                    />

                })}

                <Modal size="xl" show={showModal} onHide={handleClose}>
                    <RecipeDetailedView recipe={recipeToShow} ingredientsRemoveHandler={(recipeId) => ingredientsRemoveHandler(recipeId)} handleClose={handleClose}/>
                </Modal>

            </div>
            <div className="col-8">
                <Filter
                    collection={recipes}
                    filterHandler={filteredRecipesHandler}
                    searchTerm={recipesFilterText}
                    labelText="Recipes"
                />
                {filteredRecipes.map(elem => {

                    return (
                        <SingleRecipeView
                            elem={elem}
                            clickHandler={(id) => recipesChangeHandler(id)}
                            modalClickHandler={(id) => modalClickHandler(id)}
                        />
                    )
                })}
            </div>
        </div>
    )

}

export default Recipes;
