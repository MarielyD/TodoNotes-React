<em>Summary</em>

A simple To do list application to explore React and Firebase interaction. Implements a simple flexbox layout, and provides the ability for a user to add and remove notes from a Firebase database. 


<em>Setup</em>

You'll need to get your connection strings from Firebase. Place a file called config.js in src/Config/ that contains your Firebase config as a simple javascript object, exported as DB_CONFIG. For example,

export const DB_CONFIG ={
  apiKey: your_api_key,
  authDomain: your_auth_domain,
  // etc..
}



<em>Starting the app</em>

npm start

