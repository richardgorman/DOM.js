//
//  DOM.event.js
//  Author: Richard Gorman
//  Description: Gives addEvent() and removeEvent()
//

//
//  addEvent()
//
DOM.prototype.addEvent = function (event, callback) {
    return DOM.each(this, function () {
        this.addEventListener(event, callback, false);
    });
};

//
//  removeEvent()
//
DOM.prototype.removeEvent = function (event, callback) {
    return DOM.each(this, function () {
        this.removeEventListener(event, callback, false);
    });
};
