const arrIni1 = [9,8,2,7, 2, 3,8,2,2,2,2,9,8,2,1,3,8,4,1,8,0,8,9,2,1,4,7, 2, 'j', 3,8,2,2,2,2,2,2,4,3,2,10,9,2,2,4,3,2,10,9,8,9,8,2,7, 2, 3,8,2,2,2,2,2,2,4,3,2,10,9,7,6,14,13,20,32,25,28,13,4,3,3,3,3]
const arrIni2 = [...arrIni1]

function burbuja (arr) {
    const n = arr.length
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (arr[i] > arr[i + 1]) {
                aux = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = aux;
            }
        }
    }

    return arr
}

function posiciones() {
    const arrFin1 = []
    const arrFin2 = []
    arrFin1.push(1)
    // const arrLoc = burbuja(arrIni1)
    for (let i = 0; i < arrIni1.length - 1; i++) {
        if (arrIni1[i] > arrIni1[i-1] && arrIni1[i] !== 0 && Number.isInteger(arrIni1[i])) arrFin1.push(arrIni1[i])
        else if (arrIni1[i - 1] > arrIni1[i] && arrIni1[i] !== 0 && Number.isInteger(arrIni1[i])) arrFin2.push(arrIni1[i])
    }
    arrFin2.push(1)
    const res = {
        subida: quitarRepetidos(burbuja(arrFin1)),
        bajada: quitarRepetidos(burbuja(arrFin2).reverse())
    }
    return {
        recorrido: res.subida.concat(res.bajada),
        mayor: max(arrIni1)
    }
}

function quitarRepetidos (arr) {
    const rest = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) rest.push(arr[i])
    }
    return rest
}

function max (arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > res)
        res = arr[i]
    }
    return res
}

// function posicionesBajando() {
//     const arrFin = []
//     arrFin.push(1)
//     console.log('arrIni2')
//     console.log(arrIni2)
//     for (let i = 0; i < arrIni2.length - 1; i++) {
//         if (arrIni2[i] > arrIni2[i + 1]) {
//             arrFin.push(arrIni2[i])
//         }
//     }
//     arrFin.push(1)
//     return arrFin
// }

console.log('posiciones()')
console.log(posiciones())
// console.log('posicionesBajando()')
// console.log(posicionesBajando())