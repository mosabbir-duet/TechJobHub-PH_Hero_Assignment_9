import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="pt-14 bg-violet-50 ">
      <div className="md:container mx-auto hidden lg:flex justify-between items-center ">
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
      {/* Mobile Navbar Section */}
      <div className="lg:hidden ">
        {/* Dropdown Open Button */}
        <div className="flex justify-between items-center px-4 ">
          <div>
            <Link to="/">
              <h1 className="text-3xl font-semibold">
                TechJob<span className="text-violet-500">Hub</span>
              </h1>
            </Link>
          </div>

          <div>
            <button
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className="w-5 text-gray-600" />
            </button>
          </div>
          <div>
            <button className="bg-gradient-to-br from-[#7E90FE] to-[#9873FF] px-5 py-2 rounded-lg text-white font-semibold text-xl">
              Start Applying
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div className="p-5 bg-white border rounded shadow-sm">
              {/* Logo & Button section */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/">
                    <h1 className="text-3xl font-semibold">
                      TechJob<span className="text-violet-500">Hub</span>
                    </h1>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
              {/* Mobile Nav Items Section */}
              <nav className="text-center">
                <ul className="space-y-4">
                  <li>
                    <Link to="/" className="default">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/statistics"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Statistics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/appliedjobs"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Applied Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
