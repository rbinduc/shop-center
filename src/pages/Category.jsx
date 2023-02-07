import React from "react";
import useCategories from "../hooks/useCategories";
import Layout from "../layout";
import Category from "../components/Category";

const CategoryPage = () => {
  const { categories, isLoading } = useCategories();
  return (
    <Layout>
      <section>
        <h1 className="text-center text-4xl my-6 font-bold">Categories</h1>
        {isLoading ? (
          <div>Loading.....</div>
        ) : (
          <div className="flex flex-wrap">
            {categories?.map((category) => (
              <Category key={category.id} {...category} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CategoryPage;
