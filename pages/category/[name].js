import React from "react";
import useCategoryByName from "@/hooks/useCategoryByName";

import MealList from "@/components/lists/MealList";

const Category = () => {
  const { mealName, meals, isLoading } = useCategoryByName();

  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">{mealName}</h1>
      <MealList meals={meals} isLoading={isLoading} isFound={true} />
    </div>
  );
};

export default Category;
