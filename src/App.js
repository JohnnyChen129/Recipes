import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

/*
//Clicking the delete button should remove the entire row/recipe from the list. For the tests to pass, make sure
 that the delete button has delete as a name value (name="delete"). e.g. <button name="delete"
  onClick={deleteRecipe}>Delete</button>.
  <input name="name">, <input name="cuisine">, <input name="photo">, <textarea name="ingredients"> and <textarea name="preparation">.
  
 */

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes}/>
      <RecipeCreate />
    </div>
  );
}

export default App;
