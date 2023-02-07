import Product from "../Product";

const ProductList = ({ title, products }) => {
  return (
    <section>
      {title ? (
        <h1 className="text-center text-4xl my-6 font-bold">{title}</h1>
      ) : null}
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
