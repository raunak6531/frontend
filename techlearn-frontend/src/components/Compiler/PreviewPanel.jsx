import { useEffect, useRef, useState } from 'react';

const PreviewPanel = ({ code }) => {
  const iframeRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    updatePreview();
  }, [code]);

  const updatePreview = () => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Create the complete HTML document
    const htmlContent = createPreviewHTML();

    // Write the content to the iframe
    iframeDoc.open();
    iframeDoc.write(htmlContent);
    iframeDoc.close();
  };

  const createPreviewHTML = () => {
    const { html = '', css = '', js = '' } = code;

    // Extract body content from HTML if it's a complete document
    let bodyContent = html;
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      bodyContent = bodyMatch[1];
    } else if (html.includes('<!DOCTYPE') || html.includes('<html')) {
      // If it's a complete HTML document, use it as is
      return html.replace(
        /<style[^>]*>[\s\S]*?<\/style>/gi,
        `<style>${css}</style>`
      ).replace(
        /<script[^>]*>[\s\S]*?<\/script>/gi,
        `<script>${js}</script>`
      );
    }

    // Create a complete HTML document
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    <style>
        /* Reset some default styles for better preview */
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* User CSS */
        ${css}
    </style>
</head>
<body>
    ${bodyContent}
    
    <script>
        // Error handling for preview
        window.addEventListener('error', function(e) {
            console.error('Preview Error:', e.error);
        });
        
        // User JavaScript
        try {
            ${js}
        } catch (error) {
            console.error('JavaScript Error:', error);
        }
    </script>
</body>
</html>`;
  };

  const refreshPreview = () => {
    updatePreview();
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`preview-panel ${isFullscreen ? 'fullscreen' : ''}`}>
      {/* Preview Header */}
      <div className="preview-header">
        <div className="preview-title">Preview</div>
        <div className="preview-controls">
          <button 
            className="control-btn" 
            onClick={refreshPreview} 
            title="Refresh"
          >
            <i className="fas fa-redo"></i>
          </button>
          <button 
            className="control-btn" 
            onClick={toggleFullscreen} 
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`}></i>
          </button>
        </div>
      </div>

      {/* Preview Container */}
      <div className="preview-container">
        <iframe
          ref={iframeRef}
          id="preview"
          title="Code Preview"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          className="preview-iframe"
        />
      </div>
    </div>
  );
};

export default PreviewPanel;
