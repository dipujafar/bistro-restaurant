import { FaAd, FaBook, FaCalendar, FaHome, FaList, FaPhone, FaSearch, FaShoppingBag, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="manu p-4 space-y-2">
                    {isAdmin
                        ?
                        <>
                            <li>
                                <NavLink to='/dashboard/adminHome' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/addItems' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manage' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaList></FaList>
                                     Manage Items</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/booking' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaBook></FaBook>
                                    Manage Booking</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/user' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaUser></FaUser>
                                    All User</NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink to='/dashboard/userHome' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaHome></FaHome>
                                    User Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/reservation' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaCalendar></FaCalendar>
                                    Reservation</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/cart' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart ({cart.length})</NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/review' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaAd></FaAd>
                                    Add a Review</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/booking' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                                    <FaBook></FaBook>
                                    My Booking</NavLink>
                            </li>
                        </>}

                    <div className="divider"></div>
                    <li>
                        <NavLink to='/' className='flex  items-center gap-2'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu' className='flex  items-center gap-2'>
                            <FaSearch></FaSearch>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className='flex  items-center gap-2'>
                            <FaPhone></FaPhone>
                            contact
                        </NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;