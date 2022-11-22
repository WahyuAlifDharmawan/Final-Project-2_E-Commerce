import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRouteAdmin = ({ children }) => {
  let location = useLocation();

  if (!localStorage.getItem("admin")) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRouteAdmin;
