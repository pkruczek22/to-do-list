{
    const tasks = [
        { content: "wyrzucić śmieci", done: false },
        { content: "odrobić lekcje", done: true }
    ]

    const addTask = (taskInput) => {
        const newTask = {
            content: taskInput.value
        }

        tasks.push(newTask);
        console.log(tasks);
        render();
    }

    const deleteTask = (taskIndex) => {
        tasks.splice(taskIndex, 1)
        console.log("działa")

        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;

        render();
    }

    const bindEvents = () => {
        const doneButtons = document.querySelectorAll(".js-markDoneButton")
        const deleteButtons = document.querySelectorAll(".js-deleteTask")

        doneButtons.forEach((button, index) => {
            button.addEventListener("click", () => { toggleTaskDone(index) })
        });

        deleteButtons.forEach((button, index) => {
            button.addEventListener("click", () => { deleteTask(index) })
        })
    };

    const renderTasks = () => {
        const tasksList = document.querySelector(".js-tasksList")
        let htmlString = ""

        for (const task of tasks) {
            htmlString += `
            <li class="tasksList__item">
                <button 
                    class="tasksList__button tasksList__button--markDone js-markDoneButton"
                    >${task.done ? "✔" : ""}
                </button>
                <span 
                class="tasksList__content${task.done ? " tasksList__content--done" : ""}"
                >${task.content}
                </span>
                <button 
                class="tasksList__button tasksList__button--deleteTask js-deleteTask"
                >🗑
                </button>
            </li>`
        };

        tasksList.innerHTML = htmlString
    }

    const render = () => {
        renderTasks();
        bindEvents();
    };

    const refreshInput = (taskInput) => {
        taskInput.value = ""
        taskInput.focus()
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const taskInput = document.querySelector(".js-taskInput")

        if (taskInput.value.trim()) {
            addTask(taskInput);
            refreshInput(taskInput);
        };
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        render();

        form.addEventListener("submit", (event) => onSubmit(event))
    }

    init()
}