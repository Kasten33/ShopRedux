import React from "react";
import "./Cards.scss";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD_URL +
              item.attributes?.img2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div>
          <p>{item.oldPrice || item?.attributes.price + 12}</p>
          <p>{item?.attributes.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
