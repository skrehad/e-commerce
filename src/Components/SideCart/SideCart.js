import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Sidebar = ({ totalPrice, onCheckout }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar my-8 bg-gray-200 p-4">
      <div className="text-center">
        <div className="my-6">
          <p className="text-xl font-bold font-mono mt-2">
            Name: <span className="text-[#ff3633]">{user?.displayName}</span>
          </p>
          <p className="text-xl font-bold font-mono">
            Email: <span className="text-[#ff3633]">{user?.email}</span>
          </p>
        </div>
      </div>

      <hr className="my-6 border-t border-gray-400" />

      <div className="text-center my-6">
        <h2 className="text-xl font-bold font-mono">Total Price</h2>
        <p className="text-3xl font-bold text-[#ff3633]">${totalPrice}</p>
        <button
          onClick={onCheckout}
          className="btn bg-[#ff3633] text-white py-2 px-4 mt-4 rounded-md hover:bg-red-500 transition duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
