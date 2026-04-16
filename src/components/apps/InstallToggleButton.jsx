"use client";
import React, { useState, useContext } from "react";
import { FaDownload, FaCheck } from "react-icons/fa";
import { InstallAppsContext } from "@/context/install.context";

const InstallToggleButton = ({ app, size = "large" }) => {
  const [isInstalling, setIsInstalling] = useState(false);
  const { addInstalledApp, removeInstalledApp, isAppInstalled } =
    useContext(InstallAppsContext);

  const isInstalled = isAppInstalled(app.id);

  const handleInstall = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInstalled) {
      setIsInstalling(true);
      setTimeout(() => {
        removeInstalledApp(app.id);
        setIsInstalling(false);
      }, 500);
    } else {
      setIsInstalling(true);
      setTimeout(() => {
        addInstalledApp(app);
        setIsInstalling(false);
      }, 2000);
    }
  };

  const isSmall = size === "small";

  return (
    <button
      onClick={handleInstall}
      disabled={isInstalling}
      className={`flex items-center gap-2 ${
        isSmall ? "px-3 py-2 text-sm rounded-xl" : "px-8 py-4 text-lg rounded-2xl"
      } font-bold shadow-lg transition-all ${
        isInstalled
          ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl cursor-pointer"
          : isInstalling
            ? "bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-wait"
            : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-xl cursor-pointer"
      }`}
    >
      {isInstalling ? (
        <>
          <div className={`${isSmall ? "w-4 h-4" : "w-5 h-5"} border-2 border-white border-t-transparent rounded-full animate-spin`} />
          {!isSmall && (isInstalled ? "Uninstalling..." : "Installing...")}
        </>
      ) : isInstalled ? (
        <>
          <FaCheck className={`${isSmall ? "w-4 h-4" : "w-5 h-5"}`} />
          {!isSmall && "Installed"}
        </>
      ) : (
        <>
          <FaDownload className={`${isSmall ? "w-4 h-4" : "w-5 h-5"}`} />
          {!isSmall && "Install"}
        </>
      )}
    </button>
  );
};

export default InstallToggleButton;
