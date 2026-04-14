import React from "react";
import {
  FaCogs,
  FaRocket,
  FaClock,
  FaStar,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg shadow-purple-100 mb-8">
            <div className="animate-spin">
              <FaCogs className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm font-semibold text-gray-700">
              Dashboard Coming Soon
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Dashboard Under Construction
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            We're building something amazing! The dashboard is still in
            development, but here's a sneak peek of what's coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
              >
                <stat.icon className="w-8 h-8" />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <FaClock className="w-10 h-10 text-purple-600" />
              </div>
              <span className="font-semibold text-gray-700">Stay Tuned</span>
            </div>
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              2025
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <FaRocket className="w-10 h-10 text-pink-600" />
              </div>
              <span className="font-semibold text-gray-700">
                Launching Soon
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-lg">
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
