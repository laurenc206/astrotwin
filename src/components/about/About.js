import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TechnologiesUsed from './sections/TechnologiesUsed.js';
import Motivation from './sections/Motivation.js';
import HowItWorks from './sections/HowItWorks.js'
import VersionOne from './sections/VersionOne.js';
import VersionTwo from './sections/VersionTwo.js';
import Resources from './sections/Resources.js';

const About = () => {
    const sections = [
        {
            title: 'Technologies Used',
            link: '#Technologies Used'
        },
        {
            title: 'Motivation',
            link: '#Motivation'
        },
        {
            title: 'How It Works',
            link: '#How It Works'
        },
        {
            title: 'Version 1',
            link: '#Version 1'
        },
        {
            title: 'Version 2',
            link: '#Version 2'
        },
        {
            title: 'Resources',
            link: '#Resources'
        }
    ]

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
   
    return (
        <>
        
<div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="ds-nav w-nav">
    
    
    <nav className="ds-menu w-nav-menu">
        {sections.map((section) => (<a href={section.link} key={section.link} className="ds-menu-link w-nav-link">{section.title}</a>))}
    <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'nav-button',
        }}
      >
        {sections.map((section) => (
        <MenuItem key={section.title} onClick={handleClose}><a href={section.link} key={section.link} className="ds-menu-link w-nav-link">{section.title}</a></MenuItem>))}
    </Menu>
    </nav>

        <div className="ds-menu-button w-nav-button" onClick={handleClick}>
            <div id='nav-button' className="w-icon-nav-menu">
        </div>
    </div>

</div>


  
      <div className="ds-content">
        <div className="page-wrapper">
          <div className="ds-section header">
            <div className="_12-columns flex-horizontal">
              <div className="column desk-8">
              <h1 className="heading large-h1">About AstroTwin</h1>
              
                <p></p>
              </div>
            </div>
          </div>

          <TechnologiesUsed/>

          <Motivation/>

          <HowItWorks/>

          <VersionOne/>

          <VersionTwo/>

          <Resources/>

        </div>
    </div>  


        <div className='spacer _64'/>
        <div className='spacer _64'/>

    </>
    );
};

export default About;
