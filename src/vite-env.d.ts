/// <reference types="vite/client" />

//     import axios from "axios";
// import { useState } from "react";
// import { Recipe } from "./components/types";

// axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";

// function useFetchRecipes() {
//   const [fetchedIds, setFetchedIds] = useState<string[]>([]);
//   const [recipes, setRecipes] = useState<Recipe[]>([]);

//   const fetchRandomRecipes = async () => {
//     const newRecipes: Recipe[] = [];
//     const newIds = [...fetchedIds];

//     while (newRecipes.length < 16) {
//       const response = await axios.get(`random.php`);
//       const recipe = response.data.meals[0];

//       if (!newIds.includes(recipe.idMeal)) {
//         newIds.push(recipe.idMeal);
//         newRecipes.push(recipe);
//       }
//     }

//     setFetchedIds(newIds);
//     setRecipes(newRecipes);
//   };

//   return { recipes, fetchRandomRecipes };
// }

// const fetchRecipesWithTopic = async () => {
//   try {
//     const response = await axios.get("search.php?f=a");
//     const meals = response.data.meals;

//     return meals;
//   } catch (error) {
//     console.error(error);
//   }
// };

// export { fetchRecipesWithTopic, useFetchRecipes };
