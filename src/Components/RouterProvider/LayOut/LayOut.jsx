import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Home/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default MainLayout;