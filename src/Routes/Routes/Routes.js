import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Dashboard/AdminPages/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminPages/AllSellers";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";
import AddAProducts from "../../Pages/Dashboard/SellerPages/AddAProducts";
import MyBuyers from "../../Pages/Dashboard/SellerPages/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerPages/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import SpecificCategoryItems from "../../Pages/SpecificCategoryItems/SpecificCategoryItems";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/categorie/:categoryName",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categorie/${params.categoryName}`),
        element: (
          <PrivateRoute>
            <SpecificCategoryItems></SpecificCategoryItems>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/my-orders",
        element: <Myorders></Myorders>,
      },
      {
        path: "/dashboard/seller/add-a-products",
        element:<AddAProducts></AddAProducts>,
      },
      {
        path: "/dashboard/seller/my-products/:email",
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/dashboard/seller/my-products/${params.email}`),
        element:<MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/seller/my-products",
        element:<MyBuyers></MyBuyers>
      },
      {
        path: "/dashboard/admin/All-Sellers",
        element:<AllSellers></AllSellers>
      },
      {
        path: "/dashboard/admin/All-Buyers",
        element:<AllBuyers></AllBuyers>
      },
    ],
  },
]);
