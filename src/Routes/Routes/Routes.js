import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import SpecificCategoryItems from "../../Pages/SpecificCategoryItems/SpecificCategoryItems";

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
                    element:<SpecificCategoryItems></SpecificCategoryItems>,
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
    }
])