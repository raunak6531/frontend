/**
 * Profile Card Component
 *
 * Displays user profile information including name, avatar, role, and skills.
 * Uses real user data from authentication context.
 */

import { useAuth } from '../../context/AuthContext';

const ProfileCard = () => {
  const { user } = useAuth();

  /**
   * Get initials from user name for avatar display
   * @param {string} name - User's full name
   * @returns {string} - User's initials (e.g., "John Doe" -> "JD")
   */
  const getInitials = (name) => {
    if (!name) return 'U'; // Default to 'U' for User
    return name.split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // Limit to 2 characters
  };

  /**
   * Get user's role based on their data or default
   * @returns {string} - User's role or default role
   */
  const getUserRole = () => {
    // You can extend this to get role from user data if available
    return user?.role || 'Student Developer';
  };

  /**
   * Get user's skills from their profile or default skills
   * @returns {Array} - Array of skill strings
   */
  const getUserSkills = () => {
    // You can extend this to get skills from user data if available
    return user?.skills || ['JavaScript', 'React', 'CSS'];
  };

  // If no user is logged in, show loading or default state
  if (!user) {
    return (
      <div className="card profile-card">
        <div className="profile-avatar">?</div>
        <h3 className="profile-name">Loading...</h3>
        <p className="profile-role">Please wait</p>
        <div className="profile-skills">
          <div className="skill-tag">Loading</div>
        </div>
      </div>
    );
  }

  return (
    <div className="card profile-card">
      {/* User avatar with initials */}
      <div className="profile-avatar" title={`${user.name}'s Avatar`}>
        {getInitials(user.name)}
      </div>

      {/* User name */}
      <h3 className="profile-name" title={user.name}>
        {user.name}
      </h3>

      {/* User role */}
      <p className="profile-role">
        {getUserRole()}
      </p>

      {/* User skills */}
      <div className="profile-skills">
        {getUserSkills().map((skill, index) => (
          <div key={index} className="skill-tag" title={skill}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;