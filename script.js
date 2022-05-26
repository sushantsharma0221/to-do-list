let submitTask = document.getElementById("submit-task");
let inputTask = document.getElementById("write-your-task");
let section = document.querySelector(".task-list");
let myTask = document.querySelector(".my-task");

let taskFunc = () => {
  if (inputTask.value) {
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerText = inputTask.value;
    section.appendChild(task);
    inputTask.value = "";
    task.addEventListener("click", () => {
      task.style.textDecoration = "line-through";
    });
    task.addEventListener("dblclick", () => {
      section.removeChild(task);
    });
  } else {
    return;
  }
};
submitTask.addEventListener("click", taskFunc);
document.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    taskFunc();
  }
});
