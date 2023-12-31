import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/login/Login";
import SingUp from "../pages/singUp/SingUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AllUser from "../pages/dashboard/Alluser";
import AddItems from "../pages/dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/dashboard/ManageItems";
import UpdateItem from "../pages/dashboard/UpdateItem";
import Payment from "../pages/dashboard/Payment";
import UserHome from "../pages/dashboard/UserHome";
import AdminHome from "../pages/dashboard/AdminHome";
import ErrorPage from "../pages/ErrorPage";
import Cart from "../pages/dashboard/Cart";
import PaymentHistory from "../pages/dashboard/PaymentHistory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
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
      element: <Login></Login>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/singUp",
      element: <SingUp></SingUp>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard> </PrivateRoute>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: 'cart',
          element:<Cart></Cart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        // Admin only route
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>,
        },
        {
          path: 'user',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>,
        },
        {
          path: "manageItems",
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params})=> fetch(`https://bistro-restaurant-server-gamma.vercel.app/menu/${params.id}`)
        },
        {
          path: "adminHome",
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        }
      ]
    }
  ]);

export default router;