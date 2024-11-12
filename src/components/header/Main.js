import React from "react";
import Header from "./Header";
import Containers from "./Containers";
import Filter from "./Filter";
import { useAuth } from "../AuthProvider";

const Main = ({ isAuthenticated }) => {
  console.log(isAuthenticated, "main component");
  return (
    <>
      <Header />
      <Containers />
      <Filter />
    </>
  );
};

export default Main;
