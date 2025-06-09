import { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="pl-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2"
          placeholder="Email"
          required
        />
      </div>

      <div className="relative">
        <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="pl-10 pr-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2"
          placeholder="Password"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
        >
          <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          className="text-sm text-tech-grey hover:text-white transition-colors"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full h-12 text-white rounded-xl font-medium text-base transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:transform hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
          boxShadow: '0 4px 15px rgba(26, 26, 46, 0.4)'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1f2937 100%)';
          e.target.style.boxShadow = '0 8px 25px rgba(26, 26, 46, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
          e.target.style.boxShadow = '0 4px 15px rgba(26, 26, 46, 0.4)';
        }}
      >
        Get Started
      </button>
    </form>
  );
};

export default LoginForm; 