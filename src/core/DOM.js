//
//  Name: DOM.js
//  Author: Richard Gorman
//  Version: 1.5.0
//

(function(window) {

    'use strict';

    window.DOM = function(selector, context) {
        return new DOM.query(selector, context);
    };

    DOM.extend = function() {
        var target = this, key, count = 0;

        if (arguments.length > 1) {
            target = arguments[0];
            count = 1;
        }

        for (count; count < arguments.length; count++) {
            for (key in arguments[count]) {
                if (arguments[count].hasOwnProperty(key)) {
                    target[key] = arguments[count][key];
                }
            }
        }

        return target;
    };

    DOM.extend({
        ready: function(func) {
            if (typeof func === 'function') {
                window.addEventListener('load', func);
            }
        },
        each: function(object, callback) {
            // Stop if no object or callback given.
            if (!object || !callback) {
                return false;
            }

            for (var i = 0; i < object.length; i++) {
                callback.call(object[i], i);
            }

            return this;
        },
        query: function(selector, context) {
            // If no context is given then use document.
            context = context || document;

            // Stop if no selector or blank selector found.
            if (!selector || selector === "") {
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

    DOM.query.prototype = DOM.prototype;

})(window);
