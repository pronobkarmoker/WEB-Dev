// 1. Click Event
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});

// 2. Mouseover Event
document.getElementById("myDiv").addEventListener("mouseover", function() {
    console.log("Mouse is over the div!");
});

// 3. Mouseout Event
document.getElementById("myDiv").addEventListener("mouseout", function() {
    console.log("Mouse left the div!");
});

// 4. Keydown Event
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});

// 5. Keyup Event
document.addEventListener("keyup", function(event) {
    console.log("Key released: " + event.key);
});

// 6. Submit Event
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Form submitted!");
});

// 7. Change Event
document.getElementById("myInput").addEventListener("change", function() {
    console.log("Input value changed to: " + this.value);
});

// 8. Focus Event
document.getElementById("myInput").addEventListener("focus", function() {
    console.log("Input field focused!");
});

// 9. Blur Event
document.getElementById("myInput").addEventListener("blur", function() {
    console.log("Input field lost focus!");
});

// 10. Resize Event
window.addEventListener("resize", function() {
    console.log("Window resized to: " + window.innerWidth + "x" + window.innerHeight);
});

// 11. Scroll Event
window.addEventListener("scroll", function() {
    console.log("Page scrolled!");
});

// 12. Load Event
window.addEventListener("load", function() {
    console.log("Page fully loaded!");
});

// 13. Unload Event
window.addEventListener("unload", function() {
    console.log("Page is unloading!");
});

// 14. Contextmenu Event (Right-click)
document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevent default context menu
    console.log("Right-click detected!");
});

// 15. Double Click Event
document.getElementById("myButton").addEventListener("dblclick", function() {
    alert("Button double-clicked!");
});

// 16. Drag and Drop Events
document.getElementById("dragItem").addEventListener("dragstart", function(event) {
    console.log("Drag started!");
});
document.getElementById("dropZone").addEventListener("dragover", function(event) {
    event.preventDefault(); // Allow drop
    console.log("Dragging over drop zone!");
});
document.getElementById("dropZone").addEventListener("drop", function(event) {
    event.preventDefault();
    console.log("Item dropped!");
});

// 17. Input Event
document.getElementById("myInput").addEventListener("input", function() {
    console.log("Current input value: " + this.value);
});

// 18. Animation Events
document.getElementById("myDiv").addEventListener("animationstart", function() {
    console.log("Animation started!");
});
document.getElementById("myDiv").addEventListener("animationend", function() {
    console.log("Animation ended!");
});
document.getElementById("myDiv").addEventListener("animationiteration", function() {
    console.log("Animation iteration!");
});

// 19. Transition Events
document.getElementById("myDiv").addEventListener("transitionstart", function() {
    console.log("Transition started!");
});
document.getElementById("myDiv").addEventListener("transitionend", function() {
    console.log("Transition ended!");
});

// 20. Custom Event
const myEvent = new Event("myCustomEvent");
document.getElementById("myDiv").addEventListener("myCustomEvent", function() {
    console.log("Custom event triggered!");
});
document.getElementById("myDiv").dispatchEvent(myEvent);