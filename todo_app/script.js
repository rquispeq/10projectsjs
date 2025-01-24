const form_todo = document.getElementById('form_todo')
const todo_list = document.getElementById('todo_list')
const txt_todo = document.getElementById('txt_todo')
const data = []
form_todo.addEventListener('submit', e => {
    e.preventDefault()
    const formData =  new FormData(e.target)
    formData.forEach(val => {
        data.push(val)
        txt_todo.value = ""
    })

    fillList()
})

function fillList(){
    // data.forEach(val => {
        const val = data[data.length-1]
        let newDiv = document.createElement('div')
        newDiv.classList.add('task')
        let content = document.createTextNode(val)
        newDiv.appendChild(content)
        todo_list.appendChild(newDiv)
    // })
}


// complete task

const tasks = document.getElementsByTagName("task")