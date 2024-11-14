import { Link, useLocation } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Recipe } from "../types";

import style from "./RecipeCollection.module.css";

type RecipeCollectionProps = {
  collection: Recipe[];
};

export default function RecipeCollection({
  collection,
}: RecipeCollectionProps) {
  const location = useLocation();

  return (
    <div>
      <ul className={style.recipeCollection}>
        {collection.map((recipe) => {
          return (
            <li key={recipe.idMeal} className={style.recipeCollectionItem}>
              <Link to={`/recipes/${recipe.idMeal}`} state={location}>
                <RecipeCard
                  idMeal={recipe.idMeal}
                  strMealThumb={recipe.strMealThumb}
                  strMeal={recipe.strMeal}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
