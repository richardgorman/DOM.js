//
//  DOM.index.js
//  Author: Richard Gorman
//  Description: Adds index().
//  Version: 1.0
//

DOM.prototype.index = function () {
    return Array.prototype.slice.call(this[0].parentNode.children).indexOf(this[0]);
};
