import { useCartContext } from "../../context/CartContext";
import Button from "../Button";

const ProductInfo = ({ label, value, noSymbol }) => (
  <div className="flex justify-between">
    <span>{label}:</span>
    <span>
      {!noSymbol && "€"}
      {value}
    </span>
  </div>
);

const CartTotal = ({ label, onClick, type }) => {
  const { total, subtotal } = useCartContext();
  return (
    <div className="bg-gray-100 p-4 lg:max-w-xs w-full">
      <p className="text-xl font-bold mb-8">Cart Total</p>
      <div className="flex flex-col gap-6">
        <ProductInfo label={"Subtotal"} value={subtotal} />
        <ProductInfo label={"Delivery"} value={"Free"} noSymbol />
        <ProductInfo label={"Total"} value={total} />
      </div>
      <Button label={label} onClick={onClick} type={type} />
      <p className="mt-2 text-xs text-gray-500">
        * Cash on Delivery. Online payment coming soon!
      </p>
    </div>
  );
};

export default CartTotal;
