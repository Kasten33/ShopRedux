import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.new && <span>New Season</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div>
          <p>{item.oldPrice}</p>
          <p>{item.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
