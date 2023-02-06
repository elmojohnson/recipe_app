import MealList from "@/components/lists/MealList";
import useSearchByQuery from "@/hooks/useSearchByQuery";
import React from "react";

const Search = () => {
  const { meals, isLoading, isFound } = useSearchByQuery();
  return (
    <div>
      <MealList meals={meals} isLoading={isLoading} isFound={isFound} />
    </div>
  );
};

export default Search;
