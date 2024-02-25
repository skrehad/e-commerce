import { Rating } from "@mui/material";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./DetailsProduct.css";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import useTitle from "../../Shared/TitleChange/TitleChange";

const DetailsProduct = () => {
  useTitle("DetailsProduct");

  const details = useLoaderData();
  const { title, description, img, pricing, rating, otherImg } = details;
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState(img);
  const changeImage = (event) => {
    setImage(event.target.src);
  };
  const email = user?.email;
  const name = user?.displayName;

  const handlePlaceOrder = () => {
    const order = {
      name,
      email,
      title,
      img,
      pricing,
      rating,
    };
    fetch("https://easy-shop-backend-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Order placed successfully");
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div className="card bg-white lg:py-5 lg:my-12 lg:mx-24 my-5 mx-4 grid lg:grid-cols-2 lg:card-side shadow-2xl">
      <div className="lg:border-r  border-purple-900">
        <div className="big-img">
          <img className="w-[400px]" src={image} alt="product" />
        </div>

        {otherImg && (
          <div className="small-img">
            <img
              className="shadow-2xl"
              onMouseOver={changeImage}
              src={img}
              alt="product"
            />
            <img
              className="shadow-2xl"
              onMouseOver={changeImage}
              src={otherImg[0]}
              alt="product"
            />
            <img
              className="shadow-2xl"
              onMouseOver={changeImage}
              src={otherImg[1]}
              alt="product"
            />
          </div>
        )}
      </div>

      <div className="card-body ">
        <h2 className="card-title mb-6 font-mono">{title}</h2>
        <p className="text-xl grow-0 flex items-center font-mono font-bold">
          Price: <span className="text-[#ff3633]">${pricing}</span>
        </p>
        <p className="text-xl grow-0 flex items-center font-mono font-bold">
          Rating: <Rating name="read-only" value={rating} readOnly />
        </p>
        <p className="font-mono my-6 font-bold">{description}</p>
        <button
          onClick={handlePlaceOrder}
          className="btn m-auto my-5 w-[150px] hover:bg-[#ff0336] hover:text-white font-mono"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DetailsProduct;
