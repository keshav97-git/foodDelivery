import { useContext } from "react";
import { FoodContext } from "../context/foodContext";
import { Link } from "react-router-dom";

export default function Menu() {
  const {
    handleChange,
    searchedItem,
    handleVeg,
    handleSpicy,
    handlePriceHtl,
    handlePriceLth,
    handleCart,
    added,
  } = useContext(FoodContext);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        <div>
          <label htmlFor="">Filter : </label>
          <input
            type="text"
            placeholder="Seach Food here"
            onChange={handleChange}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="checkbox"
            onChange={handleVeg}
            style={{ marginLeft: "20px" }}
          />
          <label htmlFor="is_vegetarian">Veg</label>
          <input
            type="checkbox"
            onChange={handleSpicy}
            style={{ marginLeft: "20px" }}
          />
          <label htmlFor="is_spicy">Spicy</label>
          <input
            type="checkbox"
            onChange={handlePriceHtl}
            style={{ marginLeft: "20px" }}
          />
          <label htmlFor="price">Sort(Price) High to Low</label>
          <input
            type="checkbox"
            onChange={handlePriceLth}
            style={{ marginLeft: "20px" }}
          />
          <label htmlFor="price">Sort(Price) Low to High</label>
        </div>
      </div>
      <h3>Menu</h3>
      <ul style={{ display: "flex" }}>
        {searchedItem.map((item) => {
          const isAdded = added.includes(item.id);
          return (
            <li
              key={item.id}
              style={{
                border: "3px solid black",
                margin: "10px",
                padding: "10px",
                listStyle: "none",
              }}
            >
              <img src={item.image} height="150px" width="200px" alt="" />
              <p>Name : {item.name}</p>
              <p>Description : {item.description}</p>
              <p>Price : ${item.price}</p>
              <p>Delivery Time : {item.delivery_time} min</p>
              {isAdded ? (
                <Link to={"/cart"}>
                  <button>Go To Cart</button>
                </Link>
              ) : (
                <button onClick={() => handleCart(item)}>Add To Cart</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
