import { createContext, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import app from '../firebase/firebase-config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    // for user state
    const [user, setUser] = useState(null);

    // for loading state
    const [loading, setLoading] = useState(false);

    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

        // Observe user login or not
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, loggedUser => {
                setUser(loggedUser);
                setLoading(false)
            })
            return () => {
                unsubscribe();
            }
        }, [])


    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        login,
        googleLogin,
        logOut,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;