import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { createContext } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = { userSignUp,  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;