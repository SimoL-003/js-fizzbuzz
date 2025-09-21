// CONSEGNA:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

/*
ESECUZIONE LOGICA
    per ogni i da 1 a 100
        se i/3 da resto 0 E i/5 da resto 0
            stampo FizzBuzz
        altrimenti se solo i/3 da resto 0
            stampo Fizz
        altrimenti se solo i/5 da resto 0
            stampu Buzz
        altrimenti
            stampo il valore di i
*/

for (let i = 1; i < 101; i++) {
    let result = `${i}`;
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
    }
    else if (i % 3 === 0) {
        result = "Fizz";
    }
    else if (i % 5 === 0) {
        result = "Buzz";
    }
    console.log(result);
}