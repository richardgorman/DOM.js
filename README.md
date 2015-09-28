# DOM.js
A very simple and lightweight DOM manipulation library that is <1kb.

###List of functions:
- query()
- each()
- addClass()
- removeClass()
- toggleClass()
- hasClass()
- addEvent()
- removeEvent()


--


###query()
Returns any HTMLElement objects that match any of the given selectors

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
Iterates over given Array of elements

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


###addClass()
Appends a string to the object's classList

**Parameters**
- (object) HTMLElement
- (string) Class Name

**Usage**
```javascript
DOM.addClass( object, 'className' );
```


--


###removeClass()
Removes a string from the object's classList

**Parameters**
- (object) HTMLElement
- (string) Class Name

**Usage**
```javascript
DOM.removeClass( object, 'className' );
```


--


###toggleClass()
Appends/Removes a string to/from the object's classList

**Parameters**
- (object) HTMLElement
- (string) Class Name

**Usage**
```javascript
DOM.toggleClass( object, 'className' );
```


--


###hasClass()
Returns whether or not a given HTMLElement contains the given className in its classList

**Parameters**
- (object) HTMLElement
- (string) Class Name

**Usage**
```javascript
DOM.hasClass( object, 'className' );
```


--


###addEvent()
Registers the event and callback with the given element

**Parameters**
- (object) HTMLElement
- (string) Event Type
- (function) Callback

**Usage**
```javascript
DOM.addEvent( object, eventType, callback );
```


--


###removeEvent()
Removes the event and callback from the given element

**Parameters**
- (object) HTMLElement
- (string) Event Type
- (function) Callback

**Usage**
```javascript
DOM.removeEvent( object, eventType, callback );
```
