import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Users, 
  Briefcase, 
  BookOpen, 
  Calendar,
  TrendingUp,
  Sparkles,
  User,
  MapPin,
  Building,
  GraduationCap,
  Zap
} from 'lucide-react';

interface SearchResult {
  id: string;
  type: 'person' | 'job' | 'post' | 'event';
  title: string;
  subtitle: string;
  description: string;
  relevanceScore: number;
  tags: string[];
  metadata?: any;
}

const SmartSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'people' | 'jobs' | 'posts' | 'events'>('all');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const searchSuggestions = [
    'Machine Learning Engineers',
    'Software Engineering Internships',
    'AI Research Papers',
    'Tech Networking Events',
    'Data Science Bootcamps',
    'Startup Opportunities',
    'Alumni at Google',
    'Remote Work Tips'
  ];

  useEffect(() => {
    if (query.length > 2) {
      setIsSearching(true);
      // Simulate AI-powered search
      setTimeout(() => {
        const mockResults: SearchResult[] = [
          {
            id: '1',
            type: 'person',
            title: 'Dr. Alex Rodriguez',
            subtitle: 'Senior ML Engineer at Tesla',
            description: 'PhD in Computer Science, specializing in autonomous vehicle AI systems. MIT alumnus with 8+ years experience.',
            relevanceScore: 95,
            tags: ['Machine Learning', 'AI', 'Tesla', 'MIT Alumni'],
            metadata: {
              university: 'MIT',
              graduationYear: 2015,
              connections: 1200,
              location: 'Palo Alto, CA'
            }
          },
          {
            id: '2',
            type: 'job',
            title: 'AI Research Intern',
            subtitle: 'DeepMind - London, UK',
            description: 'Join our cutting-edge research team working on the next generation of AI systems. Perfect for PhD students.',
            relevanceScore: 88,
            tags: ['Research', 'AI', 'Internship', 'PhD'],
            metadata: {
              company: 'DeepMind',
              location: 'London, UK',
              salary: '£4,000/month',
              type: 'Internship'
            }
          },
          {
            id: '3',
            type: 'post',
            title: 'The Future of Neural Networks in 2024',
            subtitle: 'By Prof. Sarah Chen - Stanford AI Lab',
            description: 'Comprehensive analysis of emerging trends in neural network architectures and their applications...',
            relevanceScore: 82,
            tags: ['Neural Networks', 'Research', 'Stanford', 'AI Trends'],
            metadata: {
              author: 'Prof. Sarah Chen',
              likes: 456,
              comments: 89,
              readTime: '12 min'
            }
          },
          {
            id: '4',
            type: 'event',
            title: 'Global AI Summit 2024',
            subtitle: 'Virtual Conference - March 20-22',
            description: 'Three-day virtual summit featuring industry leaders, researchers, and innovators in AI.',
            relevanceScore: 79,
            tags: ['Conference', 'AI', 'Virtual', 'Networking'],
            metadata: {
              date: 'March 20-22, 2024',
              attendees: 5000,
              speakers: ['Geoffrey Hinton', 'Yann LeCun', 'Demis Hassabis'],
              price: 'Free for students'
            }
          }
        ];

        const filtered = mockResults.filter(result => {
          if (activeFilter === 'all') return true;
          if (activeFilter === 'people') return result.type === 'person';
          if (activeFilter === 'jobs') return result.type === 'job';
          if (activeFilter === 'posts') return result.type === 'post';
          if (activeFilter === 'events') return result.type === 'event';
          return true;
        });

        setResults(filtered);
        setIsSearching(false);
      }, 1000);
    } else {
      setResults([]);
    }
  }, [query, activeFilter]);

  useEffect(() => {
    // Generate smart suggestions based on user activity
    const randomSuggestions = searchSuggestions
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    setSuggestions(randomSuggestions);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'person': return <User className="w-5 h-5" />;
      case 'job': return <Briefcase className="w-5 h-5" />;
      case 'post': return <BookOpen className="w-5 h-5" />;
      case 'event': return <Calendar className="w-5 h-5" />;
      default: return <Search className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'person': return 'from-blue-500 to-indigo-600';
      case 'job': return 'from-green-500 to-emerald-600';
      case 'post': return 'from-purple-500 to-violet-600';
      case 'event': return 'from-pink-500 to-rose-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getRelevanceColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 80) return 'text-blue-600 bg-blue-100';
    if (score >= 70) return 'text-orange-600 bg-orange-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-indigo-100 p-8">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
          <Search className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Smart Search 🔍
          </h2>
          <p className="text-gray-600">AI-powered search across your network</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for people, jobs, posts, events..."
          className="w-full pl-12 pr-4 py-4 bg-gradient-to-r from-gray-50 to-indigo-50 border border-indigo-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
        />
        {isSearching && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-indigo-200 border-t-indigo-600"></div>
          </div>
        )}
      </div>

      {/* Search Suggestions */}
      {query.length === 0 && (
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-3">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-semibold text-gray-700">Trending Searches</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setQuery(suggestion)}
                className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-xl hover:from-indigo-200 hover:to-purple-200 transition-all duration-200 text-sm font-medium"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      {query.length > 0 && (
        <div className="flex space-x-2 mb-6 bg-gray-50 p-2 rounded-2xl">
          {[
            { id: 'all', label: 'All', icon: Search },
            { id: 'people', label: 'People', icon: Users },
            { id: 'jobs', label: 'Jobs', icon: Briefcase },
            { id: 'posts', label: 'Posts', icon: BookOpen },
            { id: 'events', label: 'Events', icon: Calendar }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-200 ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-white hover:shadow-sm'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Search Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">
              {results.length} results found
            </h3>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Sorted by relevance</span>
            </div>
          </div>

          {results.map(result => (
            <div
              key={result.id}
              className="group p-6 border border-indigo-100 rounded-2xl hover:shadow-lg hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${getTypeColor(result.type)} rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  {getTypeIcon(result.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {result.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRelevanceColor(result.relevanceScore)}`}>
                      {result.relevanceScore}% match
                    </span>
                  </div>
                  <p className="text-indigo-600 font-semibold mb-2">{result.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{result.description}</p>
                  
                  {/* Metadata */}
                  {result.metadata && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {result.type === 'person' && (
                        <>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                            <GraduationCap className="w-3 h-3" />
                            <span>{result.metadata.university} '{result.metadata.graduationYear.toString().slice(-2)}</span>
                          </span>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                            <MapPin className="w-3 h-3" />
                            <span>{result.metadata.location}</span>
                          </span>
                          <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">
                            {result.metadata.connections} connections
                          </span>
                        </>
                      )}
                      {result.type === 'job' && (
                        <>
                          <span className="flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">
                            <Building className="w-3 h-3" />
                            <span>{result.metadata.company}</span>
                          </span>
                          <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold">
                            {result.metadata.salary}
                          </span>
                        </>
                      )}
                    </div>
                  )}
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {query.length > 2 && results.length === 0 && !isSearching && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
          <p className="text-gray-600">Try adjusting your search terms or filters</p>
        </div>
      )}
    </div>
  );
};

export default SmartSearch;