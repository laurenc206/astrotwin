import React from 'react';
import { Link } from 'react-router-dom';


const Footer = ({user}) => {
    return (
    <div className="footer wf-section">
        <div className="footer-container w-container">
        <div className="w-layout-grid footer-grid">
            <div className="footer-links-container">
            <h5 className="footer-header">Website</h5>
            <Link to="/createChart" className="footer-link">Create Chart</Link>
            
            {user && (<Link to={`/userChart/${user.chartId}`} className="footer-link w--current">My Chart</Link>)}
            {!user && (<Link to="/createChart" className="footer-link w--current">My Chart</Link>)}

            <Link to="/searchCeleb" className="footer-link">Search Celebrity Charts</Link>
            </div>
            <div className="footer-links-container">
            <h5 className="footer-header">Resources</h5>
            <Link to="/about" className="footer-link">About This Project</Link>
            <Link to="/contactMe" className="footer-link">Contact Me</Link>
            
            </div>
            <div className="footer-links-container">
            <h5 className="footer-header">Settings</h5>
            <Link to="/modifyVars" className="footer-link">Modify Match Variables</Link>

            <Link to="/addCeleb" className="footer-link">Add Celebrity</Link>

            </div>
        </div>
        </div>
    </div>
    );
};

export default Footer;
