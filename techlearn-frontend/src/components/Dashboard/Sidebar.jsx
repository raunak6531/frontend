import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const location = useLocation();
  const { logout } = useAuth();
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'fa-solid fa-chart-line' },
    { name: 'Exercises', path: '/exercises', icon: 'fa-solid fa-dumbbell' },
    { name: 'Progress', path: '/progress', icon: 'fa-solid fa-chart-bar' },
    { name: 'Leaderboard', path: '/leaderboard', icon: 'fa-solid fa-trophy' },
    { name: 'Profile', path: '/profile', icon: 'fa-solid fa-user' },
  ];
  return (
    <aside className="glass h-full min-h-screen w-64 flex flex-col py-8 px-4">
      <div className="logo mb-8 text-center">TechLearn</div>
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`nav-item w-full flex items-center gap-3 ${location.pathname === item.path ? 'active' : ''}`}
              >
                <i className={`${item.icon} text-lg`}></i>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className="settings-btn mt-8" onClick={logout}><i className="fas fa-sign-out-alt"></i> Logout</button>
    </aside>
  );
};

export default Sidebar; 