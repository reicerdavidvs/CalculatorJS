//Declaración
const body = document.querySelector("body")
const theme = document.querySelector(".theme")
const sunny = document.querySelector(".sunny")
const moon = document.querySelector(".moon")
let operator = document.querySelector("#operator")
let result = document.querySelector("#result")
const buttons = document.querySelectorAll("button")
const esSimbolo = ['+', '-', '*', '/']

//Función para tema
theme.addEventListener("click", () => {
    body.classList.toggle("dark")
    sunny.classList.toggle("hidden")
    moon.classList.toggle("hidden")
})
//Funcion del ultimo caracter
function ultimoCaracter(e) {
    const ultimo = e.substring(e.length - 1) // Obtenemos el último carácter de la cadena

    // return !isNaN(parseFloat(ultimo)) && isFinite(ultimo);
    return ultimo
}


//Funcion para realizar calculos
function calcularDatos(exp) {
    try {
        if (!isNaN(ultimoCaracter(exp))) { //Sa valida si el ultimo carácter es numero
            return eval(exp)
        } else {
            if (eval(exp.slice(0, -1)) === undefined) {
                return '0'
            } else {
                return eval(exp.slice(0, -1))
            }
        }
    } catch (error) {
        return 'Error'
    }
}



//Funcion para setear resultado
function setearResultado() {
    const ope = operator.value
    if (ope === '' || ope === undefined) {
        result.value = '=0'
    }
    else {
        result.value = '=' + calcularDatos(ope)
    }
}

//Funcion para manejar el click del boton
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.textContent
        cambiarTamaño()

        if (content === "Ac") {
            operator.value = ''
        } else if (btn.id === "delete") {
            operator.value = operator.value.slice(0, -1)
        } else if (content === "=") {
            cambiarTamaño("=")
        } else {
            if (!isNaN(content) || content === '.') {
                // Si el contenido es un número o un punto decimal, se permite agregarlo sin restricciones
                operator.value += content;
            } else if (!esSimbolo.includes(ultimoCaracter(operator.value))) {
                // Si el último carácter no es un símbolo, se permite agregar el símbolo
                operator.value += content;
            }

        }
        setearResultado()
    })
})

function cambiarTamaño(e) {
    if (e === "=") {
        operator.style.fontSize = "32px"
        result.style.fontSize = "52px"
    } else {
        operator.style.fontSize = "52px"
        result.style.fontSize = "32px"
    }
}

