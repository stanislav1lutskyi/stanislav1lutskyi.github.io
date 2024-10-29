let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    if (task.completed) taskItem.classList.add('completed');
 checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', () => toggleComplete(index));

    const taskText = document.createElement('span');
    taskText.textContent = `${task.text} (${task.date})`;
    taskText.classList.add('task-text');
    taskText.addEventListener('dblclick', () => editTask(index));

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✖';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => removeTask(index));

    if (!task.completed) taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(removeBtn);
    taskList.appendChild(taskItem);
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && taskInput.value.trim()) {
    tasks.push({
      text: taskInput.value.trim(),
      date: new Date().toLocaleString(),
      completed: false
    });
    taskInput.value = '';
    renderTasks();
  }
});

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const taskItem = taskList.children[index];
  const taskText = taskItem.querySelector('.task-text');
  
  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.value = tasks[index].text;
  editInput.classList.add('edit-input');
  
  taskItem.replaceChild(editInput, taskText);

  editInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      tasks[index].text = editInput.value.trim();
      renderTasks();
    }
  });
}

renderTasks();
