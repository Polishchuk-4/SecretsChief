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
  const backLinkHref = useRef(location.state) ?? "/recipes";

  console.log(backLinkHref.current);

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

  const ingredients: string[] = [];
  const measures: string[] = [];

  if (recipe) {
    for (const key in recipe) {
      const value = recipe[key as keyof typeof recipe];

      if (recipe[key as keyof typeof recipe] && key.includes("strIngredient")) {
        ingredients.push(value as string);
      } else if (
        recipe[key as keyof typeof recipe] &&
        key.includes("strMeasure")
      ) {
        measures.push(value as string);
      }

      console.log(ingredients);
      console.log(measures);
    }
  }
  return (
    <main className={cnMain}>
      {recipe && (
        <div className={style.body}>
          <div className={style.columnMeal}>
            <div className={style.returnRow}>
              <Link to={backLinkHref.current}>
                <Icon icon="arrow-left" size="50px" />
              </Link>
              <h2 className={style["main-title"]}>{recipe?.strMeal}</h2>
            </div>
            <img
              src={recipe?.strMealThumb}
              alt={recipe?.strMeal}
              className={style.img}
            />
            <div className={style.row}>
              <p>Country: {recipe?.strArea || "From Heart"}</p>
              <p>Category: {recipe?.strCategory || "Edible"}</p>
            </div>
            <a
              target="_blank"
              href={recipe?.strYoutube || "https://www.youtube.com"}
            >
              <Icon icon="youtube" size="100px" color="red" />
            </a>
          </div>

          <div className={style.columnRecipe}>
            <h2 className={style.title}>Ingredients</h2>
            <ul className={style.list}>
              {ingredients.map((item, index) => {
                return (
                  <li className={style.listItem}>
                    {item} <br /> {measures[index]}
                  </li>
                );
              })}
            </ul>
            <h2 className={style.title}>Instructions</h2>
            <a
              className={style.text}
              target="_blank"
              href={recipe?.strYoutube || "https://www.youtube.com"}
            >
              {recipe?.strInstructions || "Fantasize to your heart's content"}
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
