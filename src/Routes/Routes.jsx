import { createBrowserRouter } from "react-router";
// import Login from "../Pages/Login/Login.jsx";
// import Home from "../Pages/Home/Home";
// import Error from "../Pages/Error";
import MainLayouts from "../components/Layout/MainLayouts";
// import Register from "../Pages/Register/Register.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    // errorElement: <Error/>,
    children: [
      {
    index: true, 
    // element: <Home/>,
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