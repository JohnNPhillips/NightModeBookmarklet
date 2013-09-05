##NightMode Bookmarklet

NightMode Bookmarklet is a simple JavaScript bookmarklet that coverts a page to "night mode" to reduce strain on the eyes. All background colors are set to black and all text is set to white.

### Usage

Copy the code from nightmode_bookmarket.js and save it as a bookmark in the browser as "Night Mode". Then, whenever you want to activate night mode for a web page, just click the bookmark and it will do the rest.

### Processing

The nightmode_dev.js contains the original development JavaScript code. The code is first ran through the JavaScript minifier at http://jscompress.com/ to remove white space and comments. Next, the code is ran through the tool at http://chriszarate.github.io/bookmarkleter/ to URL encode the minified JavaScript for use as a bookmarklet. The resulting bookmarket is then saved into nightmode_bookmarket.js.
