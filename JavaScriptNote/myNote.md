# JavaScript Events

In JavaScript, events are actions or occurrences that can be detected by the browser, such as user interactions (clicking a button, typing in a form field) or other events (such as page loading or resizing). Events allow developers to add dynamic behavior to web pages, making them interactive.

## Key Concepts

### 1. Event Types

Common event types include:
- `click`: Triggered when an element is clicked.
- `submit`: Triggered when a form is submitted.
- `keydown`/`keyup`: Triggered when a key is pressed or released.
- `mouseover`/`mouseout`: Triggered when the mouse pointer enters or leaves an element.
- `focus`/`blur`: Triggered when an element gains or loses focus.
- `load`: Triggered when the page or an image has fully loaded.

### 2. Event Listeners

To respond to an event, JavaScript uses *event listeners*. You attach an event listener to an element, specifying the event type and a callback function to execute when the event occurs.

Example:
```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

### 3. Event Object

When an event is triggered, an `Event` object is created. This object contains information about the event, such as the target element, the type of event, and more.

Example:
```javascript
button.addEventListener('click', function(event) {
    console.log(event.target); // Shows the element that triggered the event
});
```

### 4. Event Propagation

Events can propagate in two phases:
- **Capturing Phase**: The event starts from the root and propagates down to the target element.
- **Bubbling Phase**: The event bubbles up from the target element to the root.

By default, events bubble up, but you can stop propagation using `event.stopPropagation()` to prevent the event from reaching other elements.

Example:
```javascript
button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the event from bubbling
    alert('Button clicked!');
});
```

### 5. Event Delegation

Instead of attaching multiple event listeners to child elements, you can attach one listener to a parent element and use event delegation to handle events for all child elements. This is more efficient, especially when dealing with dynamically added elements.

Example:
```javascript
document.querySelector('ul').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        alert('List item clicked: ' + event.target.textContent);
    }
});
```

### 6. Prevent Default Behavior

Some events have default behaviors (e.g., form submission, link navigation). You can prevent these behaviors using `event.preventDefault()`.

Example:
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission
    alert('Form submission prevented!');
});
```

### 7. Event Handling Methods

- `addEventListener()`: Adds an event listener to an element.
- `removeEventListener()`: Removes an event listener from an element.
- `dispatchEvent()`: Dispatches an event to an element.

### 8. Inline Event Handlers

You can also define event handlers directly in the HTML using attributes like `onclick`, `onmouseover`, etc. However, it's generally considered better practice to use `addEventListener()` for better flexibility and separation of concerns.

Example:
```html
<button onclick="alert('Button clicked!')">Click me</button>
```

---

## JavaScript Asynchronous Behavior

JavaScript is a single-threaded programming language, which means it can execute one task at a time. However, it also has the ability to handle asynchronous operations. Asynchronous behavior allows JavaScript to perform tasks, such as network requests or timers, without blocking the main thread of execution, leading to better performance and responsiveness.

### 1. **Understanding Asynchronous Behavior**

In a synchronous operation, code is executed line by line, and each operation must complete before the next one begins. In contrast, asynchronous operations allow certain tasks to run in the background while other code continues to execute.

Asynchronous behavior is crucial for tasks like:
- Fetching data from a server (AJAX requests).
- Performing time-based actions (e.g., waiting for a timer).
- Reading and writing to files in Node.js.
- Handling events like user inputs or network responses.

### 2. **Callbacks**

A **callback** is a function passed into another function as an argument and is executed when the asynchronous task completes.

#### Example (Callback):

```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Fetched data';
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log(data); // Outputs: "Fetched data" after 1 second
});
```

In the example above, the `fetchData` function performs an asynchronous task (simulated with `setTimeout`) and calls the `callback` function once the task is complete.

### 3. **Promises**

A **Promise** is a modern way to handle asynchronous operations. It represents a value that may be available now, or in the future, or never at all. Promises allow you to handle asynchronous results in a more manageable way, avoiding "callback hell."

A Promise has three states:
- **Pending**: The initial state, the operation is still ongoing.
- **Resolved (Fulfilled)**: The operation has completed successfully.
- **Rejected**: The operation has failed.

#### Creating and Using Promises:

```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = 'Fetched data';
        resolve(data); // Resolves the promise with data
    }, 1000);
});

fetchData
    .then(data => {
        console.log(data); // Outputs: "Fetched data" after 1 second
    })
    .catch(error => {
        console.error(error); // Handles errors if any
    });
```

In this example, the `fetchData` promise resolves after 1 second, and the `.then()` method handles the resolved value. If there is an error, `.catch()` can handle the rejection.

Here's detailed documentation for `Promise.all()` and `Promise.allSettled()` with proper examples:

---

## `Promise.all()`

### Description
`Promise.all()` takes an iterable of promises (e.g., an array) and returns a single promise that resolves when **all of the input promises resolve** or **rejects immediately if any of the input promises reject**.

- **If all promises resolve**: The returned promise resolves with an array of their results.
- **If any promise rejects**: The returned promise rejects with the reason of the first promise that rejects.

### Syntax
```javascript
Promise.all(iterable);
```

### Example: Resolving All Promises
```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // Outputs: [10, 20, 30]
    })
    .catch(error => {
        console.error(error); // This will not execute since all promises resolve.
    });
```

### Example: Rejection Handling
```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Error occurred');
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // This will not execute since one promise rejects.
    })
    .catch(error => {
        console.error(error); // Outputs: "Error occurred"
    });
```

---

## `Promise.allSettled()`

### Description
`Promise.allSettled()` takes an iterable of promises and returns a single promise that resolves when **all of the input promises settle** (i.e., either resolve or reject). Unlike `Promise.all()`, it **never rejects** and instead returns an array of objects describing the outcome of each promise.

- Each object in the array has:
  - **`status`**: Either `'fulfilled'` or `'rejected'`.
  - **`value`**: The resolved value (if fulfilled).
  - **`reason`**: The rejection reason (if rejected).

### Syntax
```javascript
Promise.allSettled(iterable);
```

### Example: Resolving and Rejecting Promises
```javascript
const promise1 = Promise.resolve(10);
const promise2 = Promise.reject('Error occurred');
const promise3 = Promise.resolve(30);

Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
        // Outputs:
        // [
        //   { status: 'fulfilled', value: 10 },
        //   { status: 'rejected', reason: 'Error occurred' },
        //   { status: 'fulfilled', value: 30 }
        // ]
    });
```

### Use Case: Handling Both Fulfilled and Rejected Promises
When you need to process results from all promises regardless of whether they resolve or reject, `Promise.allSettled()` is useful.

```javascript
const promises = [
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/invalid-endpoint').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json())
];

Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} fulfilled with value:`, result.value);
            } else {
                console.error(`Promise ${index + 1} rejected with reason:`, result.reason);
            }
        });
    });
```

---

## Comparison Between `Promise.all()` and `Promise.allSettled()`

| Feature                        | `Promise.all()`                       | `Promise.allSettled()`               |
|--------------------------------|---------------------------------------|--------------------------------------|
| **Resolves When**              | All promises resolve.                 | All promises settle (resolve/reject).|
| **Rejects When**               | Any promise rejects.                  | Never rejects.                       |
| **Result on Success**          | Array of resolved values.             | Array of result objects.             |
| **Result on Failure**          | Rejects immediately with the first error. | Resolves with an array of result objects (includes both fulfilled and rejected). |

---

### Summary

- Use `Promise.all()` when you need **all promises to succeed**, and any rejection should immediately stop the operation.
- Use `Promise.allSettled()` when you need to know the outcome of **all promises**, regardless of whether they resolve or reject.

### 4. **Async/Await**

`async` and `await` provide a cleaner and more readable way to work with promises. `async` is used to declare an asynchronous function, and `await` is used inside `async` functions to pause the execution until the promise resolves.

#### Example (Async/Await):

```javascript
async function fetchData() {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Fetched data');
        }, 1000);
    });
    console.log(result); // Outputs: "Fetched data" after 1 second
}

fetchData();
```

In this example, the `fetchData` function is marked as `async`, and inside it, the `await` keyword is used to pause execution until the promise is resolved. This makes asynchronous code look and behave more like synchronous code.

### 5. **Event Loop**

JavaScript’s **Event Loop** is the mechanism that allows asynchronous tasks to be handled. It works with a **Call Stack** and a **Message Queue**:

- The **Call Stack** keeps track of the execution context (function calls).
- The **Message Queue** stores messages for asynchronous operations, such as events or resolved promises.
- The **Event Loop** monitors the Call Stack and the Message Queue. If the Call Stack is empty, it pushes messages from the Message Queue to the Call Stack for execution.

### 6. **Timers**

JavaScript also supports asynchronous behavior through timers, such as `setTimeout()` and `setInterval()`. These functions allow you to delay execution or repeat execution at intervals without blocking the main thread.

#### Example (setTimeout):

```javascript
setTimeout(() => {
    console.log('This message is delayed by 2 seconds');
}, 2000); // Delays for 2 seconds
```

#### Example (setInterval):

```javascript
let counter = 0;
const interval = setInterval(() => {
    console.log('Repeating every 1 second');
    counter++;
    if (counter >= 5) {
        clearInterval(interval); // Stop after 5 repetitions
    }
}, 1000);
```

### 7. **Error Handling in Asynchronous Code**

Proper error handling is essential in asynchronous operations. Using `try...catch` with `async/await` or `.catch()` with Promises can handle errors effectively.

#### Example (Error Handling with Async/Await):

```javascript
async function fetchData() {
    try {
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Error occurred');
            }, 1000);
        });
        console.log(result);
    } catch (error) {
        console.error(error); // Outputs: "Error occurred"
    }
}

fetchData();
```

### 8. **Chaining Promises**

You can chain multiple `.then()` methods to handle sequential asynchronous operations.

#### Example (Promise Chaining):

```javascript
fetchData
    .then(result => {
        console.log(result); // First asynchronous operation
        return new Promise((resolve) => {
            setTimeout(() => resolve('Second operation'), 1000);
        });
    })
    .then(secondResult => {
        console.log(secondResult); // Second asynchronous operation
    })
    .catch(error => {
        console.error(error); // Handles any errors in the chain
    });
```

### Summary

JavaScript's asynchronous behavior allows you to handle operations like network requests, timers, and event handling without blocking the main thread. You can manage asynchronous code using callbacks, promises, and `async/await` syntax. Understanding the event loop and how asynchronous tasks are processed is essential for writing efficient, non-blocking JavaScript code.

