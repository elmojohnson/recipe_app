import GridWrapper from "@/components/utils/GridWrapper";
import MealItem from "@/components/items/MealItem";
import MealLoadingItem from "@/components/items/MealLoadingItem";
import { AnimatePresence } from "framer-motion";

const MealList = ({ meals, isLoading, isFound }) => {
  return (
    <AnimatePresence>
      {!isFound ? (
        <h1>No meals found</h1>
      ) : (
        <>
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
        </>
      )}
    </AnimatePresence>
  );
};

export default MealList;
