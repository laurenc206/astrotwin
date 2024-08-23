## This is the frontend for my Astrotwin website!
Astrotwin is a web application where users can calculate their astrology chart and find celebrities who best match their chart!<br><br>
It has a number of features such as:
- Adjustable match variables for users to customize matches and emphasize certain chart placements
- A searchable celebrity database for users to compare their chart with a specific celebrities
- If a celebrity isn't in the database, users can insert their own celebrities!
<br><br>

<b>For more information about this project and how I created it check out the [About](https://astrotwin.live/about) section on astrotwin.live</b>
<br><br>
### APIs:
There are two seperate API services I created for this application:
1. A proxy-server (in the astrotwin_client/server directory) to protect google maps API key for the location autocomplete services

2. The [astrotwin_server](https://github.com/laurenc206/astrotwin_server) program that is used to:
     - Connect to the celebrity chart database
     - Calculate charts
     - Run the matching algorithm on the celebrity chart database to retrieve a user's top matches
<br><br>
## To Start the Frontend:

### Prerequisites:
You will need to create an .env file in both the client and server directories as these are seperate applications.<br>
1. In the .env for the server:
   - <b>PROXY_PORT=</b> the port number you'd like proxy_server to listen on<br>
   - <b>GOOGLE_MAPS_API_KEY=</b> your google maps api key<br><br>
2. In the .env for the client:
   - <b>React_app_BACKEND_URL=</b> the url and port of astrotwin_server
   - <b>React_app_PROXY_URL=</b> the url and port of astrotwin-client/server<br><br>

Begin by making sure node-js is installed and install necessary packages by running `npm i` inside both the astrotwin-client/server and astrotwin-client/client directories.
<br><br>
### To Run:
First, start the proxy_server by navigating to astrotwin-client/server and running `npm run start` (or `pm2 start ecosystem.config.js` if using pm2) <br><br>
After the proxy_server has started, in astrotwin-client/client directory, run `npm run start` <br><br>
*Note:* you will also want to make sure backend astrotwin_server has the url of astrotwin-client/client so that CORS will allow requests to go through. To do this, set the `@CrossOrigin(origins = "astrotwin-client/client-url")` at the top of CelebController and UserController located in the [Controller directory](https://github.com/laurenc206/astrotwin_server/tree/main/src/main/java/dev/lauren/astrotwin/Controller) of the astrotwin backend.
