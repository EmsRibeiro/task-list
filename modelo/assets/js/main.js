const newTask = document.querySelector('.new-task');
const btnNewTask = document.querySelector('.add-new-task');
const taskList = document.querySelector('.task-list');

function createSingleTask() {
  const li = document.createElement('li');
  return li;
}

function createNewTask(taskInput){
  const li = createSingleTask();
  li.innerText = taskInput;
  taskList.appendChild(li);
}

btnNewTask.addEventListener('click', ()=>{
  if (!newTask.value) return; // ternário, se input vazio, não faz nada
  createNewTask(newTask.value);
});