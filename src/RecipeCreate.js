import React, { useState } from "react";
import RecipeItem from "./RecipeItem";
function RecipeCreate() {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const name = "name"




  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td></td>
            <td> 
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
