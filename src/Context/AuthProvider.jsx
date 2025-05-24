import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [themeToggle, setThemeToggle] = useState()
    const [user, setUser] = useState(null)
    const [Loader, setLoader] = useState(true)


    const Register = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const SignIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    const SignInGoogle = (provider) => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    };
    const SignOut = () => {
        setLoader(true)
        return signOut(auth)
    };
    const UpdateUser = (updateInfo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, updateInfo)
    };

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser)
                setUser(currentUser)
            }
            else {
                console.log("Log Out User")
            }
            setLoader(false)
        })
        return () => {
            unsubscrib()
        }
    }, [])

    const users = {
        Register,
        SignIn,
        SignInGoogle,
        user,
        setUser,
        SignOut,
        UpdateUser,
        Loader,
        setThemeToggle,
        themeToggle
    }

    return (
        <AuthContext value={users}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;