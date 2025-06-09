import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import Compiler from './components/Compiler/Compiler';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/dashboard.css';

// Component to handle root route redirection
const RootRedirect = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return <Navigate to={user ? "/dashboard" : "/auth"} replace />;
};

// Component to handle auth route (redirect if already logged in)
const AuthRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Auth />;
};

function App() {
  return (
    <>
      <div className="bg-pattern"></div>
      <div className="bg-dots"></div>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<AuthRoute />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/compiler"
              element={
                <ProtectedRoute>
                  <Compiler />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<RootRedirect />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
