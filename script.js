window.addEventListener('load',() =>{
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listEl = document.querySelector('#tasks');

    form.addEventListener('submit',(e)=>{
    e.preventDefault();

    //To prevent creating an empity task
    const task = input.value;

        if(!task) {
            alert('Please fill out the task')
            return;
        }

    //creating divs and classes to interact with the html

    const taskEl = document.createElement("div");
    taskEl.classList.add('task');

    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add('content');
    taskContentEl.innerText = task;

    taskEl.appendChild(taskContentEl);

    listEl.appendChild(taskEl)

    })
})