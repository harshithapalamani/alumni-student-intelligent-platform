import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 shadow-lg"></div>
        <p className="text-gray-700 font-semibold text-lg">Loading ConnectHub... ✨</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;