/*exported Presentation */
/*global document */

function Presentation(elementName) { 

  "use strict";

  var slides = [],
      index = 0,
      element = document.getElementById(elementName);

  /*
    do some simple checking to see if a element of 
    that name is found on the page.
  */
  if (typeof element === 'undefined') {
    return {
      ok: false,
      message: "element: " + elementName + " not found on page"
    };
  }

  return {
    ok: true,
    
    /* 
      push a slide to the presentation 
      stack.
    */
    slide: function(s) {
      slides.push(s);
    },

    /*
      play the next action available on the 
      current slide, otherwise play the next
      slide.
    */
    next: function() {
      var slide = slides[index];

      if (slide.finished()) {
        // return if we are at the last
        // page.
        if (index === slides.length) {
          return;
        }

        // try again.
        this.next();
      }
      
      // get the html from the slide
      // and render it.
      var html = slide.next();
      this.render(html);

      if (slide.finished()) {
        index = index + 1;
      }
    },

    finished: function() {
      return (index > slides.length);
    },

    render: function(html) {
      var article = document.createElement('article');
      article.innerHTML = html;
      element.innerHTML = element.innerHTML + article;
    }
  };

}
