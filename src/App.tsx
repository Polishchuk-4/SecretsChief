import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

const RecipesPage = lazy(() => import("./pages/RecipesPage/RecipesPage"));
const RecipeDetailsPage = lazy(
  () => import("./pages/RecipeDetailsPage/RecipeDetailsPage")
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />;
      </Routes>
    </Layout>
  );
}

export default App;
