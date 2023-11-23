import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admission from './pages/Admission';
import Exam from './pages/Exam';
import Department from './pages/Department';
import Academics from './pages/Academics';
import About from './pages/About';

function App() {
    return (
        <>
        <Routes> 
                <Route path ="/" element ={<Home />} />
                <Route path="/admission" element ={<Admission />} />
                <Route path="/exam" element ={<Exam />} />
                <Route path="/department" element ={<Department />} />
                <Route path="/academics" element ={<Academics />} />
                <Route path="/about" element ={<About />} />
        </Routes>
        </>
    );
}

export default App;
