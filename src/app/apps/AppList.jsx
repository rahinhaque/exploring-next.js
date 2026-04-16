"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStar, FaHeart, FaSearch, FaFilter } from "react-icons/fa";
import { HashLoader } from "react-spinners";
import InstallToggleButton from "@/components/apps/InstallToggleButton";

const AppList = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    "All",
    "Productivity",
    "Health",
    "Creative",
    "Developer",
    "Entertainment",
    "Wellness",
    "Games",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const response = await fetch("/data.json");
        const data = await response.json();
        setApps(data);
      } catch (error) {
        console.error("Error loading apps:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRandomColor = () => {
    const colors = [
      "from-blue-500 to-indigo-600",
      "from-green-500 to-emerald-600",
      "from-purple-500 to-pink-600",
      "from-orange-500 to-red-600",
      "from-pink-500 to-rose-600",
      "from-teal-500 to-cyan-600",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <HashLoader color="#8b5cf6" size={80} speedMultiplier={1.5} />
          <p className="mt-6 text-xl font-semibold text-gray-600">
            Loading amazing apps...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
            All Apps
          </h1>
          <p className="text-gray-600 text-lg">
            Browse and discover {apps.length} amazing applications
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search apps..."
              className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 outline-none transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-2xl hover:border-purple-500 transition-all">
            <FaFilter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-xl font-medium transition-all ${
                index === 0
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {apps.map((app) => {
            const gradientColor = getRandomColor();
            
            return (
              <Link 
                key={app.id} 
                href={`/apps/${app.id}`}
                className="group block bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientColor} flex items-center justify-center text-3xl shadow-lg overflow-hidden`}>
                    {app.image ? (
                      <Image 
                        src={app.image} 
                        alt={app.title} 
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    ) : (
                      '📱'
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {app.title}
                    </h3>
                    <p className="text-sm text-gray-500">{app.companyName}</p>
                  </div>
                  <button 
                    className="p-2 rounded-xl bg-gray-100 text-gray-400 hover:bg-pink-100 hover:text-pink-500 transition-all" 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <FaHeart className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-600 mb-5 line-clamp-2">
                  {app.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 gap-4">
                  <div className="flex items-center gap-1.5">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span className="font-semibold text-gray-900">{app.ratingAvg}</span>
                  </div>
                  <div onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}>
                    <InstallToggleButton app={app} size="small" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppList;
