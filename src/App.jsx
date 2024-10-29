import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./components/ProductDetail";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";
import ShopPage from "./pages/ShopPage";
import { CartProvider } from "./context/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route
              path="/ProductDetail/:id"
              element={<ProductDetail />}
            ></Route>
            <Route path="/Shop" element={<ShopPage />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
