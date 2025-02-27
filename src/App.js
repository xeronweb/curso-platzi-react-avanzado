import React, { useContext } from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Route } from "./route/Route";


export const App = () => {

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Route/>
      <Navbar />
    </>
  );
};
