import React from 'react';

const VersionTwo = () => {
    return (
        <>
            <section id="Version 2" className="ds-section">
            
            <div className="ds-section-header">
                        
            <h2 className="ds-title">Version 2</h2>
                        
            <div className="ds-description">
         
            I had come to the realization that in order to make this project and its capabilities stand out, I would need to develop a client-facing GUI. To be honest, frontend development was something I didn’t have much experience with prior, so after combing through several youtube videos, I found one that would walk me through modifying my project into a full stack application. Although this project was nothing like the one I was developing, it helped to guide me while working with several new tech stacks and frameworks.
            <br/><br/>
            In version 2, I separated the front and backend. The Javascript frontend is able to access the data and calculation capabilities through RESTful services and HTTP requests to my backend server running Java supported by a remote mongoDB database. 
            <br/><br/>
            Aside from needing to learn Javascript, creating the front end was relatively straightforward as there was no refactoring that needed to be done. I started by first designing the site using a website creating platform so I had a HTML boilerplate to work off of. After getting familiar with React components and syntax, I then modified the code to create state, dynamic components, and RESTful services to make HTTP requests to the backend server hosting the data and business logic. In version 1 the variables used to match are stored in the process running the program. However, in order to allow for each user to work with their own set of variables, I decided to store these variables in the frontend and send them as a parameter when requesting match data. This would simplify the backend so it wouldn’t need to maintain a map of variables to each user. Maintaining state and knowing when to request for a recalculation of matches gave me valuable insight about the separation of data between a client facing service and the data service backend.
            <br/><br/>
            Another challenge that presented itself when creating with the frontend was input validation. In version 1 of my program, if the user incorrectly entered a parameter, the program would continue to prompt the user until a valid input was received. This may have worked in version 1, however, having a GUI that makes you enter each field (like month, day, etc) separately is tedious. I also wanted to make sure users entered the information correctly the first time so they wouldn’t grow frustrated trying to comply with the strict formatting required of the location and chart services. Input validation and error handling became increasingly difficult as the chart calculation program uses an internal atlas that requires a specific format. It is therefore necessary for both my parser and the chart calculation program to be working under the same set of rules. The autofill boxes and location API service I implemented allow for AstroTwin to guarantee location details used in subsequent service calls are correctly formatted in order to avoid chart calculation errors.
            <br/><br/>
            The backend required me to do significant refactoring. Luckily I was able to reuse the parsing logic from version 1, so most of what I gained from working on version 1 to version 2 was experience working with existing frameworks (Spring Boot) and no-SQL databases like mongoDB. Although I still think a relational database makes the most sense to store birth charts and meta-data, the video I was referencing used mongoDBB and I wanted to stay consistent with the tech stack being used in my guide. Switching my database from Azure to mongoDB (a no-SQL database) meant I needed to change how I queried my data, and how that data was communicated between services. The advantage here is mongoDB can store JSON documents which allowed me to easily pass data to the frontend in JSON format. 
            <br/><br/>
            While refactoring, I took this as an opportunity to organize my code using a MVC format (separating model/ services/ controllers). Version 1 was modeled off of an old school project from my databases class; As the functionality and codebase of this project grew, it’s only natural I would need to reorganize my code using an established coding pattern to accomodate RESTful APIs and the JSON-like documents stored in my database.
            <br/><br/>
            Lastly, in order to make full use of version 2, I needed to deploy it. This project makes use of 4 different AWS services: the code itself is running on EC2 virtual machines set up with elastic IPs. Route 53 is used for the domain creation and management, along with ACM (Amazon Certificate Manager) to verify the domain to allow for https requests. Once the astrotwin.net domain was secured, Amazon’s load balancing services allow for the port number to be disguised by redirecting ports 80 (http) and 443 (https) to the instance and port running the frontend.
            <br/><br/>
            This version introduced many new languages and frameworks to me like <b><font style={{fontSize:"15.0pt", lineHeight:"1.4em"}}>Javascript React, Spring Boot, mongoDB and AWS</font></b>. I’m proud of how it turned out. I hope you enjoyed using AstroTwin!
            
            </div>
                        
            </div>
                      
            </section>
        </>
    );
};

export default VersionTwo;
