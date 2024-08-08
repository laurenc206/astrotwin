

const HowItWorks = () => {

    return (
        <>
            <section id="How It Works" className="ds-section">
            
            <div className="ds-section-header">
                    
            <h2 className="ds-title">How It Works</h2>
                        
            <div className="ds-description">
            
            This application starts by accepting user input for parameters to calculate their birth chart. Autofill boxes are incorporated to minimize the user error possible here and protect against chart calculation errors. Once the user submits the form, the data is then sent to the backend.
            <br/><br/>
            The backend then starts a new procedure call to the integrated astrology program using the form information. The chart calculation program requires the parameters be listed in a specific order and also uses an internal atlas to discover location details, so user input validation must be done correctly, otherwise the chart program will be unable to calculate and an error will be thrown.
            <br/><br/>
            The program will then output the users chart which is parsed and saved into a user object. This information is sent to the frontend and once successful, an api call is made to the backend to calculate a list of matches. Within the api call the frontend sends for the match list, it also sends the variable information used to calculate matches. The matches are calculated and sorted in the database (in other words, a list of celeb charts is not retrieved by the backend but rather the result of the operation being performed on the actual data set is).
            <br/><br/>
            Since the user can modify the match variables, it’s important a new match list is calculated when these variables are modified. Additionally, when celebrities are added through the insert celeb page, this will change the match list as well.
            <br/><br/>
            To insert a celeb, an HTTP request is sent to retrieve the birthday information of the celeb from an open-source database. The resulting html page is parsed and if all the data required to calculate the celeb’s chart is present, the celeb chart is then calculated using the same process used to calculate a user’s chart. The celebrity’s data and chart information is then saved into the database.
            
            </div>
                        
            </div>
                      
            </section>
        </>
    );
};

export default HowItWorks;
