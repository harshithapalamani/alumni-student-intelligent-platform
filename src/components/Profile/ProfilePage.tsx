import React, { useState } from 'react';
import { 
  MapPin, 
  Building, 
  GraduationCap, 
  Calendar,
  Mail,
  Edit3,
  User,
  Plus,
  Award
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    headline: user?.headline || '',
    bio: user?.bio || '',
    location: user?.location || '',
    skills: user?.skills || []
  });

  if (!user) return null;

  const handleSave = () => {
    updateProfile(editData);
    setIsEditing(false);
  };

  const addSkill = () => {
    const skill = prompt('Add a skill:');
    if (skill && !editData.skills.includes(skill)) {
      setEditData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setEditData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Cover Photo */}
        <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700"></div>
        
        {/* Profile Info */}
        <div className="relative px-6 pb-6">
          <div className="flex items-end justify-between">
            <div className="flex items-end space-x-4 -mt-16">
              <div className="w-32 h-32 bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <User className="w-16 h-16 text-gray-400" />
              </div>
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {user.firstName} {user.lastName}
                </h1>
                {isEditing ? (
                  <input
                    type="text"
                    value={editData.headline}
                    onChange={(e) => setEditData(prev => ({ ...prev, headline: e.target.value }))}
                    className="text-lg text-gray-600 border-b border-gray-300 focus:border-blue-500 outline-none bg-transparent"
                    placeholder="Professional headline"
                  />
                ) : (
                  <p className="text-lg text-gray-600">{user.headline}</p>
                )}
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  {user.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              {isEditing ? (
                <div className="space-x-2">
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            {isEditing ? (
              <textarea
                value={editData.bio}
                onChange={(e) => setEditData(prev => ({ ...prev, bio: e.target.value }))}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about yourself..."
              />
            ) : (
              <p className="text-gray-700 leading-relaxed">
                {user.bio || 'No bio available.'}
              </p>
            )}
          </div>

          {/* Experience */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Experience</h2>
              <button className="text-blue-600 hover:text-blue-700">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            
            {user.role === 'alumni' && user.company && (
              <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{user.position}</h3>
                  <p className="text-gray-600">{user.company}</p>
                  <p className="text-sm text-gray-500">Present</p>
                </div>
              </div>
            )}
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{user.university}</h3>
                <p className="text-gray-600">{user.major}</p>
                <div className="flex items-center space-x-1 text-sm text-gray-500 mt-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {user.role === 'student' ? 'Expected ' : ''}
                    {user.graduationYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Skills */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Skills</h2>
              {isEditing && (
                <button
                  onClick={addSkill}
                  className="text-blue-600 hover:text-blue-700"
                >
                  <Plus className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {(isEditing ? editData.skills : user.skills).map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isEditing
                      ? 'bg-red-100 text-red-800 cursor-pointer hover:bg-red-200'
                      : 'bg-blue-100 text-blue-800'
                  }`}
                  onClick={isEditing ? () => removeSkill(skill) : undefined}
                >
                  {skill}
                  {isEditing && ' ×'}
                </span>
              ))}
              {user.skills.length === 0 && (
                <p className="text-gray-500 text-sm">No skills added yet.</p>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Profile views</span>
                <span className="font-semibold text-gray-900">127</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Connections</span>
                <span className="font-semibold text-gray-900">{user.connections.length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Posts</span>
                <span className="font-semibold text-gray-900">8</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Achievements</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Profile Complete</p>
                  <p className="text-sm text-gray-500">100% profile completion</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Active Member</p>
                  <p className="text-sm text-gray-500">Regular engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;