import { useParams } from "react-router-dom";
import Image from "../components/Image";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";
import Layout from "../layout";

function CategoryProducts() {
  const { categoryId } = useParams();
  const { products, isLoading } = useProducts(categoryId);
  const category = products?.[0]?.category || {};
  return (
    <Layout>
      <section>
        <div className="h-96">
          <Image src={category.image} alt={category.name} />
        </div>
      </section>
      <section>
        <h1 className="text-center text-4xl my-6 font-bold">{category.name}</h1>
        {isLoading ? (
          <div>Loading.....</div>
        ) : (
          <div className="flex flex-wrap">
            {products?.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default CategoryProducts;
