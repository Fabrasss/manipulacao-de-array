let numeros = [10, 20, 30, 0,]

const newArray = numeros.filter(isBigEnough)

function isBigEnough(value, index, array) {
    return value >= 20;
}

console.log(newArray)