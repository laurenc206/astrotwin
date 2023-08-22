<section id="Motivation" className="ds-section">
            
<div className="ds-section-header">
            
<h2 className="ds-title">Motivation</h2>
            
<div className="ds-description">

The idea for AstroTwin came to me by combining two of my passions: astrology and software development. While most astrology sites will calculate your chart, and some will even allow you to find celebs with the same sign as you, none allow you to rank matches by looking at your chart as a whole. Keeping in mind that chart twins are incredibly rare and certain placements have more significance in someone's chart, this presented an interesting mathematical question to me about how I could find a ‘best match’ under certain conditions. Not only that but how would I go about formulating, calculating and gathering data for this problem? 

Version 1 was initially a way for me to practice what I was learning in school and learn more about concepts I was interested in such as:
- Cloud computing
- API calls and remote databases
- Data crawling
- Integrating existing programs
  
When I saw there was a way I could use this project to learn more about each of these topics I began on the version 1 of AstroTwin

<br>

Version 1 however was a command line program that existed only on my local machine. For Version 2 I wanted to implement a client facing GUI and deploy it so that I could share it with potential employers and friends. For version 2 I: 
- Learned Javascript React, Spring Boot and MongoDB
- Refactored version 1 as a backend server and created a frontend GUI
- Used RESTful APIs to communicate between services
- Deployed AstroTwin on AWS using EC2 instances   

With each version I worked to build my understanding of each tool being used. Especially in version 2 where I worked with many new frameworks, I learned about the importance of not only using existing frameworks, but knowing how, when and why to use them. 

My favorite part of working on this project was creating something entirely new. While it doesn’t solve a ‘business problem’ like the projects they suggest you put on your portfolio, it’s not a cookie cutter project in which I could follow a tutorial from start-to-finish. I created this project from scratch using only an idea and the resources available to me online.

</div>

</div>

</section>


<section id="How It Works" className="ds-section">
            
<div className="ds-section-header">
        
<h2 className="ds-title">How It Works</h2>
            
<div className="ds-description">

This application starts by accepting user input for parameters to calculate their birth chart. Autofill boxes are incorporated to minimize the user error possible here and protect against chart calculation errors. Once the user submits the form, the data is then sent to the backend.

The backend then starts a new procedure call to the integrated astrology program using the form information. The chart calculation program requires the parameters be listed in a specific order and also uses an internal atlas to discover location details, so user input validation must be done correctly, otherwise the chart program will be unable to calculate and an error will be thrown.

The program will then output the users chart which is parsed and saved into a user object. This information is sent to the frontend and once successful, an api call is made to the backend to calculate a list of matches. Within the api call the frontend sends for the match list, it also sends the variable information used to calculate matches. The matches are calculated and sorted in the database (in other words, a list of celeb charts is not retrieved by the backend but rather the result of the operation being performed on the actual data set is).

Since the user can modify the match variables, it’s important a new match list is calculated when these variables are modified. Additionally, when celebrities are added through the insert celeb page, this will change the match list as well.

To insert a celeb, an HTTP request is sent to retrieve the birthday information of the celeb from an open-source database. The resulting html page is parsed and if all the data required to calculate the celeb’s chart is present, the celeb chart is then calculated using the same process used to calculate a user’s chart. The celebrity’s data and chart information is then saved into the database.

</div>
            
</div>
          
</section>


<section id="Version 1" className="ds-section">

<div className="ds-section-header">

<h2 className="ds-title">Version 1</h2>
            
<div className="ds-description">

This version started as a simple command line program. I found an open-source astrology program that I integrated into my project for chart calculations. A new process is started by my application that will, using the parameters entered in by the user, calculate the users chart. The output of the astrology program is then parsed and data is saved into a user object. 

There is then an API call made to the Azure SQL database consisting of the celebrity charts to return a list of the celebs ordered by a match score. I’m not an astrologer so I decided to make the match score adjustable through modifiable variables for better matching capabilities for the more experienced astrologist or curious user. While using a local database would have sufficed, I wanted to use this project as an opportunity to learn more about cloud architecture and sending/receiving data through API calls. A SQL database was the obvious choice here due to the structured nature of chart data and the type of calculation queries being done on that data.

Finally, in order to populate the database with celeb chart info, I needed to collect data. I automated this process through web calls to sites containing celebrity lists and parsing the site’s html. Once I had a list of celebrity names, using an open-source data bank with celebs birthdate information, I retrieved their birth information data and I calculated their charts (similarly to users) and inserted their celebrity and chart information into the database. In summary, in order to populate the celebrity database, I created a total of 4 different services: one to gather celebrity names, one to gather their birthday information, one for location services and finally the one to calculate their chart.
 
By the end of this project I had gotten well versed in <b><SPAN STYLE="font-size:15.0pt; line-height: 1.4em;">data parsing, making web api calls (both to a remote database and other websites) and working with existing programs within my application.</b> </span>

</div>
            
</div>
          
</section>

          
<section id="Version 2" className="ds-section">
            
<div className="ds-section-header">
            
<h2 className="ds-title">Version 2</h2>
            
<div className="ds-description">

I had come to the realization that in order to make this project and its capabilities stand out, I would need to develop a client-facing GUI. To be honest, frontend development was something I didn’t have much experience with prior, so after combing through several youtube videos, I found one that would walk me through modifying my project into a full stack application. Although this project was nothing like the one I was developing, it helped to guide me while working with several new tech stacks and frameworks.

In version 2, I separated the front and backend. The Javascript frontend is able to access the data and calculation capabilities through RESTful services and HTTP requests to my backend server running Java supported by a remote mongoDB database. 

Aside from needing to learn Javascript, creating the front end was relatively straightforward as there was no refactoring that needed to be done. I started by first designing the site using a website creating platform so I had a HTML boilerplate to work off of. After getting familiar with React components and syntax, I then modified the code to create state, dynamic components, and RESTful services to make HTTP requests to the backend server hosting the data and business logic. In version 1 the variables used to match are stored in the process running the program. However, in order to allow for each user to work with their own set of variables, I decided to store these variables in the frontend and send them as a parameter when requesting match data. This would simplify the backend so it wouldn’t need to maintain a map of variables to each user. Maintaining state and knowing when to request for a recalculation of matches gave me valuable insight about the separation of data between a client facing service and the data service backend.

Another challenge that presented itself when creating with the frontend was input validation. In version 1 of my program, if the user incorrectly entered a parameter, the program would continue to prompt the user until a valid input was received. This may have worked in version 1, however, having a GUI that makes you enter each field (like month, day, etc) separately is tedious. I also wanted to make sure users entered the information correctly the first time so they wouldn’t grow frustrated trying to comply with the strict formatting required of the location and chart services. Input validation and error handling became increasingly difficult as the chart calculation program uses an internal atlas that requires a specific format. It is therefore necessary for both my parser and the chart calculation program to be working under the same set of rules. The autofill boxes and location API service I implemented allow for AstroTwin to guarantee location details used in subsequent service calls are correctly formatted in order to avoid chart calculation errors.

The backend required me to do significant refactoring. Luckily I was able to reuse the parsing logic from version 1, so most of what I gained from working on version 1 to version 2 was experience working with existing frameworks (Spring Boot) and no-SQL databases like mongoDB. Although I still think a relational database makes the most sense to store birth charts and meta-data, the video I was referencing used mongoDBB and I wanted to stay consistent with the tech stack being used in my guide. Switching my database from Azure to mongoDB (a no-SQL database) meant I needed to change how I queried my data, and how that data was communicated between services. The advantage here is mongoDB can store JSON documents which allowed me to easily pass data to the frontend in JSON format. 

While refactoring, I took this as an opportunity to organize my code using a MVC format (separating model/ services/ controllers). Version 1 was modeled off of an old school project from my databases class; As the functionality and codebase of this project grew, it’s only natural I would need to reorganize my code using an established coding pattern to accomodate RESTful APIs and the JSON-like documents stored in my database.

Lastly, in order to make full use of version 2, I needed to deploy it. This project makes use of 4 different AWS services: the code itself is running on EC2 virtual machines set up with elastic IPs. Route 53 is used for the domain creation and management, along with ACM (Amazon Certificate Manager) to verify the domain to allow for https requests. Once the astrotwin.net domain was secured, Amazon’s load balancing services allow for the port number to be disguised by redirecting ports 80 (http) and 443 (https) to the instance and port running the frontend.

This version introduced many new languages and frameworks to me like <b><SPAN STYLE="font-size:15.0pt; line-height: 1.4em;">Javascript React, Spring Boot, mongoDB and AWS</span></b>. I’m proud of how it turned out. I hope you enjoyed using AstroTwin!

</div>
            
</div>
          
</section>

<section id="Resources" className="ds-section">
            
<div className="ds-section-header">
            
<h2 className="ds-title">Resources</h2>       
            
<div className="ds-description">

- <a href="https://www.astrolog.org/astrolog/astfile.htm" target="_blank">Astrolog</a>

  Open source Astrology program for chart calculations

- <a href="https://www.astro.com/astro-databank/Main_Page" target="_blank">Astro-Databank</a>
  
  Database queried for celebrity birth data

- <a href="https://www.geonames.org/" target="_blank">GeoNames</a>

  Geographical database for location API

- <a href="https://mailtrap.io/" target="_blank">MailTrap</a>
  
  Email delivery platform for forwarding feedback form to my inbox  

- <a href="https://webflow.com/" target="_blank">WebFlow</a>

  Web design platform used to draft static html

- <a href="https://www.amazon.com/Only-Astrology-Book-Youll-Ever/dp/1589796535/ref=sr_1_2?crid=HVBIOZVF27JV&keywords=astrology+books&qid=1692682532&sprefix=astrology+%2Caps%2C1089&sr=8-2" target="_blank">The Only Astrology Book You'll Ever Need </a>by Joanna Martine Woolfolk

  Resource for matches on planet/sign combinations

</div>
            
</div>
          
</section>