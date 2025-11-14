import { createBrowserRouter } from "react-router";
import MainLayouts from "../components/Layout/MainLayouts";
import Home from "../components/pages/Home.jsx";
import CategoryNews from "../components/pages/CategoryNews";
import Login from "../components/pages/Login.jsx";
import Register from "../components/pages/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    // errorElement: <Error/>,
    children: [
      {
    index: true, 
    element: <Home/>,
  },
  {
    path: "/category/:id",
    element: <CategoryNews />,
    loader: () => fetch("/news.json"),
  },
  {
    path: "/auth",
    element: <MainLayouts/>,
    children: [
      {
    path: "auth/login",
    element: <Login></Login>,
  },
  {
    path: "auth/register",
    element: <Register></Register>,
  },
  // {
  //   path: "/news",
  //   element: <News Layout />,
  // },
  // {
  //   path: "/error",
  //   element: <Error />,
  // },


  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  
        ],
      },
    ],
  },
  
]);

export default router;