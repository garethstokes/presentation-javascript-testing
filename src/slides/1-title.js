/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>Testing the javascripts</h2>";
    html = html + "<p>A journey into the world of robust javascript applications.</p>";
    return html;
  });

  presentation.add(slide);

})();
