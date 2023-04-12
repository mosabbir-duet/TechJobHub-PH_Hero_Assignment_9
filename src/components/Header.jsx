import React from "react";

const Header = ({ headerTitle }) => {
  return (
    <header className="py-32 text-center bg-violet-50 mb-10">
      <h1 className="text-3xl font-semibold">{headerTitle}</h1>
    </header>
  );
};

export default Header;
