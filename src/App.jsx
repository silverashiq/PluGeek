import NavbarCM from "./components/NavbarCM";
import GamePage from "./Pages/GamePage";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";



export default function App() {

  
  return (
    <>
      <div className="bg-slate-100">
        <NavbarCM />
        <HomePage />
        <GamePage/>
        <Footer />
      </div>
    </>
  );
}
