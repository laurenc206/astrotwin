<h1>This is the frontend for my Astrotwin website!</h1>
<h3>About: </h3>
Astrotwin is a web application where users can calculate their astrology chart and find celebrities who best match their chart!<br><br>
It has a number of features such as:
<ul>
<li>Adjustable match variables for users to customize matches and emphasize certain chart placements</li>
<li>A searchable celebrity database for users to compare their chart with a specific celebrities</li>
<li>If a celebrity isn't in the database, users can insert their own celebrities!</li>
</ul>
<br>  
<b>For more information about this project and how I created it check out the [About](https://astrotwin.live/about) section on astrotwin.live</b>
<br><br>

<h3>APIs: </h3>
There are two seperate API services I created for this application:
<ol>
  <li>A proxy-server (in the astrotwin_client/server directory) to protect google maps API key for the location autocomplete services</li>
  <br>
  <li>The [astrotwin_server](https://github.com/laurenc206/astrotwin_server) program that is used to:</li>
    <ul>  
      <li>Connect to the celebrity chart database</li>
      <li>Calculate charts</li>
      <li>Run the matching algorithm on the celebrity chart database to retrieve a user's top matches</li>
    </ul>
</ol>

<br><br>
<h2>To Start the Frontend:</h2>

<h3>Prerequisites:</h3>
You will need to create an .env file in both the client and server directories as these are seperate applications.<br><br>
<ul>
  <li>In the .env for the server:
    <ul
      <li><b>PROXY_PORT=</b> the port number you'd like proxy_server to listen on</li>
      <li><b>GOOGLE_MAPS_API_KEY=</b> your google maps api key</li>
    </ul>
  </li>
   <br>
  <li>In the .env for the client:
    <ul>
      <li><b>React_app_BACKEND_URL=</b> the url and port of astrotwin_server</li>
      <li><b>React_app_PROXY_URL=</b> the url and port of astrotwin-client/server</li>
    </ul>
</ul>
<br>
Begin by making sure node-js is installed and install necessary packages by running `npm i` inside both the astrotwin-client/server and astrotwin-client/client directories.
<br>
<br>
<h3>To Run:</h3>
 First, start the proxy_server by navigating to astrotwin-client/server and running `npm run start` (or `pm2 start ecosystem.config.js` if using pm2) <br><br>
After the proxy_server has started, in astrotwin-client/client directory, run `npm run start` <br><br>
Note you will also want to make sure backend astrotwin_server has the url of astrotwin-client/client so that CORS will allow requests to go through. To do this, set the @CrossOrigin(origins = "astrotwin-client/client-url") at the top of CelebController and UserController located in the [Controller directory](https://github.com/laurenc206/astrotwin_server/tree/main/src/main/java/dev/lauren/astrotwin/Controller) of the astrotwin backend.
