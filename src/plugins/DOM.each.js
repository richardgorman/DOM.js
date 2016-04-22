//
//  DOM.each.js
//  Author: Richard Gorman
//  Description: Iterates over the nodes in a DOM object.
//

DOM.prototype.each = function(callback) {
    DOM.each(this, callback);
    return this;
};
