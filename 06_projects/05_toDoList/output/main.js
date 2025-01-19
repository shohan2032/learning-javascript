"use strict";
const liClasses = {
    li: 'flex items-center justify-between p-2 bg-gray-100 border rounded-lg',
    completedToggleButton: 'w-6 h-6 border rounded-full flex items-center justify-center text-green-500 hover:bg-green-100',
    textSpan: 'text-gray-800 flex-1 ml-4',
    deleteButton: 'bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600',
};
let tasks = [
    { title: 'Example Task', completed: false }
];
const saveToLocalStorage = () => {
    localStorage.setItem('tasks', JSON.stringify(Array.from(tasks.entries())));
};
const loadFromLocalStorage = () => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    else {
        tasks = [
            { title: 'Example Task', completed: false },
        ];
        saveToLocalStorage();
    }
};
const addTask = () => {
    // console.log("in addTask")
    const addTaskButton = document.getElementById('add-task-btn');
    const inputText = document.getElementById('task-input');
    addTaskButton === null || addTaskButton === void 0 ? void 0 : addTaskButton.addEventListener('click', () => {
        // console.log("button clicked");
        const taskText = inputText.value.trim();
        if (taskText) {
            // console.log(taskText);
            tasks.unshift({
                title: taskText,
                completed: false,
            });
            saveToLocalStorage();
            showTasks();
        }
        else {
            alert('Please enter a valid task.');
        }
    });
};
const showTasks = () => {
    const taskList = document.querySelector('#task-list');
    if (taskList) {
        taskList.innerHTML = '';
    }
    tasks.slice(0, 5).forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = liClasses.li;
        // Completed Toggle Button
        const completedToggleButton = document.createElement('button');
        completedToggleButton.className = liClasses.completedToggleButton;
        completedToggleButton.setAttribute('data-index', index.toString()); // Unique identifier
        if (task.completed) {
            completedToggleButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 text-green-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>`;
        }
        else {
            completedToggleButton.innerHTML = '';
        }
        completedToggleButton.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            saveToLocalStorage();
            showTasks();
        });
        // Task Text
        const textSpan = document.createElement('span');
        textSpan.className = liClasses.textSpan;
        textSpan.textContent = task.title;
        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.className = liClasses.deleteButton;
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            saveToLocalStorage();
            showTasks();
        });
        taskItem.appendChild(completedToggleButton);
        taskItem.appendChild(textSpan);
        taskItem.appendChild(deleteButton);
        taskList === null || taskList === void 0 ? void 0 : taskList.appendChild(taskItem);
    });
};
addTask();
showTasks();
