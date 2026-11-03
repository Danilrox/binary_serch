// Algoritmo para encontrar un numero dado atravez de busqueda binaria
const target = Number(prompt("que numero quieres que encuentre?"));


const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

function findNumber(n) {
    let min = 0;
    let max = n - 1;
    let avarage;
    let i = 0;

    while(true){
        if (max < min) {
            return "-1, target no presente en el array";
        }

        avarage = Math.floor((min + max) / 2);
        i++;

        if (primes[avarage] === target) {
            return "intento: " + i + ". Lo encontre tu numero es " + primes[avarage];
        }

        if (primes[avarage] < target) {
            min = avarage + 1;
        } else {
            max = avarage - 1;
        }
    }
}

console.log(findNumber(primes.length));