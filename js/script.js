//console.log("js okk");

/*
1. Targhetizzare l'elemento nel dom
2. Creo una variabile con il numero 21
3. Chieder all’utente il suo nome con un prompt e salvarlo in una variabile
4. Chiedere il suo cognome con un prompt e salvarlo in una variabile
5. Chiedere il suo colore preferito con un prompt e salvarlo in una variabile
6. Stampo la psword nella dom
*/


//Targhetizzare l'elemento nel dom

const pasword = document.getElementById("target");
 //console.log("pasword");

 //Creo una variabile con il numero 21

 const number = 21;
 //console.log("number");

 //Chieder all’utente il suo nome con un prompt e salvarlo in una variabile

 const firstName = prompt("qual'è il tuo nome?" , "Sebastian");
 //console.log("firstName");

 //Chiedere il suo cognome con un prompt e salvarlo in una variabile

 const lastName = prompt("qual'è il tuo cognome?" , "Ivaniczki");
 //console.log("lastName");

 //Chiedere il suo colore preferito con un prompt e salvarlo in una variabile

 const favColor = prompt("qual'è il tuo colore preferito?" , "nero")
 //console.log("favColor");

 pasword.innerText = `la tua pasword è: ${firstName}${lastName}${favColor}${number}`