import React from "react";


export default function RecipeItem({ recipe, deleteRecipe }) {

    return (
      <tr>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td><img src={recipe.photo}/></td>
          <td className= "content_td"><p>{recipe.ingredients}</p></td>
          <td>{recipe.preparation}</td>
        <td>
        <button onClick={deleteRecipe} name="delete">
          Delete
        </button>
        </td>
      </tr>
    );
  
  
}
