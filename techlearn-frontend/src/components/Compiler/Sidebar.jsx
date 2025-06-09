const Sidebar = ({ activeFile, onFileSelect }) => {
  const files = [
    {
      name: 'index.html',
      type: 'html',
      icon: 'fab fa-html5',
      color: '#e34c26'
    },
    {
      name: 'style.css',
      type: 'css',
      icon: 'fab fa-css3-alt',
      color: '#1572b6'
    },
    {
      name: 'script.js',
      type: 'js',
      icon: 'fab fa-js-square',
      color: '#f7df1e'
    }
  ];

  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <div className="sidebar-title">EXPLORER</div>
      </div>

      {/* File Explorer */}
      <div className="file-explorer">
        <div className="project-folder">
          {/* Folder Header */}
          <div className="folder-header">
            <i className="fas fa-chevron-down"></i>
            <i className="fas fa-folder-open"></i>
            <span>project</span>
          </div>

          {/* File List */}
          <div className="file-list">
            {files.map((file) => (
              <div
                key={file.type}
                className={`file-item ${activeFile === file.type ? 'active' : ''}`}
                onClick={() => onFileSelect(file.type)}
                data-file={file.type}
              >
                <i className={file.icon} style={{ color: file.color }}></i>
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
