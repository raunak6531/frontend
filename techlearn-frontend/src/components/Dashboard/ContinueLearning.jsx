import { useNavigate } from 'react-router-dom';

const ContinueLearning = () => {
  const navigate = useNavigate();

  const resumeCurrentExercise = () => {
    // Navigate to compiler/exercise page
    navigate('/compiler?id=1');
  };

  const startFirstExercise = () => {
    // Navigate to first exercise
    navigate('/compiler?id=1');
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">Continue Learning</span>
        <svg className="card-icon" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
      <div className="continue-learning-content">
        <div className="current-exercise">
          <h4 className="exercise-title">Perfect Your Navbar</h4>
        </div>
        <button
          className="resume-btn pulse-btn"
          onClick={resumeCurrentExercise}
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          Resume Exercise
        </button>
      </div>
    </div>
  );
};

export default ContinueLearning;