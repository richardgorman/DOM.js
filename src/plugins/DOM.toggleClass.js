//
//  Name: DOM.toggleClass.js
//  Author: Richard Gorman
//  Description: Toggles a class of nodes.

DOM.prototype.toggleClass = (function (name) {
    // Check for the classList property
    if (!!document.body.classList) {
        return function (name) {
            DOM.each(this, function () {
                this.classList.toggle(name);
            });
        };
    }
    else {
        return function (name) {
            DOM.each(this, function () {
                var classes = this.className.split(' '),
                    existingIndex = classes.indexOf(name);

                if (existingIndex >= 0) {
                    classes.splice(existingIndex, 1);
                }
                else {
                    classes.push(name);
                }

                this.className = classes.join(' ');
            });
        };
    }
})();
