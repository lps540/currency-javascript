# reactjs-compass-example
Converts a number into currency words. 123.45 becomes One hundred twenty-three and 45/100 dollars.

This project uses ReactJS and Compass. 

This is a Chrome desktop app. It uses the notification API to demonstrate that a Chrome app can access the underlying OS.

Prerequisites  

1. Install Compass: http://compass-style.org/install/

Setup  

Development time:

1. npm install
2. grunt serve (uses livereload)

Production time:

1. npm install
2. grunt build
3. Launching the Chrome App

* Start Chrome.
* Go to More Tools/Extension.
* Check "Developer mode".
* Click Load unpacked extenstion, select the YOUR_PROJECT_DIR/dist directory.
* Click Launch
