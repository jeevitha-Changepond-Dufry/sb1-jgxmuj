import React from 'react';
import { UserPlus } from 'lucide-react';
import RegisterForm from '../components/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 text-white mb-4">
          <UserPlus className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
        <p className="mt-2 text-gray-600">Sign up for a new account</p>
      </div>
      
      <RegisterForm />
    </>
  );
}