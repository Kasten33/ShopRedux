import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
      </div>
    </Link>
  );
};

export default Cards;
