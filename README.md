This is the frontend for my astrotwin website! 

All pages are components with routes defined in the main App component.
There are two seperate API services utilized:
One is the proxy-server (code contained in this astrotwin_client directory) that helps to protect google maps API key for location services.

The second API service is part of the astrotwin_server program that:
Connects to the celebrity chart database 
Calculates charts
Runs the matching algorithm on the celebrity chart database to retrieve a user's top matches

For more information about this project and how I created it check out astrotwin.live/about
