
const { createApp } = Vue

createApp({
    data() {
        return {
            toDo: ["pasta", "mozzarella", "limoni", "parmigiano", "verdre", "pollo"],
            done: false
        }
    },
    methods: {
        checkClick() {
            done = !done
            if (!done) {
            }
            console.log(done);
        }
    }
}).mount('#app')

