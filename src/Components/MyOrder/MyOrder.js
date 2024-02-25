import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";
import { toast } from "react-hot-toast";
import useTitle from "../../Shared/TitleChange/TitleChange";
import Sidebar from "../SideCart/SideCart";
import { Link } from "react-router-dom";

const MyOrder = () => {
  useTitle("MyOrder");

  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      `https://easy-shop-backend-server.vercel.app/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order"
    );
    if (proceed) {
      fetch(`https://easy-shop-backend-server.vercel.app/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success(" Deleted Successfully");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  // Calculate total price
  const totalPrice = orders.reduce((acc, order) => acc + order.pricing, 0);

  const handleCheckout = () => {
    console.log("Checkout clicked");
  };

  return (
    <div className="flex gap-5 mx-10">
      <div className="orders-container">
        <div>
          {orders.length === 0 ? (
            <div className=" text-center my-8 mx-2">
              <div className="font-bold font-mono text-2xl mb-4 ">
                You have no Orders.Please Order Some Items...
              </div>
              <Link to="/products">
                <button className="btn my-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono text-center btn-outline">
                  Buy Something...
                </button>
              </Link>
            </div>
          ) : (
            orders.map((order) => (
              <OrderRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
              ></OrderRow>
            ))
          )}
        </div>

        <div className="text-center pb-8">
          {orders.length === 0 ? (
            <></>
          ) : (
            <Link to="/products">
              <button className="btn my-5 text-xl border-purple-900 hover:bg-[#ff0336] hover:text-white font-mono btn-outline">
                More Shopping...
              </button>
            </Link>
          )}
        </div>
      </div>

      <Sidebar totalPrice={totalPrice} onCheckout={handleCheckout} />
    </div>
  );
};

export default MyOrder;
