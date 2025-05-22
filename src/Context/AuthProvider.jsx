import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [Loader, setLoader] = useState(true)

    const Register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const SignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const SignInGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    };
    const SignOut = () => {
        return signOut(auth)
    };
    const UpdateUser = (updateInfo) => {
        return updateProfile(auth.currentUser, updateInfo)
    }
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
        Loader
    }

    return (
        <AuthContext value={users}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;