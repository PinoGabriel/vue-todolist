
const { createApp } = Vue

createApp({
    data() {
        return {
            toDo: [
                {
                    testo: "pasta", done:false
                }, {
                    testo: "mozzarella", done:false
                }, {
                    testo: "limoni", done:false
                }, {
                    testo: "verdure", done:false
                }, {
                    testo: "carne", done:false
                }
            ],
        }
    },
    methods: {
        checkClick(i) {
            this.toDo[i].done = !this.toDo[i].done    
        },
    }
}).mount('#app')

