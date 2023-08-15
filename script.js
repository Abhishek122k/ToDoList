document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
          const li = document.createElement("li");
          li.innerHTML = `${taskText} <span class="delete-btn">Delete</span>`;
          taskList.appendChild(li);
          taskInput.value = "";

          const deleteBtn = li.querySelector(".delete-btn");
          deleteBtn.addEventListener("click", function () {
              taskList.removeChild(li);
          });
      }
  });
});