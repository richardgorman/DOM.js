//
//  Name: DOM.hasClass.js
//  Author: Richard Gorman
//  Description: Returns true if node contains class.
//

DOM.prototype.hasClass = (function (name) {
    // Check for the classList property
    if (!!document.body.classList) {
        return function (name) {
            return this[0].classList.contains(name);
        };
    }
    else {
        return function (name) {
            return new RegExp('(^| )' + name + '( |$)', 'gi').test(this.className);
        };
    }
})();