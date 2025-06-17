{
    let tasks = [
        { content: "wyrzucić śmieci", done: false },
        { content: "odrobić lekcje", done: true }
    ];

    let hideDoneTask = false;

    const addTask = (taskInput) => {
        tasks = [
            ...tasks,
            { content: taskInput.value.trim() }
        ]

        render();
    };

    const deleteTask = (taskIndex) => {
        tasks = [
            ...tasks.slice(0, taskIndex),
            ...tasks.slice(taskIndex + 1)
        ]

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
        ]

        render();
    }

    const hideDoneTasks = () => {
        hideDoneTask = !hideDoneTask;

        console.log(hideDoneTask)

        render()
    }

    const bindTasksEvents = () => {
        const doneButtons = document.querySelectorAll(".js-markDoneButton")
        const deleteButtons = document.querySelectorAll(".js-deleteTask")

        doneButtons.forEach((button, index) => {
            button.addEventListener("click", () => { toggleTaskDone(index) })
        });

        deleteButtons.forEach((button, index) => {
            button.addEventListener("click", () => { deleteTask(index) })
        })
    };

    const bindOptionButtonsEvents = () => {
        const hideDoneTasksButton = document.querySelector(".js-hideDoneButton")
        const markAllDoneTasksButton = document.querySelector(".js-markAllDoneButton")

        hideDoneTasksButton.addEventListener("click", hideDoneTasks)
        markAllDoneTasksButton.addEventListener("click", () => {console.log(markAllDoneTasksButton)})
    }

    const renderTasks = () => {
        const tasksList = document.querySelector(".js-tasksList")
        let htmlString = ""

        for (const task of tasks) {
            htmlString += `
            <li class="tasksList__item${hideDoneTask && task.done ? " tasksList__item--hidden" : ""}">
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
        bindTasksEvents();
        bindOptionButtonsEvents();
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