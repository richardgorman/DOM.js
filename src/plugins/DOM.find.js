//
//  DOM.find.js
//  Author: Richard Gorman
//  Description: Adds find()
//

DOM.prototype.find = function(selector) {
    return DOM(selector, this[0]);
};
