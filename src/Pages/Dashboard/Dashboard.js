import React from 'react';
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Link to="/dashboard/dashboardHome"> Admin Dashboard</Link>
      <Link to="/dashboard/makeAdmin"> Make Admin</Link>
      <Link to="/dashboard/deposit"> Deposit</Link>
      <Link to="/dashboard/myProfile"> My Profile</Link>
      <Link to="/dashboard/addPartners"> Add Partners</Link>
      <h2> This is Dashboard page </h2>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;