
const Motivation = () => {
    return (
        <>
            <section id="Motivation" className="ds-section">
            
            <div className="ds-section-header">
                        
            <h2 className="ds-title">Motivation</h2>
                        
            <div className="ds-description">
            
            The idea for AstroTwin came to me by combining two of my passions: astrology and software development. While most astrology sites will calculate your chart, and some will even allow you to find celebs with the same sign as you, none allow you to rank matches by looking at your chart as a whole. Keeping in mind that chart twins are incredibly rare and certain placements have more significance in someone's chart, this presented an interesting mathematical question to me about how I could find a ‘best match’ under certain conditions. Not only that but how would I go about formulating, calculating and gathering data for this problem? 
            <br/><br/>
            Version 1 was initially a way for me to practice what I was learning in school and learn more about concepts I was interested in such as:
            <br/><br/><ul>
            <li>Cloud computing</li>
            <li>API calls and remote databases</li>
            <li>Data crawling websites and data parsing</li>
            <li>Integrating existing programs</li>
            </ul>
            <br/>
            When I saw there was a way I could use this project to learn more about each of these topics I began on the version 1 of AstroTwin
            
            <br/><br/><br/>
            
            Version 1 however was a command line program that existed only on my local machine. For Version 2 I wanted to implement a client facing GUI and deploy it so that I could share it with potential employers and friends. For version 2 I: 
            <br/><br/><ul> 
            <li>Learned Javascript React, Spring Boot and MongoDB</li>
            <li>Refactored version 1 as a backend server and created a frontend GUI</li>
            <li>Used RESTful APIs to communicate between services</li>
            <li>Deployed AstroTwin on AWS using EC2 instances</li>   
            </ul>
            <br/>
            With each version I worked to build my understanding of each tool being used. Especially in version 2 where I worked with many new frameworks, I learned about the importance of not only using existing frameworks, but knowing how, when and why to use them. 
            <br/><br/>
            My favorite part of working on this project was creating something entirely new. While it doesn’t solve a ‘business problem’ like the projects they suggest you put on your portfolio, it’s not a cookie cutter project in which I could follow a tutorial from start-to-finish. I created this project from scratch using only an idea and the resources available to me online.
            
            </div>
            
            </div>
            
            </section>
        </>
    );
};

export default Motivation;
