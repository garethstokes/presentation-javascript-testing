/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>jasmine the mighty</h2>";
    html = html + "<p>BDD testing made easy.</p>";
    return html;
  });

  slide.action(function() {
    var html = "<pre>describe('A suite', function() { \n\tit('contains spec with an expectation', function() { \n\t\t expect(true).toBe(true); \n\t}); \n});</pre>";
    return html;
  });

  presentation.add(slide);

})();
