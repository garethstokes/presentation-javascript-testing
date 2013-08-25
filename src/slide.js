/*exported Slide */

function Slide() { 

  "use strict";

  var actions = [],
      index = 0;

  return {

    /*
      A action contains individual
      data to be animated onto the slide.
    */
    action: function(a) {
      actions.push(a);
    },

    /*
      renders a single action to the
      presentation.
    */
    next: function() {
      index = index + 1;
      return (actions[index -1])();
    },

    /*
      returns true if all actions have been
      rendered.
    */
    finished: function() {
      return (index === actions.length);
    },

    /*
      returns the number of actions pushed
      to the stack.
    */
    size: function() {
      return actions.length;
    }

  };
}
