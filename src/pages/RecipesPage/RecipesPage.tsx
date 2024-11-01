import { useEffect, useState } from "react";
import style from "./RecipesPage.module.css";

import { fetchRecipes } from "../../recipes-api";
import RecipeCollection from "../../components/RecipeCollection/RecipeCollection";
import Loader from "../../components/Loader/Loader";

import cn from "classnames";
import { Recipe } from "../../components/types";

const cnMain = cn(style.main, "container");

export default function RecipesPage() {
  const [isLoading, setIdLoading] = useState<boolean>(false);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIdLoading(true);
        const response = await fetchRecipes();
        setRecipes(response);
      } catch (error) {
        console.log(error);
      } finally {
        setIdLoading(false);
      }
    };
    getRecipes();
  }, []);

  return (
    <main className={cnMain}>
      {isLoading && <Loader />}
      <RecipeCollection collection={recipes} />
    </main>
  );
}
