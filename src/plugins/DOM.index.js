//
//  Name: DOM.index.js
//  Author: Richard Gorman
//  Description: Returns the index of the node, relative to the parent node.
//

DOM.prototype.index = function () {
    return Array.prototype.slice.call(this[0].parentNode.children).indexOf(this[0]);
};
