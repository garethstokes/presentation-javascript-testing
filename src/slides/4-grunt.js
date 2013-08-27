/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>gruntjs</h2>";
    html = html + "<p>a task runner which lets you create a managable development environemnt.</p>";
    return html;
  });

  slide.action(function() {
    var html = "<pre>npm install -g grunt-cli</pre>";
    return html;
  });

  slide.action(function() {
    var html = "<p>Create a package.json / Gruntfile.js then npm install.</p>";
    return html;
  });

  presentation.add(slide);

})();
