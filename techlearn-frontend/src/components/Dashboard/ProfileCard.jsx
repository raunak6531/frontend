import { useAuth } from '../../context/AuthContext';

const ProfileCard = () => {
  const { user } = useAuth();

  // Get initials from user name
  const getInitials = (name) => {
    if (!name) return 'JD';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="card profile-card">
      <div className="profile-avatar">H</div>
      <h3 className="profile-name">haha</h3>
      <p className="profile-role">Frontend Developer</p>
      <div className="profile-skills">
        <div className="skill-tag">JavaScript</div>
        <div className="skill-tag">React</div>
        <div className="skill-tag">CSS</div>
      </div>
    </div>
  );
};

export default ProfileCard;