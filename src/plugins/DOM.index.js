//
//  DOM.index.js
//  Author: Richard Gorman
//  Description: Adds index()
//

DOM.prototype.index = function () {
    return Array.prototype.slice.call(this[0].parentNode.children).indexOf(this[0]);
};
