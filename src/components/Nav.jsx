import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="md:container mx-auto flex justify-between items-center ">
        <Link to="/">
          <h1 className="text-5xl font-semibold">
            TechJob<span className="text-violet-500">Hub</span>
          </h1>
        </Link>
        <nav>
          <NavLink
            className={`header-link-style ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`header-link-style ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={`header-link-style ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to="/appliedjobs"
          >
            Applied Jobs
          </NavLink>
          <NavLink
            className={`header-link-style ${({ isActive }) =>
              isActive ? "active" : "default"}`}
            to="/blog"
          >
            Blog
          </NavLink>
        </nav>
        <button className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] px-7 py-4 rounded-lg text-white font-semibold text-xl">
          Start Applying
        </button>
      </div>
    </>
  );
};

export default Nav;
