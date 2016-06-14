//
//  Name: DOM.find.js
//  Author: Richard Gorman
//  Description: Finds children matching the given selector within a context.
//

DOM.prototype.find = function(selector) {
    return DOM(selector, this[0]);
};
