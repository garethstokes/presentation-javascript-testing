/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>What is this all about?</h2>";
    html = html + "<p>testing javascript, duh!</p>";
    html = html + "<img src='img/tools.png' />";
    return html;
  });

  presentation.add(slide);

})();
