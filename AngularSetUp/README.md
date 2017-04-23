Steps to set up the project:
	- Verify that you are running node v4.x.x or higher and npm 3.x.x or higher by running the commands node -v and npm -v
	- Create a project folder quickstart
	- git clone https://github.com/angular/quickstart.git quickstart
	- cd quickstart
	- sudo npm install --no-bin-links (if using vagrant), else - sudo npm install
	- Make changes in package.json for below paths (only if using using vagrant with --no-bin-links)
		- Under scripts: Change "concurrently" to "./node_modules/concurrently/src/main.js"
		- Under scripts: Change "tsc" to "./node_modules/typescript/bin/tsc"
		- Under scripts: Change "lite-server" to "./node_modules/lite-server/bin/lite-server"
			
	- npm start (Runs the start command under "scripts" in package.json)
  
Deploy the above project on node:
	- Once the the above steps are working i,e, code is built and .js files have been created from .ts do following:
		- Create "client" folder inside "node" project folder
		- Copy the contents of "src" folder from "quickstart" to the "client" folder created above
		- Copy the "node_modules" folder from "quickstart" to the "client" folder created above
		- Run "node app.js" in the terminal
		- Start the "angular 2" application
