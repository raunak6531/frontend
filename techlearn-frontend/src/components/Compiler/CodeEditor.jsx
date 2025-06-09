import { useEffect, useRef } from 'react';

const CodeEditor = ({ language, value, onChange, placeholder }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.value = value || '';
    }
  }, [value]);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (e) => {
    // Handle tab key for indentation
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const value = e.target.value;

      // Insert two spaces for tab
      const newValue = value.substring(0, start) + '  ' + value.substring(end);
      e.target.value = newValue;
      e.target.selectionStart = e.target.selectionEnd = start + 2;

      // Trigger onChange
      onChange(newValue);
    }
  };

  const getLanguageClass = (language) => {
    switch (language) {
      case 'html':
        return 'language-html';
      case 'css':
        return 'language-css';
      case 'js':
        return 'language-javascript';
      default:
        return 'language-html';
    }
  };

  return (
    <div className="code-editor-container">
      <div className="editor-header">
        <div className="language-indicator">
          <i className={`fab fa-${language === 'js' ? 'js-square' : language === 'css' ? 'css3-alt' : 'html5'}`}></i>
          <span>{language.toUpperCase()}</span>
        </div>

      </div>
      <textarea
        ref={textareaRef}
        placeholder={placeholder}
        value={value || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={`code-editor-textarea ${getLanguageClass(language)}`}
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
      />
    </div>
  );
};

export default CodeEditor;
