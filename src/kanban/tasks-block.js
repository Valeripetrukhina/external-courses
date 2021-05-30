const dataMock = [
  {
    title: "backlog",
    issues: [
      {
        id: 1,
        name: "Login page – performance issues",
      },
      {
        id: 2,
        name: "Sprint bugfix",
      },
    ],
  },
  {
    title: "ready",
    issues: [
      {
        id: 3,
        name: "Shop page – performance issues",
      },
      {
        id: 4,
        name: "Checkout bugfix",
      },
      {
        id: 5,
        name: "Shop bug",
      },
    ],
  },
  {
    title: "in progress",
    issues: [
      {
        id: 6,
        name: "User page – performance issues",
      },
      {
        id: 7,
        name: "Auth bugfix",
      },
    ],
  },
  {
    title: "finished",
    issues: [
      {
        id: 8,
        name: "Main page – performance issues",
      },
      {
        id: 9,
        name: "Main page bugfix",
      },
    ],
  },
];
let storedData = localStorage.getItem("myData");
let myData = dataMock;
if (storedData) {
  myData = JSON.parse(localStorage.getItem("myData"));
}

const backlog = document.querySelector(".backlog");
const board = document.querySelector(".board");
const button = document.querySelector(".button");

function addTask(taskId, value) {
  const newTask = document.createElement("textarea");
  newTask.value = value || "";
  newTask.className = "card_name";
  newTask.dataset.taskId = taskId;
  newTask.addEventListener("blur", saveTask);
  backlog.append(newTask);
}
const buttonAddTask = document.querySelector(".new_card");

myData[0].issues.forEach((value) => {
  addTask(value.id, value.name);
});

function saveDataToLocalStorage() {
  localStorage.setItem("myData", JSON.stringify(myData));
}

function saveTask(event) {
  let id = Number(event.target.dataset.taskId);
  let value = event.target.value;
  let changedTask = myData[0].issues.find((v) => v.id === id);
  if (!changedTask) {
    let newTask = { id: id, name: value };
    myData[0].issues.push(newTask);
  } else {
    changedTask.name = value;
  }
  saveDataToLocalStorage();
}

buttonAddTask.addEventListener("click", () => addTask(setId(), ""));

function setId() {
  let newId = 1;
  for (let i = 0; i < myData.length; i++) {
    newId += myData[i].issues.length;
  }
  return newId;
}

const buttonAddCard = document.querySelector(".btnReady");
const btnProgress = document.querySelector(".btnProgress");
const btnFinished = document.querySelector(".btnFinished");
const ready = document.querySelector(".ready");
const progress = document.querySelector(".progress");
const finished = document.querySelector(".finished");
let dropdownReady = document.createElement("ul");
dropdownReady.className = "dropdown_task";
let dropdownProgress = document.createElement("ul");
dropdownProgress.className = "dropdown_task";
let dropdownFinished = document.createElement("ul");
dropdownFinished.className = "dropdown_task";

for (let i = 0; i < myData[0].issues.length; i++) {
  let li = document.createElement("li");
  li.dataset.taskId = Number(myData[0].issues[i].id);
  li.innerHTML = myData[0].issues[i].name;
  li.className = "selection_task";
  dropdownReady.append(li);
  li.addEventListener("click", movingTaskReady);
}

for (let i = 0; i < myData[1].issues.length; i++) {
  let li = document.createElement("li");
  li.dataset.taskId = Number(myData[1].issues[i].id);
  li.innerHTML = myData[1].issues[i].name;
  li.className = "selection_task";
  dropdownProgress.append(li);
  li.addEventListener("click", movingTaskProgress);
}

for (let i = 0; i < myData[2].issues.length; i++) {
  let li = document.createElement("li");
  li.dataset.taskId = Number(myData[2].issues[i].id);
  li.innerHTML = myData[2].issues[i].name;
  li.className = "selection_task";
  dropdownFinished.append(li);
  li.addEventListener("click", movingTaskFinished);
}

function readyCard() {
  for (let i = 0; i < myData[1].issues.length; i++) {
    let newCard = document.createElement("span");
    newCard.value = myData[1].issues[i].name;
    newCard.id = myData[1].issues[i].id;
    newCard.innerHTML = myData[1].issues[i].name;
    newCard.className = "card_name";
    ready.append(newCard);
  }
}
readyCard();

function progressCard() {
  for (let i = 0; i < myData[2].issues.length; i++) {
    let newCard = document.createElement("span");
    newCard.value = myData[2].issues[i].name;
    newCard.id = myData[2].issues[i].id;
    newCard.innerHTML = myData[2].issues[i].name;
    newCard.className = "card_name";
    progress.append(newCard);
  }
}
progressCard();

function movingTaskReady(eventClick) {
  let value = eventClick.target.textContent;
  let selectedTask = myData[0].issues.find((v) => v.name === value);
  console.log(selectedTask);

  if (selectedTask) {
    myData[1].issues.push(selectedTask);
    myData[0].issues = myData[0].issues.filter((el) => {
      return el.id !== selectedTask.id;
    });
  }
  let newCard = document.createElement("span");
  newCard.innerHTML = selectedTask.name;
  newCard.className = "card_name";
  ready.append(newCard);
  dropdownReady.remove(readyBoard);
  saveDataToLocalStorage();
}

function movingTaskProgress(eventClick) {
  let value = eventClick.target.textContent;
  let selectedTask = myData[1].issues.find((v) => v.name === value);
  console.log(selectedTask);

  if (selectedTask) {
    myData[2].issues.push(selectedTask);
    myData[1].issues = myData[1].issues.filter((el) => {
      return el.id !== selectedTask.id;
    });
  }
  let newCard = document.createElement("span");
  newCard.innerHTML = selectedTask.name;
  newCard.className = "card_name";
  progress.append(newCard);
  dropdownProgress.remove(progressBoard);
  saveDataToLocalStorage();
}

function movingTaskFinished(eventClick) {
  let value = eventClick.target.textContent;
  let selectedTask = myData[2].issues.find((v) => v.name === value);
  console.log(selectedTask);

  if (selectedTask) {
    myData[3].issues.push(selectedTask);
    myData[2].issues = myData[2].issues.filter((el) => {
      return el.id !== selectedTask.id;
    });
  }
  let newCard = document.createElement("span");
  newCard.innerHTML = selectedTask.name;
  newCard.className = "card_name";
  finished.append(newCard);
  dropdownFinished.remove(finishedBoard);
  saveDataToLocalStorage();
}

function finishedCard() {
  for (let i = 0; i < myData[3].issues.length; i++) {
    let newCard = document.createElement("span");
    newCard.value = myData[3].issues[i].name;
    newCard.id = myData[3].issues[i].id;
    newCard.innerHTML = myData[3].issues[i].name;
    newCard.className = "card_name";
    finished.append(newCard);
  }
}
finishedCard();

const readyBoard = document.querySelector(".readyBoard");
function selectionTaskReady() {
  if (!readyBoard.querySelector(".dropdown_task")) {
    readyBoard.append(dropdownReady);
    buttonAddCard.before(dropdownReady);
  } else {
    dropdownReady.remove(readyBoard);
  }
}
buttonAddCard.addEventListener("click", selectionTaskReady);

const progressBoard = document.querySelector(".progressBoard");
function selectionTaskProgress() {
  if (!progressBoard.querySelector(".dropdown_task")) {
    progressBoard.append(dropdownProgress);
    btnProgress.before(dropdownProgress);
  } else {
    dropdownProgress.remove(progressBoard);
  }
}
btnProgress.addEventListener("click", selectionTaskProgress);

const finishedBoard = document.querySelector(".finishedBoard");
function selectionTaskFinished() {
  if (!finishedBoard.querySelector(".dropdown_task")) {
    finishedBoard.append(dropdownFinished);
    btnFinished.before(dropdownFinished);
  } else {
    dropdownFinished.remove(finishedBoard);
  }
}
btnFinished.addEventListener("click", selectionTaskFinished);

if (!backlog.querySelector(".card_name")) {
  buttonAddCard.setAttribute("disabled", true);
} else {
  buttonAddCard.removeAttribute("disabled");
}

if (!ready.querySelector(".card_name")) {
  btnProgress.setAttribute("disabled", true);
} else {
  btnProgress.removeAttribute("disabled");
}

if (!progress.querySelector(".card_name")) {
  btnFinished.setAttribute("disabled", true);
} else {
  btnFinished.removeAttribute("disabled");
}
