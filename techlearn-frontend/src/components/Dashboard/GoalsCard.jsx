import { useEffect } from 'react';

const GoalsCard = () => {
  useEffect(() => {
    // Animate goals progress bar after component mounts
    const progressFill = document.getElementById('goals-progress-fill');
    if (progressFill) {
      setTimeout(() => {
        progressFill.style.width = '30%';
        progressFill.style.opacity = '1';
      }, 800);
    }
  }, []);

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Learning Goals</span>
        <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>75%</span>
      </div>
      <div className="goals-list">
        <div className="goal-item">
          <div className="goal-check completed">
            <svg className="goal-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="goal-text completed">Complete your first exercise</span>
        </div>
        <div className="goal-item">
          <div className="goal-check completed">
            <svg className="goal-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="goal-text completed">Complete 3 exercises</span>
        </div>
        <div className="goal-item">
          <div className="goal-check completed">
            <svg className="goal-icon" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="goal-text completed">Complete 5 exercises</span>
        </div>
        <div className="goal-item">
          <div className="goal-check pending"></div>
          <span className="goal-text pending">Complete all exercises</span>
        </div>
      </div>
      <div className="goals-progress">
        <div className="goals-progress-text">75% of Goals Met</div>
        <div className="goals-progress-bar">
          <div className="goals-progress-fill" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default GoalsCard;