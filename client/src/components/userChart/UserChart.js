import React from 'react';
import Chart from './Chart';


const UserChart = ({user, getUserData, userChart, getMatchData, matchData, varsUpdated}) => {
    

    return (
        <Chart user={user} getUserData={getUserData} userChart={userChart} getMatchData={getMatchData} matchData={matchData} varsUpdated={varsUpdated}/>
    );
};

export default UserChart;
