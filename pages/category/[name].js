import React from "react";
import useCategoryByName from "@/hooks/useCategoryByName";

import Layout from "@/components/layouts/Layout";
import GridWrapper from "@/components/utils/GridWrapper";
import MealItem from "@/components/items/MealItem";

const Category = () => {
  const { meals, isLoading } = useCategoryByName();

  return (
    <Layout>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <GridWrapper>
          {meals.map((meal) => {
            return (
              <MealItem
                key={meal.idMeal}
                id={meal.idMeal}
                meal={meal.strMeal}
                thumbnail={meal.strMealThumb}
              />
            );
          })}
        </GridWrapper>
      )}
    </Layout>
  );
};

export default Category;
