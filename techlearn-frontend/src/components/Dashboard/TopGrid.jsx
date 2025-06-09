import ProfileCard from './ProfileCard';
import ProgressCards from './ProgressCards';
import ContinueLearning from './ContinueLearning';
import GoalsCard from './GoalsCard';

const TopGrid = () => (
  <div className="top-grid-horizontal">
    <ProfileCard />
    <ProgressCards />
    <ContinueLearning />
    <GoalsCard />
  </div>
);

export default TopGrid; 