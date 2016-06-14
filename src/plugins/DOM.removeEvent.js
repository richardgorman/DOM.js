//
//  Name: DOM.removeEvent.js
//  Author: Richard Gorman
//  Description: Removes events from nodes.
//

DOM.prototype.removeEvent = function(event, callback, useCapture) {
    var useCapture = useCapture || false;

    return DOM.each(this, function() {
        this.removeEventListener(event, callback, useCapture);
    });
};