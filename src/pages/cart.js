import { useContext, useState } from "react";
import { FoodContext } from "../context/foodContext";

export default function Cart() {
  const { cart } = useContext(FoodContext);
  const [totalAmt, setTotalAmt] = useState(
    cart.reduce((acc, curr) => acc + curr.price, 0)
  );
  const [couponApplied, setCouponApplied] = useState(false);

  const applyCoupon = () => {
    setTotalAmt((prevAmt) => prevAmt - 5);
    setCouponApplied(true);
  };
  return (
    <div>
      <h3>Item in Cart</h3>
      <ul style={{ display: "flex" }}>
        {cart.map((item) => {
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
            </li>
          );
        })}
      </ul>
      <button onClick={applyCoupon} disabled={couponApplied}>
        Add Coupan
      </button>
      <h4>
        Total Time for Delievery:{" "}
        {cart.reduce((acc, curr) => acc + curr.delivery_time, 0)}min
      </h4>
      <h3>Total Amount: {totalAmt} </h3>
    </div>
  );
}
