import React from "react";
import useCategoryByName from "@/hooks/useCategoryByName";

import Layout from "@/components/layouts/Layout";
import GridWrapper from "@/components/utils/GridWrapper";
import MealItem from "@/components/items/MealItem";
import MealLoadingItem from "@/components/items/MealLoadingItem";
import { AnimatePresence } from "framer-motion";

const Category = () => {
  const { mealName, meals, isLoading } = useCategoryByName();

  return (
    <Layout>
      <h1 className="font-bold text-2xl mb-4">{mealName}</h1>
      <AnimatePresence>
        {isLoading ? (
          <GridWrapper>
            {[...Array(10)].map((_, i) => {
              return <MealLoadingItem key={i} />;
            })}
          </GridWrapper>
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
      </AnimatePresence>
    </Layout>
  );
};

export default Category;
