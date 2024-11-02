import axios from "axios";
import { Recipe } from "./components/types";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";

// function shuffleArray<T>(array: T[]): T[] {
//   for (let i = array.length - 1; i > 0; i--) {
//     const k = Math.floor(Math.random() * (i + 1));
//     [array[i], array[k]] = [array[k], array[i]];
//   }
//   return array;
// }

export const fetchRecipes = async () => {
  console.log("get---");
  const newRecipes: Recipe[] = [];

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length - 1; i++) {
    const response = await axios.get(`search.php?f=${alphabet[i]}`);

    if (response.data.meals !== null) {
      newRecipes.push(...response.data.meals);
    }
  }
  // newRecipes = shuffleArray(newRecipes);
  return newRecipes;
};

export const fetchRecipeById = async (id: string | undefined) => {
  const response = await axios.get(`lookup.php?i=${id}`);
  const result = response.data.meals[0];
  console.log(result);
  return result;
};
