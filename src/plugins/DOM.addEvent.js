//
//  Name: DOM.addEvent.js
//  Author: Richard Gorman
//  Description: Adds an event to nodes.
//

DOM.prototype.addEvent = function(event, callback, useCapture) {
    var useCapture = useCapture || false;

    return DOM.each(this, function() {
        this.addEventListener(event, callback, useCapture);
    });
};