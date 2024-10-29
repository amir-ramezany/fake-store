import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";

/* eslint-disable react/prop-types */
const CardItem = ({ id, title, price, image, item }) => {
  const { cartItems, addToCart } = useContext(CartContext);

  return (
    <div
      className="flex flex-col justify-center items-center bg-stone-200 px-10 py-10 w-[300px] mt-5  
    gap-8  rounded-md hover:opacity-75"
    >
      <h1 className="text-gray-600  text-lg font-semibold">{title}</h1>
      <img src={image} className="w-[200px] h-[200px] rounded-md " />
      <h2 className="font-bold  text-green-600 ">{price} $</h2>

      <div className="flex w-full h-9 justify-between">
        <button
          onClick={() => {
            addToCart(item);
          }}
          className="p-[5.5px]  rounded-md text-center bg-black text-white text-sm  hover:brightness-200"
        >
          add to cart (
          {cartItems.find((Cartitem) => Cartitem.id === item.id)
            ? cartItems.find((Cartitem) => Cartitem.id === item.id).quantity
            : 0}
          )
        </button>
        <Link to={`/ProductDetail/${id}`}>
          <button className="bg-green-500   p-[5.5px]  rounded-md  text-gray-800 text-center hover:brightness-75 hover:text-gray-700">
            more detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardItem;
