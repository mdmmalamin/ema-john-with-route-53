import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user, setUser] = useState([]);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const authInfo = {user, createUser, signInUser, signOutUser};

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;