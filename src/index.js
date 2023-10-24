import createTodo from "./todo"

let todoArray = [];


const addButton = document.getElementById('add')

addButton.addEventListener('click', ()=>{
    //agregar modal que pide info
    //pasar info como parametros a la fabrica

    const todo = createTodo ('hacer compras', 'pollo', 'hoy', 1)

    console.log(todo)
    todo.edit()
    todo.delete()

    todoArray.push(todo)

    console.log(todoArray)
})

