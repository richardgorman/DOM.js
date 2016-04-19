//
//  DOM.class.js
//  Author: Richard Gorman
//  Description: Gives addClass(), removeClass(), toggleClass() and hasClass()
//  Version: 1.0
//

//
//  addClass()
//
DOM.prototype.addClass = (function(name) {
    // Check for the classList property
    if (!!document.body.classList) {
        return function(name) {
            return DOM.each(this, function() {
                this.classList.add(name);
            });
        };
    } else {
        return function(name) {
            return DOM.each(this, function() {
                this.className += ' ' + name;
            });
        };
    }
})();

//
//  removeClass()
//
DOM.prototype.removeClass = (function(name) {
    // Check for the classList property
    if (!!document.body.classList) {
        return function(name) {
            return DOM.each(this, function() {
                this.classList.remove(name);
            });
        };
    } else {
        return function(name) {
            return DOM.each(this, function() {
                this.className = this.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            });
        };
    }

})();

//
//  hasClass()
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

//
//  toggleClass()
//
DOM.prototype.toggleClass = (function (name) {
    // Check for the classList property
    if (!!document.body.classList) {
        return function (name) {
            return DOM.each(this, function () {
                this.classList.toggle(name);
            });
        };
    }
    else {
        return function (name) {
            return DOM.each(this, function () {
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
