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
        this.toDos.push({
            toDoText: toDoText,
            completed: false,
        });
        this.displayToDos();
    },

    changeToDo: function(position, toDoText){
        this.toDos[position].toDoText = toDoText;
        this.displayToDos();
    },

    deleteToDo: function(itemPosition){
        this.toDos.splice(itemPosition, 1);
        this.displayToDos();
    },

    toggleCompleted: function(position){
        this.toDos[position].completed = !this.toDos[position].completed;
        this.displayToDos();
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
