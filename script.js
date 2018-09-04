//FUNCTIONALITY OBJECT

var toDoList = {
    toDos: [],
    addToDo: function(toDoText){
        if(toDoText > " "){
            this.toDos.push({
                toDoText: toDoText,
                completed: false,
            });
        };
    },
    changeToDo: function(position, toDoText){
        if(position > -1 && toDoText > " "){
            this.toDos[position].toDoText = toDoText;
        };
    },
    deleteToDo: function(itemPosition){
        if(itemPosition > -1){
            this.toDos.splice(itemPosition, 1);
        }
    },
    toggleCompleted: function(position){
        if(position > -1){
            this.toDos[position].completed = !this.toDos[position].completed;
        }
    },
    toggleAll: function(){
        toggleCount = 0;
        totalTodos = this.toDos.length;
        this.toDos.forEach(function(todo){
            if(todo.completed === true){
                toggleCount++;
            }
        });
        this.toDos.forEach(function(todo){
            if(toggleCount == totalTodos){
                todo.completed = false;
            }
            else{
                todo.completed = true;
            }
        });
    }
};

//CONNECT FUNCTIONALITY TO BUTTON

var handlers = {
    addToDo: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        toDoList.addToDo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function(){
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        toDoList.changeToDo(changeTodoPositionInput.value - 1, changeTodoTextInput.value);
        changeTodoTextInput.value = "";
        changeTodoPositionInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position){
        toDoList.deleteToDo(position);
        view.displayTodos();
    },
    toggleTodo: function(){
        var toggleTodoPositionInput = document.getElementById("toggleTodoPosition");
        toDoList.toggleCompleted(toggleTodoPositionInput.value - 1);
        toggleTodoPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function(){
        toDoList.toggleAll();
        view.displayTodos();
    },
};


//DISPLAY VISIBLE USER OUTPUT

var view = {
    displayTodos: function(){
        var todoUl = document.getElementById("ul");
        todoUl.innerHTML = "";
        toDoList.toDos.forEach(function(todo, position){
            var todoLi = document.createElement("li");
            if(todo.completed === true){
                todoLi.textContent = "(X) " + todo.toDoText;
            }
            else{
                todoLi.textContent = "( ) " + todo.toDoText;
            };
            todoLi.id = position;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventListeners: function(){
        var todosUl = document.querySelector("ul");
        todosUl.addEventListener("click", function(event){
            var elementClicked = event.target;
            if(elementClicked.className === "deleteButton"){
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            };
        });
    }

};

view.setUpEventListeners();


