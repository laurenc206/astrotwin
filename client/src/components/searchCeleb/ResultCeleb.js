import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

const ResultCeleb = () => {
    const location = useLocation();
    const { state } = location;
    const { celeb, user, userChart, matchData } = state;
    const [curMatch, setCurMatch] = useState()
    const [celebChart, setCelebChart] = useState()
    
    const celebBday = new Date(celeb?.bday)
    useEffect(() => {
        const planetMap = new Map(celeb?.celebChart.chart.map(i => [i.planet, [i.zodiac, i.element, i.mode, i.house]]));
        setCelebChart(planetMap)
        if (matchData) {
            for (var i = 0; i < matchData?.length; i++) {
                if (celeb.name === matchData[i].celeb.name) {
                setCurMatch(matchData[i])
                break;
            }
        }
        }
    }, [])




    return (
        <>
<div className="section black-gradient wf-section">
    <div className="container w-container"></div>
  </div>
  <div className="section light-grey wf-section">
    <div className="container w-container">
      <div className="terms-card">
        <div className="text-box centered">
          <div id="w-node-d2c611e1-d0e4-fbde-15e9-89d67e2f1935-781602bd" className="w-layout-layout person-header wf-layout-layout">
            <div id="w-node-_04bbb9aa-a22d-8c3b-884c-beb78fb5e5bf-781602bd" className="w-layout-cell"><img src={celeb?.imageUrl} loading="lazy" width="214" alt=""/></div>
            <div id="w-node-a8007f7f-5f1c-16ae-cfe1-5e5c0a2393b2-781602bd" className="w-layout-cell">
              <h1 className="heading-2">{celeb?.name}</h1>
              <div id="w-node-_7353c4b0-05c9-aef4-9829-6b9a74915ea4-781602bd" className="w-layout-layout quick-stack-6 wf-layout-layout">
                <div id="w-node-_7353c4b0-05c9-aef4-9829-6b9a74915ea5-781602bd" className="w-layout-cell">
                  <h6>Born:</h6>
                </div>
                <div id="w-node-_7353c4b0-05c9-aef4-9829-6b9a74915ea6-781602bd" className="w-layout-cell">
                  <div className="text-block-12">{`${celebBday.toLocaleString('default', {month: 'long'})} ${celebBday.getDate()}, ${celebBday.getFullYear()}` }</div>
                  <div className="text-block-12">{`at ${celebBday.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true })}`}</div>
                  <div className="text-block-12">{`${celeb?.blocation.town}, ${celeb?.blocation.country}`}</div>
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad6b-af22ad6b" className="w-layout-layoutceleb chart wf-layout-layout">
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad6c-af22ad6b" className="w-layout-cell"><img src={SunIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad6e-af22ad6b" className="w-layout-cell">
              <div>Sun in {celebChart?.get("Sun")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad71-af22ad6b" className="w-layout-cell"><img src={MoonIcon} loading="lazy" alt="" className="image-2"/></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad73-af22ad6b" className="w-layout-cell">
              <div>Moon in {celebChart?.get("Moon")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad76-af22ad6b" className="w-layout-cell"><img src={AscendantIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad78-af22ad6b" className="w-layout-cell">
              <div>Ascendent in {celebChart?.get("Ascendant")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad7b-af22ad6b" className="w-layout-cell"><img src={MarsIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad7d-af22ad6b" className="w-layout-cell">
              <div>Mars in {celebChart?.get("Mars")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad80-af22ad6b" className="w-layout-cell"><img src={VenusIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad82-af22ad6b" className="w-layout-cell">
              <div>Venus in {celebChart?.get("Venus")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad85-af22ad6b" className="w-layout-cell"><img src={MercuryIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad87-af22ad6b" className="w-layout-cell">
              <div>Mercury in {celebChart?.get("Mercury")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad8a-af22ad6b" className="w-layout-cell"><img src={JupiterIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad8c-af22ad6b" className="w-layout-cell">
              <div>Jupiter in {celebChart?.get("Jupiter")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad8f-af22ad6b" className="w-layout-cell"><img src={SaturnIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad91-af22ad6b" className="w-layout-cell">
              <div>Saturn in {celebChart?.get("Saturn")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad94-af22ad6b" className="w-layout-cell"><img src={UranusIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad96-af22ad6b" className="w-layout-cell">
              <div>Uranus in {celebChart?.get("Uranus")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad99-af22ad6b" className="w-layout-cell"><img src={NeptuneIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad9b-af22ad6b" className="w-layout-cell">
              <div>Neptune in {celebChart?.get("Neptune")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ad9e-af22ad6b" className="w-layout-cell"><img src={PlutoIcon} loading="lazy" /></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ada0-af22ad6b" className="w-layout-cell">
              <div>Pluto in {celebChart?.get("Pluto")[0]}</div>
            </div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ada3-af22ad6b" className="w-layout-cell"></div>
            <div id="w-node-_2f42e6ca-4915-5d6b-8edb-e32aaf22ada4-af22ad6b" className="w-layout-cell"></div>
          </div>

            <center>
          {curMatch && (<Link className='button w-button' to={`/matchResult`} state={{ user : user, userChart: userChart, match: curMatch }}>Compare My Chart</Link>)}
            </center>
        </div>
      </div>
    </div>
  </div>
            
        </>
    );
};

export default ResultCeleb;
