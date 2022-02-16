let a = undefined
let b = undefined
let resp
let op


let botones = document.getElementById('botones')
let pantalla = document.getElementById('pantalla')


let uno = document.getElementById('uno').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "1"
}
let dos = document.getElementById('dos').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "2"
}
let tres = document.getElementById('tres').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "3"
}
let cuatro = document.getElementById('cuatro').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "4"
}
let cinco = document.getElementById('cinco').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "5"
}
let seis = document.getElementById('seis').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "6"
}
let siete = document.getElementById('siete').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "7"
}
let ocho = document.getElementById('ocho').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "8"
}
let nueve = document.getElementById('nueve').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "9"
}
let cero = document.getElementById('cero').onclick = (e) => {
    pantalla.textContent = pantalla.textContent + "0"
}


document.getElementById('suma').onclick = (e) => {
    
    if (a != undefined) {
        if (b != undefined) {
            resp = parseFloat(a) + parseFloat(b)
            a = undefined
            b = resp
        }
        else {
            b = pantalla.textContent
            resp = parseFloat(a) + parseFloat(b)
            a = resp
            b = undefined
        }

    }

    else {
        a = pantalla.textContent
    }
    op = '+'
    limpiar()

    console.log('a y b en suma:', a, ' ', b, ' ', resp)

}


document.getElementById('resta').onclick = (e) => {
    
    if (a != undefined) {
        if (b != undefined) {
            resp = parseFloat(a) - parseFloat(b)
            a = undefined
            b = resp
        }
        else {
            b = pantalla.textContent
            resp = parseFloat(a) - parseFloat(b)
            a = resp
            b = undefined
        }

    }

    else {
        a = pantalla.textContent
    }
    op = '-'
    limpiar()

    console.log('a y b en resta:', a, ' ', b, ' ', resp)

}



document.getElementById('multiplicacion').onclick = (e) => {
    
    if (a != undefined) {
        if (b != undefined) {
            resp = parseFloat(a) * parseFloat(b)
            a = undefined
            b = resp
        }
        else {
            b = pantalla.textContent
            resp = parseFloat(a) * parseFloat(b)
            a = resp
            b = undefined
        }

    }

    else {
        a = pantalla.textContent
    }
    op = '*'
    limpiar()

    console.log('a y b en multi:', a, ' ', b, ' ', resp)

}



document.getElementById('division').onclick = (e) => {
    
    if (a != undefined) {
        if (b != undefined && b != 0) {
            resp = parseFloat(a) / parseFloat(b)
            a = undefined
            b = resp
        }
        else {
            b = pantalla.textContent
            if(b != 0){
                resp = parseFloat(a) / parseFloat(b)
                a = resp
                b = undefined
            }
            else{
                alert('No se puede dividir por cero')
            }
        }

    }

    else {
        a = pantalla.textContent
    }
    op = '/'
    limpiar()

    console.log('a y b en div:', a, ' ', b, ' ', resp)

}



document.getElementById('igual').onclick = () => {
    if (a != undefined) {
        if (b === undefined) {
            b = pantalla.textContent
        }
    }


    console.log('a y b en rta: ', a, ' ', b)

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
            if(b != 0){
                resp = parseFloat(a) / parseFloat(b)
            }
            else alert('No se puede dividir por cero')
            break;
    }

    console.log('respuesta: ',resp)
    pantalla.textContent = resp
}



document.getElementById('clear').onclick = (e) => {
    limpiar()
    resetear()
}




limpiar = () => {
    pantalla.textContent = ''
}


resetear = () => {
    pantalla.textContent = ''
    a = undefined
    b = undefined
    op = ''
}