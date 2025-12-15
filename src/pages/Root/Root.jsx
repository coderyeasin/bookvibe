import React from "react";
import NavbarDesign from "../../components/Header/NavbarDesign";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavbarDesign />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Root;
