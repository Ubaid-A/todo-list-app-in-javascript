function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    // handle empty task
    if (!taskInput.value.trim()) {
        return alert("Todo can't be empty!")
    }