//
//  Name: DOM.each.js
//  Author: Richard Gorman
//  Description: Iterates over the nodes of a DOM object.
//

DOM.prototype.each = function(callback) {    
    return DOM.each(this, callback);
};
