import { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="bg-green-600 w-full p-8 mb-8">
      <div className="flex justify-center items-center gap-3 sm:pl-14  md:pl-0 ">
        <Link className="hidden md:inline-block" to="/">
          <FaShoppingBag color="white" size={35} />
        </Link>

        <Link to="/">
          <h1 className="font-semibold  text-white text-2xl pl-10 md:text-4xl md:pl-0">
            Fake store
          </h1>
        </Link>
      </div>

      <Link to="/shop">
        <div className="text-white font-semibold absolute top-4  left-[73px]">
          {cartItems.length}
        </div>
        <FaCartShopping
          color="white"
          size={38}
          className="absolute left-14 top-8 "
        />
      </Link>
    </div>
  );
};

export default Navbar;
