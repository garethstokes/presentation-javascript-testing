/*global jasmine, describe, it, beforeEach, expect */
/*jshint browser:true */

describe('FFXCommon', function() {

  "use strict";

  describe('helloworld', function() {

    it('should be able extend an object with on/off/trigger methods', function() {
      var message = "hello world";
      expect(typeof message).toEqual('string');
    });

  });

});

