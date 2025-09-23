import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | null>(null);

// Mock users data
const mockUsers: User[] = [
  {
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
    bio: 'Passionate computer science student with interests in AI and web development. Looking to connect with alumni and industry professionals.',
    skills: ['JavaScript', 'Python', 'React', 'Machine Learning'],
    connections: ['2'],
    createdAt: new Date('2024-01-15')
  },
  {
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
    bio: 'MIT CS alumni passionate about mentoring students and building innovative technology solutions.',
    skills: ['JavaScript', 'Python', 'React', 'System Design', 'Leadership'],
    connections: ['1'],
    createdAt: new Date('2018-05-20')
  }
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email!,
      firstName: userData.firstName!,
      lastName: userData.lastName!,
      role: userData.role!,
      headline: userData.headline || '',
      location: userData.location || '',
      university: userData.university!,
      graduationYear: userData.graduationYear!,
      major: userData.major!,
      company: userData.company || '',
      position: userData.position || '',
      bio: userData.bio || '',
      skills: userData.skills || [],
      connections: [],
      createdAt: new Date()
    };

    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...updates };
      setUser(updatedUser);
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};