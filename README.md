<h1>This is the frontend for my astrotwin website!</h1>
All pages are components with routes defined in the main App component.<br><br>

There are two seperate API services utilized:
<ol>
  <li>Proxy-server (part of this astrotwin_client directory) to protect google maps API key for location look-up services.</li>
  <br>
  <li>The [astrotwin_server](https://github.com/laurenc206/astrotwin_server) program that is used to:</li>
    <ul>  
      <li>Connect to the celebrity chart database</li>
      <li>Calculate charts</li>
      <li>Run the matching algorithm on the celebrity chart database to retrieve a user's top matches</li>
    </ul>
</ol>
For more information about this project and how I created it check out the [About](https://astrotwin.live/about) section on astrotwin.live
