import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import SpecificCategoryItems from "../../Pages/SpecificCategoryItems/SpecificCategoryItems";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            
                {
                    path: "/",
                    element:<Home></Home>,
                },
                
                {
                    path: "/categorie/:categoryName",
                    loader: ({ params }) =>fetch(`http://localhost:5000/categorie/${params.categoryName}`),
                    element:<PrivateRoute><SpecificCategoryItems></SpecificCategoryItems></PrivateRoute>,
                },
                {
                    path: "login",
                    element:<Login></Login>,
                },
                {
                    path: "signUp",
                    element:<SignUp></SignUp>,
                },

            
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>
    }
])