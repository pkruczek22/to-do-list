{
  const tasks = [
    {
      content: "pójść do pracy",
      done: true
    },
    {
      content: "zrobić zakupy"
    }
  ]

  const addTask = (taskInput) => {
    const taskContent = taskInput.value.trim()
    tasks.push({ content: taskContent })
  }

  const deleteTask = (taskIndex) => {
    tasks.splice(taskIndex, 1)
    render()
  }

  const refreshInput = (taskInput) => {
    taskInput.value = ""
    taskInput.focus()
  }

  const bindTaskEvents = () => {
    const deleteButtons = document.querySelectorAll(".js-deleteButton")

    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        deleteTask(index);
      })
    })
  }

  const render = () => {

    const tasksList = document.querySelector(".js-tasksList")
    let htmlString = ""

    tasks.forEach((task, index) => {
      htmlString += `
      <li class="tasksList__item">
        <button class="tasksList__button tasksList__button--markDone">✔</button>
        <span>${task.content}</span>
        <button class="tasksList__button tasksList__button--deleteTask js-deleteButton">🗑</button>
      </li>
      `
    });

    tasksList.innerHTML = htmlString

    bindTaskEvents()
  }

  const onSubmit = (event) => {
    const taskInput = document.querySelector(".js-taskContent")

    event.preventDefault();
    addTask(taskInput)
    refreshInput(taskInput)
    render();
  };


  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onSubmit);
  };

  init();
}