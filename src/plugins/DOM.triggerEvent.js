//
//  Name: DOM.triggerEvent.js
//  Author: Richard Gorman
//  Description: Triggers an event of nodes.
//

DOM.prototype.triggerEvent = function(eventName) {
    var event;

    if (window.CustomEvent) {
        event = new CustomEvent(eventName);
    }
    else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true);
    }

    DOM.each(this, function() {
        this.dispatchEvent(event);
    });
};