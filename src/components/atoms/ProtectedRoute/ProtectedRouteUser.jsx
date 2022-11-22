import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRouteUser = ({ children }) => {
  let location = useLocation();

  if (!localStorage.getItem("user")) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRouteUser;
