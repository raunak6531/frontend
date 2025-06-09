import TheoryPanel from './TheoryPanel';
import EditorPanel from './EditorPanel';

const MainArea = ({ 
  activeTab, 
  activeFile, 
  code, 
  exercise, 
  onTabChange, 
  onFileChange, 
  onCodeChange 
}) => {
  const tabs = [
    {
      id: 'theory',
      label: 'Theory',
      icon: 'fas fa-book'
    },
    {
      id: 'editor',
      label: 'Code Editor',
      icon: 'fas fa-code'
    }
  ];

  return (
    <div className="main-area">
      {/* Tab Bar */}
      <div className="tab-bar">
        <div className="tab-group">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${tab.id}-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
              data-tab={tab.id}
            >
              <i className={tab.icon}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="content-area">
        {/* Theory Panel */}
        <div className={`content-panel theory-panel ${activeTab === 'theory' ? 'active' : ''}`}>
          <TheoryPanel exercise={exercise} />
        </div>

        {/* Editor Panel */}
        <div className={`content-panel editor-panel ${activeTab === 'editor' ? 'active' : ''}`}>
          <EditorPanel
            activeFile={activeFile}
            code={code}
            onFileChange={onFileChange}
            onCodeChange={onCodeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default MainArea;
