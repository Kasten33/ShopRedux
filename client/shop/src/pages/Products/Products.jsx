import React from "react";
import { useState } from "react-redux";
import { useParams } from "react-redux";
import List from "../../components/List/List";
import useFecth from "../../hooks/useFecth";
import "./Products.scss";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFecth(
    `/sub-categories/[filter][castegories][id][$eq]=${catId}`
  );

  const handleChange = (e)  => {
    const value = e.target.value
    const checked = e.target.checked

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <p>FIlter By Price</p>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min="0"
              max="1000"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
