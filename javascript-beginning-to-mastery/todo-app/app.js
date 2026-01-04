let todo = [];

const addTodo = (task) => {
    todo.push({task : task, complated : false});
}

while(true){
    let action = prompt("What do you want to do? (add, list, delete, exit)");

    if(action === "add"){
        let task = prompt("Enter your task : ");
        addTodo(task);
    }
    else if(action === "list") {
        console.log("Your Todo List:");
        todo.forEach((item,index) => {
            console.log(`${index + 1}. [${item.complated ? 'x' : ' '}] ${item.task}`);
        })
    }
    else if(action == "quit"){
        console.log("Exitting")
        break;
    }
    else if(action == "delete") {
        let index = prompt("Enter the index of the task to delete");
        todo.splice(index - 1, 1);
    }
    else {
        console.log("Invalid action. Please try again.");
    }
}