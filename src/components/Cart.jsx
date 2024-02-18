import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      <div className="w-6/12 m-auto ">
        {cartItems.length !== 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <h1 className="font-bold text-2xl">
            Cart is empty, Add items into your cart
          </h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
