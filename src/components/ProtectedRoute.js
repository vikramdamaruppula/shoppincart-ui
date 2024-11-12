import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
const ProtectedRoute = ({ isAuthenticated }) => {
  console.log(isAuthenticated, "protected ");

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
