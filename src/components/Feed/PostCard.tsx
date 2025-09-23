import React, { useState } from 'react';
import { Heart, MessageCircle, Share, MoreHorizontal, User } from 'lucide-react';
import { Post, User as UserType } from '../../types';
import { useAuth } from '../../context/AuthContext';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment: (postId: string, content: string) => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, onComment }) => {
  const { user } = useAuth();
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [isLiked, setIsLiked] = useState(post.likes.includes(user?.id || ''));

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike(post.id);
  };

  const handleComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText('');
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    return `${Math.floor(diffInSeconds / 86400)}d`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 mb-6 hover:shadow-xl transition-shadow duration-300">
      {/* Post Header */}
      <div className="p-6 flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-md">
            <User className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-bold text-gray-900 text-lg">
                {post.author.firstName} {post.author.lastName}
              </h3>
              <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs rounded-full font-semibold">
                {post.author.role}
              </span>
            </div>
            <p className="text-sm text-gray-600 font-medium">{post.author.headline}</p>
            <p className="text-xs text-gray-500 mt-1">{formatTimeAgo(post.createdAt)}</p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-50 rounded-xl transition-all duration-200">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Content */}
      <div className="px-6 pb-4">
        <p className="text-gray-900 leading-relaxed whitespace-pre-wrap text-lg">{post.content}</p>
        {post.images && post.images.length > 0 && (
          <div className="mt-3 grid grid-cols-1 gap-2">
            {post.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Post image ${index + 1}`}
                className="w-full rounded-2xl object-cover max-h-96 shadow-md"
              />
            ))}
          </div>
        )}
      </div>

      {/* Post Stats */}
      <div className="px-6 py-3 border-t border-indigo-100">
        <div className="flex items-center justify-between text-sm text-gray-600 font-medium">
          <span>❤️ {post.likes.length} likes</span>
          <span>💬 {post.comments.length} comments</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="px-6 py-4 border-t border-indigo-100 bg-gradient-to-r from-gray-50 to-indigo-50">
        <div className="flex items-center justify-around">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-200 font-semibold ${
              isLiked
                ? 'text-red-600 bg-red-100 hover:bg-red-200 shadow-sm'
                : 'text-gray-600 hover:bg-red-50 hover:text-red-600'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            <span>Like</span>
          </button>
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center space-x-2 px-6 py-3 rounded-xl text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 transition-all duration-200 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 rounded-xl text-gray-600 hover:bg-green-50 hover:text-green-600 transition-all duration-200 font-semibold">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="border-t border-indigo-100 bg-gradient-to-b from-white to-indigo-50">
          {/* Add Comment */}
          <form onSubmit={handleComment} className="p-6">
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Add a comment..."
                  className="w-full px-4 py-3 bg-white border border-indigo-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
                />
              </div>
            </div>
          </form>

          {/* Comments List */}
          <div className="px-6 pb-6 space-y-4">
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center shadow-sm">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-indigo-100">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-bold text-sm text-gray-900">
                        {comment.author.firstName} {comment.author.lastName}
                      </span>
                      <span className="text-xs text-gray-500">
                        {formatTimeAgo(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;