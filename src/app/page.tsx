"use client";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 p-8 rounded-xl bg-white/5 backdrop-blur-sm shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-4">Demo Features</h1>
        <Link
          href="/carousel"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Carousel Demo
        </Link>
        <Link
          href="/localeandtheme"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Language & Theme Demo
        </Link>
      </div>
    </div>
  );
};

export default Home;
