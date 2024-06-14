import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function UserRoutes() {
  const user = JSON.parse(localStorage.getItem("user"));
  // check user
  // check isAdmin = true
  // if true : Access all the route of admin(outlet)
  // if false: Redirect to login page

  return user != null ? <Outlet /> : <Navigate to={"/login"} />;
}

export default UserRoutes;
