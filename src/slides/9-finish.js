/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>thats it folks!</h2>";
    html = html + "<p>thanks for coming.</p>";
    html = html + "<p>http://github.com/garethstokes/presentation-javascript-testing</p>";
    html = html + "<p>follow me on @garrydanger.</p>";
    return html;
  });

  presentation.add(slide);

})();

