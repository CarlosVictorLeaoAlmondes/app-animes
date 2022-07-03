import React, { Children, createContext, ReactNode } from "react";

import firebase from "firebase/compat/app";
import { Redirect, Route } from "react-router";
import { refresh } from "ionicons/icons";

interface AuthContextData {
  verifyCompletedAccount: () => void;
  logout: () => void;
}
interface AuthProviderProps {
  children: ReactNode;
}
export const AuthContext = createContext({} as AuthContextData);
export function AuthProvider({ children }: AuthProviderProps) {
  async function verifyCompletedAccount() {
    const uid = localStorage.getItem("uid");

    const database = firebase.firestore();

    const docRef = database.collection("Usuários").doc(uid!.toString());

    try {
      const user = await docRef.get();

      return user.exists;
    } catch (e) {}
  }

  async function logout() {
    firebase.auth().signOut();
    localStorage.removeItem("uid");

    return true;
  }

  return (
    <AuthContext.Provider
      value={{
        verifyCompletedAccount,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
