'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Mylink = ({ href, children, className = "" }) => {
  const pathName = usePathname();
  
  const isActive = pathName === href || (href !== "/" && pathName.startsWith(href));
  
  const activeClasses = "border-b-2 border-purple-500 text-purple-700";
  const inactiveClasses = "text-gray-600 hover:text-purple-600 hover:bg-purple-50";

  return (
    <Link 
      href={href} 
      className={`px-4 py-2 rounded-xl font-medium transition-all ${isActive ? activeClasses : inactiveClasses} ${className}`}
    >
      {children}
    </Link>
  );
};

export default Mylink;
