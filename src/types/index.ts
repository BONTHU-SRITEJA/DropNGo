export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  currentStreak: number;
  totalProblems: number;
  level: string;
  xp: number;
  nextLevelXP: number;
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  estimatedTime: string;
  prerequisites: string[];
  progress: number;
  status: 'not-started' | 'in-progress' | 'completed' | 'mastered';
  lastAccessed?: string;
  examScore?: number;
  problemsSolved: number;
  totalProblems: number;
}

export interface ExamResult {
  topicId: string;
  topicName: string;
  score: number;
  maxScore: number;
  date: string;
  timeSpent: number;
  accuracy: number;
}

export interface ProgressData {
  date: string;
  problemsSolved: number;
  accuracy: number;
  topicsCompleted: number;
}

export interface AIRecommendation {
  topicId: string;
  reason: string;
  confidence: number;
  estimatedDifficulty: number;
  prereqsMet: boolean;
}