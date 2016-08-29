//
//  Name: DOM.insert.js
//  Author: Richard Gorman
//  Description: 
//

DOM.prototype.insert = function(element, number, callback) {
    var children;
    var callback = callback || function(){};

    if (typeof element === "string") {
        var fragment = document.createDocumentFragment();
        var number = number || 1;

        for (var i = 0; i < number; i++) {
            var newElement = document.createElement(element);
            callback(newElement, i + 1);
            fragment.appendChild(newElement);
        }

        children = fragment;
    }
    else if (element.nodeType === 1 || element.nodeType === 9) {
        children = element;
        callback(children);
    }

    DOM.each(this, function() {
        this.appendChild(children, 1);
    });

    return this;
};
