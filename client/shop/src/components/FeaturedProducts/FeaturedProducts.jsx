import React from "react";
import "./FeaturedProducts.css";
import Cards from "../Cards/Cards";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const [data, loading, error] = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products </h1>
        <p>WOWOOWOWOWOWOWOOWOWOOWOWwoowowowowowowo very cool huh.</p>
      </div>
      <div className="bottom">
        {error
          ? "somthing went wrong"
          : loading
          ? "loading"
          : data.map((item) => <Cards item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
