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
        for(i = 0; i < this.toDos.length;  i++){
            if(this.toDos[i].completed === true){
                toggleCount++;
            }
        };
        if(toggleCount === totalTodos){
            for(i = 0; i < this.toDos.length; i++){
                this.toDos[i].completed = false;        
            }
        }
        else{
            for(i = 0; i < this.toDos.length; i++){
                this.toDos[i].completed = true;
            }
        };
    }
};

//CONNECT FUNCTIONALITY TO BUTTONS

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
    deleteTodo: function(){
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        toDoList.deleteToDo(deleteTodoPositionInput.value - 1);
        deleteTodoPositionInput.value = "";
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
        for(i = 0; i < toDoList.toDos.length; i++){
            var todoLi = document.createElement("li");
            if(toDoList.toDos[i].completed === true){
                todoLi.textContent = "(X) " + toDoList.toDos[i].toDoText;
            }
            else{
                todoLi.textContent = "( ) " + toDoList.toDos[i].toDoText;
            };
            todoUl.appendChild(todoLi);
        };
    }
};


