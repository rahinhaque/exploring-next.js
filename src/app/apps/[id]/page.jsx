import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaStar, 
  FaArrowLeft, 
  FaShare, 
  FaHeart, 
  FaGooglePlay, 
  FaShieldAlt, 
  FaInfoCircle, 
  FaCheckCircle 
} from "react-icons/fa";
import fs from "fs/promises";
import path from "path";
import InstallToggleButton from "@/components/apps/InstallToggleButton";

async function getAppData(id) {
  try {
    const dataPath = path.join(process.cwd(), "public", "data.json");
    const data = await fs.readFile(dataPath, "utf8");
    const apps = JSON.parse(data);
    return apps.find((app) => app.id === parseInt(id));
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const app = await getAppData(id);

  return {
    title: `${app?.title} - AppHub`,
    description: app?.description || "App details page",
  };
}

const AppDetails = async ({ params }) => {
  const { id } = await params;
  const app = await getAppData(id);

  if (!app) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            App Not Found
          </h2>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl font-semibold"
          >
            <FaArrowLeft />
            Back to Apps
          </Link>
        </div>
      </div>
    );
  }

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

  const gradientColor = getRandomColor();

  const calculateTotalRatings = () => {
    return app.ratings.reduce((sum, r) => sum + r.count, 0);
  };

  const totalRatings = calculateTotalRatings();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <Link 
          href="/apps" 
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold mb-8 transition-colors"
        >
          <FaArrowLeft />
          Back to Apps
        </Link>

        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br ${gradientColor} flex items-center justify-center text-6xl shadow-xl overflow-hidden flex-shrink-0`}>
              {app.image ? (
                <Image 
                  src={app.image} 
                  alt={app.title} 
                  width={160}
                  height={160}
                  className="object-cover"
                />
              ) : (
                '📱'
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {app.title}
              </h1>
              <p className="text-lg text-purple-600 font-medium mb-4">
                {app.companyName}
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <FaStar className="w-5 h-5 text-yellow-400" />
                  <span className="text-xl font-bold text-gray-900">{app.ratingAvg}</span>
                  <span className="text-gray-500 text-sm">({app.reviews} reviews)</span>
                </div>
                <div className="text-gray-500">•</div>
                <div className="text-gray-600 font-medium">{app.downloads} downloads</div>
                <div className="text-gray-500">•</div>
                <div className="text-gray-600 font-medium">{app.size} MB</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <InstallToggleButton app={app} />
                <button className="p-4 border-2 border-gray-200 rounded-2xl hover:border-purple-500 hover:bg-purple-50 transition-all">
                  <FaShare className="w-5 h-5 text-gray-600 hover:text-purple-600" />
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-2xl hover:border-pink-500 hover:bg-pink-50 transition-all">
                  <FaHeart className="w-5 h-5 text-gray-600 hover:text-pink-600" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <FaGooglePlay className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <p className="text-sm text-gray-500 mb-1">Available on</p>
            <p className="font-semibold text-gray-900">Google Play</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <FaShieldAlt className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <p className="text-sm text-gray-500 mb-1">Security</p>
            <p className="font-semibold text-gray-900">Verified</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <FaCheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
            <p className="text-sm text-gray-500 mb-1">Rating</p>
            <p className="font-semibold text-gray-900">{app.ratingAvg}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FaInfoCircle className="text-purple-600" />
            About this app
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
            {app.description}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Ratings & Reviews</h2>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="text-center lg:text-left">
              <div className="text-6xl font-bold text-gray-900 mb-2">{app.ratingAvg}</div>
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar 
                    key={star} 
                    className={`w-6 h-6 ${star <= Math.round(app.ratingAvg) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-500">{app.reviews} reviews</p>
            </div>

            <div className="flex-1 space-y-3">
              {[...app.ratings].reverse().map((rating, index) => {
                const starNumber = 6 - index - 1;
                const percentage = (rating.count / totalRatings) * 100;
                
                return (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-sm text-gray-600 w-12">{starNumber} star</span>
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-20 text-right">
                      {(rating.count / 1000000).toFixed(1)}M
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
