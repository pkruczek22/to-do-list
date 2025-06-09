{
    const tasks = [
        { content: "wyrzucić śmieci", done: false },
        { content: "odrobić lekcje", done: true }
    ]

    const toggleTaskDone = (task) => {
        tasks[task].done = !tasks[task].done;

        render();
    }

    const bindEvents = () => {
        const doneButtons = document.querySelectorAll(".js-markDoneButton")
        
        doneButtons.forEach((button, index) => {
            button.addEventListener("click", () => {toggleTaskDone(index)})
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
                    >${task.done? "✔" : ""}
                </button>
                <span 
                class="tasksList__content${task.done? " tasksList__content--done" : ""}"
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

    const addNewTask = (taskInput) => {
        const newTask = {
            content: taskInput.value
        }

        tasks.push(newTask);
        console.log(tasks);
        render();
    }

    const onSubmit = (event) => {
        const taskInput = document.querySelector(".js-taskInput")

        event.preventDefault();
        console.log(taskInput.value)
        addNewTask(taskInput)
        taskInput.value = ""
        taskInput.focus()
    }

    const render = () => {
        renderTasks();
        bindEvents();
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        render();

        form.addEventListener("submit", (event) => onSubmit(event))
    }

    init()
}