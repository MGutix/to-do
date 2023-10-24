import createTodo from "./todo"


const addButton = document.getElementById('add')

addButton.addEventListener('click', createTodo('hacer compras', 'pollo', 'hoy', 1))