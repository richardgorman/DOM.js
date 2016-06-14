//
//  Name: DOM.inView.js
//  Author: Richard Gorman
//  Description: Returns true if element is within the viewport.
//

DOM.prototype.inView = function() {
    var context = this;

    // If this is a DOM object then set this to the first node.
    if (context instanceof DOM && context.length) {
        context = context[0];
    }
    else {
        return false;
    }

    return (
        (context.offsetTop >= window.pageYOffset &&
        context.offsetTop <= window.pageYOffset + window.innerHeight &&
        context.offsetLeft >= window.pageXOffset &&
        context.offsetLeft <= window.pageXOffset + window.innerWidth) ||
        (context.offsetTop + context.clientHeight >= window.pageYOffset &&
        context.offsetTop + context.clientHeight <= window.pageYOffset + window.innerHeight &&
        context.offsetLeft + context.clientWidth >= window.pageXOffset &&
        context.offsetLeft + context.clientWidth <= window.pageXOffset + window.innerWidth)
    );
};
