const WindowHeader = ({ title, onBack, onSave, onComplete }) => {
  return (
    <div className="window-header">
      {/* Window Controls */}
      <div className="window-controls">
        <div className="control-btn close"></div>
        <div className="control-btn minimize"></div>
        <div className="control-btn maximize"></div>
      </div>

      {/* Window Title */}
      <div className="window-title">{title}</div>

      {/* Window Actions */}
      <div className="window-actions">
        <button 
          className="action-btn" 
          onClick={onBack} 
          title="Back to Dashboard"
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button 
          className="action-btn" 
          onClick={onSave} 
          title="Save Progress"
        >
          <i className="fas fa-save"></i>
        </button>
        <button 
          className="action-btn" 
          onClick={onComplete} 
          title="Complete Exercise"
        >
          <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default WindowHeader;
