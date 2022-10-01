{
  const tasks = [];

  const handleButtonEvents = () => {

    const toggleDoneButtons = document.querySelectorAll(".js-toggleTaskDone");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });

    const removeButtons = document.querySelectorAll(".js-removeTask");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const addTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <div class="list__container">
            <button class=" list__button js-toggleTaskDone">
            ${task.done ? "✔" : ""}
            </button>
            <li class="list__task ${task.done ? "list__task--done" : ""}">
            ${task.content}
            </li>
            <button class="list__button list__button--removeTaskButton js-removeTask">🗑</button>
            </div>
            `;
    };

    document.querySelector(".js-tasksList").innerHTML = htmlString;

    handleButtonEvents();
  };

  const refreshInput = (newTaskElement) => {
    newTaskElement.value = "";
    newTaskElement.focus();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskElement = document.querySelector(".js-newTask");
    const newTaskContent = newTaskElement.value.trim();

    if (newTaskContent === "") {
      return;
    };

    addTask(newTaskContent);
    refreshInput(newTaskElement);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);

  };

  init();
}