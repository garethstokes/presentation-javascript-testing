/*global jasmine, describe, it, beforeEach, expect */
/*jshint browser:true */

describe('presentation', function() {

  "use strict";

  describe('helloworld', function() {

    it('should say hello', function() {
      var message = "hello world";
      expect(typeof message).toEqual('string');
    });

  });

});

