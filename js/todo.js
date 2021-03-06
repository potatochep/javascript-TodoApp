const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function tooManyList() {
  const alertPage = document.querySelector(".too-many-list");
  alertPage.classList.remove("hidden");
}

function lessList() {
  const alertPage = document.querySelector(".too-many-list");
  alertPage.classList.add("hidden");
}

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));

  saveToDos();
}

function finishedToDO(event) {
  const divBox = event.target.parentElement;
  const doneToDo = divBox.querySelector("span");
  doneToDo.className = "finished-todo";
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  li.className = "todo-right__list";
  const divLeft = document.createElement("div");
  divLeft.className = "list-left";
  divLeft.classList.add(Date.now());
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", deleteToDo);
  const checkBtn = document.createElement("button");
  checkBtn.addEventListener("click", finishedToDO);
  checkBtn.innerText = "o";
  divLeft.appendChild(checkBtn);
  divLeft.appendChild(span);
  li.appendChild(divLeft);
  li.appendChild(deleteBtn);
  toDoList.appendChild(li);
}

function handelTodoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObject = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObject);
  const numberOfToDo = toDos.length;
  if (numberOfToDo > 10) {
    tooManyList();
  } else if (numberOfToDo <= 10) {
    lessList();
  }
  paintToDo(newToDoObject);
  saveToDos();
}

toDoForm.addEventListener("submit", handelTodoSubmit);

const okayButton = document.querySelector(".too-many-list button");

function delteAlertPage() {
  const okayButton = document.querySelector(".too-many-list");
  okayButton.classList.add("hidden");
}

okayButton.addEventListener("click", delteAlertPage);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
