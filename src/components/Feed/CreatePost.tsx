import React, { useState } from 'react';
import { Image, Video, Calendar, FileText, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface CreatePostProps {
  onCreatePost: (content: string) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onCreatePost }) => {
  const { user } = useAuth();
  const [content, setContent] = useState('');
  const [showExpanded, setShowExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      onCreatePost(content);
      setContent('');
      setShowExpanded(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 mb-8 hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-md">
            <User className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <button
              onClick={() => setShowExpanded(true)}
              className="w-full text-left px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-gray-500 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-200 font-medium"
            >
              What's on your mind, {user?.firstName}? ✨
            </button>
          </div>
        </div>

        {!showExpanded && (
          <div className="flex items-center justify-around mt-6 pt-4 border-t border-gray-100">
            <button className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all duration-200">
              <Image className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold">Photo</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-200">
              <Video className="w-5 h-5 text-green-500" />
              <span className="font-semibold">Video</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-orange-50 hover:text-orange-600 rounded-xl transition-all duration-200">
              <Calendar className="w-5 h-5 text-orange-500" />
              <span className="font-semibold">Event</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200">
              <FileText className="w-5 h-5 text-red-500" />
              <span className="font-semibold">Article</span>
            </button>
          </div>
        )}
      </div>

      {showExpanded && (
        <div className="border-t border-indigo-100 bg-gradient-to-b from-white to-indigo-50">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-md">
                <User className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-bold text-gray-900 text-lg">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs rounded-full font-semibold">
                    {user?.role}
                  </span>
                </div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What's on your mind?"
                  className="w-full min-h-32 p-4 bg-white border border-indigo-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none shadow-sm text-lg"
                  autoFocus
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all duration-200"
                >
                  <Image className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm font-semibold">Photo</span>
                </button>
                <button
                  type="button"
                  className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-xl transition-all duration-200"
                >
                  <Video className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold">Video</span>
                </button>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowExpanded(false);
                    setContent('');
                  }}
                  className="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!content.trim()}
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Post 🚀
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;