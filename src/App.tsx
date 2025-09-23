import React, { useState } from 'react';
import { User, Sparkles } from 'lucide-react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import LandingPage from './components/Welcome/LandingPage';
import Feed from './components/Feed/Feed';
import ProfilePage from './components/Profile/ProfilePage';
import LoadingSpinner from './components/Common/LoadingSpinner';
import AIRecommendations from './components/AI/AIRecommendations';
import SmartSearch from './components/AI/SmartSearch';
import CareerInsights from './components/AI/CareerInsights';

const AuthenticatedApp: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('feed');

  const renderContent = () => {
    switch (activeTab) {
      case 'feed':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Feed />
              </div>
              <div className="space-y-6">
                <AIRecommendations />
              </div>
            </div>
          </div>
        );
      case 'profile':
        return <ProfilePage />;
      case 'search':
        return (
          <div className="space-y-8">
            <SmartSearch />
          </div>
        );
      case 'insights':
        return (
          <div className="space-y-8">
            <CareerInsights />
          </div>
        );
      case 'connections':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-10 text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                My Network 🌐
              </h2>
              <p className="text-gray-600 mb-8 text-lg">Connect with students and alumni from your university</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for connection cards */}
                <div className="p-6 border border-indigo-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600 mb-4">Senior Software Engineer</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                    Connect 🤝
                  </button>
                </div>
                <div className="p-6 border border-indigo-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Alex Rodriguez</h3>
                  <p className="text-sm text-gray-600 mb-4">ML Engineer at Tesla</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                    Connect 🤝
                  </button>
                </div>
                <div className="p-6 border border-indigo-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Dr. Emily Chen</h3>
                  <p className="text-sm text-gray-600 mb-4">Data Scientist at Microsoft</p>
                  <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                    Connect 🤝
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      case 'messages':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-10 text-center">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Messages 💬
              </h2>
              <p className="text-gray-600 text-lg">Start conversations with your network</p>
            </div>
          </div>
        );
      case 'jobs':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-10">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Job Opportunities 💼
              </h2>
              <div className="space-y-6">
                <div className="p-8 border border-indigo-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        AI Research Intern
                      </h3>
                      <p className="text-gray-600 mb-3 font-semibold text-lg">DeepMind • London, UK</p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Join our cutting-edge research team working on the next generation of AI systems.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                          Machine Learning
                        </span>
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                          Python
                        </span>
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                          TensorFlow
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">📅 Posted 2 days ago</p>
                    </div>
                    <button className="ml-6 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                      Apply 🚀
                    </button>
                  </div>
                </div>
                
                <div className="p-8 border border-indigo-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:border-indigo-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Full Stack Developer
                      </h3>
                      <p className="text-gray-600 mb-3 font-semibold text-lg">Stripe • San Francisco, CA</p>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        Build the future of online payments with cutting-edge web technologies.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          React
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          Node.js
                        </span>
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                          TypeScript
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">📅 Posted 1 week ago</p>
                    </div>
                    <button className="ml-6 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold">
                      Apply 🚀
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <Feed />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="py-10 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
    </div>
  );
};

const UnauthenticatedApp: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'login' | 'register'>('landing');

  if (currentView === 'landing') {
    return (
      <LandingPage
        onShowLogin={() => setCurrentView('login')}
        onShowRegister={() => setCurrentView('register')}
      />
    );
  }

  if (currentView === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <LoginForm onToggleForm={() => setCurrentView('register')} />
          <div className="text-center mt-6">
            <button
              onClick={() => setCurrentView('landing')}
              className="text-indigo-600 hover:text-purple-600 font-semibold transition-colors duration-200"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <RegisterForm onToggleForm={() => setCurrentView('login')} />
        <div className="text-center mt-6">
          <button
            onClick={() => setCurrentView('landing')}
            className="text-indigo-600 hover:text-purple-600 font-semibold transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

const AppContent: React.FC = () => {
  const { user } = useAuth();
  
  if (user === undefined) {
    return <LoadingSpinner />;
  }

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;