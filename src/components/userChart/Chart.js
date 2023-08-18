import SunIcon from '../../images/sun.svg';
import MoonIcon from '../../images/moon.svg';
import AscendantIcon from '../../images/ascendant.svg';
import MarsIcon from '../../images/mars.svg';
import VenusIcon from '../../images/venus.svg';
import MercuryIcon from '../../images/mercury.svg';
import JupiterIcon from '../../images/jupiter.svg';
import SaturnIcon from '../../images/saturn.svg';
import UranusIcon from '../../images/uranus.svg';
import NeptuneIcon from '../../images/neptune.svg';
import PlutoIcon from '../../images/pluto.svg';
import {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Chart = ({user, getUserData, userChart, getMatchData, matchData}) => {

  let params = useParams();
  const chartId = params.chartId;

  useEffect(() => {
    // make sure to add caching so backend doesnt go to database for every req  
    if (!user) getUserData(chartId)
    if (!matchData) getMatchData(chartId)
  })
  console.log("user: " + JSON.stringify(user))
  
  return (
  <div className="w-layout-blockcontainer account-page-wrapper w-container">
    <div className="w-layout-blockcontainer account-card w-container">
      <div className="w-layout-blockcontainer w-container">
        <div className="w-layout-layoutd">
      <h1 className="heading-6">{user?.userData.name}'s Chart</h1>
      </div>
        <div id="w-node-_7bd82a61-f2bf-f4e9-7606-b93c41b6337c-52a0fb91" className="w-layout-layout quick-stack-14 wf-layout-layout">
          <div id="w-node-_7bd82a61-f2bf-f4e9-7606-b93c41b6337d-52a0fb91" className="w-layout-cell">
            
          </div>
          <div id="w-node-_7bd82a61-f2bf-f4e9-7606-b93c41b6337e-52a0fb91" className="w-layout-cell cell-11">
          
          </div>
          <div id="w-node-_6bf55c20-8eaa-347f-e5dc-bf7362f4ec23-52a0fb91" className="w-layout-cell cell-13">
            <div id="w-node-_7b178e0e-7778-3cb3-3089-661948c03a79-52a0fb91" className="w-layout-layout quick-stack-15 wf-layout-layout">
            
              <div id="w-node-_7b178e0e-7778-3cb3-3089-661948c03a7a-52a0fb91" className="w-layout-cell">
               
                <h6>Born:</h6>
                
              </div>
              <div id="w-node-_7b178e0e-7778-3cb3-3089-661948c03a7b-52a0fb91" className="w-layout-cell">
                <div className="text-block-12">{user?.dayStr}</div>
                <div className="text-block-14">at {user?.timeStr}</div>
                <div className="text-block-14">{user?.locationStr}</div>
                
              </div>
              
            </div>
          </div>
          <div id="w-node-_45d6a45d-6fa6-43cb-fc34-bfe8b3fc3e7e-52a0fb91" className="w-layout-cell cell-12">  
          <h4 className="heading-5">Top Matches:</h4>
            <ul role="list" className="list-3 list-4">
              {matchData && (matchData.slice(0, 3).map((c, i) =>
                <li className="list-item-2" key={i}>
                  <Link key={i} className='link-2' to={`/matchResult`} state={{ user : user, userChart: userChart, match: c }}>
                    {c.celeb.name} ({Math.round(c.percent)}%)
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
      
    </div>
    <div className="w-layout-blockcontainer w-container ">
          <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad6b-af22ad6b" className="w-layout-layout wf-layout-layout">
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad6c-af22ad6b" className="w-layout-cell"><img src={SunIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad6e-af22ad6b" className="w-layout-cell2">
              <div>Sun in {userChart?.get('Sun')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad71-af22ad6b" className="w-layout-cell"><img src={MoonIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad73-af22ad6b" className="w-layout-cell2">
              <div>Moon in {userChart?.get('Moon')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad76-af22ad6b" className="w-layout-cell"><img src={AscendantIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad78-af22ad6b" className="w-layout-cell2">
              <div>Ascendant in {userChart?.get('Ascendant')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad7b-af22ad6b" className="w-layout-cell"><img src={MarsIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad7d-af22ad6b" className="w-layout-cell2">
              <div>Mars in {userChart?.get('Mars')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad80-af22ad6b" className="w-layout-cell"><img src={VenusIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad82-af22ad6b" className="w-layout-cell2">
              <div>Venus in {userChart?.get('Venus')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad85-af22ad6b" className="w-layout-cell"><img src={MercuryIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad87-af22ad6b" className="w-layout-cell2">
              <div>Mercury in {userChart?.get('Mercury')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad8a-af22ad6b" className="w-layout-cell"><img src={JupiterIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad8c-af22ad6b" className="w-layout-cell2">
              <div>Jupiter in {userChart?.get('Jupiter')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad8f-af22ad6b" className="w-layout-cell"><img src={SaturnIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad91-af22ad6b" className="w-layout-cell2">
              <div>Saturn in {userChart?.get('Saturn')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad94-af22ad6b" className="w-layout-cell"><img src={UranusIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad96-af22ad6b" className="w-layout-cell2">
              <div>Uranus in {userChart?.get('Uranus')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad99-af22ad6b" className="w-layout-cell"><img src={NeptuneIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad9b-af22ad6b" className="w-layout-cell2">
              <div>Neptune in {userChart?.get('Neptune')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad9e-af22ad6b" className="w-layout-cell"><img src={PlutoIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ada0-af22ad6b" className="w-layout-cell2">
              <div>Pluto in {userChart?.get('Pluto')[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ada3-af22ad6b" className="w-layout-cell"></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ada4-af22ad6b" className="w-layout-cell2"></div>



        </div>
        <div className="w-layout-blockcontainer w-container buttonContainer">
        <center>
          <a href="/createChart" className="button w-button">Create New Chart</a>
      </center>
      </div>
      </div>

      </div>

     </div>

  

    

     
      
   
  

  
    );
};

export default Chart;
