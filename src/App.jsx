import { useSelector } from "react-redux";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Link, Route, Routes } from "react-router-dom";

export default function App() {
  const cartItems = useSelector((state) => state.cart) || [];
  return (
    <>
      <div className="w-full p-4 bg-gray-200 flex justify-between gap-4">
        <div className="logo font-bold">
          <Link to="/">_Vx_</Link>
        </div>
        <div className="logo font-bold">
          <Link to="/cart"> Cart: {cartItems.length}</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
