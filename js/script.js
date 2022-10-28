"use strict";

// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            isValid: false,
            newTask: {
                text: '',
                done: false
            },
            toDoList: [
                {
                    text: 'Cazza la randa',
                    done: false,
                },
                {
                    text: 'Buttare spazzatura',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTask(){
            if(this.newTask.text.length >= 5){
                this.toDoList.push({...this.newTask});
                this.isValid = false;
            }
            else{
                this.isValid = true;
                setTimeout(() => {this.isValid = false}, 1500);
            }
            this.newTask.text = '';
        },
        removeTask(i){
            this.toDoList.splice(i,1);
        }
    },
    computed: {

    },
    mounted(){
    }
});

app.mount('#app')