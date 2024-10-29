import { useParams } from "react-router-dom";
import useShopData from "../hooks/useShopData";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useShopData(`https://fakestoreapi.com/products/${id}`);
  return (
    <div className="flex justify-center mb-2">
      <div
        className="flex flex-col justify-center items-center bg-stone-200  px-10 py-10 w-[400px] mt-5  
  gap-8 shadow-2xl"
      >
        <h1 className="font-extrabold text-gray-600  text-xl">{data.title}</h1>
        <img src={data.image} className="w-[200px] h-[200px] rounded-md" />

        <h2 className="text-green-500 font-bold  text-2xl">{data.price} $</h2>
        <p className="text-gray-600">{data.description}</p>
        <h2 className="text-lg text-gray-800 font-semibold">{data.category}</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
