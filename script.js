{
  let tasks = [
    { content: "Wynieść śmieci", done: false },
    { content: "Zrobić zakupy", done: true },
  ]

  const addTask = (taskInput) => {
    tasks = [
      ...tasks,
      { content: taskInput.value.trim() }
    ];

    render();
  };

  const deleteTask = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      ...tasks.slice(taskIndex + 1)
    ];

    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks = [
      ...tasks.slice(0, taskIndex),
      {
        ...tasks[taskIndex],
        done: !tasks[taskIndex].done
      },
      ...tasks.slice(taskIndex + 1)
    ];

    render();
  };

  const bindTaskEvents = () => {
    const deleteButtons = document.querySelectorAll(".js-deleteButton")
    const markDoneButtons = document.querySelectorAll(".js-markDoneButton")

    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        deleteTask(index);
      });
    });

    markDoneButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        toggleTaskDone(index)
      });
    });
  };

  const markAllTasksDone = () => {
    tasks = tasks.map(task => ({
      ...task,
      done: true,
    }));
    render();
  }

  const bindOptionButtonsEvent = () => {
    const hideDoneButton = document.querySelector(".js-hideDoneButton")
    const markAllDoneButton = document.querySelector(".js-markAllDoneButton")

    hideDoneButton.addEventListener("click", () => console.log("Siema"))

    markAllDoneButton.addEventListener("click", () => {
      markAllTasksDone();
    });
  };
  
  const renderTasks = () => {
    const tasksList = document.querySelector(".js-tasksList")
    let htmlString = ""
    
    for (const task of tasks) {
      htmlString += `
      <li class="tasksList__item">
        <button 
        class="tasksList__button tasksList__button--markDone js-markDoneButton"
        >
        ${task.done ? "✔" : ""}
        </button>
        <span 
        class="tasksList__content js-taskContent 
        ${task.done ? "tasksList__content--done" : ""}"
        >
        ${task.content}
        </span>
        <button 
        class="tasksList__button tasksList__button--deleteTask js-deleteButton"
        >
        🗑
        </button>
        </li>
        `
      };

      tasksList.innerHTML = htmlString
    };

    const renderOptionButtons = () => {
      const buttonsContainer = document.querySelector(".js-buttonsContainer")
      let htmlString = ""
      if (tasks.length !== 0) {
        htmlString += `
        <button 
        class="optionButton js-hideDoneButton"
        >
        Ukryj ukończone
        </button>
        <button 
        class="optionButton js-markAllDoneButton" 
        ${tasks.every(({ done }) => done === true) ? "disabled" : ""}
        >
        Ukończ wszystkie
        </button>
        `
        //pokaż ukończone
        
        buttonsContainer.innerHTML = htmlString
      }
    }
    
    const render = () => {
      renderTasks();
    bindTaskEvents();
    renderOptionButtons();
    bindOptionButtonsEvent();
  }
  
    const refreshInput = (taskInput) => {
      taskInput.value = ""
      taskInput.focus()
    };
  
  const onSubmit = (event) => {
    event.preventDefault();
    const taskInput = document.querySelector(".js-taskInput")

    if (taskInput.value.trim() !== "") {
      addTask(taskInput)
      refreshInput(taskInput)
    };
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onSubmit);
  };

  init();
};