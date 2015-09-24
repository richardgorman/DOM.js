# DOM.js
A very simple and lightweight DOM manipulation library that is <1kb.

###List of functions:
- query()
- each()
- isElement()
- addClass()
- removeClass()
- toggleClass()
- hasClass()
- addEvent()
- removeEvent()
- setAttr()
- getAttr()


--


###query()
Returns any HTMLElement objects that match any of the given selectors.

**Parameters**
- (String) Selector to query the DOM
- (Boolean) Match all selectors

**Returns**
- (Array) HTMLElement objects

**Usage**
```javascript
DOM.query( 'selectors', true|false );
```

--


###each()
Description

**Parameters**
- (Array) HTMLElement
- (Function) Callback

**Usage**
```javascript
DOM.each( objects, function( object ) {
    // Do something
});
```


--


###isElement()
Returns true is the object is a valid HTMLElement

**Parameters**
- (object) Object

**Usage**
```javascript
DOM.isElement( object );
```


--


###addClass()
Appends a string to the object classList

**Parameters**
- (object) HTMLElement

**Usage**
```javascript
DOM.addClass( object, 'className' );
```


--


###removeClass()
Description

**Parameters**
- Coming soon

**Returns**
- Coming soon

    Code example


--


###toggleClass()
Description

**Parameters**
- Coming soon

**Returns**
- Coming soon

    Code example


--


###hasClass()
Description

**Parameters**
- Coming soon

**Returns**
- Coming soon

    Code example


--


###addEvent()
Description

**Parameters**
- Coming soon

**Returns**
- Coming soon

    Code example


--


###removeEvent()
Description

**Parameters**
- Coming soon

**Returns**
- Coming soon

    Code example


--


###setAttr()
Description

**Parameters**
- Coming soon

**Returns**
- Coming soon

    Code example


--


###getAttr()
Description

**Parameters**
- Coming soon

**Returns**
- Coming soon

    Code example

