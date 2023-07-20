import React from 'react';
import userIcon from '../../images/user-icon.svg'

const MatchHeader = ({user, match}) => {
  console.log(JSON.stringify(match))
  const celebBday = new Date(match?.celeb.bday)
  console.log(JSON.stringify(celebBday))
  console.log(JSON.stringify(user))


    return (
<>

    <div className="section_2 wf-section">
      
      <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d21a-e3b8d21a" className="w-layout-layout quick-stack-8 wf-layout-layout">
        
        <div id="w-node-_1e2202d2-e629-88bf-5764-32b9ff4cd5b7-e3b8d21a" className="w-layout-cell cell-9"></div>
        
        <div id="w-node-b33d1ab9-58f0-2422-5d8b-b804a8ab5b87-e3b8d21a" className="w-layout-cell"><h3 className="heading-4">{Math.round(match?.percent)}% match</h3></div>
        

        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22d-e3b8d21a" className="w-layout-cell cell-8">

          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22e-e3b8d21a" className="w-layout-layout quick-stack-12 wf-layout-layout">
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22f-e3b8d21a" className="w-layout-cell"><img src={userIcon} loading="lazy" alt=""/></div>
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22f-e3b8d21a" className="w-layout-cell"><h2>{user?.userData.name}</h2></div>   
            
          </div>
        </div>
        



        <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22d-e3b8d21a" className="w-layout-cell cell-9">
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22e-e3b8d21a" className="w-layout-layout quick-stack-12 wf-layout-layout">
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22f-e3b8d21a" className="w-layout-cell"><img src={match?.celeb.imageUrl} loading="lazy" alt=""/></div>   
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d235-e3b8d21a" className="w-layout-cell"><h2>{match?.celeb.name}</h2></div> 
          </div>
        </div>

       
       
        <div id="w-node-_1e2202d2-e629-88bf-5764-32b9ff4cd5b7-e3b8d21a" className="w-layout-cell cell-8">
            <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22e-e3b8d21a" className="w-layout-layout quick-stack-5 wf-layout-layout">
              <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22f-e3b8d21a" className="w-layout-cell cell-2"><h6>Born:</h6></div>   
              <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d235-e3b8d21a" className="w-layout-cell">
                  <p>
                  <div className="text-block-12">{user?.dayStr}</div>
                  <div className="text-block-14">at {user?.timeStr}</div>
                  <div className="text-block-14">{user?.locationStr}</div>
                  </p>
              </div>
            </div>
        </div>


        <div id="w-node-b33d1ab9-58f0-2422-5d8b-b804a8ab5b87-e3b8d21a" className="w-layout-cell cell-9">
          <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22e-e3b8d21a" className="w-layout-layout quick-stack-5 wf-layout-layout">
              <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d22f-e3b8d21a" className="w-layout-cell cell-2"><h6>Born:</h6></div>   
              <div id="w-node-acfb0cfc-423c-6793-641c-9f45e3b8d235-e3b8d21a" className="w-layout-cell">
                  <p>
                  <div className="text-block-12">{`${celebBday.toLocaleString('default', {month: 'long'})} ${celebBday.getDate()}, ${celebBday.getFullYear()}`}</div>
                  <div className="text-block-14">{`at ${celebBday.toLocaleString('default', { hour: 'numeric', minute: 'numeric', hour12: true })}`}</div>
                  <div className="text-block-14">{`${match?.celeb.blocation.town}, ${match?.celeb.blocation.country}`}</div>
                  </p>
              </div>
            </div>
        </div>

    </div>
</div>
</>
    );
};

export default MatchHeader;
