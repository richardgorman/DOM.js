//
//  DOM.inView.js
//  Author: Richard Gorman
//  Description: Returns true if the node is within the viewport.
//

DOM.prototype.inView = function() {
    return (
        (this.offsetTop >= window.pageYOffset &&
        this.offsetTop <= window.pageYOffset + window.innerHeight &&
        this.offsetLeft >= window.pageXOffset &&
        this.offsetLeft <= window.pageXOffset + window.innerWidth) ||
        (this.offsetTop + this.clientHeight >= window.pageYOffset &&
        this.offsetTop + this.clientHeight <= window.pageYOffset + window.innerHeight &&
        this.offsetLeft + this.clientWidth >= window.pageXOffset &&
        this.offsetLeft + this.clientWidth <= window.pageXOffset + window.innerWidth)
    );
};
