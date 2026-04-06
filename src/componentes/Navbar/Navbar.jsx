import React, { useState } from "react";
import { Link } from "react-router";
import logo from "../../assets/logo/10015.png";
import Container from "../Container/Container";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [submenuOpen, setSubmenuOpen] = useState({}); 

  const toggleSubmenu = (key) => {
    setSubmenuOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-8">

          {/* LOGO */}
          <Link to="/">
            <img src={logo} className="w-32" alt="logo " />
          </Link>

          {/* HAMBURGER BUTTON */}
          <button
            className="lg:hidden px-3 py-2 border rounded-md text-gray-700 border-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-28 text-xl font-medium">

            <li><Link to="/">Home</Link></li>

            {/* PAGES */}
            <li className="relative group">
              <span className="cursor-pointer px-2 py-2">Pages</span>
              <ul className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

                <li><Link className="block px-4 py-2 hover:bg-gray-100">About us</Link></li>

                {/* TEAM */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Team ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible
                    transition-all duration-200">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Our Team</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Team Details</Link></li>
                  </ul>
                </li>

                {/* CONTACT */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Contact Us ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Contact Us V.1</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Contact Us V.2</Link></li>
                  </ul>
                </li>

                {/* SERVICE */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Service ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Service V.1</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Service V.2</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Service V.3</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Service V.4</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Service Details</Link></li>
                  </ul>
                </li>

                {/* CAREERS */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Careers ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Careers Grid</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Careers Details</Link></li>
                  </ul>
                </li>

                <li><Link className="block px-4 py-2 hover:bg-gray-100">FAQs</Link></li>

                {/* SHOP */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Shop ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Shop Page</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Product Details</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Cart</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Checkout</Link></li>
                  </ul>
                </li>

                <li><Link className="block px-4 py-2 hover:bg-gray-100">404 Error</Link></li>
                <li><Link className="block px-4 py-2 hover:bg-gray-100">Landing Page</Link></li>
              </ul>
            </li>

            {/* PORTFOLIO */}
            <li className="relative group">
              <span className="cursor-pointer px-2 py-2">Portfolio</span>
              <ul className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <li><Link className="block px-4 py-2 hover:bg-gray-100">Portfolio Grid</Link></li>
                <li><Link className="block px-4 py-2 hover:bg-gray-100">Portfolio Carousal</Link></li>
                <li><Link className="block px-4 py-2 hover:bg-gray-100">Portfolio Masonry</Link></li>
                <li><Link className="block px-4 py-2 hover:bg-gray-100">Portfolio Showcase</Link></li>

                {/* Portfolio Details */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Portfolio Details ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Portfolio Details V.1</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Portfolio Details V.2</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Portfolio Details V.3</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            {/* BLOG */}
            <li className="relative group">
              <span className="cursor-pointer px-2 py-2">Blog</span>
              <ul className="absolute top-full left-0 mt-0 w-56 bg-white shadow-lg
                opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                <li><Link className="block px-4 py-2 hover:bg-gray-100">Blog Grid</Link></li>

                {/* Blog Standard */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Blog Standard ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Left Sidebar</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Right Sidebar</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Without Sidebar</Link></li>
                  </ul>
                </li>

                {/* Blog Details */}
                <li className="relative group/submenu">
                  <span className="flex justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Blog Details ▸
                  </span>
                  <ul className="absolute top-0 left-full w-52 bg-white shadow-lg
                    opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible">
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Left Sidebar</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Right Sidebar</Link></li>
                    <li><Link className="block px-4 py-2 hover:bg-gray-100">Without Sidebar</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li ><Link to="#">info@floka.com</Link></li>
          </ul>

          {/* BUTTON */}
          <button className=" hidden lg:block"><MdLightMode size={30}/></button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 gap-2 text-lg">

            <li>
              <Link to="/" className="block px-2 py-2 hover:bg-gray-100">Home</Link>
            </li>

            {/* PAGES MOBILE */}
            <li>
              <button
                className="flex justify-between w-full px-2 py-2 hover:bg-gray-100"
                onClick={() => toggleSubmenu("pages")}
              >
                Pages ▾
              </button>
              {submenuOpen["pages"] && (
                <ul className="pl-4">
                  <li><Link className="block px-2 py-2 hover:bg-gray-100">About us</Link></li>

                  {/* TEAM */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-2 hover:bg-gray-100"
                      onClick={() => toggleSubmenu("team")}
                    >
                      Team ▾
                    </button>
                    {submenuOpen["team"] && (
                      <ul className="pl-4">
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Our Team</Link></li>
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Team Details</Link></li>
                      </ul>
                    )}
                  </li>

                 
                </ul>
              )}
            </li>

            {/* PORTFOLIO MOBILE */}
            <li>
              <button
                className="flex justify-between w-full px-2 py-2 hover:bg-gray-100"
                onClick={() => toggleSubmenu("portfolio")}
              >
                Portfolio ▾
              </button>
              {submenuOpen["portfolio"] && (
                <ul className="pl-4">
                  <li><Link className="block px-2 py-2 hover:bg-gray-100">Portfolio Grid</Link></li>
                  <li><Link className="block px-2 py-2 hover:bg-gray-100">Portfolio Carousal</Link></li>
                  <li><Link className="block px-2 py-2 hover:bg-gray-100">Portfolio Masonry</Link></li>
                  <li><Link className="block px-2 py-2 hover:bg-gray-100">Portfolio Showcase</Link></li>

                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-2 hover:bg-gray-100"
                      onClick={() => toggleSubmenu("portfolioDetails")}
                    >
                      Portfolio Details ▾
                    </button>
                    {submenuOpen["portfolioDetails"] && (
                      <ul className="pl-4">
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Portfolio Details V.1</Link></li>
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Portfolio Details V.2</Link></li>
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Portfolio Details V.3</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            {/* BLOG MOBILE */}
            <li>
              <button
                className="flex justify-between w-full px-2 py-2 hover:bg-gray-100"
                onClick={() => toggleSubmenu("blog")}
              >
                Blog ▾
              </button>
              {submenuOpen["blog"] && (
                <ul className="pl-4">
                  <li><Link className="block px-2 py-2 hover:bg-gray-100">Blog Grid</Link></li>

                  {/* Blog Standard */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-2 hover:bg-gray-100"
                      onClick={() => toggleSubmenu("blogStandard")}
                    >
                      Blog Standard ▾
                    </button>
                    {submenuOpen["blogStandard"] && (
                      <ul className="pl-4">
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Left Sidebar</Link></li>
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Right Sidebar</Link></li>
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Without Sidebar</Link></li>
                      </ul>
                    )}
                  </li>

                  {/* Blog Details */}
                  <li>
                    <button
                      className="flex justify-between w-full px-2 py-2 hover:bg-gray-100"
                      onClick={() => toggleSubmenu("blogDetails")}
                    >
                      Blog Details ▾
                    </button>
                    {submenuOpen["blogDetails"] && (
                      <ul className="pl-4">
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Left Sidebar</Link></li>
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Right Sidebar</Link></li>
                        <li><Link className="block px-2 py-2 hover:bg-gray-100">Without Sidebar</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>

            <li><Link to="#" className="block px-2 py-2 hover:bg-gray-100">info@floka.com</Link></li>

          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;