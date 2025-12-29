import { Project } from "@/types";

export const projects :Project []= [
    {
        title: 'Tick-tac-toe',
        description: 'Classic Tick-Tack-Toe game implemented with HTML, CSS, and JavaScript. Perfect for practicing web development fundamentals.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        githubLink: 'https://github.com/wardahrana/tick-tack-toe.git',
        demoLink: 'https://demo.com',
        image: '/projects/tic-tac-toe.jpg',
      },
      {
        title: ' Wolt App',
        description: 'Wolt-style food delivery app clone using React Native, Expo, Reanimated, Zustand, Sentry, and a clean Git workflow plus AI Code Reviews from CodeRabbit. This is a full app build that covers UI animations, navigation architecture, cart state management, map integration, checkout flow, and performance-focused component patterns. If you’re looking to learn modern production-level React Native app structure, this is the one.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        githubLink: 'https://github.com/wardahrana/wolt-react-native.git',
        demoLink: 'https://demo.com',
        image: '/projects/Wolt.png',
        status: 'Ongoing',
      },
      {
        title: 'Expense Tracker',
        description: 'A mobile app that helps users manage personal finances efficiently while providing intelligent insights for better financial decisions. The app tracks income, expenses, budgets, goals, and receipts, and includes advanced AI-based features .',
        technologies: ['React-Native', 'Firebase','Zustand','Python (scikit-learn, pandas','MongoDB'],
        githubLink: 'https://github.com',
        demoLink: 'https://demo.com',
        image: '/projects/Expense-Tracker.png',
        status : "Soon..."
      }
  ];