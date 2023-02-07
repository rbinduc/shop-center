import Image from "../components/Image";
import ProductList from "../components/ProductList";
import useProducts from "../hooks/useProducts";
import Layout from "../layout";

function Home() {
  const { products, isLoading } = useProducts();
  return (
    <Layout>
      <section>
        <div className="h-96">
          <Image src="/bg.jpg" alt="Shop Center" />
        </div>
      </section>
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <ProductList title={"Shop our Products"} products={products} />
      )}
    </Layout>
  );
}

export default Home;
