import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Image from "../Image";

const CartProduct = (product) => {
  const { handleDeleteFromCart } = useCartContext();
  return (
    <div className="flex gap-2 items-center" key={product.id}>
      <div className="w-3/12">
        <Link to={`/products/${product.id}`}>
          <Image src={product.images?.[0]} alt={product.title} />
        </Link>
      </div>
      <div className="w-4/12 font-bold text-sm">
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </div>
      <div className="w-2/12 font-bold text-sm">€{product.price}</div>
      <div className="w-2/12 font-bold text-sm">{product.qty}</div>
      <div className="w-1/12 font-bold text-sm">
        <button onClick={() => handleDeleteFromCart(product)}>X</button>
      </div>
    </div>
  );
};

export default CartProduct;
