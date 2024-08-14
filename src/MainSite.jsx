import React from "react";
import NavbarCM from "./components/NavbarCM";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function MainSite() {
  return (
    <>
      <div className="bg-slate-100">
        <NavbarCM />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainSite;
