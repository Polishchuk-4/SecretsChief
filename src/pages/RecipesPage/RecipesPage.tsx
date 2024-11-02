import { useContext } from "react";
import style from "./RecipesPage.module.css";

import RecipeCollection from "../../components/RecipeCollection/RecipeCollection";
import Loader from "../../components/Loader/Loader";

import cn from "classnames";

const cnMain = cn(style.main, "container");

import { RecipesContext } from "../../RecipesContext";

export default function RecipesPage() {
  const { recipes, isLoading, error } = useContext(RecipesContext);

  return (
    <main className={cnMain}>
      {isLoading && <Loader />}
      {recipes && <RecipeCollection collection={recipes} />}
    </main>
  );
}
