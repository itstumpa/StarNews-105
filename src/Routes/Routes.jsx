import { createBrowserRouter } from "react-router";
import MainLayouts from "../components/Layout/MainLayouts";
import Home from "../components/pages/Home";
import CategoryNews from "../components/pages/CategoryNews";


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
  
]);

export default router;