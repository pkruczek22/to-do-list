{
    const tasks = [{ content: "wyrzucić śmieci", done: false }]

    const render = () => {
        const tasksList = document.querySelector(".js-tasksList")
        let htmlString = ""

        for(const task of tasks) {
            htmlString += `
            <li class="tasksList__item">
                <span>${task.content}</span>
            </li>`
        }

        tasksList.innerHTML = htmlString
    }

    const addNewTask = (taskInput) => {
        const newTask = {
            content: taskInput.value
        }

        tasks.push(newTask)
        console.log(tasks)
        render()
    }

    const onSubmit = (event) => {
        const taskInput = document.querySelector(".js-taskInput")

        event.preventDefault();
        console.log(taskInput.value)
        addNewTask(taskInput)
        taskInput.value = ""
        taskInput.focus()
    }

    const init = () => {
        const form = document.querySelector(".js-form");
        render()

        form.addEventListener("submit", (event) => onSubmit(event))
    }

    init()
}