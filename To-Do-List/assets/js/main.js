const inputNewTask = document.querySelector(".new-task");
const btninputNewTask = document.querySelector(".add-new-task");
const taskList = document.querySelector(".task-list");

function createSingleTask() {
  const li = document.createElement("li");
  return li;
}

function saveTask() {
  const allTasks = taskList.querySelectorAll("li");
  const taskArray = [];

  for (let task of allTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace("Apagar Missão", "").trim();
    taskArray.push(taskText);
  }

  const tasksJSON = JSON.stringify(taskArray);
  localStorage.setItem("Your task list", tasksJSON);
}

function addSavedTasks() {
  const tasks = localStorage.getItem("Your task list"); // pega as tarefas em string no JSON
  if (!tasks) return;
  const tasksConverted = JSON.parse(tasks); // converte a string em array JSON

  for (let task of tasksConverted) {
    createNewTask(task);
  }
}

function createNewTask(taskInput) {
  const li = createSingleTask();
  li.innerText = taskInput;
  taskList.appendChild(li);
  cleanNewTask();
  createEraseBtn(li);
  saveTask();
}

function cleanNewTask() {
  inputNewTask.value = "";
  inputNewTask.focus();
}

function createEraseBtn(li) {
  li.innerText += " ";
  const btnErase = document.createElement("button");
  btnErase.innerHTML = `<img src="./assets/img/parchment.png" alt="Um pergaminho estendido" class="img-erase-mission"> Apagar Missão`;
  btnErase.setAttribute("class", "erase");
  li.appendChild(btnErase);
}

inputNewTask.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    if (!inputNewTask.value) return; // ternário, se input vazio, não faz nada, guard clause
    createNewTask(inputNewTask.value);
  }
});

btninputNewTask.addEventListener("click", () => {
  if (!inputNewTask.value) return; // ternário, se input vazio, não faz nada
  createNewTask(inputNewTask.value);
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.classList.contains("erase")) {
    el.parentElement.remove();
    saveTask();
  }
});

addSavedTasks();
