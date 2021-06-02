const task = `
<textarea wrap="soft" class="task" name="task" id="area"></textarea>
`;

const buttonAddTask = document.querySelector(".backlog_add");
const backlog = document.querySelector(".backlog");

const addTask = () => {
  const newTask = document.createElement("span");
  newTask.innerHTML = task;
  buttonAddTask.before(newTask);
};

buttonAddTask.addEventListener("click", addTask);

area.value = localStorage.getItem("area");
area.oninput = () => {
  localStorage.setItem("area", area.value);
};
