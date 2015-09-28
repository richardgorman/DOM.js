/*
 *  DOM.js
 *
 *  Author: Richard Gorman
 *  Version 1.0
 *______________________*/




var DOM = (function() {

    "use strict";

    // query()
    function query(selector) {
        return document.querySelectorAll(selector);
    }

    // each()
    function each(elements, callback) {
        for (var i = 0, j = elements.length; i < j; i++) {
            callback(elements[i]);
        }
    }

    // addClass()
    function addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    }

    // removeClass()
    function removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    // toggleClass()
    function toggleClass(el, className) {
        if (el.classList) {
            el.classList.toggle(className);
        }
        else {
            var classes = el.className.split(' '),
                existingIndex = classes.indexOf(className);

            if (existingIndex >= 0) {
                classes.splice(existingIndex, 1);
            }
            else {
                classes.push(className);
            }

            el.className = classes.join(' ');
        }
    }

    // hasClass()
    function hasClass(el, className) {
        if (el.classList) {
            el.classList.contains(className);
        }
        else {
            new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }

    // addEvent()
    function addEvent(element, eventType, callback) {
        if (_isElement(element) && typeof eventType === "string" && typeof callback === "function") {
            element.addEventListener(eventType, callback);
        }
    }

    // removeEvent()
    function removeEvent(element, eventType, callback) {
        if (_isElement(element) && typeof eventType === "string" && typeof callback === "function") {
            element.removeEventListener(eventType, callback);
        }
    }

    // _isElement()
    function _isElement(element) {
       return (typeof HTMLElement === "object" ? element instanceof HTMLElement : element && typeof element === "object" && element !== null && element.nodeType === 1 && typeof element.nodeName === "string");
    }

    return {
        query: query,
        each: each,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        hasClass: hasClass,
        addEvent: addEvent,
        removeEvent: removeEvent
    }

})();