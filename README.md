# DOM.js
A very simple and lightweight DOM manipulation library that is **less then 3kb**.

```javascript
var items = DOM( '.selector' );
```

###List of functions:
- each()
- addClass()
- removeClass()
- toggleClass()
- hasClass()
- addEvent()
- removeEvent()


--


###each()
Iterates over given Array of elements

**Usage**
```javascript
DOM( ... ).each(function( object ) {
    // Do something
});
```


--


###addClass()
Appends a string to the object's classList

**Usage**
```javascript
DOM( ... ).addClass( 'className' );
```


--


###removeClass()
Removes a string from the object's classList

**Usage**
```javascript
DOM( ... ).removeClass( 'className' );
```


--


###toggleClass()
Appends/Removes a string to/from the object's classList

**Usage**
```javascript
DOM( ... ).toggleClass( 'className' );
```


--


###hasClass()
Returns whether or not a given HTMLElement contains the given className in its classList

**Usage**
```javascript
DOM( ... ).hasClass( 'className' );
```


--


###addEvent()
Registers the event and callback with the given element

**Usage**
```javascript
DOM( ... ).addEvent( eventType, callback );
```


--


###removeEvent()
Removes the event and callback from the given element

**Usage**
```javascript
DOM( ... ).removeEvent( eventType, callback );
```
