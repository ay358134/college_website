import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavBarStyles.css';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const toggleDropdown = (menu) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="college-name">eEduSys</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li
            onClick={() => toggleDropdown('Admission')}
            className="dropdown">
            Admission
            {activeDropdown === 'Admission' && (
              <ul className="dropdown-content">
                <li>Junior College</li>
                <li>Under Graduate</li>
                <li>Post Graduate</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleDropdown('Examination')}
            className="dropdown">
            Examination
            {activeDropdown === 'Examination' && (
              <ul className="dropdown-content">
                <li>Schedule</li>
                <li>Results</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleDropdown('Departments')}
            className="dropdown">
            Departments
            {activeDropdown === 'Departments' && (
              <ul className="dropdown-content">
                <li>Junior College</li>
                <li>Under Graduate</li>
                <li>Post Graduate</li>
              </ul>
            )}
          </li>
          <li
            onClick={() => toggleDropdown('Academics')}
            className="dropdown">
            Academics
            {activeDropdown === 'Academics' && (
              <ul className="dropdown-content">
                <li>Student</li>
                <li>Teacher</li>
                <li>Admin</li>
              </ul>
            )}
          </li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
