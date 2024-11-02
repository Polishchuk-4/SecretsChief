import { Link, useLocation, useParams } from "react-router-dom";
import style from "./RecipeDetailsPage.module.css";
import { useEffect, useRef, useState } from "react";
import { Recipe } from "../../components/types";

import { fetchRecipeById } from "../../recipes-api";

import cn from "classnames";
import Icon from "../../components/Icon/Icon";
const cnMain = cn(style.main, "container");

export default function RecipeDetailsPage() {
  const [recipe, setRecipe] = useState<Recipe>();
  const { recipeId } = useParams<{ recipeId?: string }>();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/recipes");

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await fetchRecipeById(recipeId);
        setRecipe(response);
      } catch (error) {
        console.log(error);
      }
    }
    getRecipe();
  }, []);
  return (
    <main className={cnMain}>
      <div className={style.body}>
        <div className={style.columnMeal}>
          <div className={style.returnRow}>
            <Link to={backLinkHref.current}>
              <Icon icon="arrow-left" size="50px" />
            </Link>
            <h2 className={style.title}>{recipe?.strMeal}</h2>
          </div>
          <img
            src={recipe?.strMealThumb}
            alt={recipe?.strMeal}
            className={style.img}
          />
          <div className={style.row}>
            <p>Country: {recipe?.strArea}</p>
            <p>Category {recipe?.strCategory}</p>
          </div>
        </div>
        <div className={style.columnRecipe}></div>
      </div>
    </main>
  );
}
