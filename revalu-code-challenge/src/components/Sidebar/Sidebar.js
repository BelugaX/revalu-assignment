import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sidebar">
      <div className="dropdown-container">
        <button className="dropdown-btn" onClick={toggleDropdown}>
          My Collections
          <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}></span>
        </button>
        {isDropdownOpen && (
          <ul className="dropdown-menu">
            <li><span role="img" aria-label="folder">📁</span> Collection 1</li>
            <li><span role="img" aria-label="folder">📁</span> Collection 2</li>
            <li><span role="img" aria-label="folder">📁</span> Collection 3</li>
            <li><span role="img" aria-label="folder">📁</span> Collection 4</li>
          </ul>
        )}
      </div>
      <hr />
      <button className="new-collection-btn">
        <span role="img" aria-label="folder">📁</span> New Collection
      </button>
    </div>
  );
};

export default Sidebar;
