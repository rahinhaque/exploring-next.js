'use client'
import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <HashLoader 
          color="#8b5cf6" 
          size={80} 
          speedMultiplier={1.5}
        />
        <p className="mt-6 text-xl font-semibold text-gray-600">
          Loading amazing apps...
        </p>
      </div>
    </div>
  );
};

export default Loading;
