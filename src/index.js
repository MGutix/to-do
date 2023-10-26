import Todo from "./todo"
import './styles/style.css'

const addButton = document.getElementById('add')
let modal = document.querySelector('[data-modal]')
let submit = document.getElementById('submit')
let modalEdit = document.querySelector('[data-modalEdit]')
let submitEdit = document.getElementById('submitEdit')
let todoArray = [];

let projectList = ['Default']
const projectArea = document.getElementById('projectArea')
const addProjectInput = document.getElementById('addProjectInput')
const addProjectBtn = document.getElementById('addProjectBtn')

addProjectBtn.addEventListener('click', () =>{
    projectList.push(addProjectInput.value)
    renderProjects()
    addProjectInput.value = ''
})

function renderProjects() {
    projectArea.innerHTML = ''
    projectList.map((element) => {
        const projectElement = document.createElement('li')
        projectElement.classList.add('myProj')//
        projectElement.textContent = element
        projectArea.appendChild(projectElement)
    })
}


function openModal(){
        modal.showModal();

        //para que no queden residuos en el modal cuando haces uno nuevo
        let inputs = document.querySelectorAll('input') 
        inputs.forEach(input => {
            input.value = '';
        });
      
      
        
        submit.addEventListener('click', createTodo)
    
}

function createTodo(){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let priority = document.getElementById('priority').value;
    let project = document.getElementById('projects').value;

    const todo = new Todo (title, description, dueDate, priority, project);
    todoArray.push(todo)

    console.log(`Dentro de createTodo`)
    console.table(todoArray)

    renderArray()
}

function openEdit(objectTodo){
    modalEdit.showModal();

    //chequear que aparezca la data del todo
  
    submitEdit.removeEventListener('click', editTodo);
    submitEdit.addEventListener('click', () => {
        editTodo(objectTodo)
    })

}

function editTodo(objectTodo){
    let titleEdit = document.getElementById('titleEdit').value;
    let descriptionEdit = document.getElementById('descriptionEdit').value;
    let dueDateEdit = document.getElementById('dueDateEdit').value;
    let priorityEdit = document.getElementById('priorityEdit').value;
    let projectEdit = document.getElementById('projectsEdit').value;
    


    objectTodo.title = titleEdit
    objectTodo.description = descriptionEdit
    objectTodo.dueDate = dueDateEdit
    objectTodo.priority = priorityEdit
    objectTodo.project = projectEdit

    console.log(`Dentro de editTodo`)
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


        let cardEdit = document.createElement('button')
        cardEdit.textContent = 'Edit'
        cardEdit.classList.add('btn')
        cardEdit.classList.add('btn-warning')
        todoCard.appendChild(cardEdit)

        cardEdit.addEventListener('click', () => {
            console.table(element)
            openEdit(element)
        })

        let cardDelete = document.createElement('button')
        cardDelete.textContent = 'Delete'
        cardDelete.classList.add('btn')
        cardDelete.classList.add('btn-danger')
        todoCard.appendChild(cardDelete)

        cardDelete.addEventListener('click', () => {
      
            todoArray.splice(element,1);
            todoCard.remove();
            console.log('Deleted')
            console.log(todoArray)
          })


        


        //add projects + default project displayed
        //add create project

        /*
            view all projects
            view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities)
            expand a single todo to see/edit its details
            delete a todo
        */
    })
}

function toggle(){
    //event listener on button + vincular al objeto correcto
    todo.toggleIsDone()
}

addButton.addEventListener('click', () =>{openModal()})

