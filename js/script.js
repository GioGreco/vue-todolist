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
                done: false,
                readyToLeave: false,
            },
            toDoList: [],
            ufo: './img/ufo.png',
            canAdd: false,
            // readyToLeave: false,
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
        },
        showInputs(){
            this.canAdd = true;
        },
        hideInputs(){
            this.canAdd = false;
        },
        completeTask(id){
            const currentTask = this.toDoList.filter(toDo => toDo.id == id);
            console.log(currentTask[0].done);
            currentTask[0].done = !currentTask[0].done;
            console.log(currentTask[0].done);
        },
        readyLeave(id){
            const currentTask = this.toDoList.filter(toDo => toDo.id == id);
            currentTask[0].readyToLeave = true;
        },
        notReadyLeave(id){
            const currentTask = this.toDoList.filter(toDo => toDo.id == id);
            currentTask[0].readyToLeave = false;
        }
    },
    computed: {
    },
    mounted(){
    }
});

app.mount('#app')