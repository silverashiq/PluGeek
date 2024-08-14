import MainSite from "./MainSite";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function App() {

const navigate=useNavigate();
  return (
    <>
      <NextUIProvider navigate={navigate}>
        <MainSite />
      </NextUIProvider>
    </>
  );
}
