import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Dashboard/AdminPages/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AdminPages/AllSellers";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";
import Mywishlist from "../../Pages/Dashboard/Mywishlist/Mywishlist";
import AddAProducts from "../../Pages/Dashboard/SellerPages/AddAProducts";
import MyBuyers from "../../Pages/Dashboard/SellerPages/MyBuyers";
import MyProducts from "../../Pages/Dashboard/SellerPages/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from '../../Pages/Blog/Blog'
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
          fetch(
            `https://a-12-chakka-server-side.vercel.app/categorie/${params.categoryName}`
          ),
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
      {
        path: "blog",
        element:<Blog></Blog>
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/my-orders/:email",
        element: (
          <PrivateRoute>
            <Myorders></Myorders>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/seller/add-a-products",
        element: (
          <PrivateRoute>
            <AddAProducts></AddAProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/seller/my-products/:email",
        // loader: ({ params }) =>
        // fetch(`https://a-12-chakka-server-side.vercel.app/dashboard/seller/my-products/${params.email}`),
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/seller/my-products",
        element: (
          <PrivateRoute>
            <MyBuyers></MyBuyers>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/All-Sellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/wishlist/:email",
        element: <Mywishlist></Mywishlist>,
      },
      {
        path: "/dashboard/admin/All-Buyers",
        element: <AllBuyers></AllBuyers>,
      },
    ],
  },
]);
