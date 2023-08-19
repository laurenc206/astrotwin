import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
            title: 'Sources',
            link: '#Sources'
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
          <section id="Technologies Used" className="ds-section">
            <div className="ds-section-header">
            <h3 className="ds-title">Technologies Used</h3>
            <p className="ds-description">The different text sizes used throughout the site. </p>
            </div>
          </section>

          <section id="Motivation" className="ds-section">
            <div className="ds-section-header">
            <h3 className="ds-title">Motivation</h3>
            <p className="ds-description"> The different text sizes used throughout the site.</p>
            </div>
          </section>

          <section id="How It Works" className="ds-section">
            <div className="ds-section-header">
            <h3 className="ds-title">How It Works</h3>
            <p className="ds-description">The different text sizes used throughout the site. </p>
            </div>
          </section>

          <section id="Version 1" className="ds-section">
            <div className="ds-section-header">
            <h3 className="ds-title">Version 1</h3>
            <p className="ds-description">The different text sizes used throughout the site. </p>
            </div>
          </section>

          <section id="Version 2" className="ds-section">
            <div className="ds-section-header">
            <h3 className="ds-title">Version 2</h3>
            <p className="ds-description">The different text sizes used throughout the site. </p>
            </div>
          </section>

          <section id="Sources" className="ds-section">
            <div className="ds-section-header">
            <h3 className="ds-title">Sources</h3>
            <p className="ds-description">The different text sizes used throughout the site. </p>
            </div>
          </section>

 


        </div>
    </div>  


        <div className='spacer _64'/>
        <div className='spacer _64'/>

    </>
    );
};

export default About;
