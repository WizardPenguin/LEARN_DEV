console.log("working");

const form = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("form submitted");
    const todoText = todoInput.value.trim();
    if(!todoText) 
        return;
    console.log(todoText);
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-list");
    newTodo.innerHTML = `<ul class = 'todo-item'>${todoText}
        <div class="buttons">
            <button class="btn btn-done">Done</button>
            <button class="btn btn-delete">Delete</button>
        </div>
    </ul>`;
    todoList.appendChild(newTodo);
    todoInput.value = "";
})

todoList.addEventListener("click", e => {
    if(e.target.classList.contains("btn-done")){
        console.log("done button clicked");
        e.target.parentElement.parentElement.style.textDecoration = "line-through";
    }
    else if(e.target.classList.contains("btn-delete")) {
        console.log("delete button clicked");
        e.target.parentElement.parentElement.remove();
    }
})

##### issues faced 
### gap used in flex doesn't erase when we remove element 
### text decoration is also going on to button's not able to delete