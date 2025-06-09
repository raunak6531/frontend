import CodeEditor from './CodeEditor';

const EditorPanel = ({ activeFile, code, onFileChange, onCodeChange }) => {
  const fileTabs = [
    {
      type: 'html',
      name: 'index.html',
      icon: 'fab fa-html5',
      color: '#e34c26'
    },
    {
      type: 'css',
      name: 'style.css',
      icon: 'fab fa-css3-alt',
      color: '#1572b6'
    },
    {
      type: 'js',
      name: 'script.js',
      icon: 'fab fa-js-square',
      color: '#f7df1e'
    }
  ];

  return (
    <div className="editor-panel-content">
      {/* File Tabs */}
      <div className="file-tabs">
        {fileTabs.map((tab) => (
          <div
            key={tab.type}
            className={`file-tab ${activeFile === tab.type ? 'active' : ''}`}
            onClick={() => onFileChange(tab.type)}
            data-file={tab.type}
          >
            <i className={tab.icon} style={{ color: tab.color }}></i>
            <span>{tab.name}</span>
            <i className="fas fa-times"></i>
          </div>
        ))}
      </div>

      {/* Editor Container */}
      <div className="editor-container">
        {fileTabs.map((tab) => (
          <div
            key={tab.type}
            className={`editor-wrapper ${activeFile === tab.type ? 'active' : ''}`}
            id={`${tab.type}-editor-wrapper`}
          >
            <CodeEditor
              language={tab.type}
              value={code[tab.type] || ''}
              onChange={(value) => onCodeChange(tab.type, value)}
              placeholder={`Write your ${tab.type.toUpperCase()} code here...`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorPanel;
