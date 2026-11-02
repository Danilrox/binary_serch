// Algoritmo para encontrar un numero dado atravez de busqueda binaria
const numberTofind = 89;

function findNumber(number) {
    let min = 1;
    let max = number;
    let avarage; 
    let i = 0;

    if (number === numberTofind) {
        return "Lo encontre, tu numero es : " + number;
    } else {    
        do {
            avarage = Math.floor((min + max) / 2);
            if (avarage === numberTofind) {
                return "intento: " + i + ". Lo encontre, tu numero es : " + avarage;
            } else if(avarage < numberTofind) {
                min = avarage + 1;
                console.log("intento: " + i + ". La supocion fue demasiado baja, volviendo a intenar. supocion = " + avarage);
            } else if (avarage > numberTofind) {
                max = avarage - 1;
                console.log("intento: " + i + ". La supocion fue demasiado alta, volviendo a intentar. supocion = " + avarage);
            }
            i++;
        } while (avarage !== numberTofind) 
        
    }
    return "intento: " + i + ". Lo encontre, tu numero es : " + avarage;
}


console.log(findNumber(350));