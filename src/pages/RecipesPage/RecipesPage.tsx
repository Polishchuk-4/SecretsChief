import { useContext, useState } from "react";
import style from "./RecipesPage.module.css";

import RecipeCollection from "../../components/RecipeCollection/RecipeCollection";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";

import cn from "classnames";

const cnMain = cn(style.main, "container");

import { RecipesContext } from "../../RecipesContext";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function RecipesPage() {
  const { recipes, isLoading, error } = useContext(RecipesContext);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const itemsPerPage: number = 16;
  const totalPage = Math.ceil(recipes.length / itemsPerPage);

  const paginatedRecipes = recipes.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

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
      {error && <ErrorMessage />}
    </main>
  );
}
