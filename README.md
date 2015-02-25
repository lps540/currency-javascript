# currency-javascript

Converts a number into currency words. 123.45 becomes "One hundred twenty-three and 45/100 dollars".

This project uses React and Compass to build a Chrome desktop application. Although it is a desktop application, it can be developed using the Chrome browser (i.e., grunt serve). This app uses the notification API to demonstrate that a Chrome app, written in HTML and Javascript, can access the underlying OS.

Prerequisites  

1. Install Node.js: http://nodejs.org/
2. Install Compass: http://compass-style.org/install/

Setup  

At development time:

1. npm install
2. grunt serve (uses livereload)
Note: the notification button will not work in the browser. It is an app-only feature.

At production time:

1. npm install
2. grunt build
3. Launch the Chrome App:

* Start the Chrome Browser.
* Go to "More Tools/Extensions".
* Check "Developer mode" at the top of the Extensions page.
* Click "Load unpacked extension...", select the directory: YOUR_PROJECT_DIR/dist.
* Click the "Launch" button under the Currency app.
