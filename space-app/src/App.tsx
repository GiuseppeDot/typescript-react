import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <header>
        <CustomNavbar />
      </header>
      <main>
        <MainComponent />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
