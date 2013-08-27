/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>casperjs</h2>";
    html = html + "<p>a better phantomjs</p>";
    return html;
  });

  slide.action(function() {
    var html = "<p>sits on top of phantomjs, provides helper libraries.</p>";
    return html;
  });

  slide.action(function() {
    var html = "<pre>var casper = require('casper').create();\n\ncasper.start('http://casperjs.org/', function() {\n\tthis.echo(this.getTitle());\n});\n\ncasper.thenOpen('http://phantomjs.org', function() {\n\tthis.echo(this.getTitle()); \n});\n\ncasper.run();</pre>";
    return html;
  });

  presentation.add(slide);

})();
