# Install
```
    npm i -g concurently lite-server gulp nodemon
    npm i
``` 
 ## packake.json
 ```
    "clear": "gulp clean",// clear folder dist independently
    "prod": "gulp --prod", // create dist version
    "lite": "lite-server -c bs-config.json", // run lite-server ith config
    "start": " concurrently \"gulp\" \"npm run lite\" \"nodemon ./api/server.js\" " //start gulp task in dev mode and dev lite-server and api server
```
