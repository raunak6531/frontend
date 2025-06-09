import { useEffect, useState } from 'react';

const TheoryPanel = ({ exercise }) => {
  const [displayedContent, setDisplayedContent] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (exercise?.explanation) {
      setIsAnimating(true);
      // Simulate typing animation by showing content after a delay
      setTimeout(() => {
        setDisplayedContent(exercise.explanation);
        setIsAnimating(false);
      }, 300);
    }
  }, [exercise]);

  const defaultContent = `
    <h3>Welcome to the Code Editor</h3>
    <p>Select an exercise to view its theory content and start coding!</p>
    <h4>Getting Started:</h4>
    <ul>
      <li>Read the theory content to understand the concepts</li>
      <li>Switch to the Code Editor tab to start coding</li>
      <li>Use the file tabs to switch between HTML, CSS, and JavaScript</li>
      <li>See your changes live in the preview panel</li>
    </ul>
  `;

  const content = displayedContent || defaultContent;

  return (
    <div className="theory-content" id="theoryContent">
      {isAnimating ? (
        <div className="loading">Loading theory content...</div>
      ) : (
        <div 
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ animation: 'fadeInUp 0.8s ease-out' }}
        />
      )}
    </div>
  );
};

export default TheoryPanel;
