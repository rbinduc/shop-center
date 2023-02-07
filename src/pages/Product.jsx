import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import Image from "../components/Image";
import { useCartContext } from "../context/CartContext";
import useProduct from "../hooks/useProduct";
import Layout from "../layout";

const Product = () => {
  const { productId } = useParams();
  const { product, isLoading } = useProduct(productId);
  const { handleAddToCart } = useCartContext();
  const [qty, setQty] = useState(1);

  return (
    <Layout>
      {isLoading ? (
        <div>Loading........</div>
      ) : (
        <section className="flex w-full justify-center my-4 flex-wrap md:flex-nowrap">
          <div className="w-full h-full flex-grow">
            <Image src={product.images?.[0]} alt={product.title} />
          </div>
          <div className="px-4">
            <div>
              <div className="w-20 h-1 bg-amber-400 mb-2"></div>
              <p className="text-amber-400 text-2xl font-bold">
                €{product.price}
              </p>
              <Link
                to={`/products/${product.id}`}
                className="text-black font-bold text-lg hover:!text-amber-400"
              >
                <h6>{product.title}</h6>
              </Link>
            </div>
            <Link
              to={`/categories/${product.category?.id}`}
              className="inline-block rounded-full bg-neutral-200 my-4 px-4 py-0.5"
            >
              {product.category?.name}
            </Link>
            <p className="flex items-baseline gap-1 mt-3">
              <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
              <span className="text-sm">In Stock</span>
            </p>
            <p className="my-10 text-left max-w-lg">{product.description}</p>
            <div>
              <div className="inline-flex gap-2 bg-gray-200 items-baseline px-2">
                <span>Qty:</span>
                <input
                  type="number"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                  className="bg-gray-200 text-black w-16 py-2 text-center outline-none"
                />
              </div>
              <Button
                label="Add to Cart"
                onClick={() => handleAddToCart(product, qty)}
                className="sm:max-w-xs"
              />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Product;
