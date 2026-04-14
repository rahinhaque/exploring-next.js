import React from "react";
import bannerImg from "../../assets/hero.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="min-h-[70vh] md:min-h-[80vh] text-center space-y-6 md:space-y-8 pt-12 md:pt-[50px] px-4">
      <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
        We Build <br className="sm:hidden" />
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h2>
      <p className="text-gray-600 max-w-full sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Link
          href="https://play.google.com/store/apps?hl=en"
          className="btn px-8 py-3 rounded-xl bg-linear-to-r from-indigo-100 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Play Store
        </Link>
        <Link
          href="https://www.apple.com/app-store/"
          className="btn px-8 py-3 rounded-xl bg-gray-100 text-gray-800 font-semibold hover:bg-gray-200 transition-all"
        >
          App Store
        </Link>
      </div>
      <div className="mt-8">
        <Image
          src={bannerImg}
          className="mx-auto max-w-full h-auto rounded-2xl shadow-2xl"
          alt="Hero banner"
          width={1000}
          height={600}
        />
      </div>
    </div>
  );
};

export default Banner;
