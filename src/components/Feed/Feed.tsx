import React, { useState, useEffect } from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { Post, User, Comment } from '../../types';
import { useAuth } from '../../context/AuthContext';

const Feed: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  // Mock posts data
  useEffect(() => {
    const mockPosts: Post[] = [
      {
        id: '1',
        authorId: '2',
        author: {
          id: '2',
          email: 'sarah.alumni@tech.com',
          firstName: 'Sarah',
          lastName: 'Johnson',
          role: 'alumni',
          headline: 'Senior Software Engineer at Google | MIT Alumna',
          location: 'San Francisco, CA',
          university: 'MIT',
          graduationYear: 2018,
          major: 'Computer Science',
          company: 'Google',
          position: 'Senior Software Engineer',
          bio: 'MIT CS alumni passionate about mentoring students.',
          skills: ['JavaScript', 'Python', 'React', 'System Design'],
          connections: ['1'],
          createdAt: new Date('2018-05-20')
        },
        content: `🎉 Excited to share that I'm hosting a virtual tech talk next week about "Breaking into Big Tech: A Journey from Student to Senior Engineer"

Having graduated from MIT in 2018, I've learned so much about navigating the tech industry. I'd love to share insights about:
• Interview preparation strategies
• Building a strong technical foundation
• Networking and mentorship
• Career growth at top tech companies

Open to all students and recent graduates! Comment below if you're interested in joining. Let's help each other succeed! 💪

#TechTalk #CareerAdvice #BigTech #Mentorship #MIT`,
        images: [],
        likes: ['1', '3', '4'],
        comments: [
          {
            id: '1',
            authorId: '1',
            author: {
              id: '1',
              email: 'john.student@university.edu',
              firstName: 'John',
              lastName: 'Doe',
              role: 'student',
              headline: 'Computer Science Student | Aspiring Software Engineer',
              location: 'Boston, MA',
              university: 'MIT',
              graduationYear: 2025,
              major: 'Computer Science',
              bio: 'Passionate CS student interested in AI and web development.',
              skills: ['JavaScript', 'Python', 'React'],
              connections: ['2'],
              createdAt: new Date('2024-01-15')
            },
            content: 'This sounds amazing! I\'m a current MIT CS student and would love to attend. Thank you for offering to mentor us!',
            createdAt: new Date('2024-01-10T14:30:00')
          }
        ],
        createdAt: new Date('2024-01-10T10:00:00'),
        updatedAt: new Date('2024-01-10T10:00:00')
      },
      {
        id: '2',
        authorId: '1',
        author: {
          id: '1',
          email: 'john.student@university.edu',
          firstName: 'John',
          lastName: 'Doe',
          role: 'student',
          headline: 'Computer Science Student | Aspiring Software Engineer',
          location: 'Boston, MA',
          university: 'MIT',
          graduationYear: 2025,
          major: 'Computer Science',
          bio: 'Passionate CS student interested in AI and web development.',
          skills: ['JavaScript', 'Python', 'React'],
          connections: ['2'],
          createdAt: new Date('2024-01-15')
        },
        content: `Just finished my first machine learning project! 🤖

Built a sentiment analysis model that can classify movie reviews as positive or negative with 92% accuracy. Used Python, scikit-learn, and natural language processing techniques.

Key learnings:
• Data preprocessing is crucial for model performance
• Feature engineering can make or break your results  
• Cross-validation helps prevent overfitting
• Real-world data is messy - cleaning is half the battle!

Looking for internship opportunities in ML/AI. Any alumni working in this space who'd be willing to chat? Would love to learn about your career journey!

#MachineLearning #AI #StudentLife #Internship #MIT`,
        images: [],
        likes: ['2'],
        comments: [],
        createdAt: new Date('2024-01-09T16:00:00'),
        updatedAt: new Date('2024-01-09T16:00:00')
      }
    ];
    setPosts(mockPosts);
  }, []);

  const handleCreatePost = (content: string) => {
    if (!user) return;

    const newPost: Post = {
      id: Date.now().toString(),
      authorId: user.id,
      author: user,
      content,
      images: [],
      likes: [],
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  const handleLike = (postId: string) => {
    if (!user) return;

    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const isLiked = post.likes.includes(user.id);
          return {
            ...post,
            likes: isLiked
              ? post.likes.filter(id => id !== user.id)
              : [...post.likes, user.id]
          };
        }
        return post;
      })
    );
  };

  const handleComment = (postId: string, content: string) => {
    if (!user) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      authorId: user.id,
      author: user,
      content,
      createdAt: new Date()
    };

    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment]
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="space-y-6">
      <CreatePost onCreatePost={handleCreatePost} />
      
      <div className="space-y-6">
        {posts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onLike={handleLike}
            onComment={handleComment}
          />
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl shadow-xl border border-indigo-100">
          <p className="text-gray-500 text-lg">No posts yet. Be the first to share something!</p>
        </div>
      )}
    </div>
  );
};

export default Feed;