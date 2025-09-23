export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'alumni';
  profileImage?: string;
  headline?: string;
  location?: string;
  university: string;
  graduationYear: number;
  major: string;
  company?: string;
  position?: string;
  bio?: string;
  skills: string[];
  connections: string[];
  createdAt: Date;
}

export interface Post {
  id: string;
  authorId: string;
  author: User;
  content: string;
  images?: string[];
  likes: string[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  authorId: string;
  author: User;
  content: string;
  createdAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'internship' | 'contract';
  description: string;
  requirements: string[];
  postedBy: string;
  applicants: string[];
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}