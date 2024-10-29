import { useContext } from "react";
import { CartContext } from "../context/Cart";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ShoppingDetails from "../components/ShoppingDetails";

const ShopPage = () => {
  const { cartItems, removeFromCart, addToCart, removeOneFromCart } =
    useContext(CartContext);


  return (
    <div className="container px-5 py-5 flex flex-wrap justify-center gap-5">
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <h1 className="flex justify-center mt-16 font-extrabold text-4xl text-gray-700 text-center ">
            Your cart is empty
          </h1>
          <Link
            className="text-white text-center text-sm  bg-green-600 hover:bg-green-500 rounded-md px-1 py-2 mt-8 w-1/2"
            to="/"
          >
            back to add products
          </Link>
        </div>
      ) : (

        <div className="container px-5 py-5 flex  flex-col flex-wrap justify-center gap-5">
          <div className="flex justify-center ">
            <ShoppingDetails />
          </div>
          <div className="flex flex-wrap  justify-center gap-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center"
              >
                <div
                  className="flex flex-col justify-center items-center bg-stone-200 px-10 py-10 w-[300px] mt-5  
gap-8  rounded-md hover:opacity-75"
                >
                  <h1 className="text-gray-600  text-lg font-semibold">
                    {item.title}
                  </h1>
                  <img
                    src={item.image}
                    className="w-[200px] h-[200px] rounded-md "
                  />
                  <h2 className="font-bold  text-green-600 ">
                    {(item.price * item.quantity).toFixed(1)} $
                  </h2>

                  <div className=" flex items-center justify-center gap-4 text-black font-semibold w-4 ">
                    <button
                      className="text-2xl"
                      onClick={() => {
                        addToCart(item);
                      }}
                    >
                      +
                    </button>
                    {item.quantity}
                    <button
                      className="text-3xl"
                      onClick={() => {
                        removeOneFromCart(item);
                      }}
                    >
                      {item.quantity === 1 ? (
                        <FaTrash color="red" size={14} />
                      ) : (
                        "-"
                      )}
                    </button>
                  </div>
                </div>
                <button
                  className="bg-black text-white rounded-md my-2 px-4 py-2 flex items-center gap-3 hover:brightness-150"
                  onClick={() => removeFromCart(item)}
                >
                  <FaTrash color="red" size={14} /> remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
