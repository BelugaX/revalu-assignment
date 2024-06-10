import React, { useState } from 'react';
import './Sidebar.css';
import NewCollectionCard from '../NewCollectionModal/NewCollectionCard';

const Sidebar = ({ onCreate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNewCollectionClick = () => {
    setIsModalOpen(true);
  }

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
      <button className="new-collection-btn" onClick={handleNewCollectionClick}>
        <span role="img" aria-label="folder">📁</span> New Collection
      </button>
      {isModalOpen && (
        <NewCollectionCard 
          onClose={() => setIsModalOpen(false)} 
          onCreate={(newCollection) => {
            onCreate(newCollection);
            setIsModalOpen(false);
           }}
        />
      )}
    </div>
  );
};

export default Sidebar;
