import React from 'react';
import Link from 'next/link';
import { FaStar, FaHeart, FaDownload, FaSearch, FaFilter } from 'react-icons/fa';

export const metadata = {
  title: "All Apps - AppHub",
  description: "Browse and discover all amazing applications",
};

const AppPage = () => {
  const apps = [
    {
      id: 1,
      name: "TaskMaster Pro",
      category: "Productivity",
      icon: "📱",
      rating: 4.9,
      downloads: "2.5M",
      description: "Your ultimate task management companion",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      name: "FitLife Tracker",
      category: "Health",
      icon: "💪",
      rating: 4.8,
      downloads: "1.8M",
      description: "Track your fitness journey effortlessly",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      name: "PhotoEditor X",
      category: "Creative",
      icon: "🎨",
      rating: 4.7,
      downloads: "3.2M",
      description: "Professional photo editing made simple",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "CodeBuddy",
      category: "Developer",
      icon: "🚀",
      rating: 4.9,
      downloads: "890K",
      description: "AI-powered coding assistant",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "MusicWave",
      category: "Entertainment",
      icon: "🎵",
      rating: 4.6,
      downloads: "5.1M",
      description: "Stream your favorite music anywhere",
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      name: "Mindful",
      category: "Wellness",
      icon: "🧘",
      rating: 4.8,
      downloads: "1.2M",
      description: "Meditation and mindfulness made easy",
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 7,
      name: "NoteTaker",
      category: "Productivity",
      icon: "📝",
      rating: 4.7,
      downloads: "3.8M",
      description: "Beautiful and intuitive note-taking app",
      color: "from-amber-500 to-orange-600"
    },
    {
      id: 8,
      name: "CloudStorage",
      category: "Utilities",
      icon: "☁️",
      rating: 4.5,
      downloads: "7.2M",
      description: "Secure cloud storage for all your files",
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 9,
      name: "PuzzleMaster",
      category: "Games",
      icon: "🧩",
      rating: 4.8,
      downloads: "4.5M",
      description: "Challenging puzzles for all ages",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const categories = ["All", "Productivity", "Health", "Creative", "Developer", "Entertainment", "Wellness", "Games"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4">
            All Apps
          </h1>
          <p className="text-gray-600 text-lg">
            Browse and discover amazing applications
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
          {apps.map((app) => (
            <Link 
              key={app.id} 
              href={`/apps/${app.id}`}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${app.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {app.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-sm text-gray-500">{app.category}</p>
                </div>
                <button className="p-2 rounded-xl bg-gray-100 text-gray-400 hover:bg-pink-100 hover:text-pink-500 transition-all">
                  <FaHeart className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 mb-5 line-clamp-2">
                {app.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <FaStar className="w-4 h-4 text-yellow-400" />
                  <span className="font-semibold text-gray-900">{app.rating}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-gray-500">
                  <FaDownload className="w-4 h-4" />
                  <span>{app.downloads}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppPage;