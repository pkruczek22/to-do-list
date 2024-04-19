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

    const refreshInput = (taskInput) => {
        taskInput.value = ""
        taskInput.focus()
    }
    
    const render = () => {
        const tasksList = document.querySelector(".js-tasksList")
        let htmlString = ""

        tasks.forEach((task, index) => {
            htmlString += `
                <li class="tasksList__item">
                    <button class="tasksList__button tasksList__button--markDone">✔</button>
                    <span>${task.content}</span>
                    <button class="tasksList__button tasksList__button--deleteTask">🗑</button>
                </li>
            `
        });
        console.log(htmlString)
        tasksList.innerHTML = htmlString
    }

    const onSubmit = (event) => {
        const taskInput = document.querySelector(".js-taskContent")

        event.preventDefault();
        addTask(taskInput)
        refreshInput(taskInput)
        
        render();
    };


    const init = () => {
        const form = document.querySelector(".js-form");
        render();
        form.addEventListener("submit", onSubmit);
    };

    init();
}