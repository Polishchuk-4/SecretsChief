import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import style from "./SearchRecipePage.module.css";
import { Recipe } from "../../components/types";
import { fetchRecipeByName } from "../../recipes-api";
import RecipeCollection from "../../components/RecipeCollection/RecipeCollection";

import cn from "classnames";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";

const cnMain = cn(style.main, "container");

export default function SearchRecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const itemsPerPage: number = 16;
  const totalPage = Math.ceil(recipes.length / itemsPerPage);

  const paginatedRecipes = recipes.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  useEffect(() => {
    async function getRecipeByName() {
      try {
        setIsLoading(true);
        const response = await fetchRecipeByName(query);
        setRecipes(response);
        setCurrentPage(0);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getRecipeByName();
  }, [query]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  console.log(currentPage);

  return (
    <main className={cnMain}>
      {isLoading && <Loader />}
      {recipes && <RecipeCollection collection={paginatedRecipes} />}
      {totalPage > 1 && (
        <Pagination
          pageCount={totalPage}
          forcePage={currentPage}
          onChange={handlePageChange}
        />
      )}
    </main>
  );
}
