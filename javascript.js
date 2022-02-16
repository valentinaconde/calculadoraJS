let botones = document.getElementById('botones')
let pantalla = document.getElementById('pantalla')


let uno = document.getElementById('uno')
let dos = document.getElementById('dos')
let tres = document.getElementById('tres')
let cuatro = document.getElementById('cuatro')
let cinco = document.getElementById('cinco')
let seis = document.getElementById('seis')
let siete = document.getElementById('siete')
let ocho = document.getElementById('ocho')
let nueve = document.getElementById('nueve')
let cero = document.getElementById('cero')


let suma = document.getElementById('suma')
let resta = document.getElementById('resta')
let multiplicacion = document.getElementById('multiplicacion')
let division = document.getElementById('division')
let clear = document.getElementById('clear')
let igual = document.getElementById('igual')

let a 
let b 
let resp
let op

uno.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "1"
} 

dos.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "2"
} 

tres.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "3"
} 

cuatro.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "4"
} 

cinco.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "5"
} 

seis.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "6"
} 

siete.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "7"
} 

ocho.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "8"
} 

nueve.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "9"
} 

cero.onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "0"
} 





suma.onclick = (e) => {
    a = pantalla.textContent
    limpiar()
    op = '+'
}

resta.onclick = (e) => {
    a = pantalla.textContent
    op = '-'
    limpiar()
}

division.onclick = (e) => {
    a = pantalla.textContent
    op = '/'
    limpiar()
}

multiplicacion.onclick = (e) => {
    a = pantalla.textContent
    op = '*'
    limpiar()
}

igual.onclick = (e) => {
    b = pantalla.textContent
    resolver(op)
}

clear.onclick = (e) => {
    limpiar()
}


limpiar = () => {
    pantalla.textContent = ''
}


resetear = () => {
    pantalla.textContent = ''
    a = 0
    b = 0
    op = ''
}


resolver = (op) => {
        switch (op) {
            case '+':
                resp = parseFloat(a) + parseFloat(b)
                break;
            case '-':
                resp = parseFloat(a) - parseFloat(b)
                break;
            case '*':
                resp = parseFloat(a) * parseFloat(b)
                break;
            case '/':
                resp = parseFloat(a) / parseFloat(b)
                break;
        }


        resetear()
        pantalla.textContent = resp
    }



















// function mostrarPantalla() {
//     pantalla.innerHTML = ''
//     pantalla.innerHTML += `
//         <div class="numeroActual">${numActual1} ------ ${numActual2} ----- ${resp}</div>
//     `
// }


// function numero(num) {
//     if (!numActual1)
//         numActual1 = num
    
//     else numActual2 = num
//     console.log(numActual1, '-', numActual2, '-', resp)

//     mostrarPantalla(numActual1)

// }

// let op2
// function operacion(op) {
//     switch (op) {
//         case '+':
//             resp = (numActual1 + numActual2)
//             break;
//         case '-':
//             op2 = '-'
//             resp = (numActual1 - numActual2)
//             break;
//         case '*':
//             resp = (numActual1 * numActual2)
//             break;
//         case '/':
//             resp = (numActual1 / numActual2)
//             break;
//         case '=':
//             operacion('+')
//             mostrarPantalla()
//             break;
//     }
    
//     numActual1 = resp
//     console.log(numActual1, '-', numActual2, '-', resp)

// }



// function borrar(){
//     numActual1 = null
//     numActual2 = null
//     resp = 0
//     op = ''
//     mostrarPantalla(op)

// }

