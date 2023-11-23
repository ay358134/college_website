import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./NavBarStyles.css"
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
            <div className="header">
                <Link to="/"><h1>eEduSys</h1></Link>
              <ul className={click ? "nav-menu active" :
                "nav-menu"}>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>   
                <Link to="/admission">Admission</Link>
                </li>
                <li>
                <Link to="/exam">Exam</Link>
                </li>
                <li>
                <Link to="/department">Department</Link>
                </li>
                <li>
                <Link to="/academics">Academics</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                </ul> 
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: "#f2f2f2"}}/>):
                    (<FaBars size={20} style={{color: "#f2f2f2"}}/>)}
                </div>
            </div>
    );
};

export default NavBar;