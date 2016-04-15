## DOM.js
A very simple and extensible DOM manipulation library that is less then 2kb. The DOM object acts as a wrapper that allows extra functions to be available for queried nodes.

```text
Changelog: 1.3.0 - 1.4.0

→ Separated the old built-in functions into optional plugins.
→ Changed the way extending works. Now should be done using prototype.
```

```text
Browser Compatibility

→ IE9+
→ Android 4.3+
```

#####Query the DOM
```javascript
var item = DOM( 'selector' );
```

#####Extend
```javascript
DOM.prototype.myFunction = function(args) {

	// Do something

};
```

#####Call
```javascript
item.myFunction( { option: value } );
```


--


###Built-in functions

#####DOM.ready()
Perform a task when the window 'load' event is fired

_Usage_
```javascript
DOM.ready(function() {

    // Do something

});
```
