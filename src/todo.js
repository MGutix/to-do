class Todo {
    constructor(title, description, dueDate, priority, project) {

        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.project = project

        //empieza en false si le hacen click pasa a true y se va a completados
        this.isDone = false
    }

    edit() {
        //cambiar
        console.log('im editting')
    }
    delete() {
        //cambiar
        console.log('im deleteting')
    }

    toggleIsDone() {
        if (this.isDone === false) {
            this.isDone = true
        } else {
            this.isDone = false
        }
        //cambiar
        console.log(`isDone toggled to ${this.isDone}`)
    }
}

export default Todo;