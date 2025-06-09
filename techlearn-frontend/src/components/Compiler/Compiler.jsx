import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import WindowHeader from './WindowHeader';
import Sidebar from './Sidebar';
import MainArea from './MainArea';
import PreviewPanel from './PreviewPanel';

const Compiler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  
  // State management
  const [currentExercise, setCurrentExercise] = useState(null);
  const [activeTab, setActiveTab] = useState('theory'); // 'theory' or 'editor'
  const [activeFile, setActiveFile] = useState('html'); // 'html', 'css', 'js'
  const [code, setCode] = useState({
    html: '',
    css: '',
    js: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [sessionId, setSessionId] = useState(null);
  const [sessionStartTime, setSessionStartTime] = useState(null);

  // Initialize compiler
  useEffect(() => {
    const exerciseId = searchParams.get('id');
    initializeCompiler(exerciseId);
  }, [searchParams]);

  const initializeCompiler = async (exerciseId) => {
    setIsLoading(true);
    setSessionStartTime(Date.now());
    
    try {
      // Start learning session
      await startLearningSession(exerciseId);
      
      // Load exercise or show demo
      if (exerciseId) {
        await loadExercise(exerciseId);
      } else {
        await loadDemoExercise();
      }
    } catch (error) {
      console.error('Error initializing compiler:', error);
      await loadDemoExercise();
    } finally {
      setIsLoading(false);
    }
  };

  const startLearningSession = async (exerciseId) => {
    try {
      // Mock session start - replace with actual API call
      const mockSessionId = `session_${Date.now()}`;
      setSessionId(mockSessionId);
      console.log('Learning session started:', mockSessionId);
    } catch (error) {
      console.error('Error starting session:', error);
    }
  };

  const loadExercise = async (exerciseId) => {
    try {
      // Mock exercise loading - replace with actual API call
      const mockExercise = {
        id: exerciseId,
        title: 'HTML Basics: Creating Your First Webpage',
        description: 'Learn the fundamentals of HTML structure and create your first webpage.',
        explanation: `
          <h3>HTML Fundamentals</h3>
          <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages.</p>
          <h4>Key Concepts:</h4>
          <ul>
            <li><strong>Elements:</strong> Building blocks of HTML pages</li>
            <li><strong>Tags:</strong> Keywords surrounded by angle brackets</li>
            <li><strong>Attributes:</strong> Additional information about elements</li>
          </ul>
          <h4>Basic Structure:</h4>
          <p>Every HTML document starts with a DOCTYPE declaration and contains head and body sections.</p>
        `,
        difficulty: 'Beginner',
        technology: 'HTML',
        starterCode: {
          html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <!-- Add your HTML content here -->
    <h1>Hello World</h1>
    <p>Welcome to my first webpage!</p>
</body>
</html>`,
          css: `/* Add your CSS styles here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
}

h1 {
    color: #333;
    text-align: center;
}

p {
    color: #666;
    line-height: 1.6;
}`,
          js: `// Add your JavaScript code here
console.log('Page loaded successfully!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM is ready!');
});`
        }
      };
      
      setCurrentExercise(mockExercise);
      setCode(mockExercise.starterCode);
    } catch (error) {
      console.error('Error loading exercise:', error);
      throw error;
    }
  };

  const loadDemoExercise = async () => {
    const demoExercise = {
      id: 'demo',
      title: 'Demo Exercise - Create a Card Component',
      description: 'Create a beautiful card component with HTML and CSS.',
      explanation: `
        <h3>Card Component Exercise</h3>
        <p>In this exercise, you'll create a modern card component using HTML for structure and CSS for styling.</p>
        <h4>Requirements:</h4>
        <ul>
          <li>Create a card container with proper structure</li>
          <li>Add an image, title, description, and button</li>
          <li>Style the card with CSS for a modern look</li>
          <li>Add hover effects for better interactivity</li>
        </ul>
      `,
      difficulty: 'Beginner',
      technology: 'HTML/CSS',
      starterCode: {
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Component</title>
</head>
<body>
    <!-- Create your card component here -->
    <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="Card Image">
        <div class="card-content">
            <h2 class="card-title">Card Title</h2>
            <p class="card-description">This is a sample card description.</p>
            <button class="card-button">Learn More</button>
        </div>
    </div>
</body>
</html>`,
        css: `/* Style your card component here */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card {
    max-width: 300px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 20px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #333;
}

.card-description {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.5;
}

.card-button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.card-button:hover {
    background: #2563eb;
}`,
        js: `// Add interactivity to your card
console.log('Card component loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.card-button');

    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked! You can add more functionality here.');
        });
    }
});`
      }
    };

    setCurrentExercise(demoExercise);
    setCode(demoExercise.starterCode);
  };

  const handleCodeChange = (fileType, newCode) => {
    setCode(prev => ({
      ...prev,
      [fileType]: newCode
    }));
  };

  const handleSaveProgress = async () => {
    try {
      // Mock save progress - replace with actual API call
      console.log('Saving progress...', { code, exerciseId: currentExercise?.id });
      // Show success notification
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const handleCompleteExercise = async () => {
    try {
      // Mock complete exercise - replace with actual API call
      console.log('Completing exercise...', currentExercise?.id);
      // Show completion notification and redirect
      navigate('/dashboard');
    } catch (error) {
      console.error('Error completing exercise:', error);
    }
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-xl">Loading exercise...</div>
      </div>
    );
  }

  return (
    <div className="vscode-window">
      <WindowHeader
        title={currentExercise?.title || 'Code Editor'}
        onBack={handleBackToDashboard}
        onSave={handleSaveProgress}
        onComplete={handleCompleteExercise}
      />
      
      <div className="vscode-layout">
        <Sidebar
          activeFile={activeFile}
          onFileSelect={setActiveFile}
        />
        
        <MainArea
          activeTab={activeTab}
          activeFile={activeFile}
          code={code}
          exercise={currentExercise}
          onTabChange={setActiveTab}
          onFileChange={setActiveFile}
          onCodeChange={handleCodeChange}
        />
        
        <PreviewPanel
          code={code}
        />
      </div>
    </div>
  );
};

export default Compiler;
