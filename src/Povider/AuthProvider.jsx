import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";

 export const AuthContext = createContext();
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true)

    const createuser =(email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const signOutuser = () => {
        return signOut(auth);
    }

    useEffect(() => {
     const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
     })

            return () => {
                unsubscribe();

            }

        
    }, [])

    const authInfo = {
        user,
        setUser,
        createuser,
        signOutuser,
        signIn,
        googleSignIn,
        loading,
        setLoading,

    }
 
    return <AuthContext value={authInfo}>{children}</AuthContext>
    
};

export default AuthProvider;