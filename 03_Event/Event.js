 /**1. type
➤ What it does:
The type property returns a string indicating the type of the event (e.g., "click", "keydown").

✅ Syntax:
javascript
Copy
Edit
event.type
✅ Example:
html
Copy
Edit
<button id="myBtn">Click Me</button>

<script>
  document.getElementById("myBtn").addEventListener("click", function(event) {
    console.log("Event type:", event.type); // Output: "click"
  });
</script>
✅ 2. timeStamp
➤ What it does:
The timeStamp property returns the time (in milliseconds) at which the event was created. This is relative to the page loading.

✅ Syntax:
javascript
Copy
Edit
event.timeStamp
✅ Example:
html
Copy
Edit
<button id="btn">Click</button>

<script>
  document.getElementById("btn").addEventListener("click", function(event) {
    console.log("Event occurred at:", event.timeStamp);
  });
</script>
✅ 3. defaultPrevented
➤ What it does:
The defaultPrevented property returns true if event.preventDefault() was called to prevent the default action.

✅ Syntax:
javascript
Copy
Edit
event.defaultPrevented
✅ Example:
html
Copy
Edit
<a href="https://google.com" id="link">Google</a>

<script>
  document.getElementById("link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevents going to Google
    console.log("Default prevented?", event.defaultPrevented); // true
  });
</script>
✅ 4. target
➤ What it does:
Returns the actual element that triggered the event (can be a child inside the listener's element).

✅ Syntax:
javascript
Copy
Edit
event.target
✅ Example:
html
Copy
Edit
<div id="container">
  <button>Click Me</button>
</div>

<script>
  document.getElementById("container").addEventListener("click", function(event) {
    console.log("Clicked element:", event.target.tagName); // Might be "BUTTON"
  });
</script>
✅ 5. toElement (mostly used in mouse events & not standard)
➤ What it does:
Gives the element the mouse pointer entered during a mouseover or mouseout event. It's non-standard, so avoid it in modern code.

✅ Syntax:
javascript
Copy
Edit
event.toElement
✅ Example:
html
Copy
Edit
<div id="box1" style="width:100px;height:100px;background:red;"></div>
<div id="box2" style="width:100px;height:100px;background:blue;"></div>

<script>
  box1.addEventListener("mouseout", function(event) {
    console.log("Mouse entered into:", event.toElement?.id); // Might log "box2"
  });
</script>
✅ Note: Use relatedTarget instead for cross-browser support.

✅ 6. srcElement (IE specific – not recommended)
➤ What it does:
Returns the element that originally triggered the event. It's similar to target, but used in old IE versions.

✅ Syntax:
javascript
Copy
Edit
event.srcElement
✅ Example:
javascript
Copy
Edit
element.addEventListener("click", function(event) {
  var target = event.srcElement || event.target;
  console.log("Clicked:", target.id);
});
✅ Note: Modern browsers use event.target. Use that instead.

✅ 7. currentTarget
➤ What it does:
Returns the element on which the event listener is registered.

✅ Syntax:
javascript
Copy
Edit
event.currentTarget
✅ Example:
html
Copy
Edit
<div id="outerDiv">
  <button>Click Inside</button>
</div>

<script>
  document.getElementById("outerDiv").addEventListener("click", function(event) {
    console.log("Listener attached to:", event.currentTarget.id); // "outerDiv"
    console.log("Clicked element is:", event.target.tagName); // "BUTTON"
  });
</script>**/