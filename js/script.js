"use strict";

// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
const { createApp } = Vue;

const app = createApp({
    data(){
        return{
            ready: 'Ready',
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

    },
    computed: {

    },
    mounted(){
        console.log(this.ready)
    }
});

app.mount('#app')