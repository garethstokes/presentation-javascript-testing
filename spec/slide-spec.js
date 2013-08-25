/*global jasmine, describe, it, beforeEach, expect, Slide */
/*jshint browser:true */

describe('slide', function() {

  "use strict";

  describe('should push actions', function() {
    
    var slide;

    beforeEach(function() {
      slide = new Slide();

      slide.action(function() {
        return 1;
      });

      slide.action(function() {
        return 2;
      });
    });

    it('and be the correct size', function() {
      expect(slide.size()).toEqual(2);
    });

    it('and in the correct order', function() {
      var action = slide.next();
      expect(action).toEqual(1);

      action = slide.next();
      expect(action).toEqual(2);
    });

  });

});

