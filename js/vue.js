/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.

*/
console.log('Vue ok', Vue);
Vue.config.devtools = true

const helloWorld = new Vue({
    el: '#root',
    data: {
        message: "Hello dear soon to be Dev , i'm Vuejs one of your dearest friends",
        mediaPic: 'coding.jpg',
    },
});
