import React from "react";
import "./OrderRow.css";
import { Rating } from "@mui/material";

const OrderRow = ({ order, handleDelete }) => {
  // console.log(order);
  const { _id, img, pricing, rating, title } = order;
  return (
    <div className="border rounded-sm orderCard lg:h-[250px] lg:m-auto lg:my-8  p-5 lg:w-[800px] text-center border-[#37475C] my-8 mx-10">
      <div className="orderCardDiv">
        <img className="h-[200px]" src={img} alt="" srcset="" />
      </div>
      <div className="my-auto">
        <p className="font-mono font-bold">{title}</p>
        <p className="font-mono font-bold my-2">Price: ${pricing}</p>
        <p className="text-xl flex lg:ml-8 ml-4 lg:px-12 items-center font-mono font-bold">
          Rating: <Rating name="read-only" value={rating} readOnly />
        </p>
      </div>
      <div className=" my-auto">
        <button
          onClick={() => handleDelete(_id)}
          className="font-mono rounded-md hover:bg-[#ff3633] hover:text-white border p-4 border-[#37475C] font-bold"
        >
          {" "}
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderRow;
