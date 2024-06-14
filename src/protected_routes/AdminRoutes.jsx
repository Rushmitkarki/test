import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const AdminRoutes = () => {
//   get user details first
const user = JSON.parse(localStorage.getItem("user"));
// check user
// check isAdmin = true
// if true : Access all the route of admin(outlet)
// if false: Redirect to login page

return user != null && user.isAdmin ? <Outlet/> : <Navigate to={"/login"}/>

}

export default AdminRoutes
