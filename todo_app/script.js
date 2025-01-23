const form_todo = document.getElementById('form_todo')
const todo_list = document.getElementById('todo_list')
const data = []
form_todo.addEventListener('submit', e => {
    e.preventDefault()
    const formData =  new FormData(e.target)
    formData.forEach(val => {
        data.push(val)
        console.log(data)
    })

    fillList()
})

function fillList(){
    data.forEach(val => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('txt_todo')
        let content = document.createTextNode(val)
        newDiv.appendChild(content)
        todo_list.appendChild(newDiv)
    })
}