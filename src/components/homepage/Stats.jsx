import React from "react";

const Stats = () => {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      subtext: "21% More Than Last Month"
    },
    {
      label: "Total Reviews",
      value: "906K",
      subtext: "46% More Than Last Month"
    },
    {
      label: "Active Apps",
      value: "132+",
      subtext: "31 More Will Launch"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
          Trusted By Millions, Built For You
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <p className="text-purple-100 text-xs sm:text-sm font-medium">{stat.label}</p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">{stat.value}</p>
              <p className="text-purple-100 text-xs sm:text-sm">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
