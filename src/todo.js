function createTodo (title, description, dueDate, priority) {
    return {    
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,

        //empieza en false, si le hacen click pasa a true y se va a completados
        isDone: false,

        //methods
        edit:function(){
            //cambiar
            console.log('im editting')
        },
        delete:function(){
            //cambiar
            console.log('im deleteting')
        },
    }

    
  }

  
/*const todo1 = createTodo ('hacer compras', 'pollo', 'hoy', 1)

console.log(todo1)
todo1.edit()
todo1.delete()*/

export default createTodo;