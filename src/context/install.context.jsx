"use client";
import { createContext, useState } from "react";

export const InstallAppsContext = createContext();

const InstalledAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const addInstalledApp = (app) => {
    setInstalledApps(prev => [...prev, app]);
  };

  const removeInstalledApp = (appId) => {
    setInstalledApps(prev => prev.filter(app => app.id !== appId));
  };

  const isAppInstalled = (appId) => {
    return installedApps.some(app => app.id === appId);
  };

  const data = {
    installedApps,
    addInstalledApp,
    removeInstalledApp,
    isAppInstalled,
  };

  return (
    <InstallAppsContext.Provider value={data}>
      {children}
    </InstallAppsContext.Provider>
  );
};

export default InstalledAppsProvider;
