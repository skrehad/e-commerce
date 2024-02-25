import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Register from "../Components/Register/Register";
import Main from "../LayOuts/Main";
import MyOrder from "../Components/MyOrder/MyOrder";
import Products from "../Components/Products/Products";
import DetailsProduct from "../Components/DetailsProduct/DetailsProduct";
const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "/products/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://easy-shop-backend-server.vercel.app/products/${params.id}`
            );
          },
          element: <DetailsProduct></DetailsProduct>,
        },
        {
          path: "/myOrders",
          element: <MyOrder></MyOrder>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
