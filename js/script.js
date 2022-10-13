{
    let tasks = [];

    const refreshInput = (newTaskElement) => {
        newTaskElement.value = "";
        newTaskElement.focus();
    };

    const addTask = (newTaskContent) => {
        tasks = [
            ...tasks,
            { content: newTaskContent },
        ];
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            { ...tasks[taskIndex], done: !tasks[taskIndex].done },
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1),
        ];
        render();
    };

    const bindTaskEvents = () => {

        const toggleDoneButtons = document.querySelectorAll(".js-toggleTaskDone");
        const removeButtons = document.querySelectorAll(".js-removeTask");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
    };

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
          <li class="list__item">
              <button class="list__button js-toggleTaskDone">
                  ${task.done ? "✔" : ""}
              </button>
              <span class="list__task ${task.done ? "list__task--done" : ""}">
                  ${task.content}
              </span>
              <button class="list__button list__button--removeTaskButton js-removeTask">
                  🗑
              </button>
          </li>
      `;
        };

        document.querySelector(".js-tasksList").innerHTML = htmlString;
    };

    const render = () => {
        renderTasks();
        bindTaskEvents();
    };

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
    
};