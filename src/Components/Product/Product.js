import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { Rating } from "@mui/material";
// import { AiFillStar } from "react-icons/ai";

const Product = ({ product }) => {
  const { _id, title, rating, description, img, pricing } = product;
  // console.log(product);
  return (
    <div>
      <div className="card cardDiv w-96 mb-8 m-auto bg-base-300 shadow-2xl">
        <img src={img} alt="Shoes" className="bg-white rounded-lg m-4" />

        <div className="card-body gap-0 px-6 py-4 items-center text-center">
          <h2 className="card-title font-mono">{title}</h2>
          <p className="text-xl flex items-center font-mono font-bold">
            Price: <span className="text-[#ff3633]">${pricing}</span>
          </p>
          <p className="text-xl flex items-center font-mono font-bold">
            Rating: <Rating name="read-only" value={rating} readOnly />
          </p>
          <p className="font-mono text-md">{description?.slice(1, 250)}...</p>
          <Link to={`/products/${_id}`}>
            <button className="btn border border-purple-900  my-2 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
