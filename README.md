

## Udacity Website Optimization Portfolio Project
This is my solution to the Website Optimization Portfolio Project, which is part of Udacity's Front-End Nanodegree Program. This project focuses on website performance/optimization, honing in the critical rendering path to make sure the website renders as quickly as possible.

### Instructions

#### Serving the website locally and using ngrok to tunnel a url to localhost
1. Install all dependent npm packages:

``` bash
$> cd project-directory 
$> npm install
```
2. Install gulp if you don't have it yet:

``` bash
$> npm install -g gulp
```

3. Run `gulp` in your terminal to start the task runner and start up a local dev server:

``` bash
$> gulp
```

4. Copy an ngrok executable to the main project directory and use it to tunnel a url to localhost (detailed instructions are in the readme section of original Udacity repo below):

``` bash
$> ./ngrok http 3000
```

There are three required outcomes for this project:
1. Optimize the main website's index.html so it achieves a Google PageSpeedInsights score of 90 or more.
2. Optimize views./js/main.js and views/pizza.html so that the site renders with a consistent 60fps when scrolling.
3. Optimize views/js/main.js so that the time to resize pizzas using the change pizza size slider is less than 5ms.

### My Optimizations
#### Part 1: Optimize PageSpeed Insights score for index.html
* Deferred loading of Google Analytics script
* Moved fetching of web font to use @font-face in styles.css
* Added "media=print" attribute to fetch print.css only for printing
* Uglified and minified JS and CSS files
* Resized and optimized image files to use base64 encoding
* Used inline script tag to defer load main css file

#### Part 2: Optimize views/js/main.js and views/pizza/html to get rid of jank
* Used cached value for document.body.scrolltop in updatePositions() to avoid forced synchronous layout
* Simplified calculation of widths for pizza size slider by using CSS classes instead of JavaScript.
  * Got rid of in-line styling of width and height in randomPizzaContainer divs
  * Removed complicated JS function to calculate width, instead revised document.QuerySelectorAll to add the correct pizza size classes based on pizza size slider value

README from original Udacity repo below.

---

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>



