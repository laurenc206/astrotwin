
import AstroTwinIcon from '../../images/istockphoto-1284299717-612x612.jpeg';
import { Link } from 'react-router-dom';
const Header = ({user}) => {
    return (
      <>

    <div data-collapse="small" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="nav-bar w-nav">
        <div className="nav-container w-container">
          <div className="logo-div">
          {user && (<Link to={`/userChart/${user?.chartId}`} className="nav-logo w-inline-block"><img src={AstroTwinIcon} loading="eager" width="50" height="50" sizes="50px" alt=""/>
              <div className="text-block-17">AstroTwin</div></Link>)}
              {!user && (<Link to="/createChart" className="nav-logo w-inline-block"><img src={AstroTwinIcon} loading="eager" width="50" height="50" sizes="50px" alt=""/>
              <div className="text-block-17">AstroTwin</div></Link>)}
            
          </div>
          <nav role="navigation" className="nav-content w-nav-menu">
            <div className="search-banner">
              <div className="search-section">
                <form action="/search" className="search w-form"><input type="search" className="search-bar w-input" maxLength="256" name="query" placeholder="Search celebrity charts" id="search" required=""/><input type="submit" value="Search" className="hidden w-button"/></form>
              </div>
            </div>
            <div className="nav-menu">
              {user && (<Link to={`/userChart/${user?.chartId}`} className="nav-link">My Chart</Link>)}
              {!user && (<Link to="/createChart" className="nav-link">Create Chart</Link>)}
              <Link to="/modifyVars" className="nav-link w-nav-link">Modify Match Variables</Link>
              
            </div>
          </nav>

        </div>
    </div>
      </>
  
    );
};

export default Header;
