import useCategories from "@/hooks/useCategories";

import Layout from "@/components/layouts/Layout";
import GridWrapper from "@/components/utils/GridWrapper";

import CategoryItem from "@/components/items/CategoryItem";
import CategoryLoadingItem from "@/components/items/CategoryLoadingItem";

import { AnimatePresence } from "framer-motion";

const Home = () => {
  const { categories, isLoading } = useCategories();
  return (
    <Layout>
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
    </Layout>
  );
};

export default Home;
