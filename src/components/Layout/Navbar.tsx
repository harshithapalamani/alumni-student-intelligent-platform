import React from 'react';
import { 
  Home, 
  Users, 
  MessageCircle, 
  Briefcase, 
  Bell, 
  Search,
  LogOut,
  User,
  Sparkles,
  Brain,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const { user, logout } = useAuth();

  const navItems = [
    { id: 'feed', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Discover' },
    { id: 'connections', icon: Users, label: 'My Network' },
    { id: 'messages', icon: MessageCircle, label: 'Messaging' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'insights', icon: TrendingUp, label: 'Insights' },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-indigo-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo and Search */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                ConnectHub
              </span>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeTab === item.id
                    ? 'text-indigo-600 bg-indigo-100 shadow-sm'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <item.icon className="w-6 h-6 mb-1" />
                <span className="hidden md:inline">{item.label}</span>
              </button>
            ))}
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <button className="relative p-3 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onTabChange('profile')}
                className="flex items-center space-x-3 text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="hidden md:inline font-semibold">
                  {user?.firstName} {user?.lastName}
                </span>
              </button>
              
              <button
                onClick={logout}
                className="p-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                title="Logout"
              >
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;