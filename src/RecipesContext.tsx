import React, { createContext, ReactNode, useState, useEffect } from "react";
import { Recipe } from "./components/types";

import { fetchRecipes } from "./recipes-api";

type FetchError = {
  message: string;
};

type RecipesContextProps = {
  recipes: Recipe[];
  isLoading: boolean;
  error: FetchError | null;
};

export const RecipesContext = createContext<RecipesContextProps>({
  recipes: [],
  isLoading: false,
  error: null,
});

export const RecipesProvider = ({ children }: { children: ReactNode }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<FetchError | null>(null);

  console.log("context");

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading(true);
        const response = await fetchRecipes();
        setRecipes(response);
      } catch (err) {
        const fetchError = err as FetchError;
        setError(fetchError);
      } finally {
        setIsLoading(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={{ recipes, isLoading, error }}>
      {children}
    </RecipesContext.Provider>
  );
};
