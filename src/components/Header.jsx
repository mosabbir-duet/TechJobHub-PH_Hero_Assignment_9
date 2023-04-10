import React from "react";
import Banner from "./Banner";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className=" bg-violet-50 py-14">
      <Nav></Nav>
      <Banner></Banner>
    </header>
  );
};

export default Header;
