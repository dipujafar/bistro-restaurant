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
import AllUser from "../pages/dashboard/Alluser";
import AddItems from "../pages/dashboard/AddItems";
import AdminRoute from "./AdminRoute";


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
        },
        // Admin only route
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>,
        },
        {
          path: 'user',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>,
        }
      ]
    }
  ]);

export default router;