import React from "react";
import useCategoryByName from "@/hooks/useCategoryByName";

import Layout from "@/components/layouts/Layout";
import MealList from "@/components/lists/MealList";

const Category = () => {
  const { mealName, meals, isLoading } = useCategoryByName();

  return (
    <Layout>
      <h1 className="font-bold text-2xl mb-4">{mealName}</h1>
      <MealList meals={meals} isLoading={isLoading} />
    </Layout>
  );
};

export default Category;
