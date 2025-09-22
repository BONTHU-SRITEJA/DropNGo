import { User, Topic, ExamResult, ProgressData, AIRecommendation } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
  joinDate: '2024-01-15',
  currentStreak: 12,
  totalProblems: 156,
  level: 'Intermediate',
  xp: 2340,
  nextLevelXP: 3000
};

export const mockTopics: Topic[] = [
  {
    id: '1',
    name: 'Arrays & Strings',
    description: 'Master fundamental array operations and string manipulation techniques',
    difficulty: 'Beginner',
    category: 'Data Structures',
    estimatedTime: '2-3 weeks',
    prerequisites: [],
    progress: 85,
    status: 'completed',
    lastAccessed: '2024-01-20',
    examScore: 92,
    problemsSolved: 34,
    totalProblems: 40
  },
  {
    id: '2',
    name: 'Linked Lists',
    description: 'Understanding pointers, node operations, and list manipulations',
    difficulty: 'Beginner',
    category: 'Data Structures',
    estimatedTime: '2 weeks',
    prerequisites: ['Arrays & Strings'],
    progress: 60,
    status: 'in-progress',
    lastAccessed: '2024-01-22',
    examScore: 78,
    problemsSolved: 18,
    totalProblems: 30
  },
  {
    id: '3',
    name: 'Binary Trees',
    description: 'Tree traversal, binary search trees, and tree algorithms',
    difficulty: 'Intermediate',
    category: 'Data Structures',
    estimatedTime: '3-4 weeks',
    prerequisites: ['Linked Lists'],
    progress: 25,
    status: 'in-progress',
    lastAccessed: '2024-01-18',
    problemsSolved: 8,
    totalProblems: 35
  },
  {
    id: '4',
    name: 'Dynamic Programming',
    description: 'Optimization problems, memoization, and tabulation techniques',
    difficulty: 'Advanced',
    category: 'Algorithms',
    estimatedTime: '4-5 weeks',
    prerequisites: ['Binary Trees', 'Recursion'],
    progress: 0,
    status: 'not-started',
    problemsSolved: 0,
    totalProblems: 45
  },
  {
    id: '5',
    name: 'Graph Algorithms',
    description: 'BFS, DFS, shortest paths, and network flow algorithms',
    difficulty: 'Advanced',
    category: 'Algorithms',
    estimatedTime: '4-6 weeks',
    prerequisites: ['Binary Trees'],
    progress: 0,
    status: 'not-started',
    problemsSolved: 0,
    totalProblems: 50
  },
  {
    id: '6',
    name: 'Hash Tables',
    description: 'Hash functions, collision resolution, and hash-based data structures',
    difficulty: 'Intermediate',
    category: 'Data Structures',
    estimatedTime: '2-3 weeks',
    prerequisites: ['Arrays & Strings'],
    progress: 0,
    status: 'not-started',
    problemsSolved: 0,
    totalProblems: 25
  }
];

export const mockExamResults: ExamResult[] = [
  {
    topicId: '1',
    topicName: 'Arrays & Strings',
    score: 92,
    maxScore: 100,
    date: '2024-01-20',
    timeSpent: 45,
    accuracy: 92
  },
  {
    topicId: '2',
    topicName: 'Linked Lists',
    score: 78,
    maxScore: 100,
    date: '2024-01-18',
    timeSpent: 52,
    accuracy: 78
  }
];

export const mockProgressData: ProgressData[] = [
  { date: '2024-01-15', problemsSolved: 5, accuracy: 80, topicsCompleted: 0 },
  { date: '2024-01-16', problemsSolved: 8, accuracy: 85, topicsCompleted: 0 },
  { date: '2024-01-17', problemsSolved: 6, accuracy: 75, topicsCompleted: 0 },
  { date: '2024-01-18', problemsSolved: 10, accuracy: 90, topicsCompleted: 1 },
  { date: '2024-01-19', problemsSolved: 7, accuracy: 88, topicsCompleted: 0 },
  { date: '2024-01-20', problemsSolved: 12, accuracy: 92, topicsCompleted: 1 },
  { date: '2024-01-21', problemsSolved: 9, accuracy: 87, topicsCompleted: 0 },
  { date: '2024-01-22', problemsSolved: 11, accuracy: 89, topicsCompleted: 0 }
];

export const mockAIRecommendations: AIRecommendation[] = [
  {
    topicId: '6',
    reason: 'Perfect next step after mastering Arrays & Strings. Hash tables will enhance your problem-solving toolkit.',
    confidence: 95,
    estimatedDifficulty: 7,
    prereqsMet: true
  },
  {
    topicId: '3',
    reason: 'Continue building on your linked list knowledge. Trees are fundamental for advanced algorithms.',
    confidence: 88,
    estimatedDifficulty: 8,
    prereqsMet: true
  }
];