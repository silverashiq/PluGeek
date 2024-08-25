import React from "react";
import NavbarCM from "./components/NavbarCM";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function MainSite() {
  return (
    <>
      <div className="bg-slate-100">
        <Toaster position="bottom-center" reverseOrder={false} />
        <NavbarCM />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default MainSite;
