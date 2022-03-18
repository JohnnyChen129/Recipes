import React, { useState } from "react";
import RecipeItem from "./RecipeItem";
function RecipeCreate({ createRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialState);

  function handleRecipeChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createRecipe({ ...formData });
    setFormData({ initialState });
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                required={true}
                onChange={handleRecipeChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>

            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                required={true}
                onChange={handleRecipeChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>

            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                required={true}
                onChange={handleRecipeChange}
                value={formData.photo}
                placeholder="Photo"
              />
            </td>

            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                required={true}
                onChange={handleRecipeChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              ></textarea>
            </td>

            <td>
              <textarea
                id="preparation"
                name="preparation"
                type="text"
                required={true}
                onChange={handleRecipeChange}
                value={formData.preparation}
                placeholder="Preparation"
              ></textarea>
            </td>
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
