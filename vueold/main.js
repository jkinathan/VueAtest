Vue.component('task-list',{
    
    template: `
        <div>
            <task v-for="tas in tasks">{{ tas.task }}</task>
        </div>
        
        `,

    data() {
        return {
            tasks:[
                { task: 'Go to the shores', completed: true},
                { task: 'Go to the mall', completed: false},
                { task: 'Go to the farm', completed: true},
                { task: 'Go to work', completed: false},
                
            ]
        }
    },
});

Vue.component('task',{
    template: '<li><slot></slot></li>'
});





new Vue({
    
    el: '#root',

});