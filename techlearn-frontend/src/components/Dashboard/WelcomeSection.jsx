import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const WelcomeSection = () => {
  const { user } = useAuth();
  const [typingText, setTypingText] = useState('');
  const [timeGreeting, setTimeGreeting] = useState('');

  useEffect(() => {
    // Set time-based greeting
    const hour = new Date().getHours();
    let greeting = '';
    if (hour < 12) {
      greeting = 'Good Morning!';
    } else if (hour < 17) {
      greeting = 'Good Afternoon!';
    } else {
      greeting = 'Good Evening!';
    }
    setTimeGreeting(greeting);

    // Typing animation
    const welcomeText = 'Welcome in, ';
    const userName = 'haha';
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < welcomeText.length) {
        // Type the welcome text normally
        setTypingText(welcomeText.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeText, 80);
      } else if (currentIndex < welcomeText.length + userName.length) {
        // Type the user name with blue styling
        const nameIndex = currentIndex - welcomeText.length;
        const userNamePart = userName.substring(0, nameIndex + 1);
        setTypingText(welcomeText + `<span class="username-highlight">${userNamePart}</span>`);
        currentIndex++;
        setTimeout(typeText, 80);
      }
    };

    // Start typing animation after a short delay
    const timer = setTimeout(typeText, 500);

    return () => clearTimeout(timer);
  }, [user?.name]);

  return (
    <div id="dashboard" className="welcome-section">
      <div className="welcome-greeting">
        <h1 className="welcome-title">
          <span id="typing-text" dangerouslySetInnerHTML={{ __html: typingText }}></span><span className="static-emoji"> 👋</span>
        </h1>
        <p className="time-greeting" id="time-greeting">{timeGreeting} 🌙</p>
      </div>

      <div className="welcome-stats">
        <div className="stat-chip stat-chip-success" style={{ animationDelay: '0.2s' }}>
          <span className="stat-icon">✅</span>
          <span className="stat-text">7/10 Exercises Completed</span>
        </div>
        <div className="stat-chip stat-chip-info" style={{ animationDelay: '0.4s' }}>
          <span className="stat-icon">🕒</span>
          <span className="stat-text">Last Active: 1 week ago</span>
        </div>
        <div className="stat-chip stat-chip-purple" style={{ animationDelay: '0.6s' }}>
          <span className="stat-icon">🧠</span>
          <span className="stat-text">Level: Intermediate</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;