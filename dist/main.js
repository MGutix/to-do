/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


const addButton = document.getElementById('add')
let modal = document.querySelector('[data-modal]')
let submit = document.getElementById('submit')
let modalEdit = document.querySelector('[data-modalEdit]')
let submitEdit = document.getElementById('submitEdit')
let todoArray = [];


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

    const todo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"] (title, description, dueDate, priority, project);
    todoArray.push(todo)

    console.log(`Dentro de createTodo`)
    console.table(todoArray)

    renderArray()
}

function openEdit(objectTodo){
    modalEdit.showModal();

    //chequear que aparezca la data del todo
  
  
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

    //para que no queden residuos en el modal cuando haces uno nuevo
    // agregar que cada valor sea el valor del objeto
    


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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTs7QUFFQSxpRUFBZSxJQUFJOzs7Ozs7VUNqQ25CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw2Q0FBSTtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMENBQTBDLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuXG4gICAgICAgIC8vZW1waWV6YSBlbiBmYWxzZSBzaSBsZSBoYWNlbiBjbGljayBwYXNhIGEgdHJ1ZSB5IHNlIHZhIGEgY29tcGxldGFkb3NcbiAgICAgICAgdGhpcy5pc0RvbmUgPSBmYWxzZVxuICAgIH1cblxuICAgIGVkaXQoKSB7XG4gICAgICAgIC8vY2FtYmlhclxuICAgICAgICBjb25zb2xlLmxvZygnaW0gZWRpdHRpbmcnKVxuICAgIH1cbiAgICBkZWxldGUoKSB7XG4gICAgICAgIC8vY2FtYmlhclxuICAgICAgICBjb25zb2xlLmxvZygnaW0gZGVsZXRldGluZycpXG4gICAgfVxuXG4gICAgdG9nZ2xlSXNEb25lKCkge1xuICAgICAgICBpZiAodGhpcy5pc0RvbmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmlzRG9uZSA9IHRydWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNEb25lID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICAvL2NhbWJpYXJcbiAgICAgICAgY29uc29sZS5sb2coYGlzRG9uZSB0b2dnbGVkIHRvICR7dGhpcy5pc0RvbmV9YClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCJcblxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZCcpXG5sZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RhbF0nKVxubGV0IHN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKVxubGV0IG1vZGFsRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZGFsRWRpdF0nKVxubGV0IHN1Ym1pdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0RWRpdCcpXG5sZXQgdG9kb0FycmF5ID0gW107XG5cblxuZnVuY3Rpb24gb3Blbk1vZGFsKCl7XG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuXG4gICAgICAgIC8vcGFyYSBxdWUgbm8gcXVlZGVuIHJlc2lkdW9zIGVuIGVsIG1vZGFsIGN1YW5kbyBoYWNlcyB1bm8gbnVldm9cbiAgICAgICAgbGV0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykgXG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICBcbiAgICAgICAgXG4gICAgICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZVRvZG8pXG4gICAgXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8oKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKS52YWx1ZTtcblxuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCk7XG4gICAgdG9kb0FycmF5LnB1c2godG9kbylcblxuICAgIGNvbnNvbGUubG9nKGBEZW50cm8gZGUgY3JlYXRlVG9kb2ApXG4gICAgY29uc29sZS50YWJsZSh0b2RvQXJyYXkpXG5cbiAgICByZW5kZXJBcnJheSgpXG59XG5cbmZ1bmN0aW9uIG9wZW5FZGl0KG9iamVjdFRvZG8pe1xuICAgIG1vZGFsRWRpdC5zaG93TW9kYWwoKTtcblxuICAgIC8vY2hlcXVlYXIgcXVlIGFwYXJlemNhIGxhIGRhdGEgZGVsIHRvZG9cbiAgXG4gIFxuICAgIHN1Ym1pdEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUb2RvKG9iamVjdFRvZG8pXG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBlZGl0VG9kbyhvYmplY3RUb2RvKXtcbiAgICBsZXQgdGl0bGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlRWRpdCcpLnZhbHVlO1xuICAgIGxldCBkZXNjcmlwdGlvbkVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb25FZGl0JykudmFsdWU7XG4gICAgbGV0IGR1ZURhdGVFZGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGVFZGl0JykudmFsdWU7XG4gICAgbGV0IHByaW9yaXR5RWRpdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eUVkaXQnKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdEVkaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNFZGl0JykudmFsdWU7XG5cbiAgICAvL3BhcmEgcXVlIG5vIHF1ZWRlbiByZXNpZHVvcyBlbiBlbCBtb2RhbCBjdWFuZG8gaGFjZXMgdW5vIG51ZXZvXG4gICAgLy8gYWdyZWdhciBxdWUgY2FkYSB2YWxvciBzZWEgZWwgdmFsb3IgZGVsIG9iamV0b1xuICAgIFxuXG5cbiAgICBvYmplY3RUb2RvLnRpdGxlID0gdGl0bGVFZGl0XG4gICAgb2JqZWN0VG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uRWRpdFxuICAgIG9iamVjdFRvZG8uZHVlRGF0ZSA9IGR1ZURhdGVFZGl0XG4gICAgb2JqZWN0VG9kby5wcmlvcml0eSA9IHByaW9yaXR5RWRpdFxuICAgIG9iamVjdFRvZG8ucHJvamVjdCA9IHByb2plY3RFZGl0XG5cbiAgICBjb25zb2xlLmxvZyhgRGVudHJvIGRlIGVkaXRUb2RvYClcbiAgICBjb25zb2xlLnRhYmxlKHRvZG9BcnJheSlcblxuICAgIHJlbmRlckFycmF5KClcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXJyYXkoKSB7XG4gICAgbGV0IHRvZG9BcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9BcmVhJyk7XG4gICAgLy9ib3JyYSB0b2RvIGVsIGNvbnRlbmlkbyBwYXJhIG5vIGR1cGxpY2FyXG4gICAgdG9kb0FyZWEuaW5uZXJIVE1MID0gJydcbiAgICBcbiAgICB0b2RvQXJyYXkubWFwKChlbGVtZW50KSA9PntcbiAgICAgICAgbGV0IHRvZG9DYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZC1ib2R5JylcbiAgICAgICAgdG9kb0NhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpXG4gICAgICAgIHRvZG9BcmVhLmFwcGVuZENoaWxkKHRvZG9DYXJkKVxuXG4gICAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGVcbiAgICAgICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKVxuICAgICAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpXG5cbiAgICAgICAgbGV0IGNhcmREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNhcmREZXNjLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvblxuICAgICAgICBjYXJkRGVzYy5jbGFzc0xpc3QuYWRkKCdjYXJkLXRleHQnKVxuICAgICAgICB0b2RvQ2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzYylcblxuICAgICAgICBsZXQgY2FyZERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY2FyZERhdGUudGV4dENvbnRlbnQgPSBlbGVtZW50LmR1ZURhdGVcbiAgICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoY2FyZERhdGUpXG5cbiAgICAgICAgbGV0IGNhcmRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBjYXJkUHJpb3JpdHkudGV4dENvbnRlbnQgPSBlbGVtZW50LnByaW9yaXR5XG4gICAgICAgIHRvZG9DYXJkLmFwcGVuZENoaWxkKGNhcmRQcmlvcml0eSlcblxuXG4gICAgICAgIGxldCBjYXJkRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGNhcmRFZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnXG4gICAgICAgIGNhcmRFZGl0LmNsYXNzTGlzdC5hZGQoJ2J0bicpXG4gICAgICAgIGNhcmRFZGl0LmNsYXNzTGlzdC5hZGQoJ2J0bi13YXJuaW5nJylcbiAgICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoY2FyZEVkaXQpXG5cbiAgICAgICAgY2FyZEVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLnRhYmxlKGVsZW1lbnQpXG4gICAgICAgICAgICBvcGVuRWRpdChlbGVtZW50KVxuICAgICAgICB9KVxuXG4gICAgICAgIGxldCBjYXJkRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgY2FyZERlbGV0ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgICAgIGNhcmREZWxldGUuY2xhc3NMaXN0LmFkZCgnYnRuJylcbiAgICAgICAgY2FyZERlbGV0ZS5jbGFzc0xpc3QuYWRkKCdidG4tZGFuZ2VyJylcbiAgICAgICAgdG9kb0NhcmQuYXBwZW5kQ2hpbGQoY2FyZERlbGV0ZSlcblxuICAgICAgICBjYXJkRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgXG4gICAgICAgICAgICB0b2RvQXJyYXkuc3BsaWNlKGVsZW1lbnQsMSk7XG4gICAgICAgICAgICB0b2RvQ2FyZC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVkJylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnJheSlcbiAgICAgICAgICB9KVxuXG5cbiAgICAgICAgXG5cblxuICAgICAgICAvL2FkZCBwcm9qZWN0cyArIGRlZmF1bHQgcHJvamVjdCBkaXNwbGF5ZWRcbiAgICAgICAgLy9hZGQgY3JlYXRlIHByb2plY3RcblxuICAgICAgICAvKlxuICAgICAgICAgICAgdmlldyBhbGwgcHJvamVjdHNcbiAgICAgICAgICAgIHZpZXcgYWxsIHRvZG9zIGluIGVhY2ggcHJvamVjdCAocHJvYmFibHkganVzdCB0aGUgdGl0bGUgYW5kIGR1ZWRhdGXigKYgcGVyaGFwcyBjaGFuZ2luZyBjb2xvciBmb3IgZGlmZmVyZW50IHByaW9yaXRpZXMpXG4gICAgICAgICAgICBleHBhbmQgYSBzaW5nbGUgdG9kbyB0byBzZWUvZWRpdCBpdHMgZGV0YWlsc1xuICAgICAgICAgICAgZGVsZXRlIGEgdG9kb1xuICAgICAgICAqL1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZSgpe1xuICAgIC8vZXZlbnQgbGlzdGVuZXIgb24gYnV0dG9uICsgdmluY3VsYXIgYWwgb2JqZXRvIGNvcnJlY3RvXG4gICAgdG9kby50b2dnbGVJc0RvbmUoKVxufVxuXG5hZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntvcGVuTW9kYWwoKX0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==