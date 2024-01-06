/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <Helmet>
            <title>{user?.displayName}'s Home</title>
        </Helmet>
            <h2 className="text-2xl uppercase">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user?.displayName : "Back"
                }
            </h2>
        </div>
    );
};

export default UserHome;