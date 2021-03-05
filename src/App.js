import React, {useState, useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Recipes from "./Recipes/Recipes";
import Fridge from "./Fridge/Fridge.js";
// import Favorites from "./Favorites/favorites";
import Ingredients from "./data/IngredientsStorage"
import AllRecipes from "./data/RecipesStorage"
import _ from "lodash";
import {qtyChange} from './utils/utils';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import CreateRecipe from './CreateRecipe/CreateRecipe';
import LoginRegister from './LoginRegister/LoginRegister';

import Users from "./data/UsersStorage"


function App() {
    const localStorage = window.localStorage;
    const [ingredients, setIngredients] = useState(JSON.parse(localStorage.getItem('ingredients')));
    const [recipes, setRecipes] = useState(JSON.parse(localStorage.getItem('recipes')));
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));
    const [currentUser, setCurrentUser] = useState("");

    //uncomment this before first use to generate entry data you can use login "Tomek" password "ziomek"
    useEffect(() => {
        window.localStorage.setItem('recipes', JSON.stringify(AllRecipes))
        window.localStorage.setItem('ingredients', JSON.stringify(Ingredients))
        window.localStorage.setItem('users', JSON.stringify(Users))
    })

    const addUserHandler = (username, password) => {
        setUsers(prevState => {
            let newState = _.cloneDeep(prevState);
            let newUser = {"id": username, "password": password, "favorites": [], "ingredients": []}
            newState.push(newUser);
            window.localStorage.setItem('users', JSON.stringify(newState));
            return newState;
        })

    };

    const loginHandler = (username) => {
        setCurrentUser(username);
        const currentUserObj = _.find(users, (user) => {
            return user.id === username
        })
        setIngredients(prevState => {
            let newState = _.cloneDeep(prevState);
            if (currentUserObj.ingredients.length) {
                currentUserObj.ingredients.forEach(ingredient => {
                    _.find(newState, (stateIngredient) => {
                        return ingredient.id === stateIngredient.id
                    }).quantity = ingredient.quantity;
                })
            }
            return newState;
        })

        setRecipes(prevState => {
            let newState = _.cloneDeep(prevState);
            if (currentUserObj.favorites.length) {
                currentUserObj.favorites.forEach(recipe => {
                    _.find(newState, (stateRecipe) => {
                        return recipe.id === stateRecipe.id
                    }).favorites = true;
                })
            }
            return newState;
        })

    };

    const logoutHandler = () => {
        setCurrentUser("");
        setIngredients(JSON.parse(localStorage.getItem('ingredients')))
        setRecipes(JSON.parse(localStorage.getItem('recipes')))
    };


    const extractFavorites = () => {
        return recipes.filter(recipe => {
            return recipe.favorites
        })
    };


    const fridgeChangeHandler = (id, type, value) => {
        let userId;
        setIngredients(prevState => {
            const newData = qtyChange(prevState, id, type, value);
            const currentUserObj = _.find(users,(user) => {
                const id = user.id
                if (id === currentUser) {
                    userId = id;
                    return true;
                }
            });
            currentUserObj.ingredients = newData.filter(elem => {
                return elem.quantity !== 0
            }).map(elem => {
                return {
                    id: elem.id,
                    quantity: elem.quantity
                }
            })
            localStorage.setItem('users', (() => {
                let newUsers = [...users];
                newUsers[userId] = currentUserObj;
                return JSON.stringify(newUsers);
            })());
            return newData
        })
    };


    const recipesChangeHandler = (id) => {
        console.log(id);
        let userId;
        setRecipes(prevState => {
            let newState = _.cloneDeep(prevState);
            let newRecipe = _.find(newState, (newRecipe) => newRecipe.id === id);
            newRecipe.favorites = !newRecipe.favorites;
            const currentUserObj = _.find(users, (user) => {
                const id = user.id;
                if (id === currentUser) {
                    userId = id;
                    return true;
                }
            });
            currentUserObj.favorites = newState.filter(elem => {
                return elem.favorites === true
            }).map(elem => {
                return {
                    id: elem.id,
                }
            });
            localStorage.setItem('users', (() => {
                    let newUsers = [...users];
                    newUsers[userId] = currentUserObj;
                    return JSON.stringify(newUsers);
            })());

            return newState;
        })
    };

    const createRecipeHandler = (recipe) => {
        setRecipes(prevState => {
            let newState = JSON.parse(localStorage.getItem('recipes'));
            newState.push(recipe);

            localStorage.setItem('recipes', JSON.stringify(newState))
            return newState;
        })
    };

    const ingredientsRemoveHandler = (recipeId) => {
        let userId;
        let shouldUpdate = true;
        let usedRecipe = _.find(recipes, (newRecipe) => newRecipe.id === recipeId);
        console.log(usedRecipe);
        setIngredients(prevState => {
            let newState = _.cloneDeep(prevState);
            usedRecipe.ingredients.forEach(ingredient => {
                let ingredientToChange = _.find(newState, (newIngredient) => newIngredient.id === ingredient.id);
                ingredientToChange.quantity >= ingredient.quantity ? ingredientToChange.quantity -= ingredient.quantity : shouldUpdate = false
            })
            const currentUserObj = _.find(users, (user) => {
                const id = user.id;
                if (id === currentUser) {
                    userId = id;
                    return true;
                }
            })
            currentUserObj.ingredients = newState.filter(elem => {
                return elem.quantity !== 0
            }).map(elem => {
                return {
                    id: elem.id,
                    quantity: elem.quantity
                }
            })

            if (shouldUpdate) {
                alert("Recipe created!")
                //here
                localStorage.setItem('users', (() => {
                    let newUsers = [...users];
                    newUsers[userId] = currentUserObj;
                    return JSON.stringify(newUsers);
                })())
                return newState
            } else {
                alert("Not enough ingredients!");
                return prevState
            }

        })
    }

    return (
        <Router>
            <div className="App row">

                <div className='col-12'>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand>Cookify</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to='/fridge'>
                                    <Nav.Link>Fridge</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/recipes'>
                                    <Nav.Link>Recipes</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/favorites'>
                                    <Nav.Link>Favorites</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/create'>
                                    <Nav.Link>Create recipe</Nav.Link>
                                </LinkContainer>
                                {
                                    currentUser === "" ?
                                        (<LinkContainer to='/login'>
                                            <Nav.Link>Login / Register</Nav.Link>
                                        </LinkContainer>)
                                        :
                                        (<LinkContainer to='/logout'>
                                            <Nav.Link>Logout</Nav.Link>
                                        </LinkContainer>)
                                }


                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className='row' style={{marginTop: '25px'}}>
                        {!currentUser && <Redirect to="/login" />}
                        <div className='mainContent' className="offset-1 col-10">
                            <Switch>
                                <Route path='/fridge'>
                                    {!currentUser && <Redirect to="/login" />}
                                    <Fridge ingredients={ingredients}
                                            changeHandler={fridgeChangeHandler}/>
                                </Route>
                                <Route path='/recipes'>
                                    {!currentUser && <Redirect to="/login" />}
                                    <Recipes recipes={recipes} ingredients={ingredients}
                                             recipesChangeHandler={recipesChangeHandler}
                                             ingredientsRemoveHandler={ingredientsRemoveHandler}/>
                                </Route>
                                <Route path='/favorites'>
                                    {!currentUser && <Redirect to="/login" />}
                                    <Recipes recipes={extractFavorites()} ingredients={ingredients}
                                             recipesChangeHandler={recipesChangeHandler}
                                             ingredientsRemoveHandler={ingredientsRemoveHandler}
                                    />
                                </Route>
                                <Route path='/create'>
                                    {!currentUser && <Redirect to="/login" />}
                                    <CreateRecipe createRecipeHandler={createRecipeHandler}/>
                                </Route>
                                <Route path='/login'>
                                    <LoginRegister Users={users} addUserHandler={addUserHandler}
                                                   loginHandler={loginHandler}/>
                                </Route>
                                <Route path='/logout'>
                                    {() => {
                                        logoutHandler();
                                        return <Redirect to="/login"/>
                                    }}
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

        </Router>
    );
}

export default App;
