import MainSite from "./MainSite";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { MyProvider } from "./Context/MyContext";

export default function App() {

const navigate=useNavigate();
  return (
    <>
      <NextUIProvider navigate={navigate}>
      <MyProvider>
        <MainSite />
      </MyProvider>
      </NextUIProvider>
    </>
  );
}
