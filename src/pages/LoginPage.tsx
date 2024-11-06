import React from 'react';
import { LogIn } from 'lucide-react';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mb-4">
          <LogIn className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
        <p className="mt-2 text-gray-600">Please sign in to your account</p>
      </div>
      
      <LoginForm />
    </>
  );
}