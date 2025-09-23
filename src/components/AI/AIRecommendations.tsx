import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Users, 
  Briefcase, 
  BookOpen, 
  TrendingUp, 
  Sparkles,
  User,
  MapPin,
  Calendar,
  Star,
  Zap,
  Target,
  Award,
  MessageCircle,
  Building
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Recommendation {
  id: string;
  type: 'connection' | 'job' | 'content' | 'skill' | 'event';
  title: string;
  description: string;
  confidence: number;
  actionText: string;
  data?: any;
}

const AIRecommendations: React.FC = () => {
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'connections' | 'jobs' | 'learning'>('all');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI recommendation generation
    const generateRecommendations = () => {
      const mockRecommendations: Recommendation[] = [
        {
          id: '1',
          type: 'connection',
          title: 'Connect with Emily Chen',
          description: 'Senior Data Scientist at Microsoft, also studied Computer Science. 95% profile match based on your interests in AI and machine learning.',
          confidence: 95,
          actionText: 'Send Connection Request',
          data: {
            name: 'Emily Chen',
            position: 'Senior Data Scientist',
            company: 'Microsoft',
            mutualConnections: 3,
            university: 'MIT'
          }
        },
        {
          id: '2',
          type: 'job',
          title: 'AI Research Intern at OpenAI',
          description: 'Perfect match for your machine learning skills and academic background. This role aligns with your career interests and skill set.',
          confidence: 88,
          actionText: 'View Job Details',
          data: {
            company: 'OpenAI',
            location: 'San Francisco, CA',
            type: 'Internship',
            salary: '$8,000/month'
          }
        },
        {
          id: '3',
          type: 'content',
          title: 'Trending: "The Future of AI in Healthcare"',
          description: 'Based on your interests in AI and recent engagement patterns, this article by Dr. Sarah Kim is gaining traction in your network.',
          confidence: 82,
          actionText: 'Read Article',
          data: {
            author: 'Dr. Sarah Kim',
            readTime: '8 min read',
            likes: 234,
            comments: 45
          }
        },
        {
          id: '4',
          type: 'skill',
          title: 'Learn TensorFlow Advanced Techniques',
          description: 'Enhance your machine learning expertise. 78% of professionals in your field recommend this skill for career advancement.',
          confidence: 78,
          actionText: 'Start Learning',
          data: {
            platform: 'Coursera',
            duration: '6 weeks',
            difficulty: 'Intermediate',
            rating: 4.8
          }
        },
        {
          id: '5',
          type: 'event',
          title: 'MIT AI Symposium 2024',
          description: 'Virtual event featuring industry leaders. Perfect networking opportunity with 500+ attendees from your field.',
          confidence: 91,
          actionText: 'Register Now',
          data: {
            date: 'March 15, 2024',
            time: '2:00 PM EST',
            attendees: 500,
            speakers: ['Andrew Ng', 'Fei-Fei Li']
          }
        },
        {
          id: '6',
          type: 'connection',
          title: 'Alumni Network Expansion',
          description: 'Connect with 12 MIT alumni working in AI/ML at top tech companies. Expand your professional network strategically.',
          confidence: 85,
          actionText: 'View Alumni',
          data: {
            count: 12,
            companies: ['Google', 'Meta', 'Apple', 'Tesla'],
            avgExperience: '5+ years'
          }
        }
      ];

      setRecommendations(mockRecommendations);
      setIsLoading(false);
    };

    setTimeout(generateRecommendations, 1500);
  }, [user]);

  const filteredRecommendations = recommendations.filter(rec => {
    if (activeTab === 'all') return true;
    if (activeTab === 'connections') return rec.type === 'connection';
    if (activeTab === 'jobs') return rec.type === 'job';
    if (activeTab === 'learning') return rec.type === 'skill' || rec.type === 'content' || rec.type === 'event';
    return true;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'connection': return <Users className="w-5 h-5" />;
      case 'job': return <Briefcase className="w-5 h-5" />;
      case 'content': return <BookOpen className="w-5 h-5" />;
      case 'skill': return <Target className="w-5 h-5" />;
      case 'event': return <Calendar className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'connection': return 'from-blue-500 to-indigo-600';
      case 'job': return 'from-green-500 to-emerald-600';
      case 'content': return 'from-purple-500 to-violet-600';
      case 'skill': return 'from-orange-500 to-red-600';
      case 'event': return 'from-pink-500 to-rose-600';
      default: return 'from-indigo-500 to-purple-600';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600 bg-green-100';
    if (confidence >= 80) return 'text-blue-600 bg-blue-100';
    if (confidence >= 70) return 'text-orange-600 bg-orange-100';
    return 'text-gray-600 bg-gray-100';
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center animate-pulse">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Recommendations
            </h2>
            <p className="text-gray-600">Generating personalized suggestions...</p>
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              AI Recommendations ✨
            </h2>
            <p className="text-gray-600">Personalized suggestions powered by AI</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Zap className="w-4 h-4 text-yellow-500" />
          <span className="text-gray-600 font-medium">Updated 2 min ago</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6 bg-gray-50 p-2 rounded-2xl">
        {[
          { id: 'all', label: 'All', icon: Sparkles },
          { id: 'connections', label: 'Network', icon: Users },
          { id: 'jobs', label: 'Opportunities', icon: Briefcase },
          { id: 'learning', label: 'Growth', icon: TrendingUp }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'text-gray-600 hover:bg-white hover:shadow-sm'
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Recommendations */}
      <div className="space-y-4">
        {filteredRecommendations.map(rec => (
          <div
            key={rec.id}
            className="group p-6 border border-indigo-100 rounded-2xl hover:shadow-lg hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4 flex-1">
                <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(rec.type)} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  {getTypeIcon(rec.type)}
                  <span className="text-white">{getTypeIcon(rec.type)}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {rec.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getConfidenceColor(rec.confidence)}`}>
                      {rec.confidence}% match
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{rec.description}</p>
                  
                  {/* Additional Data */}
                  {rec.data && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {rec.type === 'connection' && (
                        <>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                            <Building className="w-3 h-3" />
                            <span>{rec.data.company}</span>
                          </span>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                            <Users className="w-3 h-3" />
                            <span>{rec.data.mutualConnections} mutual</span>
                          </span>
                        </>
                      )}
                      {rec.type === 'job' && (
                        <>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                            <MapPin className="w-3 h-3" />
                            <span>{rec.data.location}</span>
                          </span>
                          <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold">
                            {rec.data.salary}
                          </span>
                        </>
                      )}
                      {rec.type === 'content' && (
                        <>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                            <User className="w-3 h-3" />
                            <span>{rec.data.author}</span>
                          </span>
                          <span className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
                            {rec.data.readTime}
                          </span>
                        </>
                      )}
                      {rec.type === 'skill' && (
                        <>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm">
                            <Star className="w-3 h-3" />
                            <span>{rec.data.rating}/5</span>
                          </span>
                          <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                            {rec.data.duration}
                          </span>
                        </>
                      )}
                      {rec.type === 'event' && (
                        <>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm">
                            <Calendar className="w-3 h-3" />
                            <span>{rec.data.date}</span>
                          </span>
                          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                            {rec.data.attendees}+ attendees
                          </span>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
              
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group-hover:scale-105">
                {rec.actionText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AI Insights Footer */}
      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
        <div className="flex items-center space-x-3 mb-3">
          <Award className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-indigo-900">AI Insights</h3>
        </div>
        <p className="text-indigo-700 text-sm leading-relaxed">
          Your profile shows strong engagement in AI/ML content. Consider connecting with more industry professionals 
          and attending virtual events to expand your network by 40% this month! 🚀
        </p>
      </div>
    </div>
  );
};

export default AIRecommendations;