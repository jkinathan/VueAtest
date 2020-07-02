app = new Vue({
    el: '#root',   //mounting vue to our root div so that it can be used
    data: {
        tasks:[
        
            {description: "Go to the store",completed: true },
            {description: "Finish screencast",completed: false },
            {description: "Make donation",completed: false },
            {description: "Clear inbox",completed: false },
            {description: "Make dinner",completed: false },
            {description: "Clean room",completed: true },
            
        ],
        
},
methods: {
    completeme(){
        alert("hello click");
        this.tasks.completed=true;
    }
},

computed: {
    incompleteTasks() {

        return this.tasks.filter(task => ! task.completed);

    }
    
}
    
});