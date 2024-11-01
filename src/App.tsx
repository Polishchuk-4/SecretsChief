import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";

const RecipesPage = lazy(() => import("./pages/RecipesPage/RecipesPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/recipes" element={<RecipesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
