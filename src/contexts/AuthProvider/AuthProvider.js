import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
// import { getAuth,signInWithPopup,onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [productAvailable, setproductAvailable]=useState('Available');
    const [user,setUser]=useState(null);
    // const [error,setError]=useState('')
    const [loading, setLoading] = useState(true);

    //first create user by signup
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //after create user now sign in by email and password 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //this is for google signin
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // update user info
    const updateUserProfile = (name,photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo,
        });
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("user inside state change",currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('chaka-token')
        return signOut(auth);
    }


    const imageUpload = () => {

        
    }

    const authInfo={
        user,
        createUser,
        signIn,
        providerLogin,
        loading, 
        setLoading,
        updateUserProfile,
        logOut,
        productAvailable,
        setproductAvailable
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;