// const suma = (numero1,numero2) => {
//     if(!numero1 || !numero2 ) return 0
//     if(typeof numero1 !== "number" || typeof numero2 !== 'number') return null
//     const total = numero1 + numero2
//     return total
// }

// const suma = (...numeros) => {
//     //     if(!numero1 || !numero2 ) return 0
//     if (numeros.length === 0) return 0

//     let validInput = true
//     for (let i = 0; i < numeros.length && validInput; i++){
//         if (typeof numeros [i] !== 'number') {
//             validInput = false
//         }
//     }
//     if(!validInput) return null

//     let result = 0
//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i]
//     }
//     return result
// }

// [2, 3, 3]
const suma = (...numeros) => {
    if (numeros.length === 0) return 0
    if (!numeros.every(numero => typeof numero === 'number')) return null
    return numeros.reduce((sumaTotal, numero) => sumaTotal + numero, 0)
}

let testsPasados = 0
let cantidadTest = 4

console.log('Test 1: la funcion debe devolver null si algún parámetro es no numérico');
let resultTest1 = suma("2", 2)
if (resultTest1 === null){
    console.log('Test 1 pasó')
    testsPasados++
}else console.log(`Test 1 no pasó, se recibió ${typeof resultTest1}, pero se esperaban null`);
console.log('----------------------------------');

console.log('Test 2: la funcion debe devolver 0 si no se pasó ningún parámetro');
let resultTest2 = suma()
if (resultTest2 === 0){
    console.log('Test 2 pasó')
    testsPasados++
}else console.log(`Test 2 no pasó, se recibió ${resultTest2} pero se esperaba 0`);
console.log('----------------------------------');

console.log('Test 3: la funcion debe resolver la suma correctamente');
let resultTest3 = suma(3, 2)
if (resultTest3 === 5){
    console.log('Test 3 pasó')
    testsPasados++
}else console.log(`Test 3 no pasó, se recibió ${resultTest3}, pero se esperaban 5`);
console.log('----------------------------------');

console.log('Test 4: la funcion debe resolver cualquier cantidad de números');
let resultTest4 = suma(1, 2, 3, 4, 5)
if (resultTest4 === 15){
    console.log('Test 4 pasó')
    testsPasados++
}else console.log(`Test 4 no pasó, se recibió ${resultTest4}, pero se esperaban 15`);
console.log('----------------------------------');

if(testsPasados === cantidadTest) console.log('Todos los test pasaron correctamente');
else console.log(`Se pasó ${testsPasados}, de un total de ${cantidadTest}`)