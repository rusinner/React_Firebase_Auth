import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route
        {...rest}
        element={(props) => {
          return currentUser ? (
            <Element {...props} />
          ) : (
            <Navigate to="/login" />
          );
        }}
      ></Route>
    </Routes>
  );
}
