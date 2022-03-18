import React from "react";


export default function RecipeItem({ recipe, deleteRecipe }) {

    return (
      <tr>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td>{recipe.photo}</td>
          <td>{recipe.ingredients}</td>
          <td>{recipe.preparation}</td>
        <td>
        
        <button onClick={deleteRecipe} name="delete">
          Delete
        </button>
        </td>
      </tr>
    );
  
  
}
