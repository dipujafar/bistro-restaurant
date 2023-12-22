import { NavLink } from "react-router-dom";
import logo from '../assets/logoImg/logo.png'
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => toast.error("Successfully Logged Out"))
  }

  const navOption = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order/salad"
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Order Food
        </NavLink>
      </li>
      {
      <li>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "text-red-600" : "")}
      >
       Dashboard
      </NavLink>
    </li> 
      }
      {user ?
        <>
          <NavLink to='/dashboard/cart' className='flex justify-center items-cente mr-2'>
           <FaShoppingCart className="mr-1 text-xl"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </NavLink>
          <button onClick={handleLogout} className="btn btn-outline btn-sm btn-warning">Log Out</button>
        </>
        :
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "text-red-600" : "")}
          >
            Login
          </NavLink>
        </li>
      }
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 max-w-7xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className="w-10" />
            BISTRO <span className="text-pink-600">RESTAURANT</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOption}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Button</a> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
