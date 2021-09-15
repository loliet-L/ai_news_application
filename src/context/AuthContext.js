import React from "react";
import { useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword,updateEmail,updatePassword , sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(){
      return signOut(auth)
  }

  function resetPassword(email){
    return sendPasswordResetEmail(auth,email)
  }

  function upEmail(email){
    updateEmail(auth.currentUser, email)
  }
  function upPassword(password){
    updatePassword(auth.currentUser, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    upEmail,
    upPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
