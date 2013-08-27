/*exported Presentation */
/*global document */

function Presentation() { 

  "use strict";

  var slides = [],
      index = 0,
      clear = false,
      element;


  return {
    ok: true,

    /*
      do some simple checking to see if a element of 
      that name is found on the page.
    */
    init: function(elementName) {
      element = document.getElementById(elementName);
      if (typeof element === 'undefined') {
        return {
          ok: false,
          message: "element: " + elementName + " not found on page"
        };
      }

      var self = this;

      document.onkeypress = function() {
        self.next();
      };
      
      return { ok: true };
    },
    
    /* 
      push a slide to the presentation 
      stack.
    */
    add: function(s) {
      slides.push(s);
    },

    /*
      play the next action available on the 
      current slide, otherwise play the next
      slide.
    */
    next: function() {
      var slide = slides[index];

      if (typeof slide === 'undefined' || slide.finished()) {
        // return if we are at the last
        // page.
        if (index === slides.length) {
          return;
        }
      }
      
      // get the html from the slide
      // and render it.
      var html = slide.next();
      this.render(html);

      if (slide.finished()) {
        index = index + 1;
        clear = true;
      }
    },

    finished: function() {
      return (index > slides.length);
    },

    render: function(html) {
      if (clear) {
        element.innerHTML = '';
        clear = false;
      }

      var article = document.createElement('article');
      article.innerHTML = html;
      element.innerHTML = element.innerHTML + article.innerHTML;
    }
  };

}
