import React from 'react';

const SocialLinks = props => {
  return (
    <div className="social">
      
      <a
        id="profile-link"
        href="https://github.com/MIHIR2006"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;