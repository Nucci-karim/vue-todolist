const { createApp } = Vue

  createApp({
    data() {
      return {
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            }
        
        ],
        addText: '',
        error: false,
      }
    },
    created(){

    },
    methods: {
        // creazione riga della lista 
        creaTodo(){
            if(this.addText != ''){
                // metto l'oggetto in una variabile per pusharlo 
                let task = {
                    text: this.addText,
                    done: false
                }
                this.todos.push(task);
                this.error = false
            }else {
                this.error = true
            }
        },
        // funzione per cancelare la riga con la x
        cancella(i){
            this.todos.splice(i, 1)
        },

        // per barrare gli elementi al click 
        barraElemento(i, element){
            // versione molto abbreviata e semplice 
            element.done = !element.done
            // si puo fare anche con un if ma in questo caso sarebbe un po piu lungo
        },
    },
  }).mount('#app')