# uca2017

Node server set up

1. Install Node
a. $sudo apt-get install nodejs	
b. $sudo ln -s /usr/bin/nodejs /usr/bin/node
c. $sudo apt-get install npm

2. Install nodemon - $sudo npm install -g nodemon
3. Goto your project directory(University_Library)
4. run $npm install   - it will install required packages automatically (express and json body parser)
OR try npm install --no-bin-links  if you get symlink error
5. run $node app.js and open browser http://localhost:8080/test 


Angular Project setup

1. Verify that you are running node v4.x.x or higher and npm 3.x.x or higher by running the commands node -v and npm -v
2. cd UCA2017/AngularProject
3. sudo npm install --no-bin-links (if using vagrant), else -> sudo npm install
4. Make changes in package.json for below paths (only if using using vagrant with --no-bin-links)
a. Under scripts: Change "concurrently" to "./node_modules/concurrently/src/main.js"
b. Under scripts: Change "tsc" to "./node_modules/typescript/bin/tsc"
c. Under scripts: Change "lite-server" to "./node_modules/lite-server/bin/lite-server"
	
5. npm start (Runs the start command under "scripts" in package.json)
6. Check url: http://localhost:3000/


Deploy the angular project on node:

Once the the above steps are working i,e, code is built and .js files have been created from .ts do following:
1. Create "client" folder inside "University_Library" project folder
2. Copy the contents of "src" folder from "AngularProject" to the "client" folder created above
3. Copy the "node_modules" folder from "AngularProject" to the "client" folder created above
4. Run "node app.js" in the terminal
5. Start the "angular 2" application: http://localhost:9091/


If everything goes fine - start implementing your project now. 
Refer to requirement.txt for project requirement. Be constructive, add some eye catching features if you want to. best of luck !! 
