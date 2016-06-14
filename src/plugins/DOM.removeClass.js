//
//  Name: DOM.removeClass.js
//  Author: Richard Gorman
//  Description: Removes a class from nodes.

DOM.prototype.removeClass = (function(name) {
    // Check for the classList property
    if (!!document.body.classList) {
        return function(name) {
            DOM.each(this, function() {
                this.classList.remove(name);
            });
        };
    } else {
        return function(name) {
            DOM.each(this, function() {
                this.className = this.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            });
        };
    }

})();