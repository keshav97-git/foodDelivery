import "./styles.css";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import Cart from "./pages/cart";
import { useContext } from "react";
import { FoodContext } from "./context/foodContext";
export default function App() {
  const { cart } = useContext(FoodContext);
  return (
    <div className="App">
      <nav>
        <NavLink
          to={"/"}
          style={{ margin: "10px", color: "black", textDecoration: "none" }}
        >
          Home
        </NavLink>
        <NavLink
          to={"/menu"}
          style={{ margin: "10px", color: "black", textDecoration: "none" }}
        >
          Menu
        </NavLink>
        <NavLink
          to={"/cart"}
          style={{ margin: "10px", color: "black", textDecoration: "none" }}
        >
          Cart({cart.length})
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
