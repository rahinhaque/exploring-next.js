import React from "react";
import {
  FaCogs,
  FaRocket,
  FaClock,
  FaStar,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

export const metadata = {
  title: "Dashboard",
  description: "This is an application management website",
};

const DashboardPage = () => {
  const stats = [
    {
      icon: FaStar,
      label: "Total Apps",
      value: "124",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaUsers,
      label: "Active Users",
      value: "2.5K",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: FaHeart,
      label: "Likes",
      value: "15K",
      color: "from-pink-400 to-rose-500",
    },
    {
      icon: FaRocket,
      label: "Downloads",
      value: "50K+",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-2xl shadow-lg shadow-purple-100 mb-6 sm:mb-8">
            <div className="animate-spin">
              <FaCogs className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              Dashboard Coming Soon
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4 sm:mb-6">
            Dashboard Under Construction
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-full sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            We're building something amazing! The dashboard is still in
            development, but here's a sneak peek of what's coming soon.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-6 shadow-lg`}
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <FaClock className="w-7 h-7 sm:w-10 sm:h-10 text-purple-600" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-700">Stay Tuned</span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              2025
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <FaRocket className="w-7 h-7 sm:w-10 sm:h-10 text-pink-600" />
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-700">
                Launching Soon
              </span>
            </div>
          </div>

          <div className="text-center px-4">
            <p className="text-gray-600 text-sm sm:text-lg">
              Exciting features are on the way! In the meantime, explore our
              amazing apps collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
