import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Target, 
  Award, 
  Users, 
  Briefcase, 
  BookOpen,
  BarChart3,
  PieChart,
  Calendar,
  Star,
  Zap,
  ArrowUp,
  ArrowDown,
  Brain
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface CareerMetric {
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

interface SkillGap {
  skill: string;
  currentLevel: number;
  targetLevel: number;
  demand: number;
  priority: 'high' | 'medium' | 'low';
}

interface CareerPath {
  title: string;
  probability: number;
  timeframe: string;
  requirements: string[];
  averageSalary: string;
}

const CareerInsights: React.FC = () => {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<CareerMetric[]>([]);
  const [skillGaps, setSkillGaps] = useState<SkillGap[]>([]);
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate AI analysis
    const generateInsights = () => {
      const mockMetrics: CareerMetric[] = [
        {
          label: 'Profile Views',
          value: 127,
          change: 23,
          trend: 'up',
          color: 'from-blue-500 to-indigo-600'
        },
        {
          label: 'Network Growth',
          value: 45,
          change: 12,
          trend: 'up',
          color: 'from-green-500 to-emerald-600'
        },
        {
          label: 'Skill Match Score',
          value: 78,
          change: -5,
          trend: 'down',
          color: 'from-orange-500 to-red-600'
        },
        {
          label: 'Market Demand',
          value: 92,
          change: 8,
          trend: 'up',
          color: 'from-purple-500 to-violet-600'
        }
      ];

      const mockSkillGaps: SkillGap[] = [
        {
          skill: 'TensorFlow',
          currentLevel: 3,
          targetLevel: 8,
          demand: 95,
          priority: 'high'
        },
        {
          skill: 'System Design',
          currentLevel: 4,
          targetLevel: 7,
          demand: 88,
          priority: 'high'
        },
        {
          skill: 'Docker',
          currentLevel: 2,
          targetLevel: 6,
          demand: 82,
          priority: 'medium'
        },
        {
          skill: 'GraphQL',
          currentLevel: 1,
          targetLevel: 5,
          demand: 65,
          priority: 'low'
        }
      ];

      const mockCareerPaths: CareerPath[] = [
        {
          title: 'Senior Software Engineer',
          probability: 85,
          timeframe: '2-3 years',
          requirements: ['System Design', 'Leadership', 'Advanced Algorithms'],
          averageSalary: '$140,000'
        },
        {
          title: 'Machine Learning Engineer',
          probability: 72,
          timeframe: '1-2 years',
          requirements: ['TensorFlow', 'PyTorch', 'MLOps'],
          averageSalary: '$155,000'
        },
        {
          title: 'Technical Lead',
          probability: 68,
          timeframe: '3-4 years',
          requirements: ['Team Management', 'Architecture', 'Mentoring'],
          averageSalary: '$165,000'
        }
      ];

      setMetrics(mockMetrics);
      setSkillGaps(mockSkillGaps);
      setCareerPaths(mockCareerPaths);
      setIsLoading(false);
    };

    setTimeout(generateInsights, 1500);
  }, [user]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              Career Insights
            </h2>
            <p className="text-gray-600">Analyzing your career trajectory...</p>
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="animate-pulse">
              <div className="h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Career Insights 📊
              </h2>
              <p className="text-gray-600">AI-powered career analytics and recommendations</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="text-gray-600 font-medium">Updated daily</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-2xl border border-indigo-100">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center shadow-md`}>
                  {index === 0 && <BarChart3 className="w-5 h-5 text-white" />}
                  {index === 1 && <Users className="w-5 h-5 text-white" />}
                  {index === 2 && <Target className="w-5 h-5 text-white" />}
                  {index === 3 && <TrendingUp className="w-5 h-5 text-white" />}
                </div>
                <div className={`flex items-center space-x-1 text-sm font-semibold ${
                  metric.trend === 'up' ? 'text-green-600' : metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {metric.trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  <span>{Math.abs(metric.change)}%</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
              <p className="text-sm text-gray-600 font-medium">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Gap Analysis */}
      <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-md">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Skill Gap Analysis</h3>
            <p className="text-gray-600">Areas for improvement based on market demand</p>
          </div>
        </div>

        <div className="space-y-4">
          {skillGaps.map((gap, index) => (
            <div key={index} className="p-6 border border-indigo-100 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <h4 className="text-lg font-bold text-gray-900">{gap.skill}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getPriorityColor(gap.priority)}`}>
                    {gap.priority} priority
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Market Demand</div>
                  <div className="text-lg font-bold text-indigo-600">{gap.demand}%</div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Current Level</span>
                    <span className="font-semibold">{gap.currentLevel}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full"
                      style={{ width: `${gap.currentLevel * 10}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Target Level</span>
                    <span className="font-semibold">{gap.targetLevel}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
                      style={{ width: `${gap.targetLevel * 10}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Gap: {gap.targetLevel - gap.currentLevel} levels
                </span>
                <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 text-sm">
                  Find Resources
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Career Path Predictions */}
      <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Career Path Predictions</h3>
            <p className="text-gray-600">AI-predicted career trajectories based on your profile</p>
          </div>
        </div>

        <div className="space-y-4">
          {careerPaths.map((path, index) => (
            <div key={index} className="p-6 border border-indigo-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-lg font-bold text-gray-900">{path.title}</h4>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                      {path.probability}% match
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{path.timeframe}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{path.averageSalary}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-indigo-600">{path.probability}%</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full"
                    style={{ width: `${path.probability}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-semibold text-gray-700 mb-2">Key Requirements:</h5>
                <div className="flex flex-wrap gap-2">
                  {path.requirements.map((req, reqIndex) => (
                    <span
                      key={reqIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Create Action Plan 🚀
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerInsights;