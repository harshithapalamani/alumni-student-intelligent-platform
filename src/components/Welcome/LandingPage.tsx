import React from 'react';
import { 
  Sparkles, 
  Users, 
  Briefcase, 
  TrendingUp, 
  MessageCircle,
  Award,
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Heart,
  Zap
} from 'lucide-react';

interface LandingPageProps {
  onShowLogin: () => void;
  onShowRegister: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onShowLogin, onShowRegister }) => {
  const features = [
    {
      icon: Users,
      title: "Connect with Alumni",
      description: "Build meaningful relationships with graduates from your university",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Briefcase,
      title: "Discover Opportunities",
      description: "Find internships, jobs, and career opportunities through your network",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Insights",
      description: "Get personalized career recommendations and skill development paths",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: MessageCircle,
      title: "Smart Networking",
      description: "Engage in meaningful conversations and build your professional network",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Students" },
    { number: "5K+", label: "Alumni Network" },
    { number: "2K+", label: "Job Placements" },
    { number: "50+", label: "Universities" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content: "ConnectHub helped me find my dream job through alumni connections. The AI recommendations were spot-on!",
      avatar: "from-blue-400 to-indigo-500"
    },
    {
      name: "Alex Rodriguez",
      role: "Data Scientist at Tesla",
      content: "The platform made networking so much easier. I connected with amazing mentors who guided my career path.",
      avatar: "from-green-400 to-emerald-500"
    },
    {
      name: "Emily Chen",
      role: "Product Manager at Microsoft",
      content: "As an alumni, I love mentoring students here. It's rewarding to give back to the community.",
      avatar: "from-purple-400 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ConnectHub
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onShowLogin}
              className="px-6 py-3 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-200"
            >
              Sign In
            </button>
            <button
              onClick={onShowRegister}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Professional Network
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 leading-tight">
            Connect. Learn. Grow.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join the most vibrant student-alumni network where meaningful connections 
            lead to extraordinary opportunities. Powered by AI to accelerate your career journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={onShowRegister}
              className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onShowLogin}
              className="px-10 py-5 border-2 border-indigo-200 text-indigo-600 rounded-2xl font-bold text-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Why Choose ConnectHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of professional networking with AI-powered features 
              designed to accelerate your career growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl shadow-lg border border-indigo-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our community members who found success through ConnectHub
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-3xl shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${testimonial.avatar} rounded-full flex items-center justify-center shadow-md`}>
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students and alumni who are already building their future through ConnectHub.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={onShowRegister}
                className="group px-10 py-5 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Join ConnectHub</span>
                <Heart className="w-5 h-5 group-hover:text-red-500 transition-colors" />
              </button>
              <button
                onClick={onShowLogin}
                className="px-10 py-5 border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">ConnectHub</span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering the next generation of professionals through meaningful connections.
          </p>
          <div className="flex items-center justify-center space-x-6 text-gray-400">
            <span>© 2024 ConnectHub</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;