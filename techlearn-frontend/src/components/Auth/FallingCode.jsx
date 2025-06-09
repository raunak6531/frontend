import { useEffect, useRef } from 'react';

const FallingCode = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Array of coding elements to fall
    const codingElements = [
      '{ }', '<>', '</>', '( )', '[ ]', '=>',
      'HTML', 'CSS', 'JS', 'React', 'Node', 'API', 'JSON', 'HTTP',
      'function', 'const', 'let', 'var', 'if', 'else', 'for', 'while',
      '===', '!==', '>=', '<=',
      'class', 'import', 'export', 'return', 'async', 'await', 'try', 'catch',
      '&lt;/&gt;', 'div', 'span', 'h1', 'p', 'ul', 'li', 'a', 'img',
      '.map()', '.filter()', '.reduce()', '.forEach()', '.find()', '.includes()',
      'useState', 'useEffect', 'props', 'state', 'render', 'component',
    ];

    function createFallingElement() {
      const element = document.createElement('span');
      element.classList.add('falling-code-element');
      // Select a random element from the array
      element.textContent = codingElements[Math.floor(Math.random() * codingElements.length)];

      const size = Math.random() * 1.5 + 0.5; // Random size between 0.5rem and 2rem
      element.style.fontSize = `${size}rem`;

      const startPosition = Math.random() * 100; // Random horizontal starting position (percentage)
      element.style.left = `${startPosition}vw`;

      // Generate a random horizontal drift multiplier (-1 for left, 1 for right, 0 for straight down)
      const horizontalDrift = (Math.random() - 0.5) * 2; // Value between -1 and 1
      element.style.setProperty('--horizontal-drift', horizontalDrift.toString());

      const animationDuration = Math.random() * 12 + 8; // Random between 8s and 20s
      element.style.animationDuration = `${animationDuration}s`;

      // Add random animation delay to stagger falling
      const animationDelay = Math.random() * 7; // Random delay up to 7s
      element.style.animationDelay = `${animationDelay}s`;

      container.appendChild(element);

      // Remove element after it falls off screen to prevent performance issues
      element.addEventListener('animationend', () => {
        element.remove();
      });
    }

    // Create elements periodically
    const interval = setInterval(createFallingElement, 1200); // Create new element every 1.2 seconds

    // Create some initial elements to fill the screen on load
    for (let i = 0; i < 10; i++) {
      createFallingElement();
    }

    // Cleanup on unmount
    return () => {
      clearInterval(interval);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        '--falling-animation': 'falling linear infinite',
      }}
    />
  );
};

export default FallingCode; 