import React from "react";
import Link from "next/link";

export const metadata = {
  title: "page not found",
  description: "This is an application management website",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
      {/* Illustration */}
      <svg
        width="220"
        height="160"
        viewBox="0 0 220 160"
        fill="none"
        className="mb-8"
      >
        <ellipse cx="110" cy="130" rx="70" ry="12" fill="#f1f0f0" />
        <rect
          x="70"
          y="40"
          width="80"
          height="80"
          rx="12"
          fill="#f1f0f0"
          stroke="#ddd"
          strokeWidth="1"
        />
        <rect
          x="82"
          y="54"
          width="56"
          height="40"
          rx="6"
          fill="#e8e8e8"
          stroke="#ccc"
          strokeWidth="0.5"
        />
        <circle
          cx="110"
          cy="74"
          r="10"
          fill="none"
          stroke="#999"
          strokeWidth="1.5"
        />
        <line
          x1="117"
          y1="81"
          x2="126"
          y2="90"
          stroke="#999"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <text x="110" y="110" textAnchor="middle" fontSize="11" fill="#999">
          not found
        </text>
        <circle cx="55" cy="55" r="6" fill="#B5D4F4" opacity="0.7" />
        <circle cx="160" cy="42" r="8" fill="#9FE1CB" opacity="0.5" />
        <circle cx="48" cy="90" r="5" fill="#F5C4B3" opacity="0.6" />
        <circle cx="168" cy="70" r="4" fill="#CECBF6" opacity="0.6" />
      </svg>

      {/* 404 */}
      <h1 className="text-8xl font-medium tracking-tighter text-gray-900 mb-2">
        404
      </h1>
      <h2 className="text-2xl font-medium text-gray-900 mb-3">
        Page not found
      </h2>
      <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
        The page you're looking for doesn't exist or may have been moved. Let's
        get you back on track.
      </p>

      {/* Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        <Link
          href="/"
          className="px-6 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          Go home
        </Link>
        <a
          href="javascript:history.back()"
          className="px-6 py-2.5 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
        >
          ← Go back
        </a>
      </div>
    </div>
  );
}
