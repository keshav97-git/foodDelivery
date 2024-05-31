import { fakeFetch } from "../api/api1";
import { createContext, useState, useEffect } from "react";

export const FoodContext = createContext();

export function FoodProvider({ children }) {
  const [foodItem, setFoodItem] = useState([]);
  const [searchedItem, setSearchedItem] = useState([]);
  const [anyFilter, setAnyFilter] = useState([]);
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState([]);
  const handleData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/menu");
      if (res.status == 200) {
        console.log(res.data.menu);
        setFoodItem(res.data.menu);
        setSearchedItem(res.data.menu);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchedItem(
      foodItem.filter((item) => item.name.toLowerCase().includes(query))
    );
  };

  const handleVeg = () => {
    // setAnyFilter(true)
    setSearchedItem(
      foodItem.filter((item) => (anyFilter ? item.is_vegetarian : item))
    );
    setAnyFilter((anyFilter) => (anyFilter ? false : true));
  };

  const handlePriceHtl = () => {
    // setAnyFilter(true)
    setSearchedItem([...foodItem.sort((a, b) => b.price - a.price)]);
  };
  const handlePriceLth = () => {
    // setAnyFilter(true)
    setSearchedItem([...foodItem.sort((a, b) => a.price - b.price)]);
  };

  const handleSpicy = () => {
    // setAnyFilter(true)
    setSearchedItem(
      foodItem.filter((item) => (anyFilter ? item.is_spicy : item))
    );
    setAnyFilter((anyFilter) => (anyFilter ? false : true));
  };

  const handleCart = (item) => {
    setCart((cart) => [...cart, item]);
    setAdded((added) => [...added, item.id]);
  };

  return (
    <FoodContext.Provider
      value={{
        foodItem,
        handleChange,
        searchedItem,
        handleVeg,
        handlePriceHtl,
        handlePriceLth,
        handleSpicy,
        handleCart,
        cart,
        added,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}
