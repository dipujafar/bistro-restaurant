import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvide = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    };

    const singInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });

        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        singInUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvide.propTypes = {
    children: PropTypes.node
  };

export default AuthProvide;