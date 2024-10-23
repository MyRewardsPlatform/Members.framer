import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginForm, RegisterForm } from './components/AuthForms';
import { UserProfile } from './components/UserProfile';
import { Loader2 } from 'lucide-react';

function AuthContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <UserProfile />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h2>
        
        {isLogin ? <LoginForm /> : <RegisterForm />}
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AuthContent />
    </AuthProvider>
  );
}

export default App;