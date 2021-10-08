import React from "react";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { Route } from "./route/Route";

const isAuth = false

export const App = () => {

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Route />
      <Navbar />
    </>
  );
};
