import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import style from "./SearchRecipePage.module.css";
import { Recipe } from "../../components/types";
import { fetchRecipeByName } from "../../recipes-api";
import RecipeCollection from "../../components/RecipeCollection/RecipeCollection";

import cn from "classnames";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const cnMain = cn(style.main, "container");

export default function SearchRecipePage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const itemsPerPage: number = 16;
  const totalPage = Math.ceil(recipes?.length || 0 / itemsPerPage);

  const paginatedRecipes = recipes.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  console.log(paginatedRecipes);
  console.log(totalPage);

  useEffect(() => {
    async function getRecipeByName() {
      try {
        setRecipes([]);
        setIsLoading(true);
        setError(false);

        const response = await fetchRecipeByName(query);

        setRecipes(response ?? []);
        setCurrentPage(0);

        if (response.length === 0) {
          setError(true);
        }
      } catch (error) {
        setError(true);
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
      {recipes.length >= 1 && (
        <RecipeCollection collection={paginatedRecipes} />
      )}
      {recipes.length > itemsPerPage && (
        <Pagination
          pageCount={totalPage}
          forcePage={currentPage}
          onChange={handlePageChange}
        />
      )}
      {error && <ErrorMessage />}
    </main>
  );
}
