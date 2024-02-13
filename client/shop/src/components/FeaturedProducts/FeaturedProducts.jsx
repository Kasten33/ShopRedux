import React from "react";
import "./FeaturedProducts.css";
import Cards from "../Cards/Cards";

const FeaturedProducts = ({ type }) => {
  const data = [];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products </h1>
        <p>WOWOOWOWOWOWOWOOWOWOOWOWwoowowowowowowo very cool huh.</p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
