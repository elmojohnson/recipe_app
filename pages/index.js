import useCategories from "@/hooks/useCategories";

import GridWrapper from "@/components/utils/GridWrapper";

import CategoryItem from "@/components/items/CategoryItem";
import CategoryLoadingItem from "@/components/items/CategoryLoadingItem";

import { AnimatePresence } from "framer-motion";

const Home = () => {
  const { categories, isLoading } = useCategories();
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Categories</h1>
      <AnimatePresence>
        {isLoading ? (
          <GridWrapper>
            {[...Array(8)].map((_, i) => {
              return <CategoryLoadingItem key={i} />;
            })}
          </GridWrapper>
        ) : (
          <GridWrapper>
            {categories.map((category) => {
              return (
                <CategoryItem
                  key={category.idCategory}
                  category={category.strCategory}
                  description={category.strCategoryDescription}
                  thumbnail={category.strCategoryThumb}
                />
              );
            })}
          </GridWrapper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
