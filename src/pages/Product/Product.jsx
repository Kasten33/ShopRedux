import React from "react";
import { useState } from "react-router-dom";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCartIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderIcon";
import BalanceIcon from "@mui/icons-material/BalanceIcon";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span>$118</span>
        <p>fsfdsfdsfdsfdsfdsfdsfdsdsfds</p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> Add to Cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> Add to Wishlist
          </div>
          <div className="item">
            <BalanceIcon /> Add to Compare
          </div>
          <div className="info">
            <span>Vendor: </span>
            <span>Product: shirt</span>
            <span>Tag: shirt</span>
          </div>
          <hr />
          <div className="info">
            <span>Description</span>
            <hr />
            <span>Additional Information</span>
            <hr />
            <span>FAQ</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
