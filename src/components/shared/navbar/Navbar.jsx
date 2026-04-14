import React from "react";
import logoImg from "../../../assets/logo.png";
import { FaGithub, FaSearch, FaBell, FaUser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
      <div className="flex items-center justify-between gap-4 py-3 px-6 container mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logoImg}
            alt="App Store Logo"
            className="w-12 h-12 rounded-xl shadow-lg"
            width={48}
            height={48}
          />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            AppHub
          </span>
        </Link>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search apps, games, tools..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-transparent rounded-2xl focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="px-4 py-2 rounded-xl text-gray-600 hover:text-purple-600 hover:bg-purple-50 font-medium transition-all"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>

          <button className="p-3 rounded-2xl hover:bg-gray-100 text-gray-600 transition-all">
            <FaBell className="w-5 h-5" />
          </button>

          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all">
            <FaGithub />
            Contribute
          </button>

          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold cursor-pointer hover:scale-105 transition-transform">
            <FaUser />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
