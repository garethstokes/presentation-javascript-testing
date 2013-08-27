/*global presentation, Slide */

(function() {
  
  "use strict";

  var slide = new Slide();

  slide.action(function() {
    var html = "<h2>Who am I?</h2>";
    html = html + "<p>{{ Gareth stokes aka @garrydanger }}<p>";
    return html;
  });

  slide.action(function() {
    var html = "<div class='hero'><img src='img/ffx.png'>";
    html = html + "<p>works @ fairfax media writing the javascripts and rubies.</p></div>";
    return html;
  });

  slide.action(function() {
    var html = "<div class='hero'><img src='img/graphdat.png'>";
    html = html + "<p>a former nodejs junkie @ graphdat.com</p></div>";
    return html;
  });

  presentation.add(slide);

})();
