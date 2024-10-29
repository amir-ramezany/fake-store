import { useContext } from "react";
import { CartContext } from "../context/Cart";

const ShoppingDetails = () => {
  const { getCartTotalPrice, cartItems, getTotalQuantity } =
    useContext(CartContext);
  return (
    <div className=" flex flex-col gap-6 bg-gray-500 px-12 py-16 rounded-md mb-8  mt-[-10px]">
      <div className="text-white text-xl font-semibold">
        total : <span className="text-green-500 pl-1">{cartItems.length}</span>
      </div>
      <div className="text-white text-xl font-semibold">
        total selected :
        <span className="text-green-500  pl-1">{getTotalQuantity()}</span>
      </div>
      <div className="text-white  text-xl  font-semibold">
        total price :
        <span className="text-green-500 pl-1">
          {getCartTotalPrice().toFixed(1)} $
        </span>
      </div>
    </div>
  );
};

export default ShoppingDetails;
