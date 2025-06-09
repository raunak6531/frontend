import Header from './Header';
import WelcomeSection from './WelcomeSection';
import TopGrid from './TopGrid';
import StatsSection from './StatsSection';
import ExercisesSection from './ExercisesSection';
import LeaderboardSection from './LeaderboardSection';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className="dashboard-page" style={{
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #0e1117 100%)',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Background */}
      <div className="bg-pattern"></div>
      <div className="bg-dots"></div>

      <Header />
      <main className="main">
        <div className="container">
          <WelcomeSection />
          <TopGrid />
          <StatsSection />
          <ExercisesSection />
          <LeaderboardSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;