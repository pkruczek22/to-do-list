{
  const tasks = [];

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
            <li>
            ${task.content}
            </li>
            `;
    };

    document.querySelector(".js-tasksList").innerHTML = htmlString;
  };

  const addTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

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