
const { createApp } = Vue

createApp({
    data() {
        return {
            toDo: [
                {
                    testo: "pasta", done:false
                }, 
                {
                    testo: "mozzarella", done:false
                }, 
                {
                    testo: "limoni", done:false
                }, 
                {
                    testo: "verdure", done:false
                }, 
                {
                    testo: "carne", done:false
                }
            ],
            nuovoValore: ""
        }
    },
    methods: {
        checkClick(i) {
            this.toDo[i].done = !this.toDo[i].done    
        },
        removeText(i) {
            this.toDo.splice(i, 1)
        },
        addButton(){
            if (this.toDo.push({testo: this.nuovoValore, done:false})) {
                this.nuovoValore = ""
            }
        },
    }
}).mount('#app')

