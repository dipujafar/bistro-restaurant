import { FaAd, FaBook, FaCalendar, FaHome, FaPhone, FaSearch, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="manu p-4 space-y-2">
                    <li>
                        <NavLink to='/dashboard/userHome' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/reservation' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                            <FaCalendar></FaCalendar>
                            Reservation</NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/cart' className={({ isActive }) => (`flex  items-center gap-2 ${isActive ? "bg-red-600" : ""}`)} >
                            <FaShoppingCart></FaShoppingCart>
                            Cart</NavLink>
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
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;