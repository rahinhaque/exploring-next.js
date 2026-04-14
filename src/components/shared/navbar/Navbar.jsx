'use client'
import React, { useState } from "react";
import logoImg from "../../../assets/logo.png";
import { FaGithub, FaSearch, FaBell, FaUser, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Mylink from "./Mylink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installation",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="flex items-center justify-between gap-4 py-3 px-4 sm:px-6 container mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <Image
            src={logoImg}
            alt="App Store Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl shadow-lg"
            width={48}
            height={48}
          />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            AppHub
          </span>
        </Link>

        <div className={`hidden lg:flex flex-1 max-w-xl mx-8 ${isSearchOpen ? 'hidden' : ''}`}>
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search apps, games, tools..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            className="lg:hidden p-3 rounded-2xl hover:bg-gray-100 text-gray-600 transition-all"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <FaSearch className="w-5 h-5" />
          </button>

          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            <ul className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Mylink href={item.path}>
                    {item.text}
                  </Mylink>
                </li>
              ))}
            </ul>

            <button className="p-3 rounded-2xl hover:bg-gray-100 text-gray-600 transition-all">
              <FaBell className="w-5 h-5" />
            </button>

            <button className="hidden sm:flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all">
              <FaGithub />
              Contribute
            </button>

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition-transform">
              <FaUser />
            </div>
          </div>

          <button 
            className="md:hidden p-3 rounded-2xl hover:bg-gray-100 text-gray-600 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="lg:hidden px-4 pb-4">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search apps, games, tools..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
            />
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item, index) => (
              <Mylink key={index} href={item.path} className="block w-full">
                {item.text}
              </Mylink>
            ))}
            
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25">
                <FaGithub />
                Contribute
              </button>
              
              <div className="flex items-center justify-center gap-4">
                <button className="p-3 rounded-2xl hover:bg-gray-100 text-gray-600 transition-all">
                  <FaBell className="w-5 h-5" />
                </button>
                
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                  <FaUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
