import React from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl w-full max-w-md">
        <Outlet />
      </div>
      
      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Protected by industry standard encryption</p>
      </footer>
    </div>
  );
}