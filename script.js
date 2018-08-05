//FUNCTIONALITY OBJECT

var toDoList = {
    toDos: [],
    displayToDos: function(){
        if(this.toDos.length === 0){
            console.log("List is Empty!");
        }
        else{
            console.log("My To-Do's: ");
            for(i = 0; i < this.toDos.length; i++){
                if(this.toDos[i].completed === false){
                    completedChecker = "( )";
                }
                else{
                    completedChecker = "( X )";
                }
                console.log(this.toDos[i].toDoText, completedChecker);
            }
        }
    },
    addToDo: function(toDoText){
        if(toDoText > " "){
            this.toDos.push({
                toDoText: toDoText,
                completed: false,
            });
        };
        this.displayToDos();
    },
    changeToDo: function(position, toDoText){
        if(position > -1 && toDoText > " "){
            this.toDos[position].toDoText = toDoText;
            this.displayToDos();
        };
    },
    deleteToDo: function(itemPosition){
        if(itemPosition > -1){
            this.toDos.splice(itemPosition, 1);
            this.displayToDos();
        }
    },
    toggleCompleted: function(position){
        if(position > -1){
            this.toDos[position].completed = !this.toDos[position].completed;
            this.displayToDos();
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

        this.displayToDos();
    }
};

var handlers = {
    displayTodo: function() {
        toDoList.displayToDos();
    },
    addToDo: function(){
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        toDoList.addToDo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    changeTodo: function(){
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        toDoList.changeToDo(changeTodoPositionInput.value - 1, changeTodoTextInput.value);
        changeTodoTextInput.value = "";
        changeTodoPositionInput.value = "";
    },
    deleteTodo: function(){
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        toDoList.deleteToDo(deleteTodoPositionInput.value - 1);
        deleteTodoPositionInput.value = "";
    },
    toggleTodo: function(){
        var toggleTodoPositionInput = document.getElementById("toggleTodoPosition");
        toDoList.toggleCompleted(toggleTodoPositionInput.value - 1);
        toggleTodoPositionInput.value = "";
    },
    toggleAll: function(){
        toDoList.toggleAll();
    },
};