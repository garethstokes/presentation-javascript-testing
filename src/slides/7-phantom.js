/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>phantomjs</h2>";
    html = html + "<p>Web application browser testing</p>";
    return html;
  });

  slide.action(function() {
    var html = "<p>uses a headless webkit scipted with javascript.</p>";
    return html;
  });

  slide.action(function() {
    var html = "<pre>console.log('Loading a web page');\nvar page = require('webpage').create();\nvar url = 'http://www.phantomjs.org/';\npage.open(url, function (status) {\n\t//Page is loaded!\n\tphantom.exit();\n});</pre>";
    return html;
  });

  presentation.add(slide);

})();
