/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("ESERCIZIO 1");

const numero1 = 23;
const numero2 = 50;

if (numero2 > numero1) {
  console.log("Il numero più grande fra", numero1, "e", numero2, "è:", numero2);
} else if (numero1 > numero2) {
  console.log("Il numero più grande fra", numero1, "e", numero2, "è:", numero1);
} else {
  console.log("Il numero", numero1, "e il numero", numero2, "sono uguali!");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("ESERCIZIO 2");

if (numero1 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("ESERCIZIO 3");

if (numero2 % 5 === 0) {
  console.log("Il numero", numero2, "è divisibile per 5");
} else {
  console.log("Il numero", numero2, "non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO 4");

if (
  numero1 === 8 ||
  numero2 === 8 ||
  numero1 + numero2 === 8 ||
  numero1 - numero2 === 8 ||
  numero2 - numero1 === 8
) {
  console.log(
    "Dati i due numeri",
    numero1,
    "e",
    numero2,
    "almeno uno dei due è uguale a 8 oppure la loro somma/sottrazione è uguale a 8"
  );
} else {
  console.log(
    "Dati i due numeri",
    numero1,
    "e",
    numero2,
    "neanche uno è uguale a 8 e la loro somma/sottrazione non è uguale a 8"
  );
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("ESERCIZIO 5");

let totalShoppingCart = 100;

if (totalShoppingCart > 50) {
  console.log("Complimenti, la spedizione del tuo ordine è gratuita!");
  console.log("L'ammontare totale del tuo ordine è:", totalShoppingCart, "€");
} else {
  console.log("Il costo della spedizione del tuo ordine è: 10 €");
  console.log(
    "L'ammontare totale del tuo ordine è:",
    totalShoppingCart + 10,
    "€"
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("ESERCIZIO 6");

// calcolo lo sconto del 20 percento
scontoBlackFriday = (totalShoppingCart * 20) / 100;
totalBlackFriday = totalShoppingCart - scontoBlackFriday;

// capisco se il cliente ha diritto alla spedizione gratuita
if (totalBlackFriday > 50) {
  console.log("Complimenti, la spedizione del tuo ordine è gratuita!");
  console.log("L'ammontare totale del tuo ordine è:", totalBlackFriday, "€");
} else {
  console.log("Il costo della spedizione del tuo ordine è: 10 €");
  console.log(
    "L'ammontare totale del tuo ordine è:",
    totalBlackFriday + 10,
    "€"
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("ESERCIZIO 7");

const int1 = 1;
const int2 = 2;
const int3 = 3;

if (int1 <= int2 && int2 <= int3) {
  console.log("Le tre variabili in ordine sono:", int3, int2, int1);
} else if (int1 <= int2 && int2 >= int3) {
  console.log("Le tre variabili in ordine sono:", int2, int1, int3);
} else if (int1 >= int2 && int2 <= int3) {
  console.log("Le tre variabili in ordine sono:", int3, int1, int2);
} else if (int1 >= int2 && int2 >= int3) {
  console.log("Le tre variabili in ordine sono:", int1, int2, int3);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("ESERCIZIO 8");

const valoreFornito = 2;

if (typeof valoreFornito === "number") {
  console.log("Il valore fornito è un numero!");
} else {
  console.log("Il valore fornito non è un numero!");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 9");

if (numero2 % 2 === 0) {
  console.log("Il numero", numero2, "è pari.");
} else {
  console.log("Il numero", numero2, "è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */

console.log("ESERCIZIO 10");

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

console.log("ESERCIZIO 11");

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";

console.log(me.name, "vive a", me.city);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("ESERCIZIO 12");

delete me.lastName;

console.log("Il cognome di", me.name, "è:", me.lastName);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("ESERCIZIO 13");

me.skills.pop();
console.log(
  "L'ultimo oggetto della proprietà skills di",
  me.name,
  "è:",
  me.skills[me.skills.length - 1]
);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("ESERCIZIO 14");

const numeri = [];
let numeroDaAggiungere = 0;
console.log("Array:", numeri);

// Ho usato for anche se non lo abbiamo fatto perché lo ricordavo e sono andato a cercarlo su MDN
for (let i = 1; i < 11; i++) {
  numeroDaAggiungere++;
  numeri.push(numeroDaAggiungere);
}

console.log("Array:", numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("ESERCIZIO 15");

numeri.pop();
numeri.push(100);
console.log("Array:", numeri);
