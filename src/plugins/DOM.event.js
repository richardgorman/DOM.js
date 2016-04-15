//
//  DOM.event.js
//  Author: Richard Gorman
//  Description: Gives addEvent() and removeEvent()
//  Version: 1.0
//

//
//  addEvent()
//
DOM.prototype.addEvent = function (event, callback) {
    return DOM.each(function () {
        this.addEventListener(event, callback, false);
    });
};

//
//  removeEvent()
//
DOM.prototype.removeEvent = function (event, callback) {
    return DOM.each(function () {
        thiremove(event, callback, false);
    });
};
