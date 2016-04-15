//
//  DOM.find.js
//  Author: Richard Gorman
//  Description: Adds find().
//  Version: 1.0
//

DOM.prototype.find = function(selector) {
    return DOM(selector, this[0]);
};
