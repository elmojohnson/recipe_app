import React from "react";
import Layout from "@/components/layouts/Layout";
import useCategoryByName from "@/hooks/useCategoryByName";

const Category = () => {
  const { meals, isLoading } = useCategoryByName();
  return (
    <Layout>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {meals.map((meal) => {
            return <p key={meal.idMeal}>{meal.strMeal}</p>;
          })}
        </div>
      )}
    </Layout>
  );
};

export default Category;
