import React from "react";
import Sidebar from "./Sidebar";
import "./common.css";

const Layout = ({ children }) => {
  return (
    <div className="dashboard-admin text-black">
      <Sidebar />
      <div className="content p-4 ml-64 bg-blue-100 rounded-lg shadow-lg">{children}</div>
    </div>
  );
};

export default Layout;