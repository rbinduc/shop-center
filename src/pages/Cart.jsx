import { useNavigate } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import CartTotal from "../components/CartTotal";
import { useCartContext } from "../context/CartContext";
import Layout from "../layout";

const Cart = () => {
  const navigate = useNavigate();
  const { products } = useCartContext();
  return (
    <Layout>
      {products.length === 0 ? (
        <section>
          <p className="mt-14 text-center text-3xl">Your cart is empty :(</p>
        </section>
      ) : (
        <section className="p-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          <div className="flex justify-between items-start gap-6 w-full flex-wrap lg:flex-nowrap">
            <div className="w-full flex-grow">
              <div className="flex gap-2 bg-gray-100 py-2 mb-4">
                <span className="w-3/12 text-sm font-bold"></span>
                <span className="w-4/12 text-sm font-bold">Name</span>
                <span className="w-2/12 text-sm font-bold">Price</span>
                <span className="w-2/12 text-sm font-bold">Quantity</span>
                <span className="w-1/12 text-sm font-bold"></span>
              </div>
              <div className="flex flex-col gap-4">
                {products.map((product) => (
                  <CartProduct key={product.id} {...product} />
                ))}
              </div>
            </div>
            <CartTotal
              label={"Checkout"}
              onClick={() => navigate("/checkout")}
            />
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Cart;
