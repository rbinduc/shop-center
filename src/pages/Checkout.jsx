import { useNavigate } from "react-router-dom";
import CartTotal from "../components/CartTotal";
import FormInput from "../components/FormInput";
import { useCartContext } from "../context/CartContext";
import Layout from "../layout";
import { useForm } from "@formspree/react";

const Checkout = () => {
  const navigate = useNavigate();
  const { products, handlePlaceOrder } = useCartContext();
  const [state, handleSubmit] = useForm("mlekgqoo");

  const handleFormSubmit = (e, ...rest) => {
    e.stopPropagation();
    handlePlaceOrder();
    navigate("/");
    alert("Order placed successfully..!");
    handleSubmit(e, ...rest);
  };

  return (
    <Layout>
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-between items-start gap-6 w-full flex-wrap lg:flex-nowrap">
            <div className="w-full flex-grow">
              <div className="flex flex-col gap-6">
                <FormInput name="firstName" placeholder="First Name" />
                <FormInput name="lastName" placeholder="Last Name" />
                <FormInput name="email" placeholder="Email" type="email" />
                <textarea
                  name="address"
                  cols="30"
                  rows="10"
                  placeholder="Address"
                  className="bg-gray-100 p-4 outline-none"
                  required
                ></textarea>
                <input
                  type="hidden"
                  value={JSON.stringify(products)}
                  name="cart"
                />
              </div>
            </div>
            <CartTotal label={"Place Order"} type="submit" />
          </div>
        </form>
      </section>
    </Layout>
  );
};

export default Checkout;
