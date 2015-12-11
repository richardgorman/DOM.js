//
//  DOM.js
//  Author: Richard Gorman
//  Version: 1.3.0
//

(function (window) {

    'use strict';

    var DOM = function (selector, context) {
        return new DOM._query(selector, context);
    };

    DOM.fn = DOM.prototype = {
        version: '1.3.0',
        constructor: DOM,
        
        // Detect if browser supports {Node}.classList
        classList: (function () {
            return !!document.body.classList;
        })()
    };

    DOM.fn.extend = DOM.extend = function () {
        var target = this,
            key,
            i;

        if (arguments.length > 1) {
            target = arguments[0];
            i = 1;
        }

        for (i = 0; i < arguments.length; i++) {
            for (key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key)) {
                    target[key] = arguments[i][key];
                }
            }
        }

        return target;
    };

    DOM.extend({

        _each: function (object, callback) {
            // Stop if no object or callback given.
            if (!object || !callback) {
                return false;
            }
            
            var i;
            
            for (i = 0; i < object.length; i++) {
                callback.call(object[i], i);
            }

            return this;
        },

        _query: function (selector, context) {
            context = context || document;

            // Stop if no selector or blank selector found.
            if (!selector || selector == "") {
                return false;
            }

            // Return selector if is already a DOM instance.
            if (selector instanceof DOM) {
                return selector;
            }
            
            // If the selector is a single node then return it.
            if (selector.nodeType === 1 || selector.nodeType === 9) {
                this[0] = selector;
                this.length = 1;
                return this;
            }

            [].push.apply(this, context.querySelectorAll(selector));

            return this;
        }
        
    });

    DOM.prototype.extend({

        each: function (callback) {
            DOM._each(this, callback);
            return this;
        },

        find: function (selector) {
            return DOM(selector, this[0]);
        },

        addClass: (function () {
            if (DOM.fn.classList) {
                return function (name) {
                    return this.each(function () {
                        this.classList.add(name);
                    });
                }
            }
            else {
                return function (name) {
                    return this.each(function () {
                        this.className += ' ' + name;
                    });
                }
            }
        })(),

        removeClass: (function () {
            if (DOM.fn.classList) {
                return function (name) {
                    return this.each(function () {
                        this.classList.remove(name);
                    });
                }
            }
            else {
                return function (name) {
                    return this.each(function () {
                        this.className = this.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
                    });
                }
            }
        })(),

        hasClass: (function () {
            if (DOM.fn.classList) {
                return function (name) {
                    return this[0].classList.contains(name);
                }
            }
            else {
                return function (name) {
                    return new RegExp('(^| )' + name + '( |$)', 'gi').test(this.className);
                }
            }
        })(),

        toggleClass: (function () {
            if (DOM.fn.classList) {
                return function (name) {
                    return this.each(function () {
                        this.classList.toggle(name);
                    });
                }
            }
            else {
                return function (name) {
                    return this.each(function () {
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
                }
            }
        })(),

        addEvent: function (event, callback) {
            return this.each(function () {
                this.addEventListener(event, callback, false);
            });
        },

        removeEvent: function (event, callback) {
            return this.each(function () {
                this.removeEventListener(event, callback, false);
            });
        },

        getIndex: function () {
            return Array.prototype.slice.call(this[0].parentNode.children).indexOf(this[0]);
        }

    });

    DOM._query.prototype = DOM.prototype;

    return window.DOM = DOM;

})(window);