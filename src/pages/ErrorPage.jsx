import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4 text-gray-600">404 Not Found</h1>
      <p className="text-xl mb-5 text-gray-600">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-red-500 hover:bg-red-400 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
