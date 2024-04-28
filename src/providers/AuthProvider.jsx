import { createContext, useState } from "react";
import app from "../firebase/firebase.console";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app)

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;