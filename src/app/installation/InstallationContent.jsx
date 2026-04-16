'use client'
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaTrashAlt, FaArrowLeft, FaDownload } from 'react-icons/fa';
import { InstallAppsContext } from '@/context/install.context';

const InstallationContent = () => {
  const { installedApps, removeInstalledApp, isAppInstalled } = useContext(InstallAppsContext);

  const getRandomColor = () => {
    const colors = [
      "from-blue-500 to-indigo-600",
      "from-green-500 to-emerald-600", 
      "from-purple-500 to-pink-600",
      "from-orange-500 to-red-600",
      "from-pink-500 to-rose-600",
      "from-teal-500 to-cyan-600"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  if (installedApps.length === 0) {
    return (
      <div className="min-h-[60vh] bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
            <FaDownload className="w-12 h-12 text-purple-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            No Apps Installed Yet
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Explore our amazing apps and download your first one today!
          </p>
          <Link 
            href="/apps" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            <FaArrowLeft />
            Browse Apps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Installed Apps
          </h1>
          <p className="text-xl text-gray-600">
            You have {installedApps.length} {installedApps.length === 1 ? 'app' : 'apps'} installed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installedApps.map((app, index) => {
            const gradientColor = getRandomColor();
            
            return (
              <div 
                key={app.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradientColor} flex items-center justify-center text-4xl shadow-lg overflow-hidden flex-shrink-0`}>
                    {app.image ? (
                      <Image 
                        src={app.image} 
                        alt={app.title} 
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                    ) : (
                      '📱'
                    )}
                  </div>

                  <div className="flex-1">
                    <Link href={`/apps/${app.id}`}>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                        {app.title}
                      </h3>
                    </Link>
                    <p className="text-purple-600 font-medium mb-3">
                      {app.companyName}
                    </p>

                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        <FaStar className="w-4 h-4 text-yellow-400" />
                        <span className="font-semibold text-gray-900">{app.ratingAvg}</span>
                      </div>
                      <div className="text-gray-400">•</div>
                      <span className="text-gray-600 text-sm">{app.size} MB</span>
                    </div>

                    <div className="flex gap-3">
                      <Link 
                        href={`/apps/${app.id}`}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold text-center hover:shadow-lg transition-all"
                      >
                        Open App
                      </Link>
                      <button 
                        onClick={() => removeInstalledApp(app.id)}
                        className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all"
                        title="Uninstall app"
                      >
                        <FaTrashAlt className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {app.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/apps" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold text-lg transition-colors"
          >
            Browse more apps →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InstallationContent;
