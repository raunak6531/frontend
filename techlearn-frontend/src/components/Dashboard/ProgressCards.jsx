import { useEffect } from 'react';

const ProgressCards = () => {
  useEffect(() => {
    // Animate progress bar after component mounts
    const progressFill = document.getElementById('exercise-progress-fill');
    if (progressFill) {
      setTimeout(() => {
        progressFill.style.width = '40%';
        progressFill.style.opacity = '1';
      }, 500);
    }
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Exercise Progress</span>
        <svg className="card-icon" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="progress-value">7 of 10</div>
      <div className="progress-label">Exercises Completed</div>
      <div className="exercise-breakdown">
        <div className="breakdown-item">
          <div className="breakdown-dot completed"></div>
          <span className="breakdown-text">Beginner: 7/8</span>
        </div>
        <div className="breakdown-item">
          <div className="breakdown-dot partial"></div>
          <span className="breakdown-text">Intermediate: 0/2</span>
        </div>
        <div className="breakdown-item">
          <div className="breakdown-dot pending"></div>
          <span className="breakdown-text">Advanced: 0/0</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCards;