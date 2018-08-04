
/*
var todos = ["item 1", "item 2", "item 3", "item 4"];
function displayTodos(){
    console.log("My Todos: ", todos);
}
function addTodo(todo){
    todos.push(todo);
    displayTodos();
}
function changeTodo(itemPosition, newValue){
    todos[itemPosition] = newValue;
    displayTodos();
}
function deleteTodo(itemPosition){
    todos.splice(itemPosition, 1);
	displayTodos();
}
*/

var todoList = {
    todos: ["item 1", "item 2", "item 3"],
    displayTodos: function(){
        console.log("My Todos: ", this.todos);
    },
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(itemPosition, newValue){
        this.todos[itemPosition] = newValue;
        this.displayTodos();
    },
    deleteTodo: function(itemPosition){
        this.todos.splice(itemPosition, 1);
        this.displayTodos();
    }
};

