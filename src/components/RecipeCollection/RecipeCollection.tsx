import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { Recipe } from "../types";

import style from "./RecipeCollection.module.css";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";

type RecipeCollectionProps = {
  collection: Recipe[];
};

export default function RecipeCollection({
  collection,
}: RecipeCollectionProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerPage: number = 16;
  const totalPage = Math.ceil(collection.length / itemsPerPage);

  const paginatedRecipes = collection.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div>
      <ul className={style.recipeCollection}>
        {paginatedRecipes.map((recipe) => {
          return (
            <li key={recipe.idMeal} className={style.recipeCollectionItem}>
              <Link to="/recipes">
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
      {totalPage > 1 && (
        <Pagination
          pageCount={totalPage}
          initialPage={currentPage}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
}
