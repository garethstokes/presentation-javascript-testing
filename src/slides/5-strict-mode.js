/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>Strict mode</h2>";
    html = html + "<p>'use strict';</p>";
    return html;
  });

  slide.action(function() {
    var html = "<p>catches typos</p>";
    return html;
  });

  slide.action(function() {
    var html = "<p>name = 'batman'; will throw an error.</p>";
    return html;
  });

  slide.action(function() {
    var html = "<p>eval() is bad and is disabled.</p>";
    return html;
  });

  slide.action(function() {
    var html = "<p>jshint is your friend.</p>";
    return html;
  });

  presentation.add(slide);

})();
