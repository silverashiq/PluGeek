import NavbarCM from "./components/NavbarCM";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";



export default function App() {

  
  return (
    <>
      <div className="bg-slate-100">
        <NavbarCM />
        <Outlet/>
        <Footer />
      </div>
    </>
  );
}
