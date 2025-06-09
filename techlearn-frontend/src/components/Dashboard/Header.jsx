import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Dashboard');
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const refreshDashboardData = () => {
    // Refresh dashboard data - you can implement this based on your needs
    window.location.reload();
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);

    // Smooth scroll to relevant sections
    let targetSection = null;

    switch(navItem) {
      case 'Dashboard':
        targetSection = document.getElementById('dashboard');
        break;
      case 'Progress':
        targetSection = document.querySelector('.stats-section') || document.querySelector('[class*="stats"]');
        break;
      case 'Exercises':
        targetSection = document.querySelector('.exercises-section') || document.querySelector('[class*="exercises"]');
        break;
      case 'About':
        targetSection = document.querySelector('.footer') || document.querySelector('footer');
        break;
      default:
        targetSection = document.getElementById('dashboard');
    }

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">TechLearn Solutions</div>

          <nav className="nav">
            <button
              className={`nav-item ${activeNav === 'Dashboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('Dashboard')}
            >
              Dashboard
            </button>
            <button
              className={`nav-item ${activeNav === 'Progress' ? 'active' : ''}`}
              onClick={() => handleNavClick('Progress')}
            >
              Progress
            </button>
            <button
              className={`nav-item ${activeNav === 'Exercises' ? 'active' : ''}`}
              onClick={() => handleNavClick('Exercises')}
            >
              Exercises
            </button>
            <button
              className="nav-item compiler-nav"
              onClick={() => navigate('/compiler')}
            >
              <i className="fas fa-code"></i>
              Code Editor
            </button>
            <button
              className={`nav-item ${activeNav === 'About' ? 'active' : ''}`}
              onClick={() => handleNavClick('About')}
            >
              About
            </button>
          </nav>

          <div className="header-right">
            {/* Refresh button */}
            <button
              className="icon-btn-single"
              title="Refresh Dashboard"
              onClick={refreshDashboardData}
            >
              <i className="fas fa-sync-alt"></i>
            </button>

            {/* Settings with text */}
            <button className="settings-btn" title="Settings">
              <i className="fas fa-cog"></i>
              <span>Setting</span>
            </button>

            {/* Notifications */}
            <button className="icon-btn-single" title="Notifications">
              <i className="fas fa-bell"></i>
            </button>

            {/* User Profile with dropdown */}
            <div className="profile-container">
              <div
                className="avatar"
                title="User Profile"
                id="profile-btn"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <i className="fas fa-user"></i>
              </div>
              {/* Logout dropdown */}
              <div
                className={`profile-dropdown${isProfileOpen ? ' show' : ''}`}
                id="profile-dropdown"
              >
                <button className="logout-btn" id="logout-btn" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;