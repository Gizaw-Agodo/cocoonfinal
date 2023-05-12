import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const isAdmin = JSON.parse(localStorage.getItem("user"))?.user?.isAdmin;
  if (!isAdmin) {
    return <Navigate to="/logIn" />;
  }
  return children;
}

export default ProtectedRoute;
