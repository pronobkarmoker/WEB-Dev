// Basic DOM Manipulation

// Select an element by ID
const heading = document.getElementById('heading');
heading.textContent = 'Hello, DOM!';

// Select elements by class name
const items = document.getElementsByClassName('item');
Array.from(items).forEach((item, index) => {
    item.textContent = `Item ${index + 1}`;
});

// Select elements by tag name
const paragraphs = document.getElementsByTagName('p');
Array.from(paragraphs).forEach((p, index) => {
    p.style.color = index % 2 === 0 ? 'blue' : 'green';
});

// Query Selector
const firstItem = document.querySelector('.item');
firstItem.style.fontWeight = 'bold';

// Query Selector All
const allItems = document.querySelectorAll('.item');
allItems.forEach((item, index) => {
    item.style.backgroundColor = index % 2 === 0 ? '#f4f4f4' : '#ddd';
});

// Intermediate DOM Manipulation

// Create a new element
const newDiv = document.createElement('div');
newDiv.className = 'new-div';
newDiv.textContent = 'This is a new div';
document.body.appendChild(newDiv);

// Add event listener
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Modify attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
link.textContent = 'Visit Example';

// Remove an element
const unwantedElement = document.querySelector('.remove-me');
if (unwantedElement) {
    unwantedElement.remove();
}

// Advanced DOM Manipulation

// Event Delegation
document.querySelector('.list').addEventListener('click', (e) => {
    if (e.target && e.target.matches('li.item')) {
        console.log(`You clicked on ${e.target.textContent}`);
    }
});

// Clone an element
const original = document.querySelector('.clone-me');
const clone = original.cloneNode(true);
document.body.appendChild(clone);

// Insert HTML
const container = document.querySelector('.container');
container.insertAdjacentHTML('beforeend', '<p>New paragraph added dynamically!</p>');

// Modify styles dynamically
const dynamicElement = document.querySelector('.dynamic');
dynamicElement.style.cssText = 'color: red; font-size: 20px; background-color: yellow;';

// Working with forms
const form = document.querySelector('#myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Form Data:', Object.fromEntries(formData.entries()));
});

// Intersection Observer API
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.backgroundColor = 'lightgreen';
        } else {
            entry.target.style.backgroundColor = '';
        }
    });
});
const observedElement = document.querySelector('.observe-me');
observer.observe(observedElement);

// Mutation Observer API
const targetNode = document.querySelector('.observe-mutations');
const config = { childList: true, attributes: true, subtree: true };
const mutationCallback = (mutationsList) => {
    mutationsList.forEach((mutation) => {
        console.log('Mutation detected:', mutation);
    });
};
const mutationObserver = new MutationObserver(mutationCallback);
mutationObserver.observe(targetNode, config);