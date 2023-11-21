import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const AuthProvide = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password);
    };

    const singInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    };

    const updateUser= (name, photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    };

    const googleSingIn = () =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    };

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
           if(currentUser){
            const userInfo = {email: currentUser.email};
            axiosPublic.post('/jwt', userInfo)
            .then(res=>{
                if(res.data.token){
                    localStorage.setItem("access-token", res.data.token)
                }
            })
           }
           else{
            localStorage.removeItem("access-token"); 
           }
            setLoading(false);
        });

        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        singInUser,
        updateUser,
        logOut,
        loading,
        googleSingIn
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