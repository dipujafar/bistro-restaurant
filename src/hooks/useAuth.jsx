import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvide";


const useAuth = () => {
    const authValue = useContext(AuthContext);
    return authValue;
};

export default useAuth;