document.getElementById('addButton').addEventListener('click', function () {
    const taskInput = document.getElementById('input');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
    else{
        alert("Enter a task");
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');
    const task = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    task.appendChild(taskSpan);

    task.addEventListener('click', () => {
        taskSpan.classList.toggle("strike");
    });
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Delete';
    doneButton.addEventListener('click', function () {
        task.remove();
    });
    task.appendChild(doneButton);
    taskList.appendChild(task);

}