import Layout from "@/components/layouts/Layout";
import MealList from "@/components/lists/MealList";
import useSearchByQuery from "@/hooks/useSearchByQuery";
import React from "react";

const Search = () => {
  const { meals, isLoading, isFound } = useSearchByQuery();
  return (
    <Layout>
      <MealList meals={meals} isLoading={isLoading} isFound={isFound} />
    </Layout>
  );
};

export default Search;
