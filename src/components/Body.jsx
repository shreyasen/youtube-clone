import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const showSidebar = useSelector((store) => store.app.showMenu);

  return (
    <div className="grid grid-cols-12">
      {showSidebar && <SideBar />}
      <Outlet />
    </div>
  );
};

export default Body;
