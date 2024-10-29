import axios from "axios";
import { Recipe } from "./components/types";

axios.defaults.baseURL = "";

const keyApi = "";

const fetchRecipes = async (page: number) => {
  const response = await axios.get("", {
    params: {},
    headers: {},
  });
  return response.data.results as Recipe[];
};

export default fetchRecipes;
