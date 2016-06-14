//
//  Name: DOM.addClass.js
//  Author: Richard Gorman
//  Description: Adds a class to nodes.
//

DOM.prototype.addClass = (function(name) {
    // Check for the classList property
    if (!!document.body.classList) {
        return function(name) {
            DOM.each(this, function() {
                this.classList.add(name);
            });
        };
    } else {
        return function(name) {
            DOM.each(this, function() {
                this.className += ' ' + name;
            });
        };
    }
})();