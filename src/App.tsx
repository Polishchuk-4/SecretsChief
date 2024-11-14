import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

const RecipesPage = lazy(() => import("./pages/RecipesPage/RecipesPage"));
const RecipeDetailsPage = lazy(
  () => import("./pages/RecipeDetailsPage/RecipeDetailsPage")
);
const SearchRecipePage = lazy(
  () => import("./pages/SearchRecipePage/SearchRecipePage")
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />;
        <Route path="/recipes/searchByName" element={<SearchRecipePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
