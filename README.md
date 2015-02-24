# reactjs-compass-example

Converts a number into currency words. 123.45 becomes "One hundred twenty-three and 45/100 dollars".

This project uses ReactJS and Compass. 

This is a Chrome desktop app. It uses the notification API to demonstrate that a Chrome app can access the underlying OS.

Prerequisites  

1. Install Compass: http://compass-style.org/install/

Setup  

Development time:

1. npm install
2. grunt serve (uses livereload)
Note: the notification button will not work while in the browser. It is a app-only feature.

Production time:

1. npm install
2. grunt build
3. Launch the Chrome App:

* Start the Chrome Browser.
* Go to More Tools/Extensions.
* Check "Developer mode" at the top of the Extensions page.
* Click "Load unpacked extension...", select the directory: YOUR_PROJECT_DIR/dist.
* Click "Launch" for the Currency app.
