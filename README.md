## DOM.js
A very simple and extensible DOM manipulation library.

```javascript
// Query
var items = DOM( 'selector' );

// Extend
DOM.prototype.myFunction = function(args) {
    // Do something
};

// Call
items.myFunction( { option: value } );
```

Available default functions:
```javascript
// Iterate over a DOM object and run a function for each node.
DOM.each( items, myFunction );

// Run a function when the dom is ready.
DOM.ready( myFunction );
```

```text
Changelog:

1.5.0
→ Further separated the optional plugins.
→ Added the triggerEvent plugin.

1.4.0
→ Separated the old built-in functions into optional plugins.
→ Changed the way extending works. Now should be done using prototype.
```

```text
Browser Compatibility

→ IE9+
→ Android 4.3+
```