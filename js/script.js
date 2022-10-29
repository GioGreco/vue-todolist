"use strict";

// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            isValid: false,
            newTask: {
                id: '',
                text: '',
                done: false
            },
            toDoList: [
        
            ]
        }
    },
    methods: {
        addTask(){
            if(this.newTask.text.length >= 5){
                const newId = randomBetween(1, 100000);
                this.newTask.id = newId;
                this.toDoList.unshift({...this.newTask});
                this.isValid = false;
            }
            else{
                this.isValid = true;
                setTimeout(() => {this.isValid = false}, 1500);
            }
            this.newTask.text = '';
            this.newTask.id = '';
        },
        removeTask(id){
            // this.toDoList.splice(i ,1);
            this.toDoList = this.toDoList.filter(toDo => toDo.id != id)
        }
    },
    computed: {

    },
    mounted(){
    }
});

app.mount('#app')