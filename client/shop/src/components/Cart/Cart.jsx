import React from "react";
import "./Cart.css";
import DeleteOutLinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = ({ cart, removeFromCart }) => {
  const data = [];
  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.des?.subString(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutLinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span></span>
      </div>
      <button></button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
