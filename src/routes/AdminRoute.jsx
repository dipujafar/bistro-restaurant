
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from './../hooks/useAdmin';
import PropTypes from 'prop-types';


const AdminRoute = ({ children }) => {
    const [isAdmin, adminLoading] = useAdmin();
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading || adminLoading) {
        return <div className="min-h-screen flex justify-center items-center"><progress className="progress w-56"></progress></div>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/' state={location.pathname} replace></Navigate>
};
AdminRoute.propTypes = {
    children: PropTypes.node,
};


export default AdminRoute;