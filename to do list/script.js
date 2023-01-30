const inputTask = document.getElementById("input-task");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

addButton.addEventListener("click", function() {
  const task = inputTask.value;
  if (!task) {
    return;
  }

  const newTask = document.createElement("li");
  newTask.classList.add("task");
  newTask.innerHTML = `
    ${task}
    <button>X</button>
  `;
  taskList.appendChild(newTask);

  newTask.querySelector("button").addEventListener("click", function() {
    newTask.remove();
  });

  inputTask.value = "";
});
