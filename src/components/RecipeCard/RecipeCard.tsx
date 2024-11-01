import { Recipe } from "../types";

import style from "./RecipeCard.module.css";

export default function RecipeCard({ strMealThumb, strMeal }: Recipe) {
  return (
    <div className={style.recipeCard}>
      <img className={style.img} src={strMealThumb} alt={strMeal} />
      <h2 className={style.title}>{strMeal}</h2>
    </div>
  );
}
