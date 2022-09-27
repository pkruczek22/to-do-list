{
  const tasks = [];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li ${task.done ? " class=\"list__doneTask\"" : ""}>
            ${task.content}
            </li>
            <button class="js-toggleTaskDone">Zrobione</button>
            <button class="js-removeTask">Usuń zadanie</button>
            `;
    };

    document.querySelector(".js-tasksList").innerHTML = htmlString;


    const checkButtons = document.querySelectorAll(".js-toggleTaskDone");

    checkButtons.forEach((checkButton, index) => {
      checkButton.addEventListener("click", () => {
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