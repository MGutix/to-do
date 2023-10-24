import Todo from "./todo"

const addButton = document.getElementById('add')
let modal = document.querySelector('[data-modal]')
let submit = document.getElementById('submit')
let todoArray = [];


function openModal(){
        modal.showModal();

        //para que no queden residuos en el modal cuando haces uno nuevo
        let inputs = document.querySelectorAll('input') 
        inputs.forEach(input => {
            input.value = '';
        });
      
      
        //buscar submit
      submit.addEventListener('click', createTodo)
    
}

function createTodo(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;

    const todo = new Todo (title, description, dueDate, priority)
    todoArray.push(todo)

    console.table(todoArray)

    renderArray()
}

function renderArray() {
    let todoArea = document.getElementById('todoArea');
    //borra todo el contenido para no duplicar
    todoArea.innerHTML = ''
    
    todoArray.map((element) =>{
        let todoCard = document.createElement('div')
        todoCard.classList.add('card-body')
        todoCard.classList.add('card')
        todoArea.appendChild(todoCard)

        let cardTitle = document.createElement('h3')
        cardTitle.textContent = element.title
        cardTitle.classList.add('card-title')
        todoCard.appendChild(cardTitle)

        let cardDesc = document.createElement('p')
        cardDesc.textContent = element.description
        cardDesc.classList.add('card-text')
        todoCard.appendChild(cardDesc)

        let cardDate = document.createElement('p')
        cardDate.textContent = element.dueDate
        todoCard.appendChild(cardDate)

        let cardPriority = document.createElement('p')
        cardPriority.textContent = element.priority
        todoCard.appendChild(cardPriority)

        let cardDelete = document.createElement('button')
        cardDelete.textContent = 'Delete'
        todoCard.appendChild(cardDelete)

        cardDelete.addEventListener('click', () => {
      
            todoArray.splice(element,1);
            todoCard.remove();
            console.log(todoArray)
          })
    })
}

function toggle(){
    //event listener on button + vincular al objeto correcto
    todo.toggleIsDone()
}

addButton.addEventListener('click', () =>{openModal()})

