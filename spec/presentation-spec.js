/*global jasmine, describe, it, beforeEach, expect, spyOn, Presentation, Slide */
/*jshint browser:true */

function article(content) {
  var a = document.createElement('article');
  a.innerHTML = content;
  return a;
}

describe('presentation', function() {

  "use strict";

  describe('create a presentation', function() {
    
    var presentation,
        element;

    beforeEach(function() {
      var slide = new Slide();

      element = document.createElement('div');
      spyOn(document, 'getElementById').andReturn(element);

      presentation = new Presentation();

      slide.action(function() {
        return "one";
      });

      slide.action(function() {
        return "two";
      });

      presentation.slide(slide);
    });

    it('returns ok', function() {
      expect(presentation.ok).toEqual(true);
    });

    it('will play in order and not past last slide', function() {
      spyOn(presentation, 'render');

      presentation.next();
      expect(presentation.render).toHaveBeenCalledWith("one");

      presentation.next();
      expect(presentation.render).toHaveBeenCalledWith("two");

      //expect(presentation.finished()).toEqual(true);
    });

  });

});

