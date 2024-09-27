function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

// handle empty task
    if (!taskInput.value.trim()) {
        return alert("Todo can't be empty!")
    }
// Create a new list item
    var li = document.createElement('li');
    li.textContent = taskInput.value;
    