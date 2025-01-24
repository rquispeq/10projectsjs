const form_todo = document.getElementById("form_todo");
const todo_list = document.getElementById("todo_list");
const txt_todo = document.getElementById("txt_todo");
const data = [];
form_todo.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.forEach((val) => {
        data.push(val);
        txt_todo.value = "";
    });

    fillList();
});

function fillList() {
    // data.forEach(val => {
    const val = data[data.length - 1];
    let newTask = document.createElement("div");
    newTask.classList.add("task");
    let content = document.createTextNode(val);
    newTask.appendChild(content);
    todo_list.appendChild(newTask);
    // })
    featureToggleTask(newTask);
    functionRemoveTask(newTask);
}

// complete task

const featureToggleTask = task => {
    task.addEventListener("click", (e) => {
        task.classList.toggle("done");
    });
};

const functionRemoveTask = task =>{
    task.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        task.remove()
    });
}