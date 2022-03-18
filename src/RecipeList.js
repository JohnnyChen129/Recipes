import React from "react";
import RecipeData from "./RecipeData";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  /*<input name="name">, <input name="cuisine">, <input name="photo">, <textarea name="ingredients">
  <textarea name="preparation"></textarea> */

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeItem
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

// import React from "react";
// import PostItem from "./PostItem";

// /**
//  * Displays a list of either text or image posts.
//  *
//  */
// export default function PostList({ posts, deletePost }) {
//   // TODO: Display the list of posts.
//   // TODO: Create at least one additional component that is used by this component.
//   // TODO: Each post must have className="post" for the tests to work.
//   // TODO: Each post must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

//   return (
//     <span className="post-list">
//       {posts.map((post, index) => (
//         <PostItem post={post} deletePost={() => deletePost(index)} />
//       ))}
//     </span>
//   );
// }
