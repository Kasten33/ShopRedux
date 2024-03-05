import React from "react";
import { useParams, useState } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCartIcon";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorderIcon";
import BalanceIcon from "@mui/icons-material/BalanceIcon";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span>{data?.attributes?.price}</span>
            <p>{data?.attributes?.des}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
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
        </>
      )}
    </div>
  );
};
export default Product;
