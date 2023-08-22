

const VersionOne = () => {
    return (
        <>
<section id="Version 1" className="ds-section">

<div className="ds-section-header">

<h2 className="ds-title">Version 1</h2>
            
<div className="ds-description">

This version started as a simple command line program. I found an open-source astrology program that I integrated into my project for chart calculations. A new process is started by my application that will, using the parameters entered in by the user, calculate the users chart. The output of the astrology program is then parsed and data is saved into a user object. 
<br/><br/>
There is then an API call made to the Azure SQL database consisting of the celebrity charts to return a list of the celebs ordered by a match score. I’m not an astrologer so I decided to make the match score adjustable through modifiable variables for better matching capabilities for the more experienced astrologist or curious user. While using a local database would have sufficed, I wanted to use this project as an opportunity to learn more about cloud architecture and sending/receiving data through API calls. A SQL database was the obvious choice here due to the structured nature of chart data and the type of calculation queries being done on that data.
<br/><br/>
Finally, in order to populate the database with celeb chart info, I needed to collect data. I automated this process through web calls to sites containing celebrity lists and parsing the site’s html. Once I had a list of celebrity names, using an open-source data bank with celebs birthdate information, I retrieved their birth information data and I calculated their charts (similarly to users) and inserted their celebrity and chart information into the database. In summary, in order to populate the celebrity database, I created a total of 4 different services: one to gather celebrity names, one to gather their birthday information, one for location services and finally the one to calculate their chart.
<br/><br/>
By the end of this project I had gotten well versed in <b><font style={{fontSize:"15.0pt", lineHeight:"1.4em"}}>data parsing, making web api calls (both to a remote database and other websites) and working with existing programs within my application.</font></b>

</div>
            
</div>
          
</section>
        </>
    );
};

export default VersionOne;
