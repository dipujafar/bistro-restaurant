import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SingUp from "../pages/singUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/cart";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element:<Order></Order>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>
    },
    {
      path: "/singUp",
      element: <SingUp></SingUp>
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
      children: [
        {
          path: 'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);

export default router;