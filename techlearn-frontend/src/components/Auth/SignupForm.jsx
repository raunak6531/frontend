import { useState } from 'react';

const SignupForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [github, setGithub] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    onSubmit(email, password, name);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="max-h-72 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <form onSubmit={handleSubmit} className="space-y-3 pb-4">
        <div className="relative">
          <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="pl-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2"
            placeholder="Full Name"
            required
          />
        </div>

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
          <i className="fas fa-mobile-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="pl-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2"
            placeholder="Mobile Number"
            required
          />
        </div>

        <div className="relative">
          <i className="fas fa-venus-mars absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="pl-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full appearance-none pr-10 focus:outline-none focus:ring-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>

        <div className="relative">
          <i className="fab fa-github absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type="url"
            id="github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="pl-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2"
            placeholder="GitHub Profile (Optional)"
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
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
          </button>
        </div>

        <div className="relative">
          <i className="fas fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"></i>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="pl-10 pr-10 h-12 bg-gray-700 border border-gray-600 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 rounded-xl w-full focus:outline-none focus:ring-2"
            placeholder="Confirm Password"
            required
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
          >
            <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
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
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;