import CategoryItem from "@/components/items/CategoryItem";
import Layout from "@/components/layouts/Layout";
import useCategories from "@/hooks/useCategories";

const Home = () => {
  const { categories, isLoading } = useCategories();
  return (
    <Layout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
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
        </div>
      )}
    </Layout>
  );
};

export default Home;
